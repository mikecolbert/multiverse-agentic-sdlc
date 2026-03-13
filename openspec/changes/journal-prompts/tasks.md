## 1. Prompt Data

- [ ] 1.1 Create `src/data/prompts.ts` with `JournalPrompt` type (id, text, emotionCategories, intensityRange, context)
- [ ] 1.2 Author 30+ prompts across all emotion categories, intensity ranges, and contexts
- [ ] 1.3 Ensure at least 3 prompts per primary emotion category
- [ ] 1.4 Include at least 5 "any" category general prompts as fallback pool

## 2. Prompt Selector

- [ ] 2.1 Create `src/lib/prompts.ts` with `selectPrompts(context)` function
- [ ] 2.2 Implement selection: 1 emotion-matched, 1 intensity-matched, 1 general — no duplicates
- [ ] 2.3 Implement fallback: return 3 general prompts if emotion category has no matches
- [ ] 2.4 Handle missing context (null/undefined session state) by returning 3 general prompts

## 3. Journal Prompts Screen

- [ ] 3.1 Build `JournalPromptsScreen` component at `/journal-prompts`
- [ ] 3.2 Read session context from `useLocation().state`
- [ ] 3.3 Call `selectPrompts` with context and render the 3 returned prompts
- [ ] 3.4 Add paper journal encouragement note above prompts
- [ ] 3.5 Show "Start a check-in to get personalized prompts" message when no context provided
- [ ] 3.6 Add "Go home" link to `/`

## 4. Routing

- [ ] 4.1 Add `/journal-prompts` route to React Router config
- [ ] 4.2 Verify reflective flow closing screen passes route state correctly to this route
- [ ] 4.3 Add secondary link to journal prompts from quick check-in completion screen
