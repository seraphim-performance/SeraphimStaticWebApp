import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (bundled into the build, no external requests).
// The logo is vector artwork (src/SeraphimLogo.jsx), so it needs no font.
import '@fontsource/orbitron/400.css' // the spaced "www.seraphim.app" line
import '@fontsource-variable/inter' // web stand-in for Aptos

import './styles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
