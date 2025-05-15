/**
 * js/exercises/teoria_riconoscimento.js
 * Esercizi per riconoscimento visivo ed esecuzione di intervalli e accordi.
 * **VERSIONE ARRICCHITA E AMPLIATA**
 */

const teoriaRiconoscimentoExercises = [

    // === Sezione 1: Intervalli Melodici (Suonare le 2 note in sequenza) ===
    // --- Chiave di Violino: Seconde e Terze ---
    { id: "tr-mel-maj2-C4", name: "Int Mel: 2a M (C4-D4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ] },
    { id: "tr-mel-min2-E4", name: "Int Mel: 2a m (E4-F4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ] },
    { id: "tr-mel-maj2-G4", name: "Int Mel: 2a M (G4-A4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ] },
    { id: "tr-mel-min2-B4", name: "Int Mel: 2a m (B4-C5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ] },
    { id: "tr-mel-maj3-C4", name: "Int Mel: 3a M (C4-E4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ] },
    { id: "tr-mel-min3-D4", name: "Int Mel: 3a m (D4-F4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "F", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ] },
    { id: "tr-mel-maj3-A4", name: "Int Mel: 3a M (A4-C#5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "A", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["c#/5"], duration: "h", midiValue: 73 } ] },
    { id: "tr-mel-min3-E4", name: "Int Mel: 3a m (E4-G4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ] },

    // --- Chiave di Violino: Quarte, Quinte e Tritono ---
    { id: "tr-mel-p4-C4", name: "Int Mel: 4a G (C4-F4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ] },
    { id: "tr-mel-p4-E4", name: "Int Mel: 4a G (E4-A4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ] },
    { id: "tr-mel-aug4-C4", name: "Int Mel: 4a Aum (C4-F#4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["f#/4"], duration: "h", midiValue: 66 } ] },
    { id: "tr-mel-dim5-B4", name: "Int Mel: 5a Dim (B4-F5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["f/5"], duration: "h", midiValue: 77 } ] },
    { id: "tr-mel-p5-C4", name: "Int Mel: 5a G (C4-G4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ] },
    { id: "tr-mel-p5-D4", name: "Int Mel: 5a G (D4-A4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ] },
    { id: "tr-mel-aug5-C4", name: "Int Mel: 5a Aum (C4-G#4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["g#/4"], duration: "h", midiValue: 68 } ] },

    // --- Chiave di Violino: Seste e Settime ---
    { id: "tr-mel-maj6-C4", name: "Int Mel: 6a M (C4-A4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ] },
    { id: "tr-mel-min6-E4", name: "Int Mel: 6a m (E4-C5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ] },
    { id: "tr-mel-maj6-G4", name: "Int Mel: 6a M (G4-E5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/5"], duration: "h", midiValue: 76 } ] },
    { id: "tr-mel-maj7-C4", name: "Int Mel: 7a M (C4-B4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ] },
    { id: "tr-mel-min7-D4", name: "Int Mel: 7a m (D4-C5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ] },
    { id: "tr-mel-min7-G4", name: "Int Mel: 7a m (G4-F5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/5"], duration: "h", midiValue: 77 } ] },
    { id: "tr-mel-dim7-B4", name: "Int Mel: 7a Dim (B4-Ab5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["ab/5"], duration: "h", midiValue: 80 } ] },

    // --- Chiave di Basso: Vari Intervalli ---
    { id: "tr-mel-maj3-C3", name: "Int Mel Basso: 3a M (C3-E3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ] },
    { id: "tr-mel-p5-F2", name: "Int Mel Basso: 5a G (F2-C3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "tr-mel-p4-G2", name: "Int Mel Basso: 4a G (G2-C3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "tr-mel-min3-D3", name: "Int Mel Basso: 3a m (D3-F3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "F", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ] },
    { id: "tr-mel-maj6-F2", name: "Int Mel Basso: 6a M (F2-D3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ] },
    { id: "tr-mel-min7-A2", name: "Int Mel Basso: 7a m (A2-G3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"2/4", repetitions: 3, notes: [ { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ] },


    // === Sezione 2: Intervalli Armonici (Suonare le 2 note insieme) ===
    // --- Chiave di Violino ---
    { id: "tr-arm-maj3-C4", name: "Int Arm: 3a M (C4-E4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "e/4"], duration: "w", midiValues: [60, 64] } ] },
    { id: "tr-arm-p5-C4", name: "Int Arm: 5a G (C4-G4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "g/4"], duration: "w", midiValues: [60, 67] } ] },
    { id: "tr-arm-min3-A4", name: "Int Arm: 3a m (A4-C5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["a/4", "c/5"], duration: "w", midiValues: [69, 72] } ] },
    { id: "tr-arm-p4-G4", name: "Int Arm: 4a G (G4-C5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "c/5"], duration: "w", midiValues: [67, 72] } ] },
    { id: "tr-arm-maj6-F4", name: "Int Arm: 6a M (F4-D5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/4", "d/5"], duration: "w", midiValues: [65, 74] } ] },
    { id: "tr-arm-min7-E4", name: "Int Arm: 7a m (E4-D5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["e/4", "d/5"], duration: "w", midiValues: [64, 74] } ] },
    { id: "tr-arm-maj7-F4", name: "Int Arm: 7a M (F4-E5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/4", "e/5"], duration: "w", midiValues: [65, 76] } ] },
    { id: "tr-arm-dim5-B4", name: "Int Arm: 5a Dim (B4-F5)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["b/4", "f/5"], duration: "w", midiValues: [71, 77] } ] }, // Tritono
    { id: "tr-arm-aug4-F4", name: "Int Arm: 4a Aum (F4-B4)", category: "teoria_riconoscimento", clef: "treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/4", "b/4"], duration: "w", midiValues: [65, 71] } ] }, // Tritono

    // --- Chiave di Basso ---
    { id: "tr-arm-maj6-C3", name: "Int Arm Basso: 6a M (C3-A3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/3", "a/3"], duration: "w", midiValues: [48, 57] } ] },
    { id: "tr-arm-p5-F2", name: "Int Arm Basso: 5a G (F2-C3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/2", "c/3"], duration: "w", midiValues: [41, 48] } ] },
    { id: "tr-arm-min3-G3", name: "Int Arm Basso: 3a m (G3-Bb3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "Bb", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/3", "bb/3"], duration: "w", midiValues: [55, 58] } ] },
    { id: "tr-arm-maj7-C3", name: "Int Arm Basso: 7a M (C3-B3)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/3", "b/3"], duration: "w", midiValues: [48, 59] } ] },
    { id: "tr-arm-min7-D3", name: "Int Arm Basso: 7a m (D3-C4)", category: "teoria_riconoscimento", clef: "bass", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["d/3", "c/4"], duration: "w", midiValues: [50, 60] } ] },


    // === Sezione 3: Triadi Fondamentali e Rivolti (Suonare le 3 note) ===
    // --- Maggiori ---
    { id: "tr-chord-Cmaj", name: "Triade: C Maggiore", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } ] },
    { id: "tr-chord-Cmaj-1inv", name: "Triade: C Magg (1° Riv)", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] } ] },
    { id: "tr-chord-Cmaj-2inv", name: "Triade: C Magg (2° Riv)", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "c/5", "e/5"], duration: "w", midiValues: [67, 72, 76] } ] },
    { id: "tr-chord-Gmaj", name: "Triade: G Maggiore", category: "teoria_riconoscimento", clef:"treble", keySignature: "G", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] } ] },
    { id: "tr-chord-Fmaj", name: "Triade: F Maggiore", category: "teoria_riconoscimento", clef:"treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] } ] },
    { id: "tr-chord-Bbmaj", name: "Triade: Bb Maggiore", category: "teoria_riconoscimento", clef:"treble", keySignature: "Bb", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["bb/3", "d/4", "f/4"], duration: "w", midiValues: [58, 62, 65] } ] },

    // --- Minori ---
    { id: "tr-chord-Amin", name: "Triade: A Minore", category: "teoria_riconoscimento", clef:"treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] } ] },
    { id: "tr-chord-Amin-1inv", name: "Triade: Am (1° Riv)", category: "teoria_riconoscimento", clef:"treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/5", "e/5", "a/5"], duration: "w", midiValues: [72, 76, 81] } ] },
    { id: "tr-chord-Amin-2inv", name: "Triade: Am (2° Riv)", category: "teoria_riconoscimento", clef:"treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["e/4", "a/4", "c/5"], duration: "w", midiValues: [64, 69, 72] } ] },
    { id: "tr-chord-Emin", name: "Triade: E Minore", category: "teoria_riconoscimento", clef:"treble", keySignature: "G", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] } ] },
    { id: "tr-chord-Dmin", name: "Triade: D Minore", category: "teoria_riconoscimento", clef:"treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] } ] },
    { id: "tr-chord-Gmin", name: "Triade: G Minore", category: "teoria_riconoscimento", clef:"treble", keySignature: "Bb", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "bb/4", "d/5"], duration: "w", midiValues: [67, 70, 74] } ] },

    // --- Diminuite e Aumentate ---
    { id: "tr-chord-Cdim", name: "Triade: C Diminuita", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "eb/4", "gb/4"], duration: "w", midiValues: [60, 63, 66] } ] },
    { id: "tr-chord-Bdim", name: "Triade: B Diminuita", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["b/4", "d/5", "f/5"], duration: "w", midiValues: [71, 74, 77] } ] },
    { id: "tr-chord-Fsharpdim", name: "Triade: F# Diminuita", category: "teoria_riconoscimento", clef:"treble", keySignature: "D", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f#/4", "a/4", "c/5"], duration: "w", midiValues: [66, 69, 72] } ] },
    { id: "tr-chord-Caug", name: "Triade: C Aumentata", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "e/4", "g#/4"], duration: "w", midiValues: [60, 64, 68] } ] },
    { id: "tr-chord-Gaug", name: "Triade: G Aumentata", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "b/4", "d#/5"], duration: "w", midiValues: [67, 71, 75] } ] },


    // === Sezione 4: Accordi di Settima Fondamentali (Suonare le 4 note) ===
    { id: "tr-chord-Cmaj7", name: "Accordo: Cmaj7", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] } ] },
    { id: "tr-chord-Fmaj7", name: "Accordo: Fmaj7", category: "teoria_riconoscimento", clef:"treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] } ] },
    { id: "tr-chord-G7", name: "Accordo: G7", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] } ] },
    { id: "tr-chord-C7", name: "Accordo: C7", category: "teoria_riconoscimento", clef:"treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] } ] },
    { id: "tr-chord-Am7", name: "Accordo: Am7", category: "teoria_riconoscimento", clef:"treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] } ] },
    { id: "tr-chord-Dm7", name: "Accordo: Dm7", category: "teoria_riconoscimento", clef:"treble", keySignature: "F", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] } ] },
    { id: "tr-chord-Em7", name: "Accordo: Em7", category: "teoria_riconoscimento", clef:"treble", keySignature: "G", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "w", midiValues: [64, 67, 71, 74] } ] },
    { id: "tr-chord-Bm7b5", name: "Accordo: Bm7(b5)", category: "teoria_riconoscimento", clef:"treble", keySignature: "Am", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["b/4", "d/5", "f/5", "a/5"], duration: "w", midiValues: [71, 74, 77, 81] } ] },
    { id: "tr-chord-Gdim7", name: "Accordo: Gdim7", category: "teoria_riconoscimento", clef:"treble", keySignature: "C", timeSignature:"1/4", repetitions: 3, notes: [ { keys: ["g/4", "bb/4", "db/5", "e/5"], duration: "w", midiValues: [67, 70, 73, 76] } ] }, // E è Fb


]; // Fine array teoriaRiconoscimentoExercises

// Rendi l'array accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.teoria_riconoscimento = teoriaRiconoscimentoExercises;

console.log("Dati Esercizi Teoria e Riconoscimento (Arricchiti) Caricati.");