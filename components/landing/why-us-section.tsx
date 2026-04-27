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

        <SectionReveal delay={0.12}>
          <Card>
            <CardContent className="grid gap-5 p-6 sm:grid-cols-3">
              {inclusionPoints.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div key={item.id} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 inline-flex rounded-full bg-white/8 p-3 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{t(`whyus.point.${item.id}.title` as any) || item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {t(`whyus.point.${item.id}.description` as any) || item.description}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}
