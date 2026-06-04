/* ═══════════════════════════════════════════════════════════════
   src/pages/ContactPage.jsx — Página de Contactos
   ═══════════════════════════════════════════════════════════════

   Estrutura:
   1. Título e convite
   2. Cartões de contacto (LinkedIn + Email)
   3. Formulário de contacto com validação frontend
   ═══════════════════════════════════════════════════════════════ */
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/* ─────────────────────────────────────────────────────────────
   ÍCONES SVG INLINE
   ───────────────────────────────────────────────────────────── */
function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function EmailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function SendIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: CartãoDeContacto
   Um cartão clicável que leva a um link externo (LinkedIn ou email)
   ───────────────────────────────────────────────────────────── */
function ContactCard({ href, icon, label, sublabel, colorClass }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`
        group card-hover p-6 flex items-center gap-4 reveal
        border-2 hover:border-current
        ${colorClass}
      `}
      aria-label={`Contactar via ${label}`}
    >
      {/* Ícone com fundo circular */}
      <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-dark-900/40 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-slate-900 dark:text-white">{label}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{sublabel}</p>
      </div>

      {/* Seta animada no hover */}
      <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  )
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL DA PÁGINA
   ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  useScrollReveal()

  /*
   * Estado do formulário:
   * - fields: valores dos campos (nome, email, mensagem)
   * - errors: mensagens de erro de validação por campo
   * - submitted: controla se o formulário foi enviado com sucesso
   * - submitting: controla o estado de loading do botão
   */
  const [fields, setFields] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  /* ── Atualiza um campo individualmente ── */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Remove o erro do campo quando o utilizador começa a escrever
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  /* ── Validação dos campos ── */
  const validate = () => {
    const newErrors = {}

    if (!fields.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório.'
    }

    if (!fields.email.trim()) {
      newErrors.email = 'O email é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      // Expressão regular simples para validar formato de email
      newErrors.email = 'Introduz um endereço de email válido.'
    }

    if (!fields.mensagem.trim()) {
      newErrors.mensagem = 'A mensagem não pode estar vazia.'
    } else if (fields.mensagem.trim().length < 10) {
      newErrors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.'
    }

    return newErrors
  }

  /* ── Submissão do formulário ── */
  const handleSubmit = async (e) => {
    e.preventDefault() // Previne o reload da página

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      // Há erros: mostra-os e para aqui
      setErrors(validationErrors)
      return
    }

    // Simula o envio (em produção, aqui chamarias a tua API ou serviço)
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500)) // delay artificial
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="container-main py-12">

      {/* ── Cabeçalho ── */}
      <div className="max-w-2xl mb-12 reveal">
        <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
          Entra em contacto
        </span>
        {/* h1 — única na página, importante para SEO */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-1 mb-4">
          Vamos{' '}
          <span className="text-gradient">conversar</span>
          <span className="text-accent-500">.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {/*
           * SUBSTITUIR: Personaliza este texto de convite.
           * Podes mencionar o tipo de projetos que procuras, a tua disponibilidade, etc.
           */}
          Estou sempre aberto a novas oportunidades, colaborações criativas ou simplesmente a uma boa
          conversa sobre tecnologia e design. Se tens um projeto em mente ou quiseres trocar ideias,
          não hesites em entrar em contacto — respondo sempre!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        {/* ════════════════════════════════════════════════════
            COLUNA ESQUERDA: Métodos de contacto direto
            ════════════════════════════════════════════════════ */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5 reveal">
            Métodos de Contacto
          </h2>

          {/* Cartão LinkedIn */}
          <ContactCard
            href="https://linkedin.com/in/guilhermefpinho"
            icon={<LinkedInIcon className="w-6 h-6 text-[#0A66C2]" />}
            label="LinkedIn"
            sublabel="linkedin.com/in/guilhermefpinho"
            colorClass="border-blue-100 dark:border-blue-900/30"
          />

          {/* Cartão Email */}
          <ContactCard
            href="mailto:[o-teu-email@exemplo.com]"
            icon={<EmailIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />}
            label="Email"
            sublabel="[o-teu-email@exemplo.com]"
            colorClass="border-accent-100 dark:border-accent-900/30"
          />

          {/* Mensagem informal adicional */}
          <div className="card p-5 reveal">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Tempo de resposta:</span>{' '}
              Normalmente respondo dentro de 24–48 horas. Para assuntos urgentes, o LinkedIn é o mais rápido. 🚀
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            COLUNA DIREITA: Formulário de contacto
            ════════════════════════════════════════════════════ */}
        <div className="lg:col-span-3">
          <h2 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5 reveal">
            Enviar Mensagem
          </h2>

          {/* ── Estado: Formulário Enviado com Sucesso ── */}
          {submitted ? (
            <div className="card p-8 text-center reveal">
              {/* Ícone de sucesso animado */}
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4 text-3xl">
                ✅
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                Mensagem enviada!
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Obrigado pelo contacto, <strong className="text-slate-700 dark:text-slate-300">{fields.nome}</strong>!
                Responderei o mais brevemente possível.
              </p>
              {/* Botão para enviar outra mensagem */}
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFields({ nome: '', email: '', mensagem: '' })
                }}
                className="btn-secondary"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            /* ── Formulário ── */
            <form
              onSubmit={handleSubmit}
              noValidate /* Usamos a nossa própria validação JS */
              className="card p-6 sm:p-8 space-y-5 reveal"
              aria-label="Formulário de contacto"
            >

              {/* Campo: Nome */}
              <div>
                <label
                  htmlFor="contact-nome"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Nome <span className="text-red-500" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="contact-nome"
                  type="text"
                  name="nome"
                  value={fields.nome}
                  onChange={handleChange}
                  placeholder="O teu nome completo"
                  className={`form-input ${errors.nome ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                  aria-describedby={errors.nome ? 'error-nome' : undefined}
                  aria-invalid={!!errors.nome}
                  autoComplete="name"
                />
                {/* Mensagem de erro */}
                {errors.nome && (
                  <p id="error-nome" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                    <span aria-hidden="true">⚠</span> {errors.nome}
                  </p>
                )}
              </div>

              {/* Campo: Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Email <span className="text-red-500" aria-label="obrigatório">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="o.teu@email.com"
                  className={`form-input ${errors.email ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  aria-invalid={!!errors.email}
                  autoComplete="email"
                />
                {errors.email && (
                  <p id="error-email" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                    <span aria-hidden="true">⚠</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Campo: Mensagem */}
              <div>
                <label
                  htmlFor="contact-mensagem"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Mensagem <span className="text-red-500" aria-label="obrigatório">*</span>
                </label>
                <textarea
                  id="contact-mensagem"
                  name="mensagem"
                  value={fields.mensagem}
                  onChange={handleChange}
                  placeholder="Descreve o teu projeto, ideia ou questão..."
                  rows={5}
                  className={`form-input resize-none ${errors.mensagem ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                  aria-describedby={errors.mensagem ? 'error-mensagem' : 'mensagem-hint'}
                  aria-invalid={!!errors.mensagem}
                />
                {/* Contador de caracteres + hint */}
                <div className="flex items-start justify-between mt-1.5">
                  {errors.mensagem ? (
                    <p id="error-mensagem" className="text-xs text-red-500 flex items-center gap-1" role="alert">
                      <span aria-hidden="true">⚠</span> {errors.mensagem}
                    </p>
                  ) : (
                    <p id="mensagem-hint" className="text-xs text-slate-400">
                      Mínimo de 10 caracteres
                    </p>
                  )}
                  {/* Contador visual de caracteres */}
                  <span className={`text-xs ml-auto ${fields.mensagem.length < 10 ? 'text-slate-400' : 'text-emerald-500'}`}>
                    {fields.mensagem.length} chars
                  </span>
                </div>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                disabled={submitting}
                className="
                  btn-primary w-full justify-center
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent-600
                "
                aria-live="polite"
              >
                {submitting ? (
                  /* Spinner de loading */
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    A enviar...
                  </>
                ) : (
                  <>
                    <SendIcon className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Nota de privacidade */}
              <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                🔒 Os teus dados são usados apenas para responder ao teu contacto. Nunca são partilhados.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
