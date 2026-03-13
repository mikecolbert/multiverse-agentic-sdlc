## 1. Data & Storage

- [ ] 1.1 Define `CheckInRecord` TypeScript type matching the schema in `checkin-record` spec
- [ ] 1.2 Create `src/lib/checkins.ts` with `saveCheckIn(record)` and `getCheckIns()` functions
- [ ] 1.3 Implement 90-record cap in `saveCheckIn`
- [ ] 1.4 Add `INTENSITY_HIGH_THRESHOLD = 4` constant to `src/lib/constants.ts`

## 2. Feelings Wheel

- [ ] 2.1 Create `src/data/emotions.ts` with curated primary categories and nested specific emotions
- [ ] 2.2 Include "I'm not sure / something else" as a fallback category
- [ ] 2.3 Build `EmotionPicker` component: renders category list, then specific emotion list on selection
- [ ] 2.4 Style with design tokens — warm, approachable selection states

## 3. Body Location Input

- [ ] 3.1 Build `BodyLocationInput` component with optional free-text field
- [ ] 3.2 Add placeholder text examples ("chest, throat, shoulders...")
- [ ] 3.3 Ensure "skip" / empty submission advances wizard without error

## 4. Intensity Rating

- [ ] 4.1 Build `IntensityRating` component with 5 labeled options
- [ ] 4.2 Add labels: 1=barely noticeable, 2=mild, 3=moderate, 4=strong, 5=overwhelming
- [ ] 4.3 Set `highIntensity: true` when value ≥ `INTENSITY_HIGH_THRESHOLD`

## 5. Wizard Shell

- [ ] 5.1 Build `CheckInWizard` component with step state management
- [ ] 5.2 Add step progress indicator ("Step X of 4")
- [ ] 5.3 Add Back navigation (no data loss on back)
- [ ] 5.4 Build summary screen showing emotion, body location, intensity
- [ ] 5.5 On confirm: call `saveCheckIn`, call `recordCheckIn` (streak), navigate to completion screen

## 6. Completion Screen

- [ ] 6.1 Build completion screen with affirming message
- [ ] 6.2 Add "I want help right now" CTA button linking to `/regulate` (Phase 4 route placeholder)
- [ ] 6.3 Add "Go home" link back to `/`

## 7. Routing & Integration

- [ ] 7.1 Replace `/checkin/quick` placeholder with `CheckInWizard` (mode="quick")
- [ ] 7.2 Verify streak updates after completing a quick check-in
- [ ] 7.3 Verify `highIntensity` flag is correctly set in stored records
