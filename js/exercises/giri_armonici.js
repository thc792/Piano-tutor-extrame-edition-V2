/**
 * js/exercises/giri_armonici.js
 * Contiene dati per esercizi su giri armonici comuni e importanti.
 * **VERSIONE SUPER AMPLIATA + GIRI BASE I-IV-V-I**
 */

const giriArmoniciExercises = [

    // ===========================================
    // === GIRI BASE I-IV-V-I (Triadi Maggiori) ===
    // ===========================================
    { id: "base-I-IV-V-I-Cmaj", name: "Giro Base I-IV-V-I (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ] },
    { id: "base-I-IV-V-I-Gmaj", name: "Giro Base I-IV-V-I (G Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/3"], duration: "q", midiValue: 55 } ] },
    { id: "base-I-IV-V-I-Dmaj", name: "Giro Base I-IV-V-I (D Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "D", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["a/4", "c#/5", "e/5"], duration: "q", midiValues: [69, 73, 76] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] } ],
        notesBass: [ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["d/3"], duration: "q", midiValue: 50 } ] },
    { id: "base-I-IV-V-I-Amaj", name: "Giro Base I-IV-V-I (A Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "A", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["a/4", "c#/5", "e/5"], duration: "q", midiValues: [69, 73, 76] }, { keys: ["d/4", "f#/4", "a/4"], duration: "q", midiValues: [62, 66, 69] }, { keys: ["e/4", "g#/4", "b/4"], duration: "q", midiValues: [64, 68, 71] }, { keys: ["a/4", "c#/5", "e/5"], duration: "q", midiValues: [69, 73, 76] } ],
        notesBass: [ { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/3"], duration: "q", midiValue: 57 } ] },
     { id: "base-I-IV-V-I-Emaj", name: "Giro Base I-IV-V-I (E Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "E", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["e/4", "g#/4", "b/4"], duration: "q", midiValues: [64, 68, 71] }, { keys: ["a/4", "c#/5", "e/5"], duration: "q", midiValues: [69, 73, 76] }, { keys: ["b/4", "d#/5", "f#/5"], duration: "q", midiValues: [71, 75, 78] }, { keys: ["e/4", "g#/4", "b/4"], duration: "q", midiValues: [64, 68, 71] } ],
        notesBass: [ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["e/3"], duration: "q", midiValue: 52 } ] },
     { id: "base-I-IV-V-I-Bmaj", name: "Giro Base I-IV-V-I (B Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "B", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["b/3", "d#/4", "f#/4"], duration: "q", midiValues: [59, 63, 66] }, { keys: ["e/4", "g#/4", "b/4"], duration: "q", midiValues: [64, 68, 71] }, { keys: ["f#/4", "a#/4", "c#/5"], duration: "q", midiValues: [66, 70, 73] }, { keys: ["b/3", "d#/4", "f#/4"], duration: "q", midiValues: [59, 63, 66] } ], // Inizia da B3
        notesBass: [ { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f#/3"], duration: "q", midiValue: 54 }, { keys: ["b/2"], duration: "q", midiValue: 47 } ] },
    { id: "base-I-IV-V-I-Fmaj", name: "Giro Base I-IV-V-I (F Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["bb/3", "d/4", "f/4"], duration: "q", midiValues: [58, 62, 65] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] } ],
        notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ] },
    { id: "base-I-IV-V-I-Bbmaj", name: "Giro Base I-IV-V-I (Bb Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["bb/3", "d/4", "f/4"], duration: "q", midiValues: [58, 62, 65] }, { keys: ["eb/4", "g/4", "bb/4"], duration: "q", midiValues: [63, 67, 70] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["bb/3", "d/4", "f/4"], duration: "q", midiValues: [58, 62, 65] } ],
        notesBass: [ { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["bb/2"], duration: "q", midiValue: 46 } ] },
    { id: "base-I-IV-V-I-Ebmaj", name: "Giro Base I-IV-V-I (Eb Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "Eb", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["eb/4", "g/4", "bb/4"], duration: "q", midiValues: [63, 67, 70] }, { keys: ["ab/4", "c/5", "eb/5"], duration: "q", midiValues: [68, 72, 75] }, { keys: ["bb/4", "d/5", "f/5"], duration: "q", midiValues: [70, 74, 77] }, { keys: ["eb/4", "g/4", "bb/4"], duration: "q", midiValues: [63, 67, 70] } ],
        notesBass: [ { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["bb/3"], duration: "q", midiValue: 58 }, { keys: ["eb/3"], duration: "q", midiValue: 51 } ] },
    { id: "base-I-IV-V-I-Abmaj", name: "Giro Base I-IV-V-I (Ab Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "Ab", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["ab/3", "c/4", "eb/4"], duration: "q", midiValues: [56, 60, 63] }, { keys: ["db/4", "f/4", "ab/4"], duration: "q", midiValues: [61, 65, 68] }, { keys: ["eb/4", "g/4", "bb/4"], duration: "q", midiValues: [63, 67, 70] }, { keys: ["ab/3", "c/4", "eb/4"], duration: "q", midiValues: [56, 60, 63] } ],
        notesBass: [ { keys: ["ab/2"], duration: "q", midiValue: 44 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["eb/3"], duration: "q", midiValue: 51 }, { keys: ["ab/2"], duration: "q", midiValue: 44 } ] },
     { id: "base-I-IV-V-I-Dbmaj", name: "Giro Base I-IV-V-I (Db Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "Db", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["db/4", "f/4", "ab/4"], duration: "q", midiValues: [61, 65, 68] }, { keys: ["gb/4", "bb/4", "db/5"], duration: "q", midiValues: [66, 70, 73] }, { keys: ["ab/4", "c/5", "eb/5"], duration: "q", midiValues: [68, 72, 75] }, { keys: ["db/4", "f/4", "ab/4"], duration: "q", midiValues: [61, 65, 68] } ],
        notesBass: [ { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["gb/3"], duration: "q", midiValue: 54 }, { keys: ["ab/3"], duration: "q", midiValue: 56 }, { keys: ["db/3"], duration: "q", midiValue: 49 } ] },
     { id: "base-I-IV-V-I-Gbmaj", name: "Giro Base I-IV-V-I (Gb Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "Gb", timeSignature: "4/4", repetitions: 5,
        notesTreble: [ { keys: ["gb/3", "bb/3", "db/4"], duration: "q", midiValues: [54, 58, 61] }, { keys: ["cb/4", "eb/4", "gb/4"], duration: "q", midiValues: [59, 63, 66] }, { keys: ["db/4", "f/4", "ab/4"], duration: "q", midiValues: [61, 65, 68] }, { keys: ["gb/3", "bb/3", "db/4"], duration: "q", midiValues: [54, 58, 61] } ],
        notesBass: [ { keys: ["gb/2"], duration: "q", midiValue: 42 }, { keys: ["cb/3"], duration: "q", midiValue: 47 }, { keys: ["db/3"], duration: "q", midiValue: 49 }, { keys: ["gb/2"], duration: "q", midiValue: 42 } ] },


    // === GIRI POP / ROCK / CLASSICI COMUNI (Già presenti, messi dopo i giri base) ===
    // ... (incollare qui gli esercizi da 'pop-I-V-vi-IV-Cmaj' fino a 'pachelbel-pattern-Cmaj' dalla risposta precedente) ...
    { id: "pop-I-V-vi-IV-Cmaj", name: "Pop I-V-vi-IV (C Maj - Triadi)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["a/4", "c/5", "e/5"], duration: "h", midiValues: [69, 72, 76] }, { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] } ], notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 } ] },
    { id: "pop-I-V-vi-IV-Gmaj", name: "Pop I-V-vi-IV (G Maj - Triadi)", category: "giri_armonici", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["d/4", "f#/4", "a/4"], duration: "h", midiValues: [62, 66, 69] }, { keys: ["e/4", "g/4", "b/4"], duration: "h", midiValues: [64, 67, 71] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "pop-50s-I-vi-IV-V-Cmaj", name: "Pop '50s I-vi-IV-V (C Maj - Triadi)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["a/4", "c/5", "e/5"], duration: "h", midiValues: [69, 72, 76] }, { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] } ], notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ] },
    { id: "pop-50s-I-vi-IV-V-Gmaj", name: "Pop '50s I-vi-IV-V (G Maj - Triadi)", category: "giri_armonici", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["e/4", "g/4", "b/4"], duration: "h", midiValues: [64, 67, 71] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["d/4", "f#/4", "a/4"], duration: "h", midiValues: [62, 66, 69] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["d/3"], duration: "h", midiValue: 50 } ] },
    { id: "minor-i-VI-III-VII-Am", name: "Giro Minore i-VI-III-VII (Am)", category: "giri_armonici", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["a/4", "c/5", "e/5"], duration: "h", midiValues: [69, 72, 76] }, { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] }, { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] } ], notesBass: [ { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/3"], duration: "h", midiValue: 55 } ] },
    { id: "minor-i-VII-VI-V-Am", name: "Cadenza Andalusa i-VII-VI-V (Am)", category: "giri_armonici", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["a/4", "c/5", "e/5"], duration: "h", midiValues: [69, 72, 76] }, { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["e/4", "g#/4", "b/4"], duration: "h", midiValues: [64, 68, 71] } ], notesBass: [ { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ] },
    { id: "cadence-V-I-Cmaj", name: "Cadenza Perfetta V-I (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 6, notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "cadence-IV-V-I-Cmaj", name: "Cadenza IV-V-I (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 6, notesTreble: [ { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] } ], notesBass: [ { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "cadence-V-vi-Cmaj", name: "Cadenza D'inganno V-vi (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 6, notesTreble: [ { keys: ["g/4", "b/4", "d/5"], duration: "h", midiValues: [67, 71, 74] }, { keys: ["a/4", "c/5", "e/5"], duration: "h", midiValues: [69, 72, 76] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 } ] },
    { id: "cadence-IV-I-Cmaj", name: "Cadenza Plagale IV-I (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 6, notesTreble: [ { keys: ["f/4", "a/4", "c/5"], duration: "h", midiValues: [65, 69, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "h", midiValues: [60, 64, 67] } ], notesBass: [ { keys: ["f/3"], duration: "h", midiValue: 53 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "pachelbel-pattern-Cmaj", name: "Canone Pachelbel Base (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4, notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, { keys: ["a/4", "c/5", "e/5"], duration: "q", midiValues: [69, 72, 76] }, { keys: ["e/4", "g/4", "b/4"], duration: "q", midiValues: [64, 67, 71] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["c/4", "e/4", "g/4"], duration: "q", midiValues: [60, 64, 67] }, { keys: ["f/4", "a/4", "c/5"], duration: "q", midiValues: [65, 69, 72] }, { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] } ], notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "q", midiValue: 41 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ] },


    // ===========================================
    // === GIRI JAZZ STANDARD (Già presenti)   ===
    // ===========================================
    // ... (incollare qui gli esercizi da 'jazz-ii-V-I-Cmaj-7th' fino a 'modal-vamp-so-what-Dm' dalla risposta precedente) ...
    { id: "jazz-ii-V-I-Cmaj-7th", name: "Jazz ii-V-I (C Maj - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "h", midiValues: [62, 65, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }, { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] } ], notesBass: [ { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] },
    { id: "jazz-ii-V-I-Gmaj-7th", name: "Jazz ii-V-I (G Maj - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "h", midiValues: [62, 66, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f#/5"], duration: "w", midiValues: [67, 71, 74, 78] } ], notesBass: [ { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 } ] },
    { id: "jazz-ii-V-I-Fmaj-7th", name: "Jazz ii-V-I (F Maj - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "h", midiValues: [67, 70, 74, 77] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 64, 67, 70] }, { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/3"], duration: "w", midiValue: 53 } ] },
    { id: "jazz-ii-V-i-Amin-m7", name: "Jazz ii°-V-i (Am - m7)", category: "giri_armonici", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["b/4", "d/5", "f/5", "a/5"], duration: "h", midiValues: [71, 74, 77, 81] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "h", midiValues: [64, 68, 71, 74] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] } ], notesBass: [ { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 } ] },
    { id: "jazz-ii-V-i-Dmin-m7", name: "Jazz ii°-V-i (Dm - m7)", category: "giri_armonici", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["e/4", "g/4", "bb/4", "d/5"], duration: "h", midiValues: [64, 67, 70, 74] }, { keys: ["a/4", "c#/5", "e/5", "g/5"], duration: "h", midiValues: [69, 73, 76, 79] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] } ], notesBass: [ { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["d/3"], duration: "w", midiValue: 50 } ] },
    { id: "jazz-I-vi-ii-V-Cmaj-7th", name: "Jazz I-vi-ii-V (C Maj - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "q", midiValues: [60, 64, 67, 71] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "q", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "q", midiValues: [62, 65, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "q", midiValues: [67, 71, 74, 77] } ], notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ] },
    { id: "jazz-iii-vi-ii-V-Cmaj-7th", name: "Jazz iii-vi-ii-V (C Maj - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "q", midiValues: [64, 67, 71, 74] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "q", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "q", midiValues: [62, 65, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "q", midiValues: [67, 71, 74, 77] } ], notesBass: [ { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ] },
    { id: "jazz-turnaround-Cmaj-I-vi-ii-V", name: "Turnaround I-vi-ii-V (C Maj - Ciclico)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "h", midiValues: [60, 64, 67, 71] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "h", midiValues: [62, 65, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] } ], notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 } ] },
     { id: "modal-vamp-so-what-Dm", name: "Vamp Modale 'So What' (Dm)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4, notesTreble: [ { keys: ["d/4", "g/4", "c/5", "f/5", "a/5"], duration: "w", midiValues: [62, 67, 72, 77, 81] }, { keys: ["d/4", "g/4", "c/5", "f/5", "a/5"], duration: "w", midiValues: [62, 67, 72, 77, 81] }, { keys: ["eb/4", "ab/4", "db/5", "gb/5", "bb/5"], duration: "w", midiValues: [63, 68, 73, 78, 82] }, { keys: ["eb/4", "ab/4", "db/5", "gb/5", "bb/5"], duration: "w", midiValues: [63, 68, 73, 78, 82] } ], notesBass: [ { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["eb/3"], duration: "w", midiValue: 51 } ] },
     { id: "jazz-I-IV-AutumnLeaves-Gm", name: "Giro 'Autumn Leaves' (Gm - I-IV)", category: "giri_armonici", staveLayout: "grand", keySignature: "Gm", timeSignature: "4/4", repetitions: 4, notesTreble: [ { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "h", midiValues: [67, 70, 74, 77] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 63, 67, 70] } ], notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },

    // ===========================================
    // === BLUES (12 & 8 Battute - Ampliati)   ===
    // ===========================================
    // --- 12 Bar Blues - Maggiori ---
    { id: "blues-12bar-C7", name: "12 Bar Blues (C - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] } ], notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 } ] },
    { id: "blues-12bar-G7-quick", name: "12 Bar Blues Quick Change (G - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] } ], notesBass: [ { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 } ] },
    { id: "blues-12bar-F7", name: "12 Bar Blues (F - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] } ], notesBass: [ { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] },
    { id: "blues-12bar-Bb7", name: "12 Bar Blues (Bb - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "Eb", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] } ], notesBass: [ { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/3"], duration: "w", midiValue: 53 } ] },
    { id: "blues-12bar-E7", name: "12 Bar Blues (E - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "A", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] } ], notesBass: [ { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["b/2"], duration: "w", midiValue: 47 } ] },
    { id: "blues-12bar-A7", name: "12 Bar Blues (A - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "D", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] } ], notesBass: [ { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["e/3"], duration: "w", midiValue: 52 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["e/3"], duration: "w", midiValue: 52 } ] },
    // --- 12 Bar Blues - Minori ---
    { id: "blues-minor-Am-simple", name: "Minor Blues Semplice (Am)", category: "giri_armonici", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] }, { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] } ], notesBass: [ { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["e/3"], duration: "w", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["e/3"], duration: "w", midiValue: 52 } ] },
    { id: "blues-minor-Cm-simple", name: "Minor Blues Semplice (Cm)", category: "giri_armonici", staveLayout: "grand", keySignature: "Eb", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["f/4", "ab/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 68, 72, 75] }, { keys: ["f/4", "ab/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 68, 72, 75] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["ab/3", "c/4", "eb/4", "g/4"], duration: "w", midiValues: [56, 60, 63, 67] }, { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["g/3", "b/3", "d/4", "f/4"], duration: "w", midiValues: [55, 59, 62, 65] } ], notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["ab/2"], duration: "w", midiValue: 44 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 } ] },
    { id: "blues-minor-Gm-simple", name: "Minor Blues Semplice (Gm)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 3, notesTreble: [ { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["eb/4", "g/4", "bb/4", "d/5"], duration: "w", midiValues: [63, 67, 70, 74] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] } ], notesBass: [ { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 } ] },
    // --- 8 Bar Blues ---
    { id: "blues-8bar-C7", name: "8 Bar Blues (C - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] } ], notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 } ] },
    { id: "blues-8bar-G7", name: "8 Bar Blues (G - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] } ], notesBass: [ { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 } ] },
    { id: "blues-8bar-F7", name: "8 Bar Blues (F - 7th)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 5, notesTreble: [ { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] } ], notesBass: [ { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] },

    { id: "jazz-ii-V-I-Bbmaj-12bar", name: "Jazz ii-V-I (Bb Maj - 12 Bar Feel)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // ii | V | I | I | ii | V | I | I | ii | V | I | Turnaround V
            { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, // Cm7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, // Cm7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, // Cm7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }  // F7 (Turnaround)
        ],
        notesBass: [
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/3"], duration: "w", midiValue: 53 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/3"], duration: "w", midiValue: 53 }
        ] },
    { id: "jazz-ii-V-i-Gm-12bar", name: "Jazz ii°-V-i (Gm - 12 Bar Feel)", category: "giri_armonici", staveLayout: "grand", keySignature: "Gm", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ // ii° | V7 | i | i | ii° | V7 | i | i | ii° | V7 | i | Turnaround V7
            { keys: ["a/4", "c/5", "eb/5", "g/5"], duration: "w", midiValues: [69, 72, 75, 79] }, // Am7b5
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, // Gm7
            { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, // Gm7
            { keys: ["a/4", "c/5", "eb/5", "g/5"], duration: "w", midiValues: [69, 72, 75, 79] }, // Am7b5
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, // Gm7
            { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, // Gm7
            { keys: ["a/4", "c/5", "eb/5", "g/5"], duration: "w", midiValues: [69, 72, 75, 79] }, // Am7b5
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "bb/4", "d/5", "f/5"], duration: "w", midiValues: [67, 70, 74, 77] }, // Gm7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }  // D7 (Turnaround)
        ],
        notesBass: [
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 },
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 },
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["d/3"], duration: "w", midiValue: 50 }
        ] },

    // --- Jazz Blues Variations (12 Bars) ---
    { id: "blues-jazz-F7", name: "Jazz Blues (F - Basic)", category: "giri_armonici", staveLayout: "grand", keySignature: "Bb", timeSignature: "4/4", repetitions: 2, notesTreble: [ // F7 | Bb7 | F7 | Cm7 F7 | Bb7 | Bdim7 | F7 | Am7 D7 | Gm7 | C7 | F7 D7 | Gm7 C7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, // Bb7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 63, 67, 70] }, { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "h", midiValues: [65, 69, 72, 75] }, // Cm7 F7
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, // Bb7
            { keys: ["b/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [59, 62, 65, 68] }, // Bdim7 (simplified)
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "h", midiValues: [57, 60, 64, 67] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "h", midiValues: [62, 66, 69, 72] }, // Am7 D7
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "w", midiValues: [55, 58, 62, 65] }, // Gm7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "h", midiValues: [65, 69, 72, 75] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "h", midiValues: [62, 66, 69, 72] }, // F7 D7
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 64, 67, 70] }  // Gm7 C7
        ], notesBass: [
            { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 },
            { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
            { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
            { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 }
        ] },
    { id: "blues-jazz-C7", name: "Jazz Blues (C - Basic)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2, notesTreble: [ // C7 | F7 | C7 | Gm7 C7 | F7 | F#dim7 | C7 | Em7 A7 | Dm7 | G7 | C7 A7 | Dm7 G7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "h", midiValues: [55, 58, 62, 65] }, { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 64, 67, 70] }, // Gm7 C7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["f#/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [66, 69, 72, 75] }, // F#dim7 (simplified)
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["e/4", "g/4", "b/4", "d/5"], duration: "h", midiValues: [64, 67, 71, 74] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "h", midiValues: [57, 61, 64, 67] }, // Em7 A7
            { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] }, // Dm7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "h", midiValues: [60, 64, 67, 70] }, { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "h", midiValues: [57, 61, 64, 67] }, // C7 A7
            { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "h", midiValues: [62, 65, 69, 72] }, { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }  // Dm7 G7
        ], notesBass: [
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 },
            { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f#/2"], duration: "w", midiValue: 42 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["a/2"], duration: "h", midiValue: 45 },
            { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["a/2"], duration: "h", midiValue: 45 },
            { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["g/2"], duration: "h", midiValue: 43 }
        ] },
     { id: "blues-jazz-G7", name: "Jazz Blues (G - Basic)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2, notesTreble: [ // G7 | C7 | G7 | Am7 D7 | C7 | C#dim7 | G7 | Bm7 E7 | Am7 | D7 | G7 E7 | Am7 D7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "h", midiValues: [62, 66, 69, 72] }, // Am7 D7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["c#/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [61, 64, 67, 70] }, // C#dim7 (simplified)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["b/3", "d/4", "f#/4", "a/4"], duration: "h", midiValues: [59, 62, 66, 69] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "h", midiValues: [64, 68, 71, 74] }, // Bm7 E7
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "w", midiValues: [69, 72, 76, 79] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "h", midiValues: [67, 71, 74, 77] }, { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "h", midiValues: [64, 68, 71, 74] }, // G7 E7
            { keys: ["a/4", "c/5", "e/5", "g/5"], duration: "h", midiValues: [69, 72, 76, 79] }, { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "h", midiValues: [62, 66, 69, 72] }  // Am7 D7
        ], notesBass: [
             { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c#/3"], duration: "w", midiValue: 49 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["e/3"], duration: "h", midiValue: 52 },
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "h", midiValue: 52 },
             { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["d/3"], duration: "h", midiValue: 50 }
        ] },


    // --- Circle of Fifths Progressions (12 Bars) ---
    { id: "circle-fifths-maj7-C", name: "Circle of Fifths (Maj7 - start C)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 1, notesTreble: [ // C | F | Bb | Eb | Ab | Db | Gb | B | E | A | D | G
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }, // CMaj7
            { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] }, // FMaj7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["eb/4", "g/4", "bb/4", "d/5"], duration: "w", midiValues: [63, 67, 70, 74] }, // EbMaj7
            { keys: ["ab/3", "c/4", "eb/4", "g/4"], duration: "w", midiValues: [56, 60, 63, 67] }, // AbMaj7
            { keys: ["db/4", "f/4", "ab/4", "c/5"], duration: "w", midiValues: [61, 65, 68, 72] }, // DbMaj7
            { keys: ["gb/3", "bb/3", "db/4", "f/4"], duration: "w", midiValues: [54, 58, 61, 65] }, // GbMaj7
            { keys: ["b/3", "d#/4", "f#/4", "a#/4"], duration: "w", midiValues: [59, 63, 66, 70] }, // BMaj7
            { keys: ["e/4", "g#/4", "b/4", "d#/5"], duration: "w", midiValues: [64, 68, 71, 75] }, // EMaj7
            { keys: ["a/3", "c#/4", "e/4", "g#/4"], duration: "w", midiValues: [57, 61, 64, 68] }, // AMaj7
            { keys: ["d/4", "f#/4", "a/4", "c#/5"], duration: "w", midiValues: [62, 66, 69, 73] }, // DMaj7
            { keys: ["g/4", "b/4", "d/5", "f#/5"], duration: "w", midiValues: [67, 71, 74, 78] }  // GMaj7
        ], notesBass: [
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["bb/2"], duration: "w", midiValue: 46 },
            { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["ab/2"], duration: "w", midiValue: 44 }, { keys: ["db/3"], duration: "w", midiValue: 49 },
            { keys: ["gb/2"], duration: "w", midiValue: 42 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["e/3"], duration: "w", midiValue: 52 },
            { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 }
        ] },
    { id: "circle-fifths-dom7-C", name: "Circle of Fifths (Dom7 - start C7)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 1, notesTreble: [ // C7 | F7 | Bb7 | Eb7 | Ab7 | Db7 | Gb7 | B7 | E7 | A7 | D7 | G7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "ab/4"], duration: "w", midiValues: [58, 62, 65, 68] }, // Bb7
            { keys: ["eb/4", "g/4", "bb/4", "db/5"], duration: "w", midiValues: [63, 67, 70, 73] }, // Eb7
            { keys: ["ab/3", "c/4", "eb/4", "gb/4"], duration: "w", midiValues: [56, 60, 63, 66] }, // Ab7
            { keys: ["db/4", "f/4", "ab/4", "cb/5"], duration: "w", midiValues: [61, 65, 68, 71] }, // Db7
            { keys: ["gb/3", "bb/3", "db/4", "e/4"], duration: "w", midiValues: [54, 58, 61, 64] }, // Gb7 (enharmonic F#7)
            { keys: ["b/3", "d#/4", "f#/4", "a/4"], duration: "w", midiValues: [59, 63, 66, 69] }, // B7
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, // E7
            { keys: ["a/3", "c#/4", "e/4", "g/4"], duration: "w", midiValues: [57, 61, 64, 67] }, // A7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }  // G7
        ], notesBass: [
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["bb/2"], duration: "w", midiValue: 46 },
             { keys: ["eb/3"], duration: "w", midiValue: 51 }, { keys: ["ab/2"], duration: "w", midiValue: 44 }, { keys: ["db/3"], duration: "w", midiValue: 49 },
             { keys: ["gb/2"], duration: "w", midiValue: 42 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["e/3"], duration: "w", midiValue: 52 },
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 }
        ] },
     { id: "circle-fifths-ii-V-I-C", name: "Circle of Fifths (ii-V-I chunks in C)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2, notesTreble: [ // Dm7 | G7 | CMaj7 | CMaj7 | Gm7 | C7 | FMaj7 | FMaj7 | Cm7 | F7 | BbMaj7 | BbMaj7
            { keys: ["d/4", "f/4", "a/4", "c/5"], duration: "w", midiValues: [62, 65, 69, 72] }, // Dm7
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }, // CMaj7
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }, // CMaj7
            { keys: ["g/3", "bb/3", "d/4", "f/4"], duration: "w", midiValues: [55, 58, 62, 65] }, // Gm7
            { keys: ["c/4", "e/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 64, 67, 70] }, // C7
            { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] }, // FMaj7
            { keys: ["f/4", "a/4", "c/5", "e/5"], duration: "w", midiValues: [65, 69, 72, 76] }, // FMaj7
            { keys: ["c/4", "eb/4", "g/4", "bb/4"], duration: "w", midiValues: [60, 63, 67, 70] }, // Cm7
            { keys: ["f/4", "a/4", "c/5", "eb/5"], duration: "w", midiValues: [65, 69, 72, 75] }, // F7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // BbMaj7
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }  // BbMaj7
        ], notesBass: [
             { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
             { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["f/2"], duration: "w", midiValue: 41 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }
        ] },

    // --- Progressions with Secondary Dominants (12 bars) ---
     { id: "secondary-dom-Cmaj-V7-vi", name: "Secondary Dom V7/vi (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3, notesTreble: [ // C | C | E7 | Am | F | C/G | G7 | C | C | E7 | Am | G7
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, // E7 (V7/vi)
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am (vi)
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
            { keys: ["g/4", "c/5", "e/5"], duration: "w", midiValues: [67, 72, 76] }, // C/G (I inversion)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["e/4", "g#/4", "b/4", "d/5"], duration: "w", midiValues: [64, 68, 71, 74] }, // E7 (V7/vi)
            { keys: ["a/4", "c/5", "e/5"], duration: "w", midiValues: [69, 72, 76] }, // Am (vi)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }  // G7
        ], notesBass: [
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["e/3"], duration: "w", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 },
            { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["e/3"], duration: "w", midiValue: 52 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["g/2"], duration: "w", midiValue: 43 }
        ] },
    { id: "secondary-dom-Cmaj-V7-V", name: "Secondary Dom V7/V (C Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3, notesTreble: [ // C | F | D7 | G7 | C | F | D7 | G7 | C | G7 | C | C
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7 (V7/V)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (V)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7 (V7/V)
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (V)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // C
        ], notesBass: [
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["c/3"], duration: "w", midiValue: 48 }
        ] },
     { id: "secondary-dom-Gmaj-V7-IV", name: "Secondary Dom V7/IV (G Maj)", category: "giri_armonici", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3, notesTreble: [ // G | C | G | C | G7 | C | G/D | D7 | G | G | G7 | C -> G
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7 (V7/IV in G is V7/C)
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C (IV)
            { keys: ["d/4", "g/4", "b/4"], duration: "w", midiValues: [62, 67, 71] }, // G/D
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7 (V)
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
            { keys: ["g/4", "b/4", "d/5", "f/5"], duration: "w", midiValues: [67, 71, 74, 77] }, // G7
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // C (resolves back to G implied)
        ], notesBass: [
            { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 },
            { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["d/3"], duration: "w", midiValue: 50 },
            { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["g/3"], duration: "w", midiValue: 55 }, { keys: ["c/3"], duration: "w", midiValue: 48 }
        ] },

    // --- More Pop/Rock Progressions (12 Bars) ---
    { id: "pop-canon-desc-Cmaj", name: "Pop Canon Descending Bass (C)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3, notesTreble: [ // C | G/B | Am | Em/G | F | C/E | Dm | G | C | G/B | Am | G
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["b/3", "d/4", "g/4"], duration: "w", midiValues: [59, 62, 67] }, // G/B
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["g/3", "b/3", "e/4"], duration: "w", midiValues: [55, 59, 64] }, // Em/G
            { keys: ["f/3", "a/3", "c/4"], duration: "w", midiValues: [53, 57, 60] }, // F
            { keys: ["e/3", "g/3", "c/4"], duration: "w", midiValues: [52, 55, 60] }, // C/E
            { keys: ["d/3", "f/3", "a/3"], duration: "w", midiValues: [50, 53, 57] }, // Dm
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] }, // G
            { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
            { keys: ["b/3", "d/4", "g/4"], duration: "w", midiValues: [59, 62, 67] }, // G/B
            { keys: ["a/3", "c/4", "e/4"], duration: "w", midiValues: [57, 60, 64] }, // Am
            { keys: ["g/3", "b/3", "d/4"], duration: "w", midiValues: [55, 59, 62] }  // G
        ], notesBass: [
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["e/2"], duration: "w", midiValue: 40 }, { keys: ["d/2"], duration: "w", midiValue: 38 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["b/2"], duration: "w", midiValue: 47 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["g/2"], duration: "w", midiValue: 43 }
        ] },
    { id: "pop-doo-wop-Cmaj", name: "Doo-Wop I-vi-IV-V (C - Rhythm)", category: "giri_armonici", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4, notesTreble: [ // C | C | Am | Am | F | F | G | G | C | Am | F G | C C
            { keys: ["c/4", "e/4", "g/4"], duration: "q" }, { keys: ["c/4", "e/4", "g/4"], duration: "q" }, { keys: ["r/4"], duration: "h" }, // Quarter, Quarter, Half Rest
            { keys: ["c/4", "e/4", "g/4"], duration: "q" }, { keys: ["c/4", "e/4", "g/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["a/3", "c/4", "e/4"], duration: "q" }, { keys: ["a/3", "c/4", "e/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["a/3", "c/4", "e/4"], duration: "q" }, { keys: ["a/3", "c/4", "e/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["f/3", "a/3", "c/4"], duration: "q" }, { keys: ["f/3", "a/3", "c/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["f/3", "a/3", "c/4"], duration: "q" }, { keys: ["f/3", "a/3", "c/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["g/3", "b/3", "d/4"], duration: "q" }, { keys: ["g/3", "b/3", "d/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["g/3", "b/3", "d/4"], duration: "q" }, { keys: ["g/3", "b/3", "d/4"], duration: "q" }, { keys: ["r/4"], duration: "h" },
            { keys: ["c/4", "e/4", "g/4"], duration: "w" }, // Last 4 bars simpler
            { keys: ["a/3", "c/4", "e/4"], duration: "w" },
            { keys: ["f/3", "a/3", "c/4"], duration: "h" }, { keys: ["g/3", "b/3", "d/4"], duration: "h" },
            { keys: ["c/4", "e/4", "g/4"], duration: "w" }
        ], notesBass: [ // Roots on beat 1
             { keys: ["c/3"], duration: "w" }, { keys: ["c/3"], duration: "w" }, { keys: ["a/2"], duration: "w" }, { keys: ["a/2"], duration: "w" },
             { keys: ["f/2"], duration: "w" }, { keys: ["f/2"], duration: "w" }, { keys: ["g/2"], duration: "w" }, { keys: ["g/2"], duration: "w" },
             { keys: ["c/3"], duration: "w" }, { keys: ["a/2"], duration: "w" }, { keys: ["f/2"], duration: "h" }, { keys: ["g/2"], duration: "h" },
             { keys: ["c/3"], duration: "w" }
         ], midiValuesTreble: [ // Corresponding MIDI values for the above rhythmic pattern
            [60, 64, 67], [60, 64, 67], null, [60, 64, 67], [60, 64, 67], null,
            [57, 60, 64], [57, 60, 64], null, [57, 60, 64], [57, 60, 64], null,
            [53, 57, 60], [53, 57, 60], null, [53, 57, 60], [53, 57, 60], null,
            [55, 59, 62], [55, 59, 62], null, [55, 59, 62], [55, 59, 62], null,
            [60, 64, 67], [57, 60, 64], [53, 57, 60], [55, 59, 62], [60, 64, 67]
         ], midiValuesBass: [ // Corresponding MIDI values for roots
            [48], [48], [45], [45], [41], [41], [43], [43], [48], [45], [41], [43], [48]
         ]}, // Note: This complex rhythm needs careful implementation/testing in the renderer


    // --- Modal Progressions (12 bars) ---
    { id: "modal-dorian-Am", name: "Modal Vamp Dorian (Am - 12 Bars)", category: "giri_armonici", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3, notesTreble: [ // Am7 | D7 | Am7 | D7 | Am7 | D7 | Am7 | D7 | Gmaj7 | Cmaj7 | Am7 | D7
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [57, 60, 64, 67] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7 (Dorian V)
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [57, 60, 64, 67] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [57, 60, 64, 67] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [57, 60, 64, 67] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }, // D7
            { keys: ["g/4", "b/4", "d/5", "f#/5"], duration: "w", midiValues: [67, 71, 74, 78] }, // GMaj7 (Rel Maj)
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }, // CMaj7 (Rel IV)
            { keys: ["a/3", "c/4", "e/4", "g/4"], duration: "w", midiValues: [57, 60, 64, 67] }, // Am7
            { keys: ["d/4", "f#/4", "a/4", "c/5"], duration: "w", midiValues: [62, 66, 69, 72] }  // D7
        ], notesBass: [
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 },
             { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 },
             { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["a/2"], duration: "w", midiValue: 45 }, { keys: ["d/3"], duration: "w", midiValue: 50 }
        ] },
    { id: "modal-lydian-Fmaj", name: "Modal Vamp Lydian (Fmaj - 12 Bars)", category: "giri_armonici", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3, notesTreble: [ // Fmaj7#11 | G7sus4 | Fmaj7#11 | G7sus4 | Fmaj7#11 | G7sus4 | Fmaj7#11 | G7sus4 | Cmaj7 | Bbmaj7 | Fmaj7#11 | G7sus4
            { keys: ["f/3", "a/3", "c/4", "e/4", "b/4"], duration: "w", midiValues: [53, 57, 60, 64, 71] }, // Fmaj7(#11) - B natural is #11
            { keys: ["g/3", "c/4", "d/4", "f/4"], duration: "w", midiValues: [55, 60, 62, 65] }, // G7sus4
            { keys: ["f/3", "a/3", "c/4", "e/4", "b/4"], duration: "w", midiValues: [53, 57, 60, 64, 71] }, // Fmaj7(#11)
            { keys: ["g/3", "c/4", "d/4", "f/4"], duration: "w", midiValues: [55, 60, 62, 65] }, // G7sus4
            { keys: ["f/3", "a/3", "c/4", "e/4", "b/4"], duration: "w", midiValues: [53, 57, 60, 64, 71] }, // Fmaj7(#11)
            { keys: ["g/3", "c/4", "d/4", "f/4"], duration: "w", midiValues: [55, 60, 62, 65] }, // G7sus4
            { keys: ["f/3", "a/3", "c/4", "e/4", "b/4"], duration: "w", midiValues: [53, 57, 60, 64, 71] }, // Fmaj7(#11)
            { keys: ["g/3", "c/4", "d/4", "f/4"], duration: "w", midiValues: [55, 60, 62, 65] }, // G7sus4
            { keys: ["c/4", "e/4", "g/4", "b/4"], duration: "w", midiValues: [60, 64, 67, 71] }, // Cmaj7 (V)
            { keys: ["bb/3", "d/4", "f/4", "a/4"], duration: "w", midiValues: [58, 62, 65, 69] }, // Bbmaj7 (IV)
            { keys: ["f/3", "a/3", "c/4", "e/4", "b/4"], duration: "w", midiValues: [53, 57, 60, 64, 71] }, // Fmaj7(#11)
            { keys: ["g/3", "c/4", "d/4", "f/4"], duration: "w", midiValues: [55, 60, 62, 65] }  // G7sus4
        ], notesBass: [
             { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 },
             { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["bb/2"], duration: "w", midiValue: 46 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }
        ] },
]; // Fine array giriArmoniciExercises

window.exerciseData = window.exerciseData || {};
window.exerciseData.giri_armonici = giriArmoniciExercises;
console.log("Dati Esercizi Giri Armonici (Super Ampliati) Caricati.");