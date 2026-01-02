'use client'
import Silk from '@/components/Silk'
import { ArrowDown } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'
import { motion } from 'motion/react'

export const HeroSection = () => {
  return (
    <Fragment>
      <Silk
        speed={5}
        scale={1}
        color="#059430"
        noiseIntensity={1.5}
        rotation={0}
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <motion.div
          className="xl:w-[60vw] lg:w-[70vw] md:w-[80vw] w-[90vw] aspect-video bg-white/20 rounded-lg flex flex-col gap-2 justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-[72px] font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Journey Diamond
          </motion.h1>
          <motion.p
            className="text-[24px] text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            The ultimate journey to the diamond
          </motion.p>
        </motion.div>
      </div>
    </Fragment>
  )
}
