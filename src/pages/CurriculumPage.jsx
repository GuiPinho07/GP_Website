/* ═══════════════════════════════════════════════════════════════
   src/pages/CurriculumPage.jsx — Página do Currículo
   ═══════════════════════════════════════════════════════════════

   Estrutura:
   1. Percurso Académico (narrativa + degrees + achievements + certs)
   2. Timeline de Experiência Profissional
   3. Matriz de Competências (Técnicas, Ferramentas, Soft Skills)
   ═══════════════════════════════════════════════════════════════ */
import TimelineItem from '../components/TimelineItem.jsx'
import SkillMatrix  from '../components/SkillMatrix.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/* ─────────────────────────────────────────────────────────────
   DADOS — Edita estes objetos com a tua informação real
   ───────────────────────────────────────────────────────────── */

// Graus académicos
const DEGREES = [
  {
    degree: 'Licenciatura em [Nome do Curso]',
    institution: '[Nome da Universidade/Escola]',
    dates: '20XX — 20XX',
    gpa: 'Média: X,X valores',
  },
  {
    degree: 'Mestrado em [Nome do Mestrado]',
    institution: '[Nome da Instituição]',
    dates: '20XX — 20XX',
    gpa: 'Média: X,X valores',
  },
]

// Conquistas e certificações
const ACHIEVEMENTS = [
  { icon: '🏆', text: '[Prémio ou distinção académica relevante]' },
  { icon: '📄', text: 'Publicação em [Nome da Conferência/Revista]' },
  { icon: '🎓', text: '[Bolsa ou reconhecimento especial]' },
]

const CERTIFICATIONS = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '20XX', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' },
  { name: 'Google Cloud Professional', issuer: 'Google', date: '20XX', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
  { name: '[Nome da Certificação]', issuer: '[Entidade Emissora]', date: '20XX', color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' },
]

// Experiência profissional
const EXPERIENCE = [
  {
    company: '[Nome da Empresa Atual]',
    role: '[Cargo/Função]',
    dates: 'Jan 20XX — Presente',
    bullets: [
      'Liderou o desenvolvimento de [funcionalidade/produto], reduzindo o tempo de [processo] em X%.',
      'Colaborou com equipas multidisciplinares para implementar [solução técnica].',
      'Responsável pela arquitetura e manutenção de [sistema/serviço].',
    ],
  },
  {
    company: '[Nome da Empresa Anterior]',
    role: '[Cargo/Função]',
    dates: 'Jun 20XX — Dez 20XX',
    bullets: [
      'Desenvolveu e manteve [produto/feature] utilizando [tecnologia].',
      'Implementou melhorias de performance que resultaram em [resultado mensurável].',
      'Participou em code reviews e mentoria de desenvolvedores júnior.',
    ],
  },
  {
    company: '[Nome da Empresa / Estágio]',
    role: 'Estagiário de [Área]',
    dates: 'Jul 20XX — Set 20XX',
    bullets: [
      'Contribuiu para o desenvolvimento de [módulo/funcionalidade].',
      'Aprendeu e aplicou [metodologia/tecnologia] num ambiente profissional real.',
    ],
  },
]

// Matriz de competências
const SKILL_CATEGORIES = [
  {
    title: 'Técnicas',
    icon: '⚙️',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker', 'Kubernetes'],
    colorClass: 'bg-accent-50 dark:bg-dark-700 text-accent-700 dark:text-accent-300 border border-accent-100 dark:border-dark-600',
  },
  {
    title: 'Ferramentas',
    icon: '🛠️',
    skills: ['Git / GitHub', 'Figma', 'VS Code', 'AWS / GCP', 'CI/CD', 'Jira', 'Postman', 'Linux'],
    colorClass: 'bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-dark-600',
  },
  {
    title: 'Soft Skills',
    icon: '🌟',
    skills: ['Comunicação', 'Trabalho em equipa', 'Resolução de problemas', 'Pensamento crítico', 'Adaptabilidade', 'Gestão de tempo'],
    colorClass: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40',
  },
]

/* ─────────────────────────────────────────────────────────────
   COMPONENTES AUXILIARES LOCAIS
   ───────────────────────────────────────────────────────────── */

// Cabeçalho reutilizável para cada secção
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

// Cartão de grau académico
function DegreeCard({ degree, institution, dates, gpa }) {
  return (
    <div className="card-hover p-5 reveal flex gap-4">
      {/* Ícone de graduação */}
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
  useScrollReveal()

  return (
    <div className="container-main py-12 space-y-20">

      {/* ════════════════════════════════════════════════════
          SECÇÃO 1: PERCURSO ACADÉMICO
          ════════════════════════════════════════════════════ */}
      <section aria-labelledby="academico-titulo">
        <SectionHeader
          eyebrow="A minha formação"
          title="Percurso Académico"
          subtitle="Uma narrativa sobre como a educação moldou a minha visão e competências."
        />

        {/* ── Texto Narrativo ── */}
        <div className="card p-6 sm:p-8 mb-8 reveal">
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
            {/*
             * SUBSTITUIR: Este é o teu texto narrativo académico.
             * Conta a história da tua educação de forma pessoal e envolvente.
             */}
            <p>
              A minha jornada começou na{' '}
              <strong className="text-slate-800 dark:text-slate-200">
                [Nome da Universidade/Escola]
              </strong>
              , onde descobri a minha paixão por{' '}
              <strong className="text-slate-800 dark:text-slate-200">[Área]</strong>. Durante a minha
              Licenciatura em{' '}
              <strong className="text-slate-800 dark:text-slate-200">[Nome do Curso]</strong>, foquei-me em{' '}
              [tópicos específicos como programação, design de sistemas, UX...]. Foi aqui que desenvolvi o
              projeto{' '}
              <strong className="text-slate-800 dark:text-slate-200">[Nome do Projeto Destaque]</strong>,
              que me ensinou a [competência adquirida, ex: construir sistemas escaláveis, trabalhar em equipa
              sob pressão, pensar como utilizador].
            </p>
            <p>
              Mais tarde, decidi aprofundar os meus conhecimentos na{' '}
              <strong className="text-slate-800 dark:text-slate-200">[Nome da Instituição]</strong> com um
              Mestrado em{' '}
              <strong className="text-slate-800 dark:text-slate-200">[Nome do Mestrado]</strong>. Esta fase
              foi transformadora: [descreve o que aprendeste, projetos de investigação, tese, experiências
              internacionais, etc.]. Percebi que queria unir [área técnica] com [área de interesse], e foi
              esse cruzamento que definiu a minha trajetória profissional.
            </p>
          </div>
        </div>

        {/* ── Grid: Degrees + Achievements ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Graus académicos */}
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
              Graus Académicos
            </h3>
            <div className="space-y-3">
              {DEGREES.map((d) => (
                <DegreeCard key={d.degree} {...d} />
              ))}
            </div>
          </div>

          {/* Conquistas */}
          <div>
            <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
              Conquistas
            </h3>
            <div className="card p-5 reveal space-y-3">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Certificações ── */}
        <div>
          <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent-500 rounded-full inline-block" />
            Certificações
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className={`rounded-2xl border p-4 reveal transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cert.color}`}
              >
                <div className="text-2xl mb-2">📜</div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">{cert.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer} · {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECÇÃO 2: EXPERIÊNCIA PROFISSIONAL
          ════════════════════════════════════════════════════ */}
      <section aria-labelledby="profissional-titulo">
        <SectionHeader
          eyebrow="O meu percurso"
          title="Experiência Profissional"
          subtitle="Cada empresa me ensinou algo único. Aqui está o caminho que percorri."
        />

        {/* Timeline vertical */}
        <div>
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem
              key={exp.company + i}
              {...exp}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECÇÃO 3: MATRIZ DE COMPETÊNCIAS
          ════════════════════════════════════════════════════ */}
      <section aria-labelledby="competencias-titulo">
        <SectionHeader
          eyebrow="As minhas ferramentas"
          title="Matriz de Competências"
          subtitle="Uma visão completa das minhas capacidades técnicas e humanas."
        />

        <SkillMatrix categories={SKILL_CATEGORIES} />
      </section>

    </div>
  )
}
