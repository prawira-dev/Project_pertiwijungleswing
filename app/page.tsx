import { AttractionsSection } from "@/components/landing/attractions-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { FeaturedExperiencesSection } from "@/components/landing/featured-experiences-section";
import { InclusionSection } from "@/components/landing/inclusion-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { AboutSection } from "@/components/landing/about-section";
import { CTASection } from "@/components/landing/cta-section";
import { AdventureSection } from "@/components/landing/adventure-section";
import { WhatsAppWidget } from "@/components/landing/whatsapp-widget";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <AttractionsSection />
      <FeaturedExperiencesSection />
      <InclusionSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <CTASection />
      <AdventureSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
