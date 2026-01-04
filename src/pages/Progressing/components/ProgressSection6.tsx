import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const ProgressSection6 = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [500, 0])
  const padding = useTransform(scrollYProgress, [0, 1], [100, 0])

  // Transform scroll progress to border radius class
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    ['52px', '52px', '0px'],
  )

  return (
    <motion.div
      ref={sectionRef}
      id="section_6"
      style={{ y, padding }}
      className="h-screen w-full z-10 relative"
    >
      <motion.div
        style={{
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
        className="w-full h-full bg-white flex flex-col items-center justify-center gap-8"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center z-10"
        >
          <img
            src="/progressing/logo_jemmia.png"
            className="w-32 lg:w-72"
            alt="Jemmia Diamond"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Contact Button */}
          <motion.button className="cursor-pointer px-8 py-2 bg-[#085C65] text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300">
            Liên Hệ Ngay
          </motion.button>

          {/* Visit Website Button */}
          <motion.button className="cursor-pointer px-8 py-2 bg-transparent border-2 border-[#085C65] text-[#085C65] font-semibold text-lg rounded-full hover:bg-[#085C65]/10 transition-all duration-300">
            Đến Trang Web
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
