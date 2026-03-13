## ADDED Requirements

### Requirement: Feelings wheel presents primary emotion categories
The app SHALL display a list of 6–8 primary emotion categories (e.g., Joy, Sadness, Anger, Fear, Disgust, Surprise, Shame, Love) for the user to select from in Step 1 of the wizard.

#### Scenario: Categories displayed
- **WHEN** the user reaches the emotion selection step
- **THEN** all primary emotion categories are visible as selectable options

#### Scenario: One category selected
- **WHEN** the user taps a primary emotion category
- **THEN** that category is highlighted and the specific emotion list for that category appears

### Requirement: Specific emotions are shown after category selection
The app SHALL display 4–6 specific emotions nested under the selected category for the user to choose their most resonant emotion.

#### Scenario: Specific emotions shown
- **WHEN** the user selects a primary category
- **THEN** 4–6 specific emotions for that category are displayed

#### Scenario: Specific emotion selected
- **WHEN** the user taps a specific emotion
- **THEN** that emotion is recorded as the selected emotion and the wizard advances to the next step

### Requirement: Fallback option is always available
The app SHALL include an "I'm not sure / something else" option at the category level so users are never stuck.

#### Scenario: Fallback selected
- **WHEN** the user taps "I'm not sure / something else"
- **THEN** the wizard advances to the next step with a neutral emotion value recorded
