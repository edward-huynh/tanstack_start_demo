import ReactLenis from 'lenis/react'
import { ProgressHeader } from './components/ProgressHeader'
import { ProgressSection1 } from './components/ProgressSection1'
import { ProgressSection2 } from './components/ProgressSection2'
import Silk from '@/components/Silk'
import { ProgressSection3 } from './components/ProgressSection3'

export const ProgressingPage = () => {
  return (
    <ReactLenis root className="relative overflow-hidden">
      <div className="fixed w-full top-0 left-0">
        <Silk
          speed={5}
          scale={1}
          color="#085C65"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <ProgressHeader />
      <ProgressSection1 />
      <ProgressSection2 />
      <ProgressSection3 />
    </ReactLenis>
  )
}
