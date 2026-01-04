import { motion } from 'framer-motion'

const journeyData = [
  {
    id: 'journey_1',
    title: 'Hành trình của Kim cương có đạo đức',
    value:
      'Jemmia Diamond cam kết chỉ nhập khẩu kim cương từ những quốc gia có nguồn gốc xuất xứ đạo đức rõ ràng như Úc, Botswana, Canada, Namibia, Nga và Nam Phi. Các đối tác của chúng tôi đều phải đáp ứng những tiêu chuẩn cao về bảo vệ nhân quyền, an sinh xã hội và bảo tồn hệ sinh thái. Điều này mang đến cho khách hàng sự yên tâm rằng mỗi viên kim cương họ sở hữu không chỉ là sản phẩm xa xỉ, mà còn góp phần bảo vệ các giá trị nhân văn và môi trường.',
  },
  {
    id: 'journey_2',
    title: 'Hành trình pháp lý và nghĩa vụ thuế',
    value:
      'Tại Jemmia Diamond, tất cả sản phẩm kim cương đều được nhập khẩu chính ngạch, tuân thủ đầy đủ các thủ tục pháp lý và nghĩa vụ thuế. Điều này không chỉ đảm bảo rằng tài sản của khách hàng được bảo vệ một cách hợp pháp, mà còn là những minh chứng cho sự minh bạch và trách nhiệm của Jemmia đối với xã hội. Khách hàng có thể hoàn toàn yên tâm về tính hợp pháp và giá trị bền vững của mỗi sản phẩm.',
  },
  {
    id: 'journey_3',
    title: 'Hành trình của tiêu chuẩn cao',
    value:
      'Chỉ 2% kim cương trên toàn thế giới đáp ứng tiêu chuẩn khắt khe của Jemmia. Chúng tôi chỉ chấp nhận những viên kim cương không có lỗi ảnh hưởng đến chất lượng và vẻ đẹp như BGM (ánh sáng xanh), không huỳnh quang, và phải đạt các tiêu chuẩn cao nhất về giác cắt, đối xứng và độ bóng. Mỗi viên kim cương đều phải đạt nước từ D-F, độ sạch VS2 trở lên. Điều này mang đến cho khách hàng sự tự tin rằng sản phẩm họ sở hữu là tinh hoa của sự lựa chọn và kiểm định chất lượng cao nhất.',
  },
  {
    id: 'journey_4',
    title: 'Quy trình kiểm định chất lượng chuyên nghiệp',
    value:
      'Jemmia Diamond sử dụng hệ thống máy móc tiên tiến nhập khẩu từ GIA (Viện Ngọc học Hoa Kỳ) để kiểm định lại từng viên kim cương, từ viên tấm đến viên chủ. Các thiết bị GIA ID100, kính hiển vi Gemolite, và GIA Match iD đảm bảo xác định rõ nguồn gốc và chất lượng. Khi không đáp ứng được tiêu chuẩn, chúng tôi sẽ loại bỏ sản phẩm khỏi thị trường. Điều này mang lại sự minh bạch và tin cậy tuyệt đối cho khách hàng về chất lượng sản phẩm.',
  },
  {
    id: 'journey_5',
    title: 'Quy trình kiểm định chất lượng chuyên nghiệp',
    value:
      'Jemmia Diamond sử dụng hệ thống máy móc tiên tiến nhập khẩu từ GIA (Viện Ngọc học Hoa Kỳ) để kiểm định lại từng viên kim cương, từ viên tấm đến viên chủ. Các thiết bị GIA ID100, kính hiển vi Gemolite, và GIA Match iD đảm bảo xác định rõ nguồn gốc và chất lượng. Khi không đáp ứng được tiêu chuẩn, chúng tôi sẽ loại bỏ sản phẩm khỏi thị trường. Điều này mang lại sự minh bạch và tin cậy tuyệt đối cho khách hàng về chất lượng sản phẩm.',
  },
  {
    id: 'journey_6',
    title: 'Hành trình thiết kế hoàn hảo',
    value:
      'Với đội ngũ thiết kế tài năng, Jemmia đã tạo ra những sản phẩm độc đáo, kết hợp giữa văn hóa Việt Nam và xu hướng quốc tế. Quá trình thiết kế và chế tác mỗi sản phẩm đều được chăm chút tỉ mỉ với sự tham gia của các nghệ nhân Việt Nam tay nghề cao. Khách hàng không chỉ sở hữu một món trang sức kim cương, mà còn là một tác phẩm nghệ thuật được chế tác với sự tinh tế và tinh thần sáng tạo vượt bậc.',
  },
  {
    id: 'journey_7',
    title: 'Tặng phẩm hoàn hảo, giá trị trường tồn',
    value:
      'Jemmia Diamond kết tinh tất cả các hành trình từ đạo đức, pháp lý, chất lượng đến thiết kế để mang đến cho khách hàng những tặng phẩm hoàn hảo nhất. Mỗi món trang sức không chỉ là biểu tượng của sự xa hoa mà còn ẩn chứa giá trị tinh thần, văn hóa sâu sắc và thể hiện sự cá nhân hóa cao cấp. Những sản phẩm này không chỉ minh chứng cho sự tinh xảo và cam kết của Jemmia về chất lượng, mà còn trở thành món gia bảo trường tồn qua thời gian, được truyền từ thế hệ này sang thế hệ khác trong gia đình khách hàng.',
  },
]

export const ProgressSection4 = () => {
  return (
    <div
      id="section_4"
      className="flex flex-col gap-10 w-full p-10 relative overflow-x-hidden"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="h-full w-px bg-white/20 absolute top-0 left-1/2"
      ></motion.div>
      {journeyData.map((item, index) => (
        <div
          key={item.id}
          id={item.id}
          className={`flex gap-10 items-center w-full z-10 ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="w-1/2 "></div>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`w-1/2 h-[400px] flex items-center justify-end rounded-2xl  ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          >
            <div className="bg-white/20 backdrop-blur-3xl flex-1 h-full rounded-2xl flex flex-col gap-4 items-center justify-center p-5 text-white text-center">
              <span className="text-2xl font-semibold font-delius">
                {item.title}
              </span>
              <span>{item.value}</span>
            </div>
            <div className="w-10 h-px bg-white/20"></div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
