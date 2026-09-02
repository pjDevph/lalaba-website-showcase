import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn, isExternalUrl } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  className?: string;
  showExternalIcon?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  inverse: "button-inverse",
  ghost: "button-ghost",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showExternalIcon = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn("button-link", variants[variant], className);

  if (!href) {
    return (
      <span className={cn(classes, "button-disabled")} aria-disabled="true" title="Link not configured yet">
        {children}
      </span>
    );
  }

  if (isExternalUrl(href)) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
        {showExternalIcon ? <ArrowUpRight aria-hidden="true" size={17} /> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
