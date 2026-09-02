import Image from "next/image";
import { Smartphone } from "lucide-react";
import { appShowcase } from "@/content/app-showcase";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ScreenshotRail({ item }: { item: (typeof appShowcase)[number] }) {
  const screenshots = item.screenshots;

  if (screenshots.length === 0) {
    return (
      <div className="showcase-rail" role="list" aria-label={`${item.title} visuals`}>
        <div className="phone-frame asset-phone-placeholder" role="listitem">
          <div className="phone-speaker" />
          <div className="phone-placeholder-content">
            <Smartphone aria-hidden="true" size={36} />
            <strong>Lalaba app artwork</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="showcase-rail" role="list" aria-label={`${item.title} visuals`}>
      {screenshots.map((screen) => (
        <div className="phone-frame" role="listitem" key={screen.src}>
          <div className="phone-speaker" />
          <Image src={screen.src} alt={screen.alt} width={1024} height={1024} className="phone-image" />
        </div>
      ))}
    </div>
  );
}

export function AppShowcaseSection() {
  return (
    <section id="app-showcase" className="site-section section-anchor app-showcase-section">
      <Container>
        <SectionHeading
          eyebrow="The Lalaba apps"
          title="Two product contexts, one connected laundry experience"
          description="Customer App for booking and progress. Partner App for laundromat and home-washer operations."
          align="center"
        />
        <div className="app-showcase-stack">
          {appShowcase.map((item) => (
            <article className="app-showcase-card" key={item.id}>
              <div className="app-showcase-copy">
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
              <ScreenshotRail item={item} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
