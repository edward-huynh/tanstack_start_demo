import Particles from '@/components/Particles'
import { motion } from 'framer-motion'
import { ArrowDown, ChevronsDown } from 'lucide-react'

export const ProgressSection1 = () => {
  return (
    <div
      id="section_1"
      className="min-h-[calc(100vh+100px)] overflow-hidden flex justify-center items-center relative"
    >
      <div className="absolute size-full z-10 top-0 left-0">
        <Particles
          particleColors={['#085C65', '#085C65']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-4 items-center text-center z-20"
      >
        <span className="text-6xl font-semibold font-delius text-white drop-shadow-lg">
          JEMMIA DIAMOND
        </span>
        <p className="text-2xl text-white/80">
          THƯƠNG HIỆU KIM CƯƠNG VIỆT ĐỊNH VỊ GIÁ TRỊ TOÀN CẦU
        </p>
      </motion.div>
      <div className="absolute bottom-28 w-full text-white flex flex-col items-center gap-0">
        <span>Scroll Down</span>
        <ChevronsDown />
      </div>
      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: 50 }}
        animate={{ opacity: 1, y: 0, rotate: 12 }}
        transition={{ duration: 1 }}
        className="absolute size-52 bg-black rounded-lg top-5 right-5"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[40%] left-[65%]"
      >
        <img
          src="/progressing/diamonds.png"
          className="w-32 rotate-12"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-6 left-[3%]"
      >
        <img
          src="/progressing/ring_sketch.webp"
          className="w-72 rotate-12 rounded-lg shadow-2xl"
          alt=""
        />
      </motion.div>
    </div>
  )
}
