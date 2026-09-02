import { benefits } from "@/content/benefits";
import { Container } from "@/components/ui/Container";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyLalabaSection() {
  return (
    <section id="why-lalaba" className="site-section section-anchor surface-section">
      <Container>
        <SectionHeading
          eyebrow="Why Lalaba"
          title="A practical digital layer for laundry"
          description="Designed around convenience, choice, visibility, and connection without making claims the product cannot verify."
          align="center"
        />
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
