import { Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { Home } from './pages/Home'
import { QuickCheckin } from './pages/QuickCheckin'
import { ReflectiveCheckin } from './pages/ReflectiveCheckin'
import { CheckInComplete } from './pages/CheckInComplete'
import { ReflectiveComplete } from './pages/ReflectiveComplete'
import { RegulateScreen } from './pages/RegulateScreen'
import { GuidedPage } from './pages/GuidedPage'
import { CrisisSupportScreen } from './pages/CrisisSupportScreen'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin/quick" element={<QuickCheckin />} />
        <Route path="/checkin/reflective" element={<ReflectiveCheckin />} />
        <Route path="/checkin/complete" element={<CheckInComplete />} />
        <Route path="/checkin/reflective/complete" element={<ReflectiveComplete />} />
        <Route path="/regulate" element={<RegulateScreen />} />
        <Route path="/regulate/:techniqueId" element={<GuidedPage />} />
        {/* Phase 5 & 6 routes — placeholders until those phases are built */}
        <Route path="/journal-prompts" element={<Navigate to="/" replace />} />
        <Route path="/crisis-support" element={<CrisisSupportScreen />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}

export default App
