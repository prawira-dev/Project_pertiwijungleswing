"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { useLanguage } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-space relative bg-muted/20">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <SectionReveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/static/images/about-pertiwi.png"
                alt="About Pertiwi Jungle Swing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  Visit Us in Ubud
                </div>
                <p className="text-white/90 text-sm font-medium leading-relaxed italic">
                  &quot;{t("about.quote")}&quot;
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            <SectionReveal>
              <SectionHeading
                eyebrow={t("about.eyebrow")}
                title={t("about.title")}
                description={t("about.subtitle")}
                align="left"
              />
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.story")}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">
                        {t(`about.feature.${num}` as any)}
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
