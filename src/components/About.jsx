import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stats = [
  { value: 6, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 19, suffix: '', label: 'Years Old' },
]

function useCounter(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1400
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])
  return count
}

function StatCard({ value, suffix, label, active }) {
  const count = useCounter(value, active)
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
      className="glass-card rounded-2xl p-6 text-center flex-1 min-w-[130px]"
    >
      <p className="text-4xl font-bold gradient-text mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {count}{suffix}
      </p>
      <p className="text-[#8B8B9E] text-sm">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{ overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, top: '-20%', left: '-10%', background: 'rgba(124,58,237,0.09)' }} />
      <div className="orb" style={{ width: 300, height: 300, bottom: '-10%', right: '5%', background: 'rgba(245,158,11,0.06)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label + heading — centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col items-center gap-8 max-w-3xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-[#8B8B9E] leading-relaxed text-base text-center">
            I'm a front-end developer and MIS student. I started learning web development at 13,
            giving me 6 years of experience. I enjoy building websites, sharpening my skills,
            and learning something new every day.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#8B8B9E] leading-relaxed text-base text-center">
            I'm from Saudi Arabia, and I've always had a thing for clean design and smooth
            experiences — the kind of interfaces that just feel right when you use them.
          </motion.p>

          {/* Stat cards */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2 justify-center w-full">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} active={active} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
