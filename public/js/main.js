/**
 * main.js
 * Logica principale per Piano Tutor Extrame Edition V2
 * VERSIONE COMPLETA CON IMPLEMENTAZIONI DI BASE E INTEGRAZIONE AI
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

// --- Riferimenti DOM per Feedback AI ---
let aiFeedbackContentDiv = null;
let getAIFeedbackButton = null;
const AI_BACKEND_ENDPOINT = '/api/get_ai_feedback';

// --- Stato Applicazione ---
let allExercises = {};
let currentExerciseDefinition = null;
let currentExerciseData = null; // Dati dell'esercizio in corso, con stati delle note, ecc.
let isPlaying = false;
let isPaused = false;
let midiReady = false;
let exerciseCompletionTimeout = null;

// --- Stato Avanzamento Esercizio ---
let totalNotesInExercise = 0; // Totale note suonabili nell'intero esercizio (non per ripetizione)
let correctNotesInExercise = 0; // Totale note corrette nell'intero esercizio

let totalNotesPerRepetition = 0; // Note suonabili per una singola ripetizione
let correctNotesThisRepetition = 0; // Note corrette nella ripetizione corrente
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
    allRepetitionsData: [],
};
let currentRepetitionData = {};
let globalPauseStartTime = 0;

// --- Stato Scrolling ---
let scrollInterval = null;
let scrollSpeed = 1;
const SCROLL_INTERVAL_MS = 400;
const SCROLL_PIXELS_PER_INTERVAL_BASE = 0.5;

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
        if (Array.isArray(noteObj.correctMidiValues) && noteObj.expectedMidiValues.length > 1 && noteObj.correctMidiValues.length < noteObj.expectedMidiValues.length) {
            const remainingMidi = noteObj.expectedMidiValues.filter(mVal => !noteObj.correctMidiValues.includes(mVal));
            if (remainingMidi.length > 0) {
                const remainingNotesFull = remainingMidi.map(mVal => midiToNoteName(mVal));
                desc = `Accordo (Attese: ${expectedNotesFull.join(', ')}. Rimanenti: ${remainingNotesFull.join(', ')})`;
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
        console.log("Dati esercizi caricati:", Object.keys(allExercises).length, "categorie.");
    } else {
        console.error("Errore: window.exerciseData non trovato.");
        alert("Errore caricamento dati esercizi.");
    }
    populateCategorySelect();
}

function populateCategorySelect() {
    if (!categorySelect) return;
    categorySelect.innerHTML = '<option value="">-- Seleziona Categoria --</option>';
    if (!allExercises || Object.keys(allExercises).length === 0) {
        if (exerciseSelect) { exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>'; exerciseSelect.disabled = true; }
        return;
    }
    const categories = Object.keys(allExercises);
    categories.forEach(catKey => {
        if (allExercises[catKey] && Array.isArray(allExercises[catKey]) && allExercises[catKey].length > 0 && allExercises[catKey].some(ex => ex && ex.id)) {
            const option = document.createElement('option');
            option.value = catKey;
            option.textContent = catKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            categorySelect.appendChild(option);
        }
    });
    if (exerciseSelect) { exerciseSelect.innerHTML = '<option value="">-- Seleziona Esercizio --</option>'; exerciseSelect.disabled = true; }
    clearExerciseSummary();
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
}

function populateExerciseSelect(categoryKey) {
    if (!exerciseSelect) return;
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
        if (!hasValidExercises) exerciseSelect.innerHTML = '<option value="">-- Nessun esercizio --</option>';
    }
    clearExerciseSummary();
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
}

function selectExercise(exerciseId, categoryKey) {
    if (!exerciseId || !categoryKey || !allExercises[categoryKey]) {
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        if(startButton) startButton.disabled = true; if(pauseButton) pauseButton.disabled = true;
        if(scoreDiv) scoreDiv.innerHTML = '<p>Selezione non valida.</p>';
        resetUIState(); return;
    }
    currentExerciseDefinition = allExercises[categoryKey].find(ex => ex && ex.id === exerciseId);
    if (currentExerciseDefinition) {
        currentExerciseData = JSON.parse(JSON.stringify(currentExerciseDefinition));
        targetRepetitions = currentExerciseDefinition.repetitions || DEFAULT_TARGET_REPETITIONS;
        totalNotesPerRepetition = 0;
        let hasPlayableNotes = false;
        let noteCounter = 0;

        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key]?.length) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.uniqueId = `${key}-${noteCounter++}`;
                        let midiVals = [];
                        if (typeof noteObj.midiValue === 'number') midiVals = [noteObj.midiValue];
                        else if (Array.isArray(noteObj.midiValues)) midiVals = noteObj.midiValues;
                        noteObj.expectedMidiValues = midiVals;
                        noteObj.status = 'pending';
                        noteObj.isCorrect = false;
                        noteObj.playedMidiValue = null;
                        noteObj.correctMidiValues = []; // Per accordi
                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) {
                            if (midiVals.length > 0) hasPlayableNotes = true;
                            totalNotesPerRepetition += midiVals.length;
                        }
                    }
                });
            }
        });
        totalNotesInExercise = totalNotesPerRepetition * targetRepetitions;
        correctNotesInExercise = 0;

        resetNoteStatesAndRepetition();
        let renderOutput = renderExercise(scoreDivId, currentExerciseData); // Chiamata VexFlow
        if (renderOutput && renderOutput.processedNotes) { // Aggiorna con note processate da VexFlow (con startTick, yPos)
            currentExerciseData.notesTreble = renderOutput.processedNotes.treble || currentExerciseData.notesTreble || [];
            currentExerciseData.notesBass = renderOutput.processedNotes.bass || currentExerciseData.notesBass || [];
            currentExerciseData.notes = renderOutput.processedNotes.single || currentExerciseData.notes || [];
        }

        highlightPendingNotes();
        if(scoreDiv) scoreDiv.scrollTop = 0;
        if(startButton) startButton.disabled = !midiReady || !hasPlayableNotes;
        if(pauseButton) pauseButton.disabled = true;
        resetUIState();
        if(stopButton) stopButton.disabled = true;
        if (!midiReady) updateInfo("Collega MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare.");
    } else {
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        if(startButton) startButton.disabled = true; if(pauseButton) pauseButton.disabled = true;
        if(scoreDiv) scoreDiv.innerHTML = '<p>Errore caricamento.</p>';
        resetUIState();
    }
}

// --- Implementazioni di Base per Logica Esercizio ---
function resetNoteStatesAndRepetition() {
    correctNotesThisRepetition = 0;
    if (currentExerciseData) {
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            currentExerciseData[key]?.forEach(noteObj => {
                if (noteObj) {
                    noteObj.status = 'pending';
                    noteObj.isCorrect = false;
                    noteObj.playedMidiValue = null;
                    noteObj.correctMidiValues = [];
                }
            });
        });
    }
}

function resetNoteStatesForNewRepetition() {
    correctNotesThisRepetition = 0;
    if (currentExerciseData) {
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            currentExerciseData[key]?.forEach(noteObj => {
                if (noteObj && !noteObj.keys[0].toLowerCase().startsWith('r/')) { // Non resettare le pause, solo le note suonabili
                    noteObj.status = 'pending';
                    noteObj.isCorrect = false;
                    noteObj.playedMidiValue = null;
                    noteObj.correctMidiValues = [];
                }
            });
        });
    }
     if (scoreDiv && currentExerciseData) { // Ridisegna per mostrare gli stati resettati
        renderExercise(scoreDivId, currentExerciseData);
    }
}


function highlightPendingNotes() {
    if (!currentExerciseData) return;

    let firstPendingNoteForDisplay = null;
    let notesToMakeExpected = []; // Per gestire note simultanee su pentagrammi diversi

    // Trova la/le prossima/e nota/e pending con lo startTick più basso
    let minPendingTick = Infinity;
    const noteArrays = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes];

    noteArrays.forEach(notes => {
        if (notes && notes.length > 0) {
            notes.forEach(noteObj => {
                if (noteObj && noteObj.status === 'pending' && !noteObj.keys[0].toLowerCase().startsWith('r/')) {
                    // Assumiamo che vexflow_renderer abbia aggiunto noteObj.startTick
                    if (typeof noteObj.startTick === 'number' && noteObj.startTick < minPendingTick) {
                        minPendingTick = noteObj.startTick;
                    }
                }
            });
        }
    });

    if (minPendingTick !== Infinity) {
        noteArrays.forEach(notes => {
            if (notes && notes.length > 0) {
                notes.forEach(noteObj => {
                    if (noteObj && noteObj.status === 'pending' && !noteObj.keys[0].toLowerCase().startsWith('r/') && noteObj.startTick === minPendingTick) {
                        notesToMakeExpected.push(noteObj);
                        if (!firstPendingNoteForDisplay) {
                            firstPendingNoteForDisplay = noteObj; // Prendi la prima per la UI testuale
                        }
                    }
                });
            }
        });
    }


    if (isPlaying && !isPaused && notesToMakeExpected.length > 0) {
        notesToMakeExpected.forEach(noteObj => {
            noteObj.status = 'expected';
        });
        updateInfo(getNoteDescriptionForUser(firstPendingNoteForDisplay || notesToMakeExpected[0]));
    } else if (!isPlaying) { // Se non stiamo suonando, mostra solo la prima pending
        if (firstPendingNoteForDisplay) { // Potrebbe essere null se tutte le note sono state suonate
             updateInfo(getNoteDescriptionForUser(firstPendingNoteForDisplay));
        } else if (currentRepetition > targetRepetitions) {
            updateInfo("Esercizio completato!");
        } else if (totalNotesPerRepetition > 0 && correctNotesThisRepetition === totalNotesPerRepetition && currentRepetition <= targetRepetitions) {
            updateInfo(`Rip. ${currentRepetition} completata. Inizia la prossima.`);
        } else {
            updateInfo("Seleziona o avvia esercizio.");
        }
    }


    // Se non ci sono più note da rendere "expected" E stiamo suonando
    if (isPlaying && !isPaused && notesToMakeExpected.length === 0) {
        // Tutte le note della ripetizione corrente sono state suonate (o erano pause)
        finalizeAndStoreRepetitionData(); // Finalizza la ripetizione corrente
        currentRepetition++;
        if (currentRepetition <= targetRepetitions) {
            updateInfo(`Inizio Rip. ${currentRepetition}/${targetRepetitions}`);
            resetNoteStatesForNewRepetition();
            initializeNewRepetitionData(currentRepetition);
            highlightPendingNotes(); // Evidenzia la prima nota della nuova ripetizione
        } else {
            handleExerciseCompletion(); // Tutte le ripetizioni sono finite
        }
    }

    // Ridisegna per mostrare gli aggiornamenti di stato (colori)
    if (scoreDiv && currentExerciseData) {
        const savedScroll = scoreDiv.scrollTop;
        renderExercise(scoreDivId, currentExerciseData);
        scoreDiv.scrollTop = savedScroll;
    }
}

function handleNoteOn(noteName, midiNote, velocity) {
    if (!isPlaying || isPaused || !currentExerciseData) return;
    if (playedNoteSpan) playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote}, Vel: ${velocity})`;

    let noteMatchedAnExpected = false;
    const noteCollections = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes];
    let allExpectedNowResolved = true; // Assumiamo vero finché non troviamo una 'expected' non risolta

    noteCollections.forEach(notes => {
        if (notes && Array.isArray(notes)) {
            notes.forEach(noteObj => {
                if (noteObj && noteObj.status === 'expected') {
                    if (noteObj.expectedMidiValues.includes(midiNote) && !noteObj.isCorrect) { // Se è una delle note attese e non già marcata corretta
                        if (!noteObj.correctMidiValues.includes(midiNote)) {
                            noteObj.correctMidiValues.push(midiNote);
                        }
                        noteMatchedAnExpected = true;

                        if (noteObj.correctMidiValues.length === noteObj.expectedMidiValues.length) {
                            noteObj.status = 'correct';
                            noteObj.isCorrect = true;
                            correctNotesThisRepetition++; // O incrementa per ogni singola nota corretta dell'accordo
                            correctNotesInExercise++;
                            // Non chiamare highlightPendingNotes qui dentro subito
                        } else {
                            // Parte di accordo corretta, ma non tutto.
                            // Lo stato rimane 'expected', Vexflow dovrebbe aggiornare il colore se lo stile 'expected' cambia dinamicamente
                            // o se renderExercise viene chiamato.
                            updateInfo(getNoteDescriptionForUser(noteObj)); // Mostra cosa manca
                        }
                        // Non usciamo dal loop, una nota MIDI potrebbe (teoricamente) soddisfare più note expected se sono identiche
                    }
                }
            });
        }
    });

    // Se la nota suonata non corrisponde a nessuna delle note 'expected'
    if (!noteMatchedAnExpected) {
        let anExpectedNoteWasTargeted = false;
        noteCollections.forEach(notes => {
            if (notes) {
                notes.forEach(noteObj => {
                    if (noteObj && noteObj.status === 'expected') {
                        // Se c'era almeno una nota 'expected', e quella suonata non corrisponde, è un errore per quella nota 'expected'.
                        // Potremmo marcare la prima 'expected' trovata come errore o tutte.
                        // Per ora, registriamo un errore per la prima 'expected' che troviamo.
                        if (!anExpectedNoteWasTargeted) {
                            noteObj.status = 'incorrect';
                            noteObj.isCorrect = false;
                            noteObj.playedMidiValue = midiNote;
                            if (currentRepetitionData && currentRepetitionData.errors) {
                                currentRepetitionData.errors.push({
                                    expectedMidiValues: [...noteObj.expectedMidiValues],
                                    playedMidiValue: midiNote,
                                    timestamp: performance.now()
                                });
                            }
                            anExpectedNoteWasTargeted = true; // Errore registrato per una nota expected
                        }
                    }
                });
            }
        });
        if (!anExpectedNoteWasTargeted) {
            // L'utente ha suonato una nota quando nessuna era 'expected' o completamente fuori contesto.
            // Potremmo voler registrare un tipo diverso di errore o ignorarlo.
            console.log("Nota suonata ma nessuna era 'expected' o nota completamente errata.");
            // Per ora, non registriamo errore se non c'era una chiara "expected" violata
        }
    }

    updateSuccessRate();

    // Ora controlla se TUTTE le note che erano 'expected' per il momento corrente sono state risolte (correct o incorrect)
    noteCollections.forEach(notes => {
        if (notes) {
            notes.forEach(noteObj => {
                if (noteObj && noteObj.status === 'expected') {
                    allExpectedNowResolved = false; // Trovata una ancora 'expected', non avanzare
                }
            });
        }
    });

    if (allExpectedNowResolved) {
        // Tutte le note del "momento" corrente sono state gestite (o corrette o sbagliate)
        // Ora possiamo avanzare all'highlighting successivo.
        highlightPendingNotes();
    } else {
        // Ci sono ancora note 'expected' (es. parti di un accordo non ancora suonate)
        // Ridisegniamo per mostrare lo stato attuale (es. una nota dell'accordo diventata verde)
        if (scoreDiv && currentExerciseData) {
            const savedScroll = scoreDiv.scrollTop;
            renderExercise(scoreDivId, currentExerciseData);
            scoreDiv.scrollTop = savedScroll;
        }
    }
}


// --- Gestione Flusso Esercizio (Start, Stop, Pause, Resume) ---
function startExercise() {
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';

    if (!currentExerciseData || !midiReady || !totalNotesPerRepetition || isPlaying) { return; }
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);

    initializeNewExerciseStats();
    currentRepetition = 1;
    resetNoteStatesAndRepetition();
    initializeNewRepetitionData(currentRepetition);

    isPlaying = true; isPaused = false;
    if(startButton) startButton.disabled = true; if(pauseButton) { pauseButton.disabled = false; pauseButton.textContent = "Pause"; }
    if(stopButton) stopButton.disabled = false; if(categorySelect) categorySelect.disabled = true; if(exerciseSelect) exerciseSelect.disabled = true;
    if(theoryButton) theoryButton.disabled = true; updateSuccessRate(); if(playedNoteSpan) playedNoteSpan.textContent = '--';
    clearExerciseSummary();

    if (metronomeAutoStartCheckbox && metronomeAutoStartCheckbox.checked && !isMetronomeRunning) { // RIMOSSE ()
        initAudioContext(); let exerciseBeatsPerMeasure = 4;
        if (currentExerciseDefinition?.timeSignature) { const tsParts = currentExerciseDefinition.timeSignature.split('/'); if (tsParts.length === 2) { const num = parseInt(tsParts[0]); if (!isNaN(num) && num > 0) exerciseBeatsPerMeasure = num; }}
        startMetronome(exerciseBeatsPerMeasure);
    }
    renderExercise(scoreDivId, currentExerciseData);
    highlightPendingNotes();
    setTimeout(() => { if (!isPlaying) return; const savedScroll = scoreDiv.scrollTop; renderExercise(scoreDivId, currentExerciseData); if(scoreDiv) scoreDiv.scrollTop = savedScroll; setTimeout(startScrolling, 100); }, 50);
}

function stopExercise() {
    if (!isPlaying && stopButton && stopButton.disabled) return;
    if (isPlaying) { // Se l'esercizio era attivo, finalizza i dati
        // Assicurati che l'ultima ripetizione sia registrata anche se interrotta
        if (currentRepetitionData && typeof currentRepetitionData.repetitionNumber !== 'undefined') {
             finalizeAndStoreRepetitionData();
        }
    }
    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) {
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime - (exerciseStats.totalPausedDurationMs || 0);
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else { exerciseStats.totalActiveTimeSeconds = 0; }

    displayExerciseSummary();
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    stopScrolling();
    if (isMetronomeRunning) stopMetronome(); // RIMOSSE ()
    isPlaying = false; isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition(); // Pulisce gli stati
        renderExercise(scoreDivId, currentExerciseData); // Ridisegna in stato "pulito"
        if(scoreDiv) scoreDiv.scrollTop = 0;
    } else { if(scoreDiv) scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>'; }

    if(startButton) startButton.disabled = !midiReady || !currentExerciseData || !totalNotesPerRepetition;
    if(pauseButton) { pauseButton.disabled = true; pauseButton.textContent = "Pause"; }
    if(stopButton) stopButton.disabled = true; if(categorySelect) categorySelect.disabled = false;
    if(exerciseSelect) exerciseSelect.disabled = (categorySelect && categorySelect.value === ""); if(theoryButton) theoryButton.disabled = false;
    highlightPendingNotes(); // Aggiorna UI nota attesa
    if(playedNoteSpan) playedNoteSpan.textContent = '--'; if(successRateSpan) successRateSpan.textContent = '-- %';

    // --- Logica per pulsante AI ---
    if (getAIFeedbackButton && aiFeedbackContentDiv) {
        if (currentExerciseDefinition && exerciseStats && Object.keys(exerciseStats).length > 0 &&
            exerciseStats.allRepetitionsData && exerciseStats.allRepetitionsData.length > 0) {
            getAIFeedbackButton.style.display = 'block';
            getAIFeedbackButton.disabled = false;
            aiFeedbackContentDiv.innerHTML = '<p>Premi "Analizza con AI" per un feedback.</p>';
            getAIFeedbackButton.onclick = () => { fetchAIFeedback(currentExerciseDefinition, exerciseStats); };
        } else {
            getAIFeedbackButton.style.display = 'none';
            aiFeedbackContentDiv.innerHTML = '<p>Completa almeno una ripetizione per l\'analisi AI.</p>';
        }
    }
}

function pauseExercise() {
    if (!isPlaying || isPaused) return; isPaused = true;
    if(currentRepetitionData) currentRepetitionData.pauseStartTimeInternal = performance.now();
    if (!globalPauseStartTime) globalPauseStartTime = performance.now();
    stopScrolling(); if(pauseButton) { pauseButton.textContent = "Resume"; pauseButton.disabled = false; }
    if(theoryButton) theoryButton.disabled = false; updateInfo("Esercizio in Pausa.");
    if (isMetronomeRunning) { sessionStorage.setItem('metronomeWasRunningOnPause', 'true'); stopMetronome(); } // RIMOSSE ()
}

function resumeExercise() {
    if (!isPlaying || !isPaused) return; isPaused = false;
    if (currentRepetitionData && currentRepetitionData.pauseStartTimeInternal) {
        const repPauseDuration = performance.now() - currentRepetitionData.pauseStartTimeInternal;
        currentRepetitionData.pausedDurationMs = (currentRepetitionData.pausedDurationMs || 0) + repPauseDuration;
        currentRepetitionData.pauseStartTimeInternal = 0;
    }
    if (globalPauseStartTime) {
        const globalPauseDuration = performance.now() - globalPauseStartTime;
        exerciseStats.totalPausedDurationMs = (exerciseStats.totalPausedDurationMs || 0) + globalPauseDuration;
        globalPauseStartTime = 0;
    }
    startScrolling(); if(pauseButton) { pauseButton.textContent = "Pause"; }
    if(theoryButton) theoryButton.disabled = true; highlightPendingNotes();
    if (sessionStorage.getItem('metronomeWasRunningOnPause') === 'true') {
        initAudioContext(); let beats = parseInt(sessionStorage.getItem('metronomeBeatsPerMeasure') || '4');
        if (currentExerciseDefinition?.timeSignature) { const tsParts = currentExerciseDefinition.timeSignature.split('/'); if (tsParts.length === 2) { const num = parseInt(tsParts[0]); if (!isNaN(num) && num > 0) beats = num; }}
        startMetronome(beats); sessionStorage.removeItem('metronomeWasRunningOnPause');
    }
}

function handleTheoryClick() { if(THEORY_PAGE_URL) window.open(THEORY_PAGE_URL, '_blank'); }

// --- Funzioni Statistiche Implementate ---
function initializeNewExerciseStats() {
    exerciseStats = {
        exerciseStartTime: performance.now(),
        exerciseEndTime: 0,
        totalActiveTimeSeconds: 0,
        totalPausedDurationMs: 0,
        totalErrors: 0,
        allRepetitionsData: [], // FONDAMENTALE: inizializza come array vuoto
    };
    globalPauseStartTime = 0;
    correctNotesInExercise = 0; // Resetta contatore generale
}

function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum,
        startTime: performance.now(),
        endTime: 0,
        durationSeconds: 0,
        errors: [], // FONDAMENTALE: inizializza come array vuoto
        isCorrect: true,
        pauseStartTimeInternal: 0,
        pausedDurationMs: 0,
    };
    correctNotesThisRepetition = 0;
}

function finalizeAndStoreRepetitionData() {
    if (!currentRepetitionData || typeof currentRepetitionData.repetitionNumber === 'undefined' || Object.keys(currentRepetitionData).length === 0) {
        return;
    }
    currentRepetitionData.endTime = performance.now();
    let repDurationMs = currentRepetitionData.endTime - currentRepetitionData.startTime - (currentRepetitionData.pausedDurationMs || 0);
    currentRepetitionData.durationSeconds = parseFloat((Math.max(0, repDurationMs) / 1000).toFixed(2));
    currentRepetitionData.isCorrect = currentRepetitionData.errors.length === 0 && correctNotesThisRepetition === totalNotesPerRepetition;

    if(exerciseStats.allRepetitionsData){ // Assicurati che esista
        exerciseStats.allRepetitionsData.push(JSON.parse(JSON.stringify(currentRepetitionData)));
    }
    exerciseStats.totalErrors = (exerciseStats.totalErrors || 0) + currentRepetitionData.errors.length;
    currentRepetitionData = {}; // Resetta per la prossima
}

function handleExerciseCompletion() {
    if (isPlaying) { // Se era in esecuzione, assicurati che l'ultima ripetizione sia finalizzata
         if (currentRepetitionData && typeof currentRepetitionData.repetitionNumber !== 'undefined' && Object.keys(currentRepetitionData).length > 0) {
            finalizeAndStoreRepetitionData();
        }
    }
    isPlaying = false; isPaused = false;
    updateInfo(`Esercizio "${currentExerciseDefinition?.name || 'Corrente'}" completato!`);
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    exerciseCompletionTimeout = setTimeout(() => {
        stopExercise(); // stopExercise mostrerà il summary e il pulsante AI
    }, 1500);
}

function displayExerciseSummary() {
    if (!summaryTotalTimeSpan || !summaryTotalErrorsSpan || !summaryAvgRepTimeSpan || !summaryErrorsListDiv) return;
    if (!exerciseStats || !exerciseStats.allRepetitionsData || exerciseStats.allRepetitionsData.length === 0) {
        summaryTotalTimeSpan.textContent = '--'; summaryTotalErrorsSpan.textContent = '--'; summaryAvgRepTimeSpan.textContent = '--';
        summaryErrorsListDiv.innerHTML = '<p>Nessuna ripetizione completata.</p>'; return;
    }
    summaryTotalTimeSpan.textContent = `${exerciseStats.totalActiveTimeSeconds} s`;
    summaryTotalErrorsSpan.textContent = exerciseStats.totalErrors;
    const totalRepDuration = exerciseStats.allRepetitionsData.reduce((sum, rep) => sum + rep.durationSeconds, 0);
    const avgRepTime = exerciseStats.allRepetitionsData.length > 0 ? (totalRepDuration / exerciseStats.allRepetitionsData.length).toFixed(2) : 0;
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
        errorsHtml += '</ul>'; summaryErrorsListDiv.innerHTML = errorsHtml;
    } else { summaryErrorsListDiv.innerHTML = '<p>Nessun errore!</p>'; }
}

function startScrolling() {
    if (scrollInterval) clearInterval(scrollInterval);
    if (!scoreDiv || !isPlaying || isPaused) return;
    scrollInterval = setInterval(() => {
        if (!isPlaying || isPaused || !scoreDiv) { stopScrolling(); return; }
        if (scoreDiv.scrollTop < (scoreDiv.scrollHeight - scoreDiv.clientHeight)) {
            scoreDiv.scrollTop += (SCROLL_PIXELS_PER_INTERVAL_BASE * scrollSpeed);
        }
    }, SCROLL_INTERVAL_MS);
}
function stopScrolling() { if (scrollInterval) { clearInterval(scrollInterval); scrollInterval = null; } }

function updateSuccessRate() {
    if (!successRateSpan) return;
    if (!isPlaying || totalNotesPerRepetition === 0) { successRateSpan.textContent = '-- %'; return; }
    // Calcola sulla ripetizione corrente o sull'intero esercizio se preferisci
    const rate = (correctNotesThisRepetition / totalNotesPerRepetition) * 100;
    successRateSpan.textContent = `${rate.toFixed(0)} %`;
}

function updateInfo(message) { if(expectedNoteSpan) expectedNoteSpan.textContent = message; }
function clearExerciseSummary() {
    if(summaryTotalTimeSpan) summaryTotalTimeSpan.textContent = '--'; if(summaryTotalErrorsSpan) summaryTotalErrorsSpan.textContent = '--';
    if(summaryAvgRepTimeSpan) summaryAvgRepTimeSpan.textContent = '--'; if(summaryErrorsListDiv) summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato.</p>';
}

function resetUIState() {
    if(successRateSpan) successRateSpan.textContent = '-- %'; if(playedNoteSpan) playedNoteSpan.textContent = '--';
    if(stopButton) stopButton.disabled = true; if(pauseButton) { pauseButton.disabled = true; pauseButton.textContent = "Pause"; }
    if(theoryButton) theoryButton.disabled = false; if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    clearExerciseSummary();
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';
}

function updateMidiStatus(message, isConnected) {
    if(midiStatusSpan) midiStatusSpan.textContent = message;
    midiReady = isConnected;
    const exSelectedAndPlayable = currentExerciseData && totalNotesPerRepetition > 0;
    if (isConnected) {
        if(startButton) startButton.disabled = isPlaying || !exSelectedAndPlayable;
        if(pauseButton) pauseButton.disabled = !isPlaying || isPaused;
        if (!isPlaying) {
            if (!exSelectedAndPlayable) updateInfo("MIDI pronto. Seleziona esercizio.");
            else highlightPendingNotes();
        }
    } else {
        if(startButton) startButton.disabled = true; if(pauseButton) pauseButton.disabled = true;
        if(stopButton) stopButton.disabled = !isPlaying; if(theoryButton) theoryButton.disabled = true;
        updateInfo("Collega MIDI.");
        if (isPlaying && !isPaused) { pauseExercise(); alert("MIDI disconnesso! Esercizio in pausa."); }
    }
}

// --- Funzione AI (come l'avevamo definita) ---
async function fetchAIFeedback(exerciseDef, stats) {
    if (!aiFeedbackContentDiv || !getAIFeedbackButton) { return; }
    getAIFeedbackButton.disabled = true;
    aiFeedbackContentDiv.innerHTML = '<p>Analisi AI in corso...</p>';
    const dataToSendToBackend = { exerciseDefinition: exerciseDef, exerciseStats: stats };
    try {
        const response = await fetch(AI_BACKEND_ENDPOINT, {
            method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(dataToSendToBackend)
        });
        const responseData = await response.json();
        if (!response.ok) { throw new Error(responseData.error || `Errore dal backend: ${response.status}`); }
        const aiTextResponse = responseData.aiFeedbackText || "Nessuna risposta valida dall'AI.";
        aiFeedbackContentDiv.innerHTML = `<p>${aiTextResponse.replace(/\n/g, '<br>')}</p>`;
    } catch (error) {
        console.error('Errore fetch AI:', error);
        aiFeedbackContentDiv.innerHTML = `<p style="color: red;">Impossibile ottenere feedback AI: ${error.message}</p>`;
    } finally { if (getAIFeedbackButton) getAIFeedbackButton.disabled = false; }
}


// --- Event Listeners ---
if(categorySelect) categorySelect.addEventListener('change', (e) => populateExerciseSelect(e.target.value));
if(exerciseSelect) exerciseSelect.addEventListener('change', (e) => selectExercise(e.target.value, categorySelect.value));
if(startButton) startButton.addEventListener('click', startExercise);
if(stopButton) stopButton.addEventListener('click', stopExercise);
if(pauseButton) pauseButton.addEventListener('click', () => { if (isPaused) resumeExercise(); else pauseExercise(); });
if(theoryButton) theoryButton.addEventListener('click', handleTheoryClick);
// L'event listener per getAIFeedbackButton è gestito dinamicamente in stopExercise

// --- Application Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    aiFeedbackContentDiv = document.getElementById('ai-feedback-content');
    getAIFeedbackButton = document.getElementById('get-ai-feedback-button');
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    else console.warn("#get-ai-feedback-button non trovato.");
    if (!aiFeedbackContentDiv) console.warn("#ai-feedback-content non trovato.");

    console.log("DOM caricato.");
    loadExerciseData();
    initializeMIDI(handleNoteOn, updateMidiStatus);
    resetUIState();
    if(scoreDiv) scoreDiv.innerHTML = '<p>Benvenuto! Seleziona categoria ed esercizio.</p>';
    updateInfo("Collega MIDI e seleziona un esercizio.");

    if (scrollSpeedValueSpan && scrollSpeedControl) {
        scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
        scrollSpeed = parseInt(scrollSpeedControl.value, 10);
        scrollSpeedControl.addEventListener('input', (e) => {
            scrollSpeed = parseInt(e.target.value, 10);
            if(scrollSpeedValueSpan) scrollSpeedValueSpan.textContent = e.target.value;
        });
    }
});