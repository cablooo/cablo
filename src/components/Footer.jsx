import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-5"
        >
          <SocialLink href="https://github.com/cablooo" label="GitHub">
            <GitHubIcon />
          </SocialLink>
          <SocialLink href="https://x.com/T_cablo" label="Twitter/X">
            <XIcon />
          </SocialLink>
        </motion.div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#8B8B9E] text-sm text-center"
        >
          Designed &amp; Built by{' '}
          <span className="text-[#7C3AED] font-medium">Yousef Bafayad</span>{' '}
          &copy; 2025
        </motion.p>
      </div>
    </footer>
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
      className="p-2.5 rounded-xl border border-purple-500/20 bg-white/5 text-[#8B8B9E] hover:text-[#7C3AED] hover:border-purple-500/40 transition-colors duration-200"
    >
      {children}
    </motion.a>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
