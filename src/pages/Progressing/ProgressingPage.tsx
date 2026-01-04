'use client'
import ReactLenis from 'lenis/react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Silk from '@/components/Silk'
import { ProgressHeader } from './components/ProgressHeader'
import { ProgressSection1 } from './components/ProgressSection1'
import { ProgressSection2 } from './components/ProgressSection2'
import { ProgressSection3 } from './components/ProgressSection3'
import { ProgressSection4 } from './components/ProgressSection4'
import { ProgressSection5 } from './components/ProgressSection5'
import { ProgressSection6 } from './components/ProgressSection6'
import { ProgressDiamond } from './components/ProgressDiamond'
import { DiamondLoader } from './components/DiamondLoader'
import Particles from '@/components/Particles'

export const ProgressingPage = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false)

  return (
    <DiamondLoader onLoaded={() => setIsModelLoaded(true)}>
      <ReactLenis root className="relative max-w-full overflow-hidden">
        <ProgressDiamond isReady={isModelLoaded} />
        <div className="fixed w-full top-0 left-0">
          <Silk
            speed={5}
            scale={1}
            color="#085C65"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <AnimatePresence>
          {isModelLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProgressHeader />
              <ProgressSection1 />
              <ProgressSection2 />
              <ProgressSection3 />
              <ProgressSection4 />
              <ProgressSection5 />
              <ProgressSection6 />
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>
    </DiamondLoader>
  )
}
