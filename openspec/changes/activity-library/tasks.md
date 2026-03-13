## 1. Technique Data

- [ ] 1.1 Create `src/data/techniques.ts` with TypeScript types: `TechniqueStep` (text, optional duration), `Technique` (id, name, tagline, steps)
- [ ] 1.2 Author box breathing entry: 4-step cycle (inhale 4s, hold 4s, exhale 4s, hold 4s) with durations
- [ ] 1.3 Author 5-4-3-2-1 grounding entry: 5 steps, one sense each, no timers
- [ ] 1.4 Author visualization entry: guided calm-place visualization, no timers
- [ ] 1.5 Author PMR (progressive muscle relaxation) entry: 6 muscle groups, 5s hold each
- [ ] 1.6 Author cold water entry: step-by-step instructions, no timers
- [ ] 1.7 Author movement/shaking entry: shake-out and movement steps, no timers

## 2. Technique Card Component

- [ ] 2.1 Build `TechniqueCard` component accepting a `Technique` prop
- [ ] 2.2 Implement expandable "Remind me how" with accordion behavior (one open at a time)
- [ ] 2.3 Add "Guide me through it" button linking to guided mode for that technique
- [ ] 2.4 Style with design tokens — warm card surface, clear hierarchy

## 3. Guided Technique Component

- [ ] 3.1 Build `GuidedTechnique` component with step-by-step state
- [ ] 3.2 Render current step text, step counter (e.g., "Step 2 of 8"), Next/Done button
- [ ] 3.3 Implement countdown timer for steps with `duration` field (setInterval, visual display)
- [ ] 3.4 Auto-advance or highlight Next after countdown completes
- [ ] 3.5 Build closing screen with grounding message, "Try another" and "Go home" options
- [ ] 3.6 Add persistent "Exit" button to return to regulate screen at any time

## 4. Regulate Screen

- [ ] 4.1 Build `RegulateScreen` component at `/regulate`
- [ ] 4.2 Add calming header message
- [ ] 4.3 Render all techniques as `TechniqueCard` components from data file
- [ ] 4.4 Add "Need help now?" button to home screen linking to `/regulate`

## 5. Routing

- [ ] 5.1 Add `/regulate` route to React Router config
- [ ] 5.2 Add `/regulate/:techniqueId` route for guided mode (or use query param)
- [ ] 5.3 Verify CTA from quick check-in completion routes correctly to `/regulate`
