'use client'
import ReactLenis from 'lenis/react'
import { Hero } from './components/Hero'
import { HorizontalScroll } from './components/HorizontalScroll'
import { EditRing } from './components/EditRing'
// import { Fixed3DBackground } from './components/Fixed3DBackground'

export const RingFemalePage = () => {
  return (
    <>
      {/* Fixed 3D Background - Always visible behind content */}
      {/* <Fixed3DBackground isMobile={false} /> */}

      {/* Scrollable Content */}
      <ReactLenis root className="relative z-10">
        <div className="relative">
          {/* Section 1: Hero with transparent background */}
          <div id="section_1" className="relative">
            <Hero />
          </div>

          {/* Section 2: Horizontal Scroll with semi-transparent background */}
          <div id="section_2" className="relative">
            <HorizontalScroll />
          </div>

          {/* Section 3: Content overlay */}
          <div id="section_3" className="relative">
            <EditRing />
          </div>

          {/* Section 4: Final CTA */}
          <div
            id="section_4"
            className="relative h-screen bg-linear-to-t from-[#ee9ca7] to-[#ffdde1]"
          >
            <div className="px-10 w-full h-full flex items-center">
              <div className="max-w-[800px] flex flex-col gap-8">
                <h2 className="text-8xl font-semibold font-delius text-[#52322B] drop-shadow-lg">
                  Your Perfect Diamond Awaits
                </h2>
                <p className="text-3xl text-[#52322B]/80">
                  Discover the brilliance that lasts forever. Schedule your
                  private consultation today.
                </p>
                <button className="group flex gap-4 items-center px-12 py-6 bg-[#52322B] text-white rounded-full hover:bg-[#52322B]/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 w-fit text-2xl">
                  <span className="font-delius font-semibold">
                    Book Consultation
                  </span>
                  <svg
                    className="w-8 h-8 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  )
}
