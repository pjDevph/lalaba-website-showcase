import Image from "next/image";
import { downloads } from "@/content/downloads";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoreButton } from "@/components/ui/StoreButton";

export function AppDownloadSection() {
  return (
    <section id="download" className="site-section section-anchor surface-section">
      <Container>
        <SectionHeading
          eyebrow="Download"
          title="Choose the Lalaba app made for you"
          description="Store buttons stay disabled until verified production listing URLs are configured."
          align="center"
        />
        <div className="download-grid">
          {downloads.map((app) => (
            <article className="download-card" key={app.id}>
              <Image
                src={app.iconAsset}
                alt={app.iconAlt}
                width={96}
                height={96}
                className="download-app-icon"
              />
              <h3>{app.title}</h3>
              <p>{app.description}</p>
              <div className="store-button-row">
                <StoreButton store="apple" url={app.appStoreUrl} appName={app.title} />
                <StoreButton store="google" url={app.googlePlayUrl} appName={app.title} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
