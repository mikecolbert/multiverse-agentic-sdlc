## ADDED Requirements

### Requirement: Technique data file defines all curated techniques
The app SHALL include a data file defining all six techniques: box breathing, visualization, 5-4-3-2-1 grounding, progressive muscle relaxation (PMR), cold water, and movement/shaking. Each technique SHALL include: `id`, `name`, `tagline` (one sentence), `steps` (array of step objects), and optional `duration` per step (seconds).

#### Scenario: All six techniques present
- **WHEN** the technique data file is inspected
- **THEN** exactly six technique entries are present with all required fields

#### Scenario: Step has optional duration
- **WHEN** a step in a technique has a timed component (e.g., box breathing inhale)
- **THEN** that step object includes a `duration` field in seconds; steps without timing omit this field

### Requirement: Techniques can be updated without changing UI components
The UI SHALL reference technique data only through the data file. No technique-specific logic SHALL exist in UI components.

#### Scenario: New technique added
- **WHEN** a new technique object is added to the data file
- **THEN** it appears automatically on the regulate screen without any component changes
