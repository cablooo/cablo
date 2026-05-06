import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Moka Coffee',
    image: '/assets/images/moka-coffee.png',
    desc: 'A modern specialty coffee shop landing page',
    url: 'https://cablooo.github.io/moka-coffee/',
  },
  {
    title: 'Kingdom Realty',
    image: '/assets/images/real-estate.png',
    desc: 'A real estate listings platform for Saudi Arabia',
    url: 'https://cablooo.github.io/real-estate/',
  },
  {
    title: 'Zafaran Restaurant',
    image: '/assets/images/zafaran.png',
    desc: 'An elegant Arabic restaurant website',
    url: 'https://cablooo.github.io/zafaran-restaurant/',
  },
  {
    title: 'Iron Peak Gym',
    image: '/assets/images/iron-peak.png',
    desc: 'A bold gym & fitness training website',
    url: 'https://cablooo.github.io/iron-peak/',
  },
  {
    title: 'Medical Center',
    image: '/assets/images/medical-center.png',
    desc: 'A professional healthcare & medical website',
    url: 'https://cablooo.github.io/medical-center/',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" style={{ overflow: 'hidden' }}>
      <div className="orb" style={{ width: 500, height: 500, top: '0%', left: '-15%', background: 'rgba(124,58,237,0.07)' }} />
      <div className="orb" style={{ width: 350, height: 350, bottom: '0%', right: '-10%', background: 'rgba(245,158,11,0.06)' }} />
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Work
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ title, image, desc, url }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -5, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden bg-[#0F0F1A]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.querySelector('.img-placeholder').style.display = 'flex'
          }}
        />
        <div
          className="img-placeholder w-full h-full items-center justify-center bg-gradient-to-br from-purple-900/40 to-[#0F0F1A] absolute inset-0"
          style={{ display: 'none' }}
        >
          <span className="text-[#7C3AED] text-4xl font-bold opacity-30">{title[0]}</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3
          className="text-lg font-bold text-[#F1F1F1]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#8B8B9E] text-sm leading-relaxed flex-1">{desc}</p>
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-[#7C3AED] text-sm font-semibold mt-1 hover:text-[#F59E0B] transition-colors duration-200 w-fit"
        >
          Live Site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}
