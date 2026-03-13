## ADDED Requirements

### Requirement: Each technique is displayed as a card
The regulate screen SHALL render one card per technique showing: technique name, tagline, an expandable "Remind me how" section, and a "Guide me through it" button.

#### Scenario: Card renders required elements
- **WHEN** the regulate screen loads
- **THEN** each technique card shows the name, tagline, "Remind me how" toggle, and "Guide me through it" button

### Requirement: "Remind me how" expands inline
The app SHALL expand a numbered list of steps for a technique inline within the card when the user taps "Remind me how", without navigating away.

#### Scenario: Steps expanded
- **WHEN** the user taps "Remind me how" on a card
- **THEN** the step list expands below the tagline within the card

#### Scenario: Steps collapsed
- **WHEN** the user taps "Remind me how" again on an expanded card
- **THEN** the step list collapses and the card returns to its compact state

### Requirement: Only one card is expanded at a time
The regulate screen SHALL collapse any open "Remind me how" section when a different card's toggle is tapped.

#### Scenario: Second card expanded
- **WHEN** Card A's steps are visible and the user taps "Remind me how" on Card B
- **THEN** Card A collapses and Card B expands
