/**
 * main.js - Logica principale e gestione eventi Piano Future.
 * **VERSIONE CON RACCOLTA STATISTICHE AVANZATA**
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
let totalNotesPerRepetition = 0; // Note totali da suonare (considera accordi come multiple note)
let correctNotesThisRepetition = 0; // Note MIDI corrette suonate in questa ripetizione
let currentRepetition = 1;
const DEFAULT_TARGET_REPETITIONS = 5;
let targetRepetitions = DEFAULT_TARGET_REPETITIONS;

// --- NUOVE STRUTTURE PER STATISTICHE ---
let exerciseStats = {};
let currentRepetitionData = {};
let globalPauseStartTime = 0; // Per tracciare la durata totale delle pause globali

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
    clearExerciseSummary(); // Pulisci statistiche quando cambia categoria
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

    resetUIState(); // Chiama clearExerciseSummary internamente
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
        currentExerciseData = JSON.parse(JSON.stringify(currentExerciseDefinition)); // Deep copy
        
        targetRepetitions = currentExerciseDefinition.repetitions || DEFAULT_TARGET_REPETITIONS;
        console.log(`Target ripetizioni per questo esercizio: ${targetRepetitions}`);

        totalNotesPerRepetition = 0;
        let hasPlayableNotes = false;
        let noteCounter = 0; // Per uniqueId
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key]?.length) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        // Aggiungi un ID univoco per riferimento futuro, basato su chiave e indice originale
                        noteObj.uniqueId = `${key}-${noteCounter++}`;
                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) { // Non è una pausa
                            hasPlayableNotes = true;
                            if (typeof noteObj.midiValue === 'number') {
                                totalNotesPerRepetition++;
                            } else if (Array.isArray(noteObj.midiValues)) {
                                totalNotesPerRepetition += noteObj.midiValues.length;
                            }
                        }
                    }
                });
            }
        });
        console.log(`Note MIDI suonabili per ripetizione: ${totalNotesPerRepetition}`);

        resetNoteStatesAndRepetition(); // Resetta stati note VexFlow e contatori ripetizione
        highlightPendingNotes();
        renderExercise(scoreDivId, currentExerciseData); // renderExercise userà i dati processati
        scoreDiv.scrollTop = 0;

        startButton.disabled = !midiReady || !hasPlayableNotes;
        pauseButton.disabled = true; theoryButton.disabled = false;
        resetUIState(); // Chiama clearExerciseSummary
        stopButton.disabled = true;

        if (!midiReady) updateInfo("Collega MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare.");
        else updateInfo("MIDI pronto. Premi Start.");
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
        exerciseStartTime: performance.now(), // Ora di inizio assoluta dell'esercizio
        totalPausedDurationMs: 0, // Durata totale di tutte le pause
        exerciseEndTime: 0,
        totalActiveTimeSeconds: 0,
        totalErrors: 0,
        repetitionsData: []
    };
    globalPauseStartTime = 0; // Resetta il tracker per le pause globali
}

function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum,
        startTime: performance.now(), // Ora di inizio della ripetizione
        pausedDurationMs: 0, // Durata delle pause durante questa ripetizione
        endTime: 0,
        durationSeconds: 0,
        errorCount: 0,
        errors: [], // { expected: "C4/60", played: "C#4/61", timeOffsetSeconds: 2.34, noteId: "treble-0" }
        notesCorrectThisRep: 0 // Conteggio note MIDI corrette per questa ripetizione
    };
}

// --- Gestione Stato Esercizio ---
function resetNoteStatesAndRepetition() {
    if (!currentExerciseData) return;
    correctNotesThisRepetition = 0; // Resetta il contatore principale per handleNoteOn
    currentRepetition = 1; // Resetta il numero di ripetizione

    ['notes', 'notesTreble', 'notesBass'].forEach(key => {
        if (currentExerciseData[key]?.length) {
            currentExerciseData[key].forEach(noteObj => {
                if (noteObj) {
                    if (noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/')) {
                        noteObj.status = 'rest';
                    } else if (typeof noteObj.midiValue === 'number' || (Array.isArray(noteObj.midiValues) && noteObj.midiValues.length > 0)) {
                        noteObj.status = 'pending';
                        if (Array.isArray(noteObj.midiValues)) {
                            noteObj.correctMidiValues = []; // Per tracciare le note corrette di un accordo
                        }
                    } else {
                        noteObj.status = 'ignored'; // Nota non suonabile o non definita correttamente
                    }
                }
            });
        }
    });
}

function highlightPendingNotes() {
    if (!currentExerciseData) return;
    let firstExpectedText = `Rip. ${currentRepetition}/${targetRepetitions}. Suona...`;
    let foundFirst = false;

    const processArray = (notesArray) => {
        if (!notesArray) return;
        notesArray.forEach(noteObj => {
            if (noteObj?.status === 'pending') {
                noteObj.status = 'expected'; // Marca la prima 'pending' come 'expected'
                if (Array.isArray(noteObj.midiValues)) noteObj.correctMidiValues = []; // Resetta per accordi
                if (!foundFirst) {
                    if (noteObj.keys) firstExpectedText = `Rip. ${currentRepetition}/${targetRepetitions}. Atteso: ${noteObj.keys.join(', ')}`;
                    else if (Array.isArray(noteObj.midiValues)) firstExpectedText = `Rip. ${currentRepetition}/${targetRepetitions}. Atteso: Accordo (${noteObj.midiValues.map(m => midiToNoteName(m)).join(', ')})`;
                    else if (typeof noteObj.midiValue === 'number') firstExpectedText = `Rip. ${currentRepetition}/${targetRepetitions}. Atteso: ${midiToNoteName(noteObj.midiValue)}`;
                    foundFirst = true;
                }
            }
        });
    };
    // Cerca prima nel basso, poi acuto, poi singolo (se applicabile)
    // Questo ordine è importante per come le note vengono tipicamente lette/suonate
    processArray(currentExerciseData.notesBass);
    if (!foundFirst) processArray(currentExerciseData.notesTreble); // Solo se non già trovata nel basso
    if (!foundFirst && currentExerciseData.notes) processArray(currentExerciseData.notes); // Solo se non trovata prima

    updateInfo(firstExpectedText);
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
    
    // Registra l'inizio della pausa per la ripetizione corrente e globale
    currentRepetitionData.pauseStartTimeInternal = performance.now();
    if (!globalPauseStartTime) { // Se non è già in una pausa globale (improbabile qui, ma per sicurezza)
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

    // Calcola la durata della pausa e aggiungila ai totali delle pause
    if (currentRepetitionData.pauseStartTimeInternal) {
        const repPauseDuration = performance.now() - currentRepetitionData.pauseStartTimeInternal;
        currentRepetitionData.pausedDurationMs += repPauseDuration;
        currentRepetitionData.pauseStartTimeInternal = 0; // Resetta per la prossima pausa
    }
    if (globalPauseStartTime) {
        const globalPauseDuration = performance.now() - globalPauseStartTime;
        exerciseStats.totalPausedDurationMs += globalPauseDuration;
        globalPauseStartTime = 0; // Resetta
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
    currentRepetition = 1; // Inizia dalla prima ripetizione
    
    resetNoteStatesAndRepetition(); // Resetta stati note VexFlow e `correctNotesThisRepetition`
    initializeNewRepetitionData(currentRepetition); // Inizializza dati per la prima ripetizione

    console.log(`Avvio Esercizio: ${currentExerciseDefinition.name || currentExerciseDefinition.id} - Ripetizione ${currentRepetition}/${targetRepetitions}`);

    isPlaying = true; isPaused = false;
    startButton.disabled = true; pauseButton.disabled = false; pauseButton.textContent = "Pause";
    stopButton.disabled = false; categorySelect.disabled = true; exerciseSelect.disabled = true;
    theoryButton.disabled = true;
    updateSuccessRate(); // Usa correctNotesThisRepetition (che è 0)
    playedNoteSpan.textContent = '--';
    clearExerciseSummary();

    highlightPendingNotes();
    renderExercise(scoreDivId, currentExerciseData);
    setTimeout(startScrolling, 200);
}

function finalizeAndStoreRepetitionData() {
    if (!currentRepetitionData.startTime || currentRepetitionData.endTime > 0) return; // Già finalizzata o non iniziata

    currentRepetitionData.endTime = performance.now();
    let durationMs = currentRepetitionData.endTime - currentRepetitionData.startTime;
    durationMs -= currentRepetitionData.pausedDurationMs; // Sottrai il tempo di pausa di questa ripetizione
    currentRepetitionData.durationSeconds = parseFloat((Math.max(0, durationMs) / 1000).toFixed(2));

    exerciseStats.repetitionsData.push(JSON.parse(JSON.stringify(currentRepetitionData))); // Deep copy
    // exerciseStats.totalErrors è già aggiornato in handleNoteOn
}

function stopExercise() {
    if (!isPlaying && stopButton.disabled) return;

    if (isPlaying) { // Se l'esercizio era in corso
        finalizeAndStoreRepetitionData(); // Finalizza i dati della ripetizione corrente
    }
    
    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) {
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime;
        totalDurationMs -= exerciseStats.totalPausedDurationMs; // Sottrai tutte le pause globali
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else {
        exerciseStats.totalActiveTimeSeconds = 0;
    }
    
    displayExerciseSummary();

    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    stopScrolling();
    isPlaying = false; isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition();
        renderExercise(scoreDivId, currentExerciseData);
        scoreDiv.scrollTop = 0;
    } else {
        scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    }
    startButton.disabled = !midiReady || !currentExerciseData || totalNotesPerRepetition === 0;
    pauseButton.disabled = true; pauseButton.textContent = "Pause";
    stopButton.disabled = true; categorySelect.disabled = false; exerciseSelect.disabled = false;
    theoryButton.disabled = false;
    updateInfo("Esercizio interrotto.");
    playedNoteSpan.textContent = '--';
    successRateSpan.textContent = '-- %';
}

function resetUIState() {
    isPlaying = false; isPaused = false;
    successRateSpan.textContent = '-- %';
    updateInfo("-- Seleziona o avvia --");
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
    // Usa correctNotesThisRepetition (note MIDI corrette)
    const percentage = ((currentRepetitionData.notesCorrectThisRep / totalNotesPerRepetition) * 100);
    successRateSpan.textContent = `${percentage.toFixed(1)} %`;
}

function updateInfo(message) {
    expectedNoteSpan.textContent = message;
}

// --- Gestione Input MIDI (Con Ripetizioni e Statistiche) ---
function handleNoteOn(noteName, midiNote, velocity) {
    playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote})`;
    playedNoteSpan.style.color = '';

    if (!isPlaying || isPaused || !currentExerciseData) return;

    console.log(`MIDI In: ${noteName} (${midiNote}) | Rip: ${currentRepetition}/${targetRepetitions} | Note MIDI corr: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);

    let noteMatchedAndMarked = false;
    let firstExpectedNoteObject = null; // Per memorizzare l'oggetto nota atteso

    const findAndProcessExpected = (notesArray, arrayName) => {
        if (noteMatchedAndMarked || !notesArray) return;
        for (let noteObj of notesArray) {
            if (noteObj?.status === 'expected') {
                firstExpectedNoteObject = noteObj; // Memorizza l'oggetto della prima nota attesa
                if (typeof noteObj.midiValue === 'number' && noteObj.midiValue === midiNote) {
                    noteObj.status = 'correct';
                    correctNotesThisRepetition++; // Questo contatore si riferisce agli "eventi nota" di VexFlow (può essere una nota singola o un accordo intero)
                    currentRepetitionData.notesCorrectThisRep++; // Contatore note MIDI
                    noteMatchedAndMarked = true;
                    console.log(`   [${arrayName}] OK Nota singola ${noteName}. VexEv: ${correctNotesThisRepetition}, MIDI: ${currentRepetitionData.notesCorrectThisRep}`);
                    return;
                } else if (Array.isArray(noteObj.midiValues) && noteObj.midiValues.includes(midiNote)) {
                    if (!noteObj.correctMidiValues) noteObj.correctMidiValues = [];
                    if (!noteObj.correctMidiValues.includes(midiNote)) { // Evita di contare due volte la stessa nota di un accordo
                        noteObj.correctMidiValues.push(midiNote);
                        currentRepetitionData.notesCorrectThisRep++; // Contatore note MIDI
                        noteMatchedAndMarked = true; // Una parte dell'accordo è corretta
                        console.log(`   [${arrayName}] OK Nota ${noteName} accordo. Note MIDI: ${currentRepetitionData.notesCorrectThisRep}. Note accordo: ${noteObj.correctMidiValues.length}/${noteObj.midiValues.length}`);
                        if (noteObj.correctMidiValues.length >= noteObj.midiValues.length) {
                            noteObj.status = 'correct'; // Accordo completato
                            correctNotesThisRepetition++; // Incrementa il contatore eventi VexFlow
                             console.log(`   -> Accordo in ${arrayName} completato! VexEv: ${correctNotesThisRepetition}`);
                        }
                        return;
                    }
                }
                // Se arriva qui, la prima 'expected' non ha matchato (o era parte di un accordo già suonata)
                // Non fare break qui per permettere di controllare altre note 'expected' se la prima è un accordo parzialmente suonato
                // Tuttavia, per la registrazione dell'errore, ci interessa la prima nota veramente attesa e non ancora soddisfatta.
                // La logica di registrazione errore dopo questa funzione gestirà il caso "nota sbagliata".
            }
        }
    };

    findAndProcessExpected(currentExerciseData.notesBass, 'Bass');
    if (!noteMatchedAndMarked) findAndProcessExpected(currentExerciseData.notesTreble, 'Treble');
    if (!noteMatchedAndMarked && currentExerciseData.notes) findAndProcessExpected(currentExerciseData.notes, 'Single');


    if (noteMatchedAndMarked) {
        updateInfo(`OK: ${noteName}`);
        updateSuccessRate();
        
        const savedScrollTop = scoreDiv.scrollTop;
        renderExercise(scoreDivId, currentExerciseData);
        scoreDiv.scrollTop = savedScrollTop;

        // Verifica se TUTTE LE NOTE MIDI della ripetizione sono state suonate
        if (currentRepetitionData.notesCorrectThisRep >= totalNotesPerRepetition) {
            console.log(`--- Ripetizione ${currentRepetition} di ${targetRepetitions} COMPLETATA (note MIDI)! ---`);
            finalizeAndStoreRepetitionData();

            if (currentRepetition < targetRepetitions) {
                currentRepetition++;
                correctNotesThisRepetition = 0; // Resetta per VexFlow events
                initializeNewRepetitionData(currentRepetition);

                 ['notes', 'notesTreble', 'notesBass'].forEach(key => {
                    if (currentExerciseData[key]?.length) {
                        currentExerciseData[key].forEach(noteObj => {
                            if (noteObj && noteObj.status !== 'rest' && noteObj.status !== 'ignored') {
                                noteObj.status = 'pending';
                                if (Array.isArray(noteObj.midiValues)) noteObj.correctMidiValues = [];
                            }
                        });
                    }
                });
                updateInfo(`Ottimo! Prepara Rip. ${currentRepetition}`);
                setTimeout(() => {
                    if (!isPlaying || isPaused) return;
                    highlightPendingNotes();
                    const savedScrollTopNewRep = scoreDiv.scrollTop;
                    renderExercise(scoreDivId, currentExerciseData);
                    scoreDiv.scrollTop = savedScrollTopNewRep;
                    updateSuccessRate(); // Sarà 0% per la nuova rip
                    setTimeout(startScrolling, 100);
                }, 1500);
            } else {
                console.log("--- TUTTE LE RIPETIZIONI COMPLETATE ---");
                handleExerciseCompletion();
            }
        } else {
            // Se la nota MIDI corretta non completa la ripetizione, ma potrebbe aver completato un evento VexFlow (es. un accordo)
            // assicurati di evidenziare la prossima nota/accordo VexFlow
            if (firstExpectedNoteObject && firstExpectedNoteObject.status === 'correct') {
                 highlightPendingNotes(); // Se l'evento VexFlow corrente è stato completato
            }
        }
    } else { // Nota sbagliata
        console.log(`   Nota ${noteName} (${midiNote}) non attesa.`);
        updateInfo(`Errore: ${noteName} non atteso`);
        playedNoteSpan.style.color = 'red';
        exerciseStats.totalErrors++; // Incrementa il contatore globale di errori

        const timeOffsetMs = performance.now() - currentRepetitionData.startTime - currentRepetitionData.pausedDurationMs;
        let expectedNotesDesc = "N/A";
        let expectedNoteUniqueId = "unknown";

        if (firstExpectedNoteObject) { // Usa l'oggetto nota catturato durante la ricerca
            expectedNoteUniqueId = firstExpectedNoteObject.uniqueId;
            if (firstExpectedNoteObject.keys) expectedNotesDesc = firstExpectedNoteObject.keys.map(k => k.replace(/\/\d/, '')).join(',');
            else if (Array.isArray(firstExpectedNoteObject.midiValues)) expectedNotesDesc = firstExpectedNoteObject.midiValues.map(m => midiToNoteName(m)).join(' o ');
            else if (typeof firstExpectedNoteObject.midiValue === 'number') expectedNotesDesc = midiToNoteName(firstExpectedNoteObject.midiValue);
        } else {
            // Fallback se firstExpectedNoteObject non è stato impostato (dovrebbe esserlo)
            // Cerca la prima nota con status 'expected' per la descrizione
             const findExpectedDesc = (notesArr) => {
                if(!notesArr) return false;
                for(const noteObj of notesArr) {
                    if(noteObj && noteObj.status === 'expected') {
                        expectedNoteUniqueId = noteObj.uniqueId;
                        if (noteObj.keys) expectedNotesDesc = noteObj.keys.map(k => k.replace(/\/\d/, '')).join(',');
                        else if (Array.isArray(noteObj.midiValues)) expectedNotesDesc = noteObj.midiValues.map(m => midiToNoteName(m)).join(' o ');
                        else if (typeof noteObj.midiValue === 'number') expectedNotesDesc = midiToNoteName(noteObj.midiValue);
                        return true;
                    }
                }
                return false;
            };
            if(!findExpectedDesc(currentExerciseData.notesBass))
                if(!findExpectedDesc(currentExerciseData.notesTreble))
                    findExpectedDesc(currentExerciseData.notes);
        }

        currentRepetitionData.errors.push({
            expected: expectedNotesDesc,
            played: `${midiToNoteName(midiNote)} (${midiNote})`,
            timeOffsetSeconds: parseFloat((Math.max(0, timeOffsetMs) / 1000).toFixed(2)),
            noteId: expectedNoteUniqueId
        });
        currentRepetitionData.errorCount++;
    }
}

// --- Exercise Completion and Advancement Handling (SEQUENTIAL) ---
function handleExerciseCompletion() {
    console.log("[handleExerciseCompletion] Tutte le ripetizioni finite. Avanzamento sequenziale.");
    
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
        const delay = 3000; // Aumentato un po' il delay per leggere le statistiche
        updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}...`);
        categorySelect.disabled = true; exerciseSelect.disabled = true;
        startButton.disabled = true; pauseButton.disabled = true; stopButton.disabled = true; theoryButton.disabled = true;

        exerciseCompletionTimeout = setTimeout(() => {
            exerciseCompletionTimeout = null;
            exerciseSelect.value = nextExercise.id;
            selectExercise(nextExercise.id, currentCategoryKey); 

            if (midiReady && currentExerciseData && totalNotesPerRepetition > 0) {
                 setTimeout(startExercise, 200);
            } else {
                 theoryButton.disabled = false;
                 if (!midiReady) updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Collega MIDI.`);
                 else if (totalNotesPerRepetition === 0) updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Nessuna nota suonabile.`);
                 else updateInfo(`Prossimo: ${nextExercise.name || nextExercise.id}. Premi Start.`);
            }
        }, delay);
    } else {
        updateInfo("Categoria Completata! Scegli una nuova categoria o esercizio.");
        playedNoteSpan.textContent = "Ottimo Lavoro!";
        categorySelect.disabled = false; exerciseSelect.disabled = false;
        startButton.disabled = true; // O basato su midiReady e se un esercizio è selezionato
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
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
        if (rep.durationSeconds > 0) { // Considera solo ripetizioni con durata valida
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
    } else if (exerciseStats.exerciseStartTime > 0) { // Se l'esercizio è stato avviato
        summaryErrorsListDiv.innerHTML = '<p>Ottimo! Nessun errore.</p>';
    } else {
        summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato.</p>';
    }
}

// --- updateMidiStatus Function ---
function updateMidiStatus(message, isConnected) {
    midiStatusSpan.textContent = message;
    midiReady = isConnected;

    if (isConnected) {
        startButton.disabled = isPlaying || !currentExerciseData || totalNotesPerRepetition === 0;
        pauseButton.disabled = !isPlaying || isPaused;
        theoryButton.disabled = isPlaying && !isPaused;
        if (!isPlaying) { // Solo se non si sta già suonando
             if (currentExerciseData && totalNotesPerRepetition > 0) {
                 updateInfo(`MIDI pronto. Premi Start per ${currentExerciseDefinition.name || currentExerciseDefinition.id}.`);
             } else {
                 updateInfo("MIDI pronto. Seleziona un esercizio.");
             }
        }
    } else {
        startButton.disabled = true; pauseButton.disabled = true; // Non si può fermare se MIDI si scollega e non era in play? StopButton dovrebbe rimanere attivo se isPlaying
        stopButton.disabled = !isPlaying; // Permetti stop se stava suonando
        theoryButton.disabled = true; // In generale, disabilita teoria se non c'è MIDI
        updateInfo("Collega un dispositivo MIDI per iniziare.");
        if (isPlaying) {
            console.warn("MIDI disconnesso durante l'esecuzione!");
            // Pausa automatica o stop? Per ora, l'utente deve fermare manualmente o l'esercizio prosegue "al buio".
            // Potremmo chiamare pauseExercise() qui
            pauseExercise(); // Mette in pausa se MIDI si scollega
            alert("ATTENZIONE: Dispositivo MIDI disconnesso! Esercizio messo in pausa.");
            updateInfo("MIDI Disconnesso! Esercizio in pausa. Riconnetti e premi Resume o Stop.");
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
    console.log("DOM caricato. Inizializzazione Piano Future (Statistiche Avanzate COMPLETE)...");
    loadExerciseData();
    initializeMIDI(handleNoteOn, updateMidiStatus);
    resetUIState(); // Chiama clearExerciseSummary
    scoreDiv.innerHTML = '<p>Benvenuto! Seleziona una categoria e un esercizio.</p>';
    updateInfo("Collega un dispositivo MIDI e seleziona un esercizio.");

    scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
    scrollSpeed = parseInt(scrollSpeedControl.value, 10);
    scrollSpeedControl.addEventListener('input', (e) => {
        scrollSpeed = parseInt(e.target.value, 10);
        scrollSpeedValueSpan.textContent = e.target.value;
        console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
    });
});