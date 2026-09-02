import type { JourneyStep } from "@/types/site";

export const customerJourney: JourneyStep[] = [
  { title: "Find", description: "Explore laundry providers available through Lalaba.", icon: "map-pin" },
  { title: "Choose", description: "Review a provider and select the laundry service you need.", icon: "sparkles" },
  { title: "Book", description: "Complete the supported booking flow and confirm your selection.", icon: "calendar" },
  { title: "Track", description: "Follow important order progress and service updates.", icon: "route" },
  { title: "Receive", description: "Receive your clean laundry through the provider's supported return option.", icon: "package-check" },
];
