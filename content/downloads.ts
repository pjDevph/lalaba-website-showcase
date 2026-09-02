import { siteConfig } from "@/config/site";
import type { DownloadApp } from "@/types/site";

export const downloads: DownloadApp[] = [
  {
    id: "customer",
    title: "Lalaba Customer App",
    description: "For people discovering and booking laundry services through Lalaba.",
    iconAsset: siteConfig.brand.customerAppIcon,
    iconAlt: "Lalaba Customer App icon",
    appStoreUrl: siteConfig.urls.customerApp.appStore,
    googlePlayUrl: siteConfig.urls.customerApp.googlePlay,
  },
  {
    id: "partner",
    title: "Lalaba Partner App",
    description: "For participating laundromats and qualified home washers managing their Lalaba experience.",
    iconAsset: siteConfig.brand.partnerAppIcon,
    iconAlt: "Lalaba Partner App icon",
    appStoreUrl: siteConfig.urls.partnerApp.appStore,
    googlePlayUrl: siteConfig.urls.partnerApp.googlePlay,
  },
];
