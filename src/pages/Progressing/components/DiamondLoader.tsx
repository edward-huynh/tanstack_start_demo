'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DiamondLoaderProps {
  onLoaded: () => void
  children: React.ReactNode
}

export const DiamondLoader = ({ onLoaded, children }: DiamondLoaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Preload the diamond model
    const modelPath = '/Diamond.glb'

    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 10
      })
    }, 100)

    // Preload the model
    useGLTF.preload(modelPath)

    // Check if model is loaded
    const checkLoaded = async () => {
      try {
        const model = await useGLTF(modelPath)
        if (model) {
          setProgress(100)
          // Small delay to show 100% before transitioning
          setTimeout(() => {
            setIsLoaded(true)
            onLoaded()
          }, 300)
        }
      } catch (error) {
        console.error('Error loading diamond model:', error)
        // Even if there's an error, show the page after timeout
        setTimeout(() => {
          setIsLoaded(true)
          onLoaded()
        }, 2000)
      }
    }

    checkLoaded()

    return () => {
      clearInterval(progressInterval)
    }
  }, [onLoaded])

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-[#085C65] via-[#0a4a52] to-[#052e33]"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Diamond Loading Animation */}
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="w-24 h-24"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 10L80 35L65 80L35 80L20 35L50 10Z"
                      stroke="white"
                      strokeWidth="2"
                      fill="rgba(255, 255, 255, 0.1)"
                    />
                    <path
                      d="M50 10L50 80M20 35L80 35M35 80L65 80"
                      stroke="white"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </svg>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                />
              </div>

              {/* Loading Text */}
              <div className="text-center space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-delius text-white"
                >
                  Loading Diamond
                </motion.h2>

                {/* Progress Bar */}
                <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-linear-to-r from-white/60 to-white rounded-full"
                  />
                </div>

                {/* Progress Percentage */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-lg font-mono"
                >
                  {progress}%
                </motion.p>
              </div>

              {/* Sparkle effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="absolute w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      {children}
    </>
  )
}
