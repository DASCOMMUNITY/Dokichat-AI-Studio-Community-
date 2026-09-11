import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CONFIG } from "../config";

const CARDS = [
  {
    id: "01",
    title: "GIỚI THIỆU",
    desc: "Tìm hiểu về cộng đồng",
    path: "/gioi-thieu",
  },
  {
    id: "02",
    title: "QUY ĐỊNH",
    desc: "Nội quy cộng đồng",
    path: "/quy-dinh",
  },
  {
    id: "03",
    title: "HƯỚNG DẪN",
    desc: "Thông tin dành cho thành viên",
    path: "/huong-dan",
  },
  {
    id: "04",
    title: "FAQ",
    desc: "Các câu hỏi thường gặp",
    path: "/faq",
  },
  {
    id: "05",
    title: "LIÊN HỆ & HỖ TRỢ",
    desc: "Các kênh hỗ trợ chính thức",
    path: "/lien-he",
  },
];

export function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-20 md:py-32 flex flex-col items-start">
      
      {/* Intro Section */}
      <section className="mb-24 w-full">
        <p className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-4">
          {CONFIG.GROUP_SHORT_NAME}
        </p>
        <h1 className="text-[clamp(16px,5vw,42px)] font-bold tracking-tight text-text mb-8 leading-tight whitespace-nowrap">
          {CONFIG.GROUP_NAME}
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold text-text mb-6">
          Giới thiệu nhóm
        </h2>
        
        <div className="prose prose-lg text-text-muted mb-12 space-y-6">
          <p>
            Chào mừng bạn đến với {CONFIG.GROUP_NAME} — nơi mọi người có thể chia sẻ ý tưởng, nhân vật và những câu chuyện được tạo ra cùng AI.
          </p>
          <p>
            Đây là cộng đồng dành cho những ai yêu thích trò chuyện và nhập vai với nhân vật AI, đồng thời khám phá các cách sáng tạo nội dung bằng AI như viết prompt, xây dựng nhân vật và phát triển kịch bản.
          </p>
          <p>
            Tại đây, bạn có thể tạo nhân vật, phát triển cốt truyện, chia sẻ trải nghiệm nhập vai và trao đổi cùng những thành viên khác trong khuôn khổ nội quy của nhóm.
          </p>
        </div>

        <a
          href={CONFIG.GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center bg-text text-surface font-semibold px-8 py-4 rounded-full hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-[0.98] text-base md:text-lg"
        >
          TRUY CẬP NHÓM
        </a>
      </section>

      {/* Cards Section */}
      <section className="w-full flex flex-col gap-4 md:gap-6">
        {CARDS.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-surface border border-border rounded-2xl md:rounded-none transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:hover:-translate-y-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background active:bg-primary-light/30 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
              <span className="text-sm font-bold text-text-muted/40 transition-colors group-hover:text-primary/70">
                {card.id}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-bold text-text transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="text-text-muted font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-text-muted/30 transition-all duration-300 ease-out group-hover:text-primary group-hover:translate-x-1 mt-6 md:mt-0 self-end md:self-auto shrink-0 motion-reduce:group-hover:transform-none" />
          </Link>
        ))}
      </section>
      
    </div>
  );
}
