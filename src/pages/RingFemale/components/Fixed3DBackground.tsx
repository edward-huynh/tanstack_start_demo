'use client'

import { useRef, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import { Group } from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface DiamondModelProps {
  modelPath: string
  animationState: React.MutableRefObject<{
    rotationX: number
    rotationY: number
    rotationZ: number
    positionX: number
    positionY: number
    positionZ: number
    scale: number
  }>
}

// Diamond model with animation control
function DiamondModel({ modelPath, animationState }: DiamondModelProps) {
  const { scene } = useGLTF(modelPath)
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      // Apply animations from scroll triggers
      groupRef.current.rotation.x = animationState.current.rotationX
      groupRef.current.rotation.y = animationState.current.rotationY
      groupRef.current.rotation.z = animationState.current.rotationZ
      groupRef.current.position.x = animationState.current.positionX
      groupRef.current.position.y = animationState.current.positionY
      groupRef.current.position.z = animationState.current.positionZ
      groupRef.current.scale.set(
        animationState.current.scale,
        animationState.current.scale,
        animationState.current.scale,
      )
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

interface Fixed3DBackgroundProps {
  isMobile?: boolean
}

export const Fixed3DBackground = ({}: Fixed3DBackgroundProps) => {
  const animationState = useRef({
    rotationX: 0.4,
    rotationY: 0,
    rotationZ: 0,
    positionX: -1.3, // Start far left
    positionY: 0,
    positionZ: 0,
    scale: 3.0,
  })

  // const modelPath = isMobile ? '/Diamond_MB.glb' : '/Diamond_desk.glb'
  const modelPath = '/Diamond.glb'

  useEffect(() => {
    // Section 1: Initial state (Hero) - Far left side
    ScrollTrigger.create({
      trigger: '#section_1',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,

      onUpdate: (self) => {
        animationState.current.rotationY = self.progress * Math.PI * 0.5
        animationState.current.positionX = 3
      },
    })

    // Section 2: Hidden immediately
    ScrollTrigger.create({
      trigger: '#section_2',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        animationState.current.rotationY =
          Math.PI * 0.5 + self.progress * Math.PI
        animationState.current.rotationZ = 0
        animationState.current.positionX = -2 + self.progress * 2
        animationState.current.positionY = -1 + self.progress * 0.5
        animationState.current.positionZ = self.progress * -2
        animationState.current.scale = 3 // Hidden instantly
      },
    })

    // Section 3: Center with Z rotation
    ScrollTrigger.create({
      trigger: '#section_3',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        animationState.current.rotationY =
          Math.PI * 1.5 + self.progress * Math.PI
        animationState.current.rotationZ = self.progress * Math.PI * 0.5 // Add Z rotation
        animationState.current.positionX = 0 // Stay centered
        animationState.current.positionY =
          -0.5 + Math.sin(self.progress * Math.PI) * 0.5
        animationState.current.scale = 5
      },
    })

    // Section 4: Back to left side
    ScrollTrigger.create({
      trigger: '#section_4',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        animationState.current.rotationY =
          Math.PI * 2.5 + self.progress * Math.PI * 0.5
        animationState.current.rotationZ = Math.PI * 0.5 // Keep some Z rotation
        animationState.current.positionX = 1.2 // Move from center to left
        animationState.current.positionY =
          Math.sin(self.progress * Math.PI * 2) * 0.3
        animationState.current.scale = 3.4 - self.progress * 0.4
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-50">
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
          <DiamondModel modelPath={modelPath} animationState={animationState} />

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
