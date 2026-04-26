import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#1a1a3e] via-[#1e1e4a] to-[#1a1a3e]">
      {/* Subtle grid — same as Hero */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Top border — gradient fade, same style as hero bottom */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mb-5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/logo-removebg-preview.png"
                alt="AutoCodeLabs"
                className="h-10 w-auto object-contain"
              />
            </motion.div>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-4">
              Agentic AI framework that automates software engineering workflows.
              Built by a former Google Staff Engineer.
            </p>

            <p className="text-white/25 text-xs flex items-center gap-2">
              <span>🇨🇭</span>
              <span>Switzerland · Serving teams globally</span>
            </p>

            <div className="mt-6 h-px w-14 bg-gradient-to-r from-[#6B7EF2] to-[#EC4899] opacity-50 rounded-full" />
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/45 hover:text-white/90 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
              Get in Touch
            </h4>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-base">✉️</span>
                <a
                  href="mailto:amit@autocodelabs.com"
                  className="text-white/45 hover:text-white/90 text-sm transition-colors duration-200"
                >
                  amit@autocodelabs.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base">🚀</span>
                <span className="text-white/45 text-sm">Early Access Available</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('contact')}
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold text-white overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#6B7EF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Apply for Early Access →</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {currentYear} AutoCodeLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-white/25 hover:text-white/55 transition-colors text-xs">
              Privacy Policy
            </button>
            <button className="text-white/25 hover:text-white/55 transition-colors text-xs">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
