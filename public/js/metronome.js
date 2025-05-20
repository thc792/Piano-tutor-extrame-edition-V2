// js/metronome.js

// --- Riferimenti DOM per Metronomo (definiti qui perché usati solo da questo modulo) ---
const bpmInput = document.getElementById('bpm-input');
const metronomeToggleButton = document.getElementById('metronome-toggle-button');
const metronomeVisualIndicator = document.getElementById('metronome-visual-indicator');

// --- Stato Metronomo (variabili a livello di modulo) ---
let audioContext = null;
export let metronomeBpm = 100; // Esportato per lettura, ma modificato internamente
export let isMetronomeRunning = false; // Esportato per lettura/controllo da main.js
let nextNoteTime = 0.0;
const lookahead = 25.0;
const scheduleAheadTime = 0.1;
let schedulerIntervalId = null;
const metronomeAccentFrequency = 880;
const metronomeTickFrequency = 660;
let currentBeatInMeasure = 0;
// beatsPerMeasure non è più una variabile di modulo qui, viene passato a startMetronome
// e memorizzato in sessionStorage per essere usato da metronomeScheduler e toggle.

// --- Funzioni Metronomo ---
export function initAudioContext() { // DEVE ESSERE ESPORTATA
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log("AudioContext (metronome.js) creato.");
        } catch (e) {
            console.error("Web Audio API non supportata (metronome.js).", e);
            alert("Il tuo browser non supporta la Web Audio API, necessaria per il metronomo.");
            if (metronomeToggleButton) metronomeToggleButton.disabled = true;
            if (bpmInput) bpmInput.disabled = true;
        }
    }
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
}

function playMetronomeTick(time, isAccent) { // Helper interno, non serve esportare
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    osc.frequency.setValueAtTime(isAccent ? metronomeAccentFrequency : metronomeTickFrequency, time);
    gainNode.gain.setValueAtTime(isAccent ? 1.0 : 0.6, time);
    osc.start(time);
    osc.stop(time + 0.05);

    if (metronomeVisualIndicator) {
        metronomeVisualIndicator.classList.remove('metronome-indicator-off');
        metronomeVisualIndicator.classList.add('metronome-indicator-on');
        setTimeout(() => {
            metronomeVisualIndicator.classList.remove('metronome-indicator-on');
            metronomeVisualIndicator.classList.add('metronome-indicator-off');
        }, 80);
    }
}

function metronomeScheduler() { // Helper interno, non serve esportare
    if (!audioContext || !schedulerIntervalId) return;
    // Recupera beatsPerMeasure da sessionStorage perché lo scheduler non riceve parametri
    const beatsPerMeasureForScheduler = parseInt(sessionStorage.getItem('metronomeBeatsPerMeasure') || '4');

    while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
        const isAccent = currentBeatInMeasure === 0;
        playMetronomeTick(nextNoteTime, isAccent);
        nextNoteTime += (60.0 / metronomeBpm); // Usa metronomeBpm del modulo
        currentBeatInMeasure = (currentBeatInMeasure + 1) % beatsPerMeasureForScheduler;
    }
}

export function startMetronome(beatsPerMeasureParam = 4) { // ESPORTATA, accetta parametro
    // La dipendenza da currentExerciseDefinition è stata rimossa.
    // Ora riceve beatsPerMeasureParam direttamente.
    if (isMetronomeRunning || !audioContext) return;
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    isMetronomeRunning = true;
    currentBeatInMeasure = 0;
    nextNoteTime = audioContext.currentTime + 0.05;
    
    // Salva beatsPerMeasureParam in sessionStorage per metronomeScheduler
    sessionStorage.setItem('metronomeBeatsPerMeasure', beatsPerMeasureParam.toString());

    console.log(`Metronomo (metronome.js) avviato. BPM: ${metronomeBpm}, Battiti/Misura: ${beatsPerMeasureParam}`);

    if (schedulerIntervalId) clearInterval(schedulerIntervalId); // Prevenire intervalli multipli
    schedulerIntervalId = setInterval(metronomeScheduler, lookahead);

    if (metronomeToggleButton) {
        metronomeToggleButton.textContent = "Ferma Metronomo";
        metronomeToggleButton.classList.add('metronome-active');
    }
}

export function stopMetronome() { // ESPORTATA
    if (!isMetronomeRunning) return;
    isMetronomeRunning = false;
    clearInterval(schedulerIntervalId);
    schedulerIntervalId = null; // Importante resettare
    if (metronomeToggleButton) {
        metronomeToggleButton.textContent = "Avvia Metronomo";
        metronomeToggleButton.classList.remove('metronome-active');
    }
    if (metronomeVisualIndicator) {
        metronomeVisualIndicator.classList.remove('metronome-indicator-on');
        metronomeVisualIndicator.classList.add('metronome-indicator-off');
    }
    console.log("Metronomo (metronome.js) fermato.");
}

// Questa funzione è ora interna perché l'event listener del bottone è qui.
// Se main.js dovesse mai aver bisogno di fare toggle programmaticamente, allora andrebbe esportata.
function internalToggleMetronome(beatsPerMeasureParam = 4) {
    initAudioContext(); // Chiama la versione definita in questo file
    if (!audioContext) return;

    if (isMetronomeRunning) {
        stopMetronome();
    } else {
        if (bpmInput) {
            let newBpmVal = parseInt(bpmInput.value, 10); // Usa una variabile locale per il parsing
            if (isNaN(newBpmVal) || newBpmVal < 30 || newBpmVal > 240) {
                newBpmVal = 100;
                bpmInput.value = newBpmVal;
            }
            metronomeBpm = newBpmVal; // Aggiorna la variabile di modulo
        } else {
            metronomeBpm = 100;
        }
        startMetronome(beatsPerMeasureParam); // Passa i beats per misura
    }
}

// --- Event Listeners (specifici per questo modulo) ---
if (bpmInput) {
    bpmInput.addEventListener('change', () => {
        if (!audioContext) initAudioContext(); // Assicura che il contesto sia pronto
        let newBpmVal = parseInt(bpmInput.value, 10);
        if (isNaN(newBpmVal) || newBpmVal < 30 || newBpmVal > 240) {
            newBpmVal = 100;
            bpmInput.value = newBpmVal;
        }
        metronomeBpm = newBpmVal; // Aggiorna la variabile di modulo
        if (isMetronomeRunning) {
            stopMetronome();
            const currentBeats = parseInt(sessionStorage.getItem('metronomeBeatsPerMeasure') || '4');
            startMetronome(currentBeats); // Riavvia con i beats per misura correnti
        }
    });
}

if (metronomeToggleButton) {
    metronomeToggleButton.addEventListener('click', () => {
        // Quando l'utente clicca il bottone, usiamo i beatsPerMeasure memorizzati
        // o un default se non è mai stato impostato (es. prima che un esercizio parta).
        const currentBeats = parseInt(sessionStorage.getItem('metronomeBeatsPerMeasure') || '4');
        internalToggleMetronome(currentBeats);
    });
}