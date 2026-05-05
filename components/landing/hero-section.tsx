"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";



import { SectionReveal } from "@/components/landing/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

const heroVideoSources = [
  {
    src: "/static/videos/hero-video-2.mp4",
    type: "video/mp4"
  }
].filter((source) => source.src);

export function HeroSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 53) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <section id="home" className="section-anchor relative min-h-screen pt-28">
      <div className="absolute inset-0">
        {heroVideoSources.length > 0 ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
              }
            }}
            poster="/static/images/hero-poster.jpg"
          >
            {heroVideoSources.map((source) => (
              <source key={source.type} src={source.src} type={source.type} />
            ))}
          </video>
        ) : (
          <Image
            src="/static/images/hero-poster.jpg"
            alt="Pertiwi Jungle Swing"
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container-shell relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-end pb-10 sm:pb-14">
        <div className="relative z-20 flex w-full flex-col text-left gap-4 sm:gap-6 max-w-4xl">
          <SectionReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight font-heading">
              {t("hero.title")}
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="text-sm lg:text-base text-white/90 leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3} className="flex flex-col items-start gap-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-sm font-bold bg-transparent text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
              asChild
            >
              <a
                href={`https://pertiwiadventure.com/bookings/`}
                target="_blank"
                rel="noreferrer"
              >
                {t("hero.cta")}
              </a>
            </Button>

            <p className="text-[10px] sm:text-xs text-white/80 italic font-normal max-w-xl">
              {t("hero.disclaimer")}
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
