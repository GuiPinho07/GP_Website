/* ═══════════════════════════════════════════════════════
   src/components/SkillMatrix.jsx
   Grid visual de competências divididas por categoria
   ═══════════════════════════════════════════════════════ */

/**
 * SkillMatrix — Exibe uma secção de competências por categoria.
 *
 * Props:
 *   title      → Título da categoria (ex: "Técnicas")
 *   icon       → Emoji ou JSX de ícone
 *   skills     → Array de strings com as competências
 *   colorClass → Classes Tailwind para a cor de destaque da categoria
 */
function SkillCategory({ title, icon, skills, colorClass = 'bg-accent-50 dark:bg-dark-700 text-accent-700 dark:text-accent-300' }) {
  return (
    <div className="card p-6 reveal">
      {/* Cabeçalho da categoria */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <h3 className="font-display font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Tags de competências */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${colorClass}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * SkillMatrix — Componente contentor que agrupa as três categorias.
 * Recebe um array de categorias e renderiza uma SkillCategory para cada uma.
 *
 * Props:
 *   categories → Array de { title, icon, skills, colorClass }
 */
export default function SkillMatrix({ categories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <SkillCategory key={cat.title} {...cat} />
      ))}
    </div>
  )
}
