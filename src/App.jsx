import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load everything below the fold — loads only when needed
const About       = lazy(() => import('./components/About'))
const Services    = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const HowItWorks  = lazy(() => import('./components/HowItWorks'))
const Industries  = lazy(() => import('./components/Industries'))
const Testimonials= lazy(() => import('./components/Testimonials'))
const FAQ         = lazy(() => import('./components/FAQ'))
const Contact     = lazy(() => import('./components/Contact'))
const Footer      = lazy(() => import('./components/Footer'))

const SectionFallback = () => <div style={{ minHeight: '200px' }} />

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main>
        {/* Hero loads immediately — above the fold */}
        <Hero />

        {/* Everything else lazy loads */}
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Industries />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
