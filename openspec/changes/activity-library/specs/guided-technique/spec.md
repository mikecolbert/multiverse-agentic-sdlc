## ADDED Requirements

### Requirement: Guided mode presents one step at a time full-screen
The app SHALL open a full-screen guided view when the user taps "Guide me through it", showing one step at a time with a "Next" button to advance.

#### Scenario: Guided mode opens
- **WHEN** the user taps "Guide me through it" on a technique card
- **THEN** a full-screen view opens showing Step 1 of the technique with a "Next" button

#### Scenario: User advances through steps
- **WHEN** the user taps "Next"
- **THEN** the next step is shown; if on the last step, a "Done" button appears instead

#### Scenario: User can exit guided mode
- **WHEN** guided mode is active
- **THEN** a visible "Exit" or close button is available at all times that returns to the regulate screen

### Requirement: Timed steps show a visual countdown
Steps with a `duration` field SHALL display a countdown timer (seconds) that starts automatically when the step appears.

#### Scenario: Timed step countdown
- **WHEN** the user reaches a step with a `duration` value
- **THEN** a countdown from that duration starts and is visually displayed (number or progress indicator)

#### Scenario: Countdown completes
- **WHEN** the countdown reaches zero
- **THEN** the "Next" button is highlighted or auto-advances (after a brief pause) to the next step

### Requirement: Guided mode ends with a grounding close
The final screen in guided mode SHALL display a brief closing message ("Take a moment to notice how you feel now") before returning the user to the regulate screen or home.

#### Scenario: Closing message shown
- **WHEN** the user taps "Done" on the last step
- **THEN** a closing screen with a grounding message is shown with options to try another technique or go home
