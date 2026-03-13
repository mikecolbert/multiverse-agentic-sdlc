## ADDED Requirements

### Requirement: Global design tokens are defined as CSS custom properties
The app SHALL define a set of design tokens as CSS custom properties on `:root`, covering color, typography, spacing, and border radius, so that all components use a consistent visual language.

#### Scenario: Tokens available globally
- **WHEN** any component stylesheet references `var(--color-primary)`
- **THEN** the value resolves to the defined warm primary color

#### Scenario: Tokens cover required categories
- **WHEN** the design token file is inspected
- **THEN** it contains tokens for: primary/secondary/background/surface/text colors, font family and sizes, spacing scale, and border radius values

### Requirement: Color palette is warm and gentle
The app SHALL use a warm, muted color palette (soft earth tones, warm neutrals) that avoids clinical blues, harsh contrasts, or alarming reds in primary UI elements.

#### Scenario: Primary color is warm
- **WHEN** the primary color token is applied
- **THEN** the rendered color is a warm tone (e.g., terracotta, sage, warm sand) not a cold blue or stark white

### Requirement: Typography is readable and friendly
The app SHALL use a humanist or rounded sans-serif font that feels approachable rather than clinical or corporate.

#### Scenario: Font loaded
- **WHEN** the app renders
- **THEN** body text uses the defined font family token and is rendered at a minimum 16px base size

### Requirement: App shell layout wraps all routes
The app SHALL render a consistent app shell (header with app name, optional nav, main content area) around all route content.

#### Scenario: Shell present on all routes
- **WHEN** any route is navigated to
- **THEN** the app shell header is visible and the route content renders inside the main content area
