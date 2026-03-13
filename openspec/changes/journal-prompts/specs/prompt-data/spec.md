## ADDED Requirements

### Requirement: Prompt library contains tagged prompts
The app SHALL include a data file with at least 30 journal prompts. Each prompt SHALL be tagged with one or more emotion categories, an intensity range ("low" | "high" | "any"), and a context ("quick" | "reflective" | "any").

#### Scenario: Prompt data structure valid
- **WHEN** the prompt data file is inspected
- **THEN** every entry has: `id`, `text`, `emotionCategories` (array), `intensityRange`, `context` fields

#### Scenario: Minimum prompt count
- **WHEN** the prompt data file is inspected
- **THEN** at least 30 prompts are present

### Requirement: Prompts cover all emotion categories
The prompt library SHALL include at least 3 prompts tagged for each primary emotion category from the feelings wheel.

#### Scenario: Coverage per category
- **WHEN** filtering the library by any primary emotion category
- **THEN** at least 3 prompts are returned
