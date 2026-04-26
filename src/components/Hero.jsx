import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-gradient-to-br from-[#1a1a3e] via-[#2d2d6e] to-[#4a4a9e]">
      {/* Animated gradient overlay matching logo colors */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#6B7EF2]/20 via-[#8B5CF6]/20 to-[#EC4899]/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B7EF2]/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-sm"
          >
            Agentic AI Engineering
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display mb-6 leading-[1.15] tracking-tight text-white"
          >
            The Dev Workflow That{' '}
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Works While You Sleep
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="text-base md:text-lg text-blue-200/80 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Agentic AI that plans, writes, and ships code autonomously.
            Your team focuses on decisions, not boilerplate.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white text-[#6B7EF2] rounded-full font-semibold text-base shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Request Early Access
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center justify-center gap-6 text-blue-200/50 text-xs"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Former Google Staff SWE</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Switzerland-Based</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>GDPR Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
