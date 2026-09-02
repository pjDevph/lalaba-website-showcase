import type { ServiceGroup } from "@/types/site";

export const services: ServiceGroup[] = [
  {
    title: "Wash & Fold",
    description: "Everyday laundry care for clothing and common washable items.",
    note: "Availability, handling, and charging basis vary by provider.",
    icon: "shirt",
  },
  {
    title: "Wash, Dry & Fold",
    description: "A combined laundry service from washing through drying and folding.",
    note: "Exact service inclusions and turnaround vary by provider.",
    icon: "washing-machine",
  },
  {
    title: "Special Care & Specialty Services",
    description: "Provider-specific options for items or care needs beyond standard laundry.",
    note: "Check the selected provider for the services they currently offer.",
    icon: "sparkles",
  },
];
