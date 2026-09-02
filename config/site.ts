import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Lalaba",
  tagline: "Laundry Made Easy",
  description:
    "Discover laundry providers, choose services, book your laundry, follow order progress, and manage the experience with Lalaba.",
  canonicalUrl: "",
  brand: {
    assetsReady: true,
    logoLight: "/brand/lalaba-wordmark.png",
    logoDark: "/brand/lalaba-customer-app-icon.png",
    appArtwork: "/brand/lalaba-hero-artwork.png",
    adaptiveIcon: "/brand/lalaba-customer-app-icon.png",
    favicon: "/brand/favicon.png",
    customerAppIcon: "/brand/lalaba-customer-app-icon.png",
    customerSplash: "/brand/lalaba-customer-splash.png",
    partnerAppIcon: "/brand/lalaba-partner-app-icon.png",
    partnerWordmark: "/brand/lalaba-partner-wordmark.png",
  },
  featureFlags: {
    promo: false,
    reviews: false,
    serviceAreas: false,
  },
  urls: {
    customerBooking: "",
    partnerOnboarding: "",
    privacy: "",
    terms: "",
    customerApp: {
      appStore: "",
      googlePlay: "",
    },
    partnerApp: {
      appStore: "",
      googlePlay: "",
    },
  },
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
  contact: {
    supportEmail: "",
    partnershipEmail: "",
    phone: "",
  },
};
