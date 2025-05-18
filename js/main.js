/**
 * main.js
 * Logica principale per Piano Tutor Extrame Edition V2
 *
 * Piano Tutor Extrame Edition V2 (o il nome attuale del progetto)
 * Copyright (c) 2023-2024 Lorenzetti Giuseppe (aggiorna l'anno se necessario)
 *
 * Tutti i diritti riservati.
 *
 * Questo software è proprietario e confidenziale.
 * È concesso in licenza, non venduto. L'uso, la riproduzione, la modifica
 * o la distribuzione non autorizzata di questo software, o di qualsiasi sua parte,
 * sono severamente vietati.
 *
 * Per informazioni sulla licenza e per i termini di utilizzo completi,
 * fare riferimento al file LICENSE.md disponibile nel repository del progetto:
 * [Link al tuo nuovo LICENSE.md nel repository, es: https://github.com/thc792/Piano-tutor-extrame-edition-V2/blob/main/LICENSE.md]
 * o contattare [la tua email].
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

// --- Riferimenti DOM per Metronomo ---
const bpmInput = document.getElementById('bpm-input');
const metronomeToggleButton = document.getElementById('metronome-toggle-button');
const metronomeVisualIndicator = document.getElementById('metronome-visual-indicator');
const metronomeAutoStartCheckbox = document.getElementById('metronome-auto-start');


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
let correctNotesThisRepetition = 0; // Conteggio StaveNotes VexFlow completate
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

// --- Stato Metronomo ---
let audioContext = null;
let metronomeBpm = 100;
let isMetronomeRunning = false;
let nextNoteTime = 0.0;         // Quando la prossima nota dovrebbe suonare (in secondi del AudioContext)
const lookahead = 25.0;         // Quanto spesso svegliamo il scheduler (ms)
const scheduleAheadTime = 0.1;  // Quanto in anticipo scheduliamo l'audio (s)
let schedulerIntervalId = null;
let metronomeAccentFrequency = 880; // Hz per il primo beat (A5)
let metronomeTickFrequency = 660;   // Hz per gli altri beat (E5)
let currentBeatInMeasure = 0;
let beatsPerMeasure = 4; // Default a 4/4, potrebbe essere aggiornato dalla time signature dell'esercizio


// --- INIZIALIZZAZIONE AUDIO CONTEXT (IMPORTANTE per iOS/Browser con autoplay bloccato) ---
function initAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log("AudioContext creato.");
        } catch (e) {
            console.error("Web Audio API non supportata.", e);
            alert("Il tuo browser non supporta la Web Audio API, necessaria per il metronomo.");
            if (metronomeToggleButton) metronomeToggleButton.disabled = true;
            if (bpmInput) bpmInput.disabled = true;
        }
    }
    // Per browser che richiedono interazione utente per avviare l'audio
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

// --- Funzioni Metronomo ---
function playMetronomeTick(time, isAccent) {
    if (!audioContext) return;

    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);

    osc.frequency.setValueAtTime(isAccent ? metronomeAccentFrequency : metronomeTickFrequency, time);
    gainNode.gain.setValueAtTime(isAccent ? 1.0 : 0.6, time); // Accento più forte

    osc.start(time);
    osc.stop(time + 0.05); // Durata del tick

    // Feedback visivo
    if (metronomeVisualIndicator) {
        metronomeVisualIndicator.classList.remove('metronome-indicator-off');
        metronomeVisualIndicator.classList.add('metronome-indicator-on');
        setTimeout(() => {
            metronomeVisualIndicator.classList.remove('metronome-indicator-on');
            metronomeVisualIndicator.classList.add('metronome-indicator-off');
        }, 80); // Durata del feedback visivo
    }
}

function metronomeScheduler() {
    if (!audioContext) return;
    // Finché ci sono note da schedulare nel prossimo intervallo
    while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
        const isAccent = currentBeatInMeasure === 0;
        playMetronomeTick(nextNoteTime, isAccent);
        nextNoteTime += (60.0 / metronomeBpm); // Avanza al prossimo tick

        currentBeatInMeasure = (currentBeatInMeasure + 1) % beatsPerMeasure;
    }
}

function startMetronome() {
    if (isMetronomeRunning || !audioContext) return;
     if (audioContext.state === 'suspended') { // Assicura che l'audio context sia attivo
        audioContext.resume();
    }
    isMetronomeRunning = true;
    currentBeatInMeasure = 0; // Resetta il conteggio della battuta
    nextNoteTime = audioContext.currentTime + 0.05; // Inizia a schedulare leggermente nel futuro
    
    // Prova ad estrarre i beats per misura dalla time signature dell'esercizio, se disponibile
    if (currentExerciseDefinition && currentExerciseDefinition.timeSignature) {
        const tsParts = currentExerciseDefinition.timeSignature.split('/');
        if (tsParts.length === 2) {
            const num = parseInt(tsParts[0]);
            if (!isNaN(num) && num > 0) {
                beatsPerMeasure = num;
            } else {
                beatsPerMeasure = 4; // Default se non parsabile
            }
        } else {
            beatsPerMeasure = 4; // Default se formato non valido
        }
    } else {
        beatsPerMeasure = 4; // Default se non c'è esercizio o time signature
    }
    console.log(`Metronomo avviato. BPM: ${metronomeBpm}, Battiti/Misura: ${beatsPerMeasure}`);

    schedulerIntervalId = setInterval(metronomeScheduler, lookahead);
    if (metronomeToggleButton) {
        metronomeToggleButton.textContent = "Ferma Metronomo";
        metronomeToggleButton.classList.add('metronome-active');
    }
}

function stopMetronome() {
    if (!isMetronomeRunning) return;
    isMetronomeRunning = false;
    clearInterval(schedulerIntervalId);
    schedulerIntervalId = null;
    if (metronomeToggleButton) {
        metronomeToggleButton.textContent = "Avvia Metronomo";
        metronomeToggleButton.classList.remove('metronome-active');
    }
    if (metronomeVisualIndicator) {
        metronomeVisualIndicator.classList.remove('metronome-indicator-on');
        metronomeVisualIndicator.classList.add('metronome-indicator-off');
    }
    console.log("Metronomo fermato.");
}

function toggleMetronome() {
    initAudioContext(); // Assicura che l'audio context sia inizializzato
    if (!audioContext) return;

    if (isMetronomeRunning) {
        stopMetronome();
    } else {
        if (bpmInput) {
            metronomeBpm = parseInt(bpmInput.value, 10);
            if (isNaN(metronomeBpm) || metronomeBpm < 30 || metronomeBpm > 240) {
                metronomeBpm = 100;
                bpmInput.value = metronomeBpm;
            }
        } else {
            metronomeBpm = 100; // Fallback se bpmInput non è definito
        }
        startMetronome();
    }
}


// Funzione helper per convertire numero MIDI in nome nota (formato "C4", "F#3")
const MIDI_NOTE_NAMES_ARRAY = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function midiToNoteName(midiValue) {
    if (midiValue < 0 || midiValue > 127) return `MIDI ${midiValue}`;
    const octave = Math.floor(midiValue / 12) - 1;
    return `${MIDI_NOTE_NAMES_ARRAY[midiValue % 12]}${octave}`;
}

function getNoteDescriptionForUser(noteObj) {
    if (!noteObj) return "N/A";
    // Usa i midiValues originali (expectedMidiValues) per la descrizione utente
    if (noteObj.expectedMidiValues && noteObj.expectedMidiValues.length > 0) {
        const expectedNotesFull = noteObj.expectedMidiValues.map(mVal => midiToNoteName(mVal));
        let desc = expectedNotesFull.length > 1 ? `Accordo (${expectedNotesFull.join(', ')})` : expectedNotesFull[0];
        
        // Se è un accordo ed è parzialmente completato, mostra le note rimanenti
        if (Array.isArray(noteObj.correctMidiValues) && noteObj.expectedMidiValues.length > 1) {
            const remainingMidi = noteObj.expectedMidiValues.filter(mVal => !noteObj.correctMidiValues.includes(mVal));
            if (remainingMidi.length < noteObj.expectedMidiValues.length && remainingMidi.length > 0) {
                 const remainingNotesFull = remainingMidi.map(mVal => midiToNoteName(mVal));
                 desc = `Accordo (rimanenti: ${remainingNotesFull.join(', ')})`;
            }
        }
        return desc;
    }
    // Fallback se expectedMidiValues non c'è
    if (noteObj.keys && noteObj.keys.length > 0 && !noteObj.keys[0].toLowerCase().startsWith("r/")) {
        return noteObj.keys.join(', '); // Notazione VexFlow (es. C/4)
    }
    return "Nota Sconosciuta";
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

                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) {
                            if (midiVals.length > 0) hasPlayableNotes = true;
                            totalNotesPerRepetition += midiVals.length;
                        }
                    }
                });
            }
        });
        console.log(`Target ripetizioni: ${targetRepetitions}. Note MIDI totali per ripetizione: ${totalNotesPerRepetition}`);

        resetNoteStatesAndRepetition(); 

        let renderOutput = renderExercise(scoreDivId, currentExerciseData);
        if (renderOutput && renderOutput.processedNotes) {
            currentExerciseData.notesTreble = renderOutput.processedNotes.treble || currentExerciseData.notesTreble || [];
            currentExerciseData.notesBass = renderOutput.processedNotes.bass || currentExerciseData.notesBass || [];
            currentExerciseData.notes = renderOutput.processedNotes.single || currentExerciseData.notes || [];
        }
        
        highlightPendingNotes(); 
        scoreDiv.scrollTop = 0;

        startButton.disabled = !midiReady || !hasPlayableNotes;
        pauseButton.disabled = true; theoryButton.disabled = false;
        resetUIState(); 
        stopButton.disabled = true;

        if (!midiReady) updateInfo("Collega MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare.");

    } else {
        console.error(`Errore: Esercizio ID "${exerciseId}" non trovato.`);
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        startButton.disabled = true; pauseButton.disabled = true; theoryButton.disabled = false;
        scoreDiv.innerHTML = '<p>Errore caricamento esercizio.</p>';
        resetUIState();
    }
}


function highlightPendingNotes() {
    if (!currentExerciseData) { 
        if (!currentExerciseDefinition) updateInfo("Seleziona un esercizio.");
        return; 
    }
    if (!isPlaying) {
        if (currentExerciseDefinition && midiReady && totalNotesPerRepetition > 0 && !isPaused)
            updateInfo(`Pronto per ${currentExerciseDefinition.name || currentExerciseDefinition.id}. Premi Start.`);
        else if (!isPaused && !currentExerciseDefinition) updateInfo("Seleziona un esercizio.");
        return;
    }

    let activeDescs = [];
    let minTickFound = Infinity;
    
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        (currentExerciseData[key] || []).forEach(noteObj => {
            if (noteObj && typeof noteObj.startTick === 'number' && 
                noteObj.status !== 'correct' && noteObj.status !== 'rest' && noteObj.status !== 'ignored') {
                minTickFound = Math.min(minTickFound, noteObj.startTick);
            }
        });
    });

    if (minTickFound === Infinity) {
        if (isPlaying && currentRepetitionData.notesCorrectThisRep < totalNotesPerRepetition) {
             console.warn(`HIGHLIGHT: Stallo? No actionable notes found at minTick, ma rep MIDI count: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);
             updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Attenzione: stallo note.`);
        } else if (isPlaying) { 
            updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Completata (nessuna nota pendente).`);
        }
        return;
    }

    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        (currentExerciseData[key] || []).forEach(noteObj => {
            if (noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick === minTickFound) {
                if (noteObj.status === 'pending') {
                    noteObj.status = 'expected';
                    if (noteObj.expectedMidiValues && noteObj.expectedMidiValues.length > 1) {
                        noteObj.correctMidiValues = [];
                    }
                }
                if (noteObj.status === 'expected') {
                    activeDescs.push(getNoteDescriptionForUser(noteObj));
                }
            }
        });
    });
    
    if (activeDescs.length > 0) {
        updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Atteso: ${activeDescs.join(' & ')}`);
    } else if (isPlaying) { 
        console.warn("HIGHLIGHT: minTickFound era valido, ma nessuna descrizione attiva. Controllare stati note.");
        updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Valutazione...`);
    }
}


function handleNoteOn(noteName, midiNote, velocity) {
    playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote})`;
    playedNoteSpan.style.color = '';

    if (!isPlaying || isPaused || !currentExerciseData) return;
    
    console.log(`MIDI In: ${noteName} (${midiNote}) | Rip: ${currentRepetition}/${targetRepetitions} | MIDI OK Rip: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);

    let noteInputConsumed = false; 
    let staveNoteObjectThatMatched = null; 

    const currentExpectedBlockSnapshot = []; 
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        (currentExerciseData[key] || []).forEach(noteObj => {
            if (noteObj?.status === 'expected' && typeof noteObj.startTick === 'number') {
                currentExpectedBlockSnapshot.push(noteObj);
            }
        });
    });
    
    if (currentExpectedBlockSnapshot.length === 0 && isPlaying) {
        console.warn("HANDLE_NOTE_ON: Input MIDI, ma nessuna StaveNote 'expected'. Input fuori tempo o stallo.");
        return; 
    }

    for (const expectedStave of currentExpectedBlockSnapshot) {
        if (expectedStave.status === 'correct') continue;
        if (!expectedStave.expectedMidiValues || expectedStave.expectedMidiValues.length === 0) continue;

        if (expectedStave.expectedMidiValues.length === 1) {
            if (midiNote === expectedStave.expectedMidiValues[0]) {
                staveNoteObjectThatMatched = expectedStave;
                expectedStave.status = 'correct';
                currentRepetitionData.notesCorrectThisRep++;
                correctNotesThisRepetition++;
                noteInputConsumed = true;
                console.log(`   OK Nota Singola (MIDI): ${noteName}. Stave ID: ${expectedStave.uniqueId}`);
                break;
            }
        } else {
            if (expectedStave.expectedMidiValues.includes(midiNote)) {
                if (!expectedStave.correctMidiValues) expectedStave.correctMidiValues = [];
                if (!expectedStave.correctMidiValues.includes(midiNote)) {
                    staveNoteObjectThatMatched = expectedStave;
                    expectedStave.correctMidiValues.push(midiNote);
                    currentRepetitionData.notesCorrectThisRep++;
                    noteInputConsumed = true;
                    if (expectedStave.correctMidiValues.length >= expectedStave.expectedMidiValues.length) {
                        expectedStave.status = 'correct';
                        correctNotesThisRepetition++;
                        console.log(`   -> Accordo ${expectedStave.uniqueId} (${getNoteDescriptionForUser(expectedStave)}) COMPLETATO.`);
                    }
                    break;
                }
            }
        }
    }

    if (noteInputConsumed) {
        updateInfo(`OK: ${getNoteDescriptionForUser(staveNoteObjectThatMatched)} (suonata ${noteName})`);
        updateSuccessRate();
        
        const savedScroll = scoreDiv.scrollTop;
        let rOut = renderExercise(scoreDivId, currentExerciseData);
        if (rOut && rOut.processedNotes) { 
            currentExerciseData.notesTreble = rOut.processedNotes.treble || currentExerciseData.notesTreble || [];
            currentExerciseData.notesBass = rOut.processedNotes.bass || currentExerciseData.notesBass || [];
            currentExerciseData.notes = rOut.processedNotes.single || currentExerciseData.notes || [];
        }
        scoreDiv.scrollTop = savedScroll;

        let allStaveNotesInCurrentBlockNowCorrect = true;
        if (currentExpectedBlockSnapshot.length === 0) {
            allStaveNotesInCurrentBlockNowCorrect = false; 
        } else {
            for (const expectedStaveFromSnapshot of currentExpectedBlockSnapshot) {
                let updatedStaveInCurrentData = null;
                const typeKey = expectedStaveFromSnapshot.uniqueId.split('-')[0];
                if(currentExerciseData[typeKey]) {
                    updatedStaveInCurrentData = currentExerciseData[typeKey].find(n => n.uniqueId === expectedStaveFromSnapshot.uniqueId);
                }

                if (updatedStaveInCurrentData) {
                    if (updatedStaveInCurrentData.status !== 'correct' && 
                        updatedStaveInCurrentData.status !== 'rest' && 
                        updatedStaveInCurrentData.status !== 'ignored') {
                        allStaveNotesInCurrentBlockNowCorrect = false; 
                        break;
                    }
                } else if (expectedStaveFromSnapshot.status !== 'rest' && expectedStaveFromSnapshot.status !== 'ignored') {
                    console.warn(`LOGIC CHECK FALLITO: Nota con ID ${expectedStaveFromSnapshot.uniqueId} (non pausa) non trovata in currentExerciseData per il check di avanzamento del blocco.`);
                    allStaveNotesInCurrentBlockNowCorrect = false; 
                    break;
                }
            }
        }

        if (currentRepetitionData.notesCorrectThisRep >= totalNotesPerRepetition) {
            console.log(`--- Ripetizione ${currentRepetition} COMPLETATA (totale note MIDI)! ---`);
            finalizeAndStoreRepetitionData();
            if (currentRepetition < targetRepetitions) { 
                currentRepetition++; correctNotesThisRepetition = 0; initializeNewRepetitionData(currentRepetition);
                ['notes', 'notesTreble', 'notesBass'].forEach(key => { (currentExerciseData[key]||[]).forEach(no => { if(no && no.status!=='rest'&&no.status!=='ignored'){no.status='pending';if(no.expectedMidiValues && no.expectedMidiValues.length>1)no.correctMidiValues=[];}}); });
                updateInfo(`Ottimo! Prepara Rip. ${currentRepetition}`);
                setTimeout(() => { 
                    if(!isPlaying||isPaused)return; 
                    const s1=scoreDiv.scrollTop; let ro1=renderExercise(scoreDivId,currentExerciseData);if(ro1&&ro1.processedNotes){/*aggiorna*/}scoreDiv.scrollTop=s1; 
                    highlightPendingNotes();
                    const s2=scoreDiv.scrollTop; let ro2=renderExercise(scoreDivId,currentExerciseData);if(ro2&&ro2.processedNotes){/*aggiorna*/} scoreDiv.scrollTop=s2; 
                    updateSuccessRate(); 
                    if(scoreDiv.scrollHeight>scoreDiv.clientHeight&&correctNotesThisRepetition===0){scoreDiv.scrollTop=0; setTimeout(startScrolling,100);} 
                }, 1500);
            } else { 
                console.log("--- TUTTE LE RIPETIZIONI COMPLETATE ---"); 
                handleExerciseCompletion(); 
            }
        } else if (allStaveNotesInCurrentBlockNowCorrect) {
            console.log("HANDLE_NOTE_ON - Avanzamento Blocco: Tutte le StaveNote del blocco corrente sono 'correct'. Chiamo highlightPendingNotes() per il prossimo.");
            highlightPendingNotes();
            const scrollAfterHighlight = scoreDiv.scrollTop;
            let rOutHighlight = renderExercise(scoreDivId, currentExerciseData); 
            if (rOutHighlight && rOutHighlight.processedNotes) { /* ... aggiorna currentExerciseData ... */ }
            scoreDiv.scrollTop = scrollAfterHighlight;
        } else { 
             console.log("HANDLE_NOTE_ON - Progresso parziale nel blocco corrente. Non si avanza l'highlight principale. Aggiorno info.");
             highlightPendingNotes();
        }

    } else {
        const expectedDesc = currentExpectedBlockSnapshot.map(nStave => getNoteDescriptionForUser(nStave)).join(' & ');
        updateInfo(`Errore: ${noteName} non atteso. Atteso: ${expectedDesc || 'N/A (blocco atteso vuoto?)'}`);
        playedNoteSpan.style.color = 'red';
        exerciseStats.totalErrors++; 
        currentRepetitionData.errorCount++;
        currentRepetitionData.errors.push({
            expected: expectedDesc || 'Nessuna nota definita come attesa al momento',
            played: `${noteName} (${midiNote})`,
            timeOffsetSeconds: parseFloat(((performance.now() - currentRepetitionData.startTime - currentRepetitionData.pausedDurationMs) / 1000).toFixed(2)),
            noteId: currentExpectedBlockSnapshot[0]?.uniqueId || "error-no-expected-id" 
        });
    }
}


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

function clearExerciseSummary() {
    summaryTotalTimeSpan.textContent = '--';
    summaryTotalErrorsSpan.textContent = '--';
    summaryAvgRepTimeSpan.textContent = '--';
    summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato o dati non disponibili.</p>';
}

function initializeNewExerciseStats() {
    exerciseStats = {
        exerciseStartTime: performance.now(), totalPausedDurationMs: 0, exerciseEndTime: 0,
        totalActiveTimeSeconds: 0, totalErrors: 0, repetitionsData: []
    };
    globalPauseStartTime = 0; 
}

function initializeNewRepetitionData(repetitionNum) {
    currentRepetitionData = {
        repetitionNumber: repetitionNum, startTime: performance.now(), pausedDurationMs: 0,
        endTime: 0, durationSeconds: 0, errorCount: 0, errors: [], notesCorrectThisRep: 0 
    };
}

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
                        if (noteObj.expectedMidiValues.length > 1) {
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

function startScrolling() {
    if (scrollInterval) clearInterval(scrollInterval);
    if (scoreDiv.scrollHeight <= scoreDiv.clientHeight) return;
    if (correctNotesThisRepetition === 0 && !isPaused) scoreDiv.scrollTop = 0;
    scrollInterval = setInterval(() => {
        const pixelsToScroll = SCROLL_PIXELS_PER_INTERVAL_BASE * scrollSpeed;
        scoreDiv.scrollTop += pixelsToScroll;
        const scrollableHeight = scoreDiv.scrollHeight - scoreDiv.clientHeight;
        if (scoreDiv.scrollTop >= scrollableHeight - pixelsToScroll) {
             scoreDiv.scrollTop = scrollableHeight; stopScrolling();
        }
    }, SCROLL_INTERVAL_MS);
}

function stopScrolling() { if (scrollInterval) { clearInterval(scrollInterval); scrollInterval = null; } }

function pauseExercise() {
    if (!isPlaying || isPaused) return; 
    isPaused = true;
    currentRepetitionData.pauseStartTimeInternal = performance.now();
    if (!globalPauseStartTime) globalPauseStartTime = performance.now();
    
    stopScrolling(); 
    startButton.disabled = true;
    pauseButton.textContent = "Resume"; 
    pauseButton.disabled = false;
    stopButton.disabled = false; 
    theoryButton.disabled = false;
    updateInfo("Esercizio in Pausa.");

    // Metti in pausa (ferma) il metronomo se è attivo
    if (isMetronomeRunning) {
        sessionStorage.setItem('metronomeWasRunningOnPause', 'true');
        stopMetronome();
    }
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
    pauseButton.textContent = "Pause"; 
    pauseButton.disabled = false;
    stopButton.disabled = false; 
    theoryButton.disabled = true;
    highlightPendingNotes();

    // Riavvia il metronomo se era attivo prima della pausa
    if (sessionStorage.getItem('metronomeWasRunningOnPause') === 'true') {
        initAudioContext(); // Assicura init
        if (audioContext) {
            startMetronome();
        }
        sessionStorage.removeItem('metronomeWasRunningOnPause');
    }
}

function handleTheoryClick() { window.open(THEORY_PAGE_URL, '_blank'); }

function startExercise() {
    if (!currentExerciseData || !midiReady || !totalNotesPerRepetition || isPlaying) {
        console.warn("Impossibile avviare l'esercizio."); return;
    }
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    initializeNewExerciseStats(); currentRepetition = 1;
    resetNoteStatesAndRepetition(); 
    initializeNewRepetitionData(currentRepetition);
    console.log(`Avvio Esercizio: ${currentExerciseDefinition.name || currentExerciseDefinition.id} - Rip. ${currentRepetition}/${targetRepetitions}`);
    isPlaying = true; isPaused = false;
    
    startButton.disabled = true; pauseButton.disabled = false; pauseButton.textContent = "Pause";
    stopButton.disabled = false; categorySelect.disabled = true; exerciseSelect.disabled = true;
    theoryButton.disabled = true; updateSuccessRate(); playedNoteSpan.textContent = '--'; clearExerciseSummary();

    // Avvia il metronomo se "Avvia con esercizio" è selezionato e non è già attivo
    if (metronomeAutoStartCheckbox && metronomeAutoStartCheckbox.checked && !isMetronomeRunning) {
        initAudioContext(); // Assicura init
        if (audioContext) {
            if (bpmInput) metronomeBpm = parseInt(bpmInput.value, 10); // Prendi il BPM corrente dall'input
            else metronomeBpm = 100; // Fallback
            startMetronome();
        }
    }

    // Render per stati pending (gli startTick sono già in currentExerciseData da selectExercise)
    let rOut1 = renderExercise(scoreDivId, currentExerciseData);
    if (rOut1 && rOut1.processedNotes) {
        currentExerciseData.notesTreble = rOut1.processedNotes.treble || currentExerciseData.notesTreble;
        currentExerciseData.notesBass = rOut1.processedNotes.bass || currentExerciseData.notesBass;
        currentExerciseData.notes = rOut1.processedNotes.single || currentExerciseData.notes;
    }

    highlightPendingNotes(); // Marca le prime note come 'expected'

    setTimeout(() => { 
        if (!isPlaying) return; 
        const savedScroll = scoreDiv.scrollTop;
        let rOut2 = renderExercise(scoreDivId, currentExerciseData); // Render per mostrare stati 'expected'
         if (rOut2 && rOut2.processedNotes) {
             currentExerciseData.notesTreble = rOut2.processedNotes.treble || currentExerciseData.notesTreble;
             currentExerciseData.notesBass = rOut2.processedNotes.bass || currentExerciseData.notesBass;
             currentExerciseData.notes = rOut2.processedNotes.single || currentExerciseData.notes;
         }
        scoreDiv.scrollTop = savedScroll;
        setTimeout(startScrolling, 100); 
    }, 50);
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
    
    if (isPlaying) { 
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
    
    if (isMetronomeRunning) {
        stopMetronome();
    }

    isPlaying = false; 
    isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition();
        let rOut = renderExercise(scoreDivId, currentExerciseData);
        if (rOut && rOut.processedNotes) {
            currentExerciseData.notesTreble = rOut.processedNotes.treble || currentExerciseData.notesTreble;
            currentExerciseData.notesBass = rOut.processedNotes.bass || currentExerciseData.notesBass;
            currentExerciseData.notes = rOut.processedNotes.single || currentExerciseData.notes;
        }
        scoreDiv.scrollTop = 0;
    } else {
        scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    }
    
    startButton.disabled = !midiReady || !currentExerciseData || !totalNotesPerRepetition;
    pauseButton.disabled = true; 
    stopButton.disabled = true; 
    categorySelect.disabled = false;
    exerciseSelect.disabled = (categorySelect.value === ""); 
    theoryButton.disabled = false;
    
    highlightPendingNotes(); 
    playedNoteSpan.textContent = '--'; 
    successRateSpan.textContent = '-- %';
}

function resetUIState() {
    successRateSpan.textContent = '-- %'; playedNoteSpan.textContent = '--';
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

function updateInfo(message) { expectedNoteSpan.textContent = message; }

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
        if (currentExerciseData) { 
             resetNoteStatesAndRepetition(); 
             let rOutInvalid = renderExercise(scoreDivId, currentExerciseData);
             if (rOutInvalid && rOutInvalid.processedNotes) { /* Aggiorna currentExerciseData */ }
        }
        return;
    }

    const categoryExercises = allExercises[currentCategoryKey];
    let nextExercise = null;
    const currentIndex = categoryExercises.findIndex(ex => ex && ex.id === currentExerciseId);

    if (currentIndex !== -1 && currentIndex < categoryExercises.length - 1) {
         let nextI = currentIndex + 1;
         while(nextI < categoryExercises.length && (!categoryExercises[nextI] || !categoryExercises[nextI].id)) nextI++;
         if (nextI < categoryExercises.length) nextExercise = categoryExercises[nextI];
    }

    if (nextExercise && nextExercise.id) {
        const delay = 3000; 
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
        clearExerciseSummary(); return;
    }
    summaryTotalTimeSpan.textContent = `${(exerciseStats.totalActiveTimeSeconds || 0).toFixed(2)} s`;
    summaryTotalErrorsSpan.textContent = exerciseStats.totalErrors || 0;
    let totalRepDurationSum = 0; let validRepCount = 0;
    exerciseStats.repetitionsData.forEach(rep => {
        if (rep.durationSeconds > 0) { totalRepDurationSum += rep.durationSeconds; validRepCount++; }
    });
    summaryAvgRepTimeSpan.textContent = `${validRepCount > 0 ? (totalRepDurationSum / validRepCount).toFixed(2) : "N/A"} s`;
    summaryErrorsListDiv.innerHTML = '';
    if (exerciseStats.totalErrors > 0) {
        const ul = document.createElement('ul'); let hasErrorDetails = false;
        exerciseStats.repetitionsData.forEach(repData => {
            if (repData.errors.length > 0) { hasErrorDetails = true;
                repData.errors.forEach(err => {
                    const li = document.createElement('li');
                    li.innerHTML = `Rip. <strong>${repData.repetitionNumber}</strong>: Att. <strong>${err.expected}</strong>, Suon. <strong>${err.played}</strong> <small>(${err.timeOffsetSeconds}s)</small>`;
                    ul.appendChild(li);
                });
            }
        });
        if (hasErrorDetails) summaryErrorsListDiv.appendChild(ul);
        else summaryErrorsListDiv.innerHTML = '<p>Errori presenti, ma dettagli non registrati.</p>';
    } else if (exerciseStats.exerciseStartTime > 0) summaryErrorsListDiv.innerHTML = '<p>Ottimo! Nessun errore.</p>';
    else summaryErrorsListDiv.innerHTML = '<p>Nessun esercizio completato.</p>';
}

function updateMidiStatus(message, isConnected) {
    midiStatusSpan.textContent = message; midiReady = isConnected;
    const exSelectedAndPlayable = currentExerciseData && totalNotesPerRepetition > 0;

    if (isConnected) {
        startButton.disabled = isPlaying || !exSelectedAndPlayable;
        pauseButton.disabled = !isPlaying || isPaused;
        theoryButton.disabled = isPlaying && !isPaused;
        if (!isPlaying) {
            if (!exSelectedAndPlayable) updateInfo("MIDI pronto. Seleziona un esercizio.");
            else highlightPendingNotes();
        }
    } else {
        startButton.disabled = true; pauseButton.disabled = true;
        stopButton.disabled = !isPlaying; theoryButton.disabled = true;
        updateInfo("Collega un dispositivo MIDI per iniziare.");
        if (isPlaying) {
            console.warn("MIDI disconnesso!"); pauseExercise();
            alert("ATTENZIONE: Dispositivo MIDI disconnesso! Esercizio in pausa.");
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
    console.log("DOM caricato. Piano Future (Illuminazione Selettiva + Progressione Rigorosa)...");
    loadExerciseData();
    initializeMIDI(handleNoteOn, updateMidiStatus);
    resetUIState(); 
    scoreDiv.innerHTML = '<p>Benvenuto! Seleziona una categoria e un esercizio.</p>';
    updateInfo("Collega un dispositivo MIDI e seleziona un esercizio."); 

    if (scrollSpeedValueSpan && scrollSpeedControl) {
        scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
        scrollSpeed = parseInt(scrollSpeedControl.value, 10);
        scrollSpeedControl.addEventListener('input', (e) => {
            scrollSpeed = parseInt(e.target.value, 10);
            scrollSpeedValueSpan.textContent = e.target.value;
            console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
        });
    }

    // Imposta BPM iniziale del metronomo e aggiungi listener
    if (bpmInput) {
        metronomeBpm = parseInt(bpmInput.value, 10);
        bpmInput.addEventListener('change', () => {
            if (!audioContext) initAudioContext();
            let newBpm = parseInt(bpmInput.value, 10);
            if (isNaN(newBpm) || newBpm < 30 || newBpm > 240) {
                newBpm = 100; // Valore di fallback
                bpmInput.value = newBpm;
            }
            metronomeBpm = newBpm;
            if (isMetronomeRunning) {
                stopMetronome();
                startMetronome();
            }
        });
    }
    if (metronomeToggleButton) {
        metronomeToggleButton.addEventListener('click', toggleMetronome);
    }
});