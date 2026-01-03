import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const valueData = [
  {
    title: 'Tin tưởng',
    value:
      'Jemmia cam kết mang đến sự tin tưởng thông qua việc cung cấp các sản phẩm và dịch vụ kim cương chất lượng cao, minh bạch và đáng tin cậy cho khách hàng. Sự tin tưởng này không chỉ giúp khách hàng an tâm khi đầu tư mà còn tạo ra nền tảng bền vững cho mối quan hệ hợp tác lâu dài với đối tác. Đồng thời, Jemmia đóng góp vào xã hội bằng cách tuân thủ các nguyên tắc đạo đức và pháp lý, tạo dựng niềm tin chung trong cộng đồng và ngành công nghiệp.',
  },
  {
    title: 'Tự học',
    value:
      'Jemmia không ngừng học hỏi và phát triển, mang đến cho khách hàng những sản phẩm tiên tiến và dịch vụ ngày càng hoàn thiện. Đối tác cũng được hưởng lợi từ việc Jemmia luôn cập nhật kiến thức và công nghệ mới, giúp tối ưu hóa quy trình hợp tác và mang lại giá trị cao hơn. Bên cạnh đó, sự học hỏi và phát triển của Jemmia góp phần nâng cao tiêu chuẩn ngành kim cương tại Việt Nam, đóng góp tích cực vào sự tiến bộ của xã hội.',
  },
  {
    title: 'Thách thức',
    value:
      'Jemmia luôn sẵn sàng đối mặt với những thách thức và không ngừng phát triển để mang lại sản phẩm, dịch vụ tốt nhất cho khách hàng, đồng thời giúp đối tác mở rộng cơ hội kinh doanh và khám phá thị trường mới. Với tư duy đổi mới, Jemmia đóng góp vào sự phát triển kinh tế và nâng cao vị thế ngành kim cương Việt Nam trên trường quốc tế, góp phần xây dựng một xã hội tiến bộ và phát triển bền vững.',
  },
  {
    title: 'Thấu cảm',
    value:
      'Jemmia thấu hiểu và đáp ứng nhu cầu của khách hàng một cách chu đáo và cá nhân hóa, mang lại trải nghiệm tuyệt vời và tạo dựng niềm tin dài lâu. Sự thấu cảm này cũng giúp Jemmia xây dựng mối quan hệ đối tác hiệu quả, khi hai bên có thể hiểu và hỗ trợ lẫn nhau một cách tốt nhất. Hơn nữa, Jemmia luôn đồng cảm với cộng đồng, tích cực tham gia vào các hoạt động xã hội và từ thiện, góp phần xây dựng một xã hội công bằng và nhân văn hơn.',
  },
  {
    title: 'Tận tâm',
    value:
      'Jemmia tận tâm trong việc phục vụ khách hàng, đảm bảo mỗi khách hàng đều được chăm sóc tốt nhất từ lúc mua hàng đến dịch vụ hậu mãi. Sự tận tâm này cũng được thể hiện trong các mối quan hệ hợp tác với đối tác, đảm bảo mọi giao dịch và dự án đều đạt chất lượng cao nhất. Ngoài ra, Jemmia còn tận tâm đóng góp cho xã hội thông qua các hoạt động phát triển bền vững và trách nhiệm xã hội, nhằm tạo ra tác động tích cực cho cộng đồng.',
  },
]

export const ProgressSection3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current

    if (!section || !scrollContainer) return

    // Calculate the scroll distance
    const scrollWidth = scrollContainer.scrollWidth - section.offsetWidth

    const scrollTrigger = gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [])
  return (
    <div
      ref={sectionRef}
      id="section_3"
      className="w-full h-screen overflow-hidden relative"
    >
      {/* Header - Positioned absolutely so it doesn't affect scroll calculation */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-32">
        <div className="flex flex-col gap-5 items-center text-center max-w-[60%]">
          <span className="text-2xl font-semibold font-delius text-white">
            Jemmia Diamond
          </span>
          <span className="text-white text-6xl">05 Giá trị cốt lõi</span>
        </div>
      </div>
      <div className="h-20"></div>

      {/* Scroll Container */}
      <div className="w-full h-full flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap will-change-transform"
        >
          {valueData.map((item) => (
            <div
              key={item.title}
              className="w-screen h-screen shrink-0 flex items-center justify-center"
            >
              <div className="w-[80%] p-10 h-[700px] bg-white/20 rounded-lg backdrop-blur-3xl flex flex-col justify-center items-center gap-5">
                <span className="text-6xl font-semibold font-delius text-white">
                  {item.title}
                </span>
                <span className="text-white text-lg text-center">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
