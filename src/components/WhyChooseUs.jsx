import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    icon: '🏢',
    title: 'Founded by a Google Staff SWE',
    description: 'Built with deep expertise in large-scale engineering systems, not just AI wrappers',
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    position: { top: '10%', right: '15%' }
  },
  {
    icon: '🤖',
    title: 'End-to-end Agentic',
    description: "Doesn't just suggest code; plans, writes, tests, and iterates autonomously",
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    position: { top: '35%', right: '5%' }
  },
  {
    icon: '🧠',
    title: 'Context-First Design',
    description: 'The agent understands your codebase before it touches it',
    gradient: 'from-[#EC4899] to-[#DB2777]',
    position: { bottom: '35%', right: '10%' }
  },
  {
    icon: '🔧',
    title: 'Composable Architecture',
    description: 'Plug into your existing stack; no forced migrations',
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    position: { bottom: '10%', right: '20%' }
  },
  {
    icon: '⚡',
    title: 'Enterprise-Grade Reliability',
    description: 'Built with the standards of teams shipping at scale',
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    position: { top: '20%', left: '10%' }
  },
  {
    icon: '🇨🇭',
    title: 'Switzerland-Based',
    description: 'Privacy-conscious, GDPR-aligned infrastructure',
    gradient: 'from-[#6B7EF2] to-[#8B5CF6]',
    position: { bottom: '20%', left: '15%' }
  },
]

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="why-choose-us" className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#6B7EF2]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#EC4899]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#EC4899]/10 to-[#8B5CF6]/10 text-[#EC4899] border border-[#EC4899]/30 rounded-full backdrop-blur-sm"
            >
              Why Choose Us
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl font-bold font-display mb-6 leading-tight max-w-4xl mx-auto"
            >
              Not Another Copilot.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Something Fundamentally Different
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
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Built with deep expertise from Google-scale engineering, designed for teams who ship real software.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Illustration/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              {/* Central Illustration Card */}
              <div className="relative">
                <motion.div
                  className="relative bg-gradient-to-br from-[#6B7EF2]/10 via-[#8B5CF6]/10 to-[#EC4899]/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#6B7EF2]/20 via-[#8B5CF6]/20 to-[#EC4899]/20 rounded-3xl blur-2xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Central Icon/Illustration */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="inline-block mb-6"
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-8xl">🚀</div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Agentic AI Framework
                    </h3>
                    <p className="text-gray-600">
                      Autonomous. Intelligent. Production-Ready.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {[
                        { value: '5+', label: 'Years at Google' },
                        { value: '100+', label: 'Teams Served' },
                        { value: '99%', label: 'Uptime' },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-[#6B7EF2] to-[#EC4899] rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Feature Cards */}
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Animated border */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.gradient}`}
                      initial={{ width: 0 }}
                      animate={hoveredIndex === index ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0"
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                          scale: hoveredIndex === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`text-4xl bg-gradient-to-br ${reason.gradient} bg-clip-text text-transparent p-3 rounded-xl backdrop-blur-sm`}>
                          {reason.icon}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#6B7EF2] group-hover:via-[#8B5CF6] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: hoveredIndex === index ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                        className={`flex-shrink-0 text-2xl bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
