import os
import json
from flask import Flask, request, jsonify
# from dotenv import load_dotenv # Puoi commentare o rimuovere questa se non testi localmente con .env
import google.generativeai as genai

# load_dotenv() # Puoi commentare o rimuovere questa

app = Flask(__name__)

GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    print("ATTENZIONE CRITICA: La variabile d'ambiente GEMINI_API_KEY non è impostata!")
else:
    try:
        genai.configure(api_key=GEMINI_API_KEY)
        print("Chiave API Gemini configurata con successo.")
    except Exception as e:
        print(f"Errore durante la configurazione della chiave API Gemini: {e}")
        GEMINI_API_KEY = None # Invalida la chiave se la configurazione fallisce


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
            f"Tonalità: {exercise_definition.get('keySignature', 'N/D')}, Indicazione di Tempo: {exercise_definition.get('timeSignature', 'N/D')}",
        ]
        
        # Estrai i BPM dall'esercizio (se forniti) o assumi che saranno negli eventi
        # Questa è una semplificazione; idealmente, i BPM dovrebbero essere chiaramente definiti.
        exercise_bpm_str = str(exercise_definition.get('bpm', "N/A (fare riferimento a 'bpmAtEvent' se disponibile)"))
        if exercise_bpm_str != "N/A (fare riferimento a 'bpmAtEvent' se disponibile)":
             prompt_parts.append(f"BPM di riferimento per l'esercizio: {exercise_bpm_str}")


        prompt_parts.append(f"\nStatistiche Generali della Sessione:")
        prompt_parts.append(f"  Tempo Totale Attivo: {exercise_stats.get('totalActiveTimeSeconds', 'N/D')} secondi")
        prompt_parts.append(f"  Errori Totali di Altezza Registrati (dalla vecchia lista 'errors'): {exercise_stats.get('totalErrors', 'N/D')}")

        all_repetitions_data = exercise_stats.get('allRepetitionsData', [])
        if all_repetitions_data:
            prompt_parts.append("\n--- Dettaglio Eventi Nota per Ripetizione (Analisi Ritmica Chiave) ---")
            prompt_parts.append("Istruzioni per l'analisi dei 'playedNoteEvents':")
            prompt_parts.append("1. Ogni evento in 'playedNoteEvents' rappresenta una nota MIDI suonata dall'utente.")
            prompt_parts.append("2. 'timestamp': In millisecondi (ms) dall'inizio della misurazione della performance per quella ripetizione. La differenza tra timestamp consecutivi indica l'intervallo di tempo tra gli attacchi delle note.")
            prompt_parts.append("3. 'midiValuePlayed': Il valore MIDI della nota suonata.")
            prompt_parts.append("4. 'velocity': L'intensità della nota.")
            prompt_parts.append("5. 'type': Indica la natura dell'evento:")
            prompt_parts.append("   - 'correct_match': La nota suonata corrisponde (in altezza) a una nota attesa in quel momento.")
            prompt_parts.append("   - 'incorrect_match': La nota suonata è un errore di altezza rispetto a una nota attesa in quel momento.")
            prompt_parts.append("   - 'extra_note': La nota suonata non era attesa in quel momento (es. aggiunta o suonata quando si attendeva una pausa).")
            prompt_parts.append("6. 'bpmAtEvent': (SE FORNITO) I BPM del metronomo al momento preciso dell'evento. Usalo per calcoli di durata teorica.")
            prompt_parts.append("7. 'expectedNoteInfo': (Presente se 'type' è 'correct_match' o 'incorrect_match') Dettagli sulla nota teorica che era attesa:")
            prompt_parts.append("   - 'uniqueId': Identificativo unico della nota nell'esercizio.")
            prompt_parts.append("   - 'keys': Notazione musicale testuale (es. ['c/4']).")
            prompt_parts.append("   - 'expectedMidiValues': Array dei valori MIDI teorici (es. [60] per C4, o [60, 64, 67] per un accordo di Do maggiore).")
            prompt_parts.append("   - 'startTick': Il momento teorico (in 'ticks' di VexFlow) in cui questa nota avrebbe dovuto iniziare, relativo all'inizio dell'esercizio.")
            prompt_parts.append("   - 'durationString': La durata teorica scritta della nota (es. 'q' per semiminima, '8' per croma, '8d' per croma puntata).")
            prompt_parts.append("\nIl tuo compito principale per l'analisi ritmica è usare questa sequenza di 'playedNoteEvents' per ogni ripetizione.")

            for rep_idx, rep_data in enumerate(all_repetitions_data):
                repetition_number = rep_data.get('repetitionNumber', f'N/A ({rep_idx+1})')
                rep_duration_sec = rep_data.get('durationSeconds', 'N/A')
                rep_start_time_ms = rep_data.get('startTime', 0) # Timestamp di inizio della ripetizione

                prompt_parts.append(f"\n  **Ripetizione {repetition_number}** (Durata registrata: {rep_duration_sec}s):")
                
                played_events = rep_data.get('playedNoteEvents', [])
                if played_events and len(played_events) > 0:
                    prompt_parts.append("    Eventi Nota Suonati (Timestamp relativo all'inizio della ripetizione, MIDI Suonato, Tipo, Dettagli Nota Attesa se applicabile):")
                    
                    first_event_timestamp_abs = played_events[0].get('timestamp', rep_start_time_ms) # Usa il timestamp del primo evento se disponibile
                                                                                                   # altrimenti l'inizio della ripetizione per calcolare i relativi

                    for event_idx, event in enumerate(played_events[:30]): # Mostra fino a 30 eventi nel prompt per dare un contesto sufficiente
                        # Calcola timestamp relativo all'inizio della ripetizione (o al primo evento se startTime non è preciso per gli eventi)
                        ts_abs = event.get('timestamp', 0)
                        ts_rel_to_rep_start = round(ts_abs - rep_start_time_ms) if rep_start_time_ms > 0 and ts_abs >= rep_start_time_ms else "N/A"
                        
                        expected_info_str = ""
                        if event.get('expectedNoteInfo'):
                            eni = event['expectedNoteInfo']
                            keys_display = eni.get('keys', ['N/A'])[0] if eni.get('keys') else 'N/A'
                            duration_display = eni.get('durationString', 'N/A')
                            start_tick_display = eni.get('startTick', 'N/A')
                            expected_info_str = f" (Atteso: {keys_display} [{','.join(map(str,eni.get('expectedMidiValues',[])))}] dur='{duration_display}' tick={start_tick_display})"
                        
                        bpm_at_event_str = f" BPM: {event.get('bpmAtEvent', 'N/A')}" if 'bpmAtEvent' in event else ""

                        event_line = f"      - a {ts_rel_to_rep_start}ms: MIDI {event['midiValuePlayed']} (vel: {event.get('velocity','N/A')}), Tipo: {event['type']}{bpm_at_event_str}{expected_info_str}"
                        prompt_parts.append(event_line)
                    if len(played_events) > 30:
                        prompt_parts.append(f"      ... e altri {len(played_events) - 30} eventi non mostrati qui nel prompt (ma presenti nei dati inviati).")
                else:
                    prompt_parts.append("    Nessun evento nota registrato per questa ripetizione (o l'array 'playedNoteEvents' è vuoto/mancante).")
        else:
            prompt_parts.append("\nNessun dato di ripetizione disponibile per l'analisi dettagliata degli eventi nota.")

        prompt_parts.append("\n\n--- Richiesta di Feedback Specifica ---")
        prompt_parts.append("Per favore, fornisci un feedback strutturato come segue:")
        prompt_parts.append("1. **Commento Generale:** Valutazione complessiva della performance, fluidità, e musicalità generale.")
        prompt_parts.append("2. **Analisi dell'Intonazione (Accuratezza delle Altezze):**")
        prompt_parts.append("   - Basati sui 'type' ('incorrect_match', 'extra_note') negli `playedNoteEvents` e confrontali con `expectedNoteInfo.expectedMidiValues`.")
        prompt_parts.append("   - Ci sono errori di altezza ricorrenti? Note specifiche o accordi problematici? Alterazioni mancate?")
        prompt_parts.append("   - Se l'intonazione è buona, complimentati.")
        prompt_parts.append("3. **Analisi DETTAGLIATA della Precisione Ritmica (Timing, Durate, Metro):**")
        prompt_parts.append("   - **Questa è la parte FONDAMENTALE.** Utilizza la sequenza temporale fornita da `playedNoteEvents` per ogni ripetizione.")
        prompt_parts.append("   - **Timing degli Attacchi:** Confronta i `timestamp` relativi degli eventi `correct_match` con la posizione temporale teorica derivata dai loro `expectedNoteInfo.startTick` e dal BPM di riferimento dell'esercizio (o `bpmAtEvent` se disponibile). L'utente è in anticipo, in ritardo, o preciso?")
        prompt_parts.append("   - **Durate Relative delle Note:** Analizza gli intervalli di tempo tra gli attacchi di note consecutive. Questi intervalli corrispondono alle durate teoriche implicite nelle `durationString` (es. una semiminima dovrebbe durare il doppio di una croma)?")
        prompt_parts.append("     Esempio: Se hai NotaA ('q') seguita da NotaB ('8'), l'intervallo tra il timestamp di NotaA e NotaB dovrebbe essere circa la durata di 'q'.")
        prompt_parts.append("   - **Coerenza del Tempo (Pulsazione):** L'utente mantiene una pulsazione stabile durante la ripetizione, o ci sono accelerazioni/rallentamenti ingiustificati? Cerca pattern nelle deviazioni temporali.")
        prompt_parts.append("   - **Aderenza al Metro:** L'esecuzione rispetta l'indicazione di tempo (es. `4/4`) in termini di accenti e raggruppamenti ritmici?")
        prompt_parts.append("   - **Gestione delle Pause:** (Inferenza) Se ci sono pause teoriche nell'esercizio (non esplicitamente negli eventi, ma deducibili dalla struttura dell'esercizio e dai `startTick` delle note successive), sono state rispettate o accorciate/allungate?")
        prompt_parts.append("   - **Sincronizzazione (per Accordi):** Se `expectedNoteInfo.expectedMidiValues` indica un accordo, i `timestamp` delle note componenti (se registrate come eventi separati in rapida successione) sono vicini, indicando una buona simultaneità?")
        prompt_parts.append("   - Se i dati di timing sono scarsi o una conversione precisa in ms è difficile per mancanza di BPM chiari, concentra l'analisi sulla coerenza relativa e sui pattern evidenti.")
        prompt_parts.append("4. **Consigli Pratici e Specifici:**")
        prompt_parts.append("   - Per l'Intonazione: 1-2 consigli mirati.")
        prompt_parts.append("   - Per la Ritmica: 1-2 consigli mirati (es. 'usa il metronomo più lentamente su questa sezione', 'concentrati sul contare le suddivisioni per la nota X', 'presta attenzione alla durata della nota Y prima di passare alla successiva').")
        prompt_parts.append("   - Se la performance è buona, suggerimenti per il perfezionamento (dinamiche, articolazione, espressività).")
        prompt_parts.append("5. **Incoraggiamento Finale:** Concludi con una nota positiva.")
        
        prompt_parts.append("\nIstruzioni Aggiuntive per l'AI sull'Analisi Ritmica:")
        prompt_parts.append("- Per convertire `startTick` o `durationString` in millisecondi teorici, usa i BPM. Formula base: `ms_per_beat = 60000 / BPM`.")
        prompt_parts.append("- Il `timeSignature` (es. 4/4) definisce quale valore di nota riceve un beat (es. in 4/4, la semiminima 'q' è 1 beat).")
        prompt_parts.append("- Da `durationString` (es. 'q', '8', 'h', 'w', '8d', '16', ecc.) e `timeSignature`, determina quanti beat (o frazioni di beat) dura teoricamente la nota.")
        prompt_parts.append("- Durata teorica in ms = `(numero_di_beat_della_nota) * ms_per_beat`.")
        prompt_parts.append("- Posizione teorica in ms (dall'inizio) = `(startTick / ticks_per_beat_vexflow) * ms_per_beat`. (VexFlow usa RESOLUTION/4 ticks per una semiminima, cioè 4096/4 = 1024 ticks per beat in 4/4). Questo calcolo può essere complesso, quindi puoi anche concentrarti sulle durate relative tra le note se il calcolo assoluto dei tick è difficile da implementare per te.")
        prompt_parts.append("- Sii specifico e fornisci esempi tratti dagli `playedNoteEvents` se trovi discrepanze ritmiche significative.")
        prompt_parts.append("- Mantieni un tono amichevole, costruttivo e didattico.")
        
        final_prompt = "\n".join(prompt_parts)
        
        # print(f"DEBUG VERCEL: Prompt inviato a Gemini (prime 2000 chars): {final_prompt[:2000]}...")

        model = genai.GenerativeModel('gemini-1.5-flash-latest') # o il modello che preferisci
        
        generation_config = genai.types.GenerationConfig(
            # temperature=0.7, # Esempio, puoi aggiustare
            # max_output_tokens=1500 # Esempio, adatta ai tuoi bisogni e limiti del modello
        )
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
                # print(f"DEBUG VERCEL: Prompt bloccato per: {response.prompt_feedback.block_reason_message}")
                return jsonify({"error": f"Richiesta bloccata per motivi di sicurezza del prompt: {response.prompt_feedback.block_reason_message}"}), 400

            first_candidate = response.candidates[0]
            if first_candidate.finish_reason.name == "SAFETY":
                 safety_ratings_info = ", ".join([f"{sr.category.name}: {sr.probability.name}" for sr in first_candidate.safety_ratings])
                 # print(f"DEBUG VERCEL: Risposta bloccata per motivi di sicurezza. Dettagli: {safety_ratings_info}")
                 return jsonify({"error": "La risposta dell'AI è stata bloccata per motivi di sicurezza."}), 500
            
            if first_candidate.content and first_candidate.content.parts:
                ai_text_response = "".join(part.text for part in first_candidate.content.parts if hasattr(part, 'text'))
            else:
                ai_text_response = "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti o contenuto non valido)."
                # print(f"DEBUG VERCEL: Candidato ricevuto ma senza parti di testo o contenuto non valido: {first_candidate}")
        else:
             ai_text_response = "L'AI non ha generato una risposta (nessun candidato)."
             if response.prompt_feedback and response.prompt_feedback.block_reason:
                # print(f"DEBUG VERCEL: Prompt bloccato (nessun candidato), motivo: {response.prompt_feedback.block_reason_message}")
                ai_text_response = f"Richiesta bloccata (nessun candidato): {response.prompt_feedback.block_reason_message}"
                return jsonify({"aiFeedbackText": ai_text_response}), 400 
             # print(f"DEBUG VERCEL: Nessun candidato nella risposta: {response}")


        # print(f"DEBUG VERCEL: Risposta dall'AI (prime 200 chars): {ai_text_response[:200]}...")
        return jsonify({"aiFeedbackText": ai_text_response.strip()})

    except Exception as e:
        import traceback 
        print(f"ERRORE CRITICO VERCEL nell'endpoint /api/get_ai_feedback: {e}")
        print(traceback.format_exc()) 
        return jsonify({"error": f"Errore interno del server: {str(e)}"}), 500

# Il blocco if __name__ == '__main__': può essere rimosso o lasciato per test locali.
# Vercel lo ignorerà comunque.
# if __name__ == '__main__':
#     # Per testare localmente, potresti voler impostare GEMINI_API_KEY qui se non usi .env
#     # os.environ['GEMINI_API_KEY'] = 'LA_TUA_CHIAVE_API_QUI'
#     # genai.configure(api_key=os.environ['GEMINI_API_KEY'])
#     app.run(debug=True, port=5000)