import { Link, useLocation } from 'react-router-dom'
import { selectPrompts, type PromptContext } from '../lib/prompts'
import './JournalPromptsScreen.css'

export function JournalPromptsScreen() {
  const location = useLocation()
  const ctx = (location.state ?? null) as PromptContext | null
  const hasContext = !!(ctx?.emotionCategory || ctx?.intensity)
  const prompts = selectPrompts(ctx)

  return (
    <div className="journal-prompts">
      <div className="journal-prompts__header">
        <h1>Journal prompts</h1>
        {hasContext ? (
          <p>Grab your journal and take a few minutes with these.</p>
        ) : (
          <p className="journal-prompts__no-context">
            Start a check-in to get prompts personalized to how you're feeling.
            Here are some to get you started.
          </p>
        )}
      </div>

      <ol className="journal-prompts__list">
        {prompts.map((prompt, i) => (
          <li key={prompt.id} className="journal-prompts__item">
            <span className="journal-prompts__number" aria-hidden="true">{i + 1}</span>
            <p className="journal-prompts__text">{prompt.text}</p>
          </li>
        ))}
      </ol>

      <p className="journal-prompts__note">
        There's no right way to do this. Write as much or as little as you want.
      </p>

      <Link to="/" className="journal-prompts__home">← Go home</Link>
    </div>
  )
}
