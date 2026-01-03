import { motion } from 'motion/react'
export const ProgressHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed w-full top-0 left-0 z-40 flex justify-center items-center pt-4"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '50%' }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-black/20 backdrop-blur-3xl rounded-full h-16"
      ></motion.div>
    </motion.div>
  )
}
