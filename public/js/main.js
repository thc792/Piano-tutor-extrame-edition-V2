/**
 * main.js
 * Logica principale per Piano Tutor Extrame Edition V2
 * VERSIONE COMPLETA CON IMPLEMENTAZIONI DI BASE, INTEGRAZIONE AI,
 * SINTESI VOCALE E REGISTRAZIONE DETTAGLIATA EVENTI NOTA.
 */

import { renderExercise } from './vexflow_renderer.js';
import { initializeMIDI } from './midi_handler.js';
import {
    startMetronome,
    stopMetronome,
    initAudioContext,
    isMetronomeRunning,
    metronomeBpm // <<<< MODIFICA: Aggiunto import metronomeBpm
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
const AI_BACKEND_ENDPOINT = '/api/get_ai_feedback'; // Assicurati che sia l'endpoint corretto per Vercel o il tuo server

// --- Stato Applicazione ---
let allExercises = {};
let currentExerciseDefinition = null;
let currentExerciseData = null; // Dati dell'esercizio in corso, con stati delle note, ecc.
let isPlaying = false;
let isPaused = false;
let midiReady = false;
let exerciseCompletionTimeout = null;

// --- Stato Avanzamento Esercizio ---
let totalNotesInExercise = 0;
let correctNotesInExercise = 0;

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

function highlightPendingNotes() {
    if (!currentExerciseData) {
        return;
    }

    let firstPendingNoteForDisplay = null;
    let notesToMakeExpected = [];
    let minPendingTick = Infinity;

    const noteArrays = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes].filter(arr => arr && arr.length > 0);

    noteArrays.forEach(notes => {
        notes.forEach(noteObj => {
            if (noteObj && noteObj.status === 'pending' && !(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) {
                if (typeof noteObj.startTick === 'number') {
                    if (noteObj.startTick < minPendingTick) {
                        minPendingTick = noteObj.startTick;
                        notesToMakeExpected = [noteObj];
                        firstPendingNoteForDisplay = noteObj;
                    } else if (noteObj.startTick === minPendingTick) {
                        notesToMakeExpected.push(noteObj);
                    }
                }
            }
        });
    });

    if (isPlaying && !isPaused && notesToMakeExpected.length > 0) {
        notesToMakeExpected.forEach(noteObj => {
            noteObj.status = 'expected';
        });
        if (firstPendingNoteForDisplay) {
            updateInfo(getNoteDescriptionForUser(firstPendingNoteForDisplay));
        }
    } else if (!isPlaying) {
        let firstTrulyPendingAfterSelection = null;
        let minTickForSelection = Infinity;
        noteArrays.forEach(notes => {
            if(notes) notes.forEach(note => {
                if(note && note.status === 'pending' && !(note.keys && note.keys[0]?.toLowerCase().startsWith('r/')) && typeof note.startTick === 'number' && note.startTick < minTickForSelection) {
                    minTickForSelection = note.startTick;
                    firstTrulyPendingAfterSelection = note;
                }
            });
        });

        if (firstTrulyPendingAfterSelection) {
            updateInfo(getNoteDescriptionForUser(firstTrulyPendingAfterSelection));
        } else if (currentRepetition > targetRepetitions) {
            updateInfo("Esercizio completato!");
        } else if (totalNotesPerRepetition > 0 && correctNotesThisRepetition === totalNotesPerRepetition && currentRepetition <= targetRepetitions) {
            updateInfo(`Premere Start per Rip. ${currentRepetition}`);
        } else if (!currentExerciseData){
            updateInfo("Seleziona esercizio.");
        } else {
            updateInfo("Pronto per iniziare o esercizio terminato.");
        }
    }

    if (isPlaying && !isPaused && notesToMakeExpected.length === 0) {
        finalizeAndStoreRepetitionData();
        currentRepetition++;
        if (currentRepetition <= targetRepetitions) {
            updateInfo(`Inizio Rip. ${currentRepetition}/${targetRepetitions}. Attendi...`);
            resetNoteStatesForNewRepetition();
            initializeNewRepetitionData(currentRepetition);
            setTimeout(() => {
                 if(isPlaying && !isPaused) {
                    highlightPendingNotes();
                 }
            }, 100);
        } else {
            handleExerciseCompletion();
        }
    }

    if ((isPlaying && !isPaused && notesToMakeExpected.length > 0) || !isPlaying) {
        if (scoreDiv && currentExerciseData) {
            const savedScroll = scoreDiv.scrollTop;
            renderExercise(scoreDivId, currentExerciseData);
            scoreDiv.scrollTop = savedScroll;
        }
    }
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
                        noteObj.correctMidiValues = [];
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
        let renderOutput = renderExercise(scoreDivId, currentExerciseData);
        if (renderOutput && renderOutput.processedNotes) {
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
                if (noteObj && !(noteObj.keys && noteObj.keys[0].toLowerCase().startsWith('r/'))) {
                    noteObj.status = 'pending';
                    noteObj.isCorrect = false;
                    noteObj.playedMidiValue = null;
                    noteObj.correctMidiValues = [];
                }
            });
        });
    }
     if (scoreDiv && currentExerciseData) {
        renderExercise(scoreDivId, currentExerciseData);
    }
}

// <<<< MODIFICA: Funzione handleNoteOn aggiornata per registrare playedNoteEvents >>>>
function handleNoteOn(noteName, midiNote, velocity) {
    if (!isPlaying || isPaused || !currentExerciseData) return;
    if (playedNoteSpan) playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote}, Vel: ${velocity})`;

    const absoluteTimestamp = performance.now();
    let eventType = 'extra_note'; 
    let matchedExpectedNoteInfo = null;
    let noteMatchedAnExpectedDirectly = false;

    const noteCollections = [currentExerciseData.notesTreble, currentExerciseData.notesBass, currentExerciseData.notes];

    for (const notes of noteCollections) {
        if (notes && Array.isArray(notes)) {
            for (const noteObj of notes) {
                if (noteObj && noteObj.status === 'expected') {
                    if (noteObj.expectedMidiValues.includes(midiNote) && !noteObj.isCorrect) { 
                        noteMatchedAnExpectedDirectly = true;
                        eventType = 'correct_match';
                        matchedExpectedNoteInfo = {
                            uniqueId: noteObj.uniqueId,
                            keys: noteObj.keys,
                            expectedMidiValues: [...noteObj.expectedMidiValues],
                            startTick: noteObj.startTick,
                            durationString: noteObj.duration,
                        };

                        if (!noteObj.correctMidiValues.includes(midiNote)) {
                            noteObj.correctMidiValues.push(midiNote);
                        }

                        if (noteObj.correctMidiValues.length === noteObj.expectedMidiValues.length) {
                            noteObj.status = 'correct';
                            noteObj.isCorrect = true;
                            correctNotesThisRepetition++;
                            correctNotesInExercise++;
                        } else {
                            updateInfo(getNoteDescriptionForUser(noteObj));
                        }
                        break; 
                    }
                }
            }
        }
        if (noteMatchedAnExpectedDirectly) break; 
    }

    if (!noteMatchedAnExpectedDirectly) {
        let activeExpectedNote = null;
        for (const notes of noteCollections) {
            if (notes && Array.isArray(notes)) {
                activeExpectedNote = notes.find(n => n && n.status === 'expected');
                if (activeExpectedNote) break;
            }
        }

        if (activeExpectedNote) {
            eventType = 'incorrect_match';
            matchedExpectedNoteInfo = { 
                uniqueId: activeExpectedNote.uniqueId,
                keys: activeExpectedNote.keys,
                expectedMidiValues: [...activeExpectedNote.expectedMidiValues],
                startTick: activeExpectedNote.startTick,
                durationString: activeExpectedNote.duration,
            };
            if (currentRepetitionData && currentRepetitionData.errors) {
                currentRepetitionData.errors.push({
                    expectedMidiValues: [...activeExpectedNote.expectedMidiValues],
                    playedMidiValue: midiNote,
                    repetition: currentRepetition,
                });
            }
        } else {
            eventType = 'extra_note';
        }
    }

    if (currentRepetitionData && currentRepetitionData.playedNoteEvents) {
        const relativeTimestamp = absoluteTimestamp - (currentRepetitionData.startTime || absoluteTimestamp);

        const eventData = {
            timestamp: Math.round(relativeTimestamp),
            midiValuePlayed: midiNote,
            velocity: velocity,
            type: eventType,
        };
        if (matchedExpectedNoteInfo) {
            eventData.expectedNoteInfo = matchedExpectedNoteInfo;
        }

        if (isMetronomeRunning) {
            eventData.bpmAtEvent = metronomeBpm;
        } else if (currentExerciseDefinition && currentExerciseDefinition.bpm) {
            eventData.bpmAtEvent = currentExerciseDefinition.bpm;
        }

        currentRepetitionData.playedNoteEvents.push(eventData);
        // console.log("PlayedNoteEvent:", JSON.stringify(eventData, null, 2)); 
    }

    updateSuccessRate();

    let allExpectedForThisMomentResolved = true;
    if (noteMatchedAnExpectedDirectly) {
        noteCollections.forEach(notes => {
            if (notes) {
                notes.forEach(noteObj => {
                    if (noteObj && noteObj.status === 'expected') {
                        allExpectedForThisMomentResolved = false;
                    }
                });
            }
        });
    } else {
        allExpectedForThisMomentResolved = false;
    }

    if (allExpectedForThisMomentResolved) {
        highlightPendingNotes();
    } else {
        if (scoreDiv && currentExerciseData) {
            const savedScroll = scoreDiv.scrollTop;
            renderExercise(scoreDivId, currentExerciseData);
            scoreDiv.scrollTop = savedScroll;
        }
    }
}
// <<<< FINE MODIFICA handleNoteOn >>>>

// --- Gestione Flusso Esercizio (Start, Stop, Pause, Resume) ---
function startExercise() {
    if (getAIFeedbackButton) getAIFeedbackButton.style.display = 'none';
    if (aiFeedbackContentDiv) aiFeedbackContentDiv.innerHTML = '<p>Completa un esercizio per ricevere un\'analisi AI.</p>';

    if (!currentExerciseData || !midiReady || !totalNotesPerRepetition || isPlaying) { return; }
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);

    initializeNewExerciseStats();
    currentRepetition = 1;
    resetNoteStatesAndRepetition();
    initializeNewRepetitionData(currentRepetition); // <<<< Qui viene inizializzato currentRepetitionData

    isPlaying = true; isPaused = false;
    if(startButton) startButton.disabled = true; if(pauseButton) { pauseButton.disabled = false; pauseButton.textContent = "Pause"; }
    if(stopButton) stopButton.disabled = false; if(categorySelect) categorySelect.disabled = true; if(exerciseSelect) exerciseSelect.disabled = true;
    if(theoryButton) theoryButton.disabled = true; updateSuccessRate(); if(playedNoteSpan) playedNoteSpan.textContent = '--';
    clearExerciseSummary();

    if (metronomeAutoStartCheckbox && metronomeAutoStartCheckbox.checked && !isMetronomeRunning) {
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
    if (isPlaying) {
        if (currentRepetitionData && typeof currentRepetitionData.repetitionNumber !== 'undefined' && Object.keys(currentRepetitionData).length > 0) { // Aggiunto Object.keys per sicurezza
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
    if (isMetronomeRunning) stopMetronome();
    isPlaying = false; isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition();
        renderExercise(scoreDivId, currentExerciseData);
        if(scoreDiv) scoreDiv.scrollTop = 0;
    } else { if(scoreDiv) scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>'; }

    if(startButton) startButton.disabled = !midiReady || !currentExerciseData || !totalNotesPerRepetition;
    if(pauseButton) { pauseButton.disabled = true; pauseButton.textContent = "Pause"; }
    if(stopButton) stopButton.disabled = true; if(categorySelect) categorySelect.disabled = false;
    if(exerciseSelect) exerciseSelect.disabled = (categorySelect && categorySelect.value === ""); if(theoryButton) theoryButton.disabled = false;
    highlightPendingNotes();
    if(playedNoteSpan) playedNoteSpan.textContent = '--'; if(successRateSpan) successRateSpan.textContent = '-- %';

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
    if(currentRepetitionData && Object.keys(currentRepetitionData).length > 0) currentRepetitionData.pauseStartTimeInternal = performance.now(); // Aggiunto Object.keys
    if (!globalPauseStartTime) globalPauseStartTime = performance.now();
    stopScrolling(); if(pauseButton) { pauseButton.textContent = "Resume"; pauseButton.disabled = false; }
    if(theoryButton) theoryButton.disabled = false; updateInfo("Esercizio in Pausa.");
    if (isMetronomeRunning) { sessionStorage.setItem('metronomeWasRunningOnPause', 'true'); stopMetronome(); }
}

function resumeExercise() {
    if (!isPlaying || !isPaused) return; isPaused = false;
    if (currentRepetitionData && Object.keys(currentRepetitionData).length > 0 && currentRepetitionData.pauseStartTimeInternal) { // Aggiunto Object.keys
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
        allRepetitionsData: [],
    };
    globalPauseStartTime = 0;
    correctNotesInExercise = 0;
}

// <<<< MODIFICA: Aggiunto playedNoteEvents a currentRepetitionData >>>>
function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum,
        startTime: performance.now(), 
        endTime: 0,
        durationSeconds: 0,
        errors: [],
        playedNoteEvents: [], // <<<< NUOVO: Array per gli eventi nota dettagliati
        isCorrect: true,
        pauseStartTimeInternal: 0,
        pausedDurationMs: 0,
    };
    correctNotesThisRepetition = 0;
    // console.log(`Repetition ${repetitionNum} started at: ${currentRepetitionData.startTime}`); 
}
// <<<< FINE MODIFICA initializeNewRepetitionData >>>>

function finalizeAndStoreRepetitionData() {
    if (!currentRepetitionData || typeof currentRepetitionData.repetitionNumber === 'undefined' || Object.keys(currentRepetitionData).length === 0) {
        return;
    }
    currentRepetitionData.endTime = performance.now();
    let repDurationMs = currentRepetitionData.endTime - currentRepetitionData.startTime - (currentRepetitionData.pausedDurationMs || 0);
    currentRepetitionData.durationSeconds = parseFloat((Math.max(0, repDurationMs) / 1000).toFixed(2));
    currentRepetitionData.isCorrect = currentRepetitionData.errors.length === 0 && correctNotesThisRepetition === totalNotesPerRepetition;

    if(exerciseStats.allRepetitionsData){
        exerciseStats.allRepetitionsData.push(JSON.parse(JSON.stringify(currentRepetitionData)));
    }
    // L'incremento di exerciseStats.totalErrors ora avviene solo qui, basato sugli errori della ripetizione
    exerciseStats.totalErrors = (exerciseStats.totalErrors || 0) + currentRepetitionData.errors.length;
    currentRepetitionData = {};
}

function handleExerciseCompletion() {
    if (isPlaying) {
         if (currentRepetitionData && typeof currentRepetitionData.repetitionNumber !== 'undefined' && Object.keys(currentRepetitionData).length > 0) {
            finalizeAndStoreRepetitionData();
        }
    }
    isPlaying = false; isPaused = false;
    updateInfo(`Esercizio "${currentExerciseDefinition?.name || 'Corrente'}" completato!`);
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    exerciseCompletionTimeout = setTimeout(() => {
        stopExercise();
    }, 1500);
}

function displayExerciseSummary() {
    if (!summaryTotalTimeSpan || !summaryTotalErrorsSpan || !summaryAvgRepTimeSpan || !summaryErrorsListDiv) return;
    if (!exerciseStats || !exerciseStats.allRepetitionsData || exerciseStats.allRepetitionsData.length === 0) {
        summaryTotalTimeSpan.textContent = '--'; summaryTotalErrorsSpan.textContent = '--'; summaryAvgRepTimeSpan.textContent = '--';
        summaryErrorsListDiv.innerHTML = '<p>Nessuna ripetizione completata.</p>'; return;
    }
    summaryTotalTimeSpan.textContent = `${exerciseStats.totalActiveTimeSeconds} s`;
    summaryTotalErrorsSpan.textContent = exerciseStats.totalErrors; // Ora questo è corretto
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

// --- Funzione AI ---
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

        if (aiTextResponse && aiTextResponse !== "Nessuna risposta valida dall'AI." && aiTextResponse !== "L'AI non ha fornito una risposta testuale utilizzabile (parti mancanti o contenuto non valido)." && !aiTextResponse.startsWith("Richiesta bloccata")) {
            speakText(aiTextResponse);
        }

    } catch (error) {
        console.error('Errore fetch AI:', error);
        aiFeedbackContentDiv.innerHTML = `<p style="color: red;">Impossibile ottenere feedback AI: ${error.message}</p>`;
    } finally { 
        if (getAIFeedbackButton) getAIFeedbackButton.disabled = false; 
    }
}

// --- Funzione per la Sintesi Vocale (Text-to-Speech) ---
function speakText(text, lang = 'it-IT') {
    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("La sintesi vocale (Text-to-Speech) non è supportata da questo browser.");
    }
}

if ('speechSynthesis' in window && typeof window.speechSynthesis.getVoices === 'function') {
    window.speechSynthesis.onvoiceschanged = () => {
        // console.log("Voci per la sintesi vocale caricate:", window.speechSynthesis.getVoices());
    };
}

// --- Event Listeners ---
if(categorySelect) categorySelect.addEventListener('change', (e) => populateExerciseSelect(e.target.value));
if(exerciseSelect) exerciseSelect.addEventListener('change', (e) => selectExercise(e.target.value, categorySelect.value));
if(startButton) startButton.addEventListener('click', startExercise);
if(stopButton) stopButton.addEventListener('click', stopExercise);
if(pauseButton) pauseButton.addEventListener('click', () => { if (isPaused) resumeExercise(); else pauseExercise(); });
if(theoryButton) theoryButton.addEventListener('click', handleTheoryClick);

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