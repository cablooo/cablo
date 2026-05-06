import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter.js'

const WORDS = ['Front-End Developer', 'MIS Student', 'React Developer', 'UI Craftsman']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } }),
}

export default function Hero() {
  const canvasRef = useRef(null)
  const typed = useTypewriter(WORDS)

  /* ── Particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.15,
    })

    particles = Array.from({ length: 90 }, spawn)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`
        ctx.fill()
      })

      /* draw faint connecting lines */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(124,58,237,0.13) 0%, transparent 70%)',
        }}
      />
      {/* Ambient orb top-left */}
      <div
        className="orb"
        style={{ width: 480, height: 480, top: '-10%', left: '-8%', background: 'rgba(124,58,237,0.10)', zIndex: 1 }}
      />
      {/* Amber orb bottom-right */}
      <div
        className="orb"
        style={{ width: 320, height: 320, bottom: '5%', right: '5%', background: 'rgba(245,158,11,0.07)', zIndex: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-[#8B8B9E]"
          >
            <span>👋</span> Hey, I'm from Saudi Arabia
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Yousef Bafayad</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
            className="text-xl sm:text-2xl text-[#8B8B9E] font-medium min-h-[2rem]"
          >
            <span className="text-[#7C3AED]">{typed}</span>
            <span className="inline-block w-0.5 h-6 bg-[#7C3AED] ml-1 animate-pulse align-middle" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0.5}
            className="text-[#8B8B9E] text-base leading-relaxed max-w-lg"
          >
            Front-end developer with 6 years of experience, passionate about crafting
            clean interfaces and learning something new every day.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.6}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('projects')}
              className="px-7 py-3 bg-[#7C3AED] text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: '#7C3AED', color: '#F1F1F1' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 border border-purple-500/40 text-[#8B8B9E] font-semibold rounded-xl transition-all duration-200 text-sm hover:bg-purple-500/10"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
            className="flex gap-4 mt-2 justify-center lg:justify-start"
          >
            <SocialLink href="https://github.com/cablooo" label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://x.com/T_cablo" label="Twitter/X">
              <XIcon />
            </SocialLink>
          </motion.div>
        </div>

        {/* ── Right column — profile image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full purple-glow" />
            {/* Spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full border border-dashed border-purple-500/30"
            />
            <img
              src="/assets/images/profile.jpg"
              alt="Yousef Bafayad"
              className="w-full h-full object-cover rounded-full ring-4 ring-[#7C3AED] relative z-10"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.querySelector('.img-fallback').style.display = 'flex'
              }}
            />
            {/* Fallback avatar */}
            <div
              className="img-fallback w-full h-full rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] ring-4 ring-[#7C3AED] items-center justify-center text-6xl font-bold absolute inset-0 z-10"
              style={{ display: 'none' }}
            >
              YB
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#7C3AED] to-transparent"
        />
        <span className="text-xs text-[#8B8B9E]">scroll</span>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -3, color: '#7C3AED' }}
      className="p-2.5 rounded-xl border border-purple-500/20 bg-white/5 text-[#8B8B9E] hover:text-[#7C3AED] hover:border-purple-500/50 transition-colors duration-200"
    >
      {children}
    </motion.a>
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
