import { motion } from 'framer-motion'

export const ProgressSection5 = () => {
  return (
    <div id="section_5" className="flex flex-col px-10 pb-10">
      <div className="h-[300px] w-full flex justify-center z-10">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="w-px bg-white/20 h-full"
        />
      </div>
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="w-full h-px bg-white/20 z-10 mt-5"
        ></motion.div>
      </div>

      <div className="w-full flex justify-between h-[600px] z-10 mt-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{
                height: index === 1 ? '100%' : '60%',
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-px bg-white/20"
            />
            <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                  style={{
                    pathLength: 0,
                  }}
                />
              </svg>
            </div>
            <span className="text-white text-center w-[70%]">
              Jemmia Diamond được Liên hiệp các hội UNESCO Việt Nam vinh danh
              “Thương hiệu bản sắc Việt định vị giá trị toàn cầu”.
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
