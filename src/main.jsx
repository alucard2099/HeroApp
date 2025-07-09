import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroApp } from './HeroApp'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroApp />
  </BrowserRouter>,
)
