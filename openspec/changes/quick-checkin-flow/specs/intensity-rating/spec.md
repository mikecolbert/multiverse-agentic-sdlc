## ADDED Requirements

### Requirement: Intensity is rated on a 1–5 labeled scale
The app SHALL present a 1–5 intensity scale in Step 3 with a descriptive label for each value so users new to self-assessment understand what each number means.

#### Scenario: Scale displayed with labels
- **WHEN** the user reaches Step 3
- **THEN** five options are shown, each with a number and a label: 1 = barely noticeable, 2 = mild, 3 = moderate, 4 = strong, 5 = overwhelming

#### Scenario: User selects intensity
- **WHEN** the user taps a value
- **THEN** that value is recorded and the wizard advances to the summary step

### Requirement: High intensity is flagged
The app SHALL mark a check-in as high intensity when the user selects 4 or 5 on the scale.

#### Scenario: Intensity 4 or 5 selected
- **WHEN** the user selects 4 or 5
- **THEN** the check-in record is marked with `highIntensity: true`

#### Scenario: Intensity 1–3 selected
- **WHEN** the user selects 1, 2, or 3
- **THEN** `highIntensity` is `false` on the check-in record
