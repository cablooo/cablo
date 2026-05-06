import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5',        icon: 'html5/html5-original' },
  { name: 'CSS3',         icon: 'css3/css3-original' },
  { name: 'JavaScript',   icon: 'javascript/javascript-original' },
  { name: 'Sass',         icon: 'sass/sass-original' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
  { name: 'React',        icon: 'react/react-original' },
  { name: 'Next.js',      icon: 'nextjs/nextjs-original' },
  { name: 'Python',       icon: 'python/python-original' },
]

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0F0F1A]/40" style={{ overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, top: '-15%', right: '-5%', background: 'rgba(124,58,237,0.08)' }} />
      <div className="orb" style={{ width: 280, height: 280, bottom: '-10%', left: '10%', background: 'rgba(245,158,11,0.05)' }} />
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#7C3AED] text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My Tech Stack
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-shadow duration-200"
            >
              <img
                src={`${CDN}${skill.icon}.svg`}
                alt={skill.name}
                width={48}
                height={48}
                onError={(e) => { e.target.style.opacity = '0.3' }}
              />
              <span className="text-sm font-medium text-[#F1F1F1]">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
