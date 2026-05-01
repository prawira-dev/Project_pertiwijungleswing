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

      <div className="container-shell relative z-10 flex min-h-[calc(100vh-7rem)] flex-col pt-24 pb-14">
        <div className="relative z-20 flex w-full flex-col justify-end mt-auto text-left gap-4 sm:gap-6 pt-[10vh] sm:pt-[20vh]">
          <SectionReveal delay={0.1}>
            <Button size="lg" className="rounded-full w-fit px-8 h-12 sm:h-14 text-base sm:text-lg" asChild>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(t("whatsapp.message"))}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                {t("hero.cta")} <MoveUpRight className="ml-2 size-5 rounded-full bg-white text-primary p-1" />
              </a>
            </Button>
          </SectionReveal>

          <SectionReveal delay={0.2} className="flex flex-col sm:flex-row items-end justify-between w-full border-t border-white/20 pt-8 mt-12 sm:mt-16 text-white gap-8">
            <div className="text-left shrink-0">
              <p className="font-bold text-lg sm:text-xl whitespace-pre-line">{t("hero.title")}</p>
            </div>

            <div className="text-left sm:text-right text-sm sm:text-base max-w-2xl text-white/80 leading-relaxed">
              {t("hero.subtitle")}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
