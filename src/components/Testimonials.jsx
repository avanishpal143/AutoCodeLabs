import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MessageSquare, Rocket, Target, Star, Brain, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: "I've tested a lot of AI dev tools. This is the first one that actually understands what I'm trying to build — not just the line of code in front of it. The context-awareness is genuinely impressive.",
    name: 'Marcus T.',
    role: 'Engineering Lead, B2B SaaS company, Berlin',
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    Icon: MessageSquare,
  },
  {
    text: 'We shaved a full sprint worth of setup work from our last feature launch. The agent handled the scaffolding, test structure, and even a first-pass PR description. That alone was worth it.',
    name: 'Priya S.',
    role: 'CTO, Early-stage fintech, London',
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    Icon: Rocket,
  },
  {
    text: "The orchestration layer is what sets this apart. Specialized agents coordinating across the stack without breaking each other's work. That's a hard problem, solved well.",
    name: 'João R.',
    role: 'Principal Engineer, Platform team, Lisbon',
    gradient: 'from-[#EC4899] to-[#DB2777]',
    Icon: Target,
  },
  {
    text: "I was skeptical at first — I've been burned by overhyped AI tools before. But knowing the founder's background, I gave it a proper trial. It earned its place in our workflow within the first week.",
    name: 'Annika B.',
    role: 'VP Engineering, Swiss logistics scale-up',
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    Icon: Star,
  },
  {
    text: "What I appreciate most is what it doesn't do. It doesn't guess blindly or hallucinate architecture decisions. It asks smart clarifying questions and then executes with discipline.",
    name: 'Daniel K.',
    role: 'Solo founder & developer, Amsterdam',
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    Icon: Brain,
  },
]

const VISIBLE = 3 // cards visible at once
const AUTO_INTERVAL = 3000

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const total = testimonials.length

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total)
    }, AUTO_INTERVAL)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (index) => {
    setCurrent((index + total) % total)
    startTimer()
  }

  // Get indices of visible cards (wrap around)
  const getVisibleIndices = () => {
    return Array.from({ length: VISIBLE }, (_, i) => (current + i) % total)
  }

  return (
    <section id="testimonials" className="py-16 px-6 relative bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,126,242,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(107,126,242,0.02)_2px,transparent_2px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#EC4899]/10 to-[#8B5CF6]/10 text-[#EC4899] border border-[#EC4899]/30 rounded-full backdrop-blur-sm"
            >
              Testimonials
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold font-display mb-4 leading-tight"
            >
              What Early Collaborators{' '}
              <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Are Saying
              </span>
            </motion.h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {getVisibleIndices().map((idx, pos) => {
                  const t = testimonials[idx]
                  return (
                    <motion.div
                      key={`${idx}-${pos}`}
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.45, ease: 'easeInOut', delay: pos * 0.05 }}
                      className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                      style={{ minHeight: '220px' }}
                    >
                      {/* Gradient hover bg */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                      {/* Bottom border bar on hover */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${t.gradient} rounded-b-2xl`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br ${t.gradient} mb-4 shadow-md`}>
                          <t.Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Quote */}
                        <p className="text-gray-700 leading-relaxed text-sm italic mb-5 line-clamp-4">
                          "{t.text}"
                        </p>

                        {/* Author */}
                        <div className="border-t border-gray-100 pt-4">
                          <div className={`font-semibold text-sm bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent mb-0.5`}>
                            {t.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              {/* Prev */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo(current - 1)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#6B7EF2] hover:text-[#6B7EF2] transition-all duration-300 bg-white shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    whileHover={{ scale: 1.3 }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-2.5 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Next */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo(current + 1)}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#EC4899] hover:text-[#EC4899] transition-all duration-300 bg-white shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
