## ADDED Requirements

### Requirement: Selector returns exactly 3 prompts
The prompt selector SHALL return exactly 3 prompts given a session context (emotionCategory, intensity, mode).

#### Scenario: 3 prompts returned
- **WHEN** `selectPrompts({ emotionCategory, intensity, mode })` is called with valid context
- **THEN** an array of exactly 3 distinct prompt objects is returned

### Requirement: Selection prioritizes emotion-specific and intensity-matched prompts
The selector SHALL attempt to return: (1) one prompt matching the emotion category, (2) one matching the intensity range, (3) one general ("any") prompt. If a category has fewer than one match, general prompts fill the gap.

#### Scenario: Emotion-specific prompt included
- **WHEN** the user's emotion category is "Sadness"
- **THEN** at least one returned prompt is tagged for the "Sadness" category

#### Scenario: Fallback to general prompts
- **WHEN** no prompts match the specific emotion category
- **THEN** 3 general ("any" category) prompts are returned

### Requirement: Selector falls back gracefully when no session context is provided
The app SHALL display 3 general prompts and a note to start a check-in when the journal prompts screen is loaded without route state.

#### Scenario: No session context
- **WHEN** the user navigates directly to `/journal-prompts` without prior route state
- **THEN** 3 general prompts are shown with a message: "Complete a check-in to get prompts tailored to how you're feeling"
