import type { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

function ConfigLink({ href, children }: { href: string; children: ReactNode }) {
  if (!href) return <span className="footer-link-disabled">{children}</span>;
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>;
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Facebook", href: siteConfig.social.facebook, Icon: FaFacebookF },
    { label: "Instagram", href: siteConfig.social.instagram, Icon: FaInstagram },
    { label: "TikTok", href: siteConfig.social.tiktok, Icon: FaTiktok },
  ].filter((item) => item.href);

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <BrandLogo variant="dark" />
            <p>{siteConfig.tagline}</p>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <a href="#how-it-works">How It Works</a>
            <a href="#services">Services</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#why-lalaba">Why Lalaba</a>
          </div>

          <div className="footer-column">
            <h2>For Partners</h2>
            <a href="#for-partners">Laundromat</a>
            <a href="#for-partners">Home Washer</a>
            <a href="#download">Partner App</a>
          </div>

          <div className="footer-column">
            <h2>Help</h2>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h2>Download</h2>
            <a href="#download">Customer App</a>
            <a href="#download">Partner App</a>
          </div>

          <div className="footer-column">
            <h2>Legal</h2>
            <ConfigLink href={siteConfig.urls.privacy}>Privacy Policy</ConfigLink>
            <ConfigLink href={siteConfig.urls.terms}>Terms of Service</ConfigLink>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Lalaba. All rights reserved.</p>
          {socials.length ? (
            <div className="footer-socials" aria-label="Lalaba social links">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>
              ))}
            </div>
          ) : (
            <p className="footer-config-note">Social links appear here when configured.</p>
          )}
        </div>
      </Container>
    </footer>
  );
}
