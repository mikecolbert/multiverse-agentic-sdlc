import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { type Technique } from '../../data/techniques'
import './GuidedTechnique.css'

interface GuidedTechniqueProps {
  technique: Technique
}

type Phase = 'step' | 'done'

export function GuidedTechnique({ technique }: GuidedTechniqueProps) {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('step')
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const [timerDone, setTimerDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const step = technique.steps[stepIndex]
  const isLastStep = stepIndex === technique.steps.length - 1

  // Start timer whenever step changes and has a duration
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setTimerDone(false)

    if (step?.duration) {
      setSecondsLeft(step.duration)
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev === null || prev <= 1) {
            clearInterval(intervalRef.current!)
            setTimerDone(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      setSecondsLeft(null)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [stepIndex, step?.duration])

  function handleNext() {
    if (isLastStep) {
      setPhase('done')
    } else {
      setStepIndex(i => i + 1)
    }
  }

  // Closing screen
  if (phase === 'done') {
    return (
      <div className="guided__closing">
        <div className="guided__closing-icon" aria-hidden="true">✦</div>
        <h2>Take a moment.</h2>
        <p>Notice how your body feels right now — compared to when you started.</p>
        <p className="guided__closing-affirm">
          You did something kind for yourself just now.
        </p>
        <div className="guided__closing-actions">
          <button
            className="guided__btn guided__btn--primary"
            onClick={() => navigate('/regulate')}
          >
            Try another technique
          </button>
          <button
            className="guided__btn guided__btn--ghost"
            onClick={() => navigate('/')}
          >
            Go home
          </button>
        </div>
      </div>
    )
  }

  // Step progress ring / countdown display
  const progress = step.duration
    ? ((step.duration - (secondsLeft ?? 0)) / step.duration) * 100
    : null

  return (
    <div className="guided">
      {/* Exit always visible */}
      <div className="guided__topbar">
        <button className="guided__exit" onClick={() => navigate('/regulate')}>
          ✕ Exit
        </button>
        <span className="guided__counter">
          {stepIndex + 1} / {technique.steps.length}
        </span>
      </div>

      <h2 className="guided__technique-name">{technique.name}</h2>

      {/* Timer ring */}
      {step.duration && (
        <div className="guided__timer" aria-label={`${secondsLeft} seconds remaining`}>
          <svg className="guided__timer-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" className="guided__timer-track" />
            <circle
              cx="40" cy="40" r="34"
              className={`guided__timer-fill${timerDone ? ' guided__timer-fill--done' : ''}`}
              strokeDasharray="213.6"
              strokeDashoffset={213.6 - (213.6 * (progress ?? 0)) / 100}
            />
          </svg>
          <span className="guided__timer-seconds">
            {timerDone ? '✓' : secondsLeft}
          </span>
        </div>
      )}

      <p className="guided__step-text">{step.text}</p>

      <button
        className={`guided__next${timerDone || !step.duration ? ' guided__next--ready' : ''}`}
        onClick={handleNext}
      >
        {isLastStep ? 'Done' : 'Next →'}
      </button>
    </div>
  )
}
