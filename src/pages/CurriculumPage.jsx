/* ═══════════════════════════════════════════════════════════════
   src/pages/CurriculumPage.jsx — Página do Currículo
   ═══════════════════════════════════════════════════════════════ */
// import TimelineItem from '../components/TimelineItem.jsx' 
import SkillMatrix  from '../components/SkillMatrix.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useTranslation } from '../contexts/LanguageContext.jsx'

/* ─────────────────────────────────────────────────────────────
   DADOS (Com chaves de tradução integradas)
   ───────────────────────────────────────────────────────────── */
const DEGREES = [
  {
    degreeKey: 'curriculum.degree.leic.title',
    institutionKey: 'curriculum.degree.leic.institution',
    datesKey: 'curriculum.degree.leic.dates', 
    gpaKey: 'curriculum.degree.leic.gpa',
  }
]

const ACHIEVEMENTS = [
  { icon: '🏆', textKey: 'curriculum.achievements.1' },
  { icon: '📄', textKey: 'curriculum.achievements.2' },
]

const CERTIFICATIONS = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '20XX', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' },
  { name: 'Google Cloud Professional', issuer: 'Google', date: '20XX', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
]

const EXPERIENCE = [
  {
    companyKey: 'curriculum.exp.1.company',
    roleKey: 'curriculum.exp.1.role',
    datesKey: 'curriculum.exp.1.dates',
    bulletsKeys: [
      'curriculum.exp.1.bullet.1',
      'curriculum.exp.1.bullet.2'
    ],
  }
]

const SKILL_CATEGORIES = [
  {
    titleKey: 'curriculum.skills.technical',
    icon: '⚙️',
    skills: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'Java', 'C', 'C#', 'Python', 'SQL'],
    colorClass: 'bg-accent-50 dark:bg-dark-700 text-accent-700 dark:text-accent-300 border border-accent-100 dark:border-dark-600',
  },
  {
    titleKey: 'curriculum.skills.tools',
    icon: '🛠️',
    skills: ['Git / GitHub', 'Figma', 'VS Code', 'CI/CD'],
    colorClass: 'bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-600',
  },
  {
    titleKey: 'curriculum.skills.soft',
    icon: '🌟',
    skills: ['curriculum.skills.soft.teamwork', 'curriculum.skills.soft.problem_solving', 'curriculum.skills.soft.communication'],
    colorClass: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40',
  },
]

/* ─────────────────────────────────────────────────────────────
   COMPONENTES AUXILIARES LOCAIS
   ───────────────────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 reveal">
      <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}

function DegreeCard({ degree, institution, dates, gpa }) {
  return (
    <div className="card-hover p-5 reveal flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-dark-700 flex items-center justify-center flex-shrink-0 text-xl">
        🎓
      </div>
      <div>
        <h3 className="font-display font-semibold text-slate-900 dark:text-white">{degree}</h3>
        <p className="text-accent-600 dark:text-accent-400 text-sm font-medium mt-0.5">{institution}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-slate-500 dark:text-slate-400">{dates}</span>
          {gpa && (
            <>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{gpa}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL DA PÁGINA
   ───────────────────────────────────────────────────────────── */
export default function CurriculumPage() {
  const { t } = useTranslation()
  useScrollReveal()

  return (
    <div className="container-main py-12 space-y-20">

      {/* ── SECÇÃO 1: PERCURSO ACADÉMICO ── */}
      <section aria-labelledby="academico-titulo">
        <SectionHeader
          eyebrow={t('curriculum.eyebrow_formation')}
          title={t('curriculum.title_academic')}
          subtitle={t('curriculum.subtitle_academic')}
        />

        <div className="card p-6 sm:p-8 mb-8 reveal">
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
            <p>{t('curriculum.academic_narrative.p1')}</p>
            <p>{t('curriculum.academic_narrative.p2')}</p>
          </div>
        </div>

        <div className="mb-8">
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
              {t('curriculum.heading_degrees')}
            </h3>
            <div className="space-y-3 max-w-2xl">
              {DEGREES.map((d, idx) => (
                <DegreeCard 
                  key={idx}
                  degree={t(d.degreeKey)}
                  institution={t(d.institutionKey)}
                  dates={t(d.datesKey)}
                  gpa={t(d.gpaKey)}
                />
              ))}
            </div>
          </div>

          {/* Secção Conquistas oculta */}
          {/*
          <div className="mt-8">
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
              {t('curriculum.heading_achievements')}
            </h3>
            <div className="card p-5 reveal space-y-3">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(a.textKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>

        {/* Secção Certificações oculta */}
        {/*
        <div>
          <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
            {t('curriculum.heading_certifications')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className={`rounded-2xl border p-4 reveal transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cert.color}`}>
                <div className="text-2xl mb-2">📜</div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{cert.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
        */}
      </section>

      {/* ── SECÇÃO 2: EXPERIÊNCIA PROFISSIONAL (Oculta temporariamente) ── */}
      {/*
      <section aria-labelledby="profissional-titulo">
        <SectionHeader
          eyebrow={t('curriculum.eyebrow_experience')}
          title={t('curriculum.title_experience')}
          subtitle={t('curriculum.subtitle_experience')}
        />
        <div>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem
              key={i}
              company={t(exp.companyKey)}
              role={t(exp.roleKey)}
              dates={t(exp.datesKey)}
              bullets={exp.bulletsKeys.map(bKey => t(bKey))}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </section>
      */}

      {/* ── SECÇÃO 3: MATRIZ DE COMPETÊNCIAS ── */}
      <section aria-labelledby="competencias-titulo">
        <SectionHeader
          eyebrow={t('curriculum.eyebrow_skills')}
          title={t('curriculum.title_skills')}
          subtitle={t('curriculum.subtitle_skills')}
        />
        
        <SkillMatrix 
          categories={SKILL_CATEGORIES.map(cat => ({
            ...cat,
            title: t(cat.titleKey),
            skills: cat.skills.map(skill => skill.startsWith('curriculum.') ? t(skill) : skill)
          }))} 
        />
      </section>

    </div>
  )
}