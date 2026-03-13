import { useState } from 'react'
import './ReflectiveTextStep.css'

interface HighlightStepProps {
  onNext: (text: string) => void
}

export function HighlightStep({ onNext }: HighlightStepProps) {
  const [value, setValue] = useState('')
  return (
    <div className="reflective-text-step">
      <p className="reflective-text-step__prompt">
        What was a high point of your day?
      </p>
      <p className="reflective-text-step__hint">
        Even small things count — a good cup of coffee, a moment of quiet.
      </p>
      <textarea
        className="reflective-text-step__input"
        placeholder="Something that felt good, even briefly..."
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={4}
        aria-label="What was a high point of your day?"
      />
      <div className="reflective-text-step__actions">
        <button className="reflective-text-step__skip" onClick={() => onNext('')}>
          Skip
        </button>
        <button className="reflective-text-step__next" onClick={() => onNext(value.trim())}>
          Continue
        </button>
      </div>
    </div>
  )
}
