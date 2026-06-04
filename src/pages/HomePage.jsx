/* ═══════════════════════════════════════════════════════════════
   src/pages/HomePage.jsx — Página Inicial (Sobre Mim)
   ═══════════════════════════════════════════════════════════════

   Estrutura desta página:
   1. Hero Section → Foto, Nome, Headline, Bio
   2. Navigation  → A barra especial (só aparece aqui na Home)
   3. Valores     → Três cartões com valores pessoais/profissionais
   4. Competências → Nuvem de tags
   ═══════════════════════════════════════════════════════════════ */
import { useEffect } from 'react'
import Navigation from '../components/Navigation.jsx'
import ValueCard from '../components/ValueCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/* ─────────────────────────────────────────────────────────────
   DADOS DA PÁGINA — Edita estes objetos para personalizar o site
   ───────────────────────────────────────────────────────────── */

const VALUES = [
  {
    icon: '💡',
    title: 'Inovação',
    desc: 'Acredito que a melhor solução ainda não foi encontrada. Questiono o status quo e procuro abordagens criativas para problemas complexos.',
  },
  {
    icon: '🤝',
    title: 'Colaboração',
    desc: 'Os melhores produtos nascem de equipas diversas com comunicação aberta. Valorizo a partilha de conhecimento e o crescimento coletivo.',
  },
  {
    icon: '✦',
    title: 'Simplicidade',
    desc: 'A elegância está na simplicidade. Esforço-me por criar soluções intuitivas que resolvem problemas reais sem complexidade desnecessária.',
  },
]

// Tags de competências-chave — adiciona ou remove conforme o teu perfil
const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'UI Design', 'Figma', 'GraphQL',
  'Gestão de Projetos', 'Agile/Scrum', 'Git',
  'Tailwind CSS', 'Testing',
]

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
   ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  // Ativa as animações de scroll reveal após o render
  useScrollReveal()

  return (
    <div>
      {/* ════════════════════════════════════════════════════
          SECÇÃO 1: HERO
          Fundo com gradiente subtil para destacar visualmente
          ════════════════════════════════════════════════════ */}


      {/* ════════════════════════════════════════════════════
          NAVEGAÇÃO ESPECIAL — Aparece aqui na HomePage,
          logo abaixo do Hero (comportamento específico desta página)
          ════════════════════════════════════════════════════ */}
      <Navigation />

      {/* ════════════════════════════════════════════════════
          CORPO DA PÁGINA
          ════════════════════════════════════════════════════ */}
      <div className="container-main py-16 space-y-16">

        {/* ── SECÇÃO: Os Meus Valores ── */}
        <section aria-labelledby="valores-titulo">
          {/* Cabeçalho da secção */}
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
              O que me move
            </span>
            <h2
              id="valores-titulo"
              className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1"
            >
              Os meus Valores
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-lg">
              Os princípios que guiam as minhas decisões técnicas e a forma como colaboro em equipa.
            </p>
          </div>

          {/* Grid de 3 cartões */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUES.map((value, i) => (
              <ValueCard
                key={value.title}
                {...value}
                delay={`${0.1 + i * 0.1}s`}
              />
            ))}
          </div>
        </section>

        {/* ── SECÇÃO: Competências-Chave ── */}
        <section aria-labelledby="competencias-titulo">
          <div className="mb-8 reveal">
            <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
              O meu toolkit
            </span>
            <h2
              id="competencias-titulo"
              className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1"
            >
              Competências-Chave
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-lg">
              Tecnologias e metodologias com as quais trabalho no dia-a-dia.
            </p>
          </div>

          {/* Nuvem de tags com hover animado */}
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
