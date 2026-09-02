import { reviewConfig } from "@/content/reviews";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ReviewsSection() {
  if (!siteConfig.featureFlags.reviews || !reviewConfig.enabled || reviewConfig.items.length === 0) return null;

  return (
    <section id="reviews" className="site-section section-anchor surface-section">
      <Container>
        <SectionHeading eyebrow="Customer feedback" title="Reviews" align="center" />
        <div className="review-grid">
          {reviewConfig.items.map((review) => (
            <figure className="review-card" key={review.id}>
              <blockquote>{review.quote}</blockquote>
              <figcaption>{review.author}{review.role ? ` · ${review.role}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
