import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AiConfigProvider } from './context/AiConfigContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AiConfigProvider>
      <App />
    </AiConfigProvider>
  </StrictMode>,
)
