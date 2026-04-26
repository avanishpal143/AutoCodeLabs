import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from 'emailjs-com'
import { MapPin, Mail, Rocket, ArrowRight, Send } from 'lucide-react'

const contactInfo = [
  {
    Icon: MapPin,
    label: 'Address',
    value: 'Switzerland · Serving teams globally',
    gradient: 'from-[#6B7EF2] to-[#5563e5]',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'amit@autocodelabs.com',
    href: 'mailto:amit@autocodelabs.com',
    gradient: 'from-[#8B5CF6] to-[#7C3AED]',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: "Message sent successfully! We'll get back to you soon. ✅" })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({ type: 'error', message: 'Something went wrong. Please email us directly at amit@autocodelabs.com' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-6 relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#6B7EF2]/10 to-[#8B5CF6]/10 text-[#6B7EF2] border border-[#6B7EF2]/30 rounded-full backdrop-blur-sm"
            >
              Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight"
            >
              Ready to Rethink How Your Team{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  Builds Software?
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
              Early access spots are limited. Reach out and let's talk.
            </motion.p>
          </div>

          {/* Two-column layout — equal height cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT — Content card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden flex flex-col"
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899]" />

              {/* Animated glow bg */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#6B7EF2]/5 via-[#8B5CF6]/5 to-[#EC4899]/5 pointer-events-none"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative z-10 p-10 flex flex-col flex-1">
                {/* Floating rocket icon */}
                <motion.div
                  className="mb-8 inline-block"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] flex items-center justify-center shadow-xl">
                    <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Let's Build Something{' '}
                  <span className="bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm mb-8">
                  Whether you're a startup moving fast or an engineering org looking to scale
                  intelligently — we'd love to talk. Early access spots are limited.
                </p>

                {/* Contact info items */}
                <div className="space-y-4 mt-auto">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + i * 0.15 }}
                      className="flex items-center gap-4 group"
                    >
                      {/* Icon badge */}
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                        <item.Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative floating dots */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#6B7EF2] to-[#EC4899] opacity-30"
                    style={{
                      right: `${10 + i * 12}%`,
                      top: `${15 + i * 18}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.6 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Form card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="relative bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden flex flex-col"
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#6B7EF2]" />

              <div className="relative z-10 p-10 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-1">
                  Apply for Early Access
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Name <span className="text-[#EC4899]">*</span>
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'name'
                          ? '0 0 0 3px rgba(107,126,242,0.2)'
                          : '0 0 0 0px transparent',
                      }}
                      className="rounded-xl overflow-hidden"
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#6B7EF2] transition-all text-sm"
                        placeholder="Your full name"
                      />
                    </motion.div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Email <span className="text-[#EC4899]">*</span>
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'email'
                          ? '0 0 0 3px rgba(139,92,246,0.2)'
                          : '0 0 0 0px transparent',
                      }}
                      className="rounded-xl overflow-hidden"
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#8B5CF6] transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  {/* Message */}
                  <div className="relative flex-1 flex flex-col">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Message <span className="text-[#EC4899]">*</span>
                    </label>
                    <motion.div
                      animate={{
                        boxShadow: focusedField === 'message'
                          ? '0 0 0 3px rgba(236,72,153,0.2)'
                          : '0 0 0 0px transparent',
                      }}
                      className="rounded-xl overflow-hidden flex-1 flex flex-col"
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows="5"
                        className="w-full flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#EC4899] transition-all resize-none text-sm"
                        placeholder="Tell us about your team and what you're building..."
                      />
                    </motion.div>
                  </div>

                  {/* Status */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-xl text-sm ${
                        status.type === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-700'
                          : 'bg-red-50 border border-red-200 text-red-700'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-[#6B7EF2] via-[#8B5CF6] to-[#EC4899] rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Apply for Early Access</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
