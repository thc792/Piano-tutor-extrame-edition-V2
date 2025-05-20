/**
 * js/exercises/licks_jazz.js
 * Brevi frasi e lick comuni nel linguaggio jazz.
 * **VERSIONE AMPLIATA**
 */

const licksJazzExercises = [
    // === Licks ii-V-I (Maggiore - Tonalità C) ===
    {
        id: "lick-jazz-ii-V-I-Cmaj-1", name: "Lick ii-V-I Base (C Maj)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Su Dm7 | G7 | Cmaj7 */ { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["d/3","a/3"], duration: "h", midiValues: [50, 57] }, { keys: ["g/2","b/2"], duration: "h", midiValues: [43, 47] }, { keys: ["c/3","g/3"], duration: "w", midiValues: [48, 55] } ]
    },
    {
        id: "lick-jazz-ii-V-I-Cmaj-2", name: "Lick ii-V-I Arp+Chrom (C Maj)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Dm7 Arp | G7 Chrom Appr | Cmaj7 Res */ { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["ab/4"], duration: "8", midiValue: 68 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ]
    },
    {
        id: "lick-jazz-ii-V-I-Cmaj-3", name: "Lick ii-V-I Scala+Arp (C Maj)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Dm7 Scale | G7 Arp | Cmaj7 Target */ { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 } , { keys: ["r/4"], duration: "q" } ],
        notesBass: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ]
    },
     {
        id: "lick-jazz-ii-V-I-Cmaj-4-bebop", name: "Lick ii-V-I Bebop Dominant (C Maj)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Dm7 | G7 con B nat | Cmaj7 */ { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ]
    },

    // === Licks ii-V-i (Minore - Tonalità Am) ===
     {
        id: "lick-jazz-minor-ii-V-i-Am-1", name: "Lick Minore ii°-V-i (Am) - Base", category: "licks_jazz",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Bm7b5 | E7 | Am7 */ { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["g#/3"], duration: "8", midiValue: 56 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 } ]
    },
    {
        id: "lick-jazz-minor-ii-V-i-Am-2", name: "Lick Minore ii°-V-i (Am) - Arp Dim", category: "licks_jazz",
        staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Bm7b5 Arp | E7 con Arp G#dim | Am Res */ { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["c/5"], duration: "h", midiValue: 72 }],
        notesBass: [ { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 } ]
    },

     // === Licks su I-vi-ii-V (Tonalità C) ===
    {
        id: "lick-jazz-turnaround-Cmaj-1", name: "Lick Turnaround I-vi-ii-V (C Maj) - Semplice", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Cmaj7 | Am7 | Dm7 | G7 */ { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },
     {
        id: "lick-jazz-turnaround-Cmaj-2", name: "Lick Turnaround I-vi-ii-V (C Maj) - Connessioni", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ /* Cmaj7 | Am7 | Dm7 | G7 */ { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ], // Risolve su C
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ]
    },

     // === Licks Modali (Dorico) ===
     {
        id: "lick-jazz-dorian-Dm", name: "Lick Dorico (Dm)", category: "licks_jazz",
        staveLayout: "single", clef: "treble", keySignature: "F", timeSignature: "4/4", repetitions: 4, // Key F per Bb
        notes: [ // Pattern su Dm7 (D E F G A B C D)
            { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
            { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, // Nota caratteristica B naturale
            { keys: ["a/4"], duration: "h", midiValue: 69 }
        ]
    },
    {
        id: "lick-jazz-dorian-Gm", name: "Lick Dorico (Gm)", category: "licks_jazz",
        staveLayout: "single", clef: "treble", keySignature: "Bb", timeSignature: "4/4", repetitions: 4, // Key Bb per Eb
        notes: [ // Pattern su Gm7 (G A Bb C D E F G)
            { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
            { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, // Nota caratteristica E naturale
            { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["d/5"], duration: "q", midiValue: 74 }
        ]
    },

    // === Licks su Dominanti Alterati ===
     {
        id: "lick-jazz-G7alt-1", name: "Lick Alterato (G7alt -> C)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Usa note della scala alterata di G (G Ab Bb B Db Eb F)
            { keys: ["f/5"], duration: "8", midiValue: 77 }, // b7
            { keys: ["eb/5"], duration: "8", midiValue: 75 }, // #5 (o b13)
            { keys: ["db/5"], duration: "8", midiValue: 73 }, // b5 (o #11)
            { keys: ["b/4"], duration: "8", midiValue: 71 }, // 3
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, // #9 (o b3 della relativa minore?)
            { keys: ["ab/4"], duration: "8", midiValue: 68 }, // b9
            { keys: ["g/4"], duration: "q", midiValue: 67 }, // Ritorna a G per poi risolvere
            { keys: ["e/4"], duration: "h", midiValue: 64 } // Risolve su E (3a di Cmaj7)
        ],
        notesBass: [
            { keys: ["g/2"], duration: "w", midiValue: 43 }, // G7
            { keys: ["c/3"], duration: "w", midiValue: 48 }  // Cmaj7
        ]
    },
     {
        id: "lick-jazz-C7alt-1", name: "Lick Alterato (C7alt -> F)", category: "licks_jazz",
        staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ // Usa note della scala alterata di C (C Db Eb E Gb Ab Bb)
            { keys: ["bb/4"], duration: "8", midiValue: 70 }, // b7
            { keys: ["ab/4"], duration: "8", midiValue: 68 }, // #5 (o b13)
            { keys: ["gb/4"], duration: "8", midiValue: 66 }, // b5 (o #11)
            { keys: ["e/4"], duration: "8", midiValue: 64 }, // 3
            { keys: ["eb/4"], duration: "8", midiValue: 63 }, // #9 (o b3)
            { keys: ["db/4"], duration: "8", midiValue: 61 }, // b9
            { keys: ["c/4"], duration: "q", midiValue: 60 }, // Ritorna a C
            { keys: ["a/4"], duration: "h", midiValue: 69 } // Risolve su A (3a di Fmaj7)
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValue: 48 }, // C7
            { keys: ["f/2"], duration: "w", midiValue: 41 }  // Fmaj7
        ]
    },
    // ... Aggiungere altri 2-3 lick per varietà ...
    {
        id: "lick-jazz-take5-Eb", name: "Lick 'Take Five' (Eb Dorian/Blues)", category: "licks_jazz",
        staveLayout: "single", clef:"treble", keySignature: "Eb", timeSignature:"5/4", repetitions: 3, // Tempo 5/4
        notes: [ // Pattern ritmico su scala Eb Blues/Doriana
             { keys: ["eb/4"], duration: "q", midiValue: 63 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["eb/4"], duration: "q", midiValue: 63 },
             { keys: ["db/4"], duration: "8", midiValue: 61 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }
        ]
    },


];
window.exerciseData = window.exerciseData || {};
window.exerciseData.licks_jazz = licksJazzExercises;
console.log("Dati Esercizi Licks Jazz (Ampliati) Caricati.");