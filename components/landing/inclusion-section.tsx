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
          <div className="mt-10 mb-6 flex flex-col items-center justify-center">
            <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-foreground text-white shadow-2xl overflow-hidden group max-w-lg w-full text-center">
              {/* Background patterns */}
              <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <div className="relative space-y-4">
                <h3 className="text-xl font-medium opacity-80 font-heading">{t("inclusion.price.ticket")}</h3>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg line-through opacity-50 decoration-orange-500 decoration-2">{t("inclusion.price.original")}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter font-heading">
                      {t("inclusion.price.promo")}
                    </span>
                    <span className="text-sm font-medium opacity-60">/ pax</span>
                  </div>
                </div>
                <p className="text-[12px] md:text-sm font-medium text-orange-400 italic">
                  {t("inclusion.price.note")}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {inclusionPoints.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <SectionReveal key={item.id} delay={index * 0.1}>
                <div className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 overflow-hidden">
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-inner">
                    <Icon className="size-8" />
                  </div>
                  
                  <div className="relative space-y-3">
                    <h4 className="font-bold text-lg tracking-tight leading-snug">
                      {t(`inclusion.point.${item.id}.title` as any)}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`inclusion.point.${item.id}.description` as any)}
                    </p>
                  </div>
                  
                  {/* Checkmark indicator */}
                  <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    <Check className="size-5" />
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Optional Add-on Section */}
        <SectionReveal delay={0.6}>
          <div className="mt-16 relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary/[0.02] p-8 md:p-12">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="size-24 text-primary rotate-12" />
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {t("inclusion.addon.heading")}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {t("inclusion.addon.description")}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="size-24 md:size-32 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/30 ring-4 ring-primary/10 transition-transform duration-500 hover:scale-105">
                  <Camera className="size-10 md:size-14" />
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
