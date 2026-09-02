import { siteConfig } from "@/config/site";
import type { Tutorial } from "@/types/site";

const profileVisual = "/images/tutorials/profile.png";
const laundryVisual = "/images/tutorials/laundry-service.png";
const checklistVisual = "/images/tutorials/checklist.png";
const branchVisual = "/images/context/branch.png";
const verificationVisual = "/images/context/verification.png";

export const tutorials: Tutorial[] = [
  {
    id: "customer",
    label: "Customer",
    summary: "From getting the app to following an active laundry order.",
    steps: [
      { title: "Download Lalaba Customer App", description: "Install the Lalaba Customer App from an available official store listing.", visualLabel: "Customer App", icon: "smartphone", visualAsset: siteConfig.brand.customerAppIcon, visualAlt: "Lalaba Customer App icon" },
      { title: "Create or continue with the supported customer flow", description: "Follow the account or continuation flow currently supported by the Customer App.", visualLabel: "Customer access", icon: "users", visualAsset: profileVisual, visualAlt: "Customer profile illustration" },
      { title: "Set your location", description: "Provide the location information needed to see relevant laundry providers and service availability.", visualLabel: "Location", icon: "map-pin" },
      { title: "Find a provider", description: "Browse available laundromats or home washers shown for your current service context.", visualLabel: "Provider discovery", icon: "store", visualAsset: branchVisual, visualAlt: "Laundry provider storefront illustration" },
      { title: "Choose your laundry service", description: "Review the provider's available service options and select what fits your laundry needs.", visualLabel: "Service selection", icon: "shirt", visualAsset: laundryVisual, visualAlt: "Laundry service illustration" },
      { title: "Complete booking", description: "Review the booking details shown by Lalaba and complete the supported booking flow.", visualLabel: "Booking", icon: "calendar", visualAsset: checklistVisual, visualAlt: "Booking checklist illustration" },
      { title: "Track your order", description: "Use the Customer App to follow important progress as your laundry moves through the order journey.", visualLabel: "Order progress", icon: "route", visualAsset: siteConfig.brand.customerSplash, visualAlt: "Lalaba Customer App artwork" },
    ],
  },
  {
    id: "laundromat",
    label: "Laundromat",
    summary: "A careful onboarding path for established laundry businesses.",
    steps: [
      { title: "Download Lalaba Partner App", description: "Install the Lalaba Partner App from an available official store listing.", visualLabel: "Partner App", icon: "smartphone", visualAsset: siteConfig.brand.partnerAppIcon, visualAlt: "Lalaba Partner App icon" },
      { title: "Create a partner account", description: "Start the partner account flow available in the Partner App.", visualLabel: "Partner access", icon: "users", visualAsset: profileVisual, visualAlt: "Partner profile illustration" },
      { title: "Select Laundromat / Merchant", description: "Choose the laundromat or merchant business type when that option is presented.", visualLabel: "Business type", icon: "store", visualAsset: branchVisual, visualAlt: "Laundry business storefront illustration" },
      { title: "Complete the required business profile", description: "Provide the business information Lalaba currently requests for the partner profile.", visualLabel: "Business profile", icon: "clipboard", visualAsset: verificationVisual, visualAlt: "Business profile review illustration" },
      { title: "Configure services and availability", description: "Set up the laundry services and availability supported by your Partner App workspace.", visualLabel: "Services and availability", icon: "clock", visualAsset: laundryVisual, visualAlt: "Laundry service setup illustration" },
      { title: "Complete required verification shown by Lalaba", description: "Follow the verification steps displayed by Lalaba. Requirements may vary according to current policy.", visualLabel: "Verification", icon: "eye", visualAsset: checklistVisual, visualAlt: "Verification checklist illustration" },
      { title: "Manage eligible Lalaba orders", description: "After the required approval or setup is complete, use the Partner App for eligible customer orders.", visualLabel: "Order management", icon: "clipboard", visualAsset: siteConfig.brand.partnerWordmark, visualAlt: "Lalaba Partner App wordmark" },
    ],
  },
  {
    id: "home-washer",
    label: "Home Washer",
    summary: "A focused setup path for qualified home-based laundry providers.",
    steps: [
      { title: "Download Lalaba Partner App", description: "Install the Lalaba Partner App from an available official store listing.", visualLabel: "Partner App", icon: "smartphone", visualAsset: siteConfig.brand.partnerAppIcon, visualAlt: "Lalaba Partner App icon" },
      { title: "Create a partner account", description: "Start the partner account flow available in the Partner App.", visualLabel: "Partner access", icon: "users", visualAsset: profileVisual, visualAlt: "Partner profile illustration" },
      { title: "Select Home Washer", description: "Choose Home Washer when selecting the partner type supported by Lalaba.", visualLabel: "Provider type", icon: "washing-machine", visualAsset: "/brand/lalaba-partner-adaptive-icon.png", visualAlt: "Lalaba Partner provider artwork" },
      { title: "Complete your service profile", description: "Add the service-profile information currently requested in the Partner App.", visualLabel: "Service profile", icon: "clipboard", visualAsset: verificationVisual, visualAlt: "Service profile illustration" },
      { title: "Configure services and availability", description: "Set the laundry services and availability available to your provider workspace.", visualLabel: "Services and availability", icon: "clock", visualAsset: laundryVisual, visualAlt: "Laundry service setup illustration" },
      { title: "Complete required verification shown by Lalaba", description: "Follow the verification steps displayed by Lalaba. Requirements may vary according to current policy.", visualLabel: "Verification", icon: "eye", visualAsset: checklistVisual, visualAlt: "Verification checklist illustration" },
      { title: "Manage eligible Lalaba orders", description: "After the required approval or setup is complete, use the Partner App for eligible customer orders.", visualLabel: "Order management", icon: "clipboard", visualAsset: siteConfig.brand.partnerWordmark, visualAlt: "Lalaba Partner App wordmark" },
    ],
  },
];
