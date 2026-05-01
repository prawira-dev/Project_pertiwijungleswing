"use client";

import { MoveRight } from "lucide-react";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";

export function CTASection() {
  const { t } = useLanguage();


  return (
    <section className="py-14 relative overflow-hidden">
      <div className="container-shell relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="pt-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 font-bold text-sm tracking-wide">
                  {t("inclusion.price.ticket")} {t("inclusion.price.promo")}
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="rounded-full px-10 h-14 bg-orange-500 hover:bg-orange-600 text-white text-lg shadow-2xl shadow-orange-500/20 transition-transform duration-300 group"
            >
              <a href="https://pertiwiadventure.com/bookings/" target="_blank" rel="noreferrer">
                <span className="relative inline-block transition-transform group-hover:-translate-y-0.5">
                  {t("cta.button")}
                </span>
                <MoveRight className="size-5 transition-transform group-hover:translate-x-2" />
              </a>
            </Button>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
