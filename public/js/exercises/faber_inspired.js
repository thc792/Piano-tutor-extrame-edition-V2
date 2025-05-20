/**
 * js/exercises/faber_inspired.js
 * Esercizi ISPIRATI AI CONCETTI dei primi livelli di Faber Piano Adventures.
 * ATTENZIONE: Questi NON sono trascrizioni dirette e sono creati per simulare
 * la progressione pedagogica nel rispetto del copyright.
 * Adatto per Piano Future - Copyright (c) 2025 Lorenzetti Giuseppe
 */

const faberInspiredExercises = [

    // === Ispirato a Primer/Level 1: Area Do Centrale / Gruppi Tasti Neri ===
    // (Difficile simulare i pre-reading sui tasti neri, partiamo dal Do Centrale)
    { id: "faber-insp-P-midC-RH", name: "Faber Inspired P: RH Do Centrale", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ] },
    { id: "faber-insp-P-midC-LH", name: "Faber Inspired P: LH Do Centrale", category: "faber_inspired", staveLayout: "single", clef: "bass", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notes: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 } ] },
    { id: "faber-insp-P-midC-Together", name: "Faber Inspired P: Mani Unite Do Centrale", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ],
        notesBass: [ { keys: ["b/2"], duration: "h", midiValue: 47 }, { keys: ["a/2"], duration: "h", midiValue: 45 } ] },

    // === Ispirato a Level 1: Posizione C (Do) e Introduzione G ===
    { id: "faber-insp-1-cPos-RHsteps", name: "Faber Inspired 1: Passi RH (Pos C)", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "3/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 } ] },
    { id: "faber-insp-1-cPos-LHskips", name: "Faber Inspired 1: Salti LH (Pos C)", category: "faber_inspired", staveLayout: "single", clef: "bass", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ] },
    { id: "faber-insp-1-cPos-SimpleTogether", name: "Faber Inspired 1: Insieme Semplice (Pos C)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["d/4"], duration: "h", midiValue: 62 }, { keys: ["c/4"], duration: "w", midiValue: 60 } ],
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] },
    { id: "faber-insp-1-cPos-V7intro", name: "Faber Inspired 1: Intro Accordo V7 (Pos C)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["g/4"], duration: "w", midiValue: 67 } ],
        notesBass: [ { keys: ["g/2", "b/2", "f/3"], duration: "w", midiValues: [43, 47, 53] } ] }, // G7 shell
    { id: "faber-insp-1-cPos-I-V7-I", name: "Faber Inspired 1: Giro I-V7-I (Pos C)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["c/4"], duration: "w", midiValue: 60 }, { keys: ["d/4"], duration: "w", midiValue: 62 }, { keys: ["c/4"], duration: "w", midiValue: 60 } ], // Melodia semplice sopra
        notesBass: [ { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] }, { keys: ["g/2", "b/2", "f/3"], duration: "w", midiValues: [43, 47, 53] }, { keys: ["c/3", "e/3", "g/3"], duration: "w", midiValues: [48, 52, 55] } ] }, // C, G7, C

    // === Ispirato a Level 1: Posizione G (Sol) ===
    { id: "faber-insp-1-gPos-RHsteps", name: "Faber Inspired 1: Passi RH (Pos G)", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 } ] },
    { id: "faber-insp-1-gPos-LHskips", name: "Faber Inspired 1: Salti LH (Pos G)", category: "faber_inspired", staveLayout: "single", clef: "bass", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["d/3"], duration: "h", midiValue: 50 }, { keys: ["b/2"], duration: "q", midiValue: 47 }, { keys: ["g/2"], duration: "q", midiValue: 43 } ] },
    { id: "faber-insp-1-gPos-Parallel", name: "Faber Inspired 1: Parallelo (Pos G)", category: "faber_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["b/4"], duration: "h", midiValue: 71 }, { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["d/5"], duration: "w", midiValue: 74 } ],
        notesBass: [ { keys: ["g/3"], duration: "h", midiValue: 55 }, { keys: ["a/3"], duration: "h", midiValue: 57 }, { keys: ["b/3"], duration: "w", midiValue: 59 } ] },
    { id: "faber-insp-1-gPos-I-V7-I", name: "Faber Inspired 1: Giro I-V7-I (Pos G)", category: "faber_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 4,
        notesTreble: [ { keys: ["g/4"], duration: "w", midiValue: 67 }, { keys: ["a/4"], duration: "w", midiValue: 69 }, { keys: ["g/4"], duration: "w", midiValue: 67 } ],
        notesBass: [ { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] }, { keys: ["d/3", "f#/3", "c/4"], duration: "w", midiValues: [50, 54, 60] }, { keys: ["g/2", "b/2", "d/3"], duration: "w", midiValues: [43, 47, 50] } ] }, // G, D7 shell, G

    // === Ispirato a Level 2A: Tecnica, Crome, Espressione ===
    { id: "faber-insp-2a-legatoWalk", name: "Faber Inspired 2A: Camminata Legato", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "h", midiValue: 64 } ] }, // Enfasi sul legato
    { id: "faber-insp-2a-staccatoHop", name: "Faber Inspired 2A: Salti Staccato", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notes: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["r/4"], duration: "8"}, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["r/4"], duration: "8"}, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["r/4"], duration: "8"}, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["r/4"], duration: "8"} ] }, // Simula staccato con pause
    { id: "faber-insp-2a-eighthNotes", name: "Faber Inspired 2A: Crome RH & LH", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ],
        notesBass: [ { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["c/3"], duration: "q", midiValue: 48 } ] },
    { id: "faber-insp-2a-dynamicContrast", name: "Faber Inspired 2A: Contrasto Dinamico (Concetto)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["c/4"], duration: "h", midiValue: 60 } , { keys: ["g/4"], duration: "h", midiValue: 67 }], // Immagina piano poi forte
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 }, { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["e/3"], duration: "h", midiValue: 52 } ] },
    { id: "faber-insp-2a-crossingThumbRH", name: "Faber Inspired 2A: Passaggio Pollice RH (Scala C)", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 } ] },

    // === Ispirato a Level 2A/2B: Scale, Arpeggi Semplici ===
    { id: "faber-insp-2ab-cScaleHandsTogether", name: "Faber Inspired 2A/B: Scala C Mani Unite", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 } ],
        notesBass: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 } ] },
    { id: "faber-insp-2ab-gScaleHandsTogether", name: "Faber Inspired 2A/B: Scala G Mani Unite", category: "faber_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
        notesTreble: [ { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["b/4"], duration: "q", midiValue: 71 }, { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["e/5"], duration: "q", midiValue: 76 }, { keys: ["f#/5"], duration: "q", midiValue: 78 }, { keys: ["g/5"], duration: "q", midiValue: 79 } ],
        notesBass: [ { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["a/3"], duration: "q", midiValue: 57 }, { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["f#/4"], duration: "q", midiValue: 66 }, { keys: ["g/4"], duration: "q", midiValue: 67 } ] },
     { id: "faber-insp-2ab-cArpeggioRH", name: "Faber Inspired 2A/B: Arpeggio C RH", category: "faber_inspired", staveLayout: "single", clef: "treble", keySignature: "C", timeSignature: "3/4", repetitions: 3, // 3/4 per enfatizzare l'arpeggio
        notes: [ { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/5"], duration: "h", midiValue: 72 } ] },
     { id: "faber-insp-2ab-cArpeggioLH", name: "Faber Inspired 2A/B: Arpeggio C LH", category: "faber_inspired", staveLayout: "single", clef: "bass", keySignature: "C", timeSignature: "3/4", repetitions: 3,
        notes: [ { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["c/4"], duration: "h", midiValue: 60 } ] }, // Nota: c/4 nel basso
     { id: "faber-insp-2ab-blockedChords", name: "Faber Inspired 2A/B: Accordi Bloccati I-IV-V7-I (C)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] }, { keys: ["f/4", "a/4", "c/5"], duration: "w", midiValues: [65, 69, 72] }, { keys: ["g/4", "b/4", "f/5"], duration: "w", midiValues: [67, 71, 77] }, { keys: ["c/4", "e/4", "g/4"], duration: "w", midiValues: [60, 64, 67] } ], // C, F, G7(inv), C
        notesBass: [ { keys: ["c/3"], duration: "w", midiValue: 48 }, { keys: ["f/2"], duration: "w", midiValue: 41 }, { keys: ["g/2"], duration: "w", midiValue: 43 }, { keys: ["c/3"], duration: "w", midiValue: 48 } ] },
     { id: "faber-insp-2ab-brokenChords", name: "Faber Inspired 2A/B: Accordi Spezzati I-IV-V7-I (C)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
        notesTreble: [ { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["a/4"], duration: "8", midiValue: 69 } ], // C, F
        notesBass: [ { keys: ["c/3"], duration: "h", midiValue: 48 }, { keys: ["f/2"], duration: "h", midiValue: 41 } ] }, // Continua pattern per G7 e C...
        { id: "faber-insp-4-fMajScale-2oct", name: "Faber Inspired 4: Scala F Magg (2 Ottave)", category: "faber_inspired", staveLayout: "grand", keySignature: "F", timeSignature: "4/4", repetitions: 2,
            notesTreble: [
                { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 },
                { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 },
                { keys: ["g/5"], duration: "8", midiValue: 79 }, { keys: ["a/5"], duration: "8", midiValue: 81 }, { keys: ["bb/5"], duration: "8", midiValue: 82 }, { keys: ["c/6"], duration: "8", midiValue: 84 },
                { keys: ["d/6"], duration: "8", midiValue: 86 }, { keys: ["e/6"], duration: "8", midiValue: 88 }, { keys: ["f/6"], duration: "q", midiValue: 89 }, { keys: ["r/4"], duration: "q" }
            ],
            notesBass: [
                { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "8", midiValue: 55 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["bb/3"], duration: "8", midiValue: 58 },
                { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 },
                { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
                { keys: ["d/5"], duration: "8", midiValue: 74 }, { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "q", midiValue: 77 }, { keys: ["r/4"], duration: "q" }
            ] },
        { id: "faber-insp-4-dMinScaleMelodic-1oct", name: "Faber Inspired 4: Scala Dm Melodica (1 Ottava)", category: "faber_inspired", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Ascendente Melodica (B nat, C#), Discendente Naturale
                { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
                { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c#/5"], duration: "8", midiValue: 73 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
                { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["bb/4"], duration: "8", midiValue: 70 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
                { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["r/4"], duration: "q" }
            ],
            notesBass: [ // Come sopra, un'ottava sotto
                { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
                { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["b/3"], duration: "8", midiValue: 59 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
                { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["bb/3"], duration: "8", midiValue: 58 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
                { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, { keys: ["r/4"], duration: "q" }
            ] },
    
        // --- Arpeggi e Inversioni ---
        { id: "faber-insp-4-gMajArpInv", name: "Faber Inspired 4: Arpeggio G Magg + Inv.", category: "faber_inspired", staveLayout: "grand", keySignature: "G", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Root, 1st Inv, 2nd Inv
                { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }, // G Root
                { keys: ["b/4", "d/5", "g/5"], duration: "q", midiValues: [71, 74, 79] }, // G 1st Inv
                { keys: ["d/5", "g/5", "b/5"], duration: "q", midiValues: [74, 79, 83] }, // G 2nd Inv
                { keys: ["g/4", "b/4", "d/5"], duration: "q", midiValues: [67, 71, 74] }  // G Root
            ],
            notesBass: [ // Radici
                { keys: ["g/3"], duration: "q", midiValue: 55 },
                { keys: ["b/3"], duration: "q", midiValue: 59 },
                { keys: ["d/4"], duration: "q", midiValue: 62 },
                { keys: ["g/3"], duration: "q", midiValue: 55 }
            ] },
         { id: "faber-insp-5-dm7Arp", name: "Faber Inspired 5: Arpeggio Dm7 (1 Ottava)", category: "faber_inspired", staveLayout: "grand", keySignature: "Dm", timeSignature: "4/4", repetitions: 3,
            notesTreble: [
                { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["c/5"], duration: "8", midiValue: 72 },
                { keys: ["d/5"], duration: "q", midiValue: 74 }, { keys: ["r/4"], duration: "q" },
            ],
            notesBass: [
                { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["c/4"], duration: "8", midiValue: 60 },
                { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["r/4"], duration: "q" }
            ] },
    
        // --- Pattern di Accompagnamento LH ---
        { id: "faber-insp-4-lhBrokenChordWaltz", name: "Faber Inspired 4: Accomp. Valzer Spezzato (C Maj)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "3/4", repetitions: 3,
            notesTreble: [ // Melodia semplice
                { keys: ["g/4"], duration: "h", midiValue: 67 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
                { keys: ["f/4"], duration: "h", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
                { keys: ["e/4"], duration: "h", midiValue: 64 }, { keys: ["c/4"], duration: "q", midiValue: 60 },
                { keys: ["d/4"], duration: "h.", midiValue: 62 }
            ],
            notesBass: [ // Pattern C -> G7
                { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // C
                { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/3"], duration: "q", midiValue: 52 }, // C
                { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 }, // G7 inv
                { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/3"], duration: "q", midiValue: 50 }  // G7 inv
            ] },
        { id: "faber-insp-5-lhStrideSimple", name: "Faber Inspired 5: Stride Piano Semplice (C Maj)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
            notesTreble: [ // Melodia semplice
                 { keys: ["c/5"], duration: "h", midiValue: 72 }, { keys: ["b/4"], duration: "h", midiValue: 71 },
                 { keys: ["a/4"], duration: "h", midiValue: 69 }, { keys: ["g/4"], duration: "h", midiValue: 67 }
            ],
            notesBass: [ // Pattern Stride C -> G7
                { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, { keys: ["c/2"], duration: "q", midiValue: 36 }, { keys: ["c/3", "e/3", "g/3"], duration: "q", midiValues: [48, 52, 55] }, // C
                { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/3", "b/3", "f/4"], duration: "q", midiValues: [55, 59, 65] }, { keys: ["g/2"], duration: "q", midiValue: 43 }, { keys: ["g/3", "b/3", "f/4"], duration: "q", midiValues: [55, 59, 65] }  // G7 (shell inv)
            ] },
    
        // --- Melodie di Pubblico Dominio Avanzate ---
        { id: "faber-insp-4-jingleBells-C", name: "Faber Inspired 4: Jingle Bells (C Maj)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [ // Melodia
                 { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
                 { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["e/4"], duration: "h", midiValue: 64 },
                 { keys: ["e/4"], duration: "q", midiValue: 64 }, { keys: ["g/4"], duration: "q", midiValue: 67 }, { keys: ["c/4"], duration: "q.", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 },
                 { keys: ["e/4"], duration: "w", midiValue: 64 }
            ],
            notesBass: [ // Accomp. I-IV-G7-I
                { keys: ["c/3"], duration: "w", midiValue: 48 }, // C
                { keys: ["c/3"], duration: "w", midiValue: 48 }, // C
                { keys: ["f/2"], duration: "h", midiValue: 41 }, { keys: ["g/2"], duration: "h", midiValue: 43 }, // F -> G
                { keys: ["c/3"], duration: "w", midiValue: 48 }  // C
            ] },
        { id: "faber-insp-5-greensleeves-Am", name: "Faber Inspired 5: Greensleeves (Am)", category: "faber_inspired", staveLayout: "grand", keySignature: "Am", timeSignature: "3/4", repetitions: 2,
            notesTreble: [ // Melodia A part
                 { keys: ["a/4"], duration: "q", midiValue: 69 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
                 { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "q", midiValue: 65 }, { keys: ["d/4"], duration: "q", midiValue: 62 },
                 { keys: ["b/3"], duration: "q", midiValue: 59 }, { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, { keys: ["e/4"], duration: "q", midiValue: 64 },
                 { keys: ["c/4"], duration: "h", midiValue: 60 }, { keys: ["a/3"], duration: "q", midiValue: 57 }
            ],
            notesBass: [ // Accomp. i-VII-VI-V (Am G C G Am E Am E)
                { keys: ["d/2"], duration: "h", midiValue: 45 }, // Am
                { keys: ["g/2"], duration: "h", midiValue: 43 }, // G
                { keys: ["f/2"], duration: "h", midiValue: 41 }, // F (VI of Am natural) -> Use C often here?
                { keys: ["e/2"], duration: "h", midiValue: 40 }, // E (V of Am)
                // Simpler: Am | G | C | G | Am | E | Am | E
                 { keys: ["a/2"], duration: "h.", midiValue: 45 }, { keys: ["g/2"], duration: "h.", midiValue: 43 },
                 { keys: ["c/3"], duration: "h.", midiValue: 48 }, { keys: ["g/2"], duration: "h.", midiValue: 43 },
                 { keys: ["a/2"], duration: "h.", midiValue: 45 }, { keys: ["e/2"], duration: "h.", midiValue: 40 },
                 { keys: ["a/2"], duration: "h.", midiValue: 45 }, { keys: ["e/2"], duration: "h.", midiValue: 40 }
            ] },
    
        // --- Tecnica e Coordinazione Avanzate ---
        { id: "faber-insp-5-chromatic-1oct", name: "Faber Inspired 5: Scala Cromatica (1 Ottava)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 2,
            notesTreble: [
                { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["c#/4"], duration: "8", midiValue: 61 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["d#/4"], duration: "8", midiValue: 63 },
                { keys: ["e/4"], duration: "8", midiValue: 64 }, { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["f#/4"], duration: "8", midiValue: 66 }, { keys: ["g/4"], duration: "8", midiValue: 67 },
                { keys: ["g#/4"], duration: "8", midiValue: 68 }, { keys: ["a/4"], duration: "8", midiValue: 69 }, { keys: ["a#/4"], duration: "8", midiValue: 70 }, { keys: ["b/4"], duration: "8", midiValue: 71 },
                { keys: ["c/5"], duration: "q", midiValue: 72 }, { keys: ["r/4"], duration: "q" }
            ],
            notesBass: [ // Moto parallelo ottava sotto
                { keys: ["c/3"], duration: "8", midiValue: 48 }, { keys: ["c#/3"], duration: "8", midiValue: 49 }, { keys: ["d/3"], duration: "8", midiValue: 50 }, { keys: ["d#/3"], duration: "8", midiValue: 51 },
                { keys: ["e/3"], duration: "8", midiValue: 52 }, { keys: ["f/3"], duration: "8", midiValue: 53 }, { keys: ["f#/3"], duration: "8", midiValue: 54 }, { keys: ["g/3"], duration: "8", midiValue: 55 },
                { keys: ["g#/3"], duration: "8", midiValue: 56 }, { keys: ["a/3"], duration: "8", midiValue: 57 }, { keys: ["a#/3"], duration: "8", midiValue: 58 }, { keys: ["b/3"], duration: "8", midiValue: 59 },
                { keys: ["c/4"], duration: "q", midiValue: 60 }, { keys: ["r/4"], duration: "q" }
            ] },
        { id: "faber-insp-5-triplets-vs-duplets", name: "Faber Inspired 5: Terzine vs Duine (Semplice)", category: "faber_inspired", staveLayout: "grand", keySignature: "C", timeSignature: "4/4", repetitions: 3,
            notesTreble: [ // Terzine
                 { keys: ["c/4"], duration: "8", midiValue: 60 }, { keys: ["d/4"], duration: "8", midiValue: 62 }, { keys: ["e/4"], duration: "8", midiValue: 64 },
                 { keys: ["f/4"], duration: "8", midiValue: 65 }, { keys: ["g/4"], duration: "8", midiValue: 67 }, { keys: ["a/4"], duration: "8", midiValue: 69 },
                 { keys: ["b/4"], duration: "8", midiValue: 71 }, { keys: ["c/5"], duration: "8", midiValue: 72 }, { keys: ["d/5"], duration: "8", midiValue: 74 },
                 { keys: ["e/5"], duration: "8", midiValue: 76 }, { keys: ["f/5"], duration: "8", midiValue: 77 }, { keys: ["g/5"], duration: "8", midiValue: 79 },
            ],
            notesBass: [ // Duine (Semiminime)
                 { keys: ["c/3"], duration: "q", midiValue: 48 }, { keys: ["g/3"], duration: "q", midiValue: 55 },
                 { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["c/4"], duration: "q", midiValue: 60 }, // C4 nel basso
                 { keys: ["g/3"], duration: "q", midiValue: 55 }, { keys: ["e/4"], duration: "q", midiValue: 64 }, // E4 nel basso
                 { keys: ["f/3"], duration: "q", midiValue: 53 }, { keys: ["d/4"], duration: "q", midiValue: 62 }, // D4 nel basso
            ] },
]; // Fine array faberInspiredExercises

// Rendi accessibile globalmente
window.exerciseData = window.exerciseData || {};
window.exerciseData.faber_inspired = faberInspiredExercises;

console.log("Dati Esercizi ISPIRATI a Faber Piano Adventures (NON COPIATI) Caricati.");