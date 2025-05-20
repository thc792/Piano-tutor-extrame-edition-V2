/**
 * js/exercises/accompagnamenti.js
 * Esercizi focalizzati su pattern di accompagnamento comuni, con parti definite per entrambe le mani.
 * **VERSIONE AMPLIATA - DUE MANI**
 */

const accompagnamentiExercises = [

    // === Sezione 1: Basso Albertino (con Melodia RH) ===
    {
        id: "accomp-alberti-Cmaj-2h", name: "Accomp: Albertino C Maj (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Melodia semplice RH
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
            { keys: ["c/4"], duration: "w", midiValue: 60 }
        ],
        notesBass: [ // LH: C-G-E-G | F-C4-A-C4 | G-D4-B-D4 | C-G-E-G (ripetuto x2)
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["f/2"], duration: "8", midiValue: 41 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }
        ]
    },
     {
        id: "accomp-alberti-Gmaj-2h", name: "Accomp: Albertino G Maj (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Melodia G Maj RH
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
            { keys: ["g/4"], duration: "w", midiValue: 67 }
        ],
        notesBass: [ // LH: G-D4-B-D4 | C-G-E-G | D-A-F#-A | G-D4-B-D4 (ripetuto x2)
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }
        ]
    },
    {
        id: "accomp-alberti-Amin-2h", name: "Accomp: Albertino Am (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Melodia Am RH
             { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "h", midiValue: 76 },
             { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
             { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
             { keys: ["a/4"], duration: "w", midiValue: 69 }
        ],
        notesBass: [ // LH: A-E4-C4-E4 | D-A3-F3-A3 | E-B3-G#3-B3 | A-E4-C4-E4 (ripetuto x2)
            { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 },
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g#/3"], duration: "8", midiValue: 56 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g#/3"], duration: "8", midiValue: 56 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }
        ]
    },

    // === Sezione 2: Accordi Spezzati (con Melodia RH) ===
    {
        id: "accomp-broken-Cmaj-2h", name: "Accomp: Acc. Spezzato C Maj (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Melodia RH
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 }
        ],
        notesBass: [ // LH: C-E-G | D-F-A | E-G-B | F-A-C5
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["r/4"], duration: "h" }, // C
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["r/4"], duration: "h" }, // Dm
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["r/4"], duration: "h" }, // Em
            { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" }  // F
        ]
    },
     {
        id: "accomp-broken-G7-2h", name: "Accomp: Acc. Spezzato G7 (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Note tenute/accordi RH
            { keys: ["b/4","f/5"], duration: "w", midiValues: [71, 77] },
            { keys: ["c/5","e/5"], duration: "w", midiValues: [72, 76] }
        ],
        notesBass: [ // LH: G-B-D-F (due volte)
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }
        ]
    },

    // === Sezione 3: Pattern "Oom-Pah" (Valzer/Marcia - 2 Mani) ===
    { id: "accomp-oompah-Cmaj-2h", name: "Accomp: Oom-Pah Valzer (C Maj - 2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "3/4", repetitions: 5, notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 } ], notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3", "g/3"], duration: "q", midiValues: [50, 55] }, { keys: ["d/3", "g/3"], duration: "q", midiValues: [50, 55] } ] },
    { id: "accomp-oompah-Fmaj-march-2h", name: "Accomp: Oom-Pah Marcia (F Maj - 2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/5"], duration: "q", midiValue: 72}, { keys: ["d/5"], duration: "q", midiValue: 74}, { keys: ["c/5"], duration: "q", midiValue: 72}, { keys: ["bb/4"], duration: "q", midiValue: 70}, { keys: ["a/4"], duration: "q", midiValue: 69}, { keys: ["g/4"], duration: "q", midiValue: 67}, { keys: ["a/4"], duration: "q", midiValue: 69}, { keys: ["f/4"], duration: "q", midiValue: 65} ], notesBass: [ { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] } ] },

    // === Sezione 4: Accordi Ribattuti (con Melodia RH) ===
    {
        id: "accomp-repeat-Amin-2h", name: "Accomp: Am Ribattuto (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Melodia semplice in Am
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }
        ],
        notesBass: [ // Am in crome
            { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] },
            { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }
        ]
    },
     {
        id: "accomp-repeat-Gmaj-dotted-2h", name: "Accomp: G Magg Ribattuto Puntato (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Melodia con note lunghe
             { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
             { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }
        ],
        notesBass: [ // Gmaj con ritmo 8d - 16 (ripetuto 2 volte per misura)
             { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] },
             { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "8d", midiValues: [55, 59, 62] }, { keys: ["g/3", "b/3", "d/4"], duration: "16", midiValues: [55, 59, 62] }
        ]
    },

     // === Sezione 5: Walking Bass (con Accordi RH) ===
    {
        id: "accomp-walking-bass-Cmaj-ii-V-I-2h", name: "Accomp: Walking Bass ii-V-I C Maj (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Accordi RH (shell voicing o note guida)
            { keys: ["f/4", "c/5"], duration: "h", midiValues: [65, 72] }, { keys: ["e/4", "a/4"], duration: "h", midiValues: [64, 69] }, // Dm9 (3, 7, 9)
            { keys: ["f/4", "b/4"], duration: "h", midiValues: [65, 71] }, { keys: ["e/4", "a/4"], duration: "h", midiValues: [64, 69] }, // G13 (7, 3, 13)
            { keys: ["e/4", "b/4"], duration: "h", midiValues: [64, 71] }, { keys: ["d/4", "g/4"], duration: "h", midiValues: [62, 67] }, // Cmaj7 (3, 7), (9, 5)
            { keys: ["e/4", "g/4"], duration: "w", midiValues: [64, 67] } // C6 (3, 5)
        ],
        notesBass: [ // LH Walking Bass (semiminime)
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },
     {
        id: "accomp-walking-bass-Fmaj-I-vi-ii-V-2h", name: "Accomp: Walking Bass I-vi-ii-V F Maj (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Accordi RH
            { keys: ["a/4", "e/5"], duration: "w", midiValues: [69, 76] }, // Fmaj7 (3, 7)
            { keys: ["g/4", "c/5"], duration: "w", midiValues: [67, 72] }, // Dm7 (3, 7)
            { keys: ["f/4", "bb/4"], duration: "w", midiValues: [65, 70] },// Gm7 (7, 3)
            { keys: ["e/4", "bb/4"], duration: "w", midiValues: [64, 70] }, // C7 (3, 7)
        ],
        notesBass: [ // LH Walking Bass
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Fmaj7
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // Dm7
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Gm7
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, // C7
        ]
    },

    // === Sezione 6: Pattern Arpeggiati (con Accordi RH) ===
    {
        id: "accomp-arp-LH-Cmaj-updown-2h", name: "Accomp: Arp C Maj LH (Accordi RH)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] } ], // Accordo C (1° riv)
        notesBass: [ // C-E-G-C4 G-E-C
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 }
        ]
    },
      {
        id: "accomp-arp-LH-Amin-updown-2h", name: "Accomp: Arp Am LH (Accordi RH)", category: "accompagnamenti", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["c/5", "e/5", "a/5"], duration: "w", midiValues: [72, 76, 81] } ], // Accordo Am (1° riv)
        notesBass: [ // A-C-E-A4 E-C-A
            { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["a/2"], duration: "q", midiValue: 45 }
        ]
    },

     // === Sezione 7: Pattern Pop/Rock con Ottave/Quinte (con Melodia/Accordi RH) ===
     {
        id: "accomp-pop-rock-octaves-C-2h", name: "Accomp: Ottave Rock C (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Melodia semplice C
            { keys: ["g/4"], duration: "q", midiValue: 67}, { keys: ["a/4"], duration: "q", midiValue: 69},
            { keys: ["g/4"], duration: "q", midiValue: 67}, { keys: ["e/4"], duration: "q", midiValue: 64},
            { keys: ["c/4"], duration: "h", midiValue: 60},{ keys: ["r/4"], duration: "h"}
         ],
        notesBass: [ // Ottave alternate C2-C3
             { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
             { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/2"], duration: "8", midiValue: 36 }, { keys: ["c/3"], duration: "8", midiValue: 48 }
        ]
    },
     {
        id: "accomp-pop-rock-fifths-G-2h", name: "Accomp: Quinte Rock G (2 Mani)", category: "accompagnamenti", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // Accordi Gmaj RH
            { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] },
            { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }
        ],
        notesBass: [ // Quinte G2-D3 ribattute
             { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] }, { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] },{ keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] }, { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] },
             { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] }, { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] },{ keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] }, { keys: ["g/2", "d/3"], duration: "8", midiValues: [43, 50] }
        ]
    },


]; // Fine array accompagnamentiExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.accompagnamenti = accompagnamentiExercises;

console.log("Dati Esercizi Accompagnamenti (Ampliati - 2 Mani) Caricati.");