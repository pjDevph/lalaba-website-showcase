import { TutorialTabs } from "@/components/interactive/TutorialTabs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TutorialsSection() {
  return (
    <section id="tutorials" className="site-section section-anchor tutorials-section">
      <Container>
        <SectionHeading
          eyebrow="Getting started"
          title="Getting started with Lalaba"
          description="Choose your path and walk through each step at your own pace."
          align="center"
        />
        <TutorialTabs />
      </Container>
    </section>
  );
}
