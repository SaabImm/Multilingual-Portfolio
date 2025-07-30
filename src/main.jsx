import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeProvider } from './Context/Dark-mode.jsx'
import { TranslationProvider } from './Context/translation.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslationProvider> 
    <DarkModeProvider> 
    <App />
    </DarkModeProvider> 
    </TranslationProvider>
  </StrictMode>,
)
