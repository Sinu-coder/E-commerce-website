import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css'            // ⬅️ load last so your rules win


import { ThemeProvider } from "./context/ThemeContext";   

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>               
      <App />
    </ThemeProvider>
  </StrictMode>
)
