import { Accordion } from "../components/Accordion";
import { faqs } from "../data/faq";

export function Faq() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-24">
      {/* Page Title */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase">
          FAQ
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium">
          Câu hỏi thường gặp
        </p>
      </section>

      {/* Intro Card */}
      <section className="mb-16">
        <div className="bg-primary-light p-6 md:p-12 rounded-3xl">
          <h2 className="text-xl md:text-2xl font-bold text-text mb-4 tracking-wider uppercase">
            FAQ
          </h2>
          <p className="text-text-muted md:text-lg leading-relaxed text-justify">
            Một số câu hỏi thường gặp và thông tin giải đáp dành cho thành viên trong quá trình tham gia và hoạt động tại cộng đồng.
          </p>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="mb-16">
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              prefix={faq.id}
              title={faq.question}
              content={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
