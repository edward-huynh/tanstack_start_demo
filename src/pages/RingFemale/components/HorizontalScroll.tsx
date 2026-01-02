'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current

    if (!section || !scrollContainer) return

    // Calculate the scroll distance
    const scrollWidth = scrollContainer.scrollWidth - section.offsetWidth

    const scrollTrigger = gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [])
  return (
    <div
      ref={sectionRef}
      id="section_2"
      className="bg-[#fffcdc] w-full h-screen overflow-hidden relative pt-10"
    >
      {/* Header - Positioned absolutely so it doesn't affect scroll calculation */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-10">
        <div className="flex flex-col gap-5 items-center text-center max-w-[60%]">
          <span className="text-6xl font-semibold font-delius text-[#52322B]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span className="text-[#52322B] text-lg">
            Neque, ipsam id quis omnis harum nemo eos quam maiores repellendus
            tempora error ex.
          </span>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="w-full h-full flex items-center mt-14">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap will-change-transform"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-screen h-screen shrink-0 flex items-center justify-center"
            >
              <div className="w-[80%] aspect-video bg-[#d9a7c7]/40 backdrop-blur-2xl rounded-lg flex items-center justify-center">
                <span className="text-9xl font-delius font-bold text-white/50">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
