import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SHEET_URL = import.meta.env.VITE_SHEET_URL

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const contactCards = [
  {
    label: 'Email',
    value: 'yosking22@gmail.com',
    href: 'mailto:yosking22@gmail.com',
    icon: <EmailIcon />,
  },
  {
    label: 'GitHub',
    value: '@cablooo',
    href: 'https://github.com/cablooo',
    icon: <GitHubIcon />,
  },
  {
    label: 'Twitter / X',
    value: '@T_cablo',
    href: 'https://x.com/T_cablo',
    icon: <XIcon />,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        // no-cors because Apps Script doesn't return CORS headers on the preflight
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="bg-[#0F0F1A]/40" style={{ overflow: 'hidden' }}>
      <div className="orb" style={{ width: 450, height: 450, top: '-20%', right: '-10%', background: 'rgba(124,58,237,0.09)' }} />
      <div className="orb" style={{ width: 300, height: 300, bottom: '-10%', left: '-5%', background: 'rgba(245,158,11,0.06)' }} />
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Work Together
          </h2>
          <p className="text-[#8B8B9E] mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Feel free to reach out — I'm always open to new projects and opportunities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col gap-12 max-w-4xl mx-auto"
        >
          {/* Contact cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contactCards.map((c) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-shadow duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#7C3AED] group-hover:bg-purple-500/20 transition-colors duration-200">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-[#8B8B9E] uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="text-sm font-medium text-[#F1F1F1]">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField label="Name" name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange} required disabled={status === 'loading'} />
              <InputField label="Email" name="email" type="email" placeholder="your@email.com"
                value={form.email} onChange={handleChange} required disabled={status === 'loading'} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#8B8B9E] uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                className="w-full bg-[#0F0F1A] border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-[#F1F1F1] placeholder:text-[#8B8B9E]/60 outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40 transition-all duration-200 resize-none disabled:opacity-50"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02, boxShadow: '0 0 30px rgba(124,58,237,0.4)' } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="px-8 py-3 bg-[#7C3AED] text-white font-semibold rounded-xl text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'loading' && <SpinnerIcon />}
                {status === 'loading' ? 'Sending…' : status === 'success' ? '✓ Sent!' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="text-sm text-emerald-400"
                  >
                    Your message was sent
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="text-sm text-red-400"
                  >
                    Something went wrong — try emailing directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

function InputField({ label, name, type, placeholder, value, onChange, required, disabled }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-[#8B8B9E] uppercase tracking-widest">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange} required={required} disabled={disabled}
        className="w-full bg-[#0F0F1A] border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-[#F1F1F1] placeholder:text-[#8B8B9E]/60 outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/40 transition-all duration-200 disabled:opacity-50"
      />
    </div>
  )
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
