/**
 * js/exercises/beyer101liv2.js
 * Contiene dati per esercizi dal Beyer Op. 101, Livello 2.
 * Il primo esercizio è basato sul N.32, esteso a 24 battute.
 */

const beyerOp101Liv2Exercises = [
    {
        id: "beyer-op101-n32-liv2_ex1", // Identificatore per il primo esercizio del livello 2
        name: "Beyer Op. 101 N.32 (Liv.2 Esteso a 24 battute)",
        category: "beyer_op101_liv2", // Categoria per i selettori
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3, // Numero di volte che l'intero esercizio di 24 battute viene ripetuto
        notesTreble: [
            // Battuta 1
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 2
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Battuta 3
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 4
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 6
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 8
            { keys: ["d/4"], duration: "h", midiValue: 62 },

            // Battuta 9 (originale N.32, seconda parte)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 10
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Battuta 11
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 12
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 14
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 15
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 17 (ripetizione della battuta 1 originale)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 18 (ripetizione della battuta 2 originale)
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            // Battuta 19 (ripetizione della battuta 3 originale)
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 20 (ripetizione della battuta 4 originale)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 21 (ripetizione della battuta 5 originale)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 22 (ripetizione della battuta 6 originale)
            { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
            // Battuta 23 (ripetizione della battuta 7 originale)
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            // Battuta 24 (ripetizione della battuta 8 originale)
            { keys: ["d/4"], duration: "h", midiValue: 62 },
        ],
        notesBass: [
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 8
            { keys: ["g/2"], duration: "h", midiValue: 43 },

            // Battuta 9 (originale N.32, seconda parte)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 17 (ripetizione della battuta 1 originale)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 18 (ripetizione della battuta 2 originale)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 19 (ripetizione della battuta 3 originale)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 20 (ripetizione della battuta 4 originale)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 21 (ripetizione della battuta 5 originale)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 22 (ripetizione della battuta 6 originale)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 23 (ripetizione della battuta 7 originale)
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 24 (ripetizione della battuta 8 originale)
            { keys: ["g/2"], duration: "h", midiValue: 43 },
        ]
    },
    {
    id: "beyer-op101-n33-liv2_ex2", // Identificatore per il secondo esercizio del livello 2
    name: "Beyer Op. 101 N.33 (Liv.2 Esteso a 24 battute)",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1 (N.33 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 2
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 3
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 4
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 5
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 6
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 7
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 8
        { keys: ["b/3"], duration: "h", midiValue: 59 },

        // Battuta 9 (N.33 originale, seconda parte)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 10
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 11
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 12
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 13
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 14
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 15
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 16
        { keys: ["c/4"], duration: "h", midiValue: 60 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["b/3"], duration: "h", midiValue: 59 },
    ],
    notesBass: [
        // Battuta 1 (N.33 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 4
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9 (N.33 originale, seconda parte)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 12
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 14
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["g/2"], duration: "h", midiValue: 43 },
    ]
},
 {
    id: "beyer-op101-n34-liv2_ex3", // Identificatore per il terzo esercizio del livello 2
    name: "Beyer Op. 101 N.34 (Liv.2 Esteso a 24 battute)",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1 (N.34 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 2
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 3
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 4
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 5
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 6
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 7
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 8
        { keys: ["d/4"], duration: "h", midiValue: 62 },

        // Battuta 9 (N.34 originale, seconda parte)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 10
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 11
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 12
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 13
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 14
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 15
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 16
        { keys: ["e/4"], duration: "h", midiValue: 64 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["d/4"], duration: "h", midiValue: 62 },
    ],
    notesBass: [
        // Battuta 1 (N.34 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 4
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 5
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 6
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9 (N.34 originale, seconda parte)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 12
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 13
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 14
        { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 15
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["g/2"], duration: "h", midiValue: 43 },
    ]
},   
{
    id: "beyer-op101-n35-liv2_ex4", // Identificatore per il quarto esercizio del livello 2
    name: "Beyer Op. 101 N.35 (Liv.2 Esteso a 24 battute)",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1 (N.35 originale)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 2
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 3
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 4
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 5
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 6
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 7
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 8
        { keys: ["d/4"], duration: "h", midiValue: 62 },

        // Battuta 9 (N.35 originale, seconda parte)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 10
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 11
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 12
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 13
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 14
        { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 15
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 16
        { keys: ["e/4"], duration: "h", midiValue: 64 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["d/4"], duration: "h", midiValue: 62 },
    ],
    notesBass: [
        // Battuta 1 (N.35 originale)
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 2
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 4
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 5
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 6
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9 (N.35 originale, seconda parte)
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 10
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 12
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 13
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 14
        { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 15
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["g/2"], duration: "h", midiValue: 43 },
    ]
},
{
    id: "beyer-op101-n38-liv2_ex5", // Identificatore per il quinto esercizio del livello 2
    name: "Beyer Op. 101 N.38 (Liv.2 Esteso a 24 battute)",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1 (N.38 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 2
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 3
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 4
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 5
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 6
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 7
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 8
        { keys: ["d/4"], duration: "h", midiValue: 62 },

        // Battuta 9 (N.38 originale, seconda parte)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 10
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 11
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 12
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 13
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 14
        { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 15
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 16
        { keys: ["c/4"], duration: "h", midiValue: 60 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["d/4"], duration: "h", midiValue: 62 },
    ],
    notesBass: [
        // Battuta 1 (N.38 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 2
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 4
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9 (N.38 originale, seconda parte)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 10
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 12
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 14
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 },

        // Battuta 17 (ripetizione della battuta 1 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 18 (ripetizione della battuta 2 originale)
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 19 (ripetizione della battuta 3 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 20 (ripetizione della battuta 4 originale)
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 21 (ripetizione della battuta 5 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 22 (ripetizione della battuta 6 originale)
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 23 (ripetizione della battuta 7 originale)
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 24 (ripetizione della battuta 8 originale)
        { keys: ["g/2"], duration: "h", midiValue: 43 },
    ]
},
{
    id: "beyer-op101-n39-liv2_ex6", // Identificatore per il sesto esercizio del livello 2
    name: "Beyer Op. 101 N.39",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3, // Puoi aggiustare le ripetizioni se necessario
    notesTreble: [
        // Battuta 1
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 2
        { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] }, { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] },
        // Battuta 3
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 4
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 5
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
        // Battuta 6
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 7
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
        // Battuta 8
        { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65] },

        // Battuta 9
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 10
        { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] }, { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] },
        // Battuta 11
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 12
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 13
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 14
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["a/3", "c/4"], duration: "q", midiValues: [57, 60] },
        // Battuta 15
        { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] }, { keys: ["g/3", "b/3"], duration: "q", midiValues: [55, 59] },
        // Battuta 16
        { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] } // L'originale ha c/4 e/4, ma c/4 da solo suona meglio come risoluzione con il basso. Ho mantenuto c/4 e/4 per fedeltà.
                                                                    // Se preferisci solo c/4, fammelo sapere: { keys: ["c/4"], duration: "h", midiValue: 60 }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 4
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 12
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 13
        { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 14
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 15
        { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n41-liv2_ex8",
    name: "Beyer Op. 101 N.41",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 2
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 3
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 4
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 5
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 6
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 7
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 8
        { keys: ["d/4"], duration: "h", midiValue: 62 },

        // Battuta 9
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 10
        { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 11
        { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 12
        { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 13
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 14
        { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 15
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
        // Battuta 16
        { keys: ["c/4"], duration: "h", midiValue: 60 }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 4
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 6
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 7
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 11
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 12
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 14
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
 {
    id: "beyer-op101-n46-liv2_ex10",
    name: "Beyer Op. 101 N.46",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
        // Battuta 2
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["r/4"], duration: "8" }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
        // Battuta 3
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
        // Battuta 4
        { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] },
        // Battuta 5
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 6
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] },
        // Battuta 7
        { keys: ["g/4", "b/4"], duration: "q", midiValues: [67, 71] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 8
        { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65] },

        // Battuta 9
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["r/4"], duration: "8" }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
        // Battuta 10
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["r/4"], duration: "8" }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
        // Battuta 11
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["r/4"], duration: "8" }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
        // Battuta 12
        { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] },
        // Battuta 13
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["a/3", "c/4"], duration: "q", midiValues: [57, 60] },
        // Battuta 14
        { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] }, { keys: ["g/3", "b/3"], duration: "q", midiValues: [55, 59] },
        // Battuta 15
        { keys: ["a/3", "c/4"], duration: "q", midiValues: [57, 60] }, { keys: ["f/3", "a/3"], duration: "q", midiValues: [53, 57] },
        // Battuta 16
        { keys: ["g/3", "c/4"], duration: "h", midiValues: [55, 60] } // Originale g/3 e c/4
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["r/4"], duration: "8" }, { keys: ["c/3", "e/3"], duration: "8", midiValues: [48, 52] },
        // Battuta 2
        { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2", "d/3"], duration: "8", midiValues: [47, 50] },
        // Battuta 3
        { keys: ["a/2", "c/3"], duration: "q", midiValues: [45, 48] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2", "c/3"], duration: "8", midiValues: [45, 48] },
        // Battuta 4
        { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2", "b/2"], duration: "8", midiValues: [43, 47] },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, // Singole note nel basso qui
        // Battuta 6
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 7
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["r/4"], duration: "8" }, { keys: ["c/3", "e/3"], duration: "8", midiValues: [48, 52] },
        // Battuta 10
        { keys: ["b/2", "d/3"], duration: "q", midiValues: [47, 50] }, { keys: ["r/4"], duration: "8" }, { keys: ["b/2", "d/3"], duration: "8", midiValues: [47, 50] },
        // Battuta 11
        { keys: ["a/2", "c/3"], duration: "q", midiValues: [45, 48] }, { keys: ["r/4"], duration: "8" }, { keys: ["a/2", "c/3"], duration: "8", midiValues: [45, 48] },
        // Battuta 12
        { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["r/4"], duration: "8" }, { keys: ["g/2", "b/2"], duration: "8", midiValues: [43, 47] },
        // Battuta 13
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, // Singole note
        // Battuta 14
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 15
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n47-liv2_ex11",
    name: "Beyer Op. 101 N.47",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
        // Battuta 2
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 3
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        // Battuta 4
        { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 5
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
        // Battuta 6
        { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 7
        { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
        // Battuta 8
        { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
        // Battuta 10
        { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 11
        { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
        // Battuta 12
        { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 13
        { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
        // Battuta 14
        { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 15
        { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
        // Battuta 16
        { keys: ["c/4"], duration: "h", midiValue: 60 }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 3
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 4
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 7
        { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 8
        { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 11
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 12
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 14
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 15
        { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n48-liv2_ex12",
    name: "Beyer Op. 101 N.48",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 2
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 3
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 4
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
        // Battuta 5
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 6
        { keys: ["f/4", "a/4"], duration: "q", midiValues: [65, 69] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 7
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
        // Battuta 8
        { keys: ["d/4", "f/4"], duration: "h", midiValues: [62, 65] },

        // Battuta 9
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 10
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 11
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
        // Battuta 12
        { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
        // Battuta 13
        { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 14
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["a/3", "c/4"], duration: "q", midiValues: [57, 60] },
        // Battuta 15
        { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] }, { keys: ["g/3", "b/3"], duration: "q", midiValues: [55, 59] },
        // Battuta 16
        { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 2
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 4
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 5
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 8
        { keys: ["g/2"], duration: "h", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 10
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 12
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 13
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 14
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 15
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n49-liv2_ex13",
    name: "Beyer Op. 101 N.49",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 2
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 3
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 4
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 5
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 6
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 7
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 8
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, // Originale c/5

        // Battuta 9
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 10
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 11
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 12
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 13
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 14
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 15
        { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 16
        { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "q", midiValue: 55 } // Originale g/3
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 2
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 4
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 5
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 6
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 7
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 8
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 10
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 12
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 13
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 14
        { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n50-liv2_ex14",
    name: "Beyer Op. 101 N.50",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Battuta 2
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 3
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Battuta 4
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 5
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 6
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 7
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 8
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Originale c/4

        // Battuta 9
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Battuta 10
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 11
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
        // Battuta 12
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 13
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 14
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 15
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 },
        // Battuta 16
        { keys: ["e/3"], duration: "16", midiValue: 52 }, { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "q", midiValue: 48 } // Originale c/3
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 2
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 4
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 6
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 8
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 10
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 12
        { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 14
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 15
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
        // Battuta 16
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 }
    ]
},
{
    id: "beyer-op101-n51-liv2_ex15",
    name: "Beyer Op. 101 N.51",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 2
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 3
        { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 4
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 5
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 6
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 7
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 8
        { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },

        // Battuta 9
        { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 10
        { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
        // Battuta 11
        { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 12
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "q", midiValue: 65 },
        // Battuta 13
        { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
        // Battuta 14
        { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
        // Battuta 15
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
        // Battuta 16
        { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["e/3"], duration: "16", midiValue: 52 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["c/4"], duration: "q", midiValue: 60 } // Originale c/4
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 2
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 4
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 6
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 7
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 8
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 10
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 12
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 14
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 16
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n53-liv2_ex17",
    name: "Beyer Op. 101 N.53",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 },
        // Battuta 2
        { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
        // Battuta 3
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 },
        // Battuta 4
        { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 },
        // Battuta 5
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "q", midiValue: 76 },
        // Battuta 6
        { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 7
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 },
        // Battuta 8
        { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 },
        // Battuta 10
        { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
        // Battuta 11
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["c/4"], duration: "16", midiValue: 60 },
        // Battuta 12
        { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["b/3"], duration: "16", midiValue: 59 },
        // Battuta 13
        { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
        // Battuta 14
        { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
        // Battuta 15
        { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
        // Battuta 16
        { keys: ["c/3"], duration: "h", midiValue: 48 } // Originale c/3, ma per coerenza con la melodia, c/4 (60) potrebbe essere considerato. Ho usato c/3.
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 2
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 4
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 6
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
        // Battuta 7
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 8
        { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 10
        { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 12
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 14
        { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 15
        { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
{
    id: "beyer-op101-n54-liv2_ex18",
    name: "Beyer Op. 101 N.54",
    category: "beyer_op101_liv2",
    staveLayout: "grand",
    keySignature: "C",
    timeSignature: "2/4",
    repetitions: 3,
    notesTreble: [
        // Battuta 1
        { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] },
        // Battuta 2
        { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["a/4", "c/5"], duration: "q", midiValues: [69, 72] },
        // Battuta 3
        { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
        // Battuta 4
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 5
        { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] },
        // Battuta 6
        { keys: ["g/4", "b/4"], duration: "q", midiValues: [67, 71] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 7
        { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["a/3", "c/4"], duration: "8", midiValues: [57, 60] },
        // Battuta 8
        { keys: ["g/3", "b/3"], duration: "q", midiValues: [55, 59] }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] },
        // Battuta 10
        { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["a/4", "c/5"], duration: "q", midiValues: [69, 72] },
        // Battuta 11
        { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
        // Battuta 12
        { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "q", midiValues: [59, 62] },
        // Battuta 13
        { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] },
        // Battuta 14
        { keys: ["g/4", "b/4"], duration: "q", midiValues: [67, 71] }, { keys: ["e/4", "g/4"], duration: "q", midiValues: [64, 67] },
        // Battuta 15
        { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["a/3", "c/4"], duration: "8", midiValues: [57, 60] },
        // Battuta 16
        { keys: ["g/3", "c/4"], duration: "h", midiValues: [55, 60] } // Originale g/3 e c/4
    ],
    notesBass: [
        // Battuta 1
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 2
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 3
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 4
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 5
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 6
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 7
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 8
        { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["r/4"], duration: "q" },

        // Battuta 9
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 10
        { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 11
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 12
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
        // Battuta 13
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
        // Battuta 14
        { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
        // Battuta 15
        { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
        // Battuta 16
        { keys: ["c/2"], duration: "h", midiValue: 36 }
    ]
},
 {
        id: "beyer-op101-n55-liv2_ex19",
        name: "Beyer Op. 101 N.55",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.55
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            // Battuta 3
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            // Battuta 4
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 6
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 8
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["e/4"], duration: "q", midiValue: 64 },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            // Battuta 12
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            // Battuta 13
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 14
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            // Battuta 15
            { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["b/2"], duration: "8", midiValue: 47 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 } // Originale c/3
        ],
        notesBass: [
            // N.55
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 8
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 13
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n56-liv2_ex20",
        name: "Beyer Op. 101 N.56",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.56
            // Battuta 1
            { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 2
            { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
            // Battuta 3
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] },
            // Battuta 4
            { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["g/4", "b/4"], duration: "q", midiValues: [67, 71] },
            // Battuta 5
            { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
            // Battuta 7
            { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["a/3", "c/4"], duration: "8", midiValues: [57, 60] }, { keys: ["g/3", "b/3"], duration: "8", midiValues: [55, 59] }, { keys: ["f/3", "a/3"], duration: "8", midiValues: [53, 57] },
            // Battuta 8
            { keys: ["e/3", "g/3"], duration: "q", midiValues: [52, 55] }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 10
            { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] },
            // Battuta 11
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] },
            // Battuta 12
            { keys: ["b/4", "d/5"], duration: "q", midiValues: [71, 74] }, { keys: ["g/4", "b/4"], duration: "q", midiValues: [67, 71] },
            // Battuta 13
            { keys: ["a/4", "c/5"], duration: "8", midiValues: [69, 72] }, { keys: ["g/4", "b/4"], duration: "8", midiValues: [67, 71] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
            // Battuta 14
            { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["c/4", "e/4"], duration: "q", midiValues: [60, 64] },
            // Battuta 15
            { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
            // Battuta 16
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] } // Originale c/4 e/4
        ],
        notesBass: [
            // N.56
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 5
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n57-liv2_ex21",
        name: "Beyer Op. 101 N.57",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.57
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 6
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 7
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 8
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 10
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            // Battuta 14
            { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            // Battuta 15
            { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            // Battuta 16
            { keys: ["e/3"], duration: "h", midiValue: 52 } // Originale e/3
        ],
        notesBass: [
            // N.57
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
  
     {
        id: "beyer-op101-n58-liv2_ex22",
        name: "Beyer Op. 101 N.58",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.58
            // Battuta 1
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 2
            { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] },
            // Battuta 3
            { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 4
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
            // Battuta 5
            { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] },
            // Battuta 6
            { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["f/4", "a/4"], duration: "8", midiValues: [65, 69] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 7
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
            // Battuta 8
            { keys: ["d/4", "f/4"], duration: "q", midiValues: [62, 65] }, { keys: ["r/4"], duration: "q" }, // Originale (d/4 f/4) semiminima

            // Battuta 9
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 10
            { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] },
            // Battuta 11
            { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] },
            // Battuta 12
            { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["e/4", "g/4"], duration: "8", midiValues: [64, 67] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
            // Battuta 13
            { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["d/4", "f/4"], duration: "8", midiValues: [62, 65] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] }, { keys: ["c/4", "e/4"], duration: "8", midiValues: [60, 64] },
            // Battuta 14
            { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["b/3", "d/4"], duration: "8", midiValues: [59, 62] }, { keys: ["a/3", "c/4"], duration: "8", midiValues: [57, 60] }, { keys: ["a/3", "c/4"], duration: "8", midiValues: [57, 60] },
            // Battuta 15
            { keys: ["g/3", "b/3"], duration: "8", midiValues: [55, 59] }, { keys: ["g/3", "b/3"], duration: "8", midiValues: [55, 59] }, { keys: ["f/3", "a/3"], duration: "8", midiValues: [53, 57] }, { keys: ["f/3", "a/3"], duration: "8", midiValues: [53, 57] },
            // Battuta 16
            { keys: ["c/4", "e/4"], duration: "h", midiValues: [60, 64] }
        ],
        notesBass: [
            // N.58
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 5
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["g/2"], duration: "h", midiValue: 43 }, // Originale G2 semiminima

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 12
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 13
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 14
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n59-liv2_ex23",
        name: "Beyer Op. 101 N.59",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.59
            // Battuta 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 15
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 } // Originale C3
        ],
        notesBass: [
            // N.59
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n60-liv2_ex24",
        name: "Beyer Op. 101 N.60 (Senza abbellimenti)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.60 (Grace notes omitted for simplicity)
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 3
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 4
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 8
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
            // Battuta 14
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 },
            // Battuta 15
            { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            // Battuta 16
            { keys: ["g/3"], duration: "h", midiValue: 55 }
        ],
        notesBass: [
            // N.60
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/2"], duration: "8", midiValue: 38 }, { keys: ["g/1"], duration: "8", midiValue: 31 }, { keys: ["b/1"], duration: "8", midiValue: 35 }, // G, D, G,, B,,
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
{
        id: "beyer-op101-n61-liv2_ex25",
        name: "Beyer Op. 101 N.61",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.61
            // Battuta 1
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 2
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 6
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 7
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 8
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 10
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 12
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 15
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.61
            // Battuta 1
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 2
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 3
            { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] },
            // Battuta 4
            { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] },
            // Battuta 5
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 6
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 7
            { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["f/2", "a/2"], duration: "q", midiValues: [41, 45] },
            // Battuta 8
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 10
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 11
            { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] },
            // Battuta 12
            { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] }, { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] },
            // Battuta 13
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] },
            // Battuta 14
            { keys: ["f/2", "a/2"], duration: "q", midiValues: [41, 45] }, { keys: ["d/3", "f/3"], duration: "q", midiValues: [50, 53] },
            // Battuta 15
            { keys: ["c/3", "e/3"], duration: "q", midiValues: [48, 52] }, { keys: ["g/2", "b/2"], duration: "q", midiValues: [43, 47] },
            // Battuta 16
            { keys: ["c/2", "c/3"], duration: "h", midiValues: [36, 48] } // Originale C2 e C3
        ]
    },
    {
        id: "beyer-op101-n62-liv2_ex26",
        name: "Beyer Op. 101 N.62",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.62
            // Battuta 1
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 3
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 4
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 6
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 7
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 8
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 10
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 11
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 12
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 13
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 15
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 16
            { keys: ["e/4"], duration: "h", midiValue: 64 }
        ],
        notesBass: [
            // N.62
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 2
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 7
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 14
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n63-liv2_ex27",
        name: "Beyer Op. 101 N.63 (con 8va)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.63
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
            // Battuta 3
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 5
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 7
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            // Battuta 8
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9 (8va starts here in original)
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["c/6"], duration: "8", midiValue: 84 },
            // Battuta 10
            { keys: ["e/6"], duration: "8", midiValue: 88 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["b/5"], duration: "8", midiValue: 83 },
            // Battuta 11
            { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 12 (loco in original, so back to normal octave)
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 13
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 14
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 15
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
            // Battuta 16
            { keys: ["e/3"], duration: "h", midiValue: 52 }
        ],
        notesBass: [
            // N.63
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 6
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 14
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
 {
        id: "beyer-op101-n64-liv2_ex28",
        name: "Beyer Op. 101 N.64 (Grand Exercise - G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "G", // Sol Maggiore
        timeSignature: "2/4",
        repetitions: 2, // L'originale ha molte ripetizioni interne, qui l'intero pezzo è ripetibile
        notesTreble: [
            // N.64 - 32 battute
            // Parte A (prime 8 battute)
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "h", midiValue: 62 },
            // Parte B (successive 8 battute)
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // Originale c/4
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
            { keys: ["c/4"], duration: "h", midiValue: 60 }, // Originale c/4
            // Parte C (ultime 16 battute)
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["b/4"], duration: "q", midiValue: 71 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
            { keys: ["b/3"], duration: "h", midiValue: 59 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["a/4"], duration: "q", midiValue: 69 },
            { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
            { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f#/4"], duration: "q", midiValue: 66 },
            { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
            { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/3"], duration: "q", midiValue: 59 },
            { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["g/3"], duration: "h", midiValue: 55 }
        ],
        notesBass: [
            // N.64
            // Parte A
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["g/2"], duration: "h", midiValue: 43 },
            // Parte B
            { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["a/3"], duration: "q", midiValue: 57 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["a/2"], duration: "h", midiValue: 45 },
            // Parte C
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f#/3"], duration: "q", midiValue: 54 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f#/2"], duration: "q", midiValue: 42 },
            { keys: ["g/2"], duration: "h", midiValue: 43 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["f#/2"], duration: "q", midiValue: 42 },
            { keys: ["g/2"], duration: "h", midiValue: 43 }
        ]
    },
    {
        id: "beyer-op101-n65-liv2_ex29",
        name: "Beyer Op. 101 N.65",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.65
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 4
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 6
            { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 10
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 12
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 14
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 15
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.65
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n66-liv2_ex30",
        name: "Beyer Op. 101 N.66 (Terzine - Richiede update renderer)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.66 - NOTE: Le durate "8" qui sotto per le terzine sono indicative.
            // Per il corretto timing e visualizzazione, il renderer necessita di un update
            // per gestire le terzine (es. durata "8t" e oggetto Tuplet).
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // Triplet 1
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Triplet 2
            // Battuta 2
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Triplet 1
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, // Triplet 2
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Triplet 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, // Triplet 2
            // Battuta 4
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Triplet 1
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, // Triplet 2
            // Battuta 5
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, // Triplet 1
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Triplet 2
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // Triplet 1
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, // Triplet 2
            // Battuta 7
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, // Triplet 1
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, // Triplet 2
            // Battuta 8
            { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, // Triplet 1
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Triplet 2
            // Battuta 10
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, // Triplet 1
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, // Triplet 2
            // Battuta 11
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, // Triplet 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, // Triplet 2
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, // Triplet 1
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, // Triplet 2
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, // Triplet 1
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, // Triplet 2
            // Battuta 14
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, // Triplet 1
            { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, // Triplet 2
            // Battuta 15
            { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, // Triplet 1
            { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, // Triplet 2
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.66
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 3
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 5
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 7
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 11
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
 {
        id: "beyer-op101-n67-liv2_ex31",
        name: "Beyer Op. 101 N.67",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.67
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["g/4", "b/4", "e/5"], duration: "q", midiValues: [67, 71, 76] }, { keys: ["g/4", "b/4", "e/5"], duration: "q", midiValues: [67, 71, 76] },
            // Battuta 6
            { keys: ["a/4", "c/5", "f/5"], duration: "q", midiValues: [69, 72, 77] }, { keys: ["a/4", "c/5", "f/5"], duration: "q", midiValues: [69, 72, 77] },
            // Battuta 7
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 8
            { keys: ["d/4", "f/4", "a/4"], duration: "h", midiValues: [62, 65, 69] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 10
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 11
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 13
            { keys: ["e/4", "g/4", "b/4"], duration: "q", midiValues: [64, 67, 71] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 14
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["b/3", "d/4", "f/4"], duration: "q", midiValues: [59, 62, 65] },
            // Battuta 15
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.67
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 8
            { keys: ["g/2"], duration: "h", midiValue: 43 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n68-liv2_ex32",
        name: "Beyer Op. 101 N.68",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.68
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.68
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n69-liv2_ex33",
        name: "Beyer Op. 101 N.69",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.69
            // Battuta 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 3
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 4
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] },
            // Battuta 7
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["f/3", "a/3", "c/4"], duration: "q", midiValues: [53, 57, 60] },
            // Battuta 8
            { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 10
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] },
            // Battuta 15
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.69
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n70-liv2_ex34",
        name: "Beyer Op. 101 N.70 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.70
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section - keySignature in VexFlow will still be C, accidentals handle G Maj feel)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] } // G Major chord
        ],
        notesBass: [
            // N.70
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Basso B1
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, // G1
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 }, // B1
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, // A1
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 }, // G1
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 } // G1
        ]
    },
    {
        id: "beyer-op101-n71-liv2_ex35",
        name: "Beyer Op. 101 N.71 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.71
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section - keySignature in VexFlow will still be C, accidentals handle F Maj feel)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] } // F Major chord
        ],
        notesBass: [
            // N.71
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 }, // Bb1, A1
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 }, // G1, F1
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 } // F1
        ]
    },
{
        id: "beyer-op101-n72-liv2_ex36",
        name: "Beyer Op. 101 N.72 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.72
            // Battuta 1 (C Major)
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 2
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 3
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 4
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 5
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
            // Battuta 6
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 7
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9 (G Major section)
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 10
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 11
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 12
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 13
            { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f#/5"], duration: "8", midiValue: 78 },
            // Battuta 14
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f#/4"], duration: "8", midiValue: 66 },
            // Battuta 15
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
            // Battuta 16
            { keys: ["g/3"], duration: "h", midiValue: 55 } // G Major
        ],
        notesBass: [
            // N.72
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["f#/2"], duration: "q", midiValue: 42 }, { keys: ["f#/2"], duration: "q", midiValue: 42 },
            // Battuta 15
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 } // G Major
        ]
    },
    {
        id: "beyer-op101-n73-liv2_ex37",
        name: "Beyer Op. 101 N.73 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.73
            // Battuta 1 (C Major)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9 (F Major section)
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 10
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 11
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 12
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 13
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 14
            { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 15
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 16
            { keys: ["f/3"], duration: "h", midiValue: 53 } // F Major
        ],
        notesBass: [
            // N.73
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, // Bb1
            // Battuta 15
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 } // F1
        ]
    },
    {
        id: "beyer-op101-n74-liv2_ex38",
        name: "Beyer Op. 101 N.74",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.74
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 2
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 3
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 4
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 5
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["b/5"], duration: "16", midiValue: 83 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["b/4"], duration: "16", midiValue: 71 },
            // Battuta 6
            { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["c/6"], duration: "16", midiValue: 84 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 7
            { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["b/5"], duration: "16", midiValue: 83 }, { keys: ["d/6"], duration: "16", midiValue: 86 }, { keys: ["b/5"], duration: "16", midiValue: 83 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["d/5"], duration: "16", midiValue: 74 },
            // Battuta 8
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 10
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 11
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 12
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 13
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 14
            { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 }, { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 },
            // Battuta 15
            { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["b/1"], duration: "16", midiValue: 35 }, { keys: ["a/1"], duration: "16", midiValue: 33 }, { keys: ["g/1"], duration: "16", midiValue: 31 }, { keys: ["f/1"], duration: "16", midiValue: 29 }, { keys: ["e/1"], duration: "16", midiValue: 28 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 } // Originale C2
        ],
        notesBass: [
            // N.74
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 3
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 5
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 7
            { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 11
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 13
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 15
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n75-liv2_ex39",
        name: "Beyer Op. 101 N.75",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.75
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 4
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 6
            { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 10
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 12
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 14
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 15
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.75
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n76-liv2_ex40",
        name: "Beyer Op. 101 N.76",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.76
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["g/4", "b/4", "e/5"], duration: "8", midiValues: [67, 71, 76] }, { keys: ["g/4", "b/4", "e/5"], duration: "8", midiValues: [67, 71, 76] }, { keys: ["g/4", "b/4", "e/5"], duration: "8", midiValues: [67, 71, 76] }, { keys: ["g/4", "b/4", "e/5"], duration: "8", midiValues: [67, 71, 76] },
            // Battuta 6
            { keys: ["a/4", "c/5", "f/5"], duration: "8", midiValues: [69, 72, 77] }, { keys: ["a/4", "c/5", "f/5"], duration: "8", midiValues: [69, 72, 77] }, { keys: ["a/4", "c/5", "f/5"], duration: "8", midiValues: [69, 72, 77] }, { keys: ["a/4", "c/5", "f/5"], duration: "8", midiValues: [69, 72, 77] },
            // Battuta 7
            { keys: ["g/4", "b/4", "d/5"], duration: "8", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "8", midiValues: [59, 62, 67] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] },
            // Battuta 10
            { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] },
            // Battuta 11
            { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "8", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "8", midiValues: [65, 69, 74] },
            // Battuta 13
            { keys: ["e/4", "g/4", "b/4"], duration: "8", midiValues: [64, 67, 71] }, { keys: ["d/4", "f/4", "a/4"], duration: "8", midiValues: [62, 65, 69] }, { keys: ["c/4", "e/4", "g/4"], duration: "8", midiValues: [60, 64, 67] }, { keys: ["b/3", "d/4", "f/4"], duration: "8", midiValues: [59, 62, 65] },
            // Battuta 14
            { keys: ["a/3", "c/4", "e/4"], duration: "8", midiValues: [57, 60, 64] }, { keys: ["g/3", "b/3", "d/4"], duration: "8", midiValues: [55, 59, 62] }, { keys: ["f/3", "a/3", "c/4"], duration: "8", midiValues: [53, 57, 60] }, { keys: ["e/3", "g/3", "b/3"], duration: "8", midiValues: [52, 55, 59] },
            // Battuta 15
            { keys: ["d/3", "f/3", "a/3"], duration: "8", midiValues: [50, 53, 57] }, { keys: ["c/3", "e/3", "g/3"], duration: "8", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f/3"], duration: "8", midiValues: [47, 50, 53] }, { keys: ["a/2", "c/3", "e/3"], duration: "8", midiValues: [45, 48, 52] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] } // G Major chord
        ],
        notesBass: [
            // N.76
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 } // G1
        ]
    },
{
        id: "beyer-op101-n77-liv2_ex41",
        name: "Beyer Op. 101 N.77",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.77
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 4
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 6
            { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 10
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 12
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 14
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 15
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.77
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n78-liv2_ex42",
        name: "Beyer Op. 101 N.78 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.78
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] } // G Major chord
        ],
        notesBass: [
            // N.78
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n79-liv2_ex43",
        name: "Beyer Op. 101 N.79 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.79
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] } // F Major chord
        ],
        notesBass: [
            // N.79
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n80-liv2_ex44",
        name: "Beyer Op. 101 N.80",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.80
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 } // Originale C3
        ],
        notesBass: [
            // N.80
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 }, // G1
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n81-liv2_ex45",
        name: "Beyer Op. 101 N.81",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.81
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.81
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
 {
        id: "beyer-op101-n82-liv2_ex46",
        name: "Beyer Op. 101 N.82",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.82
            // Battuta 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 15
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.82
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n83-liv2_ex47",
        name: "Beyer Op. 101 N.83 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.83
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }
        ],
        notesBass: [
            // N.83
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n84-liv2_ex48",
        name: "Beyer Op. 101 N.84 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.84
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }
        ],
        notesBass: [
            // N.84
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n85-liv2_ex49",
        name: "Beyer Op. 101 N.85",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.85
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.85
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n86-liv2_ex50",
        name: "Beyer Op. 101 N.86",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.86
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.86
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
 {
        id: "beyer-op101-n87-liv2_ex51",
        name: "Beyer Op. 101 N.87",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.87
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 4
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 6
            { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 10
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 12
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 14
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 15
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.87
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n88-liv2_ex52",
        name: "Beyer Op. 101 N.88 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.88
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }
        ],
        notesBass: [
            // N.88
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n89-liv2_ex53",
        name: "Beyer Op. 101 N.89 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.89
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }
        ],
        notesBass: [
            // N.89
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n90-liv2_ex54",
        name: "Beyer Op. 101 N.90",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.90
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.90
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n91-liv2_ex55",
        name: "Beyer Op. 101 N.91",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.91
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.91
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
   {
        id: "beyer-op101-n92-liv2_ex56",
        name: "Beyer Op. 101 N.92",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.92
            // Battuta 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 15
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.92
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n93-liv2_ex57",
        name: "Beyer Op. 101 N.93 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.93
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }
        ],
        notesBass: [
            // N.93
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n94-liv2_ex58",
        name: "Beyer Op. 101 N.94 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.94
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }
        ],
        notesBass: [
            // N.94
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n95-liv2_ex59",
        name: "Beyer Op. 101 N.95",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.95
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.95
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n96-liv2_ex60",
        name: "Beyer Op. 101 N.96",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.96
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.96
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },

    {
        id: "beyer-op101-n92-liv2_ex56",
        name: "Beyer Op. 101 N.92",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.92
            // Battuta 1
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 2
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 3
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 4
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 5
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 6
            { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 7
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 10
            { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 11
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 12
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
            // Battuta 13
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
            // Battuta 14
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
            // Battuta 15
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["c/3"], duration: "8", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.92
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 4
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 12
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 14
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n93-liv2_ex57",
        name: "Beyer Op. 101 N.93 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.93
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }
        ],
        notesBass: [
            // N.93
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n94-liv2_ex58",
        name: "Beyer Op. 101 N.94 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.94
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }
        ],
        notesBass: [
            // N.94
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n95-liv2_ex59",
        name: "Beyer Op. 101 N.95",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.95
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.95
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n96-liv2_ex60",
        name: "Beyer Op. 101 N.96",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.96
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.96
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },

    {
        id: "beyer-op101-n97-liv2_ex61",
        name: "Beyer Op. 101 N.97",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.97
            // Battuta 1
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 2
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 3
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 4
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
            // Battuta 6
            { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
            // Battuta 7
            { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
            // Battuta 8
            { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 10
            { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 11
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
            // Battuta 12
            { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 13
            { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
            // Battuta 14
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            // Battuta 15
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
            // Battuta 16
            { keys: ["c/4"], duration: "h", midiValue: 60 }
        ],
        notesBass: [
            // N.97
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 6
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["e/3"], duration: "q", midiValue: 52 },
            // Battuta 7
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 8
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "q" },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["d/3"], duration: "q", midiValue: 50 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 14
            { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 15
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n98-liv2_ex62",
        name: "Beyer Op. 101 N.98 (C Maj & G Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a G
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.98
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 3
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 4
            { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 5
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] },
            // Battuta 6
            { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 7
            { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] }, { keys: ["d/3", "f/3", "b/3"], duration: "q", midiValues: [50, 53, 59] },
            // Battuta 8
            { keys: ["c/3", "e/3", "g/3"], duration: "h", midiValues: [48, 52, 55] },

            // Battuta 9 (G Major section)
            { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] },
            // Battuta 10
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] }, { keys: ["b/3", "d/4", "f#/4"], duration: "q", midiValues: [59, 62, 66] },
            // Battuta 12
            { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] }, { keys: ["a/3", "c/4", "e/4"], duration: "q", midiValues: [57, 60, 64] },
            // Battuta 13
            { keys: ["g/3", "b/3", "d/4"], duration: "q", midiValues: [55, 59, 62] }, { keys: ["f#/3", "a/3", "c/4"], duration: "q", midiValues: [54, 57, 60] },
            // Battuta 14
            { keys: ["e/3", "g/3", "b/3"], duration: "q", midiValues: [52, 55, 59] }, { keys: ["d/3", "f#/3", "a/3"], duration: "q", midiValues: [50, 54, 57] },
            // Battuta 15
            { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["b/2", "d/3", "f#/3"], duration: "q", midiValues: [47, 50, 54] },
            // Battuta 16
            { keys: ["g/2", "b/2", "d/3"], duration: "h", midiValues: [43, 47, 50] }
        ],
        notesBass: [
            // N.98
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 4
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 5
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 7
            { keys: ["b/1"], duration: "q", midiValue: 35 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (G Major section)
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 12
            { keys: ["e/2"], duration: "q", midiValue: 40 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 13
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["b/1"], duration: "q", midiValue: 35 },
            // Battuta 14
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 16
            { keys: ["g/1"], duration: "h", midiValue: 31 }
        ]
    },
    {
        id: "beyer-op101-n99-liv2_ex63",
        name: "Beyer Op. 101 N.99 (C Maj & F Maj)",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C", // Inizia in C, modula a F
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.99
            // Battuta 1 (C Major)
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 2
            { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 3
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["d/4", "f/4", "b/4"], duration: "q", midiValues: [62, 65, 71] },
            // Battuta 6
            { keys: ["c/4", "e/4", "a/4"], duration: "q", midiValues: [60, 64, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9 (F Major section)
            { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] }, { keys: ["c/4", "f/4", "a/4"], duration: "q", midiValues: [60, 65, 69] },
            // Battuta 10
            { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] }, { keys: ["bb/3", "d/4", "g/4"], duration: "q", midiValues: [58, 62, 67] },
            // Battuta 11
            { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] }, { keys: ["a/3", "c/4", "f/4"], duration: "q", midiValues: [57, 60, 65] },
            // Battuta 12
            { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] }, { keys: ["g/3", "bb/3", "e/4"], duration: "q", midiValues: [55, 58, 64] },
            // Battuta 13
            { keys: ["f/3", "a/3", "d/4"], duration: "q", midiValues: [53, 57, 62] }, { keys: ["e/3", "g/3", "c/4"], duration: "q", midiValues: [52, 55, 60] },
            // Battuta 14
            { keys: ["d/3", "f/3", "bb/3"], duration: "q", midiValues: [50, 53, 58] }, { keys: ["c/3", "e/3", "a/3"], duration: "q", midiValues: [48, 52, 57] },
            // Battuta 15
            { keys: ["bb/2", "d/3", "g/3"], duration: "q", midiValues: [46, 50, 55] }, { keys: ["a/2", "c/3", "f/3"], duration: "q", midiValues: [45, 48, 53] },
            // Battuta 16
            { keys: ["f/2", "a/2", "c/3"], duration: "h", midiValues: [41, 45, 48] }
        ],
        notesBass: [
            // N.99
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 4
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["d/2"], duration: "q", midiValue: 38 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9 (F Major section)
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 10
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["d/2"], duration: "q", midiValue: 38 },
            // Battuta 11
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 12
            { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 13
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 14
            { keys: ["bb/1"], duration: "q", midiValue: 34 }, { keys: ["a/1"], duration: "q", midiValue: 33 },
            // Battuta 15
            { keys: ["g/1"], duration: "q", midiValue: 31 }, { keys: ["f/1"], duration: "q", midiValue: 29 },
            // Battuta 16
            { keys: ["f/1"], duration: "h", midiValue: 29 }
        ]
    },
    {
        id: "beyer-op101-n100-liv2_ex64",
        name: "Beyer Op. 101 N.100",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.100
            // Battuta 1
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 2
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 3
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 4
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 5
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["g/5"], duration: "16", midiValue: 79 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["g/4"], duration: "16", midiValue: 67 },
            // Battuta 6
            { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["a/5"], duration: "16", midiValue: 81 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["a/4"], duration: "16", midiValue: 69 },
            // Battuta 7
            { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 },
            // Battuta 8
            { keys: ["c/4"], duration: "h", midiValue: 60 },

            // Battuta 9
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["c/5"], duration: "16", midiValue: 72 },
            // Battuta 10
            { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["b/4"], duration: "16", midiValue: 71 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 },
            // Battuta 11
            { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["e/5"], duration: "16", midiValue: 76 }, { keys: ["c/5"], duration: "16", midiValue: 72 }, { keys: ["g/4"], duration: "16", midiValue: 67 }, { keys: ["e/4"], duration: "16", midiValue: 64 },
            // Battuta 12
            { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["f/4"], duration: "16", midiValue: 65 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["f/5"], duration: "16", midiValue: 77 }, { keys: ["d/5"], duration: "16", midiValue: 74 }, { keys: ["a/4"], duration: "16", midiValue: 69 }, { keys: ["f/4"], duration: "16", midiValue: 65 },
            // Battuta 13
            { keys: ["e/4"], duration: "16", midiValue: 64 }, { keys: ["d/4"], duration: "16", midiValue: 62 }, { keys: ["c/4"], duration: "16", midiValue: 60 }, { keys: ["b/3"], duration: "16", midiValue: 59 }, { keys: ["a/3"], duration: "16", midiValue: 57 }, { keys: ["g/3"], duration: "16", midiValue: 55 }, { keys: ["f/3"], duration: "16", midiValue: 53 }, { keys: ["e/3"], duration: "16", midiValue: 52 },
            // Battuta 14
            { keys: ["d/3"], duration: "16", midiValue: 50 }, { keys: ["c/3"], duration: "16", midiValue: 48 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["d/2"], duration: "16", midiValue: 38 },
            // Battuta 15
            { keys: ["c/2"], duration: "16", midiValue: 36 }, { keys: ["d/2"], duration: "16", midiValue: 38 }, { keys: ["e/2"], duration: "16", midiValue: 40 }, { keys: ["f/2"], duration: "16", midiValue: 41 }, { keys: ["g/2"], duration: "16", midiValue: 43 }, { keys: ["a/2"], duration: "16", midiValue: 45 }, { keys: ["b/2"], duration: "16", midiValue: 47 }, { keys: ["c/3"], duration: "16", midiValue: 48 },
            // Battuta 16
            { keys: ["c/3"], duration: "h", midiValue: 48 }
        ],
        notesBass: [
            // N.100
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 3
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 5
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 6
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 7
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 11
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["a/2"], duration: "q", midiValue: 45 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 14
            { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/2"], duration: "q", midiValue: 36 },
            // Battuta 15
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/1"], duration: "q", midiValue: 31 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    },
    {
        id: "beyer-op101-n101-liv2_ex65",
        name: "Beyer Op. 101 N.101",
        category: "beyer_op101_liv2",
        staveLayout: "grand",
        keySignature: "C",
        timeSignature: "2/4",
        repetitions: 3,
        notesTreble: [
            // N.101
            // Battuta 1
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 2
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 3
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 4
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 5
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 6
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["b/3", "d/4", "g/4"], duration: "q", midiValues: [59, 62, 67] },
            // Battuta 7
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/3", "b/3", "e/4"], duration: "q", midiValues: [55, 59, 64] },
            // Battuta 8
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] },

            // Battuta 9
            { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 10
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] },
            // Battuta 11
            { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 12
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 13
            { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] },
            // Battuta 14
            { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "c/5"], duration: "q", midiValues: [64, 67, 72] },
            // Battuta 15
            { keys: ["f/4", "a/4", "d/5"], duration: "q", midiValues: [65, 69, 74] }, { keys: ["d/4", "f/4", "a/4"], duration: "q", midiValues: [62, 65, 69] },
            // Battuta 16
            { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }
        ],
        notesBass: [
            // N.101
            // Battuta 1
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 2
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 3
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 4
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 5
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 6
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 7
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/2"], duration: "q", midiValue: 40 },
            // Battuta 8
            { keys: ["c/2"], duration: "h", midiValue: 36 },

            // Battuta 9
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 10
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 11
            { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 12
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 },
            // Battuta 13
            { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
            // Battuta 14
            { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 },
            // Battuta 15
            { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 },
            // Battuta 16
            { keys: ["c/2"], duration: "h", midiValue: 36 }
        ]
    }





] // Fine dell'array




// Aggiungi questi esercizi a window.exerciseData per renderli disponibili nell'applicazione
if (window.exerciseData) {
    window.exerciseData.beyer_op101_liv2 = beyerOp101Liv2Exercises;
    console.log("Dati Esercizi Beyer Op. 101 Livello 2 (N.32 esteso) Caricati.");
} else {
    console.warn("window.exerciseData non definito. Impossibile caricare gli esercizi del Beyer Op. 101 Livello 2.");
}