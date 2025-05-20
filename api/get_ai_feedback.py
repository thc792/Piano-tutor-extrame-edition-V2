import os
import json
from flask import Flask, request, jsonify
# from dotenv import load_dotenv # Puoi commentare o rimuovere questa se non testi localmente
import google.generativeai as genai

# load_dotenv() # Puoi commentare o rimuovere questa

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata su Vercel!")
    # Questo è un errore di configurazione grave su Vercel
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("Chiave API Gemini configurata con successo per Vercel.")
    except Exception as e:
        print(f"Errore durante la configurazione della chiave API Gemini: {e}")
        GEMINI_API_KEY = None # Invalida la chiave se la configurazione fallisce


@app.route('/api/get_ai_feedback', methods=['POST'])
def get_ai_feedback_route():
    if not GEMINI_API_KEY: # Ricontrolla qui perché potrebbe essere fallita la configurazione
        print("Tentativo di usare l'API AI ma la chiave non è configurata correttamente.")
        return jsonify({"error": "Errore di configurazione del server AI. Contattare l'amministratore."}), 500

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Nessun dato JSON ricevuto"}), 400

        exercise_definition = data.get('exerciseDefinition')
        exercise_stats = data.get('exerciseStats')

        if not exercise_definition or not exercise_stats:
            return jsonify({"error": "Dati mancanti: 'exerciseDefinition' o 'exerciseStats' non forniti"}), 400

        # --- Costruisci il prompt per Gemini ---
        prompt_parts = [
            "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Analizza la seguente performance di un utente e fornisci un feedback costruttivo.",
            f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
            f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
            f"Tempo Totale Attivo: {exercise_stats.get('totalActiveTimeSeconds', 'N/D')} secondi",
            f"Errori Totali: {exercise_stats.get('totalErrors', 'N/D')}",
        ]
        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data and exercise_stats.get('totalErrors', 0) > 0:
            prompt_parts.append("\nDettaglio Errori (Ripetizione, Atteso MIDI, Suonato MIDI):")
            for rep_data in all_repetitions_data:
                repetition_number = rep_data.get('repetitionNumber', 'N/A')
                for error in rep_data.get('errors', []):
                    expected_midi = error.get('expectedMidiValues', ['N/D'])
                    played_midi = error.get('playedMidiValue', 'Nessuna nota')
                    expected_display = expected_midi[0] if isinstance(expected_midi, list) and expected_midi else 'N/D'
                    prompt_parts.append(f"- Rip. {repetition_number}: Atteso {expected_display}, Suonato {played_midi}")
        elif exercise_stats.get('totalErrors', 0) == 0:
             prompt_parts.append("\nL'utente non ha commesso errori registrati. Ottima esecuzione!")

        prompt_parts.append("\nPer favore, fornisci:")
        prompt_parts.append("1. Un breve commento generale sulla performance.")
        prompt_parts.append("2. Se ci sono errori, identifica possibili pattern o aree di miglioramento.")
        prompt_parts.append("3. Offri 2-3 consigli pratici e specifici per migliorare. Se non ci sono errori, suggerisci come rendere l'esercizio più sfidante o su cosa concentrarsi per perfezionare ulteriormente.")
        prompt_parts.append("4. Mantieni un tono positivo e incoraggiante. Formatta la risposta in modo leggibile, usando a-capo per separare i punti.")
        final_prompt = "\n".join(prompt_parts)
        
        # print(f"DEBUG VERCEL: Prompt inviato a Gemini: {final_prompt[:500]}...") # Logga solo una parte per brevità

        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        generation_config = genai.types.GenerationConfig() # Default config
        safety_settings=[
            {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
            {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        ]

        response = model.generate_content(
            final_prompt,
            generation_config=generation_config,
            safety_settings=safety_settings
        )
        
        ai_text_response = ""
        if response.candidates:
            if response.prompt_feedback and response.prompt_feedback.block_reason:
                print(f"DEBUG VERCEL: Prompt bloccato per: {response.prompt_feedback.block_reason_message}")
                return jsonify({"error": f"Richiesta bloccata per motivi di sicurezza del prompt: {response.prompt_feedback.block_reason_message}"}), 400

            first_candidate = response.candidates[0]
            if first_candidate.finish_reason.name == "SAFETY":
                 safety_ratings_info = ", ".join([f"{sr.category.name}: {sr.probability.name}" for sr in first_candidate.safety_ratings])
                 print(f"DEBUG VERCEL: Risposta bloccata per motivi di sicurezza. Dettagli: {safety_ratings_info}")
                 return jsonify({"error": "La risposta dell'AI è stata bloccata per motivi di sicurezza."}), 500
            
            if first_candidate.content and first_candidate.content.parts:
                ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
            else:
                ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti)."
                # print(f"DEBUG VERCEL: Candidato ricevuto ma senza parti di testo: {first_candidate}")
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                print(f"DEBUG VERCEL: Prompt bloccato (nessun candidato), motivo: {response.prompt_feedback.block_reason_message}")
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400 # Invia messaggio di blocco
             # print(f"DEBUG VERCEL: Nessun candidato nella risposta: {response}")


        # print(f"DEBUG VERCEL: Risposta dall'AI: {ai_text_response[:200]}...") # Logga solo una parte
        return jsonify({"aiFeedbackText": ai_text_response.strip()})

    except Exception as e:
        import traceback # Per un log più dettagliato dell'eccezione
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) # Stampa lo stack trace completo nei log di Vercel
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500

# Il blocco if __name__ == '__main__': può essere rimosso o lasciato,
# Vercel lo ignorerà comunque.
# if __name__ == '__main__':
#     app.run(debug=True, port=5000)