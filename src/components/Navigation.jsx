/* ═══════════════════════════════════════════════════════════════
   src/components/Navigation.jsx — Barra de Navegação Especial
   ═══════════════════════════════════════════════════════════════
   Esta barra:
   - Na HomePage: aparece ABAIXO do Hero
   - Nas outras páginas: aparece logo após o Header
   ═══════════════════════════════════════════════════════════════ */
import { NavLink,useLocation } from 'react-router-dom'

/**
 * Navigation — Barra de navegação principal do site.
 *
 * Usa NavLink do React Router que automaticamente adiciona
 * a classe "active" quando a rota corresponde.
 */
export default function Navigation() {
  // Lista de páginas: { label, to }
  const navItems = [
    { label: 'Currículo',  to: '/curriculo' },
    { label: 'Contactos',  to: '/contactos' },
    { label: 'Sobre Mim',  to: '/' },
  ]

  return (
    /* Contentor da barra: linha horizontal com borda superior/inferior */
    <nav
      className="
        border-y border-surface-200 dark:border-dark-700
        bg-white/80 dark:bg-dark-900/80
        backdrop-blur-sm
        sticky top-0 z-40
      "
      aria-label="Navegação principal"
    >
      <div className="container-main">
        <ul className="flex items-center gap-1 py-1" role="list">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              {/*
                NavLink recebe uma função em className para aplicar
                estilos diferentes quando o link está ativo.
                O `end` no link "/" garante que só fica ativo na raiz exata.
              */}
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    // Base styles
                    'relative px-4 py-3 text-sm font-medium rounded-lg',
                    // Transition for text colour and background
                    'transition-colors duration-200',
                    'inline-flex items-center',
                    // Group for underline animation
                    'group',
                    // Conditional colour
                    isActive
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-surface-100 dark:hover:bg-dark-800',
                  ].join(' ')
                }
              >
                {/* Linha de underline animada que aparece só no link ativo */}
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`
                        absolute bottom-1 left-4 right-4 h-0.5 rounded-full
                        bg-accent-500 dark:bg-accent-400
                        transition-all duration-300 origin-left
                        ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                      `}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
