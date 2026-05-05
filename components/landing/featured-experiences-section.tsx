"use client";

import { Check, Clock, Users, ShieldCheck, Trees } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { packageOptions } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { GallerySlider } from "./gallery-slider";

export function FeaturedExperiencesSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="experiences" className="section-space bg-background">
      <div className="container-shell space-y-6">
        <SectionReveal>
          <SectionHeading
            title={t("featured.title")}
            description={t("featured.subtitle")}
            align="center"
          />
        </SectionReveal>

        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {packageOptions.map((pkg, index) => {
            const name = lang === "id" && pkg.name_id ? pkg.name_id : pkg.name;
            const subtitle = lang === "id" && pkg.subtitle_id ? pkg.subtitle_id : pkg.subtitle;
            const description = lang === "id" && pkg.description_id ? pkg.description_id : pkg.description;
            const audience = lang === "id" && pkg.audience_id ? pkg.audience_id : pkg.audience;
            const duration = lang === "id" && pkg.duration_id ? pkg.duration_id : pkg.duration;
            const badge = lang === "id" && pkg.badge_id ? pkg.badge_id : pkg.badge;
            const features = lang === "id" && pkg.features_id ? pkg.features_id : pkg.features;

            return (
              <SectionReveal key={pkg.id} delay={index * 0.1}>
                <div className="overflow-hidden rounded-[2rem] bg-[#2f4d3d] p-4 sm:p-5 lg:p-6 shadow-2xl">
                  <Dialog>
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 h-auto lg:h-[450px]">
                      
                      {/* Left Panel - Fixed Info Image */}
                      <div className="relative w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-full rounded-2xl overflow-hidden group">
                        {pkg.image && (
                          <Image
                            src={pkg.image}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        {/* Dark gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0" />
                        
                        <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center items-start z-10">
                          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading uppercase mb-3 drop-shadow-md">
                            {name}
                          </h3>
                          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 max-w-xs font-medium drop-shadow-sm">
                            {subtitle}
                          </p>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="rounded-full border-white/80 text-white hover:bg-white hover:text-black bg-transparent px-8 h-10 font-bold transition-all duration-300 backdrop-blur-sm">
                              {lang === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
                            </Button>
                          </DialogTrigger>
                        </div>
                      </div>

                      {/* Right Panel - Slider */}
                      <div className="w-full lg:w-[55%] h-[350px] sm:h-[450px] lg:h-full rounded-2xl overflow-hidden">
                        {pkg.gallery ? (
                          <GallerySlider gallery={pkg.gallery.filter(g => g.image !== pkg.image)} slidesPerView={2} />
                        ) : (
                          <div className="h-full w-full rounded-xl bg-black/20 flex items-center justify-center">
                            <Trees className="size-12 text-white/20" />
                          </div>
                        )}
                      </div>

                    </div>

                    <DialogContent className="max-w-3xl overflow-hidden p-0 border-none bg-background rounded-[2rem] sm:rounded-[2.5rem]">
                      <div className="p-8 sm:p-10 lg:p-12 space-y-8 max-h-[85vh] overflow-y-auto scrollbar-hide">
                        <DialogHeader className="text-left space-y-4">
                          <div className="flex items-center justify-between">
                            {badge && (
                              <Badge className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                {badge}
                              </Badge>
                            )}
                            {pkg.price && <div className="text-lg font-bold text-primary">{pkg.price}</div>}
                          </div>
                          <DialogTitle className="text-3xl sm:text-4xl font-bold tracking-tight font-heading">{name}</DialogTitle>
                          <DialogDescription className="text-base font-medium text-primary/80 leading-relaxed">{subtitle}</DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                          <span className="flex items-center gap-2"><Users className="size-4 text-primary" /> <span className="whitespace-pre-line">{audience}</span></span>
                          <span className="flex items-center gap-2"><Clock className="size-4 text-primary" /> {duration}</span>
                        </div>

                        <p className="leading-relaxed text-sm lg:text-base text-muted-foreground">{description}</p>

                        <div className="rounded-2xl border border-primary/10 bg-primary/[0.03] p-6 sm:p-8">
                          <div className="mb-5 inline-flex items-center gap-2.5 text-base font-semibold text-emerald-700">
                            <ShieldCheck className="size-5" />
                            {lang === "id" ? "Sorotan Pengalaman" : "Experience Highlights"}
                          </div>
                          <ul className="grid gap-4 sm:grid-cols-2">
                            {features.map((feature, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <Check className="mt-1 size-4 shrink-0 text-emerald-500" />
                                <span className="text-sm lg:text-base text-muted-foreground leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-2">
                          <Button asChild className="w-full sm:w-auto rounded-full h-14 px-10 font-bold text-base transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                            <a href="https://pertiwiadventure.com/bookings/" target="_blank" rel="noreferrer">
                              {lang === "id" ? "Pesan Sekarang" : "Book Now"}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
