## Why

The quick check-in captures a snapshot, but deeper regulation and self-awareness comes from reflection. The end-of-day reflective flow gives users a structured 5-minute space to look back at their day, identify patterns, and close out the emotional loop — especially valuable for people just learning to notice and name their feelings.

## What Changes

- Build the reflective check-in wizard (~5 minutes, always available, labeled "End of Day Reflection")
- Reuses the feelings wheel, body location input, and intensity rating from the quick check-in
- Adds additional steps: "How was your day overall?", "What was the high point?", "What was hard?", and a closing affirmation
- Saves a reflective check-in record (mode="reflective") to localStorage
- Surfaces journal prompts at the end based on the session's emotional content (Phase 5 provides the prompts; this phase creates the hook)

## Capabilities

### New Capabilities
- `reflective-wizard`: Extended wizard with additional day-review steps, reusing existing step components
- `day-overview-step`: "How was your day overall?" rating step (Good / Mixed / Tough — 3-option selector)
- `highlight-lowlight-step`: Two optional free-text prompts ("What was a high point?" / "What was hard today?") — session-only, not persisted
- `closing-affirmation`: Final screen with a warm closing message before showing journal prompts

### Modified Capabilities
- `checkin-record`: Add `dayRating` ("good" | "mixed" | "tough" | null) field to support reflective mode records

## Impact

- Reuses `feelings-wheel`, `body-location-input`, `intensity-rating`, `checkin-wizard` shell from Phase 2
- `checkin-record` schema gets one new optional field (`dayRating`)
- Phase 5 (journal prompts) hooks into the reflective flow's closing screen
