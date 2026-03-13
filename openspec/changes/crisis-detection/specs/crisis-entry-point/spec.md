## ADDED Requirements

### Requirement: Home screen has a persistent low-prominence crisis link
The home screen SHALL include a small, always-visible link to `/crisis-support` in a low-prominence location (e.g., footer), separate from primary CTAs.

#### Scenario: Crisis link present on home
- **WHEN** the home screen is rendered
- **THEN** a link labeled "Crisis support" or "In crisis?" is visible without scrolling (or at the bottom of the screen)

#### Scenario: Link routes to crisis support screen
- **WHEN** the user taps the crisis link
- **THEN** they are routed to `/crisis-support`

### Requirement: Crisis entry point does not compete with primary actions
The crisis link SHALL be visually subordinate to the primary check-in CTAs so it does not create anxiety by being overly prominent.

#### Scenario: Visual hierarchy maintained
- **WHEN** the home screen renders
- **THEN** the crisis link is smaller, lower contrast, or otherwise visually de-emphasized compared to the check-in buttons
