import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ variant = "light", compact = false, className }: BrandLogoProps) {
  const isDark = variant === "dark";
  const src = isDark ? siteConfig.brand.logoDark : siteConfig.brand.logoLight;
  const width = isDark ? (compact ? 54 : 82) : (compact ? 126 : 164);
  const height = isDark ? (compact ? 54 : 82) : (compact ? 50 : 65);

  return (
    <Image
      src={src}
      alt="Lalaba"
      width={width}
      height={height}
      className={cn("brand-logo", isDark ? "brand-logo-dark" : "brand-logo-light", className)}
      priority
    />
  );
}
