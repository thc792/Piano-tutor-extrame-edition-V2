/**
 * js/exercises/contrappunto_base.js
 * Esercizi introduttivi al contrappunto a due voci per l'indipendenza delle mani.
 */

const contrappuntoBaseExercises = [

    // === Sezione 1: Moto Contrario Diatonico (C Maggiore) ===
    {
        id: "cp-contrary-cmaj-scale-q", name: "Contrappunto: Moto Contrario (C Maj - Scala Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Ascendente C4-C5
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }
        ],
        notesBass: [ // LH Discendente C4-C3
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }
        ]
    },
    {
        id: "cp-contrary-cmaj-scale-h", name: "Contrappunto: Moto Contrario (C Maj - Scala H)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Discendente C5-C4
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [ // LH Ascendente C3-C4
            { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["f/3"], duration: "h", midiValue: 53 },
            { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 }
        ]
    },
    {
        id: "cp-contrary-cmaj-steps-jumps", name: "Contrappunto: Moto Contrario (C Maj - Salti)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Salta per terze ascendenti
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 }
        ],
        notesBass: [ // LH Salta per terze discendenti
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     {
        id: "cp-contrary-gmaj-scale-q", name: "Contrappunto: Moto Contrario (G Maj - Scala Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 } ],
        notesBass: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 } ]
    },

    // === Sezione 2: Moto Obliquo (Nota Tenuta vs Melodia) ===
    {
        id: "cp-oblique-lh-hold-C", name: "Contrappunto: Obliquo (LH Tiene C3)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Melodia semplice
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 }
        ],
        notesBass: [ // LH Tiene C3
            { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },
    {
        id: "cp-oblique-rh-hold-G", name: "Contrappunto: Obliquo (RH Tiene G4)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Tiene G4
            { keys: ["g/4"], duration: "w", midiValue: 67 },
            { keys: ["g/4"], duration: "w", midiValue: 67 }
        ],
        notesBass: [ // LH Melodia semplice
             { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 },
             { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "h", midiValue: 47 }
        ]
    },
    {
        id: "cp-oblique-lh-ostinato-C", name: "Contrappunto: Obliquo (LH Ostinato C-G)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Melodia più mossa
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 }
        ],
        notesBass: [ // LH Ostinato C-G in semiminime
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }
        ]
    },
     {
        id: "cp-oblique-rh-ostinato-G", name: "Contrappunto: Obliquo (RH Ostinato G-D)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH Ostinato G-D in semiminime
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/5"], duration: "q", midiValue: 74 }
        ],
        notesBass: [ // LH Melodia più mossa in G
             { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 },
             { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 }
        ]
    },

    // === Sezione 3: Moto Parallelo (Terze e Seste) ===
    // Nota: Questi sono simili agli esercizi di indipendenza, ma inseriti qui per contesto contrappuntistico
    {
        id: "cp-parallel-3rds-Cmaj-q", name: "Contrappunto: Parallelo Terze (C Maj - Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "cp-parallel-6ths-Cmaj-q", name: "Contrappunto: Parallelo Seste (C Maj - Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
     {
        id: "cp-parallel-3rds-Gmaj-h", name: "Contrappunto: Parallelo Terze (G Maj - H)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["b/3"], duration: "h", midiValue: 59 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },
      {
        id: "cp-parallel-6ths-Amin-q", name: "Contrappunto: Parallelo Seste (Am Nat - Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 } ],
        notesBass: [ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ]
    },


    // === Sezione 4: Combinazioni Semplici (Moto Misto) ===
    {
        id: "cp-mixed-1", name: "Contrappunto: Moto Misto 1 (C Maj)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH si muove per gradi
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 }
        ],
        notesBass: [ // LH tiene e poi si muove in contrario
            { keys: ["c/3"], duration: "w", midiValue: 48 }, // Tiene
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 } // Contrario
        ]
    },
    {
        id: "cp-mixed-2", name: "Contrappunto: Moto Misto 2 (G Maj)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH tiene e poi si muove
             { keys: ["d/5"], duration: "w", midiValue: 74 },
             { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }
        ],
        notesBass: [ // LH si muove per gradi e poi tiene
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["d/4"], duration: "w", midiValue: 62 } // Tiene
        ]
    },
     {
        id: "cp-mixed-imitation-start", name: "Contrappunto: Inizio Imitazione (C Maj)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH entra dopo
            { keys: ["r/4"], duration: "h"}, // Pausa
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }
        ],
        notesBass: [ // LH inizia
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 },
            { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["g/3"], duration: "h", midiValue: 55 } // Continua mentre RH imita
        ]
    },
    {
        id: "cp-mixed-crossing-hands-simple", name: "Contrappunto: Incrocio Semplice", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH scende
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }
        ],
        notesBass: [ // LH sale e incrocia sopra D4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 } // F3 è sotto D4
        ]
    },

     // === Aggiungere altri 5-10 esercizi ===
     // Esempi:
     // - Moto contrario in tonalità minori (Dm, Em)
     // - Moto obliquo con pattern ritmici più complessi nella voce mobile
     // - Moto parallelo (3e/6e) con ritmi diversi tra le mani
     // - Esercizi che alternano i tipi di moto (es. 2 battute contrario, 2 battute obliquo)
     // - Contrappunto a 2 voci usando scale pentatoniche
      {
        id: "cp-contrary-dmin-scale-q", name: "Contrappunto: Moto Contrario (Dm Nat - Scala Q)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 } ],
        notesBass: [ { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 } ]
    },
     {
        id: "cp-oblique-lh-alberti-C", name: "Contrappunto: Obliquo (LH Albertino C)", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "w", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 } ]
    },
      {
        id: "cp-parallel-mix-rhythm", name: "Contrappunto: Parallelo 3e/6e Ritmo Misto", category: "contrappunto_base",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },


]; // Fine array contrappuntoBaseExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.contrappunto_base = contrappuntoBaseExercises; // Usa la chiave corretta

console.log("Dati Esercizi Contrappunto Base Caricati.");