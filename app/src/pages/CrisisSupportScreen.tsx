import { Link } from 'react-router-dom'
import './CrisisSupportScreen.css'

export function CrisisSupportScreen() {
  return (
    <div className="crisis-support">
      <div className="crisis-support__intro">
        <h1>You don't have to go through this alone.</h1>
        <p>
          Real help is available right now — from people trained to listen,
          without judgment. Reaching out is a sign of strength.
        </p>
      </div>

      <div className="crisis-support__resources">

        <a href="tel:988" className="resource-card resource-card--primary">
          <div className="resource-card__icon" aria-hidden="true">📞</div>
          <div className="resource-card__body">
            <h2 className="resource-card__name">988 Suicide &amp; Crisis Lifeline</h2>
            <p className="resource-card__detail">Call or text <strong>988</strong></p>
            <p className="resource-card__sub">Free, confidential, 24/7</p>
          </div>
        </a>

        <a href="sms:741741?body=HOME" className="resource-card">
          <div className="resource-card__icon" aria-hidden="true">💬</div>
          <div className="resource-card__body">
            <h2 className="resource-card__name">Crisis Text Line</h2>
            <p className="resource-card__detail">Text <strong>HOME</strong> to <strong>741741</strong></p>
            <p className="resource-card__sub">Free, confidential, 24/7 — text only</p>
          </div>
        </a>

        <a
          href="https://findahelpline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="resource-card resource-card--international"
        >
          <div className="resource-card__icon" aria-hidden="true">🌍</div>
          <div className="resource-card__body">
            <h2 className="resource-card__name">Outside the US?</h2>
            <p className="resource-card__detail">findahelpline.com</p>
            <p className="resource-card__sub">Find local crisis support in your country</p>
          </div>
        </a>

      </div>

      <div className="crisis-support__note">
        <p>
          If you are in immediate danger, please call your local emergency services (911 in the US).
        </p>
      </div>

      <Link to="/" className="crisis-support__home">← Back home</Link>
    </div>
  )
}
