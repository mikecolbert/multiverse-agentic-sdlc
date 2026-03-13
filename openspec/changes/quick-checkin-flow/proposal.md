## Why

People new to emotional self-regulation benefit most from a low-friction daily touchpoint — something fast enough to do twice a day without it feeling like homework. The quick check-in is that touchpoint: a guided 2-minute wizard that asks how they're feeling, where they feel it, and how intense it is, then surfaces the right next step.

## What Changes

- Build the quick check-in wizard (step-by-step, ~2 minutes)
- Step 1: Emotion selection via a feelings wheel (categorized list of emotions)
- Step 2: Body location text input ("Where do you feel this?")
- Step 3: Intensity rating (1–5 scale)
- Step 4: Summary + completion — records the check-in, updates streak
- Emotional intensity detection logic: flags high-intensity responses for crisis hotline routing (Phase 6 will handle the routing; this phase exposes the signal)
- Re-regulation entry point: at completion, offer "I want help right now" CTA that routes to the activity library (Phase 4)

## Capabilities

### New Capabilities
- `feelings-wheel`: Categorized emotion selection UI (primary emotions → secondary emotions)
- `body-location-input`: Free-text input for describing where in the body an emotion is felt
- `intensity-rating`: 1–5 scale rating component with accessible labels
- `checkin-wizard`: Step-by-step wizard shell that orchestrates steps, tracks progress, and saves results on completion
- `checkin-record`: Data model and storage schema for a single completed check-in (emotion, body location, intensity, timestamp, mode)

### Modified Capabilities
- `streak-tracker`: Trigger `recordCheckIn()` on wizard completion (behavior change: now called from wizard, not manually)

## Impact

- Builds on `pwa-foundation`: uses routing (`/checkin/quick`), storage util, streak tracker, and design system
- `checkin-record` schema used by all future check-in phases
