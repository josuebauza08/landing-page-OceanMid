import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TestPage from './TestPage.tsx'

const isTest = new URLSearchParams(window.location.search).has('test')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isTest ? <TestPage /> : <App />}
  </StrictMode>,
)
