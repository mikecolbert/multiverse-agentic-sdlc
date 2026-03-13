## ADDED Requirements

### Requirement: Crisis banner is shown when highIntensity is true
The app SHALL display a crisis banner on the check-in completion screen when the completed check-in has `highIntensity: true`.

#### Scenario: Banner shown on high-intensity completion
- **WHEN** a check-in with intensity 4 or 5 is completed
- **THEN** the crisis banner is visible on the completion screen above other content

#### Scenario: Banner not shown on low-intensity completion
- **WHEN** a check-in with intensity 1–3 is completed
- **THEN** no crisis banner is displayed

### Requirement: Crisis banner uses warm, non-alarming copy
The banner SHALL use supportive, non-clinical language that normalizes reaching out, not alarming language that increases anxiety.

#### Scenario: Banner copy is warm
- **WHEN** the crisis banner is rendered
- **THEN** the copy does not include words like "WARNING", "EMERGENCY", "ALERT", or clinical language; it includes a supportive message and a link to crisis resources

### Requirement: Crisis banner is dismissible
The app SHALL allow the user to dismiss the crisis banner without it reappearing in the same session.

#### Scenario: Banner dismissed
- **WHEN** the user taps the dismiss control on the banner
- **THEN** the banner is hidden for the remainder of the session

### Requirement: Crisis banner links to the crisis support screen
The banner SHALL include a link to `/crisis-support`.

#### Scenario: Banner link present
- **WHEN** the crisis banner is rendered
- **THEN** a link or button reading "See support resources" (or similar) is visible and routes to `/crisis-support`
