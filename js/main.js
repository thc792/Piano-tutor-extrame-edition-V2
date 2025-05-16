/**
 * main.js - Logica principale e gestione eventi Piano Future.
 * **VERSIONE CON ILLUMINAZIONE SELETTIVA E PROGRESSIONE RIGOROSA**
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

// FUNZIONE 2: selectExercise
// (Modificata per memorizzare `expectedMidiValues` e calcolare `totalNotesPerRepetition` correttamente per i MIDI individuali)
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
        totalNotesPerRepetition = 0; // Conteggio delle singole note MIDI attese
        let hasPlayableNotes = false;
        let noteCounter = 0;
        ['notes', 'notesTreble', 'notesBass'].forEach(key => {
            if (currentExerciseData[key]?.length) {
                currentExerciseData[key].forEach(noteObj => {
                    if (noteObj) {
                        noteObj.uniqueId = `${key}-${noteCounter++}`;
                        let midiVals = []; // Conterrà i MIDI originali con ottava
                        if (typeof noteObj.midiValue === 'number') midiVals = [noteObj.midiValue];
                        else if (Array.isArray(noteObj.midiValues)) midiVals = noteObj.midiValues;
                        
                        noteObj.expectedMidiValues = midiVals; // Cruciale: memorizza i MIDI da confrontare

                        if (!(noteObj.keys && noteObj.keys[0]?.toLowerCase().startsWith('r/'))) {
                            if (midiVals.length > 0) hasPlayableNotes = true;
                            totalNotesPerRepetition += midiVals.length; // Somma ogni componente MIDI di accordi/note
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
            // LOG DEBUG
            // console.log("SELECT_EX - Ticks Tr:", currentExerciseData.notesTreble.filter(n=>n.startTick!==undefined).map(n=>({k:n.keys,t:n.startTick, id:n.uniqueId, m:n.expectedMidiValues})));
            // console.log("SELECT_EX - Ticks Bs:", currentExerciseData.notesBass.filter(n=>n.startTick!==undefined).map(n=>({k:n.keys,t:n.startTick, id:n.uniqueId, m:n.expectedMidiValues})));
        }
        
        highlightPendingNotes(); 
        scoreDiv.scrollTop = 0;

        startButton.disabled = !midiReady || !hasPlayableNotes;
        pauseButton.disabled = true; theoryButton.disabled = false;
        resetUIState(); 
        stopButton.disabled = true;

        if (!midiReady) updateInfo("Collega MIDI.");
        else if (!hasPlayableNotes) updateInfo("Nessuna nota da suonare.");
        // else l'info è gestita da highlightPendingNotes()

    } else {
        console.error(`Errore: Esercizio ID "${exerciseId}" non trovato.`);
        currentExerciseData = null; currentExerciseDefinition = null; totalNotesPerRepetition = 0;
        startButton.disabled = true; pauseButton.disabled = true; theoryButton.disabled = false;
        scoreDiv.innerHTML = '<p>Errore caricamento esercizio.</p>';
        resetUIState();
    }
}

// FUNZIONE 3: highlightPendingNotes
// (Modificata per logica anti-sblobbamento più precisa)
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
    
    // Fase 1: Identifica il prossimo 'minNextTick' rilevante da note non 'correct'/'rest'/'ignored'
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        (currentExerciseData[key] || []).forEach(noteObj => {
            // Considera solo note che NON sono già 'correct' e sono suonabili
            if (noteObj && typeof noteObj.startTick === 'number' && 
                noteObj.status !== 'correct' && noteObj.status !== 'rest' && noteObj.status !== 'ignored') {
                minTickFound = Math.min(minTickFound, noteObj.startTick);
            }
        });
    });

    if (minTickFound === Infinity) { // Nessuna nota valida rimanente (né pending, né expected parziale non corretto)
        if (isPlaying && currentRepetitionData.notesCorrectThisRep < totalNotesPerRepetition) {
             // Questo indica un potenziale stallo se la ripetizione non è completa
             console.warn(`HIGHLIGHT: Stallo? No actionable notes found at minTick, ma rep MIDI count: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);
             updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Attenzione: stallo note.`);
        } else if (isPlaying) { 
            // Se la ripetizione è completa (secondo il conteggio MIDI), allora è ok
            updateInfo(`Rip. ${currentRepetition}/${targetRepetitions}. Completata (nessuna nota pendente).`);
        }
        return;
    }
    // console.log(`HIGHLIGHT: Min tick identificato per prossime note 'expected': ${minTickFound}`);

    // Fase 2: Marca come 'expected' SOLO le note 'pending' a minTickFound
    // e colleziona descrizioni di TUTTE le note (già 'expected' o appena marcate) a minTickFound.
    // Le note che erano già 'expected' (es. accordi parziali) e sono a minTickFound, rimangono 'expected'.
    let madeChangeToExpectedState = false;
    ['notesBass', 'notesTreble', 'notes'].forEach(key => {
        (currentExerciseData[key] || []).forEach(noteObj => {
            if (noteObj && typeof noteObj.startTick === 'number' && noteObj.startTick === minTickFound) {
                if (noteObj.status === 'pending') {
                    noteObj.status = 'expected';
                    madeChangeToExpectedState = true; 
                    if (noteObj.expectedMidiValues && noteObj.expectedMidiValues.length > 1) { // Se è un accordo
                        noteObj.correctMidiValues = []; // Resetta l'array delle note corrette per l'accordo
                    }
                    // console.log(`HIGHLIGHT: Nota ${noteObj.uniqueId} (Tick ${minTickFound}, MIDI: ${noteObj.expectedMidiValues?.join(',')}) --> EXPECTED`);
                }
                // Aggiungi alla descrizione se è 'expected' (sia che fosse già, sia che sia appena diventata)
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
    // `madeChangeToExpectedState` può essere usato da handleNoteOn per sapere se è necessario un render.
}


// FUNZIONE 4: handleNoteOn
// (Modificata per DIPENDENZA OTTAVA e logica ANTI-SBLOBBAMENTO precisa)
function handleNoteOn(noteName, midiNote, velocity) {
    playedNoteSpan.textContent = `${noteName} (MIDI: ${midiNote})`;
    playedNoteSpan.style.color = '';

    if (!isPlaying || isPaused || !currentExerciseData) return;
    
    // Ripristinato confronto MIDI diretto (CON OTTAVA)
    console.log(`MIDI In: ${noteName} (${midiNote}) | Rip: ${currentRepetition}/${targetRepetitions} | MIDI OK Rip: ${currentRepetitionData.notesCorrectThisRep}/${totalNotesPerRepetition}`);

    let noteInputConsumed = false; 
    let staveNoteObjectThatMatched = null; 

    // 1. Prendi una SNAPSHOT del "blocco" di StaveNote che sono TUTTE 'expected' IN QUESTO MOMENTO.
    //    Queste sono state identificate da highlightPendingNotes() come quelle al 'minNextTick' corrente.
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
        // Non fare nulla se non ci sono note attese definite, potrebbe essere un input accidentale.
        return; 
    }
    // DEBUG Log
    // console.log("HANDLE_NOTE_ON - Blocco Atteso CORRENTE:", currentExpectedBlockSnapshot.map(n=>({id:n.uniqueId,keys:n.keys,midi:n.expectedMidiValues,tick: n.startTick,status:n.status})));


    // 2. Tenta di far corrispondere l'input MIDI (CON OTTAVA) a UNA StaveNote nel blocco corrente.
    for (const expectedStave of currentExpectedBlockSnapshot) {
        if (expectedStave.status === 'correct') continue; // Già interamente completata.
        if (!expectedStave.expectedMidiValues || expectedStave.expectedMidiValues.length === 0) continue; // Nota non suonabile.

        // Confronto MIDI diretto (CON OTTAVA) usando i valori da expectedMidiValues
        if (expectedStave.expectedMidiValues.length === 1) { // Nota singola attesa
            if (midiNote === expectedStave.expectedMidiValues[0]) {
                staveNoteObjectThatMatched = expectedStave;
                expectedStave.status = 'correct';
                currentRepetitionData.notesCorrectThisRep++; // Incrementa conteggio NOTE MIDI individuali corrette
                correctNotesThisRepetition++; // Incrementa conteggio VexFlow StaveNotes completate
                noteInputConsumed = true;
                console.log(`   OK Nota Singola (MIDI): ${noteName}. Stave ID: ${expectedStave.uniqueId}`);
                break; // L'input MIDI è stato usato, esci dal loop delle StaveNote del blocco.
            }
        } else { // Accordo atteso (expectedMidiValues ha più di un MIDI)
            if (expectedStave.expectedMidiValues.includes(midiNote)) { // Controlla se il MIDI suonato è uno dei componenti attesi
                if (!expectedStave.correctMidiValues) expectedStave.correctMidiValues = [];
                if (!expectedStave.correctMidiValues.includes(midiNote)) { // Solo se questa specifica nota MIDI dell'accordo non era già stata registrata
                    staveNoteObjectThatMatched = expectedStave;
                    expectedStave.correctMidiValues.push(midiNote);
                    currentRepetitionData.notesCorrectThisRep++; // Incrementa conteggio NOTE MIDI individuali corrette
                    noteInputConsumed = true;
                    // console.log(`   OK Nota ${noteName} per Accordo ${expectedStave.uniqueId}. Note accordo OK: ${expectedStave.correctMidiValues.length}/${expectedStave.expectedMidiValues.length}`);
                    if (expectedStave.correctMidiValues.length >= expectedStave.expectedMidiValues.length) {
                        expectedStave.status = 'correct'; // L'intera StaveNote (accordo) è corretta
                        correctNotesThisRepetition++; // Incrementa conteggio VexFlow StaveNotes completate
                        console.log(`   -> Accordo ${expectedStave.uniqueId} (${getNoteDescriptionForUser(expectedStave)}) COMPLETATO.`);
                    }
                    break; // L'input MIDI è stato usato per questo componente dell'accordo.
                }
            }
        }
    } // Fine loop su currentExpectedBlockSnapshot

    // 3. Aggiorna UI e controlla avanzamento o errore
    if (noteInputConsumed) {
        updateInfo(`OK: ${getNoteDescriptionForUser(staveNoteObjectThatMatched)} (suonata ${noteName})`);
        updateSuccessRate();
        
        // Render per mostrare la nota corretta (es. in verde)
        const savedScroll = scoreDiv.scrollTop;
        let rOut = renderExercise(scoreDivId, currentExerciseData); // currentExerciseData ora ha lo stato aggiornato
        if (rOut && rOut.processedNotes) { 
            currentExerciseData.notesTreble = rOut.processedNotes.treble || currentExerciseData.notesTreble || [];
            currentExerciseData.notesBass = rOut.processedNotes.bass || currentExerciseData.notesBass || [];
            currentExerciseData.notes = rOut.processedNotes.single || currentExerciseData.notes || [];
        }
        scoreDiv.scrollTop = savedScroll;

        // Controlla se TUTTE le StaveNote che erano parte del BLOCCO CORRENTE (nella snapshot) sono ora 'correct'
        let allStaveNotesInCurrentBlockNowCorrect = true;
        if (currentExpectedBlockSnapshot.length === 0) { // Se il blocco era vuoto (non dovrebbe succedere se input processato)
            allStaveNotesInCurrentBlockNowCorrect = false; 
        } else {
            for (const expectedStaveFromSnapshot of currentExpectedBlockSnapshot) {
                // Bisogna trovare l'istanza aggiornata della nota in currentExerciseData usando uniqueId
                // per verificare il suo stato REALE dopo l'input.
                let updatedStaveInCurrentData = null;
                const typeKey = expectedStaveFromSnapshot.uniqueId.split('-')[0]; // "notesTreble", "notesBass", o "notes"
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
                    // Se la nota della snapshot non è più trovata e non era una pausa, c'è un problema.
                    console.warn(`LOGIC CHECK FALLITO: Nota con ID ${expectedStaveFromSnapshot.uniqueId} (non pausa) non trovata in currentExerciseData per il check di avanzamento del blocco.`);
                    allStaveNotesInCurrentBlockNowCorrect = false; 
                    break;
                }
            }
        }
        // console.log("HANDLE_NOTE_ON - Dopo input OK, 'allStaveNotesInCurrentBlockNowCorrect' è:", allStaveNotesInCurrentBlockNowCorrect);

        // 5. Gestisci l'avanzamento alla prossima nota/ripetizione o il completamento dell'esercizio
        if (currentRepetitionData.notesCorrectThisRep >= totalNotesPerRepetition) {
            // La ripetizione è finita basandosi sul conteggio TOTALE delle note MIDI
            console.log(`--- Ripetizione ${currentRepetition} COMPLETATA (totale note MIDI)! ---`);
            finalizeAndStoreRepetitionData();
            if (currentRepetition < targetRepetitions) { 
                // ... Logica per preparare la prossima ripetizione (reset stati, initRepData, ecc.)
                // e poi CHIAMARE highlightPendingNotes() seguita da renderExercise() nel setTimeout
                currentRepetition++; correctNotesThisRepetition = 0; initializeNewRepetitionData(currentRepetition);
                ['notes', 'notesTreble', 'notesBass'].forEach(key => { (currentExerciseData[key]||[]).forEach(no => { if(no && no.status!=='rest'&&no.status!=='ignored'){no.status='pending';if(no.expectedMidiValues && no.expectedMidiValues.length>1)no.correctMidiValues=[];}}); });
                updateInfo(`Ottimo! Prepara Rip. ${currentRepetition}`);
                setTimeout(() => { 
                    if(!isPlaying||isPaused)return; 
                    const s1=scoreDiv.scrollTop; let ro1=renderExercise(scoreDivId,currentExerciseData);if(ro1&&ro1.processedNotes){/*aggiorna currentExerciseData con i nuovi (anche se non dovrebbero cambiare i tick)*/}scoreDiv.scrollTop=s1; 
                    highlightPendingNotes(); // Trova il prossimo blocco per la NUOVA ripetizione
                    const s2=scoreDiv.scrollTop; let ro2=renderExercise(scoreDivId,currentExerciseData);if(ro2&&ro2.processedNotes){/*aggiorna*/} scoreDiv.scrollTop=s2; 
                    updateSuccessRate(); 
                    if(scoreDiv.scrollHeight>scoreDiv.clientHeight&&correctNotesThisRepetition===0){scoreDiv.scrollTop=0; setTimeout(startScrolling,100);} 
                }, 1500);
            } else { 
                console.log("--- TUTTE LE RIPETIZIONI COMPLETATE ---"); 
                handleExerciseCompletion(); 
            }
        } else if (allStaveNotesInCurrentBlockNowCorrect) {
            // Il BLOCCO corrente di note 'expected' è stato completato, ma la ripetizione NON è ancora finita.
            // È il momento di trovare e illuminare il PROSSIMO blocco di note.
            console.log("HANDLE_NOTE_ON - Avanzamento Blocco: Tutte le StaveNote del blocco corrente sono 'correct'. Chiamo highlightPendingNotes() per il prossimo.");
            
            highlightPendingNotes(); // Trova le *prossime* StaveNote da marcare come 'expected'
            
            // Re-render per mostrare le nuove StaveNote 'expected' (e i 'correct' del blocco appena completato)
            const scrollAfterHighlight = scoreDiv.scrollTop;
            let rOutHighlight = renderExercise(scoreDivId, currentExerciseData); 
            if (rOutHighlight && rOutHighlight.processedNotes) { /* ... aggiorna currentExerciseData ... */ }
            scoreDiv.scrollTop = scrollAfterHighlight;
        } else { 
            // C'è stato un input corretto, ma il blocco corrente di StaveNote 'expected' NON è ancora completo.
            // (Es. suonata una nota di un accordo, o una mano ma non l'altra se richieste insieme).
            // NON chiamare highlightPendingNotes() per avanzare. L'info text si aggiornerà basandosi 
            // sullo stato parzialmente completato del blOCCO CORRENTE se highlightPendingNotes viene chiamata.
             console.log("HANDLE_NOTE_ON - Progresso parziale nel blocco corrente. Non si avanza l'highlight principale. Aggiorno info.");
             highlightPendingNotes(); // Richiama per aggiornare l'info text con le note rimanenti del blocco corrente.
                                      // Non dovrebbe cambiare QUALI note sono 'expected' se la logica di highlight è corretta.
        }

    } else { // Nota suonata SBAGLIATA (non corrisponde a NESSUNA delle StaveNote nel blocco atteso)
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
        // Nessun re-render necessario qui di default, perché lo stato delle note visive non cambia
        // (a meno che non si voglia evidenziare la nota sbagliata sul pentagramma, che è complesso).
    }
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
            // console.warn(`Categoria "${catKey}" ignorata (vuota o senza esercizi validi).`);
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
                        if (noteObj.expectedMidiValues.length > 1) { // Se è un accordo
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
    if (!isPlaying || isPaused) return; isPaused = true;
    currentRepetitionData.pauseStartTimeInternal = performance.now();
    if (!globalPauseStartTime) globalPauseStartTime = performance.now();
    stopScrolling(); startButton.disabled = true;
    pauseButton.textContent = "Resume"; pauseButton.disabled = false;
    stopButton.disabled = false; theoryButton.disabled = false;
    updateInfo("Esercizio in Pausa.");
}

function resumeExercise() {
    if (!isPlaying || !isPaused) return; isPaused = false;
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
    startScrolling(); startButton.disabled = true;
    pauseButton.textContent = "Pause"; pauseButton.disabled = false;
    stopButton.disabled = false; theoryButton.disabled = true;
    highlightPendingNotes();
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
    if (isPlaying) finalizeAndStoreRepetitionData();
    
    exerciseStats.exerciseEndTime = performance.now();
    if (exerciseStats.exerciseStartTime > 0) {
        let totalDurationMs = exerciseStats.exerciseEndTime - exerciseStats.exerciseStartTime;
        totalDurationMs -= exerciseStats.totalPausedDurationMs; 
        exerciseStats.totalActiveTimeSeconds = parseFloat((Math.max(0, totalDurationMs) / 1000).toFixed(2));
    } else exerciseStats.totalActiveTimeSeconds = 0;
    
    displayExerciseSummary();
    if (exerciseCompletionTimeout) clearTimeout(exerciseCompletionTimeout);
    stopScrolling(); isPlaying = false; isPaused = false;

    if (currentExerciseData) {
        resetNoteStatesAndRepetition();
        let rOut = renderExercise(scoreDivId, currentExerciseData);
        if (rOut && rOut.processedNotes) {
            currentExerciseData.notesTreble = rOut.processedNotes.treble || currentExerciseData.notesTreble;
            currentExerciseData.notesBass = rOut.processedNotes.bass || currentExerciseData.notesBass;
            currentExerciseData.notes = rOut.processedNotes.single || currentExerciseData.notes;
        }
        scoreDiv.scrollTop = 0;
    } else scoreDiv.innerHTML = '<p>Nessun esercizio attivo.</p>';
    
    startButton.disabled = !midiReady || !currentExerciseData || !totalNotesPerRepetition;
    pauseButton.disabled = true; stopButton.disabled = true; categorySelect.disabled = false;
    exerciseSelect.disabled = false; theoryButton.disabled = false;
    
    highlightPendingNotes(); 
    playedNoteSpan.textContent = '--'; successRateSpan.textContent = '-- %';
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
                 // Lo stato e i messaggi info sono gestiti da selectExercise -> highlightPendingNotes
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
            else highlightPendingNotes(); // Per messaggio "Pronto per..."
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

    scrollSpeedValueSpan.textContent = scrollSpeedControl.value;
    scrollSpeed = parseInt(scrollSpeedControl.value, 10);
    scrollSpeedControl.addEventListener('input', (e) => {
        scrollSpeed = parseInt(e.target.value, 10);
        scrollSpeedValueSpan.textContent = e.target.value;
        console.log(`Velocità scrolling aggiornata: ${scrollSpeed}`);
    });
});