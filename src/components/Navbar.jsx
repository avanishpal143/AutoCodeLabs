import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#1a1a3e]/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)] border-b border-white/8'
            : 'bg-[#1a1a3e]'
        }`}
      >
        {/* Bottom gradient accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>

            {/* Logo — just the image, dark bg makes it naturally visible */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex-shrink-0"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/logo-removebg-preview.png"
                alt="AutoCodeLabs"
                className="h-10 w-auto object-contain"
                style={{
                  filter: 'brightness(1.5) contrast(1.8) saturate(2) drop-shadow(0 0 2px rgba(180,160,255,0.9)) drop-shadow(0 0 4px rgba(180,160,255,0.8)) drop-shadow(0 0 10px rgba(139,92,246,0.7)) drop-shadow(0 0 20px rgba(107,126,242,0.5))',
                }}
              />
            </motion.div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium text-white/65 hover:text-white rounded-lg hover:bg-white/8 transition-all duration-200"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('contact')}
                className="relative px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] transition-all duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#6B7EF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Started →</span>
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white rounded-full block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white rounded-full block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#1a1a3e] border-b border-white/10 shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 rounded-lg transition-all"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] text-white rounded-full font-semibold text-sm"
                >
                  Get Started →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
