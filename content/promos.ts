import { siteConfig } from "@/config/site";
import type { Promo } from "@/types/site";

export const promos: Promo[] = [
  {
    id: "delivery-discount-campaign",
    enabled: false,
    audience: "customer",
    eyebrow: "Campaign asset",
    title: "Laundry delivery promotion",
    description: "Supplied Lalaba campaign artwork. Keep disabled until current offer terms and validity are confirmed.",
    ctaText: "Book Laundry",
    ctaUrl: siteConfig.urls.customerBooking,
    image: "/images/promos/lalaba-banner-1.jpg",
  },
  {
    id: "pickup-delivery-campaign",
    enabled: false,
    audience: "customer",
    eyebrow: "Campaign asset",
    title: "Pickup and delivery promotion",
    description: "Supplied Lalaba campaign artwork. Keep disabled until current offer terms and validity are confirmed.",
    ctaText: "Book Laundry",
    ctaUrl: siteConfig.urls.customerBooking,
    image: "/images/promos/lalaba-banner-2.jpg",
  },
  {
    id: "three-step-campaign",
    enabled: false,
    audience: "customer",
    eyebrow: "Campaign asset",
    title: "Lalaba app campaign",
    description: "Supplied Lalaba campaign artwork. Keep disabled until current campaign status is confirmed.",
    ctaText: "Download the App",
    ctaUrl: "#download",
    image: "/images/promos/lalaba-banner-3.jpg",
  },
];
