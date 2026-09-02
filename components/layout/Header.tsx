import { BrandLogo } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <a href="#top" className="brand-home" aria-label="Lalaba home">
          <BrandLogo compact />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink href={siteConfig.urls.customerBooking} className="desktop-book-button">Book Laundry</ButtonLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
