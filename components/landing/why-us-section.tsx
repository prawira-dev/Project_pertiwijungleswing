"use client";

import {
  Camera,
  Mountain,
  Sparkles,
  Trees
} from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { valuePoints } from "@/lib/data/landing";
import type { ValuePoint } from "@/types";
import { useLanguage } from "@/lib/i18n";

const iconMap: Record<string, any> = {
  trees: Trees,
  camera: Camera,
  mountain: Mountain,
  sparkles: Sparkles,
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <SectionReveal key={item.id} delay={index * 0.06}>
                <Card className="h-full border-primary/5 hover:border-primary/20 transition-colors duration-300">
                  <CardContent className="space-y-5 p-8">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold tracking-tight">{t(`whyus.point.${item.id}.title` as any) || item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t(`whyus.point.${item.id}.description` as any) || item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
