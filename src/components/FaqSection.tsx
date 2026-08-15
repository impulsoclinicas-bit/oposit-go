import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/Container";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({
  title = "Preguntas frecuentes",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-brand-50/60 py-16">
      <Container>
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">{title}</h2>
        <div className="mt-8 divide-y divide-brand-200 rounded-xl border border-brand-200 bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5 open:bg-brand-50/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-900">
                {item.question}
                <span className="shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-brand-800/90">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd data={faqJsonLd} />
    </section>
  );
}
