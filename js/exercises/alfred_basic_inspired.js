/**
 * js/exercises/alfred_basic_inspired.js
 * Esercizi ISPIRATI AI CONCETTI dei primi livelli di Alfred's Basic Piano Library.
 * ATTENZIONE: Questi NON sono trascrizioni dirette e sono creati per simulare
 * la progressione pedagogica nel rispetto del copyright.
 * Adatto per Piano Future - Copyright (c) 2025 Lorenzetti Giuseppe
 */

const alfredBasicInspiredExercises = [

    // === Ispirato a Livello 1A/1B: Posizione Do Centrale ===
    { id: "alfred-insp-1a-midC-RHstep", name: "Alfred Inspired 1A: Passi RH (Pos. Do Centrale)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "h" } ] },
    { id: "alfred-insp-1a-midC-LHstep", name: "Alfred Inspired 1A: Passi LH (Pos. Do Centrale)", category: "alfred_basic_inspired", staveLayout: "single", clef: "bass", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notes: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["r/4"], duration: "h" } ] },
    { id: "alfred-insp-1a-midC-Together", name: "Alfred Inspired 1A: Mani Unite Semplici (Pos. Do Centrale)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 }, { keys: ["b/2"], duration: "h", midiValue: 47 } ] },
    { id: "alfred-insp-1a-midC-LongTones", name: "Alfred Inspired 1A: Note Lunghe (Pos. Do Centrale)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["e/4"], duration: "w", midiValue: 64 } ],
        notesBass: [ { keys: ["a/2"], duration: "w", midiValue: 45 } ] },

    // === Ispirato a Livello 1B: Posizione C (Do Magg 5 Dita) ===
    { id: "alfred-insp-1b-cPos-RHmelody", name: "Alfred Inspired 1B: Melodia RH (Pos. C)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ] },
    { id: "alfred-insp-1b-cPos-LHmelody", name: "Alfred Inspired 1B: Melodia LH (Pos. C)", category: "alfred_basic_inspired", staveLayout: "single", clef: "bass", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ] },
    { id: "alfred-insp-1b-cPos-Parallel", name: "Alfred Inspired 1B: Moto Parallelo (Pos. C)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 } ] },
    { id: "alfred-insp-1b-cPos-LHchords", name: "Alfred Inspired 1B: Accomp. LH Accordo C (Pos. C)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ],
        notesBass: [ { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] }, { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] } ] }, // Accordo C
    { id: "alfred-insp-1b-cPos-LHv7chords", name: "Alfred Inspired 1B: Accomp. LH Accordo G7 (Pos. C)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["f/4"], duration: "h", midiValue: 65 } ],
        notesBass: [ { keys: ["g/2", "b/2", "f/3"], duration: "w", midiValues: [43, 47, 53] }, { keys: ["g/2", "b/2", "f/3"], duration: "w", midiValues: [43, 47, 53] } ] }, // Accordo G7 shell

    // === Ispirato a Livello 1B: Posizione G (Sol Magg 5 Dita) ===
    { id: "alfred-insp-1b-gPos-RHmelody", name: "Alfred Inspired 1B: Melodia RH (Pos. G)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["b/4"], duration: "h", midiValue: 71 } ] },
    { id: "alfred-insp-1b-gPos-LHmelody", name: "Alfred Inspired 1B: Melodia LH (Pos. G)", category: "alfred_basic_inspired", staveLayout: "single", clef: "bass", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["b/2"], duration: "h", midiValue: 47 } ] },
    { id: "alfred-insp-1b-gPos-Parallel", name: "Alfred Inspired 1B: Moto Parallelo (Pos. G)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 } ],
        notesBass: [ { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["a/2"], duration: "q", midiValue: 45 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "q", midiValue: 45 } ] },
    { id: "alfred-insp-1b-gPos-LHchords", name: "Alfred Inspired 1B: Accomp. LH Accordo G (Pos. G)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["d/5"], duration: "h", midiValue: 74 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ],
        notesBass: [ { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] }, { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] } ] }, // Accordo G
    { id: "alfred-insp-1b-gPos-LHv7chords", name: "Alfred Inspired 1B: Accomp. LH Accordo D7 (Pos. G)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ],
        notesBass: [ { keys: ["d/3", "f#/3", "c/4"], duration: "w", midiValues: [50, 54, 60] }, { keys: ["d/3", "f#/3", "c/4"], duration: "w", midiValues: [50, 54, 60] } ] }, // Accordo D7 shell (F# è alterazione)

    // === Ispirato a Livello 2: Introduzione Crome, Staccato, Legato ===
    { id: "alfred-insp-2-eighths-RH", name: "Alfred Inspired 2: Crome RH (Pos. C)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 } ] },
    { id: "alfred-insp-2-staccato-RH", name: "Alfred Inspired 2: Staccato RH (Pos. C)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8"}, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["r/4"], duration: "8"}, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["r/4"], duration: "8"}, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["r/4"], duration: "8"} ] }, // Simula staccato con pause
    { id: "alfred-insp-2-legato-RH", name: "Alfred Inspired 2: Legato RH (Pos. C)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "w", midiValue: 67 } ] }, // Legato implicito da note lunghe connesse
     { id: "alfred-insp-2-hands-together-8th", name: "Alfred Inspired 2: Crome Mani Unite (Pos. C)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
    { id: "alfred-insp-2-crossover-RH", name: "Alfred Inspired 2: Scavalcamento Pollice RH (C Maj Scale)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 } ] }, // Scala ascendente

    // === Ispirato a Livello 2: Posizione F (Fa Magg 5 Dita) ===
     { id: "alfred-insp-2-fPos-RHmelody", name: "Alfred Inspired 2: Melodia RH (Pos. F)", category: "alfred_basic_inspired", staveLayout: "single", clef: "treble", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "q", midiValue: 70 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["a/4"], duration: "h", midiValue: 69 } ] },
     { id: "alfred-insp-2-fPos-LHchords", name: "Alfred Inspired 2: Accomp. LH Accordo F (Pos. F)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["bb/4"], duration: "h", midiValue: 70 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ],
        notesBass: [ { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] }, { keys: ["f/2", "a/2", "c/3"], duration: "w", midiValues: [41, 45, 48] } ] }, // Accordo F
     { id: "alfred-insp-2-fPos-LHv7chords", name: "Alfred Inspired 2: Accomp. LH Accordo C7 (Pos. F)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["bb/4"], duration: "h", midiValue: 70 } ],
        notesBass: [ { keys: ["c/3", "e/3", "bb/3"], duration: "w", midiValues: [48, 52, 58] }, { keys: ["c/3", "e/3", "bb/3"], duration: "w", midiValues: [48, 52, 58] } ] }, // Accordo C7 shell

    // === Pattern Ritmici / Coordinazione semplici ===
     { id: "alfred-insp-sync-simple", name: "Alfred Inspired: Sincope Semplice", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["r/4"], duration: "8" }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "h", midiValue: 48 } ] },
     { id: "alfred-insp-hold-LH-move-RH", name: "Alfred Inspired: LH Tiene, RH Muove", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 } ],
        notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 } ] },
     { id: "alfred-insp-hold-RH-move-LH", name: "Alfred Inspired: RH Tiene, LH Muove", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["g/4"], duration: "w", midiValue: 67 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 } ] },
        { id: "alfred-insp-4-cMajScale-2oct", name: "Alfred Inspired 4: Scala C Magg (2 Ottave)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Ascendente
                { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
                { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
                { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
                { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["r/4"], duration: "q" } // Breve pausa
                 // Aggiungere discesa se desiderato
            ],
            notesBass: [ // Ascendente ottava sotto
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
                { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
                { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
                { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["r/4"], duration: "q" }
            ] },
        { id: "alfred-insp-4-aMinScaleHarm-2oct", name: "Alfred Inspired 4: Scala Am Armonica (2 Ottave)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Ascendente
                { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
                { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, // Prima ottava
                { keys: ["b/5"], duration: "8", midiValue: 83 }, { keys: ["c/6"], duration: "8", midiValue: 84 }, { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["e/6"], duration: "8", midiValue: 88 },
                { keys: ["f/6"], duration: "8", midiValue: 89 }, { keys: ["g#/6"], duration: "8", midiValue: 92 }, { keys: ["a/6"], duration: "q", midiValue: 93 }, { keys: ["r/4"], duration: "q" } // Seconda ottava
            ],
            notesBass: [ // Ascendente ottava sotto
                { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
                { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
                { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 },
                { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g#/5"], duration: "8", midiValue: 80 }, { keys: ["a/5"], duration: "q", midiValue: 81 }, { keys: ["r/4"], duration: "q" }
            ] },
    
        // --- Arpeggi (Triadi e Settima) ---
        { id: "alfred-insp-4-cMajArp-2oct", name: "Alfred Inspired 4: Arpeggio C Magg (2 Ottave)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [
                { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
                { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["c/6"], duration: "q", midiValue: 84 }, { keys: ["r/4"], duration: "q" },
                 // Aggiungere discesa se desiderato
            ],
            notesBass: [
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
                { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["r/4"], duration: "q" }
            ] },
         { id: "alfred-insp-5-g7Arp-1oct", name: "Alfred Inspired 5: Arpeggio G7 (1 Ottava)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
            notesTreble: [
                { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
                { keys: ["g/5"], duration: "q", midiValue: 79 }, { keys: ["r/4"], duration: "q" },
            ],
            notesBass: [
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 },
                { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["r/4"], duration: "q" }
            ] },
    
        // --- Accompagnamenti e Pattern LH ---
        { id: "alfred-insp-4-alberti-Cmaj", name: "Alfred Inspired 4: Basso Albertino (C Maj)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
            notesTreble: [ // Melodia semplice
                { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
                { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
            ],
            notesBass: [ // Pattern Alberti C -> G7
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 },
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 },
            ] },
        { id: "alfred-insp-5-brokenOctavesLH-Am", name: "Alfred Inspired 5: Ottave Spezzate LH (Am)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "Am", timeSignature: "4/4", repetitions: 3,
            notesTreble: [ // Melodia semplice sopra
                 { keys: ["e/5"], duration: "h", midiValue: 76 }, { keys: ["d/5"], duration: "h", midiValue: 74 },
                 { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 }
            ],
            notesBass: [ // Ottave spezzate Am -> E7
                { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
                { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["a/2"], duration: "8", midiValue: 45 }, { keys: ["a/3"], duration: "8", midiValue: 57 },
                { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
                { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["e/4"], duration: "8", midiValue: 64 }
            ] },
    
        // --- Melodie di Pubblico Dominio con Accompagnamento Livello 4/5 ---
        { id: "alfred-insp-4-amazingGrace-G", name: "Alfred Inspired 4: Amazing Grace (G Maj)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "3/4", repetitions: 2,
            notesTreble: [ // Melodia
                 { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
                 { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
                 { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "h", midiValue: 69 },
                 { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
                 { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
                 { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["g/4"], duration: "h", midiValue: 67 },
                 { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["d/5"], duration: "q", midiValue: 74 },
                 { keys: ["d/5"], duration: "h", midiValue: 74 }
            ],
            notesBass: [ // Accomp. accordi G, C, G, D
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }, // G
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }, // G
                { keys: ["c/3", "e/3", "g/3"], duration: "h.", midiValues: [48, 52, 55] }, // C
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }, // G
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }, // G
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }, // G
                { keys: ["d/3", "f#/3", "a/3"], duration: "h.", midiValues: [50, 54, 57] }, // D
                { keys: ["g/2", "b/2", "d/3"], duration: "h.", midiValues: [43, 47, 50] }  // G
            ] },
        { id: "alfred-insp-5-odeToJoy-C", name: "Alfred Inspired 5: Ode to Joy (C Maj)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Melodia
                 { keys: ["b/4"], duration: "q", midiValue: 64 }, { keys: ["b/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 },
                 { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["b/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
                 { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["b/4"], duration: "q", midiValue: 64 },
                 { keys: ["b/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d/4"], duration: "h", midiValue: 62 }
                 //... continua melodia
            ],
            notesBass: [ // Accomp. Alberti Bass
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, // C
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, // C
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, // G
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, // G
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, // C
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, // C
                { keys: ["g/2"], duration: "8", midiValue: 43 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["b/2"], duration: "8", midiValue: 47 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, // G
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["g/3"], duration: "8", midiValue: 55 }  // C
            ] },
    
        // --- Tecnica e Coordinazione ---
         { id: "alfred-insp-5-syncopation-adv", name: "Alfred Inspired 5: Sincope Avanzata", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 3,
            notesTreble: [
                { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["r/4"], duration: "8" }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
                { keys: ["r/4"], duration: "8" }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }
            ],
            notesBass: [
                 { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["bb/2"], duration: "q", midiValue: 46 }, { keys: ["f/2"], duration: "q", midiValue: 41 },
                 { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 }
            ] },
         { id: "alfred-insp-5-handCrossing", name: "Alfred Inspired 5: Incrocio Mani Semplice", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
            notesTreble: [ // RH suona basso
                 { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }
            ],
            notesBass: [ // LH suona alto
                 { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }
            ] },
         { id: "alfred-insp-4-legatoPedaling-concept", name: "Alfred Inspired 4: Studio Legato (Pedale Conc.)", category: "alfred_basic_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [
                { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, // C
                { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, // F
                { keys: ["g/4", "b/4", "d/5"], duration: "w", midiValues: [67, 71, 74] }, // G
                { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }  // C
                // Idea: tenere le note con il pedale (non simulabile direttamente qui)
            ],
            notesBass: [
                 { keys: ["c/3"], duration: "w", midiValue: 48 },
                 { keys: ["f/2"], duration: "w", midiValue: 41 },
                 { keys: ["g/2"], duration: "w", midiValue: 43 },
                 { keys: ["c/3"], duration: "w", midiValue: 48 }
            ] },
]; // Fine array alfredBasicInspiredExercises

// Rendi accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.alfred_basic_inspired = alfredBasicInspiredExercises;

console.log("Dati Esercizi ISPIRATI a Alfred Basic (NON COPIATI) Caricati.");