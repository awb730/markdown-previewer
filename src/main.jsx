import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import MarkPreviewer from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarkPreviewer />
  </StrictMode>,
)
