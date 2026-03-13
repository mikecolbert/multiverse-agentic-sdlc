## Why

For people new to therapy, journaling is one of the most powerful tools for processing emotions — but staring at a blank page is daunting. Surfacing context-aware prompts at the end of a check-in bridges the gap between the app experience and paper journaling, giving users a starting point rather than silence.

## What Changes

- Build a journal prompts screen at `/journal-prompts`
- Display 3 curated prompts based on the emotional context of the current session (emotion category, intensity, day rating)
- Prompts are display-only — no text input in the app, user writes in a paper journal
- Curated prompt library organized by emotion category, intensity level, and flow type (quick vs. reflective)
- Accessible from reflective flow closing screen and (secondary) from quick check-in completion

## Capabilities

### New Capabilities
- `prompt-data`: Curated data file with journal prompts tagged by emotion category, intensity range, and context (quick | reflective | any)
- `prompt-selector`: Logic to select 3 relevant prompts from the library given a session's emotional context
- `journal-prompts-screen`: Screen that displays selected prompts with a gentle instruction to write in a paper journal

### Modified Capabilities

## Impact

- New route: `/journal-prompts`
- Receives session context via React Router state (emotion, intensity, dayRating, mode) — no localStorage reads needed
- Phase 3 (reflective flow) already links to this route from its closing screen
