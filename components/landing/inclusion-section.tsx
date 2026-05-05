"use client";

import { CupSoda, Camera, Shield, Sparkles, Utensils, Check } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { inclusionPoints } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

const iconMap: Record<string, any> = {
  cup: CupSoda,
  camera: Camera,
  shield: Shield,
  sparkles: Sparkles,
  utensils: Utensils,
};

export function InclusionSection() {
  const { t } = useLanguage();

  return (
    <section id="inclusions" className="section-space relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-shell">
        <SectionReveal>
          <SectionHeading
            title={t("inclusion.title")}
            description={t("inclusion.subtitle")}
            align="center"
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-4 mb-6 flex flex-col items-center justify-center">
            <div className="relative p-6 md:p-8 rounded-[2.5rem] bg-foreground text-white shadow-xl overflow-hidden group max-w-md w-full text-center">
              {/* Background patterns */}
              <div className="absolute top-0 right-0 size-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-xl" />

              <div className="relative space-y-3">
                <h3 className="text-lg font-medium opacity-80 font-heading">{t("inclusion.price.ticket")}</h3>
                <div className="flex flex-col items-center gap-0">
                  <span className="text-base line-through opacity-50 decoration-orange-500 decoration-2">{t("inclusion.price.original")}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter font-heading">
                      {t("inclusion.price.promo")}
                    </span>
                    <span className="text-xs font-medium opacity-60">/ pax</span>
                  </div>
                </div>
                <p className="text-[11px] md:text-xs font-medium text-orange-400 italic">
                  {t("inclusion.price.note")}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inclusionPoints.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            const isAddon = item.id === "dress-rental";

            return (
              <SectionReveal key={item.id} delay={index * 0.1} className="h-full">
                <div className={`group relative flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full ${
                  isAddon 
                    ? "bg-primary/5 border-primary/20 shadow-inner" 
                    : "bg-background border-border/50 shadow-sm"
                }`}>
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative size-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white ${
                    isAddon ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="size-7" />
                  </div>

                  <div className="relative space-y-2">
                    <p className="font-bold text-base lg:text-lg tracking-tight leading-snug">
                      {t(`inclusion.point.${item.id}.title` as any)}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`inclusion.point.${item.id}.description` as any)}
                    </p>
                  </div>

                  {/* Icon indicator */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                    {isAddon ? <Sparkles className="size-5" /> : <Check className="size-5" />}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
