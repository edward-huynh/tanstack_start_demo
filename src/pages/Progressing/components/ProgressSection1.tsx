import { motion } from 'framer-motion'

export const ProgressSection1 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
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
      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, rotate: 45, bottom: '0', left: '0' }}
        animate={{ opacity: 1, rotate: 0, bottom: '30%', left: '30%' }}
        transition={{ duration: 1 }}
        className="absolute size-32 bg-black border border-white rounded-lg rotate-12"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100, rotate: 50 }}
        animate={{ opacity: 1, y: 0, rotate: 12 }}
        transition={{ duration: 1 }}
        className="absolute size-52 bg-black rounded-lg top-5 right-5"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-20 right-[20%]"
      >
        <img
          src="/progressing/day_chuyen.png"
          className="w-72 -rotate-12"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-[3%]"
      >
        <img
          src="/progressing/diamonds.png"
          className="w-72 rotate-12"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-14 left-[3%]"
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
