"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Promo } from "@/types/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PromoImage } from "@/components/ui/PromoImage";

function PromoContent({ promo }: { promo: Promo }) {
  return (
    <article className={promo.image ? "promo-card promo-card-with-image" : "promo-card"} aria-live="polite">
      <div className="promo-card-copy">
        <p className="eyebrow promo-eyebrow">{promo.eyebrow}</p>
        <h3>{promo.title}</h3>
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
  );
}

export function PromoCarousel({ promos }: { promos: Promo[] }) {
  const [index, setIndex] = useState(0);
  const promo = promos[index];

  const previous = () => setIndex((value) => (value - 1 + promos.length) % promos.length);
  const next = () => setIndex((value) => (value + 1) % promos.length);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") previous();
    if (event.key === "ArrowRight") next();
  };

  return (
    <div className="promo-carousel" tabIndex={0} onKeyDown={handleKeyDown} aria-roledescription="carousel" aria-label="Lalaba promotions">
      <PromoContent promo={promo} />

      <div className="carousel-controls">
        <button type="button" onClick={previous} aria-label="Previous promotion"><ChevronLeft aria-hidden="true" /></button>
        <div className="carousel-dots" aria-label={`Promotion ${index + 1} of ${promos.length}`}>
          {promos.map((item, dotIndex) => (
            <button
              type="button"
              key={item.id}
              className={dotIndex === index ? "carousel-dot carousel-dot-active" : "carousel-dot"}
              aria-label={`Show promotion ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next promotion"><ChevronRight aria-hidden="true" /></button>
      </div>
    </div>
  );
}
