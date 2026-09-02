import { MapPin } from "lucide-react";
import { getServiceAreas } from "@/lib/site-content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function ServiceAreasSection() {
  if (!siteConfig.featureFlags.serviceAreas) return null;
  const serviceAreas = await getServiceAreas();

  return (
    <section id="service-areas" className="site-section section-anchor">
      <Container>
        <SectionHeading
          eyebrow="Coverage"
          title="Service areas"
          description="Only confirmed Lalaba coverage is published here."
          align="center"
        />
        {serviceAreas.length ? (
          <div className="area-chips">
            {serviceAreas.map((area) => <span className="area-chip" key={area}><MapPin aria-hidden="true" size={17} />{area}</span>)}
          </div>
        ) : (
          <p className="configured-empty-state">No confirmed service areas are configured for public display yet.</p>
        )}
      </Container>
    </section>
  );
}
