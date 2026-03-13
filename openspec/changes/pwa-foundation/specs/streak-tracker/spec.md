## ADDED Requirements

### Requirement: Streak is recorded on check-in completion
The app SHALL record the current date (YYYY-MM-DD) when a user completes any check-in (quick or reflective), using the local-storage module.

#### Scenario: First-ever check-in
- **WHEN** a user completes a check-in for the first time
- **THEN** today's date string is added to the stored set of completed days and streak is 1

#### Scenario: Second consecutive day
- **WHEN** a user completes a check-in on the day after their last check-in
- **THEN** the streak count increments by 1

#### Scenario: Duplicate check-in same day
- **WHEN** a user completes a second check-in on a day they already completed one
- **THEN** the date is not duplicated and the streak count does not change

### Requirement: Streak count is computed from stored dates
The app SHALL compute the current streak at runtime by counting consecutive `YYYY-MM-DD` entries backward from today.

#### Scenario: Gap in check-ins
- **WHEN** a user missed one or more days between their last check-in and today
- **THEN** the streak resets to 1 if they complete a check-in today, or 0 if they have not yet checked in today

#### Scenario: Streak displayed on home screen
- **WHEN** the app loads
- **THEN** the current streak count (e.g., "3-day streak") is visible on the home screen

### Requirement: No identifying information is stored
The streak tracker SHALL store only date strings. It SHALL NOT store usernames, device identifiers, IP addresses, or any other personally identifiable information.

#### Scenario: Inspect stored data
- **WHEN** a developer inspects localStorage
- **THEN** only date strings (YYYY-MM-DD) and a count are present under streak-related keys
