import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Users, MapPin, Zap, Target, Lock } from 'lucide-react'

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  const stats = [
    { label: 'Years at Google', value: '5+', Icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { label: 'Engineering Teams', value: '100+', Icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Based in', value: 'Switzerland', Icon: MapPin, color: 'from-green-500 to-emerald-500' },
  ]

  const highlights = [
    { Icon: Zap, title: 'Google-Scale Expertise', description: 'Built systems serving billions of users', gradient: 'from-yellow-400 to-orange-500' },
    { Icon: Target, title: 'Problem-First Approach', description: 'Solutions born from real engineering pain points', gradient: 'from-blue-400 to-indigo-500' },
    { Icon: Lock, title: 'Privacy-Conscious', description: 'Swiss infrastructure, GDPR-aligned by design', gradient: 'from-green-400 to-teal-500' },
  ]

  return (
    <section id="about" className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#8B5CF6]/10 to-[#6B7EF2]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 rounded-full">
            About
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold font-display mb-5 leading-tight">
                Built by an Engineer Who Knows the{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">Problem Firsthand</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                </span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p className="relative pl-5 border-l-4 border-[#6B7EF2]/30">
                  Founded by a <span className="text-gray-900 font-semibold">former Staff Software Engineer at Google</span> who watched brilliant teams get slowed down by process, not capability.
                </p>
                <p>
                  Based in <span className="text-[#6B7EF2] font-semibold">Switzerland</span>, we're building an intelligent agentic layer that understands context, executes tasks, and fits into how developers already work.
                </p>
                <p className="text-gray-900 font-semibold text-lg">
                  Precision tooling from someone who has lived the problem.
                </p>
              </div>
            </div>

            {/* Right — Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.07, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 6 }}
                  onClick={scrollToContact}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <highlight.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                  <motion.div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${highlight.gradient}`} initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.25 }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-8 transition-opacity duration-200`} />
                <div className="mb-4 flex justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
