import { siteConfig } from "@/config/site";
import type { Audience } from "@/types/site";

export const audiences: Audience[] = [
  {
    id: "customer",
    name: "Customer",
    eyebrow: "For customers",
    title: "A simpler way to handle laundry day",
    description:
      "Explore available laundry providers, compare the services they offer, book what fits your needs, and follow your order as it moves through the experience.",
    benefits: [
      { title: "Find providers", description: "Discover laundry services available through Lalaba.", icon: "map-pin" },
      { title: "Choose services", description: "Review provider service options before booking.", icon: "shirt" },
      { title: "Book conveniently", description: "Move from provider selection to booking in one customer flow.", icon: "calendar" },
      { title: "Follow progress", description: "See important order updates after booking.", icon: "route" },
    ],
    ctaLabel: "Book Laundry",
    ctaUrl: siteConfig.urls.customerBooking,
    visualAsset: siteConfig.brand.customerAppIcon,
    visualAlt: "Lalaba Customer App icon",
  },
  {
    id: "laundromat",
    name: "Laundromat",
    eyebrow: "For laundry businesses",
    title: "Bring your established laundry business into Lalaba",
    description:
      "Lalaba gives participating laundromats a digital presence for customer orders while the Partner App supports service, availability, and order management.",
    benefits: [
      { title: "Business presence", description: "Present your laundry business within the Lalaba experience.", icon: "store" },
      { title: "Receive Lalaba orders", description: "Manage eligible customer orders through the Partner App.", icon: "clipboard" },
      { title: "Manage services", description: "Maintain the services your business offers in the partner experience.", icon: "washing-machine" },
      { title: "Control availability", description: "Keep operating availability aligned with your business setup.", icon: "clock" },
    ],
    ctaLabel: "Become a Partner",
    ctaUrl: siteConfig.urls.partnerOnboarding,
    visualAsset: siteConfig.brand.partnerWordmark,
    visualAlt: "Lalaba Partner App wordmark",
  },
  {
    id: "home-washer",
    name: "Home Washer",
    eyebrow: "For independent providers",
    title: "Run your laundry service with a focused partner experience",
    description:
      "Qualified home-based laundry providers can build a service profile, set availability, and manage eligible orders through Lalaba's Partner App.",
    benefits: [
      { title: "Create a service profile", description: "Present your available laundry service through Lalaba.", icon: "users" },
      { title: "Set availability", description: "Configure when your laundry service can receive eligible orders.", icon: "clock" },
      { title: "Manage orders", description: "Accept and manage eligible Lalaba orders in the Partner App.", icon: "clipboard" },
      { title: "Keep services organized", description: "Maintain the laundry services you offer in one place.", icon: "washing-machine" },
    ],
    ctaLabel: "Become a Home Washer",
    ctaUrl: siteConfig.urls.partnerOnboarding,
    visualAsset: siteConfig.brand.partnerAppIcon,
    visualAlt: "Lalaba Partner App icon",
  },
];
