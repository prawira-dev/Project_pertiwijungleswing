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

        <div className={`grid gap-8 ${packageOptions.length === 1 ? 'max-w-lg mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
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
                <Dialog>
                  <div className="relative group flex flex-col h-full bg-background border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                    <DialogTrigger asChild>
                      <div className="relative aspect-[16/10] overflow-hidden cursor-pointer">
                        <Image
                          src={pkg.image || "/static/images/placeholder.jpg"}
                          alt={name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity group-hover:opacity-60" />
                        {badge && (
                          <div className="absolute top-5 right-5 z-10">
                            <Badge className="bg-primary text-white border-none px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
                              {badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </DialogTrigger>

                    <div className="px-6 pt-5 pb-4 space-y-3 flex flex-col h-full">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight font-heading">{name}</h3>
                        <div className="flex items-center gap-8 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          <span className="flex items-start gap-2 whitespace-pre-line"><Users className="size-5 mt-0.5" /> {audience}</span>
                          <span className="flex items-center gap-2"><Clock className="size-5" /> {duration}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-3xl font-bold text-primary">
                          {pkg.price}
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                          {subtitle}
                        </p>
                      </div>

                      <div className="space-y-1 flex-grow">
                        <ul className="space-y-2">
                          {features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                              <Check className="size-4 shrink-0 text-emerald-500 mt-1" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <DialogTrigger asChild>
                        <Button className="w-full rounded-full h-12 font-bold transition-all duration-300">
                          {lang === "id" ? "Lihat Detail" : "View Details"}
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>

                  <DialogContent className="h-[90vh] w-[95vw] max-w-5xl overflow-hidden p-0 border-none bg-background/95 backdrop-blur-xl">
                    <div className="grid h-full gap-0 lg:grid-cols-2">
                      {/* Gallery Panel */}
                      <div className="relative h-[300px] sm:h-[400px] lg:h-full overflow-hidden bg-muted">
                        {pkg.gallery ? (
                          <GallerySlider gallery={pkg.gallery} />
                        ) : (
                          <div className="relative h-full w-full">
                            {pkg.image ? (
                              <Image
                                src={pkg.image}
                                alt={name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                <Trees className="size-12 text-primary/20" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Info panel */}
                      <div className="flex flex-col h-[calc(90vh-300px)] sm:h-[calc(90vh-400px)] lg:h-full overflow-y-auto p-6 sm:p-10 lg:p-12 bg-white/50">
                        <DialogHeader className="pr-10 text-left">
                          <div className="flex items-center justify-between mb-2">
                            {badge && (
                              <Badge variant="default" className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                                {badge}
                              </Badge>
                            )}
                            <div className="text-xl font-bold text-primary">{pkg.price}</div>
                          </div>
                          <DialogTitle className="text-3xl font-bold text-gray-900 tracking-tight font-heading">{name}</DialogTitle>
                          <DialogDescription className="text-lg text-primary/70 mt-2 font-medium">{subtitle}</DialogDescription>
                        </DialogHeader>

                        <div className="mt-6 space-y-6">
                          <div className="flex flex-wrap gap-16 text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
                            <span className="flex items-start gap-2 whitespace-pre-line"><Users className="size-5 text-primary mt-0.5" /> {audience}</span>
                            <span className="flex items-center gap-2"><Clock className="size-5 text-primary" /> {duration}</span>
                          </div>

                          <p className="leading-7 text-gray-600">{description}</p>

                          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                            <div className="mb-4 inline-flex items-center gap-2 text-base font-medium text-emerald-700">
                              <ShieldCheck className="size-4" />
                              {lang === "id" ? "Sorotan" : "Highlights"}
                            </div>
                            <ul className="space-y-3 text-base leading-6 text-gray-600">
                              {features.map((feature, i) => (
                                <li key={i} className="flex gap-3">
                                  <Check className="mt-1 size-3.5 shrink-0 text-emerald-500" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
