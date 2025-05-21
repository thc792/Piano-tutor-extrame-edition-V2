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
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("Chiave API Gemini configurata con successo per Vercel.")
    except Exception as e:
        print(f"Errore durante la configurazione della chiave API Gemini: {e}")
        GEMINI_API_KEY = None


@app.route('/api/get_ai_feedback', methods=['POST'])
def get_ai_feedback_route():
    if not GEMINI_API_KEY:
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
            "Sei un insegnante di pianoforte AI esperto, amichevole e incoraggiante. Analizza la seguente performance di un utente e fornisci un feedback costruttivo e dettagliato.",
            f"Esercizio: {exercise_definition.get('name', 'Sconosciuto')}",
            f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}", # Modificato "Tempo" in "Indicazione di Tempo" per chiarezza
        ]

        # Informazioni generali sulle statistiche
        prompt_parts.append(f"\nStatistiche Generali della Sessione:")
        prompt_parts.append(f"  Tempo Totale Attivo: {exercise_stats.get('totalActiveTimeSeconds', 'N/D')} secondi")
        prompt_parts.append(f"  Errori Totali (di altezza): {exercise_stats.get('totalErrors', 'N/D')}") # Specificato "di altezza"

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\nDettaglio delle Ripetizioni e Errori Commessi:")
            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                rep_duration_sec = rep_data.get('durationSeconds', 'N/A')
                num_errors_in_rep = len(rep_data.get('errors', []))
                prompt_parts.append(f"  Ripetizione {repetition_number}: Durata {rep_duration_sec}s, Errori di altezza: {num_errors_in_rep}")

                if rep_data.get('errors'):
                    for error_idx, error in enumerate(rep_data.get('errors', [])):
                        expected_midi_values = error.get('expectedMidiValues', [])
                        played_midi_value = error.get('playedMidiValue', 'Nessuna nota')
                        
                        # Converti i valori MIDI in nomi di note se possibile (funzione helper non inclusa qui per brevità)
                        # Per ora usiamo i valori MIDI grezzi
                        expected_display = ", ".join(map(str, expected_midi_values)) if expected_midi_values else 'N/D'
                        
                        # Dati di timing da aggiungere da main.js all'oggetto 'error'
                        timestamp_ms = error.get('timestamp', 0) # performance.now() al momento dell'errore
                        rep_start_time_ms = rep_data.get('startTime', 0) # performance.now() all'inizio della ripetizione
                        
                        actual_time_from_rep_start_ms_str = "N/A"
                        if timestamp_ms > 0 and rep_start_time_ms > 0 and timestamp_ms >= rep_start_time_ms:
                            actual_time_from_rep_start_ms_val = round(timestamp_ms - rep_start_time_ms)
                            actual_time_from_rep_start_ms_str = f"{actual_time_from_rep_start_ms_val}ms"

                        expected_start_tick = error.get('expectedNoteStartTick', 'N/A')
                        expected_duration_ticks = error.get('expectedNoteDurationTicks', 'N/A')
                        bpm_at_error = error.get('bpmAtTimeOfError', 'N/A') # BPM del metronomo al momento dell'errore

                        error_detail = f"    - Errore {error_idx+1}: Atteso MIDI [{expected_display}], Suonato MIDI {played_midi_value}."
                        
                        timing_info_parts = []
                        if actual_time_from_rep_start_ms_str != "N/A":
                            timing_info_parts.append(f"registrato a {actual_time_from_rep_start_ms_str} dall'inizio rip.")
                        if expected_start_tick != 'N/A':
                            timing_info_parts.append(f"tick teorico d'inizio: {expected_start_tick}")
                        if expected_duration_ticks != 'N/A':
                            timing_info_parts.append(f"durata teorica in ticks: {expected_duration_ticks}")
                        if bpm_at_error != 'N/A':
                            timing_info_parts.append(f"BPM esercizio: {bpm_at_error}")
                        
                        if timing_info_parts:
                            error_detail += f" (Info ritmiche: {'; '.join(timing_info_parts)})"
                        prompt_parts.append(error_detail)
        
        if exercise_stats.get('totalErrors', 0) == 0 and all_repetitions_data:
             prompt_parts.append("\nL'utente non ha commesso errori di altezza registrati. Ottima esecuzione!")
        elif not all_repetitions_data:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi.")


        prompt_parts.append("\n\n--- Richiesta di Feedback ---")
        prompt_parts.append("Per favore, fornisci un feedback strutturato come segue:")
        prompt_parts.append("1. **Commento Generale:** Una breve valutazione complessiva della performance dell'utente, considerando fluidità e accuratezza generale.")
        prompt_parts.append("2. **Analisi dell'Intonazione (Errori di Altezza delle Note):**")
        prompt_parts.append("   - Se ci sono stati errori di altezza (note sbagliate), basati sui 'Dettaglio Errori' forniti. Identifica eventuali pattern (es. errori consistenti su certe note, alterazioni mancate, problemi con accordi).")
        prompt_parts.append("   - Se non ci sono errori di altezza, elogia l'utente per l'accuratezza.")
        prompt_parts.append("3. **Analisi della Precisione Ritmica (Timing e Durata delle Note):**")
        prompt_parts.append("   - Questa è una parte FONDAMENTALE. Confronta i tempi di esecuzione delle note con i loro tempi e durate teoriche. Basati sulle 'Info ritmiche' fornite per ogni errore (come 'registrato a Xms', 'tick teorico d'inizio', 'durata teorica in ticks', 'BPM esercizio').")
        prompt_parts.append("   - L'utente tende a suonare le note in anticipo, in ritardo o in modo incostante rispetto al tempo teorico indicato dai ticks e BPM?")
        prompt_parts.append("   - Le durate delle note (inferite dalla successione degli eventi o dalla struttura dell'esercizio) sembrano essere rispettate (es. note tenute troppo poco, pause non rispettate)?")
        prompt_parts.append("   - Commenta l'aderenza generale al metro e al ritmo dell'esercizio.")
        prompt_parts.append("   - Se i dati di timing dettagliati sono scarsi o assenti per le note corrette, concentra l'analisi ritmica sugli errori e sulla coerenza generale del tempo nelle ripetizioni. Se i dati sono completamente assenti, indica che un'analisi ritmica dettagliata non è possibile ma offri consigli generali sul ritmo.")
        prompt_parts.append("4. **Consigli Pratici e Specifici:**")
        prompt_parts.append("   - Per l'Intonazione: Se ci sono stati errori di altezza, offri 1-2 consigli mirati (es. 'fai attenzione all'alterazione X', 'studia la forma dell'accordo Y').")
        prompt_parts.append("   - Per la Ritmica: Offri 1-2 consigli mirati per migliorare il timing e la precisione ritmica (es. 'usa il metronomo a velocità più bassa', 'conta ad alta voce', 'concentrati sulla sincronizzazione delle mani se l'esercizio lo richiede').")
        prompt_parts.append("   - Se la performance è stata molto buona (pochi o nessun errore), suggerisci come rendere l'esercizio più sfidante o su cosa concentrarsi per un ulteriore perfezionamento (es. dinamiche, fraseggio, velocità, espressività).")
        prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva, sottolineando i progressi o il potenziale, e incoraggia l'utente a continuare a esercitarsi.")
        
        prompt_parts.append("\nIstruzioni aggiuntive per la formattazione della risposta:")
        prompt_parts.append("- Sii specifico nei tuoi commenti e consigli.")
        prompt_parts.append("- Usa un linguaggio chiaro, amichevole, costruttivo e motivante.")
        prompt_parts.append("- Struttura chiaramente la risposta usando i titoli numerati forniti (1. Commento Generale, 2. Analisi dell'Intonazione, ecc.).")
        prompt_parts.append("- Usa elenchi puntati o frasi brevi all'interno di ogni sezione per una facile lettura.")
        
        final_prompt = "\n".join(prompt_parts)
        
        # print(f"DEBUG VERCEL: Prompt inviato a Gemini: {final_prompt[:1000]}...") # Logga una parte più lunga per debug

        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        
        generation_config = genai.types.GenerationConfig() 
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
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                print(f"DEBUG VERCEL: Prompt bloccato (nessun candidato), motivo: {response.prompt_feedback.block_reason_message}")
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400
        
        return jsonify({"aiFeedbackText": ai_text_response.strip()})

    except Exception as e:
        import traceback 
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)