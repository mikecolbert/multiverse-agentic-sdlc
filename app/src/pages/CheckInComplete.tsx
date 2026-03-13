import { Link, useLocation } from 'react-router-dom'
import { CrisisBanner } from '../components/crisis/CrisisBanner'
import './CheckInComplete.css'

export function CheckInComplete() {
  const location = useLocation()
  const highIntensity = location.state?.highIntensity === true

  return (
    <div className="complete">
      <div className="complete__affirmation">
        <div className="complete__icon" aria-hidden="true">✓</div>
        <h1>You showed up for yourself.</h1>
        <p>Noticing how you feel is the first step. That takes courage.</p>
      </div>

      {highIntensity && <CrisisBanner />}

      <div className="complete__actions">
        <Link to="/regulate" className="complete__btn complete__btn--primary">
          I want help right now
        </Link>
        <Link to="/" className="complete__btn complete__btn--ghost">
          Go home
        </Link>
      </div>
    </div>
  )
}
