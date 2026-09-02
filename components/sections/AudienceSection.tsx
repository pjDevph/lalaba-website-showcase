import { AudienceTabs } from "@/components/interactive/AudienceTabs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudienceSection() {
  return (
    <section id="for-partners" className="site-section section-anchor audience-section">
      <Container>
        <SectionHeading
          eyebrow="Customer or provider"
          title="Lalaba works for you"
          description="Choose the experience that matches how you use Lalaba."
          align="center"
        />
        <AudienceTabs />
      </Container>
    </section>
  );
}
