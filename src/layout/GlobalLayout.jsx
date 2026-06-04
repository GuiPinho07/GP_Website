/* ════════════════════════════════════════════════════════════════
   src/layout/GlobalLayout.jsx — Layout Global Partilhado
   ════════════════════════════════════════════════════════════════
   Estrutura:
     <Header>   → Logo + Redes Sociais (sempre visível)
     [Nav]      → Só aparece aqui quando NÃO estamos na HomePage
     <Outlet>   → Conteúdo da página atual (injetado pelo React Router)
     <Footer>   → Copyright + Voltar ao topo
   ════════════════════════════════════════════════════════════════ */
import { Link, Outlet, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'

/* ── Ícone LinkedIn (SVG inline para evitar dependências) ── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

/* ── Ícone GitHub (SVG inline) ── */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

/* ════════════════════════════════════════════════════════════════
   HEADER — Topo fixo com logo e links sociais
   ════════════════════════════════════════════════════════════════ */
function Header() {
  return (
    <header className="bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-surface-200 dark:border-dark-700">
      <div className="container-main flex items-center justify-between h-16">

        {/* Logo / Nome — link para a página inicial */}
        <Link
          to="/"
          className="font-display font-bold text-lg text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
          aria-label="Guilherme Pinho — Página Inicial"
        >
          {/* Letra inicial em destaque */}
          <span className="text-accent-600 dark:text-accent-400">G</span>
          <span>uilherme</span>
          <span className="text-slate-400 dark:text-slate-600 mx-1">·</span>
          <span className="text-accent-600 dark:text-accent-400">P</span>
          <span>inho</span>
        </Link>

        {/* Links para redes sociais */}
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/[o-teu-username]"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-surface-100 dark:hover:bg-dark-800 transition-all duration-200"
            aria-label="Perfil no LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/[o-teu-username]"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-surface-100 dark:hover:bg-dark-800 transition-all duration-200"
            aria-label="Perfil no GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  )
}

/* ════════════════════════════════════════════════════════════════
   FOOTER — Rodapé com copyright e link "Voltar ao topo"
   ════════════════════════════════════════════════════════════════ */
function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-20 border-t border-surface-200 dark:border-dark-700 bg-white dark:bg-dark-900">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3 py-6">

        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Guilherme Pinho. Todos os direitos reservados.
        </p>

        {/* Botão "Voltar ao topo" */}
        <button
          onClick={scrollToTop}
          className="text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-800 dark:hover:text-accent-300 flex items-center gap-1.5 transition-colors duration-200 group"
          aria-label="Voltar ao topo da página"
        >
          {/* Seta animada para cima no hover */}
          <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
          Voltar ao topo
        </button>
      </div>
    </footer>
  )
}

/* ════════════════════════════════════════════════════════════════
   GLOBAL LAYOUT — Componente principal exportado
   ════════════════════════════════════════════════════════════════ */
export default function GlobalLayout() {
  // useLocation devolve o objeto da rota atual
  // Usamos para saber se estamos na HomePage
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  return (
    /*
     * min-h-screen garante que o footer fique sempre no fundo,
     * mesmo quando o conteúdo é curto.
     * flex flex-col permite que o main cresça e empurre o footer.
     */
    <div className="min-h-screen flex flex-col">

      {/* Header: sempre visível no topo */}
      <Header />

      {/*
       * Barra de Navegação Especial:
       * - Nas páginas internas: aparece aqui, logo após o Header
       * - Na HomePage: NÃO aparece aqui (é renderizada dentro da própria página)
       */}
      {!isHomePage && <Navigation />}

      {/* Conteúdo da Página — React Router injeta aqui a página ativa */}
      <main className="flex-1 animate-fade-in">
        <Outlet />
      </main>

      {/* Footer: sempre visível no fundo */}
      <Footer />
    </div>
  )
}
