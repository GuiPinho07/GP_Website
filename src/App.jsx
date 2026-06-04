/* ════════════════════════════════════════════════════════════
   src/App.jsx — Configuração das Rotas (React Router DOM v6)
   ════════════════════════════════════════════════════════════ */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout global partilhado por todas as páginas
import GlobalLayout from './layout/GlobalLayout.jsx'

// As três páginas do site
import HomePage       from './pages/HomePage.jsx'
import CurriculumPage from './pages/CurriculumPage.jsx'
import ContactPage    from './pages/ContactPage.jsx'

/**
 * App — Componente raiz.
 *
 * Estrutura de rotas:
 *   /             → HomePage (Início / Sobre Mim)
 *   /curriculo    → CurriculumPage (Currículo)
 *   /contactos    → ContactPage (Contactos)
 *
 * O GlobalLayout envolve todas as páginas e fornece:
 * Header, Barra de Navegação Especial e Footer.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Todas as rotas partilham o GlobalLayout */}
        <Route element={<GlobalLayout />}>
          <Route path="/"           element={<HomePage />} />
          <Route path="/curriculo"  element={<CurriculumPage />} />
          <Route path="/contactos"  element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
