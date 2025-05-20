/**
 * js/exercises/licks_blues_ragtime.js
 * Brevi frasi e lick comuni nel linguaggio Blues e Ragtime.
 * **VERSIONE MODIFICATA PER USARE GRAND STAFF CON RIGO FITTIZIO (PAUSA)**
 */

const licksBluesRagtimeExercises = [

    // === Licks Blues (Ampliati) ===
    {
        id: "lick-blues-minor-pent-Am-1",
        name: "Lick Pent Min (Am) - Desc",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "Am",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-minor-pent-Am-2",
        name: "Lick Pent Min (Am) - Asc",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "Am",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "h", midiValue: 81 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-minor-pent-Em",
        name: "Lick Pent Min (Em)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "G", // Em relativo di G
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-blue-note-C-1",
        name: "Lick Blue Note (C) - Eb",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "F", // Per mostrare Eb naturalmente, o C se vuoi Eb esplicito
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["f#/4"], duration: "8", midiValue: 66 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-blue-note-C-2",
        name: "Lick Blue Note (C) - Gb",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["gb/4"], duration: "q", midiValue: 66 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-blue-note-G",
        name: "Lick Blue Note (G) - Bb",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C", // Per Bb esplicito
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c#/5"], duration: "8", midiValue: 73 },
            { keys: ["d/5"], duration: "h", midiValue: 74 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-turnaround-G",
        name: "Lick Turnaround Blues (G)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO (2 battute)
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // Fine 1a battuta
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q", options:{type:"r"} } // Fine 2a battuta
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} }, { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO (pausa per 2 battute)
    },
    {
        id: "lick-blues-turnaround-A",
        name: "Lick Turnaround Blues (A)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "D", // Per C# e F# naturali
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO (2 battute)
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c#/5"], duration: "8", midiValue: 73 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f#/5"], duration: "8", midiValue: 78 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Fine 1a battuta
            { keys: ["c#/5"], duration: "8", midiValue: 73 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["a/3"], duration: "q", midiValue: 57 }  // Fine 2a battuta
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} }, { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-call-response-Am",
        name: "Lick Call & Response (Am)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "Am",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO (2 battute)
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["r/4"], duration: "h", options:{type:"r"}}, // Fine 1a battuta
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["a/4"], duration: "h", midiValue: 69 } // Fine 2a battuta
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} }, { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-slide-E",
        name: "Lick Blues Slide (E) - Sim.",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "A", // Per G# naturale
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // G naturale
            { keys: ["g#/4"], duration: "q.", midiValue: 68 }, { keys: ["b/4"], duration: "h", midiValue: 71 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-double-stop-C",
        name: "Lick Blues Double Stop (C)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "F", // Per Eb esplicito o Eb key
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // MODIFICATO
            { keys: ["c/4", "eb/4"], duration: "q", midiValues: [60, 63] },
            { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
            { keys: ["c/4", "eb/4"], duration: "h", midiValues: [60, 63] }
        ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // AGGIUNTO
    },
    {
        id: "lick-blues-boogie-LH",
        name: "Pattern Boogie Woogie Base (LH)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "4/4",
        repetitions: 4,
        notesTreble: [ // AGGIUNTO PAUSA
            { keys: ["b/4"], duration: "wr", options: {type: "r"} }, { keys: ["b/4"], duration: "wr", options: {type: "r"} } // Pausa per 2 battute
        ],
        notesBass: [ // Note originali
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, // Fine 1a battuta
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }  // Fine 2a battuta
      ]
    },

    // === Pattern Ragtime Semplificati ===
    {
        id: "lick-ragtime-stride-LH-C",
        name: "Pattern Ragtime Stride Base (LH - C)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 5,
        notesTreble: [ { keys: ["b/4"], duration: "hr", options: {type: "r"} } ], // AGGIUNTO Pausa
        notesBass: [ // Note originali
            { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3", "e/3", "g/3"], duration: "8", midiValues: [48, 52, 55] },
            { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3", "e/3", "g/3"], duration: "8", midiValues: [48, 52, 55] }
        ]
    },
    {
        id: "lick-ragtime-stride-LH-G7",
        name: "Pattern Ragtime Stride Base (LH - G7)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 5,
        notesTreble: [ { keys: ["b/4"], duration: "hr", options: {type: "r"} } ], // AGGIUNTO Pausa
        notesBass: [ // Note originali
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2", "d/3", "f/3"], duration: "8", midiValues: [47, 50, 53] },
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2", "d/3", "f/3"], duration: "8", midiValues: [47, 50, 53] }
        ]
    },
    // ... (Continua questo pattern per TUTTI gli esercizi che erano 'clef: "bass"' o 'clef: "treble"')
    // Per quelli che erano 'clef: "treble"', notesTreble mantiene le note originali e notesBass prende la pausa.
    // Per quelli che erano 'clef: "bass"', notesBass mantiene le note originali e notesTreble prende la pausa.

    // Esempio per un ex 'clef: "treble"'
    {
        id: "lick-ragtime-sync-RH-1",
        name: "Pattern Ragtime Melodia Sincopata 1 (RH)",
        category: "licks_blues_ragtime",
        staveLayout: "grand", // MODIFICATO
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 5,
        notesTreble: [ // Note originali
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "8", midiValue: 67 }
        ],
        notesBass: [ { keys: ["b/4"], duration: "hr", options: {type: "r"} } ] // AGGIUNTO Pausa
    },
    // ... (e così via per tutti gli altri)
];

// Rimuovi o commenta queste righe se gestisci window.exerciseData interamente in index.html
// window.exerciseData = window.exerciseData || {};
// window.exerciseData.licks_blues_ragtime = licksBluesRagtimeExercises;
// console.log("Dati Esercizi Licks Blues/Ragtime (MODIFICATI GRAND STAFF) Caricati.");