/**
 * js/exercises/accordi_rivolti.js
 * Esercizi focalizzati sui rivolti di triadi e accordi di settima.
 * Ogni esercizio presenta l'accordo in chiave di violino e la fondamentale in chiave di basso.
 * Utilizza il layout Grand Staff.
 * **VERSIONE ORDINATA PER AVANZAMENTO SEQUENZIALE**
 *
 * Piano Future
 * Copyright (c) 2025 Lorenzetti Giuseppe
 * Licenza MIT: https://github.com/thc792/piano-tutor-extraime/blob/main/LICENSE
 */

// Verifica che window.exerciseData esista, altrimenti inizializzalo.
window.exerciseData = window.exerciseData || {};

// Array contenente le definizioni degli esercizi per i rivolti degli accordi.
const accordiRivoltiExercises = [

  // === Triadi Maggiori ===
  // --- Do Maggiore ---
  {
    id: "rivolti-seq-cmaj-root",
    name: "C Magg: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand', // Usa Grand Staff
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-cmaj-1st",
    name: "C Magg: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["e/4", "g/4", "c/5"], duration: "w", midiValues: [64, 67, 72] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-cmaj-2nd",
    name: "C Magg: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["g/4", "c/5", "e/5"], duration: "w", midiValues: [67, 72, 76] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },

  // --- Sol Maggiore ---
  {
    id: "rivolti-seq-gmaj-root",
    name: "G Magg: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },
  {
    id: "rivolti-seq-gmaj-1st",
    name: "G Magg: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["b/4", "d/5", "g/5"], duration: "w", midiValues: [71, 74, 79] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },
  {
    id: "rivolti-seq-gmaj-2nd",
    name: "G Magg: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["d/4", "g/4", "b/4"], duration: "w", midiValues: [62, 67, 71] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },

  // --- Fa Maggiore ---
  {
    id: "rivolti-seq-fmaj-root",
    name: "F Magg: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] } ],
    notesBass:   [ { keys: ["f/3"], duration: "w", midiValue: 53 } ] // Fondamentale F3
  },
  {
    id: "rivolti-seq-fmaj-1st",
    name: "F Magg: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["a/4", "c/5", "f/5"], duration: "w", midiValues: [69, 72, 77] } ],
    notesBass:   [ { keys: ["f/3"], duration: "w", midiValue: 53 } ] // Fondamentale F3
  },
  {
    id: "rivolti-seq-fmaj-2nd",
    name: "F Magg: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["c/4", "f/4", "a/4"], duration: "w", midiValues: [60, 65, 69] } ],
    notesBass:   [ { keys: ["f/3"], duration: "w", midiValue: 53 } ] // Fondamentale F3
  },

  // --- Re Maggiore ---
  {
    id: "rivolti-seq-dmaj-root",
    name: "D Magg: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "D",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["d/4", "f#/4", "a/4"], duration: "w", midiValues: [62, 66, 69] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },
  {
    id: "rivolti-seq-dmaj-1st",
    name: "D Magg: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "D",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["f#/4", "a/4", "d/5"], duration: "w", midiValues: [66, 69, 74] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },
  {
    id: "rivolti-seq-dmaj-2nd",
    name: "D Magg: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "D",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["a/4", "d/5", "f#/5"], duration: "w", midiValues: [69, 74, 78] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },

   // --- La Maggiore ---
  {
    id: "rivolti-seq-amaj-root",
    name: "A Magg: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "A",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["a/4", "c#/5", "e/5"], duration: "w", midiValues: [69, 73, 76] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },
  {
    id: "rivolti-seq-amaj-1st",
    name: "A Magg: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "A",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["c#/5", "e/5", "a/5"], duration: "w", midiValues: [73, 76, 81] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },
  {
    id: "rivolti-seq-amaj-2nd",
    name: "A Magg: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "A",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["e/4", "a/4", "c#/5"], duration: "w", midiValues: [64, 69, 73] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },

  // === Triadi Minori ===
  // --- La Minore ---
  {
    id: "rivolti-seq-amin-root",
    name: "Am: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C", // Relativa maggiore di Am
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },
  {
    id: "rivolti-seq-amin-1st",
    name: "Am: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["c/5", "e/5", "a/5"], duration: "w", midiValues: [72, 76, 81] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },
  {
    id: "rivolti-seq-amin-2nd",
    name: "Am: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["e/4", "a/4", "c/5"], duration: "w", midiValues: [64, 69, 72] } ],
    notesBass:   [ { keys: ["a/3"], duration: "w", midiValue: 57 } ] // Fondamentale A3
  },

  // --- Re Minore ---
  {
    id: "rivolti-seq-dmin-root",
    name: "Dm: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F", // Relativa maggiore di Dm
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["d/4", "f/4", "a/4"], duration: "w", midiValues: [62, 65, 69] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },
  {
    id: "rivolti-seq-dmin-1st",
    name: "Dm: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["f/4", "a/4", "d/5"], duration: "w", midiValues: [65, 69, 74] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },
  {
    id: "rivolti-seq-dmin-2nd",
    name: "Dm: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["a/4", "d/5", "f/5"], duration: "w", midiValues: [69, 74, 77] } ],
    notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
  },

  // --- Mi Minore ---
  {
    id: "rivolti-seq-emin-root",
    name: "Em: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G", // Relativa maggiore di Em
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["e/4", "g/4", "b/4"], duration: "w", midiValues: [64, 67, 71] } ],
    notesBass:   [ { keys: ["e/3"], duration: "w", midiValue: 52 } ] // Fondamentale E3
  },
  {
    id: "rivolti-seq-emin-1st",
    name: "Em: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["g/4", "b/4", "e/5"], duration: "w", midiValues: [67, 71, 76] } ],
    notesBass:   [ { keys: ["e/3"], duration: "w", midiValue: 52 } ] // Fondamentale E3
  },
  {
    id: "rivolti-seq-emin-2nd",
    name: "Em: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "G",
    timeSignature: "4/4",
    repetitions: 5,
    notesTreble: [ { keys: ["b/3", "e/4", "g/4"], duration: "w", midiValues: [59, 64, 67] } ],
    notesBass:   [ { keys: ["e/3"], duration: "w", midiValue: 52 } ] // Fondamentale E3
  },

  // === Accordi di Settima Dominante (G7) ===
  {
    id: "rivolti-seq-g7-root",
    name: "G7: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C", // G7 è V7 di C
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },
  {
    id: "rivolti-seq-g7-1st",
    name: "G7: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["b/4", "d/5", "f/5", "g/5"], duration: "w", midiValues: [71, 74, 77, 79] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },
  {
    id: "rivolti-seq-g7-2nd",
    name: "G7: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["d/4", "f/4", "g/4", "b/4"], duration: "w", midiValues: [62, 65, 67, 71] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },
  {
    id: "rivolti-seq-g7-3rd",
    name: "G7: 3° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["f/4", "g/4", "b/4", "d/5"], duration: "w", midiValues: [65, 67, 71, 74] } ],
    notesBass:   [ { keys: ["g/3"], duration: "w", midiValue: 55 } ] // Fondamentale G3
  },

  // === Accordi di Settima Dominante (C7) ===
  {
    id: "rivolti-seq-c7-root",
    name: "C7: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F", // C7 è V7 di F
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-c7-1st",
    name: "C7: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["e/4", "g/4", "bb/4", "c/5"], duration: "w", midiValues: [64, 67, 70, 72] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-c7-2nd",
    name: "C7: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["g/4", "bb/4", "c/5", "e/5"], duration: "w", midiValues: [67, 70, 72, 76] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-c7-3rd",
    name: "C7: 3° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "F",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["bb/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [58, 60, 64, 67] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },

   // === Accordi di Settima Maggiore (Cmaj7) ===
  {
    id: "rivolti-seq-cmaj7-root",
    name: "Cmaj7: Fondamentale",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-cmaj7-1st",
    name: "Cmaj7: 1° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["e/4", "g/4", "b/4", "c/5"], duration: "w", midiValues: [64, 67, 71, 72] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-cmaj7-2nd",
    name: "Cmaj7: 2° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["g/4", "b/4", "c/5", "e/5"], duration: "w", midiValues: [67, 71, 72, 76] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },
  {
    id: "rivolti-seq-cmaj7-3rd",
    name: "Cmaj7: 3° Rivolto",
    category: "accordi_rivolti",
    staveLayout: 'grand',
    keySignature: "C",
    timeSignature: "4/4",
    repetitions: 4,
    notesTreble: [ { keys: ["b/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [71, 72, 76, 79] } ],
    notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
  },

  // === Accordi di Settima Minore (Dm7) ===
   {
     id: "rivolti-seq-dm7-root",
     name: "Dm7: Fondamentale",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "F", // Relativa maggiore di Dm
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] } ],
     notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
   },
   {
     id: "rivolti-seq-dm7-1st",
     name: "Dm7: 1° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "F",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["f/4", "a/4", "c/5", "d/5"], duration: "w", midiValues: [65, 69, 72, 74] } ],
     notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
   },
   {
     id: "rivolti-seq-dm7-2nd",
     name: "Dm7: 2° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "F",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["a/4", "c/5", "d/5", "f/5"], duration: "w", midiValues: [69, 72, 74, 77] } ],
     notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
   },
   {
     id: "rivolti-seq-dm7-3rd",
     name: "Dm7: 3° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "F",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["c/4", "d/4", "f/4", "a/4"], duration: "w", midiValues: [60, 62, 65, 69] } ],
     notesBass:   [ { keys: ["d/3"], duration: "w", midiValue: 50 } ] // Fondamentale D3
   },

  // === Accordi Diminuiti (Cdim7) ===
   {
     id: "rivolti-seq-cdim7-root",
     name: "Cdim7: Fondamentale",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "C", // Convenzionale
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["c/4", "eb/4", "gb/4", "a/4"], duration: "w", midiValues: [60, 63, 66, 69] } ], // Usato A naturale (enh. Bbb)
     notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
   },
   {
     id: "rivolti-seq-cdim7-1st",
     name: "Cdim7: 1° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "C",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["eb/4", "gb/4", "a/4", "c/5"], duration: "w", midiValues: [63, 66, 69, 72] } ],
     notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
   },
   {
     id: "rivolti-seq-cdim7-2nd",
     name: "Cdim7: 2° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "C",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["gb/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [66, 69, 72, 75] } ],
     notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
   },
   {
     id: "rivolti-seq-cdim7-3rd",
     name: "Cdim7: 3° Rivolto",
     category: "accordi_rivolti",
     staveLayout: 'grand',
     keySignature: "C",
     timeSignature: "4/4",
     repetitions: 4,
     notesTreble: [ { keys: ["a/3", "c/4", "eb/4", "gb/4"], duration: "w", midiValues: [57, 60, 63, 66] } ],
     notesBass:   [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] // Fondamentale C3
   },

]; // Fine array accordiRivoltiExercises

// Rendi l'array accessibile globalmente sotto la chiave corretta.
window.exerciseData.accordi_rivolti = accordiRivoltiExercises;

// Log per conferma caricamento (visibile nella console del browser)
console.log(`[accordi_rivolti.js] Dati Esercizi Rivolti Accordi (Grand Staff, ${accordiRivoltiExercises.length} esercizi) caricati in window.exerciseData.accordi_rivolti.`);