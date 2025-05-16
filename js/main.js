/**
 * main.js - Logica principale e gestione eventi Piano Future.
 * **VERSIONE CON CORREZIONE FLUSSO STARTTICK E LOGICA CONTROLLO NOTE PIÙ STRINGENTE**
 *
 * Piano Future
 * Copyright (c) 2025 Lorenzetti Giuseppe
 *
 * Questo codice sorgente è rilasciato sotto la licenza MIT.
 * Vedi il file LICENSE nel repository GitHub per i dettagli completi.
 * https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

import { renderExercise } from './vexflow_renderer.js';
import { initializeMIDI } from './midi_handler.js';

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

// Riferimenti DOM per le nuove statistiche
const summaryTotalTimeSpan = document.getElementById('summary-total-time');
const summaryTotalErrorsSpan = document.getElementById('summary-total-errors');
const summaryAvgRepTimeSpan = document.getElementById('summary-avg-rep-time');
const summaryErrorsListDiv = document.getElementById('summary-errors-list');


// --- Stato Applicazione ---
let allExercises = {};
let currentExerciseDefinition = null;
let currentExerciseData = null; // Copia dell'esercizio corrente su cui lavorare
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

// --- NUOVE STRUTTURE PER STATISTICHE ---
let exerciseStats = {};
let currentRepetitionData = {};
let globalPauseStartTime = 0; 

// --- Stato Scrolling ---
let scrollInterval = null;
let scrollSpeed = 1;
const SCROLL_INTERVAL_MS = 400;
const SCROLL_PIXELS_PER_INTERVAL_BASE = 0.5;

// --- URL Pagina Teoria ---
const THEORY_PAGE_URL = "https://www.pianohitech.com/teoria-blues";

// Funzione helper per convertire numero MIDI in nome nota (formato "C4", "F#3")
const MIDI_NOTE_NAMES_ARRAY = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function midiToNoteName(midiValue) {
    if (midiValue < 0 || midiValue > 127) return `MIDI ${midiValue}`;
    const octave = Math.floor(midiValue / 12) - 1;
    return `${MIDI_NOTE_NAMES_ARRAY[midiValue % 12]}${octave}`;
}

function getNoteDescriptionForUser(noteObj) {
    if (!noteObj) return "N/A";
    if (noteObj.keys && noteObj.keys.length > 0 && !noteObj.keys[0].toLowerCase().startsWith("r/")) {
        return noteObj.keys.map(k => k.replace(/\/\d/, '')).join(', ');
    }
    if (Array.isArray(noteObj.midiValues) && noteObj.midiValues.length > 0) {
        const remainingNotes = noteObj.midiValues.filter(mVal => !noteObj.correctMidiValues || !noteObj.correctMidiValues.includes(mVal));
        if (remainingNotes.length < noteObj.midiValues.length && remainingNotes.length > 0) {
            return `Accordo (rimanenti: ${remainingNotes.map(m => midiToNoteName(m)).join(', ')})`;
        }
        return `Accordo (${noteObj.midiValues.map(m => midiToNoteName(m)).join(', ')})`;
    }
    if (typeof noteObj.midiValue === 'number') {
        return midiToNoteName(noteObj.midiValue);
    }
    return "Nota Sconosciuta";
}


// --- Funzioni Inizializzazione e Caricamento Dati ---
function loadExerciseData() {
    if (window.exerciseData) {
        allExercises = window.exerciseData;
        console.log("Dati degli esercizi caricati.");
    } else {
        console.error("Errore critico: window.exerciseData non trovato.");
        alert("Errore caricamento esercizi.");
    }
    populateCategorySelect();
}

function populateCategorySelect() {
    const categories = Object.keys(allExercises);
    categorySelect.innerHTML = '<option value="">-- Seleziona Categoria --</option>';
    categories.forEach(catKey => {
        if (Array.isArray(allExercises[catKey]) && allExercises[catKey].length > 0 && allExercises[catKey].some(ex => ex && ex.id)) {
            const option = document.createElement('option');
            option.value = catKey;
            option.textContent = catKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            categorySelect.appendChild(option);
        } else {
            console.warn(`Categoria "${catKey}" ignorata (vuota o senza esercizi validi).`);
        }
    });
    clearExerciseSummary();
}

function populateExerciseSelect(categoryKey) {
    exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>';
    exerciseSelect.disabled = true;

    if (categoryKey && allExercises[categoryKey] && Array.isArray(allExercises[categoryKey])) {
        const exercises = allExercises[categoryKey];
        let hasValidExercises = false;
        exercises.forEach(ex => {
            if (ex && ex.id) {
                const option = document.createElement('option');
                option.value = ex.id;
                option.textContent = ex.name || ex.id;
                exerciseSelect.appendChild(option);
                hasValidExercises = true;
            }
        });
        exerciseSelect.disabled = !hasValidExercises;
        if (!hasValidExercises) exerciseSelect.innerHTML = '<option value="">-- Nessun esercizio valido --</option>';
    } else if (categoryKey) {
        exerciseSelect.innerHTML = '<option value="">-- Errore Categoria --</option>';
    }

    resetUIState();
    scoreDiv.innerHTML = '<p>Seleziona un esercizio per iniziare.</p>';
    startButton.disabled = true; pauseButton.disabled = true; theoryButton.disabled = false;
    currentExerciseData = null; currentExerciseDefinition = null;
    totalNotesPerRepetition = 0;
}

function selectExercise(exerciseId, categoryKey) {
    if (!exerciseId || !categoryKey || !allExercises[categoryKey] || !Array.isArray(allExercises[categoryKey])) {
        console.warn("Selezione esercizio non valida:", exerciseId, categoryKey);
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        startButton.disabled = true; pauseButton.disabled = true; theoryButton.disabled = false;
        scoreDiv.innerHTML = '<p>Selezione non valida.</p>';
        resetUIState();
        return;
    }

    currentExerciseDefinition = allExercises[categoryKey].find(ex => ex && ex.id === exerciseId);

    if (currentExerciseDefinition) {
        console.log("Esercizio selezionato:", currentExerciseDefinition.name || currentExerciseDefinition.id);
        currentExerciseData = JSON.parse(JSON.stringify(currentExerciseDefinition)); // Deep copy (non ha startTick qui)
        
        targetRepetitions = currentExerciseDefinition.repetitions || DEFAULT_TARGET_REPETITIONS;
        console.log(`Target ripetizioni per questo esercizio: ${targetRepetitions}`);

        totalNotesPerRepetition = 0;
        let hasPlayableNotes = false;
        let noteCounter = 0;
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key]?.length) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.uniqueId = `${key}-${noteCounter++}`;
                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) { 
                            hasPlayableNotes = true;
                            if (typeof noteObj.midiValue === 'number') {
                                totalNotesPerRepetition++;
                                noteObj.expectedMidiValues = [noteObj.midiValue]; 
                            } else if (Array.isArray(noteObj.midiValues)) {
                                totalNotesPerRepetition += noteObj.midiValues.length;
                                noteObj.expectedMidiValues = [...noteObj.midiValues]; 
                            } else {
                                noteObj.expectedMidiValues = []; 
                            }
                        } else {
                             noteObj.expectedMidiValues = []; 
                        }
                    }
                });
            }
        });
        console.log(`Note MIDI suonabili per ripetizione: ${totalNotesPerRepetition}`);

        resetNoteStatesAndRepetition(); // Imposta gli stati (es. 'pending') su currentExerciseData

        // Prima chiamata a renderExercise: calcola i tick, renderizza con stati 'pending'
        let renderOutput = renderExercise(scoreDivId, currentExerciseData);
        if (renderOutput && renderOutput.processedNotes) {
            // Aggiorna currentExerciseData con le note che ora hanno startTick
            if (renderOutput.processedNotes.treble) currentExerciseData.notesTreble = renderOutput.processedNotes.treble;
            if (renderOutput.processedNotes.bass) currentExerciseData.notesBass = renderOutput.processedNotes.bass;
            if (renderOutput.processedNotes.single) currentExerciseData.notes = renderOutput.processedNotes.single;
        }
        // Ora currentExerciseData ha gli startTick e gli stati iniziali 'pending'
        
        highlightPendingNotes(); // Evidenzia le prime note come 'expected' (su currentExerciseData)
                                // e aggiorna il messaggio info. Non fa il render.
        scoreDiv.scrollTop = 0;

        startButton.disabled = !midiReady || !hasPlayableNotes;
        pauseButton.disabled = true; theoryButton.disabled = false;
        resetUIState(); 
        stopButton.disabled = true;

        if (!midiReady) updateInfo("Collega MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare.");
        // L'info per "Premi start" o simile è gestita da highlightPendingNotes

    } else {
        console.error(`Errore: Esercizio ID "${exerciseId}" non trovato.`);
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        startButton.disabled = true; pauseButton.disabled = true; theoryButton.disabled = false;
        scoreDiv.innerHTML = '<p>Errore caricamento esercizio.</p>';
        resetUIState();
    }
}


function clearExerciseSummary() {
    summaryTotalTimeSpan.textContent = '--';
    summaryTotalErrorsSpan.textContent = '--';
    summaryAvgRepTimeSpan.textContent = '--';
    summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato o dati non disponibili.</p>';
}

function initializeNewExerciseStats() {
    exerciseStats = {
        exerciseStartTime: performance.now(), 
        totalPausedDurationMs: 0, 
        exerciseEndTime: 0,
        totalActiveTimeSeconds: 0,
        totalErrors: 0,
        repetitionsData: []
    };
    globalPauseStartTime = 0; 
}

function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum,
        startTime: performance.now(), 
        pausedDurationMs: 0, 
        endTime: 0,
        durationSeconds: 0,
        errorCount: 0,
        errors: [], 
        notesCorrectThisRep: 0 
    };
}

// --- Gestione Stato Esercizio ---
function resetNoteStatesAndRepetition() {
    if (!currentExerciseData) return;
    correctNotesThisRepetition = 0; 
    currentRepetition = 1; 

    ['notes', 'notesTreble', 'notesBass'].forEach(key => {
        if (currentExerciseData[key]?.length) {
            currentExerciseData[key].forEach(noteObj => {
                if (noteObj) {
                    if (noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/')) {
                        noteObj.status = 'rest';
                    } else if (noteObj.expectedMidiValues && noteObj.expectedMidiValues.length > 0) {
                        noteObj.status = 'pending';
                        if (Array.isArray(noteObj.midiValues)) { 
                            noteObj.correctMidiValues = []; 
                        }
                    } else {
                        noteObj.status = 'ignored'; 
                    }
                }
            });
        }
    });
}

function highlightPendingNotes() {
    if (!currentExerciseData) { // Rimosso !isPlaying dalla condizione principale qui
        if (currentExerciseDefinition == null) updateInfo("Seleziona un esercizio.");
        return;
    }

    if (!isPlaying) {
        if (currentExerciseDefinition && midiReady && totalNotesPerRepetition > 0 && !isPaused) {
             updateInfo(`Pronto per ${currentExerciseDefinition.name || currentExerciseDefinition.id}. Premi Start.`);
        } else if (!isPaused && currentExerciseDefinition == null) {
            updateInfo("Seleziona un esercizio.");
        } else if (isPaused) {
            // Non fare nulla, il messaggio di pausa è già impostato
        }
        return;
    }

    // Se isPlaying è true, procedi a trovare e marcare le note
    let activeExpectedNotesDescriptions = [];
    let minNextTick = Infinity;

    let partiallyCompletedChords = [];
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        currentExerciseData[key]?.forEach(noteObj => {
            if (noteObj?.status === 'expected' && Array.isArray(noteObj.midiValues) &&
                noteObj.correctMidiValues.length < noteObj.midiValues.length &&
                typeof noteObj.startTick === 'number' ) { // Aggiunto check per startTick
                partiallyCompletedChords.push(noteObj);
                minNextTick = Math.min(minNextTick, noteObj.startTick);
            }
        });
    });

    if (partiallyCompletedChords.length === 0) {
        minNextTick = Infinity; // Resetta per la ricerca
        ['notesBass', 'notesTreble', 'notes'].forEach(key => {
            currentExerciseData[key]?.forEach(noteObj => {
                if (noteObj?.status === 'pending' && typeof noteObj.startTick === 'number' && noteObj.startTick < minNextTick) {
                    minNextTick = noteObj.startTick;
                }
            });
        });
    }
    
    if (minNextTick === Infinity && partiallyCompletedChords.length === 0) {
        console.log("highlightPendingNotes: Nessuna nota 'pending' o accordo parziale con startTick trovato. Fine ripetizione?");
        return;
    }

    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        currentExerciseData[key]?.forEach(noteObj => {
            if (noteObj && typeof noteObj.startTick === 'number') { // Assicurati che startTick esista
                if (partiallyCompletedChords.includes(noteObj)) {
                    activeExpectedNotesDescriptions.push(getNoteDescriptionForUser(noteObj));
                } else if (noteObj.status === 'pending' && noteObj.startTick === minNextTick) {
                    noteObj.status = 'expected';
                    if (Array.isArray(noteObj.midiValues)) noteObj.correctMidiValues = [];
                    activeExpectedNotesDescriptions.push(getNoteDescriptionForUser(noteObj));
                    console.log(`Nota ${noteObj.uniqueId} marcata come 'expected', tick: ${noteObj.startTick}`);
                }
            }
        });
    });
    
    let infoMsg;
    if (activeExpectedNotesDescriptions.length > 0) {
        infoMsg = `Rip. ${currentRepetition}/${targetRepetitions}. Atteso: ${activeExpectedNotesDescriptions.join(' o ')}`;
    } else if (isPlaying) { 
        infoMsg = `Rip. ${currentRepetition}/${targetRepetitions}. Elaborazione...`;
        console.log("highlightPendingNotes: Nessuna nota attiva da descrivere ma isPlaying è true.");
    } else {
         infoMsg = `Rip. ${currentRepetition}/${targetRepetitions}. Suona...`; // Non dovrebbe arrivare qui se !isPlaying è gestito sopra
    }
    updateInfo(infoMsg);
}


// --- Gestione Scrolling Automatico ---
function startScrolling() {
    if (scrollInterval) clearInterval(scrollInterval);
    if (scoreDiv.scrollHeight <= scoreDiv.clientHeight) return;

    if (correctNotesThisRepetition === 0 && !isPaused) { 
        scoreDiv.scrollTop = 0;
    }
    scrollInterval = setInterval(() => {
        const pixelsToScroll = SCROLL_PIXELS_PER_INTERVAL_BASE * scrollSpeed;
        scoreDiv.scrollTop += pixelsToScroll;
        const scrollableHeight = scoreDiv.scrollHeight - scoreDiv.clientHeight;
        if (scoreDiv.scrollTop >= scrollableHeight - pixelsToScroll) {
             scoreDiv.scrollTop = scrollableHeight;
             stopScrolling(); 
        }
    }, SCROLL_INTERVAL_MS);
}

function stopScrolling() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
}

function pauseExercise() {
    if (!isPlaying || isPaused) return;
    isPaused = true;
    
    currentRepetitionData.pauseStartTimeInternal = performance.now();
    if (!globalPauseStartTime) { 
        globalPauseStartTime = performance.now();
    }

    stopScrolling();
    startButton.disabled = true;
    pauseButton.textContent = "Resume"; pauseButton.disabled = false;
    stopButton.disabled = false; theoryButton.disabled = false;
    updateInfo("Esercizio in Pausa.");
}

function resumeExercise() {
    if (!isPlaying || !isPaused) return;
    isPaused = false;

    if (currentRepetitionData.pauseStartTimeInternal) {
        const repPauseDuration = performance.now() - currentRepetitionData.pauseStartTimeInternal;
        currentRepetitionData.pausedDurationMs += repPauseDuration;
        currentRepetitionData.pauseStartTimeInternal = 0; 
    }
    if (globalPauseStartTime) {
        const globalPauseDuration = performance.now() - globalPauseStartTime;
        exerciseStats.totalPausedDurationMs += globalPauseDuration;
        globalPauseStartTime = 0; 
    }

    startScrolling();
    startButton.disabled = true;
    pauseButton.textContent = "Pause"; pauseButton.disabled = false;
    stopButton.disabled = false; theoryButton.disabled = true;
    highlightPendingNotes(); 
}

function handleTheoryClick() {
    window.open(THEORY_PAGE_URL, '_blank');
}

// --- Funzioni di Controllo Esercizio ---
function startExercise() {
    if (!currentExerciseData || !midiReady || totalNotesPerRepetition === 0 || isPlaying) {
         console.warn("Impossibile avviare.");
         return;
    }
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    
    initializeNewExerciseStats();
    currentRepetition = 1; 
    
    resetNoteStatesAndRepetition(); // Gli startTick dovrebbero essere già in currentExerciseData da selectExercise
    initializeNewRepetitionData(currentRepetition); 

    console.log(`Avvio Esercizio: ${currentExerciseDefinition.name || currentExerciseDefinition.id} - Ripetizione ${currentRepetition}/${targetRepetitions}`);

    isPlaying = true; isPaused = false; // Imposta isPlaying PRIMA di highlightPendingNotes
    startButton.disabled = true; pauseButton.disabled = false; pauseButton.textContent = "Pause";
    stopButton.disabled = false; categorySelect.disabled = true; exerciseSelect.disabled = true;
    theoryButton.disabled = true;
    
    updateSuccessRate(); 
    playedNoteSpan.textContent = '--';
    clearExerciseSummary();

    // Primo render in start: mostra le note 'pending'
    // Gli startTick dovrebbero essere già corretti in currentExerciseData da selectExercise.
    // renderExercise potrebbe ricalcolarli, ma l'output non era riassegnato qui prima.
    let renderOutput = renderExercise(scoreDivId, currentExerciseData);
    if (renderOutput && renderOutput.processedNotes) {
        if (renderOutput.processedNotes.treble) currentExerciseData.notesTreble = renderOutput.processedNotes.treble;
        if (renderOutput.processedNotes.bass) currentExerciseData.notesBass = renderOutput.processedNotes.bass;
        if (renderOutput.processedNotes.single) currentExerciseData.notes = renderOutput.processedNotes.single;
    }

    highlightPendingNotes(); // Ora marca le prime note come 'expected' su currentExerciseData.
                            // Questo opera su dati che hanno startTick e status 'pending'.

    // Il render successivo (nel timeout) mostrerà gli stati 'expected'.
    setTimeout(() => { 
        if (!isPlaying) return; // Se nel frattempo l'utente ha fermato
        const savedScrollTop = scoreDiv.scrollTop;
        // Questo render è per mostrare gli stati 'expected' che highlightPendingNotes ha appena impostato.
        let renderOutputTimeout = renderExercise(scoreDivId, currentExerciseData);
        // Non è strettamente necessario riassegnare qui se gli startTick non cambiano
        // e vexflow_renderer non altera i dati in modo inatteso. Ma per sicurezza:
         if (renderOutputTimeout && renderOutputTimeout.processedNotes) {
             if (renderOutputTimeout.processedNotes.treble) currentExerciseData.notesTreble = renderOutputTimeout.processedNotes.treble;
             if (renderOutputTimeout.processedNotes.bass) currentExerciseData.notesBass = renderOutputTimeout.processedNotes.bass;
             if (renderOutputTimeout.processedNotes.single) currentExerciseData.notes = renderOutputTimeout.processedNotes.single;
         }
        scoreDiv.scrollTop = savedScrollTop;
        setTimeout(startScrolling, 100); 
    }, 50); // Breve ritardo per UI update
}

function finalizeAndStoreRepetitionData() {
    if (!currentRepetitionData.startTime || currentRepetitionData.endTime > 0) return; 

    currentRepetitionData.endTime = performance.now();
    let durationMs = currentRepetitionData.endTime - currentRepetitionData.startTime;
    durationMs -= currentRepetitionData.pausedDurationMs; 
    currentRepetitionData.durationSeconds = parseFloat((Math.max(0, durationMs) / 1000).toFixed(2));

    exerciseStats.repetitionsData.push(JSON.parse(JSON.stringify(currentRepetitionData)));
}

function stopExercise() {
    if (!isPlaying && stopButton.disabled) return;
    const wasPlayingBeforeStop = isPlaying; // Memorizza stato

    if (wasPlayingBeforeStop) { 
        finalizeAndStoreRepetitionData(); 
    }
    
    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) {
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime;
        totalDurationMs -= exerciseStats.totalPausedDurationMs; 
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else {
        exerciseStats.totalActiveTimeSeconds = 0;
    }
    
    displayExerciseSummary();

    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    stopScrolling();
    isPlaying = false; isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition(); // Mette le note in 'pending' o 'rest'
        // Render per mostrare lo stato resettato
        let renderOutput = renderExercise(scoreDivId, currentExerciseData);
        if (renderOutput && renderOutput.processedNotes) {
            if (renderOutput.processedNotes.treble) currentExerciseData.notesTreble = renderOutput.processedNotes.treble;
            if (renderOutput.processedNotes.bass) currentExerciseData.notesBass = renderOutput.processedNotes.bass;
            if (renderOutput.processedNotes.single) currentExerciseData.notes = renderOutput.processedNotes.single;
        }
        scoreDiv.scrollTop = 0;
    } else {
        scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    }
    startButton.disabled = !midiReady || !currentExerciseData || totalNotesPerRepetition === 0;
    pauseButton.disabled = true; pauseButton.textContent = "Pause";
    stopButton.disabled = true; categorySelect.disabled = false; exerciseSelect.disabled = false;
    theoryButton.disabled = false;
    
    highlightPendingNotes(); // Chiamato con isPlaying = false, aggiornerà l'info a "Premi start" etc.
    playedNoteSpan.textContent = '--';
    successRateSpan.textContent = '-- %';
}

function resetUIState() {
    successRateSpan.textContent = '-- %';
    playedNoteSpan.textContent = '--';
    stopButton.disabled = true; pauseButton.disabled = true; pauseButton.textContent = "Pause";
    theoryButton.disabled = false;
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    clearExerciseSummary();
}

function updateSuccessRate() {
    if (!currentExerciseData || totalNotesPerRepetition === 0 || !isPlaying) {
         successRateSpan.textContent = (totalNotesPerRepetition === 0 || !currentExerciseData) ? 'N/A' : '-- %';
         return;
    }
    const percentage = ((currentRepetitionData.notesCorrectThisRep / totalNotesPerRepetition) * 100);
    successRateSpan.textContent = `${percentage.toFixed(1)} %`;
}

function updateInfo(message) {
    expectedNoteSpan.textContent = message;
}

// --- Gestione Input MIDI (NUOVA LOGICA) ---
function handleNoteOn(noteName, midiNote, velocity) {
    playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote})`; // Mostra la nota effettiva suonata
    playedNoteSpan.style.color = '';

    if (!isPlaying || isPaused || !currentExerciseData) return;

    const playedPitchClass = midiNote % 12; // 0=C, 1=C#, ..., 11=B
    console.log(`MIDI In: ${noteName} (${midiNote}), PitchClass: ${playedPitchClass} | Rip: ${currentRepetition}/${targetRepetitions} | Note MIDI corr: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);

    let noteSuccessfullyProcessed = false;
    let noteObjectHit = null;       // L'oggetto nota/accordo VexFlow che ha avuto un match
    let vexFlowNodeCompleted = false; // Flag se una StaveNote intera è stata completata

    const currentlyExpectedVexNotes = [];
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        currentExerciseData[key]?.forEach(noteObj => {
            if (noteObj?.status === 'expected' && typeof noteObj.startTick === 'number') {
                currentlyExpectedVexNotes.push(noteObj);
            }
        });
    });

    if (currentlyExpectedVexNotes.length === 0) {
        console.warn("handleNoteOn: Nessuna nota 'expected' valida trovata. Controllare flusso.");
        updateInfo(`Attenzione: nessuna nota attesa attiva. Riprova o riavvia esercizio se persiste.`);
        return;
    }

    // Cerca un match di PITCH CLASS tra le note attese
    for (const noteObj of currentlyExpectedVexNotes) {
        if (!noteObj.expectedMidiValues || noteObj.expectedMidiValues.length === 0) {
            continue; // Salta se l'oggetto nota atteso non ha MIDI definiti
        }

        if (noteObj.expectedMidiValues.length === 1) { // È una nota singola attesa
            const expectedSingleMidi = noteObj.expectedMidiValues[0];
            const expectedSinglePitchClass = expectedSingleMidi % 12;

            if (playedPitchClass === expectedSinglePitchClass) {
                noteObjectHit = noteObj;
                noteObj.status = 'correct';
                currentRepetitionData.notesCorrectThisRep++;
                correctNotesThisRepetition++; // Contatore VexFlow StaveNotes
                vexFlowNodeCompleted = true;
                noteSuccessfullyProcessed = true;
                console.log(`   [${noteObj.uniqueId.split('-')[0]}] OK Nota singola (Pitch Class) ${MIDI_NOTE_NAMES_ARRAY[playedPitchClass]}. MIDI atteso originale: ${midiToNoteName(expectedSingleMidi)}. VexEv Cont: ${correctNotesThisRepetition}`);
                break; // Nota processata, esci dal loop esterno
            }
        } else { // È un accordo atteso (noteObj.expectedMidiValues.length > 1)
            // Controlla se la pitch class suonata corrisponde a una delle pitch class dei componenti dell'accordo
            // E quel componente specifico (MIDI originale) non è stato ancora soddisfatto.
            for (const expectedChordNoteMidi of noteObj.expectedMidiValues) {
                const expectedChordNotePitchClass = expectedChordNoteMidi % 12;

                if (playedPitchClass === expectedChordNotePitchClass) {
                    if (!noteObj.correctMidiValues) noteObj.correctMidiValues = [];

                    // Verifica se questo specifico MIDI originale dell'accordo è già stato segnato come corretto
                    if (!noteObj.correctMidiValues.includes(expectedChordNoteMidi)) {
                        noteObjectHit = noteObj;
                        noteObj.correctMidiValues.push(expectedChordNoteMidi); // Salva il MIDI originale
                        currentRepetitionData.notesCorrectThisRep++;
                        noteSuccessfullyProcessed = true;
                        console.log(`   [${noteObj.uniqueId.split('-')[0]}] OK Nota (Pitch Class) ${MIDI_NOTE_NAMES_ARRAY[playedPitchClass]} per accordo. MIDI originale comp.: ${midiToNoteName(expectedChordNoteMidi)}. MIDI-Note cont: ${currentRepetitionData.notesCorrectThisRep}. Accordo: ${noteObj.correctMidiValues.length}/${noteObj.expectedMidiValues.length}`);

                        if (noteObj.correctMidiValues.length >= noteObj.expectedMidiValues.length) {
                            noteObj.status = 'correct'; // Accordo intero completato
                            correctNotesThisRepetition++; // Contatore VexFlow StaveNotes
                            vexFlowNodeCompleted = true;
                            console.log(`   -> Accordo ${getNoteDescriptionForUser(noteObj)} completato! VexEv Cont: ${correctNotesThisRepetition}`);
                        }
                        break; // Esci dal loop interno (componenti accordo), la nota MIDI suonata è stata "usata"
                    }
                    // Se expectedChordNoteMidi è già in correctMidiValues, significa che questa pitch class
                    // per questo specifico componente è già stata soddisfatta. Non contare di nuovo.
                    // Se ci sono più note con la stessa pitch class nell'accordo (es. C4 e C5),
                    // l'utente deve suonare quella pitch class due volte per soddisfarle entrambe.
                    // Il break sopra assicura che una nota MIDI suonata soddisfi solo *un* componente.
                }
            }
            if (noteSuccessfullyProcessed) {
                break; // Esci dal loop esterno delle note attese (currentlyExpectedVexNotes)
            }
        }
    }


    // Processa il risultato
    if (noteSuccessfullyProcessed) {
        updateInfo(`OK: ${getNoteDescriptionForUser(noteObjectHit)} (suonata come ${noteName})`);
        updateSuccessRate();

        const savedScrollTop = scoreDiv.scrollTop;
        let renderOutput = renderExercise(scoreDivId, currentExerciseData);
        if (renderOutput && renderOutput.processedNotes) {
            if (renderOutput.processedNotes.treble) currentExerciseData.notesTreble = renderOutput.processedNotes.treble;
            if (renderOutput.processedNotes.bass) currentExerciseData.notesBass = renderOutput.processedNotes.bass;
            if (renderOutput.processedNotes.single) currentExerciseData.notes = renderOutput.processedNotes.single;
        }
        scoreDiv.scrollTop = savedScrollTop;

        if (currentRepetitionData.notesCorrectThisRep >= totalNotesPerRepetition) {
            console.log(`--- Ripetizione ${currentRepetition} di ${targetRepetitions} COMPLETATA (note MIDI)! ---`);
            finalizeAndStoreRepetitionData();

            if (currentRepetition < targetRepetitions) {
                currentRepetition++;
                correctNotesThisRepetition = 0;
                initializeNewRepetitionData(currentRepetition);

                ['notes', 'notesTreble', 'notesBass'].forEach(key => {
                    currentExerciseData[key]?.forEach(noteObj => {
                        if (noteObj && noteObj.status !== 'rest' && noteObj.status !== 'ignored') {
                            noteObj.status = 'pending';
                            if (Array.isArray(noteObj.midiValues)) noteObj.correctMidiValues = []; // Resetta anche per accordi attesi
                            else if (Array.isArray(noteObj.expectedMidiValues) && noteObj.expectedMidiValues.length > 1) { // Controllo aggiuntivo se non si usa midiValues
                                 noteObj.correctMidiValues = [];
                            }
                        }
                    });
                });

                updateInfo(`Ottimo! Prepara Rip. ${currentRepetition}`);
                setTimeout(() => {
                    if (!isPlaying || isPaused) return;

                    const scrollPreRenderNuovaRip = scoreDiv.scrollTop;
                    let renderOutNuovaRip = renderExercise(scoreDivId, currentExerciseData);
                    if (renderOutNuovaRip && renderOutNuovaRip.processedNotes) {
                        if (renderOutNuovaRip.processedNotes.treble) currentExerciseData.notesTreble = renderOutNuovaRip.processedNotes.treble;
                        if (renderOutNuovaRip.processedNotes.bass) currentExerciseData.notesBass = renderOutNuovaRip.processedNotes.bass;
                        if (renderOutNuovaRip.processedNotes.single) currentExerciseData.notes = renderOutNuovaRip.processedNotes.single;
                    }
                    scoreDiv.scrollTop = scrollPreRenderNuovaRip;

                    highlightPendingNotes();

                    const scrollPostHighlightNuovaRip = scoreDiv.scrollTop;
                    let renderOutNuovaRipHighlight = renderExercise(scoreDivId, currentExerciseData);
                    if (renderOutNuovaRipHighlight && renderOutNuovaRipHighlight.processedNotes) {
                        if (renderOutNuovaRipHighlight.processedNotes.treble) currentExerciseData.notesTreble = renderOutNuovaRipHighlight.processedNotes.treble;
                        if (renderOutNuovaRipHighlight.processedNotes.bass) currentExerciseData.notesBass = renderOutNuovaRipHighlight.processedNotes.bass;
                        if (renderOutNuovaRipHighlight.processedNotes.single) currentExerciseData.notes = renderOutNuovaRipHighlight.processedNotes.single;
                    }
                    scoreDiv.scrollTop = scrollPostHighlightNuovaRip;

                    updateSuccessRate();
                    if (scoreDiv.scrollHeight > scoreDiv.clientHeight && correctNotesThisRepetition === 0) {
                        scoreDiv.scrollTop = 0;
                        setTimeout(startScrolling, 100);
                    }
                }, 1500);
            } else {
                console.log("--- TUTTE LE RIPETIZIONI COMPLETATE ---");
                handleExerciseCompletion();
            }
        } else if (vexFlowNodeCompleted) {
            highlightPendingNotes();
            const savedScrollAfterVexNode = scoreDiv.scrollTop;
            let renderOutVexNode = renderExercise(scoreDivId, currentExerciseData);
            if (renderOutVexNode && renderOutVexNode.processedNotes) {
                if (renderOutVexNode.processedNotes.treble) currentExerciseData.notesTreble = renderOutVexNode.processedNotes.treble;
                if (renderOutVexNode.processedNotes.bass) currentExerciseData.notesBass = renderOutVexNode.processedNotes.bass;
                if (renderOutVexNode.processedNotes.single) currentExerciseData.notes = renderOutVexNode.processedNotes.single;
            }
            scoreDiv.scrollTop = savedScrollAfterVexNode;
        }
        // Se né la ripetizione né una VexFlow Node sono finite (es. accordo parziale),
        // non fare highlight, l'accordo rimane 'expected'. Render già fatto.

    } else { // NOTA SBAGLIATA (nessun match di pitch class con le note attese)
        const expectedNotesDescArray = currentlyExpectedVexNotes.map(noteObj => {
            // Genera la descrizione basata sulle pitch class attese
            if (noteObj.expectedMidiValues.length === 1) {
                return MIDI_NOTE_NAMES_ARRAY[noteObj.expectedMidiValues[0] % 12];
            } else {
                const chordPitches = noteObj.expectedMidiValues.map(mVal => MIDI_NOTE_NAMES_ARRAY[mVal % 12]);
                return `Accordo (${chordPitches.join(', ')})`;
            }
        });
        const expectedNotesFullDesc = expectedNotesDescArray.join(' o ');
        const firstExpectedNoteForId = currentlyExpectedVexNotes[0] || { uniqueId: "unknown-error", startTick: -1 };

        console.log(`   Nota ${noteName} (${midiNote}, PC: ${playedPitchClass}) NON attesa (Pitch Class). Attese PCs: ${expectedNotesFullDesc} (al tick ${firstExpectedNoteForId.startTick})`);
        updateInfo(`Errore: ${MIDI_NOTE_NAMES_ARRAY[playedPitchClass]} non atteso. Atteso: ${expectedNotesFullDesc}`);
        playedNoteSpan.style.color = 'red';
        exerciseStats.totalErrors++;
        currentRepetitionData.errorCount++;

        const timeOffsetMs = performance.now() - currentRepetitionData.startTime - currentRepetitionData.pausedDurationMs;

        currentRepetitionData.errors.push({
            expected: expectedNotesFullDesc,
            played: `${MIDI_NOTE_NAMES_ARRAY[playedPitchClass]} (da ${noteName})`, // Mostra la pitch class suonata
            timeOffsetSeconds: parseFloat((Math.max(0, timeOffsetMs) / 1000).toFixed(2)),
            noteId: firstExpectedNoteForId.uniqueId
        });
        // Nessun render necessario qui perché lo stato visivo delle note attese non cambia.
    }
}

// --- Exercise Completion and Advancement Handling (SEQUENTIAL) ---
function handleExerciseCompletion() {
    console.log("[handleExerciseCompletion] Tutte le ripetizioni finite.");
    
    if (currentRepetitionData.endTime === 0 && currentRepetitionData.startTime > 0) {
        finalizeAndStoreRepetitionData(); 
    }

    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) {
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime;
        totalDurationMs -= exerciseStats.totalPausedDurationMs;
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else {
        exerciseStats.totalActiveTimeSeconds = 0;
    }
    displayExerciseSummary(); 

    stopScrolling();
    isPlaying = false; isPaused = false; 

    stopButton.disabled = true; pauseButton.disabled = true; pauseButton.textContent = "Pause";
    playedNoteSpan.textContent = "Bravo!";

    const currentCategoryKey = categorySelect.value;
    const currentExerciseId = currentExerciseDefinition?.id;

    if (!currentCategoryKey || !allExercises[currentCategoryKey] || !currentExerciseId || !Array.isArray(allExercises[currentCategoryKey])) {
        console.error("[handleExerciseCompletion] Stato non valido per avanzamento.");
        categorySelect.disabled = false; exerciseSelect.disabled = false;
        startButton.disabled = !midiReady; theoryButton.disabled = false;
        if (currentExerciseData) { // Solo se c'era un esercizio
             resetNoteStatesAndRepetition(); 
             let renderOutInvalid = renderExercise(scoreDivId, currentExerciseData);
             // Aggiorna per sicurezza anche se probabilmente non verrà usato subito
             if (renderOutInvalid && renderOutInvalid.processedNotes) {
                 if (renderOutInvalid.processedNotes.treble) currentExerciseData.notesTreble = renderOutInvalid.processedNotes.treble;
                 if (renderOutInvalid.processedNotes.bass) currentExerciseData.notesBass = renderOutInvalid.processedNotes.bass;
                 if (renderOutInvalid.processedNotes.single) currentExerciseData.notes = renderOutInvalid.processedNotes.single;
             }
        }
        return;
    }

    const categoryExercises = allExercises[currentCategoryKey];
    let nextExercise = null;
    const currentIndex = categoryExercises.findIndex(ex => ex && ex.id === currentExerciseId);

    if (currentIndex !== -1 && currentIndex < categoryExercises.length - 1) {
         let nextIndex = currentIndex + 1;
         while(nextIndex < categoryExercises.length && (!categoryExercises[nextIndex] || !categoryExercises[nextIndex].id)) {
            nextIndex++;
         }
         if (nextIndex < categoryExercises.length) nextExercise = categoryExercises[nextIndex];
    }

    if (nextExercise && nextExercise.id) {
        const delay = 3000; 
        updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}...`);
        categorySelect.disabled = true; exerciseSelect.disabled = true; 
        startButton.disabled = true; pauseButton.disabled = true; stopButton.disabled = true; theoryButton.disabled = true;

        exerciseCompletionTimeout = setTimeout(() => {
            exerciseCompletionTimeout = null;
            exerciseSelect.value = nextExercise.id; 
            selectExercise(nextExercise.id, currentCategoryKey); // Questo ora gestisce correttamente i tick e highlight

            if (midiReady && currentExerciseData && totalNotesPerRepetition > 0) {
                 setTimeout(startExercise, 200); 
            } else {
                 theoryButton.disabled = false; 
                 // L'info corretta (Collega MIDI, Nessuna nota, Premi Start) dovrebbe
                 // essere già stata impostata da selectExercise -> highlightPendingNotes
            }
        }, delay);
    } else {
        updateInfo("Categoria Completata! Scegli una nuova categoria o esercizio.");
        playedNoteSpan.textContent = "Ottimo Lavoro!";
        categorySelect.disabled = false; exerciseSelect.disabled = false;
        startButton.disabled = true; 
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        renderExercise(scoreDivId, null); 
        scoreDiv.innerHTML = '<p>Categoria completata! Scegli un nuovo esercizio.</p>';
    }
}


function displayExerciseSummary() {
    if (!exerciseStats || !exerciseStats.repetitionsData || Object.keys(exerciseStats).length === 0) {
        clearExerciseSummary();
        return;
    }

    summaryTotalTimeSpan.textContent = `${(exerciseStats.totalActiveTimeSeconds || 0).toFixed(2)} s`;
    summaryTotalErrorsSpan.textContent = exerciseStats.totalErrors || 0;

    let totalRepDurationSum = 0;
    let validRepCount = 0;
    exerciseStats.repetitionsData.forEach(rep => {
        if (rep.durationSeconds > 0) { 
            totalRepDurationSum += rep.durationSeconds;
            validRepCount++;
        }
    });
    const avgRepTime = validRepCount > 0 ? (totalRepDurationSum / validRepCount).toFixed(2) : "N/A";
    summaryAvgRepTimeSpan.textContent = `${avgRepTime} s`;

    summaryErrorsListDiv.innerHTML = '';
    if (exerciseStats.totalErrors > 0) {
        const ul = document.createElement('ul');
        let hasErrorDetails = false;
        exerciseStats.repetitionsData.forEach(repData => {
            if (repData.errors.length > 0) {
                hasErrorDetails = true;
                repData.errors.forEach(err => {
                    const li = document.createElement('li');
                    li.innerHTML = `Rip. <strong>${repData.repetitionNumber}</strong>: Att. <strong>${err.expected}</strong>, Suon. <strong>${err.played}</strong> <small>(${err.timeOffsetSeconds}s)</small>`;
                    ul.appendChild(li);
                });
            }
        });
        if (hasErrorDetails) {
            summaryErrorsListDiv.appendChild(ul);
        } else {
            summaryErrorsListDiv.innerHTML = '<p>Errori presenti, ma dettagli non registrati per ripetizione.</p>';
        }
    } else if (exerciseStats.exerciseStartTime > 0) { 
        summaryErrorsListDiv.innerHTML = '<p>Ottimo! Nessun errore.</p>';
    } else {
        summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato.</p>';
    }
}

// --- updateMidiStatus Function ---
function updateMidiStatus(message, isConnected) {
    midiStatusSpan.textContent = message;
    midiReady = isConnected;
    const exerciseSelectedAndPlayable = currentExerciseData && totalNotesPerRepetition > 0;

    if (isConnected) {
        startButton.disabled = isPlaying || !exerciseSelectedAndPlayable;
        pauseButton.disabled = !isPlaying || isPaused; 
        theoryButton.disabled = isPlaying && !isPaused; 

        if (!isPlaying) { 
            // L'aggiornamento dell'info ("Pronto...", "Seleziona...")
            // è gestito da highlightPendingNotes, che viene chiamato da selectExercise.
            // Quindi, non è necessario duplicare quella logica qui.
            if (!exerciseSelectedAndPlayable) { // Se nessun esercizio pronto, diamo un msg generico
                updateInfo("MIDI pronto. Seleziona un esercizio.");
            } else {
                 highlightPendingNotes(); // Assicura che il messaggio sia corretto se l'esercizio è già selezionato
            }
        }
    } else { 
        startButton.disabled = true;
        pauseButton.disabled = true; 
        stopButton.disabled = !isPlaying; 
        theoryButton.disabled = true; 
        updateInfo("Collega un dispositivo MIDI per iniziare.");
        if (isPlaying) {
            console.warn("MIDI disconnesso durante l'esecuzione!");
            pauseExercise(); 
            alert("ATTENZIONE: Dispositivo MIDI disconnesso! Esercizio messo in pausa.");
        }
    }
}

// --- Event Listeners ---
categorySelect.addEventListener('change', (e) => { populateExerciseSelect(e.target.value); });
exerciseSelect.addEventListener('change', (e) => { selectExercise(e.target.value, categorySelect.value); });
startButton.addEventListener('click', startExercise);
stopButton.addEventListener('click', stopExercise);
pauseButton.addEventListener('click', () => { if (isPaused) resumeExercise(); else pauseExercise(); });
theoryButton.addEventListener('click', handleTheoryClick);

// --- Application Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM caricato. Piano Future (Correzione Tick + Logica Stringente)...");
    loadExerciseData();
    initializeMIDI(handleNoteOn, updateMidiStatus);
    resetUIState(); 
    scoreDiv.innerHTML = '<p>Benvenuto! Seleziona una categoria e un esercizio.</p>';
    updateInfo("Collega un dispositivo MIDI e seleziona un esercizio."); 

    scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
    scrollSpeed = parseInt(scrollSpeedControl.value, 10);
    scrollSpeedControl.addEventListener('input', (e) => {
        scrollSpeed = parseInt(e.target.value, 10);
        scrollSpeedValueSpan.textContent = e.target.value;
        console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
    });

    const nextSystemButton = document.getElementById('next-system-button');
    if (nextSystemButton) {
        // nextSystemButton.addEventListener('click', () => { /* logica se necessaria */ });
    }
});