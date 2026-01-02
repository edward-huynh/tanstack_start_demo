'use client'

import { motion } from 'motion/react'
import { Link } from '@tanstack/react-router'
import { Home, Search } from 'lucide-react'

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
        >
          <h1 className="text-[200px] md:text-[280px] font-bold text-white leading-none font-esrebond">
            404
          </h1>
        </motion.div>

        {/* Icon */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Search className="w-16 h-16 text-white/80" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/70 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/">
            <motion.button
              className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full flex items-center gap-2 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/journey">
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.15)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Journey
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
