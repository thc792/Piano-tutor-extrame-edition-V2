/**
 * main.js
 * Logica principale per Piano Tutor Extrame Edition V2
 */

import { renderExercise } from './vexflow_renderer.js';
import { initializeMIDI } from './midi_handler.js';
import {
    startMetronome,
    stopMetronome,
    initAudioContext,
    isMetronomeRunning
} from './metronome.js';

// --- Costanti e Riferimenti DOM ---
const categorySelect = document.getElementById('category-select');
const exerciseSelect = document.getElementById('exercise-select');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const pauseButton = document.getElementById('pause-button');
const theoryButton = document.getElementById('theory-button');
const scoreDiv = document.getElementById('score');
const scoreDivId = 'score';
const midiStatusSpan = document.getElementById('midi-status');
const successRateSpan = document.getElementById('success-rate');
const expectedNoteSpan = document.getElementById('expected-note');
const playedNoteSpan = document.getElementById('played-note');
const scrollSpeedControl = document.getElementById('scroll-speed');
const scrollSpeedValueSpan = document.getElementById('scroll-speed-value');
const metronomeAutoStartCheckbox = document.getElementById('metronome-auto-start');

const summaryTotalTimeSpan = document.getElementById('summary-total-time');
const summaryTotalErrorsSpan = document.getElementById('summary-total-errors');
const summaryAvgRepTimeSpan = document.getElementById('summary-avg-rep-time');
const summaryErrorsListDiv = document.getElementById('summary-errors-list');

// --- NUOVI Riferimenti DOM per Feedback AI ---
const aiFeedbackContentDiv = document.getElementById('ai-feedback-content');
const getAIFeedbackButton = document.getElementById('get-ai-feedback-button');
const AI_BACKEND_ENDPOINT = '/api/get_ai_feedback'; // Endpoint per il nostro backend Python su Vercel

// --- Stato Applicazione ---
let allExercises = {};
let currentExerciseDefinition = null;
let currentExerciseData = null; // Dati dell'esercizio in corso, con stati delle note, ecc.
let isPlaying = false;
let isPaused = false;
let midiReady = false;
let exerciseCompletionTimeout = null;

// --- Stato Avanzamento Esercizio ---
let totalNotesPerRepetition = 0;
let correctNotesThisRepetition = 0;
let currentRepetition = 1;
const DEFAULT_TARGET_REPETITIONS = 5;
let targetRepetitions = DEFAULT_TARGET_REPETITIONS;

// --- Statistiche Esercizio ---
let exerciseStats = {
    exerciseStartTime: 0,
    exerciseEndTime: 0,
    totalActiveTimeSeconds: 0,
    totalPausedDurationMs: 0,
    totalErrors: 0,
    allRepetitionsData: [], // Array di oggetti, uno per ripetizione
};
let currentRepetitionData = {}; // Dati per la ripetizione corrente
let globalPauseStartTime = 0; // Per calcolare la durata totale della pausa dell'esercizio

// --- Stato Scrolling ---
let scrollInterval = null;
let scrollSpeed = 1;
const SCROLL_INTERVAL_MS = 400; // Intervallo di scroll in ms
const SCROLL_PIXELS_PER_INTERVAL_BASE = 0.5; // Pixels base da scrollare per intervallo (moltiplicato per scrollSpeed)

// --- URL Pagina Teoria ---
const THEORY_PAGE_URL = "https://www.pianohitech.com/teoria-blues";

// --- Funzioni Helper ---
const MIDI_NOTE_NAMES_ARRAY = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function midiToNoteName(midiValue) {
    if (midiValue === null || typeof midiValue === 'undefined') return "N/A";
    if (midiValue < 0 || midiValue > 127) return `MIDI ${midiValue}`;
    const octave = Math.floor(midiValue / 12) - 1;
    return `${MIDI_NOTE_NAMES_ARRAY[midiValue % 12]}${octave}`;
}

function getNoteDescriptionForUser(noteObj) {
    if (!noteObj) return "N/A";
    if (noteObj.expectedMidiValues && noteObj.expectedMidiValues.length > 0) {
        const expectedNotesFull = noteObj.expectedMidiValues.map(mVal => midiToNoteName(mVal));
        let desc = expectedNotesFull.length > 1 ? `Accordo (${expectedNotesFull.join(', ')})` : expectedNotesFull[0];
        if (Array.isArray(noteObj.correctMidiValues) && noteObj.expectedMidiValues.length > 1) {
            const remainingMidi = noteObj.expectedMidiValues.filter(mVal => !noteObj.correctMidiValues.includes(mVal));
            if (remainingMidi.length < noteObj.expectedMidiValues.length && remainingMidi.length > 0) {
                const remainingNotesFull = remainingMidi.map(mVal => midiToNoteName(mVal));
                desc = `Accordo (rimanenti: ${remainingNotesFull.join(', ')})`;
            }
        }
        return desc;
    }
    if (noteObj.keys && noteObj.keys.length > 0 && !noteObj.keys[0].toLowerCase().startsWith("r/")) {
        return noteObj.keys.join(', ');
    }
    return "Pausa o Nota Sconosciuta";
}


// --- Logica Caricamento e Selezione Esercizi ---
function loadExerciseData() {
    if (window.exerciseData) {
        allExercises = window.exerciseData;
        console.log("Dati degli esercizi CARICATI in allExercises (main.js):", JSON.parse(JSON.stringify(allExercises)));
    } else {
        console.error("Errore critico: window.exerciseData non trovato durante loadExerciseData.");
        alert("Errore caricamento dati esercizi da window.");
    }
    populateCategorySelect();
}

function populateCategorySelect() {
    if (!allExercises || Object.keys(allExercises).length === 0) {
        console.warn("populateCategorySelect chiamata ma allExercises è vuoto o non definito.");
        if (categorySelect) {
            categorySelect.innerHTML = '<option value="">-- Nessuna Categoria --</option>';
            if (exerciseSelect) {
                exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>';
                exerciseSelect.disabled = true;
            }
        }
        return;
    }
    const categories = Object.keys(allExercises);
    console.log("Categorie trovate (main.js):", categories);
    if (!categorySelect) { console.error("DOM #category-select non trovato!"); return; }

    categorySelect.innerHTML = '<option value="">-- Seleziona Categoria --</option>';
    categories.forEach(catKey => {
        if (allExercises[catKey] && Array.isArray(allExercises[catKey]) && allExercises[catKey].length > 0 && allExercises[catKey].some(ex => ex && typeof ex.id !== 'undefined')) {
            const option = document.createElement('option');
            option.value = catKey;
            option.textContent = catKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            categorySelect.appendChild(option);
        } else {
            console.warn(`Categoria "${catKey}" ignorata (vuota, non array, o esercizi non validi).`);
        }
    });
    if (exerciseSelect) {
        exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>';
        exerciseSelect.disabled = true;
    }
    clearExerciseSummary();
    // NUOVO: Resetta UI AI quando si cambiano categorie
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
}

function populateExerciseSelect(categoryKey) {
    if (!exerciseSelect) { console.error("DOM #exercise-select non trovato!"); return; }
    exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>';
    exerciseSelect.disabled = true;

    if (categoryKey && allExercises[categoryKey] && Array.isArray(allExercises[categoryKey])) {
        const exercises = allExercises[categoryKey];
        let hasValidExercises = false;
        exercises.forEach(ex => {
            if (ex && typeof ex.id !== 'undefined') {
                const option = document.createElement('option');
                option.value = ex.id;
                option.textContent = ex.name || ex.id;
                exerciseSelect.appendChild(option);
                hasValidExercises = true;
            }
        });
        exerciseSelect.disabled = !hasValidExercises;
        if (!hasValidExercises) {
            exerciseSelect.innerHTML = '<option value="">-- Nessun esercizio valido --</option>';
        }
    } else if (categoryKey) {
        console.warn(`Nessun esercizio o dati non validi per categoria: ${categoryKey}.`);
        exerciseSelect.innerHTML = '<option value="">-- Nessun Esercizio --</option>';
    }
    clearExerciseSummary();
    // NUOVO: Resetta UI AI
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
}


function selectExercise(exerciseId, categoryKey) {
    if (!exerciseId || !categoryKey || !allExercises[categoryKey] || !Array.isArray(allExercises[categoryKey])) {
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        if (startButton) startButton.disabled = true;
        if (pauseButton) pauseButton.disabled = true;
        if (theoryButton) theoryButton.disabled = false;
        if (scoreDiv) scoreDiv.innerHTML = '<p>Selezione esercizio non valida.</p>';
        resetUIState(); // resetUIState include il reset dell'UI AI
        return;
    }
    currentExerciseDefinition = allExercises[categoryKey].find(ex => ex && ex.id === exerciseId);

    if (currentExerciseDefinition) {
        console.log("Esercizio selezionato:", currentExerciseDefinition.name || currentExerciseDefinition.id);
        // Clona profondamente la definizione per creare i dati di lavoro
        currentExerciseData = JSON.parse(JSON.stringify(currentExerciseDefinition));
        targetRepetitions = currentExerciseDefinition.repetitions || DEFAULT_TARGET_REPETITIONS;

        totalNotesPerRepetition = 0;
        let hasPlayableNotes = false;
        let noteCounter = 0; // Per uniqueId

        // Itera su tutti i possibili array di note e inizializza i dati per ogni nota
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key] && Array.isArray(currentExerciseData[key])) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.uniqueId = `${key}-${noteCounter++}`; // ID univoco per VexFlow
                        let midiVals = [];
                        if (typeof noteObj.midiValue === 'number') {
                            midiVals = [noteObj.midiValue];
                        } else if (Array.isArray(noteObj.midiValues)) {
                            midiVals = noteObj.midiValues;
                        }
                        noteObj.expectedMidiValues = midiVals; // Array dei MIDI attesi
                        noteObj.status = 'pending'; // Stato iniziale
                        noteObj.isCorrect = false;
                        noteObj.playedMidiValue = null; // MIDI effettivamente suonato
                        noteObj.correctMidiValues = []; // Per accordi, i MIDI corretti suonati finora

                        // Conta le note "suonabili" (non pause) per totalNotesPerRepetition
                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) {
                            if (midiVals.length > 0) hasPlayableNotes = true;
                            totalNotesPerRepetition += midiVals.length; // Ogni nota di un accordo conta
                        }
                    }
                });
            }
        });

        console.log(`Target ripetizioni: ${targetRepetitions}. Note MIDI totali per ripetizione: ${totalNotesPerRepetition}`);
        resetNoteStatesAndRepetition(); // Resetta stati e contatori ripetizione

        let renderOutput = renderExercise(scoreDivId, currentExerciseData); // Renderizza subito
        if (renderOutput && renderOutput.processedNotes) {
            // Sovrascrivi gli array di note con quelli processati da VexFlow (che ora hanno startTick e yPos)
            currentExerciseData.notesTreble = renderOutput.processedNotes.treble || currentExerciseData.notesTreble || [];
            currentExerciseData.notesBass = renderOutput.processedNotes.bass || currentExerciseData.notesBass || [];
            currentExerciseData.notes = renderOutput.processedNotes.single || currentExerciseData.notes || [];
        }

        highlightPendingNotes();
        if (scoreDiv) scoreDiv.scrollTop = 0;
        if (startButton) startButton.disabled = !midiReady || !hasPlayableNotes;
        if (pauseButton) pauseButton.disabled = true;
        if (theoryButton) theoryButton.disabled = false;
        resetUIState(); // resetUIState include il reset dell'UI AI
        if (stopButton) stopButton.disabled = true;

        if (!midiReady) updateInfo("Collega un dispositivo MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare in questo esercizio.");

    } else {
        console.error(`Errore: Esercizio ID "${exerciseId}" non trovato in categoria "${categoryKey}".`);
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        if (startButton) startButton.disabled = true;
        if (pauseButton) pauseButton.disabled = true;
        if (theoryButton) theoryButton.disabled = false;
        if (scoreDiv) scoreDiv.innerHTML = '<p>Errore caricamento esercizio.</p>';
        resetUIState(); // resetUIState include il reset dell'UI AI
    }
}


// --- Logica di Esecuzione Esercizio ---
// (handleNoteOn, highlightPendingNotes, ecc. - assumo siano implementate correttamente
//  e non necessitino modifiche dirette per l'integrazione AI, ma devono popolare exerciseStats)
// ... (IL TUO CODICE ESISTENTE PER highlightPendingNotes, handleNoteOn, ecc. VA QUI) ...
// Assicurati che handleNoteOn aggiorni correttamente:
// - noteObj.status, noteObj.isCorrect, noteObj.playedMidiValue, noteObj.correctMidiValues
// - correctNotesThisRepetition
// - currentRepetitionData.errors (con { expectedMidiValues, playedMidiValue, timestamp })

function highlightPendingNotes() {
    if (!currentExerciseData || !isPlaying || isPaused) {
        // Se non stiamo suonando o siamo in pausa, mostra la prima nota non suonata (se esiste)
        // o un messaggio generico se l'esercizio non è selezionato o è finito.
        let firstPending = null;
        const noteArrays = [currentExerciseData?.notesTreble, currentExerciseData?.notesBass, currentExerciseData?.notes].filter(arr => arr && arr.length > 0);

        for (const notes of noteArrays) {
            if (notes) {
                firstPending = notes.find(n => n && n.status === 'pending' && n.expectedMidiValues && n.expectedMidiValues.length > 0);
                if (firstPending) break;
            }
        }

        if (firstPending) {
            updateInfo(getNoteDescriptionForUser(firstPending));
        } else if (currentExerciseData) {
            if (currentRepetition > targetRepetitions) {
                 updateInfo("Esercizio completato!");
            } else if (totalNotesPerRepetition > 0 && correctNotesThisRepetition === totalNotesPerRepetition) {
                 updateInfo(`Ripetizione ${currentRepetition} completata. Premi Start per la prossima.`);
            } else {
                 updateInfo("Pronto per iniziare o continuare.");
            }
        } else {
            updateInfo("Seleziona un esercizio.");
        }
        return; // Non fare highlight se non si sta suonando
    }

    let foundNextNote = false;
    const noteCollections = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes];

    for (const notes of noteCollections) {
        if (notes && Array.isArray(notes)) {
            for (const noteObj of notes) {
                if (noteObj && noteObj.status === 'pending' && !noteObj.keys[0].toLowerCase().startsWith('r/')) {
                    noteObj.status = 'expected'; // Segna come attesa
                    updateInfo(getNoteDescriptionForUser(noteObj));
                    foundNextNote = true;
                    break; // Ferma al primo "expected"
                }
            }
        }
        if (foundNextNote) break;
    }

    if (!foundNextNote && isPlaying && !isPaused) {
        // Tutte le note della ripetizione corrente sono state suonate
        if (correctNotesThisRepetition === totalNotesPerRepetition) {
            // Avanza alla prossima ripetizione o completa l'esercizio
            finalizeAndStoreRepetitionData();
            currentRepetition++;
            if (currentRepetition <= targetRepetitions) {
                resetNoteStatesForNewRepetition();
                initializeNewRepetitionData(currentRepetition);
                updateInfo(`Inizio Rip. ${currentRepetition}/${targetRepetitions}`);
                highlightPendingNotes(); // Evidenzia la prima nota della nuova ripetizione
            } else {
                handleExerciseCompletion();
            }
        } else {
            // Ci sono stati errori, ma tutte le note sono state processate
            // Questo caso dovrebbe essere gestito da handleNoteOn che non avanza se ci sono errori in sospeso
            // O potrebbe essere che l'utente ha saltato note.
            updateInfo("Ripetizione con errori. Controlla e riprova.");
             // Potresti voler forzare lo stop o un reset qui a seconda della logica desiderata.
        }
    }
    // Ridisegna per mostrare gli aggiornamenti di stato (colori)
    if (scoreDiv && currentExerciseData) {
        const savedScroll = scoreDiv.scrollTop; // Salva la posizione dello scroll
        renderExercise(scoreDivId, currentExerciseData);
        scoreDiv.scrollTop = savedScroll; // Ripristina lo scroll
    }
}
// --- Gestione Flusso Esercizio (Start, Stop, Pause, Resume) ---
function startExercise() {
    if (!currentExerciseData || !midiReady || !totalNotesPerRepetition || isPlaying) {
        console.warn("Impossibile avviare l'esercizio: dati mancanti, MIDI non pronto, nessuna nota o già in esecuzione.");
        return;
    }
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);

    initializeNewExerciseStats(); // Resetta le statistiche globali dell'esercizio
    currentRepetition = 1;
    resetNoteStatesAndRepetition(); // Resetta stati note e contatori ripetizione
    initializeNewRepetitionData(currentRepetition); // Inizializza dati per la prima ripetizione

    console.log(`Avvio Esercizio: ${currentExerciseDefinition.name || currentExerciseDefinition.id} - Rip. ${currentRepetition}/${targetRepetitions}`);
    isPlaying = true;
    isPaused = false;

    if (startButton) startButton.disabled = true;
    if (pauseButton) { pauseButton.disabled = false; pauseButton.textContent = "Pause"; }
    if (stopButton) stopButton.disabled = false;
    if (categorySelect) categorySelect.disabled = true;
    if (exerciseSelect) exerciseSelect.disabled = true;
    if (theoryButton) theoryButton.disabled = true;

    updateSuccessRate();
    if (playedNoteSpan) playedNoteSpan.textContent = '--';
    clearExerciseSummary();
    // NUOVO: Nascondi e resetta feedback AI all'avvio
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';


    if (metronomeAutoStartCheckbox && metronomeAutoStartCheckbox.checked && !isMetronomeRunning()) {
        initAudioContext();
        let exerciseBeatsPerMeasure = 4; // Default
        if (currentExerciseDefinition && currentExerciseDefinition.timeSignature) {
            const tsParts = currentExerciseDefinition.timeSignature.split('/');
            if (tsParts.length === 2) {
                const num = parseInt(tsParts[0]);
                if (!isNaN(num) && num > 0) exerciseBeatsPerMeasure = num;
            }
        }
        startMetronome(exerciseBeatsPerMeasure);
    }

    // Ridisegna l'esercizio con gli stati iniziali e avvia lo scrolling
    renderExercise(scoreDivId, currentExerciseData); // Ridisegna per resettare i colori
    highlightPendingNotes(); // Evidenzia la prima nota da suonare

    // Leggero ritardo per assicurare che il rendering sia completo prima dello scroll
    setTimeout(() => {
        if (!isPlaying) return; // Controllo se l'esercizio è stato fermato nel frattempo
        // A volte VexFlow può alterare leggermente le dimensioni, quindi un re-render può essere utile
        // per stabilizzare prima di iniziare lo scrolling.
        const savedScroll = scoreDiv.scrollTop;
        renderExercise(scoreDivId, currentExerciseData);
        if (scoreDiv) scoreDiv.scrollTop = savedScroll;
        setTimeout(startScrolling, 100); // Avvia lo scrolling dopo un breve ritardo
    }, 50);
}

function stopExercise() {
    if (!isPlaying && stopButton && stopButton.disabled) return;

    if (isPlaying) { // Se l'esercizio era attivo, finalizza i dati
        finalizeAndStoreRepetitionData(); // Salva i dati dell'ultima ripetizione (anche se incompleta)
    }
    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) { // Calcola solo se l'esercizio è effettivamente partito
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime;
        totalDurationMs -= exerciseStats.totalPausedDurationMs; // Sottrai il tempo in pausa
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else {
        exerciseStats.totalActiveTimeSeconds = 0;
    }

    displayExerciseSummary(); // Mostra le statistiche finali

    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    stopScrolling();
    if (isMetronomeRunning()) stopMetronome();

    isPlaying = false;
    isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition(); // Pulisce gli stati per un eventuale nuovo avvio
        renderExercise(scoreDivId, currentExerciseData); // Ridisegna in stato "pulito"
        if (scoreDiv) scoreDiv.scrollTop = 0;
    } else {
        if (scoreDiv) scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    }

    if (startButton) startButton.disabled = !midiReady || !currentExerciseData || !totalNotesPerRepetition;
    if (pauseButton) { pauseButton.disabled = true; pauseButton.textContent = "Pause"; }
    if (stopButton) stopButton.disabled = true;
    if (categorySelect) categorySelect.disabled = false;
    if (exerciseSelect) exerciseSelect.disabled = (categorySelect && categorySelect.value === "");
    if (theoryButton) theoryButton.disabled = false;

    highlightPendingNotes(); // Aggiorna l'indicazione della nota attesa (o messaggio di default)
    if (playedNoteSpan) playedNoteSpan.textContent = '--';
    if (successRateSpan) successRateSpan.textContent = '-- %';


    // --- NUOVO: Gestione Feedback AI allo stop ---
    if (currentExerciseDefinition && exerciseStats && Object.keys(exerciseStats).length > 0 && exerciseStats.allRepetitionsData && exerciseStats.allRepetitionsData.length > 0) {
        if (getAIFeedbackButton) {
            getAIFeedbackButton.style.display = 'block'; // Mostra il pulsante
            getAIFeedbackButton.disabled = false;
            // Rimuovi listener precedenti per evitare chiamate multiple se l'utente clicca più volte su stop/start
            const newButton = getAIFeedbackButton.cloneNode(true);
            getAIFeedbackButton.parentNode.replaceChild(newButton, getAIFeedbackButton);
            // Ora assegna il listener al nuovo bottone
            document.getElementById('get-ai-feedback-button').addEventListener('click', () => fetchAIFeedback(currentExerciseDefinition, exerciseStats));

            if (aiFeedbackContentDiv) {
                aiFeedbackContentDiv.innerHTML = '<p>Premi "Analizza con AI" per un feedback dettagliato sulla tua performance.</p>';
            }
        }
    } else {
        if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
        if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa almeno una ripetizione per ricevere un\'analisi AI.</p>';
    }
    // --- FINE NUOVO ---
}

function pauseExercise() {
    if (!isPlaying || isPaused) return;
    isPaused = true;
    currentRepetitionData.pauseStartTimeInternal = performance.now(); // Per la singola ripetizione
    if (!globalPauseStartTime) globalPauseStartTime = performance.now(); // Per l'esercizio globale

    stopScrolling();
    if (pauseButton) { pauseButton.textContent = "Resume"; pauseButton.disabled = false; }
    if (theoryButton) theoryButton.disabled = false; // Abilita teoria in pausa
    updateInfo("Esercizio in Pausa.");

    if (isMetronomeRunning()) {
        sessionStorage.setItem('metronomeWasRunningOnPause', 'true');
        // Salva i BPM correnti se necessario per il resume, anche se la logica del metronomo ora li gestisce
        sessionStorage.setItem('metronomeBeatsPerMeasure', (currentExerciseDefinition?.timeSignature?.split('/')[0] || '4'));
        stopMetronome();
    }
}

function resumeExercise() {
    if (!isPlaying || !isPaused) return;
    isPaused = false;

    if (currentRepetitionData.pauseStartTimeInternal) {
        const repPauseDuration = performance.now() - currentRepetitionData.pauseStartTimeInternal;
        currentRepetitionData.pausedDurationMs = (currentRepetitionData.pausedDurationMs || 0) + repPauseDuration;
        currentRepetitionData.pauseStartTimeInternal = 0;
    }
    if (globalPauseStartTime) {
        const globalPauseDuration = performance.now() - globalPauseStartTime;
        exerciseStats.totalPausedDurationMs = (exerciseStats.totalPausedDurationMs || 0) + globalPauseDuration;
        globalPauseStartTime = 0;
    }

    startScrolling();
    if (pauseButton) { pauseButton.textContent = "Pause"; pauseButton.disabled = false; }
    if (theoryButton) theoryButton.disabled = true; // Disabilita teoria durante l'esecuzione
    highlightPendingNotes(); // Riprende da dove si era interrotto

    if (sessionStorage.getItem('metronomeWasRunningOnPause') === 'true') {
        initAudioContext();
        let exerciseBeatsPerMeasure = parseInt(sessionStorage.getItem('metronomeBeatsPerMeasure') || '4');
        // Se l'esercizio corrente ha un time signature specifico, usa quello
        if (currentExerciseDefinition && currentExerciseDefinition.timeSignature) {
             const tsParts = currentExerciseDefinition.timeSignature.split('/');
             if (tsParts.length === 2) {
                 const num = parseInt(tsParts[0]);
                 if (!isNaN(num) && num > 0) exerciseBeatsPerMeasure = num;
             }
        }
        startMetronome(exerciseBeatsPerMeasure);
        sessionStorage.removeItem('metronomeWasRunningOnPause');
        sessionStorage.removeItem('metronomeBeatsPerMeasure');
    }
}

function handleTheoryClick() {
    if (THEORY_PAGE_URL) window.open(THEORY_PAGE_URL, '_blank');
}


// --- NUOVA Funzione per chiamare il backend AI ---
async function fetchAIFeedback(exerciseDefinition, stats) {
    if (!aiFeedbackContentDiv || !getAIFeedbackButton) return;

    getAIFeedbackButton.disabled = true;
    aiFeedbackContentDiv.innerHTML = '<p>Analisi AI in corso, attendere prego...</p>';

    const dataToSendToBackend = {
        exerciseDefinition: exerciseDefinition, // Invia la definizione completa dell'esercizio
        exerciseStats: stats,                   // Invia le statistiche raccolte
    };

    console.log("Dati inviati al backend AI:", JSON.parse(JSON.stringify(dataToSendToBackend)));


    try {
        const response = await fetch(AI_BACKEND_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSendToBackend)
        });

        const responseData = await response.json(); // Leggi sempre la risposta come JSON

        if (!response.ok) {
            console.error("Errore dal backend API:", response.status, responseData);
            // Usa il messaggio di errore dal backend se disponibile, altrimenti uno generico
            throw new Error(responseData.error || `Errore dal backend: ${response.status}`);
        }

        // Assumiamo che il backend restituisca un oggetto con una chiave "aiFeedbackText"
        const aiTextResponse = responseData.aiFeedbackText || "Nessuna risposta testuale valida ricevuta dall'AI.";
        aiFeedbackContentDiv.innerHTML = `<p>${aiTextResponse.replace(/\n/g, '<br>')}</p>`; // Mostra la risposta formattata

    } catch (error) {
        console.error('Errore nel fetch del feedback AI:', error);
        aiFeedbackContentDiv.innerHTML = `<p style="color: red;">Impossibile ottenere il feedback AI: ${error.message}</p>`;
    } finally {
        // Riabilita il pulsante solo se la logica lo permette (es. non se un altro esercizio è iniziato)
        // Per ora lo riabilitiamo sempre, ma potrebbe servire una logica più fine
        if (getAIFeedbackButton) getAIFeedbackButton.disabled = false;
    }
}


// --- Funzioni di Utilità e Stato UI ---
// (resetNoteStatesAndRepetition, initializeNewExerciseStats, ecc.
//  Assumo che queste siano implementate correttamente e popolino/resettino exerciseStats)
// ... (IL TUO CODICE ESISTENTE PER QUESTE FUNZIONI VA QUI) ...
function resetNoteStatesAndRepetition() {
    correctNotesThisRepetition = 0;
    // currentRepetition è gestito da startExercise e avanzamento
    if (currentExerciseData) {
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key] && Array.isArray(currentExerciseData[key])) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.status = 'pending';
                        noteObj.isCorrect = false;
                        noteObj.playedMidiValue = null;
                        noteObj.correctMidiValues = [];
                    }
                });
            }
        });
    }
}
function resetNoteStatesForNewRepetition() {
    // Simile a resetNoteStatesAndRepetition ma non tocca currentRepetition
    correctNotesThisRepetition = 0;
    if (currentExerciseData) {
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key] && Array.isArray(currentExerciseData[key])) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.status = 'pending';
                        noteObj.isCorrect = false;
                        noteObj.playedMidiValue = null;
                        noteObj.correctMidiValues = [];
                    }
                });
            }
        });
    }
}


function initializeNewExerciseStats() {
    exerciseStats = {
        exerciseStartTime: performance.now(),
        exerciseEndTime: 0,
        totalActiveTimeSeconds: 0,
        totalPausedDurationMs: 0,
        totalErrors: 0,
        allRepetitionsData: [],
    };
    globalPauseStartTime = 0; // Resetta anche il timer di pausa globale
}

function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum,
        startTime: performance.now(),
        endTime: 0,
        durationSeconds: 0,
        errors: [], // Array di oggetti errore { expectedMidiValues, playedMidiValue, timestamp }
        isCorrect: true, // Diventa false se c'è almeno un errore
        pauseStartTimeInternal: 0, // Per pause durante la ripetizione
        pausedDurationMs: 0,      // Durata totale delle pause in questa ripetizione
    };
    correctNotesThisRepetition = 0; // Resetta per la nuova ripetizione
}

function finalizeAndStoreRepetitionData() {
    if (!currentRepetitionData || typeof currentRepetitionData.repetitionNumber === 'undefined') {
        // console.warn("Tentativo di finalizzare dati di ripetizione non inizializzati.");
        return; // Non fare nulla se non ci sono dati validi da salvare
    }

    currentRepetitionData.endTime = performance.now();
    let repDurationMs = currentRepetitionData.endTime - currentRepetitionData.startTime;
    repDurationMs -= currentRepetitionData.pausedDurationMs; // Sottrai il tempo di pausa della ripetizione
    currentRepetitionData.durationSeconds = parseFloat((Math.max(0, repDurationMs) / 1000).toFixed(2));

    currentRepetitionData.isCorrect = currentRepetitionData.errors.length === 0 && correctNotesThisRepetition === totalNotesPerRepetition;
    exerciseStats.totalErrors += currentRepetitionData.errors.length;
    exerciseStats.allRepetitionsData.push(JSON.parse(JSON.stringify(currentRepetitionData))); // Salva una copia
    // console.log(`Dati Ripetizione ${currentRepetitionData.repetitionNumber} finalizzati:`, currentRepetitionData);

    // Resetta currentRepetitionData per la prossima o per evitare riutilizzi impropri
    currentRepetitionData = {};
}

function handleExerciseCompletion() {
    if (isPlaying) { // Assicurati che l'esercizio fosse in esecuzione
        // Se l'ultima ripetizione non è stata finalizzata (es. l'ultima nota l'ha completata)
        // assicurati che venga fatto. Potrebbe essere già stato fatto da highlightPendingNotes.
        // Controlla se l'ultima ripetizione è già in allRepetitionsData
        if (!exerciseStats.allRepetitionsData.find(r => r.repetitionNumber === currentRepetition)) {
            finalizeAndStoreRepetitionData();
        }
    }

    isPlaying = false; // Ferma formalmente lo stato di "playing"
    isPaused = false;
    updateInfo(`Esercizio "${currentExerciseDefinition.name || currentExerciseDefinition.id}" completato!`);
    console.log("Esercizio completato. Statistiche finali:", exerciseStats);

    // Chiama stopExercise per gestire la UI, le statistiche finali, e il feedback AI
    // Usa un timeout per permettere all'ultimo updateInfo di essere visibile brevemente
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    exerciseCompletionTimeout = setTimeout(() => {
        stopExercise(); // stopExercise si occuperà di mostrare il summary e il pulsante AI
    }, 1500); // Ritardo di 1.5 secondi
}

function displayExerciseSummary() {
    if (!summaryTotalTimeSpan || !summaryTotalErrorsSpan || !summaryAvgRepTimeSpan || !summaryErrorsListDiv) {
        console.warn("Elementi DOM per il sommario non trovati.");
        return;
    }
    if (!exerciseStats || !exerciseStats.allRepetitionsData || exerciseStats.allRepetitionsData.length === 0) {
        summaryTotalTimeSpan.textContent = '--';
        summaryTotalErrorsSpan.textContent = '--';
        summaryAvgRepTimeSpan.textContent = '--';
        summaryErrorsListDiv.innerHTML = '<p>Nessuna ripetizione completata per mostrare un sommario.</p>';
        return;
    }

    summaryTotalTimeSpan.textContent = `${exerciseStats.totalActiveTimeSeconds} s`;
    summaryTotalErrorsSpan.textContent = exerciseStats.totalErrors;

    const totalRepDuration = exerciseStats.allRepetitionsData.reduce((sum, rep) => sum + rep.durationSeconds, 0);
    const avgRepTime = exerciseStats.allRepetitionsData.length > 0
        ? (totalRepDuration / exerciseStats.allRepetitionsData.length).toFixed(2)
        : 0;
    summaryAvgRepTimeSpan.textContent = `${avgRepTime} s`;

    if (exerciseStats.totalErrors > 0) {
        let errorsHtml = '<ul>';
        exerciseStats.allRepetitionsData.forEach(rep => {
            if (rep.errors.length > 0) {
                errorsHtml += `<li><strong>Rip. ${rep.repetitionNumber}:</strong><ul>`;
                rep.errors.forEach(err => {
                    const expected = getNoteDescriptionForUser({ expectedMidiValues: err.expectedMidiValues });
                    const played = midiToNoteName(err.playedMidiValue);
                    errorsHtml += `<li>Atteso: ${expected}, Suonato: ${played}</li>`;
                });
                errorsHtml += `</ul></li>`;
            }
        });
        errorsHtml += '</ul>';
        summaryErrorsListDiv.innerHTML = errorsHtml;
    } else {
        summaryErrorsListDiv.innerHTML = '<p>Nessun errore! Ottima performance!</p>';
    }
}


function startScrolling() {
    if (scrollInterval) clearInterval(scrollInterval); // Pulisce intervalli precedenti
    if (!scoreDiv || !isPlaying || isPaused) return;

    scrollInterval = setInterval(() => {
        if (!isPlaying || isPaused || !scoreDiv) {
            stopScrolling();
            return;
        }
        const maxScroll = scoreDiv.scrollHeight - scoreDiv.clientHeight;
        if (scoreDiv.scrollTop < maxScroll) {
            scoreDiv.scrollTop += (SCROLL_PIXELS_PER_INTERVAL_BASE * scrollSpeed);
        } else {
            // Potrebbe fermare lo scrolling quando raggiunge la fine,
            // o attendere che l'esercizio finisca.
            // Per ora, lo lascia così, l'esercizio si fermerà da solo.
        }
    }, SCROLL_INTERVAL_MS);
}

function stopScrolling() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
}

function updateSuccessRate() {
    if (!successRateSpan) return;
    if (totalNotesPerRepetition === 0 || !isPlaying) {
        successRateSpan.textContent = '-- %';
        return;
    }
    const rate = (correctNotesThisRepetition / totalNotesPerRepetition) * 100;
    successRateSpan.textContent = `${rate.toFixed(0)} %`;
}


function updateInfo(message) {
    if (expectedNoteSpan) expectedNoteSpan.textContent = message;
}

function clearExerciseSummary() {
    if (summaryTotalTimeSpan) summaryTotalTimeSpan.textContent = '--';
    if (summaryTotalErrorsSpan) summaryTotalErrorsSpan.textContent = '--';
    if (summaryAvgRepTimeSpan) summaryAvgRepTimeSpan.textContent = '--';
    if (summaryErrorsListDiv) summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato o dati non disponibili.</p>';
}


function resetUIState() {
    if (successRateSpan) successRateSpan.textContent = '-- %';
    if (playedNoteSpan) playedNoteSpan.textContent = '--';
    // Non disabilitare startButton qui, la sua disabilitazione dipende da midiReady e selezione esercizio
    if (stopButton) stopButton.disabled = true;
    if (pauseButton) { pauseButton.disabled = true; pauseButton.textContent = "Pause"; }
    if (theoryButton) theoryButton.disabled = false; // Abilita sempre teoria se non si sta suonando

    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    clearExerciseSummary();

    // NUOVO: Resetta UI AI
    if (getAIFeedbackButton) {
        getAIFeedbackButton.style.display = 'none';
        // Rimuovi il listener se esiste per evitare duplicati quando viene ricreato
        const newButton = getAIFeedbackButton.cloneNode(true);
        if (getAIFeedbackButton.parentNode) {
             getAIFeedbackButton.parentNode.replaceChild(newButton, getAIFeedbackButton);
        }
        // Ora getAIFeedbackButton si riferisce al vecchio nodo, quindi dobbiamo aggiornarlo
        // o meglio, far sì che l'assegnazione del listener in stopExercise usi l'ID
    }
    if (aiFeedbackContentDiv) {
        aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
    }
}


function updateMidiStatus(message, isConnected) {
    if (midiStatusSpan) midiStatusSpan.textContent = message;
    midiReady = isConnected;
    const exSelectedAndPlayable = currentExerciseData && totalNotesPerRepetition > 0;

    if (isConnected) {
        if (startButton) startButton.disabled = isPlaying || !exSelectedAndPlayable;
        if (pauseButton) pauseButton.disabled = !isPlaying || isPaused; // Abilita se isPlaying e non isPaused
        // theoryButton gestito da start/stop/pause/resume
        if (!isPlaying) { // Se non stiamo suonando
            if (!exSelectedAndPlayable) {
                updateInfo("MIDI pronto. Seleziona un esercizio.");
            } else {
                highlightPendingNotes(); // Mostra la prima nota dell'esercizio selezionato
            }
        }
    } else { // MIDI Disconnesso
        if (startButton) startButton.disabled = true;
        if (pauseButton) pauseButton.disabled = true;
        // stopButton dovrebbe rimanere abilitato se si stava suonando, per permettere di fermare
        if (stopButton) stopButton.disabled = !isPlaying;
        if (theoryButton) theoryButton.disabled = isPlaying; // Disabilita se si stava suonando
        updateInfo("Collega un dispositivo MIDI per iniziare.");
        if (isPlaying && !isPaused) { // Se si stava suonando attivamente
            console.warn("MIDI disconnesso durante l'esecuzione!");
            pauseExercise(); // Metti in pausa automaticamente
            alert("ATTENZIONE: Dispositivo MIDI disconnesso! L'esercizio è stato messo in pausa.");
        }
    }
}

// --- Event Listeners ---
if (categorySelect) categorySelect.addEventListener('change', (e) => { populateExerciseSelect(e.target.value); });
if (exerciseSelect) exerciseSelect.addEventListener('change', (e) => { selectExercise(e.target.value, categorySelect.value); });
if (startButton) startButton.addEventListener('click', startExercise);
if (stopButton) stopButton.addEventListener('click', stopExercise);
if (pauseButton) pauseButton.addEventListener('click', () => { if (isPaused) resumeExercise(); else pauseExercise(); });
if (theoryButton) theoryButton.addEventListener('click', handleTheoryClick);
// L'event listener per getAIFeedbackButton viene aggiunto dinamicamente in stopExercise

// --- Application Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM caricato. Piano Tutor Extrame Edition V2 - Integrazione AI");
    loadExerciseData();
    initializeMIDI(
        (noteName, midiNote, velocity) => { // handleNoteOn
            if (!isPlaying || isPaused || !currentExerciseData) return;
            playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote}, Vel: ${velocity})`;

            let noteProcessed = false;
            const noteCollections = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes];

            for (const notes of noteCollections) {
                if (notes && Array.isArray(notes)) {
                    for (const noteObj of notes) {
                        if (noteObj && noteObj.status === 'expected') { // Processa solo la nota attualmente attesa
                            if (noteObj.expectedMidiValues.includes(midiNote)) {
                                if (!noteObj.correctMidiValues.includes(midiNote)) {
                                    noteObj.correctMidiValues.push(midiNote);
                                }
                                if (noteObj.correctMidiValues.length === noteObj.expectedMidiValues.length) {
                                    noteObj.status = 'correct';
                                    noteObj.isCorrect = true;
                                    correctNotesThisRepetition += noteObj.expectedMidiValues.length; // Aggiungi tutte le note dell'accordo/singola
                                } else {
                                    // È un accordo e solo una parte è stata suonata correttamente
                                    // Mantieni lo stato 'expected' ma aggiorna la descrizione
                                    updateInfo(getNoteDescriptionForUser(noteObj));
                                }
                            } else { // Nota sbagliata
                                noteObj.status = 'incorrect';
                                noteObj.isCorrect = false;
                                noteObj.playedMidiValue = midiNote;
                                currentRepetitionData.errors.push({
                                    expectedMidiValues: [...noteObj.expectedMidiValues], // Clona l'array
                                    playedMidiValue: midiNote,
                                    timestamp: performance.now()
                                });
                                // Non incrementare correctNotesThisRepetition
                                // Potresti voler aggiungere un feedback sonoro o visivo per l'errore qui
                            }
                            noteProcessed = true;
                            break;
                        }
                    }
                }
                if (noteProcessed) break;
            }

            updateSuccessRate();
            if (noteProcessed) {
                highlightPendingNotes(); // Passa alla prossima nota o gestisce fine ripetizione/esercizio
            }
        },
        updateMidiStatus // handleMidiStatusChange
    );

    resetUIState();
    if (scoreDiv) scoreDiv.innerHTML = '<p>Benvenuto! Seleziona una categoria e un esercizio.</p>';
    updateInfo("Collega un dispositivo MIDI e seleziona un esercizio.");

    if (scrollSpeedValueSpan && scrollSpeedControl) {
        scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
        scrollSpeed = parseInt(scrollSpeedControl.value, 10);
        scrollSpeedControl.addEventListener('input', (e) => {
            scrollSpeed = parseInt(e.target.value, 10);
            if (scrollSpeedValueSpan) scrollSpeedValueSpan.textContent = e.target.value;
            // console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
        });
    }
    // Event listener per metronomo sono in metronome.js
});