"use client";

import { MoveRight } from "lucide-react";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function CTASection() {
  const { t } = useLanguage();

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById("booking-embed");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container-shell relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleScrollToBooking}
              className="rounded-full px-10 h-14 text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-300 gap-3 group"
            >
              {t("cta.button")}
              <MoveRight className="size-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </SectionReveal>
        </div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 size-96 rounded-full border-2 border-white/20" />
        <div className="absolute -bottom-24 -right-24 size-96 rounded-full border-2 border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full border border-white/10" />
      </div>
    </section>
  );
}
