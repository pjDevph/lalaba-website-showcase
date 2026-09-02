import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <Container>
        <div className="final-cta-card">
          <div>
            <p className="eyebrow final-cta-eyebrow">Laundry day, simplified</p>
            <h2>Ready to make laundry easier?</h2>
            <p>Start with the Lalaba customer experience, or explore the partner path for your laundry service.</p>
          </div>
          <div className="final-cta-actions">
            <ButtonLink href={siteConfig.urls.customerBooking} variant="inverse">Book Laundry <ArrowRight aria-hidden="true" size={18} /></ButtonLink>
            <ButtonLink href={siteConfig.urls.partnerOnboarding} variant="ghost">Become a Partner</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
