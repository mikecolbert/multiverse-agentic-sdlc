import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmotionPicker } from './EmotionPicker'
import { BodyLocationInput } from './BodyLocationInput'
import { IntensityRating } from './IntensityRating'
import { DayOverviewStep } from './DayOverviewStep'
import { HighlightStep } from './HighlightStep'
import { LowlightStep } from './LowlightStep'
import { buildRecord, saveCheckIn } from '../../lib/checkins'
import { recordCheckIn } from '../../lib/streak'
import './CheckInWizard.css'

type QuickStep      = 'emotion' | 'body' | 'intensity' | 'summary'
type ReflectiveStep = 'day-overview' | 'emotion' | 'body' | 'intensity' | 'highlight' | 'lowlight' | 'summary'
type Step = QuickStep | ReflectiveStep

const QUICK_STEPS:      QuickStep[]      = ['emotion', 'body', 'intensity', 'summary']
const REFLECTIVE_STEPS: ReflectiveStep[] = ['day-overview', 'emotion', 'body', 'intensity', 'highlight', 'lowlight', 'summary']

// Summary doesn't count toward the "Step X of N" display
const QUICK_DISPLAY_STEPS      = QUICK_STEPS.filter(s => s !== 'summary')
const REFLECTIVE_DISPLAY_STEPS = REFLECTIVE_STEPS.filter(s => s !== 'summary')

const STEP_TITLES: Record<Step, string> = {
  'day-overview': 'How was your day?',
  'emotion':      'How are you feeling?',
  'body':         'Where do you feel it?',
  'intensity':    'How intense is it?',
  'highlight':    'A moment of light',
  'lowlight':     'What was hard?',
  'summary':      "Here's what you shared",
}

interface WizardState {
  dayRating:        'good' | 'mixed' | 'tough' | null
  emotionCategory:  string
  emotion:          string
  bodyLocation:     string   // session-only, not persisted
  intensity:        1 | 2 | 3 | 4 | 5 | null
  highlight:        string   // session-only, not persisted
  lowlight:         string   // session-only, not persisted
}

interface CheckInWizardProps {
  mode?: 'quick' | 'reflective'
}

export function CheckInWizard({ mode = 'quick' }: CheckInWizardProps) {
  const navigate = useNavigate()
  const steps = mode === 'reflective' ? REFLECTIVE_STEPS : QUICK_STEPS
  const displaySteps = mode === 'reflective' ? REFLECTIVE_DISPLAY_STEPS : QUICK_DISPLAY_STEPS

  const [stepIndex, setStepIndex] = useState(0)
  const [state, setState] = useState<WizardState>({
    dayRating: null,
    emotionCategory: '',
    emotion: '',
    bodyLocation: '',
    intensity: null,
    highlight: '',
    lowlight: '',
  })

  const step = steps[stepIndex]
  const displayIndex = displaySteps.indexOf(step as never)
  const stepLabel = displayIndex >= 0
    ? `Step ${displayIndex + 1} of ${displaySteps.length}`
    : null

  function next() { setStepIndex(i => i + 1) }
  function back() { setStepIndex(i => Math.max(0, i - 1)) }

  function handleConfirm() {
    if (!state.intensity) return
    const record = buildRecord({
      mode,
      emotionCategory: state.emotionCategory,
      emotion:         state.emotion,
      intensity:       state.intensity,
      dayRating:       state.dayRating,
      // highlight & lowlight are intentionally NOT included — session only
    })
    saveCheckIn(record)
    recordCheckIn()

    if (mode === 'reflective') {
      navigate('/checkin/reflective/complete', {
        state: {
          highIntensity: record.highIntensity,
          emotion:       state.emotion,
          intensity:     state.intensity,
          dayRating:     state.dayRating,
          highlight:     state.highlight,
          lowlight:      state.lowlight,
        },
      })
    } else {
      navigate('/checkin/complete', {
        state: { highIntensity: record.highIntensity },
      })
    }
  }

  return (
    <div className="wizard">
      <div className="wizard__header">
        {mode === 'reflective' && (
          <span className="wizard__mode-label">End of Day Reflection</span>
        )}
        <div className="wizard__header-row">
          {stepLabel && (
            <span className="wizard__step-label">{stepLabel}</span>
          )}
          <div className="wizard__progress">
            {displaySteps.map((s, i) => (
              <div
                key={s}
                className={`wizard__progress-dot${
                  step === s ? ' wizard__progress-dot--active' : ''
                }${
                  displayIndex > i ? ' wizard__progress-dot--done' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <h2 className="wizard__title">{STEP_TITLES[step]}</h2>

      <div className="wizard__content">
        {step === 'day-overview' && (
          <DayOverviewStep onSelect={rating => {
            setState(s => ({ ...s, dayRating: rating }))
            next()
          }} />
        )}

        {step === 'emotion' && (
          <EmotionPicker onSelect={(category, emotion) => {
            setState(s => ({ ...s, emotionCategory: category, emotion }))
            next()
          }} />
        )}

        {step === 'body' && (
          <BodyLocationInput onNext={location => {
            setState(s => ({ ...s, bodyLocation: location }))
            next()
          }} />
        )}

        {step === 'intensity' && (
          <IntensityRating onSelect={value => {
            setState(s => ({ ...s, intensity: value }))
            next()
          }} />
        )}

        {step === 'highlight' && (
          <HighlightStep onNext={text => {
            setState(s => ({ ...s, highlight: text }))
            next()
          }} />
        )}

        {step === 'lowlight' && (
          <LowlightStep onNext={text => {
            setState(s => ({ ...s, lowlight: text }))
            next()
          }} />
        )}

        {step === 'summary' && (
          <div className="wizard__summary">
            {state.dayRating && (
              <div className="summary-row">
                <span className="summary-row__label">Your day</span>
                <span className="summary-row__value" style={{ textTransform: 'capitalize' }}>
                  {state.dayRating}
                </span>
              </div>
            )}
            <div className="summary-row">
              <span className="summary-row__label">Feeling</span>
              <span className="summary-row__value">
                {state.emotion}{' '}
                <span className="summary-row__sub">({state.emotionCategory})</span>
              </span>
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
            {state.highlight && (
              <div className="summary-row">
                <span className="summary-row__label">High point</span>
                <span className="summary-row__value">{state.highlight}</span>
              </div>
            )}
            {state.lowlight && (
              <div className="summary-row">
                <span className="summary-row__label">What was hard</span>
                <span className="summary-row__value">{state.lowlight}</span>
              </div>
            )}
            <p className="wizard__summary-note">
              Only your emotion, intensity
              {state.dayRating ? ', and day rating' : ''} will be saved to your device.
              Everything else is just for you right now.
            </p>
            <button className="wizard__confirm" onClick={handleConfirm}>
              Save & continue
            </button>
          </div>
        )}
      </div>

      {stepIndex > 0 && step !== 'summary' && (
        <button className="wizard__back" onClick={back}>← Back</button>
      )}
      {step === 'summary' && (
        <button className="wizard__back" onClick={back}>← Edit</button>
      )}
    </div>
  )
}
