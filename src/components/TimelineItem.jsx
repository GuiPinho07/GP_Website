/* ═══════════════════════════════════════════════════════
   src/components/TimelineItem.jsx
   Item da timeline da experiência profissional
   ═══════════════════════════════════════════════════════ */

/**
 * TimelineItem — Um item na timeline de experiência profissional.
 *
 * Props:
 *   company    → Nome da empresa
 *   role       → Cargo/função
 *   dates      → Período (ex: "Jan 2022 — Presente")
 *   bullets    → Array de strings com responsabilidades/conquistas
 *   isLast     → Boolean: se for o último item, não mostra a linha vertical
 */
export default function TimelineItem({ company, role, dates, bullets = [], isLast = false }) {
  return (
    <div className="flex gap-4 sm:gap-6 reveal">

      {/* ── Coluna da Linha Vertical ── */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Ponto circular colorido */}
        <div className="w-3 h-3 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 ring-4 ring-accent-100 dark:ring-dark-800 flex-shrink-0" />
        {/* Linha vertical — não aparece no último item */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-200 to-transparent dark:from-dark-700 mt-1 min-h-[2rem]" />
        )}
      </div>

      {/* ── Conteúdo do Cartão ── */}
      <div className="card p-5 mb-6 flex-1 hover:border-accent-200 dark:hover:border-accent-800 transition-all duration-300">
        {/* Cabeçalho: empresa + datas */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display font-semibold text-slate-900 dark:text-white">
              {role}
            </h3>
            <p className="text-accent-600 dark:text-accent-400 font-medium text-sm mt-0.5">
              {company}
            </p>
          </div>
          {/* Badge de datas */}
          <span className="px-3 py-1 rounded-full bg-surface-100 dark:bg-dark-700 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {dates}
          </span>
        </div>

        {/* Bullet points de responsabilidades */}
        {bullets.length > 0 && (
          <ul className="space-y-1.5">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                {/* Marcador personalizado */}
                <span className="text-accent-400 mt-0.5 flex-shrink-0">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
