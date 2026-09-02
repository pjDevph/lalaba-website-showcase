"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {open ? (
        <div className="mobile-menu-backdrop" onMouseDown={close}>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-menu-panel"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-links">
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <ButtonLink href={siteConfig.urls.customerBooking} className="mobile-book-button">
              Book Laundry
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
