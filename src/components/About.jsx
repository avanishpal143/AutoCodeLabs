import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Users, MapPin, Zap, Target, Lock } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { label: 'Years at Google', value: '5+', Icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { label: 'Engineering Teams', value: '100+', Icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Based in', value: 'Switzerland', Icon: MapPin, color: 'from-green-500 to-emerald-500' },
  ]

  const highlights = [
    {
      Icon: Zap,
      title: 'Google-Scale Expertise',
      description: 'Built systems serving billions of users',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      Icon: Target,
      title: 'Problem-First Approach',
      description: 'Solutions born from real engineering pain points',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      Icon: Lock,
      title: 'Privacy-Conscious',
      description: 'Swiss infrastructure, GDPR-aligned by design',
      gradient: 'from-green-400 to-teal-500'
    },
  ]

  return (
    <section id="about" className="py-16 px-6 relative bg-gradient-to-b from-white via-light-100 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"
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
          {/* Tag with animation */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 text-brand-purple border border-brand-purple/30 rounded-full backdrop-blur-sm"
          >
            About
          </motion.span>

          {/* Main Content Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
                Built by an Engineer Who Knows the{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Problem Firsthand</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h2>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="relative pl-6 border-l-4 border-brand-blue/30"
                >
                  This venture was founded by a <span className="text-gray-900 font-semibold">former Staff Software Engineer at Google</span> — 
                  someone who spent years inside one of the world's most sophisticated engineering organizations and watched brilliant 
                  teams get slowed down by process, not capability.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Based in <span className="text-brand-blue font-semibold">Switzerland</span>, we're building the infrastructure that modern software 
                  teams deserve: an intelligent, agentic layer that understands context, executes tasks, and integrates seamlessly into 
                  how developers already work.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="text-gray-900 font-semibold text-xl"
                >
                  This isn't automation for automation's sake — it's precision tooling from someone who has lived the problem.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Side - Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-white rounded-2xl p-6 border border-light-300 shadow-soft-lg hover:shadow-glow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center shadow-md`}>
                        <highlight.Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gradient transition-all">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${highlight.gradient}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative bg-white rounded-2xl p-8 text-center border border-light-300 shadow-soft-lg hover:shadow-glow-lg transition-all duration-300 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-4 flex justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Value with counter animation */}
                <motion.div
                  className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-gray-600 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
