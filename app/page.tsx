import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PromoSection } from "@/components/sections/PromoSection";
import { CustomerJourneySection } from "@/components/sections/CustomerJourneySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TutorialsSection } from "@/components/sections/TutorialsSection";
import { WhyLalabaSection } from "@/components/sections/WhyLalabaSection";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AudienceSection />
        <TrustStrip />
        <PromoSection />
        <CustomerJourneySection />
        <ServicesSection />
        <TutorialsSection />
        <WhyLalabaSection />
        <AppShowcaseSection />
        <AppDownloadSection />
        <ServiceAreasSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
