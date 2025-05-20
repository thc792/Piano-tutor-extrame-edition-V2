/**
 * js/exercises/beyer_op101.js
 * Esercizi selezionati da F. Beyer Op. 101 (Scuola Preparatoria del Pianoforte)
 * Include solo esercizi con doppio pentagramma (chiave di violino e basso).
 * Adatto per Piano Future - Copyright (c) 2025 Lorenzetti Giuseppe
 */

const beyerOp101Exercises = [
    // === Inizio Uso Consistente Grand Staff ===
    // (Numeri approssimativi, basati su edizioni comuni come Schirmer)

    {
        id: "beyer-op101-no39",
        name: "Beyer Op. 101 No. 39 - Prime Note Tenute Insieme",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "w", midiValue: 60 }, { keys: ["d/4"], duration: "w", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["b/2"], duration: "w", midiValue: 47 } ]
    },
    {
        id: "beyer-op101-no40",
        name: "Beyer Op. 101 No. 40 - Movimento Minime",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no41",
        name: "Beyer Op. 101 No. 41 - Movimento Contrario Semplice",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },
    {
        id: "beyer-op101-no44",
        name: "Beyer Op. 101 No. 44 - Semiminime",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no45",
        name: "Beyer Op. 101 No. 45 - Esercizio con Pause",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["r/4"], duration: "q" }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no47",
        name: "Beyer Op. 101 No. 47 - Coordinazione con Pause",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["r/4"], duration: "q" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["r/4"], duration: "q" }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no48",
        name: "Beyer Op. 101 No. 48 - Melodia Semplice",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no50",
        name: "Beyer Op. 101 No. 50 - Studio in Do",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
    {
        id: "beyer-op101-no52",
        name: "Beyer Op. 101 No. 52 - Introduzione Sol Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "h", midiValue: 59 } ] // Nota F# in chiave
    },
    {
        id: "beyer-op101-no53",
        name: "Beyer Op. 101 No. 53 - Studio in Sol",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
     {
        id: "beyer-op101-no54",
        name: "Beyer Op. 101 No. 54 - Studio in Fa",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ], // Attenzione a Bb in chiave
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ] // Nota Bb in chiave
    },
    {
        id: "beyer-op101-no57",
        name: "Beyer Op. 101 No. 57 - Crome",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no58",
        name: "Beyer Op. 101 No. 58 - Studio con Crome",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no60", // Esercizio tipo scala
        name: "Beyer Op. 101 No. 60 - Scala di Do Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no61",
        name: "Beyer Op. 101 No. 61 - Scala di Sol Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
    {
        id: "beyer-op101-no62",
        name: "Beyer Op. 101 No. 62 - Scala di Fa Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },
     {
        id: "beyer-op101-no64", // Esercizio agilità / passaggio pollice
        name: "Beyer Op. 101 No. 64 - Passaggio Pollice (Do)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ], // Semplificato
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Accompagnamento semplice
    },
    {
        id: "beyer-op101-no65",
        name: "Beyer Op. 101 No. 65 - Passaggio Pollice (Sol)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ], // Semplificato
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["g/3"], duration: "w", midiValue: 55 } ]
    },
    {
        id: "beyer-op101-no67",
        name: "Beyer Op. 101 No. 67 - Terzine",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // Example: CDE DED EFG FEF...
             { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
             { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, // Simplified rhythm for triplet feel
             { keys: ["c/4"], duration: "h", midiValue: 60 } // Placeholder ending
             ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] // Basic accompaniment
    },
     {
        id: "beyer-op101-no70",
        name: "Beyer Op. 101 No. 70 - Studio con Acciaccature (semplificato)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        // Nota: Le acciaccature reali non sono gestite, simuliamo con note veloci se necessario
        notesTreble: [ { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ], // Simula acciaccatura
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no71",
        name: "Beyer Op. 101 No. 71 - Studio in La Minore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ], // Scala naturale
        notesBass: [ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/2"], duration: "h", midiValue: 45 } ]
    },
    {
        id: "beyer-op101-no74",
        name: "Beyer Op. 101 No. 74 - Arpeggi Spezzati",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no76",
        name: "Beyer Op. 101 No. 76 - Indipendenza Mani",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no77",
        name: "Beyer Op. 101 No. 77 - Studio Legato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
    {
        id: "beyer-op101-no79",
        name: "Beyer Op. 101 No. 79 - Sincopi Semplici",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["r/4"], duration: "8" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },
    {
        id: "beyer-op101-no80",
        name: "Beyer Op. 101 No. 80 - Moto Contrario e Parallelo",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ] // Parte in contrario
    },
     {
        id: "beyer-op101-no82",
        name: "Beyer Op. 101 No. 82 - Studio in Sol con Accomp. Spezzato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/3"], duration: "8", midiValue: 50 } ] // Alberti bass simplified
    },
     {
        id: "beyer-op101-no84",
        name: "Beyer Op. 101 No. 84 - Seste",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ] // Movimento parallelo a distanza di sesta
    },
    {
        id: "beyer-op101-no85",
        name: "Beyer Op. 101 No. 85 - Ottave Spezzate (Agilità)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/4"], duration: "q", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] // Basso semplice
    },
    {
        id: "beyer-op101-no86",
        name: "Beyer Op. 101 No. 86 - Terze Spezzate (Agilità)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ] // Mani parallele
    },
    {
        id: "beyer-op101-no88",
        name: "Beyer Op. 101 No. 88 - Studio Cromatico Semplice",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d#/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d#/4"], duration: "8", midiValue: 63 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no90",
        name: "Beyer Op. 101 No. 90 - Studio in La Minore Armonica",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "q", midiValue: 81 } ], // Scala armonica
        notesBass: [ { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ] // Accompagnamento accordi
    },
    {
        id: "beyer-op101-no93",
        name: "Beyer Op. 101 No. 93 - Studio con accordi",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4", "g/4", "c/5"], duration: "h", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "h", midiValues: [62, 65, 71] } ], // Accordo C Maj / G7
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no95",
        name: "Beyer Op. 101 No. 95 - Variazioni Semplici (Tema)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no97",
        name: "Beyer Op. 101 No. 97 - Studio con abbellimenti (semplificato)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["c/5"], duration: "q", midiValue: 72 } ], // Simula mordente/gruppetto
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ]
    },
    {
        id: "beyer-op101-no98",
        name: "Beyer Op. 101 No. 98 - Studio in Re Minore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ], // Forma armonica
        notesBass: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },
    {
        id: "beyer-op101-no100",
        name: "Beyer Op. 101 No. 100 - Studio Finale (Parte 1)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ], // Arpeggi
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] // Accomp. semplice
    },
     {
        id: "beyer-op101-no101", // Ultimo esercizio del libro
        name: "Beyer Op. 101 No. 101 - Rondò Finale (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 1, // Spesso è un pezzo, non un esercizio da ripetere
        notesTreble: [ { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 } ], // Melodia tipo rondò
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ] // Accompagnamento tipico
    },
    {
        id: "beyer-op101-no104", // Esempio di pezzo più avanzato verso la fine
        name: "Beyer Op. 101 No. 104 - Andante (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "3/4", repetitions: 1,
        notesTreble: [ { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ],
        notesBass: [ { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 } ] // Accomp. accordale
    },
    {
        id: "beyer-op101-no106", // Ultimo pezzo
        name: "Beyer Op. 101 No. 106 - Allegro Moderato (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["e/5"], duration: "q", midiValue: 76 } ], // Melodia scorrevole
        notesBass: [ { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["g/3"], duration: "q", midiValue: 55 } ] // Basso albertino
    },
    {
        id: "beyer-op101-no42",
        name: "Beyer Op. 101 No. 42 - Movimento Parallelo e Contrario",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["b/2"], duration: "h", midiValue: 47 } ]
    },
    {
        id: "beyer-op101-no43",
        name: "Beyer Op. 101 No. 43 - Studio con Minime",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },
    {
        id: "beyer-op101-no46",
        name: "Beyer Op. 101 No. 46 - Coordinazione Semiminime e Pause",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no49",
        name: "Beyer Op. 101 No. 49 - Melodia in Do",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no51",
        name: "Beyer Op. 101 No. 51 - Studio Legato in Do",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no55",
        name: "Beyer Op. 101 No. 55 - Melodia in Sol",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f#/3"], duration: "h", midiValue: 54 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
     {
        id: "beyer-op101-no56",
        name: "Beyer Op. 101 No. 56 - Melodia in Fa",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },
    {
        id: "beyer-op101-no59",
        name: "Beyer Op. 101 No. 59 - Studio con Crome e Pause",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "q" } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no63",
        name: "Beyer Op. 101 No. 63 - Scala di Re Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "D", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },
    {
        id: "beyer-op101-no66",
        name: "Beyer Op. 101 No. 66 - Passaggio Pollice (Fa)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["bb/5"], duration: "8", midiValue: 82 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["bb/5"], duration: "8", midiValue: 82 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 } ], // Semplificato
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f/3"], duration: "w", midiValue: 53 } ]
    },
    {
        id: "beyer-op101-no68",
        name: "Beyer Op. 101 No. 68 - Studio con Terzine e Minime",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ], // Simplified triplet feel
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no69",
        name: "Beyer Op. 101 No. 69 - Studio Legato in Fa",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },
     {
        id: "beyer-op101-no72",
        name: "Beyer Op. 101 No. 72 - Studio in Mi Minore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Em", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "h", midiValue: 59 } ], // Scala naturale
        notesBass: [ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["e/2"], duration: "h", midiValue: 40 } ]
    },
    {
        id: "beyer-op101-no73",
        name: "Beyer Op. 101 No. 73 - Melodia in La Minore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "3/4", repetitions: 2, // Tempo ternario
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 } ],
        notesBass: [ { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
    {
        id: "beyer-op101-no75", // Già presente, ma esteso/controllato
        name: "Beyer Op. 101 No. 75 - Indipendenza Ritmica",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no78",
        name: "Beyer Op. 101 No. 78 - Studio Staccato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        // Nota: Lo staccato è un'articolazione, qui rappresentiamo solo le note e durate
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["r/4"], duration: "8" }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "q", midiValue: 60 } ], // Simula staccato con pause brevi
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no81",
        name: "Beyer Op. 101 No. 81 - Studio Melodico in Do",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no83",
        name: "Beyer Op. 101 No. 83 - Studio in Fa con Accomp. Spezzato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/3"], duration: "8", midiValue: 48 } ] // Alberti bass simplified
    },
     {
        id: "beyer-op101-no87",
        name: "Beyer Op. 101 No. 87 - Arpeggi Maggiori",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // C maj, G maj, F maj example
             { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" },
             { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["r/4"], duration: "8" }
        ],
        notesBass: [ // Roots C, G
             { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 },
             { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }
        ]
    },
    {
        id: "beyer-op101-no89",
        name: "Beyer Op. 101 No. 89 - Studio Cromatico Esteso",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d#/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d#/4"], duration: "8", midiValue: 63 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["bb/2"], duration: "8", midiValue: 46 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["ab/2"], duration: "8", midiValue: 44 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["gb/2"], duration: "8", midiValue: 42 }, { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["gb/2"], duration: "8", midiValue: 42 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["ab/2"], duration: "8", midiValue: 44 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["bb/2"], duration: "8", midiValue: 46 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ] // Moto contrario
    },
     {
        id: "beyer-op101-no91",
        name: "Beyer Op. 101 No. 91 - Arpeggi Minori",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // Am, Dm, Em example
             { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["r/4"], duration: "8" },
             { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["r/4"], duration: "8" }
        ],
        notesBass: [ // Roots Am, Dm
             { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/2"], duration: "h", midiValue: 45 },
             { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["d/3"], duration: "h", midiValue: 50 }
        ]
    },
    {
        id: "beyer-op101-no92",
        name: "Beyer Op. 101 No. 92 - Studio con Note Doppie (Terze)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4", "c/4"], duration: "q", midiValues: [64, 60] }, { keys: ["f/4", "d/4"], duration: "q", midiValues: [65, 62] }, { keys: ["g/4", "e/4"], duration: "q", midiValues: [67, 64] }, { keys: ["a/4", "f/4"], duration: "q", midiValues: [69, 65] } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no94",
        name: "Beyer Op. 101 No. 94 - Studio con accordi spezzati (LH)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "h", midiValue: 66 } ], // Melodia semplice
        notesBass: [ { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 } ] // Accomp. spezzato
    },
     {
        id: "beyer-op101-no96",
        name: "Beyer Op. 101 No. 96 - Variazioni Semplici (Var. 1)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ], // Variazione ritmica
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no99",
        name: "Beyer Op. 101 No. 99 - Studio in Si bemolle Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 } ], // Bb e Eb in chiave
        notesBass: [ { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["gm/3"], duration: "q", midiValue: 55 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ] // Gm = G minor chord implied
    },
    {
        id: "beyer-op101-no102",
        name: "Beyer Op. 101 No. 102 - Studio con Scale Veloci (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 } ], // Scala veloce
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ] // Accomp. più semplice
    },
    {
        id: "beyer-op101-no103",
        name: "Beyer Op. 101 No. 103 - Studio con Arpeggi (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8" } ], // Arpeggi G e C
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
     {
        id: "beyer-op101-no105",
        name: "Beyer Op. 101 No. 105 - Allegretto (Estratto)",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 1,
        notesTreble: [ { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 } ]
    },


    {
        id: "beyer-op101-no44b", // Variation or second part of 44 often present
        name: "Beyer Op. 101 No. 44 (Parte 2) - Semiminime",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no47b", // Variation or second part of 47
        name: "Beyer Op. 101 No. 47 (Parte 2) - Coordinazione",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["r/4"], duration: "q" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["r/4"], duration: "q" }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no52b", // Variation or second part of 52
        name: "Beyer Op. 101 No. 52 (Parte 2) - Sol Maggiore",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
    {
        id: "beyer-op101-no58b", // Variation or second part of 58
        name: "Beyer Op. 101 No. 58 (Parte 2) - Studio con Crome",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no60b", // Variation (e.g., broken chords) on C Major scale idea
        name: "Beyer Op. 101 No. 60 (Variazione) - Accordi Spezzati Do",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 } ], // C maj, F maj broken
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 } ] // Roots
    },
     {
        id: "beyer-op101-no61b", // Variation on G Major scale idea
        name: "Beyer Op. 101 No. 61 (Variazione) - Accordi Spezzati Sol",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["e/5"], duration: "8", midiValue: 76 } ], // G maj, C maj broken
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] // Roots
    },
    {
        id: "beyer-op101-no64b", // Different thumb-under pattern
        name: "Beyer Op. 101 No. 64 (Pattern 2) - Passaggio Pollice",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no67b", // Different triplet pattern
        name: "Beyer Op. 101 No. 67 (Pattern 2) - Terzine",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 } ], // Broken chords feel
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no70b", // Different pattern using grace note idea
        name: "Beyer Op. 101 No. 70 (Pattern 2) - Abbellimenti",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no71b", // Am harmonic variation
        name: "Beyer Op. 101 No. 71 (Armonica) - La Minore Arm.",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "8", midiValue: 81 } ], // Ascending harmonic
        notesBass: [ { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["e/3"], duration: "q", midiValue: 52 } ] // Simple chord roots
    },
     {
        id: "beyer-op101-no74b", // Different broken chord pattern
        name: "Beyer Op. 101 No. 74 (Pattern 2) - Arpeggi Spezzati",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 } ], // C downward, F downward
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 } ]
    },
    {
        id: "beyer-op101-no76b", // Different independence pattern
        name: "Beyer Op. 101 No. 76 (Pattern 2) - Indipendenza Mani",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ], // Longer notes RH
        notesBass: [ { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["g/3"], duration: "8", midiValue: 55 } ] // Faster notes LH
    },
    {
        id: "beyer-op101-no77b", // Legato study in F
        name: "Beyer Op. 101 No. 77 (in Fa) - Studio Legato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },
     {
        id: "beyer-op101-no79b", // Different syncopation
        name: "Beyer Op. 101 No. 79 (Pattern 2) - Sincopi",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "8" }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "8" }, { keys: ["a/4"], duration: "8", midiValue: 69 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 } ]
    },
    {
        id: "beyer-op101-no80b", // Contrary motion expanded
        name: "Beyer Op. 101 No. 80 (Esteso) - Moto Contrario",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 } ],
        notesBass: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no84b", // Sixths in G Major
        name: "Beyer Op. 101 No. 84 (in Sol) - Seste",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["e/5"], duration: "q", midiValue: 76 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ] // Parallel sixths in G
    },
     {
        id: "beyer-op101-no85b", // Broken octaves descending
        name: "Beyer Op. 101 No. 85 (Discendente) - Ottave Spezzate",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/5"], duration: "q", midiValue: 74 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
     {
        id: "beyer-op101-no86b", // Broken thirds descending
        name: "Beyer Op. 101 No. 86 (Discendente) - Terze Spezzate",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ],
        notesBass: [ { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 } ] // Parallel hands
    },
    {
        id: "beyer-op101-no92b", // Double notes - Sixths
        name: "Beyer Op. 101 No. 92 (Seste) - Note Doppie",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["a/4", "c/4"], duration: "q", midiValues: [69, 60] }, { keys: ["b/4", "d/4"], duration: "q", midiValues: [71, 62] }, { keys: ["c/5", "e/4"], duration: "q", midiValues: [72, 64] }, { keys: ["d/5", "f/4"], duration: "q", midiValues: [74, 65] } ],
        notesBass: [ { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
    {
        id: "beyer-op101-no93b", // Chord study variation
        name: "Beyer Op. 101 No. 93 (Var) - Studio Accordi",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["b/4", "d/5", "g/5"], duration: "h", midiValues: [71, 74, 79] }, { keys: ["a/4", "c/5", "f#/5"], duration: "h", midiValues: [69, 72, 78] } ], // G Maj / D7
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },
     {
        id: "beyer-op101-no95b", // Variation 2 on simple theme
        name: "Beyer Op. 101 No. 95 (Var. 2) - Variazioni",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ], // Arpeggiated variation
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ]
    },
     {
        id: "beyer-op101-no97b", // Different embellishment pattern
        name: "Beyer Op. 101 No. 97 (Var) - Abbellimenti",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 } ], // Turn-like figure
        notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no98b", // D minor melodic scale pattern
        name: "Beyer Op. 101 No. 98 (Melodica) - Re Minore Mel.",
        category: "beyer_op101", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c#/5"], duration: "8", midiValue: 73 }, { keys: ["d/5"], duration: "8", midiValue: 74 } ], // Ascending melodic D minor
        notesBass: [ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ] // Roots
    },
     {
        id: "beyer-op101-no100b", // Chordal section from final study
        name: "Beyer Op. 101 No. 100 (Accordi) - Studio Finale",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] } ], // C, G7, Am, F chords
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f/2"], duration: "q", midiValue: 41 } ] // Roots
    },
     {
        id: "beyer-op101-no101b", // Different phrase from final Rondo
        name: "Beyer Op. 101 No. 101 (Frase 2) - Rondò Finale",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 1,
        notesTreble: [ { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ],
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no102b", // More scale fragments
        name: "Beyer Op. 101 No. 102 (Frammento Scala G) - Scale Veloci",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ]
    },
     {
        id: "beyer-op101-no103b", // More arpeggio fragments
        name: "Beyer Op. 101 No. 103 (Frammento Arp F) - Arpeggi",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["r/4"], duration: "8" } ],
        notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "beyer-op101-no104b", // Different phrase from Andante
        name: "Beyer Op. 101 No. 104 (Frase 2) - Andante",
        category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "3/4", repetitions: 1,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 } ],
        notesBass: [ { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ]
    },
     {
        id: "beyer-op101-no105b", // Different phrase from Allegretto
        name: "Beyer Op. 101 No. 105 (Frase 2) - Allegretto",
        category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "2/4", repetitions: 1,
        notesTreble: [ { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    {
        id: "beyer-op101-no106b", // Different phrase from Allegro Moderato
        name: "Beyer Op. 101 No. 106 (Frase 2) - Allegro Moderato",
        category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ],
        notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 } ]
    },

    { id: "beyer-op101-no60-ext12", name: "Beyer Op. 101 No. 60 - Scala Do Magg Estesa (12 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 1, // Lungo, forse 1 ripetizione basta
        notesTreble: [ // Scala C4-C6 ascendente e discendente (12 battute totali in crome)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Bar 1
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, // Bar 2
            { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Bar 3
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }, // Bar 4
            // Ripetizione pattern o leggera variazione per raggiungere 12 barre
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Bar 5
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Bar 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, // Bar 7
            { keys: ["c/4"], duration: "w", midiValue: 60 }, // Bar 8 - Fine placeholder
            { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" } // Fill to 12 bars
        ], notesBass: [ // Moto parallelo un'ottava sotto
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "h" },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["b/2"], duration: "8", midiValue: 47 },
            { keys: ["c/3"], duration: "w", midiValue: 48 },
             { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }, { keys: ["r/4"], duration: "w" }
        ] },

    { id: "beyer-op101-no74-ext12", name: "Beyer Op. 101 No. 74 - Arpeggio I-IV-V Esteso (12 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ // Arp C(1bar), F(1bar), G(1bar), C(1bar) - Repeat 3 times
            // Ciclo 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, // Bar 1 (C)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Bar 2 (F)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Bar 3 (G)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Bar 4 (C end)
            // Ciclo 2
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, // Bar 5 (C)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Bar 6 (F)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Bar 7 (G)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Bar 8 (C end)
             // Ciclo 3
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, // Bar 9 (C)
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Bar 10 (F)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Bar 11 (G)
            { keys: ["c/4"], duration: "w", midiValue: 60 } // Bar 12 (C final)
        ], notesBass: [ // Root notes (whole notes)
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }
        ] },

     { id: "beyer-op101-no76-ext16", name: "Beyer Op. 101 No. 76 - Indipendenza Estesa (16 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ // Melodia più lunga (quarters/halves)
            { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, // Bar 1
            { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // Bar 2
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // Bar 3
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // Bar 4
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, // Bar 5
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 6
            { keys: ["f#/4"], duration: "h", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 7
            { keys: ["d/4"], duration: "w", midiValue: 62 }, // Bar 8
            // Repeat bars 1-8 for a total of 16
            { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, // Bar 9
            { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // Bar 10
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, // Bar 11
            { keys: ["b/4"], duration: "w", midiValue: 71 }, // Bar 12
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, // Bar 13
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, // Bar 14
            { keys: ["f#/4"], duration: "h", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, // Bar 15
            { keys: ["g/4"], duration: "w", midiValue: 67 }  // Bar 16 (End on G)
        ], notesBass: [ // Accompagnamento in crome (pattern Alberti-like)
             // G Chord pattern (Bar 1-4)
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
             // C Chord pattern (Bar 5-6)
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
             // D Chord pattern (Bar 7-8)
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
             // Repeat bars 1-8 for 9-16
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["g/3"], duration: "w", midiValue: 55 }
        ] },
     { id: "beyer-op101-no84-ext12", name: "Beyer Op. 101 No. 84 - Seste Parallele Estese (12 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ // Seste in Fa maggiore
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, // Bar 1
            { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "h", midiValue: 77 }, // Bar 2
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, // Bar 3
            { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, // Bar 4
            // Repeat or variation
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, // Bar 5
            { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["bb/5"], duration: "q", midiValue: 82 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, // Bar 6
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, // Bar 7
            { keys: ["c/5"], duration: "w", midiValue: 72 }, // Bar 8
             // Cadence
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "h", midiValue: 77 }, // Bb -> C7 -> F
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "h", midiValue: 70 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
            { keys: ["f/4"], duration: "w", midiValue: 65 } // Final F (RH lower octave)
        ], notesBass: [ // Moto parallelo sesta sotto
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 },
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "w", midiValue: 52 }, // C7 root
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            { keys: ["f/2"], duration: "w", midiValue: 41 } // Final F
        ] },
     { id: "beyer-op101-no90-ext12", name: "Beyer Op. 101 No. 90 - Studio Am Armonica Esteso (12 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ // Scala armonica ascendente/discendente + pattern
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, // Asc
            { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, // Desc
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, // Pattern medio
            { keys: ["e/4"], duration: "w", midiValue: 64 }, // E (V)
            // Ripeti scala o pattern per 12 barre
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "8", midiValue: 81 },
            { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            { keys: ["e/4"], duration: "w", midiValue: 64 },
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["a/4"], duration: "w", midiValue: 69 } // Final
        ], notesBass: [ // Accompagnamento i-V
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 1-2
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 3-4
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 5-6
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 7-8
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 9-10
            { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, // Bar 11-12
            { keys: ["a/2"], duration: "w", midiValue: 45 } // Final? Needs adjustment if 12 bars total
        ] },
     { id: "beyer-op101-no93-ext12", name: "Beyer Op. 101 No. 93 - Studio Accordi Esteso (12 Bar)", category: "beyer_op101", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 1,
        notesTreble: [ // Sequenza I-IV-V7-I ripetuta 3 volte
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (Bar 1)
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F (Bar 2)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (Bar 3)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (Bar 4)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (Bar 5)
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F (Bar 6)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (Bar 7)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (Bar 8)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (Bar 9)
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F (Bar 10)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (Bar 11)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // C (Bar 12)
        ], notesBass: [ // Radici corrispondenti
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }
        ] },
]; // Fine array beyerOp101Exercises

// Rendi l'array accessibile globalmente nel namespace window.exerciseData
window.exerciseData = window.exerciseData || {};
window.exerciseData.beyer_op101 = beyerOp101Exercises;

console.log("Dati Esercizi Beyer Op. 101 (Selezionati per Grand Staff) Caricati.");