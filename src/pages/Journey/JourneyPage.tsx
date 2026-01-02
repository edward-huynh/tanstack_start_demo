'use client'

// This a landing page for journey diamond
import { ReactLenis } from 'lenis/react'
import { HeroSection } from './components/HeroSection'
export const JourneyPage = () => {
  return (
    <ReactLenis root>
      <section id="hero" className="w-full min-h-screen relative">
        <HeroSection />
      </section>
    </ReactLenis>
  )
}
