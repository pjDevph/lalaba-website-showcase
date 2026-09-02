import { FaApple, FaGooglePlay } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
  store: "apple" | "google";
  url: string;
  appName: string;
  className?: string;
}

export function StoreButton({ store, url, appName, className }: StoreButtonProps) {
  const Icon = store === "apple" ? FaApple : FaGooglePlay;
  const label = store === "apple" ? "App Store" : "Google Play";

  if (!url) {
    return (
      <span className={cn("store-button store-button-disabled", className)} aria-disabled="true" title={`${label} link not configured`}>
        <Icon aria-hidden="true" />
        <span><small>Unavailable on</small>{label}</span>
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("store-button", className)}
      aria-label={`Get ${appName} on ${label}`}
    >
      <Icon aria-hidden="true" />
      <span><small>{store === "apple" ? "Download on the" : "Get it on"}</small>{label}</span>
    </a>
  );
}
