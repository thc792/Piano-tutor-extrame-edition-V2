/**
 * js/exercises/voicing_jazz_blues.js
 * Esercizi su voicing comuni per accordi Jazz e Blues.
 * **VERSIONE MODIFICATA PER USARE GRAND STAFF CON RIGO FITTIZIO (PAUSA)**
 */

const voicingJazzBluesExercises = [

    // === Voicing Maj7 ===
    {
        id: "voicing-cmaj7-rootless-A",
        name: "Voicing Cmaj7 Rootless (Tipo A)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO per coerenza (1/4 è molto breve per una semibreve)
        repetitions: 4,
        notesTreble: [ { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "w", midiValues: [64, 67, 71, 74] } ], // 3-5-7-9
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-cmaj7-rootless-B",
        name: "Voicing Cmaj7 Rootless (Tipo B)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["b/3", "d/4", "e/4", "g/4"], duration: "w", midiValues: [59, 62, 64, 67] } ], // 7-9-3-5
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-fmaj7-rootless-A",
        name: "Voicing Fmaj7 Rootless (Tipo A)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"F",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] } ], // 3-5-7-9
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-bbmaj7-shell",
        name: "Voicing Bbmaj7 Shell (1-7)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Bb",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["bb/3", "a/4"], duration: "w", midiValues: [58, 69] } ], // 1-7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },

    // === Voicing m7 ===
    {
        id: "voicing-dm7-rootless-A",
        name: "Voicing Dm7 Rootless (Tipo A)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"F",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] } ], // b3-5-b7-9
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-dm7-rootless-B",
        name: "Voicing Dm7 Rootless (Tipo B)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"F",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["c/4", "e/4", "f/4", "a/4"], duration: "w", midiValues: [60, 64, 65, 69] } ], // b7-9-b3-5
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-gm7-shell",
        name: "Voicing Gm7 Shell (1-b7)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Bb",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["g/4", "f/5"], duration: "w", midiValues: [67, 77] } ], // 1-b7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-cm7-quartal",
        name: "Voicing Cm7 Quartale",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Eb",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["eb/4", "ab/4", "d/5", "g/5"], duration: "w", midiValues: [63, 68, 74, 79] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },

    // === Voicing Dom7 ===
    {
        id: "voicing-g7-rootless-A",
        name: "Voicing G7 Rootless (Tipo A)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["b/4", "d/5", "f/5", "a/5"], duration: "w", midiValues: [71, 74, 77, 81] } ], // 3-5-b7-9
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-g7-rootless-B",
        name: "Voicing G7 Rootless (Tipo B)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["f/4", "a/4", "b/4", "d/5"], duration: "w", midiValues: [65, 69, 71, 74] } ], // b7-9-3-5
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-c7-shell",
        name: "Voicing C7 Shell (1-b7)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"F",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["c/4", "bb/4"], duration: "w", midiValues: [60, 70] } ], // 1-b7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-f7-3-b7",
        name: "Voicing F7 (3-b7)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Bb",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["a/4", "eb/5"], duration: "w", midiValues: [69, 75] } ], // 3-b7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-g7alt-basic",
        name: "Voicing G7alt (3-b7-#9)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["b/4", "f/5", "a#/5"], duration: "w", midiValues: [71, 77, 82] } ], // 3-b7-#9 (A#)
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },

     // === Voicing m7b5 ===
    {
        id: "voicing-bm7b5-rootless-A",
        name: "Voicing Bm7b5 Rootless (Tipo A)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Am", // Per C naturale
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] } ], // b3-b5-b7-9
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-bm7b5-rootless-B",
        name: "Voicing Bm7b5 Rootless (Tipo B)",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"Am", // Per C naturale
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["a/4", "c/5", "d/5", "f/5"], duration: "w", midiValues: [69, 72, 74, 77] } ], // b7-9-b3-b5
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },

    // === Voicing Dim7 ===
    {
        id: "voicing-cdim7-close",
        name: "Voicing Cdim7 Stretto",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C", // Per Eb, Gb, A espliciti
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["c/4", "eb/4", "gb/4", "a/4"], duration: "w", midiValues: [60, 63, 66, 69] } ], // A è Bbb enharmonically
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-cdim7-drop2",
        name: "Voicing Cdim7 Drop 2",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C", // Per Eb, Gb espliciti
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["gb/3", "c/4", "eb/4", "a/4"], duration: "w", midiValues: [54, 60, 63, 69] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },

    // === Voicing Blues/Rock ===
    {
        id: "voicing-blues-C7-simple",
        name: "Voicing Blues C7 Semplice",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"F", // Per Bb naturale
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["e/4", "g/4", "bb/4"], duration: "w", midiValues: [64, 67, 70] } ], // 3-5-b7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    {
        id: "voicing-blues-G7-tritone",
        name: "Voicing Blues G7 Tritono+7",
        category: "voicing_jazz_blues",
        staveLayout: "grand", // MODIFICATO
        keySignature:"C",
        timeSignature:"4/4", // MODIFICATO
        repetitions: 4,
        notesTreble: [ { keys: ["b/4", "f/5"], duration: "w", midiValues: [71, 77] } ], // 3-b7
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
];

// Rimuovi o commenta queste righe se gestisci window.exerciseData interamente in index.html
// window.exerciseData = window.exerciseData || {};
// window.exerciseData.voicing_jazz_blues = voicingJazzBluesExercises;
// console.log("Dati Esercizi Voicing Jazz/Blues (MODIFICATI GRAND STAFF) Caricati.");