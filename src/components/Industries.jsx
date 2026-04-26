import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Building2, Wrench, Rocket, ArrowRight } from 'lucide-react'

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

const industries = [
  {
    title: 'SaaS Companies',
    description: 'Move faster on product features without bloating your engineering headcount.',
    Icon: Briefcase,
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    glowColor: 'rgba(107, 126, 242, 0.3)',
    features: ['Rapid Development', 'Scalable Solutions', 'Cost Efficient'],
  },
  {
    title: 'Fintech & Enterprise',
    description: 'Automate compliance scaffolding, test coverage, and audit trails with precision.',
    Icon: Building2,
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    features: ['Compliance Ready', 'Audit Trails', 'Security First'],
  },
  {
    title: 'Dev Tools & Platforms',
    description: 'Embed our framework as a layer inside your own toolchain or IDE integrations.',
    Icon: Wrench,
    gradient: 'from-[#EC4899] to-[#DB2777]',
    glowColor: 'rgba(236, 72, 153, 0.3)',
    features: ['API Integration', 'Plugin Support', 'White Label'],
  },
  {
    title: 'Startups at Scale',
    description: 'Let the agent handle execution so your team handles the vision.',
    Icon: Rocket,
    gradient: 'from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]',
    glowColor: 'rgba(107, 126, 242, 0.3)',
    features: ['Fast Iteration', 'Team Efficiency', 'Growth Ready'],
  },
]

const Industries = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="industries" className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,126,242,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(107,126,242,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Header Section */}
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#6B7EF2]/10 to-[#8B5CF6]/10 text-[#6B7EF2] border border-[#6B7EF2]/30 rounded-full backdrop-blur-sm"
            >
              Industries
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold font-display mb-4 leading-tight max-w-3xl mx-auto"
            >
              Built for Teams Shipping{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Real Software
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
              className="text-base text-gray-600 max-w-2xl mx-auto"
            >
              Our framework adapts to your industry needs, from startups to enterprises.
            </motion.p>
          </div>

          {/* Industries — single row, same as Services */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
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
                        ? `0 20px 60px ${industry.glowColor}`
                        : undefined
                    }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Animated border gradient */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, ${industry.glowColor} 50%, transparent 100%)`,
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="relative inline-block mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-xl blur-lg opacity-30`}
                          animate={{ scale: hoveredIndex === index ? [1, 1.2, 1] : 1 }}
                          transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                        />
                        <div className={`relative bg-gradient-to-br ${industry.gradient} bg-clip-text text-transparent p-3 rounded-xl`}>
                          <industry.Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-display mb-3 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#6B7EF2] group-hover:via-[#8B5CF6] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {industry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
                        {industry.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-4">
                        {industry.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: index * 0.05, duration: 0.2 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              className={`w-1 h-1 rounded-full bg-gradient-to-r ${industry.gradient}`}
                              whileHover={{ scale: 2 }}
                            />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        className="pt-3 border-t border-gray-200 group-hover:border-transparent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <button onClick={scrollToContact} className={`inline-flex items-center gap-1 text-xs font-semibold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent cursor-pointer`}>
                          Learn more
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`}
                    />
                  </motion.div>

                  {/* Floating particles */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`}
                          initial={{ x: Math.random() * 50 - 25, y: Math.random() * 50 - 25, opacity: 0 }}
                          animate={{ y: [0, -80], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          style={{ left: '50%', top: '50%' }}
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

export default Industries
