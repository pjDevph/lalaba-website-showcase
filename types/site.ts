export type IconName =
  | "map-pin"
  | "calendar"
  | "truck"
  | "route"
  | "store"
  | "washing-machine"
  | "clock"
  | "clipboard"
  | "sparkles"
  | "messages"
  | "eye"
  | "smartphone"
  | "users"
  | "shirt"
  | "package-check";

export type AudienceId = "customer" | "laundromat" | "home-washer";

export interface Audience {
  id: AudienceId;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: Array<{ title: string; description: string; icon: IconName }>;
  ctaLabel: string;
  ctaUrl: string;
  visualAsset?: string;
  visualAlt?: string;
}

export interface Promo {
  id: string;
  enabled: boolean;
  audience: AudienceId | "all";
  eyebrow: string;
  title: string;
  description: string;
  promoCode?: string;
  validityText?: string;
  ctaText: string;
  ctaUrl: string;
  image?: string;
}

export interface JourneyStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface ServiceGroup {
  title: string;
  description: string;
  note: string;
  icon: IconName;
}

export interface TutorialStep {
  title: string;
  description: string;
  visualLabel: string;
  icon: IconName;
  visualAsset?: string;
  visualAlt?: string;
}

export interface Tutorial {
  id: AudienceId;
  label: string;
  summary: string;
  steps: TutorialStep[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface AppShowcaseItem {
  id: "customer-app" | "partner-app";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  screenshots: Array<{ src: string; alt: string }>;
}

export interface DownloadApp {
  id: "customer" | "partner";
  title: string;
  description: string;
  iconAsset: string;
  iconAlt: string;
  appStoreUrl: string;
  googlePlayUrl: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  role?: string;
  ratings?: Partial<Record<"cleaningQuality" | "turnaroundTime" | "valueForMoney" | "careOfItems" | "serviceCommunication", number>>;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General & Customer" | "Partners";
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  canonicalUrl: string;
  brand: {
    assetsReady: boolean;
    logoLight: string;
    logoDark: string;
    appArtwork: string;
    adaptiveIcon: string;
    favicon: string;
    customerAppIcon: string;
    customerSplash: string;
    partnerAppIcon: string;
    partnerWordmark: string;
  };
  featureFlags: {
    promo: boolean;
    reviews: boolean;
    serviceAreas: boolean;
  };
  urls: {
    customerBooking: string;
    partnerOnboarding: string;
    privacy: string;
    terms: string;
    customerApp: {
      appStore: string;
      googlePlay: string;
    };
    partnerApp: {
      appStore: string;
      googlePlay: string;
    };
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  contact: {
    supportEmail: string;
    partnershipEmail: string;
    phone: string;
  };
}
