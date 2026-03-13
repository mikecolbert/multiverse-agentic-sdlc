import { useState } from 'react'
import './ReflectiveTextStep.css'

interface LowlightStepProps {
  onNext: (text: string) => void
}

export function LowlightStep({ onNext }: LowlightStepProps) {
  const [value, setValue] = useState('')
  return (
    <div className="reflective-text-step">
      <p className="reflective-text-step__prompt">
        What was hard today?
      </p>
      <p className="reflective-text-step__hint">
        No need to fix it right now — just notice it.
      </p>
      <textarea
        className="reflective-text-step__input"
        placeholder="Something that felt heavy, draining, or difficult..."
        value={value}
        onChange={e => setValue(e.target.value)}
        rows={4}
        aria-label="What was hard today?"
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
