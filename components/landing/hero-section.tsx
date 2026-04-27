"use client";

import Image from "next/image";



import { SectionReveal } from "@/components/landing/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

const heroVideoSources = [
  {
    src: "/static/videos/hero-video.mp4",
    type: "video/mp4"
  }
].filter((source) => source.src);

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="section-anchor relative min-h-screen pt-28">
      <div className="absolute inset-0">
        {heroVideoSources.length > 0 ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/static/image/hero-poster.jpg"
          >
            {heroVideoSources.map((source) => (
              <source key={source.type} src={source.src} type={source.type} />
            ))}
          </video>
        ) : (
          <Image
            src="/static/image/hero-poster.jpg"
            alt="Pertiwi Jungle Swing"
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container-shell relative z-10 flex min-h-[calc(100vh-7rem)] flex-col pt-24 pb-14">
        <div className="relative z-20 flex w-full flex-col justify-end mt-auto text-left gap-4 sm:gap-6 pt-[10vh] sm:pt-[20vh]">
          <SectionReveal delay={0.2} className="flex flex-col sm:flex-row items-end justify-between w-full border-t border-white/20 pt-8 mt-16 text-white gap-8">
            <div className="text-left shrink-0">
              <p className="font-bold text-sm sm:text-base whitespace-pre-line">{t("hero.title")}</p>
            </div>

            <div className="text-left sm:text-right text-xs sm:text-sm max-w-2xl text-white/80 leading-relaxed">
              {t("hero.subtitle")}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
