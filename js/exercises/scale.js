/**
 * js/exercises/scale.js
 * Contiene i dati per gli esercizi di scale musicali.
 * **VERSIONE AMPLIATA E CORRETTA:**
 * - Include scale Maggiori, Minori (Nat, Arm, Mel), Pentatoniche, Blues, Modi, Cromatica, Toni Interi, Diminuite.
 * - Aggiunte scale Jazz (Bebop, Altered, Lydian Dominant), Harmonic Major, e "Esotiche" (Double Harmonic, Hungarian Minor, Phrygian Dominant).
 * - `notesBass`: `keys` usano ottave /3, /4 ecc. per posizionamento VISIVO corretto in chiave di Basso.
 * - `notesBass`: `midiValue` contengono i valori MIDI REALI dell'ottava bassa (di solito -12 rispetto a treble).
 */

const scaleExercises = [

    // ###################################
    // ###      SCALE MAGGIORI         ###
    // ###################################
    {
        id: "c-major-asc-desc-grand",
        name: "Do Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ // C4-C5 / MIDI 60-72
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH: C3-C4 / MIDI 48-60 | VISUAL KEYS: /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
    {
        id: "g-major-asc-desc-grand",
        name: "Sol Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "G", timeSignature: "4/4",
        notesTreble: [ // G4-G5 / MIDI 67-79
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "h", midiValue: 79 },
            { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }
        ],
        notesBass: [ // PITCH: G3-G4 / MIDI 55-67 | VISUAL KEYS: /3, /4
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 }
        ]
    },
    {
        id: "f-major-asc-desc-grand",
        name: "Fa Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "F", timeSignature: "4/4",
        notesTreble: [ // F4-F5 / MIDI 65-77
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "h", midiValue: 77 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 }
        ],
        notesBass: [ // PITCH: F3-F4 / MIDI 53-65 | VISUAL KEYS: /3, /4
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 },
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 }
        ]
    },

    // --- MINORI NATURALI ---
    {
        id: "a-minor-nat-asc-desc-grand",
        name: "La Minore Naturale (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4",
        notesTreble: [ /* A4-A5 / 69-81 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ /* PITCH A3-A4 / 57-69 | VISUAL /3, /4 */ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ]
    },
     {
        id: "e-minor-nat-asc-desc-grand",
        name: "Mi Minore Naturale (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Em", timeSignature: "4/4",
        notesTreble: [ /* E4-E5 / 64-76 */ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ /* PITCH E3-E4 / 52-64 | VISUAL /3, /4 */ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
     {
        id: "d-minor-nat-asc-desc-grand",
        name: "Re Minore Naturale (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4",
        notesTreble: [ /* D4-D5 / 62-74 */ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ /* PITCH D3-D4 / 50-62 | VISUAL /3, /4 */ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },

    // --- MINORI ARMONICHE ---
     {
        id: "a-minor-harm-asc-desc-grand",
        name: "La Minore Armonica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4",
        notesTreble: [ /* A4-A5, G#5 / 69-81, 80 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ /* PITCH A3-A4, G#4 / 57-69, 68 | VISUAL /3, /4 */ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ]
    },
     {
        id: "e-minor-harm-asc-desc-grand",
        name: "Mi Minore Armonica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Em", timeSignature: "4/4",
        notesTreble: [ /* E4-E5, D#5 / 64-76, 75 */ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ /* PITCH E3-E4, D#4 / 52-64, 63 | VISUAL /3, /4 */ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
     {
        id: "d-minor-harm-asc-desc-grand",
        name: "Re Minore Armonica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4",
        notesTreble: [ /* D4-D5, C#5 / 62-74, 73 */ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ /* PITCH D3-D4, C#4 / 50-62, 61 | VISUAL /3, /4 */ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },

    // --- MINORI MELODICHE ---
     {
        id: "a-minor-mel-asc-desc-grand",
        name: "La Minore Melodica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4",
        notesTreble: [ /* Asc: A4-A5, F#5, G#5 / Desc: G5, F5 -> 69-81, 78, 80 / 79, 77 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g#/5"], duration: "q", midiValue: 80 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ /* Asc: A3-A4, F#4, G#4 / Desc: G4, F4 -> 57-69, 66, 68 / 67, 65 | VISUAL /3, /4 */ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ]
    },
     {
        id: "e-minor-mel-asc-desc-grand",
        name: "Mi Minore Melodica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Em", timeSignature: "4/4",
        notesTreble: [ /* Asc: E4-E5, C#5, D#5 / Desc: D5, C5 -> 64-76, 73, 75 / 74, 72 */ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ /* Asc: E3-E4, C#4, D#4 / Desc: D4, C4 -> 52-64, 61, 63 / 62, 60 | VISUAL /3, /4 */ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
     {
        id: "d-minor-mel-asc-desc-grand",
        name: "Re Minore Melodica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4",
        notesTreble: [ /* Asc: D4-D5, B4, C#5 / Desc: C5, Bb4 -> 62-74, 71, 73 / 72, 70 */ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c#/5"], duration: "q", midiValue: 73 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ /* Asc: D3-D4, B3, C#4 / Desc: C4, Bb3 -> 50-62, 59, 61 / 60, 58 | VISUAL /3, /4 */ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c#/4"], duration: "q", midiValue: 61 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },

    // --- PENTATONICHE MAGGIORI ---
    {
        id: "c-pent-maj-asc-desc-grand",
        name: "Do Pentatonica Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ /* C4, D4, E4, G4, A4, C5 / 60, 62, 64, 67, 69, 72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3, D3, E3, G3, A3, C4 / 48, 50, 52, 55, 57, 60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "g-pent-maj-asc-desc-grand",
        name: "Sol Pentatonica Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "G", timeSignature: "4/4",
        notesTreble: [ /* G4, A4, B4, D5, E5, G5 / 67, 69, 71, 74, 76, 79 */ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["g/5"], duration: "h", midiValue: 79 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ /* PITCH G3, A3, B3, D4, E4, G4 / 55, 57, 59, 62, 64, 67 | VISUAL /3, /4 */ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
     {
        id: "f-pent-maj-asc-desc-grand",
        name: "Fa Pentatonica Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "F", timeSignature: "4/4",
        notesTreble: [ /* F4, G4, A4, C5, D5, F5 / 65, 67, 69, 72, 74, 77 */ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["f/5"], duration: "h", midiValue: 77 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ /* PITCH F3, G3, A3, C4, D4, F4 / 53, 55, 57, 60, 62, 65 | VISUAL /3, /4 */ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },

    // --- PENTATONICHE MINORI ---
    {
        id: "a-pent-min-asc-desc-grand",
        name: "La Pentatonica Minore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4",
        notesTreble: [ /* A4, C5, D5, E5, G5, A5 / 69, 72, 74, 76, 79, 81 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ /* PITCH A3, C4, D4, E4, G4, A4 / 57, 60, 62, 64, 67, 69 | VISUAL /3, /4 */ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ]
    },
     {
        id: "e-pent-min-asc-desc-grand",
        name: "Mi Pentatonica Minore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Em", timeSignature: "4/4",
        notesTreble: [ /* E4, G4, A4, B4, D5, E5 / 64, 67, 69, 71, 74, 76 */ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ /* PITCH E3, G3, A3, B3, D4, E4 / 52, 55, 57, 59, 62, 64 | VISUAL /3, /4 */ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
     {
        id: "d-pent-min-asc-desc-grand",
        name: "Re Pentatonica Minore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4",
        notesTreble: [ /* D4, F4, G4, A4, C5, D5 / 62, 65, 67, 69, 72, 74 */ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ /* PITCH D3, F3, G3, A3, C4, D4 / 50, 53, 55, 57, 60, 62 | VISUAL /3, /4 */ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ]
    },

    // --- BLUES MINORI ---
     {
        id: "a-blues-min-asc-desc-grand",
        name: "La Blues Minore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4",
        notesTreble: [ /* A4-A5 / 69-81 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "h", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d#/5"], duration: "q", midiValue: 75 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ /* PITCH A3-A4 / 57-69 | VISUAL /3, /4 */ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d#/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ]
    },
    // ... (Altre Blues Minori - applica stessa logica /3 /4 per keys basso) ...

    // --- BLUES MAGGIORI ---
    {
        id: "c-blues-maj-asc-desc-grand",
        name: "Do Blues Maggiore (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    // ... (Altre Blues Maggiori - applica stessa logica /3 /4 per keys basso) ...

    // --- MODI ---
    {
        id: "c-dorian-asc-desc-grand",
        name: "Do Dorico (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    // ... (Altri Modi - applica stessa logica /3 /4 per keys basso) ...

    // --- ALTRE SCALE ---
    {
        id: "c-dim-ht-asc-desc-grand", // Whole-Half
        name: "Do Diminuita (Tono-Semitono) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "c-dim-wh-asc-desc-grand", // Half-Whole
        name: "Do Diminuita (Semitono-Tono) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    {
        id: "c-whole-tone-asc-desc-grand",
        name: "Do Esatonale (Toni Interi) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a#/4"], duration: "q", midiValue: 70 }, { keys: ["g#/4"], duration: "q", midiValue: 68 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["a#/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a#/3"], duration: "q", midiValue: 58 }, { keys: ["g#/3"], duration: "q", midiValue: 56 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    { // NUOVA: CROMATICA
        id: "c-chromatic-asc-desc-grand",
        name: "Do Cromatica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "12/8",
        notesTreble: [ /* C4-C5 / 60-72 */ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d#/4"], duration: "8", midiValue: 63 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["a#/4"], duration: "8", midiValue: 70 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["gb/4"], duration: "8", midiValue: 66 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["eb/4"], duration: "8", midiValue: 63 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["db/4"], duration: "8", midiValue: 61 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ /* PITCH C3-C4 / 48-60 | VISUAL /3, /4 */ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c#/3"], duration: "8", midiValue: 49 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["d#/3"], duration: "8", midiValue: 51 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["g#/3"], duration: "8", midiValue: 56 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["a#/3"], duration: "8", midiValue: 58 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["ab/3"], duration: "8", midiValue: 56 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["gb/3"], duration: "8", midiValue: 54 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["eb/3"], duration: "8", midiValue: 51 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["db/3"], duration: "8", midiValue: 49 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ]
    },
    // --- NUOVE SCALE JAZZ ---
    {
        id: "c-bebop-dominant-asc-desc-grand",
        name: "Do Bebop Dominant (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", // Key F per Bb
        notesTreble: [ // C4-C5 / 60-72 (Mixolydian + Maj7 ascendente)
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, // Passing B natural
            { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } // Mixolydian descendente
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     {
        id: "c-altered-asc-desc-grand", // Super Locrian
        name: "Do Alterata (Super Locria) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Db", timeSignature: "4/4", // Key Db per comodità (molti bemolle)
        notesTreble: [ // C4-C5 / 60-72 (R b2 b3 b4 b5 b6 b7) -> C Db Eb Fb Gb Ab Bb C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["fb/4"], duration: "q", midiValue: 64 }, // Fb = E
            { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["gb/4"], duration: "q", midiValue: 66 }, { keys: ["fb/4"], duration: "q", midiValue: 64 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["fb/3"], duration: "q", midiValue: 52 },
            { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["fb/3"], duration: "q", midiValue: 52 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
    {
        id: "c-lydian-dominant-asc-desc-grand",
        name: "Do Lidia Dominante (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", // Key F per Bb
        notesTreble: [ // C4-C5 / 60-72 (Mixolydian #4) -> C D E F# G A Bb C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     // --- ALTRE SCALE ---
    {
        id: "c-harmonic-major-asc-desc-grand",
        name: "Do Maggiore Armonica (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ // C4-C5 / 60-72 (Major b6) -> C D E F G Ab B C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
    {
        id: "c-double-harmonic-asc-desc-grand", // = Byzantine / Arabic (common form)
        name: "Do Doppia Armonica (Bizantina) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ // C4-C5 / 60-72 (R b2 3 4 5 b6 7) -> C Db E F G Ab B C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     {
        id: "c-hungarian-minor-asc-desc-grand",
        name: "Do Minore Ungherese (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "C", timeSignature: "4/4",
        notesTreble: [ // C4-C5 / 60-72 (R 2 b3 #4 5 b6 7) -> C D Eb F# G Ab B C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
            { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     {
        id: "c-phrygian-dominant-asc-desc-grand", // = Spanish Gypsy / Freygish
        name: "Do Frigio Dominante (Freygish) (Asc/Desc, Mani Unite)",
        category: "scale", staveLayout: "grand", keySignature: "Ab", timeSignature: "4/4", // Key Ab per comodità (Db, Eb, Ab, Bb)
        notesTreble: [ // C4-C5 / 60-72 (R b2 3 4 5 b6 b7) -> C Db E F G Ab Bb C
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 },
            { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["ab/4"], duration: "q", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["db/4"], duration: "q", midiValue: 61 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // PITCH C3-C4 / 48-60 | VISUAL /3, /4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["c/4"], duration: "h", midiValue: 60 },
            { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },


]; // Fine dell'array scaleExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.scale = scaleExercises;