/* ═══════════════════════════════════════════════════════════════
   src/pages/HomePage.jsx — Página Inicial
   ═══════════════════════════════════════════════════════════════ */
import { useEffect } from 'react'
import Navigation from '../components/Navigation.jsx'
import ValueCard from '../components/ValueCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useTranslation } from '../contexts/LanguageContext.jsx'

/* ─────────────────────────────────────────────────────────────
   DADOS DA PÁGINA (Com chaves de tradução)
   ───────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: '💡',
    titleKey: 'home.values.innovation.title',
    descKey: 'home.values.innovation.desc',
  },
  {
    icon: '🤝',
    titleKey: 'home.values.collaboration.title',
    descKey: 'home.values.collaboration.desc',
  },
  {
    icon: '✦',
    titleKey: 'home.values.simplicity.title',
    descKey: 'home.values.simplicity.desc',
  },
]

const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Java', 'C', 'SQL',
  'UI Design', 'Figma', 'Git / GitHub',
  'Tailwind CSS', 'Testing (Mockito/Pitest)'
]

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
   ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { t } = useTranslation()
  useScrollReveal()

  return (
    <div>
      {/* ── NAVEGAÇÃO ── */}
      <Navigation />

      {/* ── CORPO DA PÁGINA ── */}
      <div className="container-main py-16 space-y-16">

        {/* ── SECÇÃO: Valores ── */}
        <section aria-labelledby="valores-titulo">
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
              {t('home.what_moves')}
            </span>
            <h2 id="valores-titulo" className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
              {t('home.my_values')}
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-lg">
              {t('home.values_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUES.map((value, i) => (
              <ValueCard 
                key={value.titleKey} 
                icon={value.icon}
                title={t(value.titleKey)}
                desc={t(value.descKey)}
                delay={`${0.1 + i * 0.1}s`} 
              />
            ))}
          </div>
        </section>

        {/* ── SECÇÃO: Competências ── */}
        <section aria-labelledby="competencias-titulo">
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
              {t('home.my_toolkit')}
            </span>
            <h2 id="competencias-titulo" className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
              {t('home.key_skills')}
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-lg">
              {t('home.skills_subtitle')}
            </p>
          </div>
          <div className="card p-6 sm:p-8 reveal">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}