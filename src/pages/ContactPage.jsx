/* ═══════════════════════════════════════════════════════════════
   src/pages/ContactPage.jsx — Página de Contactos
   ═══════════════════════════════════════════════════════════════ */
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useTranslation } from '../contexts/LanguageContext.jsx'

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

function ContactCard({ href, icon, label, sublabel, colorClass, ariaLabel }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`group card-hover p-6 flex items-center gap-4 reveal border-2 hover:border-current ${colorClass}`}
      aria-label={ariaLabel}
    >
      <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-dark-900/40 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-slate-900 dark:text-white">{label}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{sublabel}</p>
      </div>
      <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  )
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
   ───────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const { t } = useTranslation()
  useScrollReveal()

  const [fields, setFields] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!fields.nome.trim()) {
      newErrors.nome = t('contact.form.errors.name_required')
    }

    if (!fields.email.trim()) {
      newErrors.email = t('contact.form.errors.email_required')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = t('contact.form.errors.email_invalid')
    }

    if (!fields.mensagem.trim()) {
      newErrors.mensagem = t('contact.form.errors.message_empty')
    } else if (fields.mensagem.trim().length < 10) {
      newErrors.mensagem = t('contact.form.errors.message_short')
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="container-main py-12">

      {/* ── Cabeçalho ── */}
      <div className="max-w-2xl mb-12 reveal">
        <span className="text-xs font-semibold tracking-widest text-accent-500 uppercase">
          {t('contact.eyebrow')}
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-1 mb-4">
          {t('contact.title_start')}{' '}
          <span className="text-gradient">{t('contact.title_gradient')}</span>
          <span className="text-accent-500">.</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        {/* ── COLUNA ESQUERDA ── */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5 reveal">
            {t('contact.methods_title')}
          </h2>

          <ContactCard
            href="https://linkedin.com/in/guilhermefpinho"
            icon={<LinkedInIcon className="w-6 h-6 text-[#0A66C2]" />}
            label="LinkedIn"
            sublabel="linkedin.com/in/guilhermefpinho"
            colorClass="border-blue-100 dark:border-blue-900/30"
            ariaLabel={t('contact.aria_linkedin')}
          />

          <ContactCard
            href="mailto:oteuemail@exemplo.com"
            icon={<EmailIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />}
            label="Email"
            sublabel="oteuemail@exemplo.com"
            colorClass="border-accent-100 dark:border-accent-900/30"
            ariaLabel={t('contact.aria_email')}
          />

          <div className="card p-5 reveal">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t('contact.response_time_label')}
              </span>{' '}
              {t('contact.response_time_desc')}
            </p>
          </div>
        </div>

        {/* ── COLUNA DIREITA ── */}
        <div className="lg:col-span-3">
          <h2 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-5 reveal">
            {t('contact.form_title')}
          </h2>

          {submitted ? (
            <div className="card p-8 text-center reveal">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4 text-3xl">
                ✅
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                {t('contact.success_title')}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                {t('contact.success_message_part1')} <strong className="text-slate-700 dark:text-slate-300">{fields.nome}</strong>{t('contact.success_message_part2')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFields({ nome: '', email: '', mensagem: '' })
                }}
                className="btn-secondary"
              >
                {t('contact.button_send_another')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 space-y-5 reveal">
              {/* Campo Nome */}
              <div>
                <label htmlFor="contact-nome" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.form.name_label')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-nome" type="text" name="nome" value={fields.nome} onChange={handleChange}
                  placeholder={t('contact.form.name_placeholder')}
                  className={`form-input ${errors.nome ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                />
                {errors.nome && <p className="mt-1.5 text-xs text-red-500">⚠ {errors.nome}</p>}
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.form.email_label')} <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email" type="email" name="email" value={fields.email} onChange={handleChange}
                  placeholder={t('contact.form.email_placeholder')}
                  className={`form-input ${errors.email ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">⚠ {errors.email}</p>}
              </div>

              {/* Campo Mensagem */}
              <div>
                <label htmlFor="contact-mensagem" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  {t('contact.form.message_label')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-mensagem" name="mensagem" value={fields.mensagem} onChange={handleChange} rows={5}
                  placeholder={t('contact.form.message_placeholder')}
                  className={`form-input resize-none ${errors.mensagem ? 'ring-2 ring-red-400 border-red-300 dark:border-red-700' : ''}`}
                />
                <div className="flex items-start justify-between mt-1.5">
                  {errors.mensagem ? (
                    <p className="text-xs text-red-500">⚠ {errors.mensagem}</p>
                  ) : (
                    <p className="text-xs text-slate-400">{t('contact.form.message_hint')}</p>
                  )}
                  <span className={`text-xs ml-auto ${fields.mensagem.length < 10 ? 'text-slate-400' : 'text-emerald-500'}`}>
                    {fields.mensagem.length} chars
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={submitting}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>{t('contact.button_sending')}</>
                ) : (
                  <>
                    <SendIcon className="w-4 h-4" />
                    {t('contact.button_send')}
                  </>
                )}
              </button>

              <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                🔒 {t('contact.privacy_note')}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}