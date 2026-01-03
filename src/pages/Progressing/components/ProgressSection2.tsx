import { motion } from 'motion/react'

const aboutData = [
  {
    title: 'Sứ Mệnh',
    description:
      'Giúp khách hàng tích lũy kim cương một cách an toàn bền vững và không ngừng hoàn thiện để mang đến sản phẩm giá trị xứng tầm với khách hàng.',
  },
  {
    title: 'Tầm Nhìn',
    description:
      'Trở thành công ty chuyên gia tại Việt Nam trong lĩnh vực kim cương, mang đến sản phẩm kim cương chất lượng cùng thiết kế trang sức sáng tạo tôn vinh vẻ đẹp, vươn tầm thế giới.',
  },
  {
    title: 'Định Vị',
    description:
      'Jemmia mong muốn định vị mình là thương hiệu trang sức mang tinh thần dân tộc, tiếp biến tinh hoa văn hóa và nghệ thuật vào từng bộ sưu tập trang sức, đồng thời đáp ứng các tiêu chuẩn quốc tế để tạo nên những tác phẩm xứng tầm đẳng cấp toàn cầu.',
  },
]

export const ProgressSection2 = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen px-10 py-32 overflow-hidden">
      {aboutData.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: index % 2 == 0 ? 200 : -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className={`flex items-center gap-10 rounded-2xl ${index % 2 == 0 ? 'flex-row-reverse' : ''}`}
        >
          <div className="w-[50%] aspect-video bg-white/20 backdrop-blur-3xl rounded-2xl"></div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-[50%] p-5 flex flex-col gap-2 z-20"
          >
            <span className="text-4xl font-semibold font-delius text-white drop-shadow-lg">
              Jemmia Diamond
            </span>
            <span className="text-2xl text-white/80">{item.title}</span>
            <span className="text-white/80">{item.description}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
