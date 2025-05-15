/**
 * js/exercises/scale_ottave.js
 * Esercizi di scale suonate in ottave parallele tra le due mani.
 */

const scaleOttaveExercises = [

    // === Scale Maggiori in Ottave (1 Ottava Asc/Desc) ===
    // --- Tonalità con Diesis ---
    {
        id: "oct-maj-C", name: "Scale Ottave: C Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // RH: C5-C6-C5
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, // Apice
            { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 } // Fine lunga
        ],
        notesBass: [ // LH: C4-C5-C4
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ]
    },
    {
        id: "oct-maj-G", name: "Scale Ottave: G Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["f#/6"], duration: "q", midiValue: 90 }, { keys: ["g/6"], duration: "q", midiValue: 91 }, { keys: ["f#/6"], duration: "q", midiValue: 90 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "h", midiValue: 79 } ],
        notesBass: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ]
    },
     {
        id: "oct-maj-D", name: "Scale Ottave: D Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "D", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c#/6"], duration: "q", midiValue: 85 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["c#/6"], duration: "q", midiValue: 85 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 } ],
        notesBass: [ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ]
    },
     {
        id: "oct-maj-A", name: "Scale Ottave: A Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "A", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c#/6"], duration: "q", midiValue: 85 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["f#/6"], duration: "q", midiValue: 90 }, { keys: ["g#/6"], duration: "q", midiValue: 92 }, { keys: ["a/6"], duration: "q", midiValue: 93 }, { keys: ["g#/6"], duration: "q", midiValue: 92 }, { keys: ["f#/6"], duration: "q", midiValue: 90 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["c#/6"], duration: "q", midiValue: 85 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "h", midiValue: 81 } ],
        notesBass: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ]
    },
     // --- Tonalità con Bemolli ---
    {
        id: "oct-maj-F", name: "Scale Ottave: F Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["bb/5"], duration: "q", midiValue: 82 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["f/6"], duration: "q", midiValue: 89 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["bb/5"], duration: "q", midiValue: 82 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "h", midiValue: 77 } ],
        notesBass: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ]
    },
    {
        id: "oct-maj-Bb", name: "Scale Ottave: Bb Maggiore", category: "scale_ottave", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["bb/5"], duration: "q", midiValue: 82 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["eb/5"], duration: "q", midiValue: 75 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "h", midiValue: 70 } ],
        notesBass: [ { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "h", midiValue: 58 } ]
    },
    // ... (Aggiungere Eb, Ab, Db, Gb, B Maggiori - omettiamo per brevità qui, ma seguire lo schema) ...


    // === Scale Minori Armoniche in Ottave (1 Ottava Asc/Desc) ===
    {
        id: "oct-minH-A", name: "Scale Ottave: Am Armonica", category: "scale_ottave", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["f/6"], duration: "q", midiValue: 89 }, { keys: ["g#/6"], duration: "q", midiValue: 92 }, { keys: ["a/6"], duration: "q", midiValue: 93 }, { keys: ["g#/6"], duration: "q", midiValue: 92 }, { keys: ["f/6"], duration: "q", midiValue: 89 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["d/6"], duration: "q", midiValue: 86 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "h", midiValue: 81 } ],
        notesBass: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ]
    },
     {
        id: "oct-minH-E", name: "Scale Ottave: Em Armonica", category: "scale_ottave", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3, // Em relativo di G
        notesTreble: [ { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["d#/6"], duration: "q", midiValue: 87 }, { keys: ["e/6"], duration: "q", midiValue: 88 }, { keys: ["d#/6"], duration: "q", midiValue: 87 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["b/5"], duration: "q", midiValue: 83 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "h", midiValue: 76 } ],
        notesBass: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ]
    },
    // ... (Aggiungere Dm, Bm, Gm, Cm Armoniche) ...

    // === Scale Minori Melodiche in Ottave (1 Ottava Asc/Desc) ===
    // Nota: la forma discendente è uguale alla naturale
    {
        id: "oct-minM-A", name: "Scale Ottave: Am Melodica", category: "scale_ottave", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // Asc: A B C D E F# G# A | Desc: A G F E D C B A
            { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["e/6"], duration: "8", midiValue: 88 }, { keys: ["f#/6"], duration: "8", midiValue: 90 }, { keys: ["g#/6"], duration: "8", midiValue: 92 }, { keys: ["a/6"], duration: "8", midiValue: 93 },
            { keys: ["a/6"], duration: "8", midiValue: 93 }, { keys: ["g/6"], duration: "8", midiValue: 91 }, { keys: ["f/6"], duration: "8", midiValue: 89 }, { keys: ["e/6"], duration: "8", midiValue: 88 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["a/5"], duration: "8", midiValue: 81 }
        ],
        notesBass: [ // Asc: A B C D E F# G# A | Desc: A G F E D C B A
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "8", midiValue: 81 },
            { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }
        ]
    },
     {
        id: "oct-minM-E", name: "Scale Ottave: Em Melodica", category: "scale_ottave", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // Asc: E F# G A B C# D# E | Desc: E D C B A G F# E
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c#/6"], duration: "8", midiValue: 85 }, { keys: ["d#/6"], duration: "8", midiValue: 87 }, { keys: ["e/6"], duration: "8", midiValue: 88 },
            { keys: ["e/6"], duration: "8", midiValue: 88 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f#/5"], duration: "8", midiValue: 78 }, { keys: ["e/5"], duration: "8", midiValue: 76 }
        ],
        notesBass: [ // Asc: E F# G A B C# D# E | Desc: E D C B A G F# E
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c#/5"], duration: "8", midiValue: 73 }, { keys: ["d#/5"], duration: "8", midiValue: 75 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["e/4"], duration: "8", midiValue: 64 }
        ]
    },
    // ... (Aggiungere Dm, Bm, Gm, Cm Melodiche) ...


    // === Scala Cromatica in Ottave (1 Ottava Asc/Desc) ===
    {
        id: "oct-chromatic-C", name: "Scale Ottave: Cromatica da C", category: "scale_ottave", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2, // Molto lunga
        notesTreble: [ // C5 -> C6 -> C5 (sedicesimi)
            { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["c#/5"], duration: "16", midiValue: 73 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["d#/5"], duration: "16", midiValue: 75 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["f#/5"], duration: "16", midiValue: 78 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["g#/5"], duration: "16", midiValue: 80 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["a#/5"], duration: "16", midiValue: 82 }, { keys: ["b/5"], duration: "16", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 },
            { keys: ["b/5"], duration: "16", midiValue: 83 }, { keys: ["bb/5"], duration: "16", midiValue: 82 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["ab/5"], duration: "16", midiValue: 80 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["gb/5"], duration: "16", midiValue: 78 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["eb/5"], duration: "16", midiValue: 75 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["db/5"], duration: "16", midiValue: 73 }, { keys: ["c/5"], duration: "16", midiValue: 72 } // Fine discesa
        ],
        notesBass: [ // C4 -> C5 -> C4
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["c#/4"], duration: "16", midiValue: 61 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["d#/4"], duration: "16", midiValue: 63 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["f#/4"], duration: "16", midiValue: 66 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["g#/4"], duration: "16", midiValue: 68 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["a#/4"], duration: "16", midiValue: 70 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["bb/4"], duration: "16", midiValue: 70 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["ab/4"], duration: "16", midiValue: 68 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["gb/4"], duration: "16", midiValue: 66 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["eb/4"], duration: "16", midiValue: 63 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["db/4"], duration: "16", midiValue: 61 }, { keys: ["c/4"], duration: "16", midiValue: 60 }
        ]
    },


]; // Fine array scaleOttaveExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.scale_ottave = scaleOttaveExercises; // Nuova chiave

console.log("Dati Esercizi Scale in Ottave Caricati.");