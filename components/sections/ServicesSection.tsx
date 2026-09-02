import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/FeatureCard";

export function ServicesSection() {
  return (
    <section id="services" className="site-section section-anchor surface-section">
      <Container>
        <SectionHeading
          eyebrow="Representative services"
          title="Laundry care that fits different needs"
          description="The website highlights common service groups only. Exact services, handling, and availability vary by provider."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon"><SiteIcon name={service.icon} size={28} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>{service.note}</small>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
