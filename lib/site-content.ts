import { faq as staticFaq } from "@/content/faq";
import { serviceAreas as staticServiceAreas } from "@/content/service-areas";
import { promos as staticPromos } from "@/content/promos";
import type { FaqItem, Promo } from "@/types/site";

/**
 * Server-side reads from the admin panel's site-content CMS
 * (LALABA_BE_DEV/src/site-content) — the three sections that are
 * operationally dynamic (FAQ, service areas, promo banners) now live there
 * instead of only in this repo's content/*.ts files.
 *
 * Every fetch here runs in a Server Component, never in the browser, so
 * there is no CORS concern and no client bundle cost.
 *
 * Fallback-to-static on any failure (network error, non-2xx, API offline) is
 * deliberate: this is a public marketing site that must keep rendering even
 * if the backend is down or LALABA_API_BASE_URL is unset in an environment
 * that hasn't been wired up yet (e.g. local dev without the API running).
 * The static content/*.ts files stay in the repo as that fallback, not as
 * dead code.
 */

const API_BASE = process.env.LALABA_API_BASE_URL;

// Matches the page's own revalidate windows elsewhere in this app — content
// edited in the admin panel shows up within a minute, not instantly, in
// exchange for not hitting the API on every single request.
const REVALIDATE_SECONDS = 60;

async function safeFetch<T>(path: string): Promise<T | null> {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getFaq(): Promise<FaqItem[]> {
  const remote = await safeFetch<FaqItem[]>("/public/site-content/faq");
  return remote ?? staticFaq;
}

export async function getServiceAreas(): Promise<string[]> {
  const remote = await safeFetch<string[]>("/public/site-content/service-areas");
  return remote ?? staticServiceAreas;
}

export async function getPromos(): Promise<Promo[]> {
  const remote = await safeFetch<Promo[]>("/public/site-content/announcements");
  return remote ?? staticPromos;
}
