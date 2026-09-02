import { siteConfig } from "@/config/site";
import type { AppShowcaseItem } from "@/types/site";

export const appShowcase: AppShowcaseItem[] = [
  {
    id: "customer-app",
    eyebrow: "Customer App",
    title: "Laundry discovery and booking in the customer's hands",
    description: "The Lalaba Customer App is the customer-facing experience for finding providers, selecting services, booking, and following order progress.",
    bullets: ["Provider discovery", "Laundry service selection", "Booking flow", "Order progress and customer experience"],
    screenshots: [
      { src: siteConfig.brand.customerSplash, alt: "Lalaba Customer App splash artwork" },
      { src: siteConfig.brand.customerAppIcon, alt: "Lalaba Customer App icon artwork" },
    ],
  },
  {
    id: "partner-app",
    eyebrow: "Partner App",
    title: "One partner product for laundromats and home washers",
    description: "The Lalaba Partner App supports the provider side of the marketplace, with role-appropriate tools for participating laundry businesses and home washers.",
    bullets: ["Laundromat workspace", "Home Washer workspace", "Business and service profile", "Eligible order management"],
    screenshots: [
      { src: siteConfig.brand.partnerAppIcon, alt: "Lalaba Partner App icon artwork" },
      { src: "/brand/lalaba-partner-adaptive-icon.png", alt: "Lalaba Partner application artwork" },
    ],
  },
];
