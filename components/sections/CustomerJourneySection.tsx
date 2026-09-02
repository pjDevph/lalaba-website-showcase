import { customerJourney } from "@/content/customer-journey";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/FeatureCard";

export function CustomerJourneySection() {
  return (
    <section id="how-it-works" className="site-section section-anchor journey-section">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From laundry search to clean clothes"
          description="A clear five-stage customer journey without exposing operational backend detail."
          align="center"
        />
        <ol className="journey-grid">
          {customerJourney.map((step, index) => (
            <li className="journey-card" key={step.title}>
              <div className="journey-card-top">
                <span className="journey-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="icon-tile"><SiteIcon name={step.icon} /></span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
