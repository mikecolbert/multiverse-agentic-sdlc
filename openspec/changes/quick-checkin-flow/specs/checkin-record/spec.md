## ADDED Requirements

### Requirement: Check-in record has a defined schema
The app SHALL store each completed check-in as a structured record with the following fields: `id` (uuid), `timestamp` (ISO 8601), `mode` ("quick" | "reflective"), `emotionCategory` (string), `emotion` (string), `intensity` (1–5), `highIntensity` (boolean).

#### Scenario: Record created on quick check-in completion
- **WHEN** a quick check-in is completed
- **THEN** a record matching the schema is written to localStorage under `mhci:checkins`

#### Scenario: Record has no PII fields
- **WHEN** a check-in record is inspected
- **THEN** it contains none of: body location text, free-text notes, name, device ID, or IP address

### Requirement: Check-in records are stored as an array
The app SHALL append each new check-in to an array stored at `mhci:checkins`, preserving history across sessions.

#### Scenario: Multiple check-ins stored
- **WHEN** the user completes three check-ins over multiple days
- **THEN** `mhci:checkins` contains an array of three records in chronological order

### Requirement: Records are capped to prevent unbounded growth
The app SHALL retain a maximum of 90 check-in records, dropping the oldest when the cap is exceeded.

#### Scenario: Cap enforced
- **WHEN** a new check-in is saved and the array already contains 90 records
- **THEN** the oldest record is removed before the new one is added, keeping the array at 90
