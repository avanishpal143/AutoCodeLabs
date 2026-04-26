import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Bot, Lock, GitCompare, Code2, Rocket } from 'lucide-react'

const faqs = [
  {
    question: 'Is this just a wrapper around GPT or another LLM?',
    answer: "No. LLMs are part of the engine, but the framework is a purpose-built orchestration layer with its own planning, memory, and execution architecture. The intelligence is in the system, not just the model.",
    Icon: Bot,
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    glowColor: 'rgba(107, 126, 242, 0.25)',
  },
  {
    question: 'Does the agent need access to my production environment?',
    answer: 'Not unless you want it to. The framework is designed to operate at the repo and PR level by default, with optional deeper integrations into CI/CD and staging environments that you control explicitly.',
    Icon: Lock,
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    glowColor: 'rgba(139, 92, 246, 0.25)',
  },
  {
    question: 'How is this different from GitHub Copilot or Cursor?',
    answer: "Those tools help one developer type faster. Our framework handles end-to-end autonomous execution: planning, writing, testing, and iterating across the entire codebase.",
    Icon: GitCompare,
    gradient: 'from-[#EC4899] to-[#DB2777]',
    glowColor: 'rgba(236, 72, 153, 0.25)',
  },
  {
    question: 'What languages and stacks does it support?',
    answer: "Deep support for TypeScript, Python, Go, and Rust with React and Node.js ecosystems. Expanding actively. Reach out to discuss your stack.",
    Icon: Code2,
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(107, 126, 242, 0.25)',
  },
  {
    question: 'How do I get access?',
    answer: "We're in a controlled early access phase. Apply via email and we'll onboard you thoughtfully to ensure a solid experience from day one.",
    Icon: Rocket,
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(139, 92, 246, 0.25)',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <section
      id="faq"
      className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,126,242,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(107,126,242,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8B5CF6]/10 to-[#EC4899]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm"
            >
              FAQs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="text-3xl md:text-4xl font-semibold font-display mb-4 leading-tight"
            >
              Common{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Questions
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-gray-500 text-base max-w-xl mx-auto"
            >
              Everything you need to know before getting started.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  className="group relative"
                >
                  {/* Glow behind card when open */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="glow"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-2xl blur-xl -z-10"
                        style={{ background: faq.glowColor }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    animate={{
                      boxShadow: isOpen
                        ? `0 8px 40px ${faq.glowColor}`
                        : '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${
                      isOpen ? 'border-transparent' : 'border-gray-200'
                    }`}
                    style={
                      isOpen
                        ? {
                            borderImage: `linear-gradient(135deg, #6B7EF2, #8B5CF6, #EC4899) 1`,
                            border: '1.5px solid transparent',
                            backgroundClip: 'padding-box',
                          }
                        : {}
                    }
                  >
                    {/* Gradient top bar — visible when open */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${faq.gradient}`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={isOpen ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: 'left' }}
                    />

                    {/* Question row */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center gap-4 group/btn"
                    >
                      {/* Gradient icon badge */}
                      <motion.div
                        animate={{
                          scale: isOpen ? 1.15 : 1,
                          rotate: isOpen ? 10 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center shadow-md`}
                      >
                        <faq.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Question text */}
                      <span
                        className={`flex-1 font-semibold text-base leading-snug transition-all duration-300 ${
                          isOpen
                            ? `bg-gradient-to-r ${faq.gradient} bg-clip-text text-transparent`
                            : 'text-gray-900 group-hover/btn:text-gray-700'
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? `bg-gradient-to-br ${faq.gradient} text-white shadow-md`
                            : 'bg-gray-100 text-gray-500 group-hover/btn:bg-gray-200'
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L7 10L12 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 pt-1"
                          >
                            {/* Divider */}
                            <div className={`h-px bg-gradient-to-r ${faq.gradient} opacity-20 mb-4`} />

                            {/* Answer text with left accent bar */}
                            <div className="flex gap-3">
                              <div
                                className={`flex-shrink-0 w-1 rounded-full bg-gradient-to-b ${faq.gradient} opacity-60`}
                              />
                              <p className="text-gray-600 leading-relaxed text-sm">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-14 text-center"
          >
            <p className="text-gray-500 text-sm mb-5">
              Still have questions? We'd love to hear from you.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] rounded-full text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
