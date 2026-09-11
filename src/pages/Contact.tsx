import { Mail } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-24">
      {/* SECTION 01 — MỞ ĐẦU */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-6 uppercase">
          LIÊN HỆ & HỖ TRỢ
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium mb-8 leading-relaxed max-w-3xl">
          Nếu bạn cần giải đáp, hỗ trợ hoặc muốn gửi phản hồi liên quan đến cộng đồng, bạn có thể liên hệ với chúng tôi qua các kênh chính thức dưới đây.
        </p>
        <div className="bg-primary-light p-6 md:p-10 rounded-3xl">
          <p className="text-text-muted md:text-lg leading-relaxed text-justify">
            Đây là nơi thành viên có thể tìm thấy các kênh liên hệ chính thức và thông tin chi tiết về phạm vi hỗ trợ của Ban Quản Trị đối với các vấn đề trong cộng đồng.
          </p>
        </div>
      </section>

      {/* SECTION 02 — KÊNH LIÊN HỆ CHÍNH THỨC */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 uppercase tracking-wide">
          KÊNH LIÊN HỆ CHÍNH THỨC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Facebook Card */}
          <div className="bg-surface border border-border p-6 md:p-8 rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6 shrink-0">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-text mb-3">Facebook Page</h3>
            <p className="text-text-muted flex-grow mb-8">
              Kênh cập nhật thông tin và hỗ trợ chính thức của DAS Community.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61588768704491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 md:py-3 bg-text text-surface rounded-full font-semibold hover:bg-primary transition-colors w-full md:w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-[0.98]"
            >
              TRUY CẬP
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-surface border border-border p-6 md:p-8 rounded-3xl flex flex-col h-full">
            <div className="w-12 h-12 bg-primary-light text-primary rounded-2xl flex items-center justify-center mb-6 shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-text mb-1">Email</h3>
            <p className="text-primary font-medium mb-3 select-all">das.community.yc@gmail.com</p>
            <p className="text-text-muted flex-grow mb-8">
              Kênh liên hệ khi cần trao đổi về các vấn đề thuộc phạm vi hỗ trợ của cộng đồng.
            </p>
            <a
              href="mailto:das.community.yc@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 md:py-3 bg-text text-surface rounded-full font-semibold hover:bg-primary transition-colors w-full md:w-fit focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-[0.98]"
            >
              GỬI EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 03 — BAN QUẢN TRỊ CÓ THỂ HỖ TRỢ */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 uppercase tracking-wide">
          BAN QUẢN TRỊ CÓ THỂ HỖ TRỢ
        </h2>
        <p className="text-text-muted md:text-lg mb-8 italic">
          Ban Quản Trị chỉ tiếp nhận và hỗ trợ các vấn đề liên quan trực tiếp đến hoạt động của cộng đồng.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "01",
              title: "NỘI QUY & QUY ĐỊNH",
              desc: "Giải đáp các thắc mắc liên quan đến nội quy, quy định và phạm vi hoạt động của nhóm."
            },
            {
              id: "02",
              title: "THÀNH VIÊN & THAM GIA NHÓM",
              desc: "Hỗ trợ các vấn đề liên quan đến quá trình tham gia và hoạt động với tư cách thành viên trong nhóm."
            },
            {
              id: "03",
              title: "BÀI VIẾT & BÌNH LUẬN",
              desc: "Hỗ trợ các vấn đề liên quan đến bài viết, bình luận và quá trình hiển thị nội dung trong nhóm."
            },
            {
              id: "04",
              title: "KIỂM DUYỆT",
              desc: "Tiếp nhận các thắc mắc liên quan đến quá trình xét duyệt và phản hồi kiểm duyệt nội dung."
            },
            {
              id: "05",
              title: "BÁO CÁO VI PHẠM",
              desc: "Tiếp nhận báo cáo về nội dung hoặc hành vi có dấu hiệu vi phạm nội quy của nhóm."
            },
            {
              id: "06",
              title: "HOẠT ĐỘNG CỘNG ĐỒNG",
              desc: "Tiếp nhận các phản hồi, góp ý hoặc vấn đề khác liên quan trực tiếp đến hoạt động và môi trường của cộng đồng."
            }
          ].map((item) => (
            <div key={item.id} className="bg-surface border border-border p-6 rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-primary opacity-60">{item.id}</span>
                <h3 className="font-bold text-text uppercase">{item.title}</h3>
              </div>
              <p className="text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04 — PHẠM VI HỖ TRỢ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 uppercase tracking-wide">
          PHẠM VI HỖ TRỢ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface border border-border p-6 md:p-8 rounded-3xl h-full border-t-4 border-t-primary">
            <h3 className="text-lg font-bold text-text mb-4 uppercase">TRONG PHẠM VI</h3>
            <p className="text-text-muted leading-relaxed">
              Ban Quản Trị có thể hỗ trợ các vấn đề liên quan trực tiếp đến hoạt động của nhóm, nội quy, thành viên, bài viết, bình luận, kiểm duyệt và các hoạt động cộng đồng thuộc phạm vi quản lý.
            </p>
          </div>
          
          <div className="bg-surface border border-border p-6 md:p-8 rounded-3xl h-full">
            <h3 className="text-lg font-bold text-text mb-4 uppercase">NGOÀI PHẠM VI</h3>
            <p className="text-text-muted leading-relaxed">
              Các vấn đề, hoạt động hoặc sự việc diễn ra bên ngoài nhóm không thuộc phạm vi xử lý của Ban Quản Trị. Trong những trường hợp này, chúng tôi không thể trực tiếp can thiệp, xác minh hoặc giải quyết thay cho các bên liên quan.
            </p>
          </div>
        </div>
        
        <div className="bg-primary-light/50 px-6 py-4 rounded-xl border border-primary/10">
          <p className="text-text-muted italic text-center font-medium">
            Khi liên hệ, vui lòng mô tả rõ vấn đề và cung cấp thông tin liên quan để Ban Quản Trị có thể kiểm tra và hỗ trợ phù hợp.
          </p>
        </div>
      </section>

      {/* SECTION 05 — LỜI KẾT */}
      <section className="pt-8 border-t border-border mt-16">
        <h2 className="text-xl font-bold text-text mb-4 uppercase tracking-wide text-center">
          CẢM ƠN BẠN
        </h2>
        <p className="text-text-muted text-center italic max-w-2xl mx-auto leading-relaxed">
          Cảm ơn bạn đã dành thời gian tìm hiểu thông tin và sử dụng các kênh hỗ trợ chính thức của DAS Community. Chúng tôi luôn trân trọng những phản hồi góp phần xây dựng một cộng đồng tích cực và hữu ích.
        </p>
      </section>
    </div>
  );
}
