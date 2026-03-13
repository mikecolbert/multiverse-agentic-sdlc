## Context

Users arrive at the activity library in two states: (1) from check-in completion via CTA, already somewhat grounded, or (2) directly when dysregulated. The library must be immediately scannable — no decision fatigue. Cards present all techniques at once so users can choose what resonates. Guided mode removes cognitive load during the technique itself.

## Goals / Non-Goals

**Goals:**
- Six curated techniques, each with scannable card + expandable "Remind me how" + full guided mode
- Timed steps (box breathing counts, PMR hold times) handled with a simple countdown in guided mode
- Data-driven: techniques defined in a single file, UI components are generic
- Accessible from both check-in completion and home screen

**Non-Goals:**
- Personalization or recommendation engine (show all techniques equally)
- Tracking which techniques users have used
- Video or audio content
- User-added custom techniques

## Decisions

**All techniques shown simultaneously, no filtering**
Users in distress shouldn't have to answer questions to find a technique. Showing all 6 with clear names and 1-sentence descriptions lets them quickly pick what feels right. Filtering is a premature optimization.

**Expandable "Remind me how" on the card vs. always-visible**
Experienced users don't need instructions — they just need to start. The expand pattern serves both newcomers (expand for instructions) and returning users (tap straight into guided mode).

**Guided mode is full-screen, one step at a time**
Reduces visual noise when a user is dysregulated. They shouldn't be reading a list of steps — they should be doing one thing. A simple "Next" button advances through steps.

**Timer is opt-in within guided mode**
Box breathing and PMR have natural timing. A visual countdown (CSS animation or simple setInterval) is shown for steps with a `duration` field in the data. No timer for steps that are experiential (e.g., "notice how you feel").

**Technique data as TypeScript const, not a JSON file**
TypeScript gives type safety and IDE autocomplete during authoring. The data doesn't need to be runtime-editable — updating techniques means updating the file and redeploying, which is appropriate for a curated library.

## Risks / Trade-offs

- [6 cards may feel like a lot when overwhelmed] → Cards are compact; consider a "Feeling overwhelmed? Start here" pinned suggestion in v2
- [Timer accuracy with setInterval] → Acceptable for breathing exercises; no need for Web Workers at this precision

## Open Questions

- Should cold water and movement techniques have timers? → No, they are experiential — just step-by-step text is sufficient
