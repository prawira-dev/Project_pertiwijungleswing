"use client";

import { Check } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { useLanguage } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-space relative bg-primary">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <SectionReveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/static/images/about-pertiwi.jpg"
                alt="About Pertiwi Jungle Swing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/90 text-sm font-medium leading-relaxed italic">
                  &quot;{t("about.quote")}&quot;
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            <SectionReveal>
              <SectionHeading
                title={t("about.title")}
                description={t("about.subtitle")}
                align="left"
                inverted
              />
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-6">
                <p className="text-white/70 leading-relaxed text-lg">
                  {t("about.story")}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                        <Check className="size-3.5 text-white" />
                      </div>
                      <span className="text-white/90 font-medium">
                        {t(`about.feature.${i}` as any)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
