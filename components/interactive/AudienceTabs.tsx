"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { audiences } from "@/content/audiences";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SiteIcon } from "@/components/ui/FeatureCard";

export function AudienceTabs() {
  const [activeId, setActiveId] = useState(audiences[0].id);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = audiences.find((item) => item.id === activeId) ?? audiences[0];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % audiences.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + audiences.length) % audiences.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = audiences.length - 1;

    setActiveId(audiences[nextIndex].id);
    refs.current[nextIndex]?.focus();
  };

  return (
    <div>
      <div className="tab-scroll" role="tablist" aria-label="Lalaba audiences">
        {audiences.map((audience, index) => (
          <button
            key={audience.id}
            ref={(node) => { refs.current[index] = node; }}
            id={`audience-tab-${audience.id}`}
            role="tab"
            type="button"
            aria-selected={activeId === audience.id}
            aria-controls={`audience-panel-${audience.id}`}
            tabIndex={activeId === audience.id ? 0 : -1}
            className="tab-button"
            onClick={() => setActiveId(audience.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {audience.name}
          </button>
        ))}
      </div>

      <div
        id={`audience-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`audience-tab-${active.id}`}
        className="audience-panel"
      >
        <div className="audience-copy">
          <p className="eyebrow">{active.eyebrow}</p>
          <h3>{active.title}</h3>
          <p className="audience-description">{active.description}</p>
          <div className="audience-benefits">
            {active.benefits.map((benefit) => (
              <div className="audience-benefit" key={benefit.title}>
                <span className="icon-tile icon-tile-small"><SiteIcon name={benefit.icon} size={18} /></span>
                <div>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <ButtonLink href={active.ctaUrl}>{active.ctaLabel}</ButtonLink>
        </div>

        <div className="audience-visual">
          {active.visualAsset ? (
            <Image
              src={active.visualAsset}
              alt={active.visualAlt ?? `${active.name} Lalaba product artwork`}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 90vw"
              className="product-art"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
