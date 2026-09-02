import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section id="top" className="hero-section section-anchor">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Your laundry, one easier step at a time</p>
          <h1>Laundry Made Easy.</h1>
          <p className="hero-description">
            Discover laundry services, choose a provider, book what you need, follow important order progress, and receive your clean laundry through one convenient Lalaba experience.
          </p>
          <div className="hero-actions">
            <ButtonLink href={siteConfig.urls.customerBooking}>Book Laundry</ButtonLink>
            <ButtonLink href="#download" variant="secondary">Download the App</ButtonLink>
          </div>
          <p className="hero-partner-path">
            Are you a laundry provider? <a href="#for-partners">Become a Partner</a>
          </p>
        </div>

        <div className="hero-visual" aria-label="Lalaba product artwork">
          <div className="hero-art-surface">
            <Image
              src={siteConfig.brand.appArtwork}
              alt="Lalaba washing machine illustration"
              width={1043}
              height={1043}
              className="hero-art-image"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
