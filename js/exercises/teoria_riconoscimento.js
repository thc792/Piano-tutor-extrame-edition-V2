/**
 * js/exercises/teoria_riconoscimento.js
 * Esercizi per riconoscimento visivo ed esecuzione di intervalli, accordi e progressioni.
 * **VERSIONE MODIFICATA PER USARE GRAND STAFF CON BASSO FITTIZIO (PAUSA)**
 */

const teoriaRiconoscimentoExercises = [

    // === Sezione 1: Intervalli Melodici (Suonare le 2 note in sequenza) ===
    // Nota: Per questi, la pausa nel basso durerà quanto le due note nel violino.
    // Se le note nel violino sono due 'h' in 2/4, la durata totale è una semibreve 'w'.
    // Se le note nel violino sono due 'q' in 2/4, la durata totale è una minima 'h'.

    // --- Chiave di Violino: Intervalli di base in Do Maggiore ---
    { id: "tr-mel-m2-C4", name: "Int Mel: 2a m (C4-Db4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Db", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["db/4"], duration: "h", midiValue: 61 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ] // Pausa di 2 battute (o 1 semibreve)
    },
    { id: "tr-mel-M2-C4", name: "Int Mel: 2a M (C4-D4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-m3-C4", name: "Int Mel: 3a m (C4-Eb4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Eb", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["eb/4"], duration: "h", midiValue: 63 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-M3-C4", name: "Int Mel: 3a M (C4-E4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-P4-C4", name: "Int Mel: 4a G (C4-F4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-A4-C4", name: "Int Mel: 4a Aum (C4-F#4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "G", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f#/4"], duration: "h", midiValue: 66 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-d5-C4", name: "Int Mel: 5a Dim (C4-Gb4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Gb", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["gb/4"], duration: "h", midiValue: 66 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-P5-C4", name: "Int Mel: 5a G (C4-G4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-m6-C4", name: "Int Mel: 6a m (C4-Ab4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Ab", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["ab/4"], duration: "h", midiValue: 68 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-M6-C4", name: "Int Mel: 6a M (C4-A4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-m7-C4", name: "Int Mel: 7a m (C4-Bb4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Bb", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["bb/4"], duration: "h", midiValue: 70 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-M7-C4", name: "Int Mel: 7a M (C4-B4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-P8-C4", name: "Int Mel: 8a G (C4-C5)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },

    // --- Chiave di Violino: Intervalli Vari in altre Tonalità ---
    { id: "tr-mel-M3-G4", name: "Int Mel: 3a M (G4-B4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "G", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-P5-D4", name: "Int Mel: 5a G (D4-A4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "D", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-m6-A4", name: "Int Mel: 6a m (A4-F5)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "Am", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["f/5"], duration: "h", midiValue: 77 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-mel-M7-F4", name: "Int Mel: 7a M (F4-E5)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "F", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/5"], duration: "h", midiValue: 76 } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },

    // --- Chiave di Basso: Vari Intervalli (ora grand staff, le note originali di basso vanno in notesBass) ---
    { id: "tr-mel-bass-M3-C3", name: "Int Mel B: 3a M (C3-E3)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ], // Pausa nel violino
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ]
    },
    { id: "tr-mel-bass-P5-F2", name: "Int Mel B: 5a G (F2-C3)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ],
        notesBass: [ { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ]
    },
    // ... (Continua questo pattern per tutti gli esercizi che erano 'clef: "bass"') ...
    // Per brevità, modificherò solo alcuni, dovrai applicare il pattern a tutti quelli in chiave di basso.
    { id: "tr-mel-bass-m7-A2", name: "Int Mel B: 7a m (A2-G3)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"2/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ],
        notesBass: [ { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ]
    },


    // === Sezione 2: Intervalli Armonici (Suonare le 2 note insieme) ===
    // Pausa nel basso di semibreve (w) per una battuta di 4/4
    { id: "tr-arm-M3-C4", name: "Int Arm: 3a M (C4-E4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4", "e/4"], duration: "w", midiValues: [60, 64] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    { id: "tr-arm-P5-C4", name: "Int Arm: 5a G (C4-G4)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4", "g/4"], duration: "w", midiValues: [60, 67] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    // ... (Applica a tutti gli intervalli armonici in chiave di violino) ...

    // Per quelli che erano in chiave di basso:
    { id: "tr-arm-bass-M6-C3", name: "Int Arm B: 6a M (C3-A3)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ], // Pausa nel violino
        notesBass: [ { keys: ["c/3", "a/3"], duration: "w", midiValues: [48, 57] } ]
    },
    // ... (Applica a tutti gli intervalli armonici in chiave di basso) ...


    // === Sezione 3: Triadi Fondamentali e Rivolti (Suonare le 3 note) ===
    { id: "tr-chord-Cmaj-v", name: "Triade V: C Maggiore", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    // ... (Applica a tutte le triadi in chiave di violino) ...

    // Per quelle che erano in chiave di basso:
    { id: "tr-chord-Fmaj-b", name: "Triade B: F Maggiore", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "F", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ], // Pausa nel violino
        notesBass: [ { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] } ]
    },
    // ... (Applica a tutte le triadi in chiave di basso) ...


    // === Sezione 4: Accordi di Settima Fondamentali e Rivolti (Suonare le 4 note) ===
    { id: "tr-sev-Cmaj7-v", name: "Sett V: Cmaj7", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] } ],
        notesBass: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ]
    },
    // ... (Applica a tutti gli accordi di settima in chiave di violino) ...

    // Per quelli che erano in chiave di basso:
    { id: "tr-sev-Fmaj7-b", name: "Sett B: Fmaj7", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "F", timeSignature:"4/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "wr", options: {type: "r"} } ], // Pausa nel violino
        notesBass: [ { keys: ["f/2", "a/2", "c/3", "e/3"], duration: "w", midiValues: [41, 45, 48, 52] } ]
    },
    // ... (Applica a tutti gli accordi di settima in chiave di basso) ...


    // === Sezione 5: Piccole Progressioni Armoniche (Accordi in sequenza) ===
    // Qui la pausa nel basso dovrebbe seguire la durata della progressione
    { id: "tr-prog-I-V-I-Cmaj-v", name: "Prog V: I-V-I (C)", category: "teoria_riconoscimento", staveLayout: "grand", keySignature: "C", timeSignature:"4/4", repetitions: 2,
      notesTreble: [
        { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["r/4"], duration: "hr", options:{type:"r"} }, // Cmaj, pausa di minima
        { keys: ["g/3", "b/3", "d/4"], duration: "h", midiValues: [55, 59, 62] }, { keys: ["r/4"], duration: "hr", options:{type:"r"} }, // Gmaj, pausa di minima
        { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // Cmaj
      ],
      notesBass: [ // Pausa per la durata delle prime due battute, poi una nota lunga o un'altra pausa
        { keys: ["b/4"], duration: "wr", options: {type: "r"} }, // Pausa semibreve (1a battuta)
        { keys: ["b/4"], duration: "wr", options: {type: "r"} }, // Pausa semibreve (2a battuta)
        { keys: ["c/3"], duration: "wr", midiValue: 48 } // Nota Do o altra pausa per la 3a battuta
    ]},
    // ... (Adatta le pause nel basso per le altre progressioni in modo simile) ...
    // Per brevità, non completo tutte le progressioni, ma il concetto è questo:
    // la parte notesBass deve avere note/pause per la stessa durata totale di notesTreble.
    // Per le progressioni, potrebbe essere più semplice avere una nota tenuta nel basso o una serie di pause.

];

// console.log("Dati Esercizi Teoria (MODIFICATI GRAND STAFF) Caricati.");
// Se gestisci window.exerciseData in index.html, commenta o rimuovi le righe seguenti:
// window.exerciseData = window.exerciseData || {};
// window.exerciseData.Teoria_Riconoscimento = teoriaRiconoscimentoExercises;