'use client'

import Particles from '@/components/Particles'
import { ArrowDown } from 'lucide-react'

export const Hero = () => {
  return (
    <div
      id="section_1"
      className="w-full bg-linear-to-t from-[#fffcdc] to-[#d9a7c7] mx-auto px-10 grid grid-cols-2 items-center h-screen py-24 relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className=""></div>
      <div className="flex flex-col gap-5 z-10">
        <span className="text-6xl font-semibold font-delius text-[#52322B]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <span className="text-[#52322B] text-lg">
          Minus ab, ipsa tempora est dolor ratione quis ea placeat, repudiandae
          aspernatur voluptates alias impedit sunt recusandae temporibus
          corrupti fugiat fugit earum.
        </span>
        <button className="group flex gap-3 items-center rounded-full px-6 py-2 border border-[#52322B] text-[#52322B] hover:bg-[#52322B] hover:text-white cursor-pointer transition-all duration-300  w-fit">
          <span>Start Now</span>
          <div className="size-7 flex justify-center items-center group-hover:text-[#52322B] rounded-full border border-[#52322B] group-hover:bg-[#fffcdc]">
            <ArrowDown strokeWidth={1} />
          </div>
        </button>
      </div>
    </div>
  )
}
