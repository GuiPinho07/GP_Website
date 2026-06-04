/* ═══════════════════════════════════════
   src/main.jsx — Ponto de entrada React
   ═══════════════════════════════════════ */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importa os estilos globais (Tailwind + custom CSS)
import './index.css'

// Importa o componente raiz da app
import App from './App.jsx'

// Monta o React na div#root do index.html
// StrictMode ativa verificações extra em desenvolvimento
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
