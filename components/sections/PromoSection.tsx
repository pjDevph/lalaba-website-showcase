import { PromoCarousel } from "@/components/interactive/PromoCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PromoImage } from "@/components/ui/PromoImage";
import { getPromos } from "@/lib/site-content";
import { siteConfig } from "@/config/site";

export async function PromoSection() {
  const promos = await getPromos();
  const activePromos = promos.filter((promo) => promo.enabled);
  if (!siteConfig.featureFlags.promo || activePromos.length === 0) return null;

  if (activePromos.length > 1) {
    return <section className="site-section promo-section"><Container><PromoCarousel promos={activePromos} /></Container></section>;
  }

  const promo = activePromos[0];
  return (
    <section className="site-section promo-section">
      <Container>
        <article className={promo.image ? "promo-card promo-card-with-image" : "promo-card"}>
          <div className="promo-card-copy">
            <p className="eyebrow promo-eyebrow">{promo.eyebrow}</p>
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>
            {promo.promoCode ? <p className="promo-code"><span>Promo code</span><strong>{promo.promoCode}</strong></p> : null}
            {promo.validityText ? <p className="promo-validity">{promo.validityText}</p> : null}
            <ButtonLink href={promo.ctaUrl} variant="inverse">{promo.ctaText}</ButtonLink>
          </div>
          {promo.image ? (
            <div className="promo-image-wrap">
              <PromoImage src={promo.image} alt="Lalaba promotional campaign artwork" />
            </div>
          ) : null}
        </article>
      </Container>
    </section>
  );
}
