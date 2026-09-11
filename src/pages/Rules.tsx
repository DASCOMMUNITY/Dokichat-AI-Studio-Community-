import { Accordion } from "../components/Accordion";
import { rulesGroups } from "../data/rules";

export function Rules() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-24">
      {/* Page Title */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
          QUY ĐỊNH
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium">
          Nội quy cộng đồng
        </p>
      </section>

      {/* Intro Card */}
      <section className="mb-12">
        <div className="bg-primary-light p-6 md:p-10 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-text mb-4 tracking-wider">
            NỘI QUY CỘNG ĐỒNG
          </h2>
          <p className="text-text-muted md:text-lg mb-8 leading-relaxed text-justify">
            Các quy tắc được xây dựng nhằm duy trì một môi trường tích cực, an toàn và phù hợp cho cộng đồng.
          </p>

          <div className="flex flex-col gap-2 text-text-muted text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <span className="text-text">Phiên bản hiện hành:</span>
              <span>09/2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text">Cập nhật lần cuối:</span>
              <span>10/09/2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text">Áp dụng:</span>
              <span>Toàn bộ thành viên</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="mb-16">
        <p className="text-lg md:text-xl text-text font-bold italic leading-relaxed">
          Để duy trì chất lượng và một môi trường cộng đồng văn minh, an toàn, chúng tôi đã xây dựng những quy tắc chung dành cho toàn bộ thành viên. Việc tham gia và hoạt động trong nhóm đồng nghĩa với việc bạn đã đồng ý tuân thủ các quy tắc này.
        </p>
      </section>

      {/* Rules System */}
      <section className="mb-20 space-y-16">
        {rulesGroups.map((group) => (
          <div key={group.id} className="scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-bold text-text mb-8 uppercase tracking-wide flex gap-4">
              <span className="text-primary-hover/30">{group.id}.</span>
              <span>{group.title}</span>
            </h3>
            
            <div className="flex flex-col gap-4">
              {group.rules.map((rule) => (
                <Accordion
                  key={rule.id}
                  prefix={rule.id}
                  title={rule.title}
                  content={rule.content}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Penalty Card */}
      <section className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-text mb-6 uppercase tracking-wider">
          QUY TRÌNH XỬ LÝ VI PHẠM
        </h3>
        <p className="text-lg md:text-xl text-text font-bold italic leading-relaxed mb-8">
          Các trường hợp vi phạm sẽ được Ban Quản Trị xem xét dựa trên nội dung, tính chất, mức độ và tình hình thực tế của từng trường hợp. Tuỳ theo mức độ vi phạm, Ban Quản Trị có thể áp dụng một hoặc nhiều biện pháp xử lý phù hợp.
        </p>
        
        <div className="bg-red-50 border border-red-100 p-6 md:p-10 rounded-2xl">
          <p className="text-red-900 md:text-lg font-medium leading-relaxed text-center">
            Nhắc nhở &rarr; Xóa nội dung &rarr; Hạn chế hoạt động &rarr; Đình chỉ trong thời gian nhất định &rarr; Xóa khỏi nhóm &rarr; Cấm khỏi nhóm
          </p>
        </div>
      </section>

      {/* Thank you text */}
      <section className="border-t border-border pt-12">
        <p className="text-text-muted text-lg leading-relaxed italic text-left">
          Cảm ơn bạn đã dành thời gian đọc các quy định của cộng đồng. Sự hợp tác và tuân thủ của mỗi thành viên góp phần duy trì một môi trường tích cực, văn minh và hữu ích cho tất cả mọi người.
        </p>
      </section>
    </div>
  );
}
