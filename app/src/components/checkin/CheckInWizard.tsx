import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmotionPicker } from './EmotionPicker'
import { BodyLocationInput } from './BodyLocationInput'
import { IntensityRating } from './IntensityRating'
import { buildRecord, saveCheckIn } from '../../lib/checkins'
import { recordCheckIn } from '../../lib/streak'
import './CheckInWizard.css'

type Step = 'emotion' | 'body' | 'intensity' | 'summary'

interface WizardState {
  emotionCategory: string
  emotion: string
  bodyLocation: string
  intensity: 1 | 2 | 3 | 4 | 5 | null
}

const STEP_LABELS: Record<Step, string> = {
  emotion: 'Step 1 of 4',
  body:    'Step 2 of 4',
  intensity: 'Step 3 of 4',
  summary: 'Step 4 of 4',
}

const STEP_TITLES: Record<Step, string> = {
  emotion:   'How are you feeling?',
  body:      'Where do you feel it?',
  intensity: 'How intense is it?',
  summary:   'Here\'s what you shared',
}

export function CheckInWizard() {
  const navigate = useNavigate()
  const [step, setStep] = useState<Step>('emotion')
  const [state, setState] = useState<WizardState>({
    emotionCategory: '',
    emotion: '',
    bodyLocation: '',
    intensity: null,
  })

  function handleEmotionSelect(category: string, emotion: string) {
    setState(s => ({ ...s, emotionCategory: category, emotion }))
    setStep('body')
  }

  function handleBodyNext(location: string) {
    setState(s => ({ ...s, bodyLocation: location }))
    setStep('intensity')
  }

  function handleIntensitySelect(value: 1 | 2 | 3 | 4 | 5) {
    setState(s => ({ ...s, intensity: value }))
    setStep('summary')
  }

  function handleBack() {
    if (step === 'body') setStep('emotion')
    else if (step === 'intensity') setStep('body')
    else if (step === 'summary') setStep('intensity')
  }

  function handleConfirm() {
    if (!state.intensity) return
    const record = buildRecord({
      mode: 'quick',
      emotionCategory: state.emotionCategory,
      emotion: state.emotion,
      intensity: state.intensity,
    })
    saveCheckIn(record)
    recordCheckIn()
    navigate('/checkin/complete', {
      state: { highIntensity: record.highIntensity },
    })
  }

  const canGoBack = step !== 'emotion'

  return (
    <div className="wizard">
      <div className="wizard__header">
        <span className="wizard__step-label">{STEP_LABELS[step]}</span>
        <div className="wizard__progress">
          {(['emotion', 'body', 'intensity', 'summary'] as Step[]).map((s, i) => (
            <div
              key={s}
              className={`wizard__progress-dot${step === s ? ' wizard__progress-dot--active' : ''}${
                ['emotion', 'body', 'intensity', 'summary'].indexOf(step) > i ? ' wizard__progress-dot--done' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <h2 className="wizard__title">{STEP_TITLES[step]}</h2>

      <div className="wizard__content">
        {step === 'emotion' && (
          <EmotionPicker onSelect={handleEmotionSelect} />
        )}
        {step === 'body' && (
          <BodyLocationInput onNext={handleBodyNext} />
        )}
        {step === 'intensity' && (
          <IntensityRating onSelect={handleIntensitySelect} />
        )}
        {step === 'summary' && (
          <div className="wizard__summary">
            <div className="summary-row">
              <span className="summary-row__label">Feeling</span>
              <span className="summary-row__value">{state.emotion} <span className="summary-row__sub">({state.emotionCategory})</span></span>
            </div>
            {state.bodyLocation && (
              <div className="summary-row">
                <span className="summary-row__label">In your body</span>
                <span className="summary-row__value">{state.bodyLocation}</span>
              </div>
            )}
            <div className="summary-row">
              <span className="summary-row__label">Intensity</span>
              <span className="summary-row__value">{state.intensity} / 5</span>
            </div>
            <p className="wizard__summary-note">
              This will be saved privately to your device only.
            </p>
            <button className="wizard__confirm" onClick={handleConfirm}>
              Save check-in
            </button>
          </div>
        )}
      </div>

      {canGoBack && step !== 'summary' && (
        <button className="wizard__back" onClick={handleBack}>
          ← Back
        </button>
      )}
      {step === 'summary' && (
        <button className="wizard__back" onClick={handleBack}>
          ← Edit
        </button>
      )}
    </div>
  )
}
