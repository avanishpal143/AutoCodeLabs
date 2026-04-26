import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Brain, RefreshCw, Target, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Autonomous Task Execution',
    description: 'The agent breaks down complex tickets into executable subtasks, runs them in the right order, and surfaces results — without hand-holding.',
    Icon: Zap,
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    glowColor: 'rgba(107, 126, 242, 0.3)',
    features: ['Smart Task Breakdown', 'Sequential Execution', 'Auto-validation'],
  },
  {
    title: 'Codebase-Aware Planning',
    description: 'Understands your architecture, patterns, and conventions. Plans new features with full context of what already exists.',
    Icon: Brain,
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    features: ['Architecture Analysis', 'Pattern Recognition', 'Context-Aware'],
  },
  {
    title: 'Workflow Automation',
    description: 'CI/CD triggers, PR drafts, test generation, and documentation — all handled by the agent as part of the natural dev loop.',
    Icon: RefreshCw,
    gradient: 'from-[#EC4899] to-[#DB2777]',
    glowColor: 'rgba(236, 72, 153, 0.3)',
    features: ['CI/CD Integration', 'Auto PR Creation', 'Test Generation'],
  },
  {
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple specialized agents across frontend, backend, testing, and infra — all under a single coherent instruction layer.',
    Icon: Target,
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(107, 126, 242, 0.3)',
    features: ['Agent Coordination', 'Cross-Stack Support', 'Unified Control'],
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,126,242,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(107,126,242,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B7EF2]/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#6B7EF2]/10 to-[#8B5CF6]/10 text-[#6B7EF2] border border-[#6B7EF2]/30 rounded-full backdrop-blur-sm"
            >
              Services
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight max-w-4xl mx-auto"
            >
              What the Framework{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Does
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
              Our agentic software engineering platform operates across the full development lifecycle — from planning to deployment.
            </motion.p>
          </div>

          {/* Services Horizontal Grid */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative h-full bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: hoveredIndex === index 
                        ? `0 20px 60px ${service.glowColor}` 
                        : undefined
                    }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Animated border gradient */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, ${service.glowColor} 50%, transparent 100%)`,
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <motion.div
                        className="relative inline-block mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-xl blur-lg opacity-30`}
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredIndex === index ? Infinity : 0,
                          }}
                        />
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                          <service.Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-display mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#6B7EF2] group-hover:via-[#8B5CF6] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient}`}
                              whileHover={{ scale: 2 }}
                            />
                            <span className="text-xs text-gray-600">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <motion.div
                        className="pt-3 border-t border-gray-200 group-hover:border-transparent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent cursor-pointer`}>
                          Learn more <ArrowRight className="w-3 h-3" />
                        </span>
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
                    />
                  </motion.div>

                  {/* Floating particles effect */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                          initial={{ 
                            x: Math.random() * 50 - 25,
                            y: Math.random() * 50 - 25,
                            opacity: 0 
                          }}
                          animate={{
                            y: [0, -80],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
