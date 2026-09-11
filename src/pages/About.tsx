import { CONFIG } from "../config";

export function About() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-24">
      {/* Top Section */}
      <section className="mb-16 bg-primary-light rounded-3xl p-6 md:p-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
            GIỚI THIỆU
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium">
            Tìm hiểu về cộng đồng
          </p>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <h2 className="text-xl md:text-2xl font-bold text-text mb-6 tracking-wide uppercase">
            {CONFIG.GROUP_NAME}
          </h2>
          <div className="flex flex-col gap-3 text-text-muted md:text-lg">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold text-text sm:w-48 mb-1 sm:mb-0">Thành lập:</span> 
              <span>09/2025</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-semibold text-text sm:w-48 mb-1 sm:mb-0">Nền tảng hoạt động:</span> 
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Intro */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 leading-tight">
          Chào mừng bạn đến với Dokichat • AI Studio Community.
        </h2>
        <ul className="space-y-6 text-lg text-text-muted leading-relaxed list-disc pl-5 marker:text-primary">
          <li className="pl-2">
            Đây là không gian dành cho những ai yêu thích nhập vai (RP) và trò chuyện hư cấu. Tại đây, bạn có thể sáng tạo nhân vật của riêng mình, xây dựng cốt truyện, phát triển những câu chuyện độc đáo và tương tác cùng các thành viên khác trong cộng đồng.
          </li>
          <li className="pl-2">
            Hãy thoải mái chia sẻ ý tưởng, khám phá những cách kể chuyện mới và cùng nhau tạo nên một thế giới hư cấu sống động, trong khuôn khổ nội quy của nhóm.
          </li>
        </ul>
      </section>

      {/* Three Cards */}
      <section className="flex flex-col gap-6">
        {/* Card 01 */}
        <div className="p-6 md:p-10 bg-primary-light/30 border border-primary-light/50 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-[14px] bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
              01
            </div>
            <h3 className="text-lg md:text-xl font-bold text-text uppercase tracking-wider">
              MỤC TIÊU CỘNG ĐỒNG
            </h3>
          </div>
          <p className="text-text-muted text-lg leading-relaxed">
            Xây dựng một không gian để những người yêu thích AI có thể chia sẻ, khám phá và phát triển các ý tưởng sáng tạo cùng nhau; đặc biệt trong lĩnh vực trò chuyện, nhập vai với nhân vật AI và sáng tạo nội dung bằng AI.
          </p>
        </div>

        {/* Card 02 */}
        <div className="p-6 md:p-10 bg-primary-light/30 border border-primary-light/50 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-[14px] bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
              02
            </div>
            <h3 className="text-lg md:text-xl font-bold text-text uppercase tracking-wider">
              NỘI DUNG CỘNG ĐỒNG
            </h3>
          </div>
          <p className="text-text-muted text-lg leading-relaxed">
            Cộng đồng tập trung vào Dokichat, Google AI Studio/Gemini, cùng các nội dung liên quan đến sáng tạo với AI như xây dựng nhân vật, viết prompt, phát triển kịch bản, nhập vai và chia sẻ trải nghiệm sử dụng.
          </p>
        </div>

        {/* Card 03 */}
        <div className="p-6 md:p-10 bg-primary-light/30 border border-primary-light/50 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-[14px] bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
              03
            </div>
            <h3 className="text-lg md:text-xl font-bold text-text uppercase tracking-wider">
              ĐỊNH HƯỚNG HOẠT ĐỘNG
            </h3>
          </div>
          <p className="text-text-muted text-lg leading-relaxed">
            Hướng đến một cộng đồng có nội dung chất lượng, môi trường trao đổi tích cực và không gian sáng tạo cởi mở. Hoạt động của nhóm ưu tiên việc chia sẻ kiến thức, kinh nghiệm và ý tưởng, đồng thời duy trì các quy định cần thiết để bảo đảm chất lượng cộng đồng.
          </p>
        </div>
      </section>
    </div>
  );
}
