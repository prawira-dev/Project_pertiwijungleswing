"use client";

import {
  Camera,
  CupSoda,
  Lock,
  Mountain,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { inclusionPoints, valuePoints } from "@/lib/data/landing";
import type { ValuePoint } from "@/types";
import { useLanguage } from "@/lib/i18n";

const iconMap: Record<ValuePoint["icon"], typeof ShieldCheck> = {
  shield: ShieldCheck,
  camera: Camera,
  mountain: Mountain,
  sparkles: Sparkles,
  cup: CupSoda,
  lock: Lock
};

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section id="whyus" className="section-space relative">
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("whyus.eyebrow" as any) || "Why Us"}
            title={t("whyus.title")}
            description={t("whyus.subtitle")}
            align="center"
          />
        </SectionReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {valuePoints.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <SectionReveal key={item.id} delay={index * 0.06}>
                <Card className="h-full">
                  <CardContent className="space-y-5 p-6">
                    <div className="inline-flex rounded-full bg-primary/12 p-3 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{t(`whyus.point.${item.id}.title` as any) || item.title}</h3>
                      <p className="leading-7 text-muted-foreground">{t(`whyus.point.${item.id}.description` as any) || item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>

        <div className="pt-10">
          <SectionReveal delay={0.1}>
            <div className="rounded-[2.5rem] bg-muted/50 border border-border p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-12">
                <div className="space-y-4 max-w-md">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {t("whyus.inclusions.title" as any)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("whyus.inclusions.subtitle" as any)}
                  </p>
                </div>
                <div className="hidden md:block h-20 w-px bg-border ml-auto mr-auto" />
                <div className="flex flex-wrap gap-3 md:max-w-sm">
                  {inclusionPoints.map((item) => (
                    <div
                      key={item.id}
                      className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium border border-border shadow-sm"
                    >
                      <div className="size-2 rounded-full bg-primary" />
                      {t(`whyus.point.${item.id}.title` as any) || item.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {inclusionPoints.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <SectionReveal key={item.id} delay={0.2 + index * 0.05}>
                      <div className="group space-y-4">
                        <div className="inline-flex rounded-2xl bg-background p-4 text-primary shadow-sm ring-1 ring-border transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                          <Icon className="size-6" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-bold">{t(`whyus.point.${item.id}.title` as any) || item.title}</h4>
                          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                            {t(`whyus.point.${item.id}.description` as any) || item.description}
                          </p>
                        </div>
                      </div>
                    </SectionReveal>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
