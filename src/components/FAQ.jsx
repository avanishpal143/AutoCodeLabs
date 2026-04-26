import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Bot, Lock, GitCompare, Code2, Rocket } from 'lucide-react'

const faqs = [
  {
    question: 'Is this just a wrapper around GPT or another LLM?',
    answer: "No. While large language models are part of the engine, the framework is a purpose-built orchestration layer with its own planning, memory, and execution architecture. The intelligence isn't in the model — it's in the system around it.",
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
    answer: "Those tools augment a single developer's typing. Our framework is designed for end-to-end autonomous task execution — planning, writing, testing, and iterating across the entire codebase, not just the file in front of you.",
    Icon: GitCompare,
    gradient: 'from-[#EC4899] to-[#DB2777]',
    glowColor: 'rgba(236, 72, 153, 0.25)',
  },
  {
    question: 'What languages and stacks does it support?',
    answer: "The current build has deep support for TypeScript, Python, Go, and Rust with React and Node.js ecosystems. We're expanding coverage actively — reach out to discuss your stack specifically.",
    Icon: Code2,
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(107, 126, 242, 0.25)',
  },
  {
    question: 'How do I get access?',
    answer: "We're currently in a controlled early access phase. You can apply by reaching out via email. We onboard teams thoughtfully to make sure the experience is solid from day one.",
    Icon: Rocket,
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(139, 92, 246, 0.25)',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="faq"
      className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,126,242,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(107,126,242,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#6B7EF2]/6 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#EC4899]/6 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/4 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8B5CF6]/10 to-[#EC4899]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm"
            >
              FAQs
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight"
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
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
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
            transition={{ delay: 1.2 }}
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
