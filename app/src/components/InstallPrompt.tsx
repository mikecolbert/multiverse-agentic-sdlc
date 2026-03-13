import { useState, useEffect } from 'react'
import './InstallPrompt.css'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!deferredPrompt || dismissed) return null

  async function handleInstall() {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    setDeferredPrompt(null)
  }

  function handleDismiss() {
    setDismissed(true)
  }

  return (
    <div className="install-prompt" role="banner">
      <p className="install-prompt__text">
        Add Feel Check to your home screen for quick access.
      </p>
      <div className="install-prompt__actions">
        <button onClick={handleInstall} className="install-prompt__btn install-prompt__btn--accept">
          Add to Home Screen
        </button>
        <button onClick={handleDismiss} className="install-prompt__btn install-prompt__btn--dismiss">
          Not now
        </button>
      </div>
    </div>
  )
}
