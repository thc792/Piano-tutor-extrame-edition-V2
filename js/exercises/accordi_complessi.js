/**
 * js/exercises/accordi_complessi.js
 * Contiene dati per esercizi su accordi estesi, alterati e complessi.
 * Include accordi singoli e brevi progressioni/giri armonici.
 *
 * STRUTTURA DATI:
 * - `keys`: Stringhe VexFlow per VISUALIZZAZIONE corretta. Bass clef usa /3, /4 ecc.
 * - `midiValue` (numero): Per note singole (es. nel basso).
 * - `midiValues` (array): Per accordi (contiene i MIDI di TUTTE le note dell'accordo).
 * - `repetitions`: Default a 1, modificabile per ripetere l'esercizio.
 */

const complexChordExercises = [

    // === Sezione 1: Accordi Maggiori Estesi (su Do) ===
    {
        id: "chord-cmaj7", name: "Accordo Cmaj7", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }],
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
    {
        id: "chord-cmaj9", name: "Accordo Cmaj9", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["e/4", "g/4", "b/4", "d/5"], duration: "w", midiValues: [64, 67, 71, 74] }], // Voicing comune senza fondamentale
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
    {
        id: "chord-cmaj11", name: "Accordo Cmaj11 (#11)", category: "accordi_complessi", // Spesso Lydian / #11
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["e/4", "g/4", "b/4", "d/5", "f#/5"], duration: "w", midiValues: [64, 67, 71, 74, 78] }], // Voicing senza C, con F#
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
     {
        id: "chord-cmaj13", name: "Accordo Cmaj13", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["e/4", "g/4", "b/4", "d/5", "a/5"], duration: "w", midiValues: [64, 67, 71, 74, 81] }], // Voicing comune 3-5-7-9-13
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
    {
        id: "chord-c6", name: "Accordo C6", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "e/4", "g/4", "a/4"], duration: "w", midiValues: [60, 64, 67, 69] }],
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
     {
        id: "chord-c69", name: "Accordo C6/9", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["e/4", "g/4", "a/4", "d/5"], duration: "w", midiValues: [64, 67, 69, 74] }], // Voicing 3-5-6-9
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },

    // === Sezione 2: Accordi Minori Estesi (su La Minore) ===
     {
        id: "chord-am7", name: "Accordo Am7", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }],
        notesBass: [{ keys: ["a/2"], duration: "w", midiValue: 45 }]
    },
    {
        id: "chord-am9", name: "Accordo Am9", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/5", "e/5", "g/5", "b/5"], duration: "w", midiValues: [72, 76, 79, 83] }], // Voicing 3-5-7-9
        notesBass: [{ keys: ["a/2"], duration: "w", midiValue: 45 }]
    },
    {
        id: "chord-am11", name: "Accordo Am11", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/5", "e/5", "g/5", "b/5", "d/6"], duration: "w", midiValues: [72, 76, 79, 83, 86] }], // Voicing 3-5-7-9-11
        notesBass: [{ keys: ["a/2"], duration: "w", midiValue: 45 }]
    },
    {
        id: "chord-am13", name: "Accordo Am13", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/5", "e/5", "g/5", "b/5", "f#/6"], duration: "w", midiValues: [72, 76, 79, 83, 90] }], // Voicing 3-5-7-9-13 (F# è 13 di A)
        notesBass: [{ keys: ["a/2"], duration: "w", midiValue: 45 }]
    },
     {
        id: "chord-am6", name: "Accordo Am6", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["a/4", "c/5", "e/5", "f#/5"], duration: "w", midiValues: [69, 72, 76, 78] }], // F# è la sesta magg
        notesBass: [{ keys: ["a/2"], duration: "w", midiValue: 45 }]
    },

    // === Sezione 3: Accordi Dominanti Estesi e Alterati (su Sol7) ===
     {
        id: "chord-g7", name: "Accordo G7", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, // Key C per F nat
        notesTreble: [{ keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }],
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g9", name: "Accordo G9", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "d/5", "f/5", "a/5"], duration: "w", midiValues: [71, 74, 77, 81] }], // Voicing 3-5-7-9
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g11", name: "Accordo G11", category: "accordi_complessi", // Spesso si omette la terza
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["g/4", "d/5", "f/5", "a/5", "c/6"], duration: "w", midiValues: [67, 74, 77, 81, 84] }], // Voicing R-5-7-9-11
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g13", name: "Accordo G13", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "d/5", "f/5", "a/5", "e/6"], duration: "w", midiValues: [71, 74, 77, 81, 88] }], // Voicing 3-5-7-9-13 (E è 13 di G)
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
     {
        id: "chord-g7b9", name: "Accordo G7(b9)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "d/5", "f/5", "ab/5"], duration: "w", midiValues: [71, 74, 77, 80] }], // Voicing 3-5-7-b9
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g7s9", name: "Accordo G7(#9) 'Hendrix Chord'", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "d#/5", "f/5", "a#/5"], duration: "w", midiValues: [71, 75, 77, 82] }], // Voicing 3-#5-7-#9 (A# è #9 di G) - #5 opzionale
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g7s5", name: "Accordo G7(#5)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "d#/5", "f/5"], duration: "w", midiValues: [71, 75, 77] }], // Voicing 3-#5-7
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g7b5", name: "Accordo G7(b5)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["b/4", "db/5", "f/5"], duration: "w", midiValues: [71, 73, 77] }], // Voicing 3-b5-7
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-g7alt", name: "Accordo G7alt (Tipico: b9, #9, #5)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        // Combina alterazioni comuni. Voicing può variare molto.
        notesTreble: [{ keys: ["b/4", "d#/5", "f/5", "ab/5"], duration: "w", midiValues: [71, 75, 77, 80] }], // Voicing 3-#5-7-b9
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },

    // === Sezione 4: Accordi Sus, Dim, Aug ===
    {
        id: "chord-csus4", name: "Accordo Csus4", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "f/4", "g/4"], duration: "w", midiValues: [60, 65, 67] }], // R-4-5
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
    {
        id: "chord-csus2", name: "Accordo Csus2", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "d/4", "g/4"], duration: "w", midiValues: [60, 62, 67] }], // R-2-5
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
     {
        id: "chord-g7sus4", name: "Accordo G7sus4", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["g/4", "c/5", "d/5", "f/5"], duration: "w", midiValues: [67, 72, 74, 77] }], // R-4-5-b7
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }]
    },
    {
        id: "chord-cdim7", name: "Accordo Cdim7 (Diminuito)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "eb/4", "gb/4", "a/4"], duration: "w", midiValues: [60, 63, 66, 69] }], // Terze minori R-b3-b5-bb7(A)
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },
     {
        id: "chord-caug", name: "Accordo Caug (Aumentato)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "e/4", "g#/4"], duration: "w", midiValues: [60, 64, 68] }], // Terze maggiori R-3-#5
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }]
    },

     // === Sezione 5: Accordi Slash (Rivolti/Basso Diverso) ===
    {
        id: "chord-cslashg", name: "Accordo C/G (Slash Chord)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }], // Triade C
        notesBass: [{ keys: ["g/2"], duration: "w", midiValue: 43 }] // Basso G
    },
    {
        id: "chord-gslashb", name: "Accordo G/B (Slash Chord)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }], // Triade G
        notesBass: [{ keys: ["b/2"], duration: "w", midiValue: 47 }] // Basso B
    },
     {
        id: "chord-amslashc", name: "Accordo Am/C (Slash Chord)", category: "accordi_complessi",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [{ keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }], // Triade Am
        notesBass: [{ keys: ["c/3"], duration: "w", midiValue: 48 }] // Basso C
    },

    // === Sezione 6: Brevi Giri con Accordi Complessi ===
    {
        id: "prog-ii-V-I-ext-C",
        name: "Progressione ii-V-I Estesa (Do Magg)",
        category: "accordi_complessi", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [
            { keys: ["d/4", "f/4", "a/4", "c/5", "e/5"], duration: "h", midiValues: [62, 65, 69, 72, 76] }, // Dm11 (o Dm9)
            { keys: ["b/4", "d#/5", "f/5", "ab/5"], duration: "h", midiValues: [71, 75, 77, 80] }, // G7alt (3-#5-7-b9)
            { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "w", midiValues: [64, 67, 71, 74] }  // Cmaj9 (voicing 3-5-7-9)
        ],
        notesBass: [
            { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },
    {
        id: "prog-coltrane-changes-start-C",
        name: "Coltrane Changes Start (Do Magg)",
        category: "accordi_complessi", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        // Cmaj7 | Eb7 | Abmaj7 | Db7 | ... (solo inizio)
        notesTreble: [
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "h", midiValues: [60, 64, 67, 71] }, // Cmaj7
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "h", midiValues: [63, 67, 70, 73] }, // Eb7
            { keys: ["ab/3", "c/4", "eb/4", "g/4"], duration: "h", midiValues: [56, 60, 63, 67] }, // Abmaj7 (voce bassa)
            { keys: ["db/4", "f/4", "ab/4", "cb/5"], duration: "h", midiValues: [61, 65, 68, 71] }  // Db7 (Cb = B)
        ],
        notesBass: [
            { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["eb/3"], duration: "h", midiValue: 51 },
            { keys: ["ab/2"], duration: "h", midiValue: 44 }, { keys: ["db/3"], duration: "h", midiValue: 49 }
        ]
    },
     {
        id: "prog-sus-resolution-G",
        name: "Risoluzione Sus4 (Sol)",
        category: "accordi_complessi", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [
            { keys: ["g/4", "c/5", "d/5", "f/5"], duration: "h", midiValues: [67, 72, 74, 77] }, // G7sus4
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }, // G7 (risoluzione)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // C (tonica)
        ],
        notesBass: [
             { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["g/2"], duration: "h", midiValue: 43 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },


]; // Fine array complexChordExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.accordi_complessi = complexChordExercises; // Usa la chiave corretta

console.log("Dati Esercizi Accordi Complessi Caricati.");