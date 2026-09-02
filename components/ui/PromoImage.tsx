import Image from "next/image";

/**
 * CMS-entered promo images (lib/site-content.ts) can be any pasted URL, not
 * only assets already in this app's /public — next/image throws at request
 * time for an external host that isn't in next.config.ts's remotePatterns,
 * which we can't pre-populate for an admin-chosen URL. Local paths (still
 * used by the three shipped campaign banners under public/images/promos/)
 * keep next/image's optimization; anything else falls back to a plain img.
 */
export function PromoImage({ src, alt }: { src: string; alt: string }) {
  if (src.startsWith("/")) {
    return <Image src={src} alt={alt} width={1024} height={448} className="promo-image" />;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} width={1024} height={448} className="promo-image" />;
}
