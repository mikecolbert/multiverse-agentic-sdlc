## Context

Journal prompts are the final step of both check-in flows. The user has already named their emotion and rated intensity — the prompts should build on that, not repeat it. Prompts are delivered as display-only text; the user writes on paper. Session context is passed via React Router state so no additional localStorage reads are needed.

## Goals / Non-Goals

**Goals:**
- Show exactly 3 prompts per session, selected by a simple matching algorithm
- Prompts relevant to the user's emotion category, intensity, and flow type
- Graceful fallback to general prompts if no specific match found
- Clean, uncluttered display with a note encouraging paper journaling

**Non-Goals:**
- In-app text input or saving journal entries
- AI-generated prompts
- More than 3 prompts at once (cognitive load)

## Decisions

**3 prompts, not a scrollable list**
More than 3 is overwhelming for someone who has just done an emotional check-in. 3 provides choice without decision fatigue.

**Tag-based matching over a recommendation engine**
Each prompt is tagged with emotion categories and intensity ranges. The selector picks: 1 emotion-specific prompt, 1 intensity-appropriate prompt, 1 general/universal prompt. Simple, predictable, and maintainable.

**Session context via route state, not localStorage**
The prompt selection is stateless — it only needs the current session's emotion/intensity/dayRating. Passing via `useLocation().state` avoids any persistence complexity and ensures prompts are always session-fresh.

**Paper journal encouragement copy**
A single gentle line ("Grab your journal and take a few minutes with these") bridges app and paper without being prescriptive.

## Risks / Trade-offs

- [Prompt library needs enough entries to avoid repetition] → Ship with 30+ prompts across categories; can grow over time
- [Route state lost on direct navigation or refresh] → Show general prompts as fallback; inform user "Start a check-in to get personalized prompts"

## Open Questions

- Prompt copy: will be authored in the data file during implementation
