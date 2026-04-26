import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PackageOpen, Target, Rocket } from 'lucide-react'

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

const steps = [
  {
    number: '01',
    title: 'Onboard Your Codebase',
    description: 'Connect your repo. The agent indexes your structure, patterns, and dependencies in minutes.',
    Icon: PackageOpen,
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
    glowColor: 'rgba(107, 126, 242, 0.4)',
    features: ['Git Integration', 'Pattern Analysis', 'Dependency Mapping']
  },
  {
    number: '02',
    title: 'Define Your Intent',
    description: "Give it a goal: a feature, a bug fix, a refactor. It builds an execution plan and asks only what it can't infer.",
    Icon: Target,
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    features: ['Natural Language', 'Smart Planning', 'Context Inference']
  },
  {
    number: '03',
    title: 'Review & Ship',
    description: 'Outputs land in your workflow as PRs, diffs, or deployed branches. You stay in control of the final call.',
    Icon: Rocket,
    gradient: 'from-[#EC4899] to-[#DB2777]',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    features: ['PR Generation', 'Code Review', 'Deploy Ready']
  },
]

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-16 px-6 relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
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
          {/* Header */}
          <div className="text-center mb-10">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8B5CF6]/10 to-[#6B7EF2]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 rounded-full backdrop-blur-sm"
            >
              How It Works
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-semibold font-display mb-4 leading-tight"
            >
              Three Phases. One{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Seamless Experience
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
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From codebase analysis to production deployment, fully automated.
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                onHoverStart={() => setActiveStep(index)}
                className="group relative"
              >
                {/* Glass Card */}
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  onClick={scrollToContact}
                  className="relative h-full rounded-3xl p-8 overflow-hidden cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: activeStep === index 
                      ? `0 25px 50px ${step.glowColor}` 
                      : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${step.glowColor} 50%, transparent 100%)`,
                      opacity: activeStep === index ? 1 : 0,
                      transition: 'opacity 0.5s',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number with Glow */}
                    <motion.div
                      className="relative mb-6"
                      animate={{
                        scale: activeStep === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeStep === index ? Infinity : 0,
                      }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-30`}
                        animate={{
                          scale: activeStep === index ? [1, 1.3, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: activeStep === index ? Infinity : 0,
                        }}
                      />
                      <div className={`relative text-5xl font-bold font-display bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      animate={{
                        y: activeStep === index ? [0, -10, 0] : 0,
                        rotate: activeStep === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 2, repeat: activeStep === index ? Infinity : 0 }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <step.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-display mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#6B7EF2] group-hover:via-[#8B5CF6] group-hover:to-[#EC4899] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`}
                            whileHover={{ scale: 2 }}
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <motion.div
                      className={`mt-6 h-1 bg-gradient-to-r ${step.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      animate={activeStep === index ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                  />

                  {/* Floating Particles */}
                  {activeStep === index && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`}
                          initial={{ 
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                            opacity: 0 
                          }}
                          animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
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

                {/* Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 z-20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    <div className={`h-full bg-gradient-to-r ${step.gradient} rounded-full`} />
                    <motion.div
                      className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                Average Time to Production
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.8, type: "spring" }}
                    >
                      5
                    </motion.span>
                    <span className="text-2xl text-gray-500">min</span>
                  </div>
                  <div className="text-sm text-gray-600">Onboarding</div>
                </div>
                <div className="text-3xl text-gray-300">→</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 2, type: "spring" }}
                    >
                      2
                    </motion.span>
                    <span className="text-2xl text-gray-500">min</span>
                  </div>
                  <div className="text-sm text-gray-600">Planning</div>
                </div>
                <div className="text-3xl text-gray-300">→</div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mb-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 2.2, type: "spring" }}
                    >
                      Ready
                    </motion.span>
                  </div>
                  <div className="text-sm text-gray-600">To Ship</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
