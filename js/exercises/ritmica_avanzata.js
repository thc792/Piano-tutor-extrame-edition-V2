/**
 * js/exercises/ritmica_avanzata.js
 * Esercizi focalizzati sulla lettura ed esecuzione di pattern ritmici complessi.
 * **VERSIONE CORRETTA E A DUE MANI (GRAND STAFF)**
 */

const ritmicaAvanzataExercises = [

    // === Sezione 1: Ritmi Base con Pause ===
    {
        id: "ritmo-01-q-pause-2h", name: "Ritmo: Semiminime/Pause (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH esegue il ritmo su G4
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q"},
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q"},
            { keys: ["r/4"], duration: "q"}, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["g/4"], duration: "h", midiValue: 67 }
        ],
        notesBass: [ // LH tiene C3
            { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }
        ]
    },
    {
        id: "ritmo-02-8th-pause-2h", name: "Ritmo: Crome/Pause (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH tiene G4
            { keys: ["g/4"], duration: "w", midiValue: 67 },
            { keys: ["g/4"], duration: "w", midiValue: 67 }
        ],
        notesBass: [ // LH esegue il ritmo su C3
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["r/4"], duration: "8"}, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            { keys: ["r/4"], duration: "8"}, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["r/4"], duration: "8"},
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["r/4"], duration: "q"},
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ]
    },
     {
        id: "ritmo-03-mixed-rests-2h", name: "Ritmo: Valori Misti/Pause (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH Esegue il ritmo su D5
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["r/4"], duration: "8"}, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
            { keys: ["r/4"], duration: "q"}, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "q", midiValue: 74 }
        ],
        notesBass: [ // LH tiene G3
            { keys: ["g/3"], duration: "w", midiValue: 55 },
            { keys: ["g/3"], duration: "w", midiValue: 55 }
        ]
    },

    // === Sezione 2: Note Puntate e Sedicesimi ===
     {
        id: "ritmo-04-dotted-q-2h", name: "Ritmo: Semiminima Puntata (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
         notesTreble: [ // RH esegue il ritmo su C5
            { keys: ["c/5"], duration: "qd", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "qd", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "h", midiValue: 72 }
        ],
        notesBass: [ // LH tiene C3
            { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["r/4"], duration: "h"}
        ]
    },
    {
        id: "ritmo-05-dotted-8th-2h", name: "Ritmo: Croma Puntata (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH tiene C5
            { keys: ["c/5"], duration: "w", midiValue: 72 },
            { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["r/4"], duration: "h"}
        ],
        notesBass: [ // LH esegue ritmo su F3
            { keys: ["f/3"], duration: "8d", midiValue: 53 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["f/3"], duration: "8d", midiValue: 53 }, { keys: ["f/3"], duration: "16", midiValue: 53 },
            { keys: ["f/3"], duration: "8d", midiValue: 53 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["f/3"], duration: "8d", midiValue: 53 }, { keys: ["f/3"], duration: "16", midiValue: 53 },
            { keys: ["f/3"], duration: "h", midiValue: 53 }
        ]
    },
    {
        id: "ritmo-06-16th-groups-2h", name: "Ritmo: Gruppi 16th (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH esegue ritmo su E5
            { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["r/4"], duration: "8"},
            { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 },
            { keys: ["e/5"], duration: "h", midiValue: 76 }
        ],
        notesBass: [ // LH tiene A3
            { keys: ["a/3"], duration: "w", midiValue: 57 },
            { keys: ["a/3"], duration: "w", midiValue: 57 }
        ]
    },
     {
        id: "ritmo-07-mixed-8-16-2h", name: "Ritmo: Misto 8th/16th (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH tiene A4
            { keys: ["a/4"], duration: "w", midiValue: 69 },
            { keys: ["a/4"], duration: "w", midiValue: 69 }
        ],
        notesBass: [ // LH esegue ritmo su D3
            { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
        ]
    },

    // === Sezione 3: Sincopi (a Due Mani) ===
     {
        id: "ritmo-08-sync-basic-2h", name: "Ritmo: Sincope Base (2 Mani - Ottave C)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH - 8 q 8
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
        ],
        notesBass: [ // LH - 8 q 8
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
        ]
    },
     {
        id: "ritmo-09-sync-offbeat-q-2h", name: "Ritmo: Sincope Offbeat (2 Mani Contrario)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
         notesTreble: [ // RH: Pausa 8 - q - 8 (su G4)
            { keys: ["r/4"], duration: "8"}, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["r/4"], duration: "8"}, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        ],
        notesBass: [ // LH: Sul tempo q q q q (su C3)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        ]
    },
    {
        id: "ritmo-10-sync-complex-1-2h", name: "Ritmo: Sincope Complessa 1 (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH: 8 8 q | 8 q 8 (su C5)
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
        ],
        notesBass: [ // LH: Tiene F2
             { keys: ["f/2"], duration: "w", midiValue: 41 }
        ]
    },
    {
        id: "ritmo-11-sync-complex-2-2h", name: "Ritmo: Sincope Complessa 2 (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
         notesTreble: [ // RH: q 8 8 | qd 8 (su D5)
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["d/5"], duration: "qd", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, // Corretto qd
        ],
        notesBass: [ // LH: q q h (su G3)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["g/3"], duration: "h", midiValue: 55 }
        ]
    },
    {
        id: "ritmo-12-sync-anticipation-2h", name: "Ritmo: Anticipo Sincopato (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH: 8r 8 q | 8r h
             { keys: ["r/4"], duration: "8"}, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
             { keys: ["r/4"], duration: "8"}, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["r/4"], duration: "8"},
        ],
        notesBass: [ // LH: q h 8r 8
             { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "h", midiValue: 48 },
             { keys: ["r/4"], duration: "8"}, { keys: ["c/3"], duration: "8", midiValue: 48 },
        ]
    },


    // === Sezione 4: Terzine (a Due Mani) ===
    {
        id: "ritmo-13-triplet-basic-2h", name: "Ritmo: Terzine Base (2 Mani - Ottave C)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH Terzina q Terzina q (su C5)
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
        ],
        notesBass: [ // LH Terzina q Terzina q (su C4)
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            { keys: ["c/4"], duration: "q", midiValue: 60 },
        ]
    },
     {
        id: "ritmo-14-triplet-mixed-2h", name: "Ritmo: Terzine vs Crome (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH: Terzina | Crome | q | Terzina (su D5)
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            { keys: ["d/5"], duration: "q", midiValue: 74 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
        ],
         notesBass: [ // LH: q | q | h | q q (su G3)
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["g/3"], duration: "h", midiValue: 55 },
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["g/3"], duration: "q", midiValue: 55 }
        ]
    },
    {
        id: "ritmo-15-triplet-rests-2h", name: "Ritmo: Terzine con Pause (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ // RH: 8 r 8 | q | 8 8 r | q (su C5)
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8"}, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "q", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8"},
             { keys: ["c/5"], duration: "q", midiValue: 72 },
        ],
        notesBass: [ // LH: Tiene F3
             { keys: ["f/3"], duration: "w", midiValue: 53 },
             { keys: ["f/3"], duration: "w", midiValue: 53 }
        ]
    },

     // === Sezione 5: Combinazioni Avanzate (a Due Mani) ===
     {
        id: "ritmo-16-combo-sync-16th-2h", name: "Ritmo Combo: Sincopi/16th (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH: 8 q 16 16 | 16 16 8d 16 (su G4)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["g/4"], duration: "8d", midiValue: 67 }, { keys: ["g/4"], duration: "16", midiValue: 67 }
        ],
         notesBass: [ // LH: q q q q (su C3)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 }
        ]
    },
    {
        id: "ritmo-17-combo-triplet-dotted-2h", name: "Ritmo Combo: Terzine/Puntati (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH: Terzina | 8d 16 | qd 8 (su D5)
             { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
             { keys: ["d/5"], duration: "8d", midiValue: 74 }, { keys: ["d/5"], duration: "16", midiValue: 74 },
             { keys: ["d/5"], duration: "qd", midiValue: 74 }, { keys: ["d/5"], duration: "8", midiValue: 74 }
        ],
        notesBass: [ // LH: q h q (su G3 B3)
             { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["b/3"], duration: "h", midiValue: 59 },
             { keys: ["g/3"], duration: "q", midiValue: 55 }
        ]
    },
    {
        id: "ritmo-18-combo-rests-sync-2h", name: "Ritmo Combo: Pause/Sincopi (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH: q r8 q 8 | rq 8 q r8 (su A4)
             { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["r/4"], duration: "8"}, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
             { keys: ["r/4"], duration: "q"}, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["r/4"], duration: "8"}
        ],
         notesBass: [ // LH: h h (su D3)
            { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
            { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["d/3"], duration: "h", midiValue: 50 }
         ]
    },
    {
        id: "ritmo-19-6-8-feel-2h", name: "Ritmo: Sensazione 6/8 (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "6/8", repetitions: 4,
        notesTreble: [ // RH: q 8 | 8 r8 8 | qd (su C5)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8"}, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["c/5"], duration: "qd", midiValue: 72 }
        ],
         notesBass: [ // LH: q. | q. | q. (su C4 G3)
            { keys: ["c/4"], duration: "qd", midiValue: 60 },
            { keys: ["g/3"], duration: "qd", midiValue: 55 },
             { keys: ["c/4"], duration: "qd", midiValue: 60 }
         ]
    },
     {
        id: "ritmo-20-complex-4-4-2h", name: "Ritmo: Complesso 4/4 (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // RH: 16 8 16 r8 8 | q 8 r8 (su E5)
            { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["r/4"], duration: "8"}, { keys: ["e/5"], duration: "8", midiValue: 76 },
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["r/4"], duration: "8"}
        ],
        notesBass: [ // LH: q q | h (su A3 E3)
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/3"], duration: "h", midiValue: 57 },
             { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/3"], duration: "h", midiValue: 57 }
        ]
    },
     {
        id: "ritmo-21-hemiola-simple-2h", name: "Ritmo: Hemiola Semplice (2 Mani)", category: "ritmica_avanzata",
        staveLayout: "grand", keySignature: "C", timeSignature: "3/4", repetitions: 4, // 2 battute di 3/4
        notesTreble: [ // RH: q 8 | q 8 (su G4)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "8", midiValue: 67 }
        ],
        notesBass: [ // LH: q q | q (su C3)
             { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
             { keys: ["c/3"], duration: "q", midiValue: 48 }
        ]
    },


]; // Fine array ritmicaAvanzataExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.ritmica_avanzata = ritmicaAvanzataExercises;

console.log("Dati Esercizi Ritmica Avanzata (Corretti - 2 Mani) Caricati.");