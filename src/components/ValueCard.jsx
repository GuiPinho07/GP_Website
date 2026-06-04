/* ═══════════════════════════════════════════════════════
   src/components/ValueCard.jsx
   Cartão minimalista para a secção "Os meus Valores"
   ═══════════════════════════════════════════════════════ */

/**
 * ValueCard — Exibe um valor pessoal/profissional.
 *
 * Props:
 *   icon  → Componente SVG ou emoji
 *   title → Nome do valor (ex: "Inovação")
 *   desc  → Descrição curta (1-2 frases)
 *   delay → Delay da animação de entrada (ex: '0.1s')
 */
export default function ValueCard({ icon, title, desc, delay = '0s' }) {
  return (
    <div
      className="card-hover p-6 flex flex-col items-start gap-3 reveal"
      style={{ animationDelay: delay }}
    >
      {/* Ícone com fundo colorido circular */}
      <div className="w-12 h-12 rounded-2xl bg-accent-50 dark:bg-dark-700 flex items-center justify-center text-accent-600 dark:text-accent-400 text-2xl flex-shrink-0">
        {icon}
      </div>

      {/* Título e descrição */}
      <div>
        <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}
