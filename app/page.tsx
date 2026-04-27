import { AttractionsSection } from "@/components/landing/attractions-section";
import { FaqSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { GallerySection } from "@/components/landing/gallery-section";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { BookingSection } from "@/components/landing/booking-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { WhatsAppWidget } from "@/components/landing/whatsapp-widget";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <AttractionsSection />
      <WhyUsSection />
      <BookingSection />
      <GallerySection />
      <FaqSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
