'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Group } from 'three'

gsap.registerPlugin(ScrollTrigger)

interface DiamondModelProps {
  isInSection6: boolean
  modelPath: string
  animationState: React.MutableRefObject<{
    rotationX: number
    rotationY: number
    rotationZ: number
    positionX: number
    positionY: number
    positionZ: number
    scale: number
    opacity: number
  }>
}

interface ProgressDiamondProps {
  isReady?: boolean
}

export const ProgressDiamond = ({ isReady = false }: ProgressDiamondProps) => {
  const animationState = useRef({
    rotationX: 0.2,
    rotationY: 0,
    rotationZ: -0.7,
    positionX: -1, // Start far left
    positionY: -0.5,
    positionZ: 0,
    scale: 1,
    opacity: 1.0,
  })

  const [isInSection6, setIsInSection6] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const modelPath = '/Diamond.glb'

  useEffect(() => {
    // Track when we're in section 6 for z-index change
    const handleScroll = () => {
      const section6 = document.getElementById('section_6')
      const section5 = document.getElementById('section_5')
      if (section5) {
        const rect = section5.getBoundingClientRect()
        const inSection5 = rect.top < window.innerHeight && rect.bottom > 0
        setIsInSection6(inSection5)
      }
      if (section6) {
        const rect = section6.getBoundingClientRect()
        const inSection6 = rect.top < window.innerHeight && rect.bottom > 0
        setIsInSection6(inSection6)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initially
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Wait for sections to be ready before initializing ScrollTrigger
    if (!isReady) return

    // Small delay to ensure DOM is fully rendered
    if (!isMobile) {
      const timer = setTimeout(() => {
        // Section 1: Just rotation
        // Default values
        const defaultRotationX = 0.2
        const defaultRotationY = 0
        const defaultRotationZ = -0.7
        const defaultPositionX = -1

        ScrollTrigger.create({
          trigger: '#section_1',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            // Interpolate from default to target based on progress
            const targetRotation = Math.PI * 2

            gsap.to(animationState.current, {
              rotationX:
                defaultRotationX +
                (targetRotation - defaultRotationX) * self.progress,
              rotationY:
                defaultRotationY +
                (targetRotation - defaultRotationY) * self.progress,
              rotationZ:
                defaultRotationZ +
                (targetRotation - defaultRotationZ) * self.progress,
              positionX:
                defaultPositionX + (0 - defaultPositionX) * self.progress, // -1 → 0
              duration: 0.1,
              ease: 'none',
            })
          },
        })

        // Section 2: Rotation continues + scale animation
        ScrollTrigger.create({
          trigger: '#section_2',
          start: 'top top',
          end: 'bottom-=500px top',
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(animationState.current, {
              rotationX: Math.PI * 2 + self.progress * Math.PI * 2, // Continue from section 1
              rotationY: Math.PI * 2 + self.progress * Math.PI * 2,
              rotationZ: Math.PI * 2 + self.progress * Math.PI * 2,
              scale: 1.0, // 1.0 → 1.5
              duration: 0.1,
              opacity: 1,
              ease: 'none',
            })
          },
        })

        // Section 3: Fade out and hide
        ScrollTrigger.create({
          trigger: '#section_3',
          start: 'top bottom-=500px',
          end: 'bottom bottom-=300px',
          scrub: 1,
          onUpdate: (self) => {
            // Interpolate for bidirectional scroll support
            const fadeProgress = self.progress

            // Start values (from section 2)
            const startOpacity = 1
            const startScale = 1.0

            // End values (completely hidden)
            const endOpacity = 0
            const endScale = 0

            gsap.to(animationState.current, {
              opacity:
                startOpacity + (endOpacity - startOpacity) * fadeProgress, // 1 → 0
              scale: startScale + (endScale - startScale) * fadeProgress, // 1.0 → 0
              duration: 0.1,
              ease: 'none',
            })
          },
        })

        // Keep diamond hidden at bottom of section 3 (for scroll up from section 4)
        ScrollTrigger.create({
          trigger: '#section_3',
          start: 'bottom bottom-=300px',
          end: 'bottom top',
          scrub: 1,
          onUpdate: () => {
            gsap.to(animationState.current, {
              opacity: 0,
              scale: 0,
              duration: 0.1,
              ease: 'none',
            })
          },
        })

        ScrollTrigger.create({
          trigger: '#section_4',
          start: 'top bottom-=500px',
          end: 'bottom bottom-=300px',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress

            // Zigzag pattern: oscillate between 1.5 and -1.5
            // Complete cycles: adjust frequency for more or fewer zigzags
            const frequency = 3.5 // Number of complete zigzags (1.5 → -1.5 → 1.5 = 1 cycle)
            const amplitude = 1.5

            // Sine wave creates smooth zigzag: starts at 1.5, goes to -1.5, back to 1.5
            const positionX =
              amplitude * Math.sin(progress * Math.PI * 2 * frequency)

            gsap.to(animationState.current, {
              positionX: positionX,
              // rotationY: rotationY,
              rotationX: progress * Math.PI * 2, // Slight X rotation
              rotationZ: progress * Math.PI * 2, // Slight Z rotation
              opacity: 1,
              scale: 2,
              duration: 0.1,
              ease: 'none',
            })
          },
        })

        // Section 5: Transition to 3 diamonds evenly spaced
        ScrollTrigger.create({
          trigger: '#section_5',
          start: 'top top',
          end: 'center center',
          scrub: 1,
          onUpdate: () => {
            gsap.to(animationState.current, {
              rotationY: 0,
              ease: 'back.in',
            })
          },
        })

        // Section 6: Rotate and float up to final position
        ScrollTrigger.create({
          trigger: '#section_6',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            const fadeProgress = self.progress

            // Fixed starting values (from section 5/4 end state)
            const startScale = 2
            // const startPositionY = 0
            const startRotationX = Math.PI * 2 // Approximate from section 4
            const startRotationZ = Math.PI * 2 // Approximate from section 4

            // End values - final position for section 6
            const endScale = 1
            // const endPositionY = -2
            const endRotationX = 0.1
            const endRotationY = 0
            const endRotationZ = -0.7

            gsap.to(animationState.current, {
              scale: startScale + (endScale - startScale) * fadeProgress, // 2 → 1
              // positionY:
              //   startPositionY + (endPositionY - startPositionY) * fadeProgress, // 0 → -2
              rotationX:
                startRotationX + (endRotationX - startRotationX) * fadeProgress,
              rotationY: endRotationY, // Set to 0 (auto-rotation disabled in section 6)
              rotationZ:
                startRotationZ + (endRotationZ - startRotationZ) * fadeProgress,
              duration: 0.1,
              ease: 'none',
            })
          },
        })
        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh()
      }, 100)

      return () => {
        clearTimeout(timer)
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    } else {
      // Mobile progressing just show diamond and scroll top to bottom
      ScrollTrigger.create({
        trigger: '#section_1',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      ScrollTrigger.create({
        trigger: '#section_2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      ScrollTrigger.create({
        trigger: '#section_3',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      ScrollTrigger.create({
        trigger: '#section_4',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      ScrollTrigger.create({
        trigger: '#section_5',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      ScrollTrigger.create({
        trigger: '#section_6',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(animationState.current, {
            opacity: progress,
            scale: progress,
            duration: 0.1,
            ease: 'none',
          })
        },
      })
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [isReady])
  return (
    <div className={`fixed inset-0 w-full h-full pointer-events-none z-10`}>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.7} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffdde1" />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Animated Diamond Model */}
          <DiamondModel
            modelPath={modelPath}
            animationState={animationState}
            isInSection6={isInSection6}
          />

          {/* Subtle shadows */}
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.2}
            scale={10}
            blur={2.5}
            far={4}
          />

          {/* Disable orbit controls - scroll driven only */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

const DiamondModel = ({
  modelPath,
  animationState,
  isInSection6,
}: DiamondModelProps) => {
  const { scene } = useGLTF(modelPath)
  const groupRef = useRef<Group>(null)
  useFrame((_state, delta) => {
    if (groupRef.current) {
      // Auto-rotation: continuous rotation only when scrolled
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0
      if (scrollY > 0 && !isInSection6) {
        // groupRef.current.rotation.y += delta * 1 // 1 radian per second
      }

      // Apply animations from scroll triggers (position, scale, opacity)
      groupRef.current.rotation.x = animationState.current.rotationX
      groupRef.current.rotation.z = animationState.current.rotationZ
      groupRef.current.position.x = animationState.current.positionX
      groupRef.current.position.y = animationState.current.positionY
      groupRef.current.position.z = animationState.current.positionZ
      groupRef.current.scale.set(
        animationState.current.scale,
        animationState.current.scale,
        animationState.current.scale,
      )

      // Apply opacity
      groupRef.current.traverse((child) => {
        if ('material' in child && child.material) {
          const material = child.material as any
          material.transparent = true
          material.opacity = animationState.current.opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.3} />
    </group>
  )
}

// Loading fallback
function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent pointer-events-none">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        <p className="text-white font-delius text-lg">Loading Diamond...</p>
      </div>
    </div>
  )
}
