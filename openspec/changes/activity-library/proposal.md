## Why

When someone is dysregulated, knowing what to do is only half the battle — they also need a reminder of how. The activity library gives users a guided, step-by-step re-regulation experience with a curated set of proven techniques, each with an expandable "remind me how" so users who are new to the technique don't have to rely on memory when they're already overwhelmed.

## What Changes

- Build the activity library screen at `/regulate`
- Curated techniques: box breathing, visualization, 5-4-3-2-1 grounding, progressive muscle relaxation (PMR), cold water, movement/shaking
- Each technique shown as a card with: name, 1-sentence description, and an expandable "Remind me how" section with step-by-step instructions
- Guided mode: tapping a technique opens a full-screen step-by-step guided experience (one instruction at a time, with a timer where relevant)
- Entry from quick check-in completion CTA ("I want help right now")
- Accessible directly from home screen as "Need help now?"

## Capabilities

### New Capabilities
- `technique-card`: UI component for a single technique — name, description, expandable instructions
- `technique-data`: Curated data file with all technique definitions (name, description, steps, timer hints)
- `guided-technique`: Full-screen guided mode for a technique — one step at a time, optional countdown timer for timed steps (e.g., box breathing counts)
- `regulate-screen`: The `/regulate` route that lists all techniques as cards

### Modified Capabilities

## Impact

- New route: `/regulate`
- No changes to existing check-in flows beyond the CTA link already specified in Phase 2
- `technique-data` is a plain data file — new techniques can be added without code changes
