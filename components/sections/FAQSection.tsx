import { getFaq } from "@/lib/site-content";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["General & Customer", "Partners"] as const;

export async function FAQSection() {
  const faq = await getFaq();
  return (
    <section id="faq" className="site-section section-anchor faq-section">
      <Container className="faq-container">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Helpful answers before you get started"
          description="Policy-sensitive answers use careful language and avoid inventing fees, requirements, timelines, or guarantees."
          align="center"
        />
        <div className="faq-groups">
          {categories.map((category) => (
            <div className="faq-group" key={category}>
              <h3>{category}</h3>
              <Accordion items={faq.filter((item) => item.category === category)} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
