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

export function FeaturedExperiencesSection() {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="section-space bg-background">
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("featured.eyebrow")}
            title={t("featured.title")}
            description={t("featured.subtitle")}
            align="center"
          />
        </SectionReveal>

        <div className={`grid gap-8 ${packageOptions.length === 1 ? 'max-w-xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {packageOptions.map((pkg, index) => (
            <SectionReveal key={pkg.id} delay={index * 0.1}>
              <div className="relative group flex flex-col h-full bg-background border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                {pkg.badge && (
                  <div className="absolute top-5 right-5 z-10">
                    <Badge className="bg-primary text-white border-none px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}

                <div className="p-8 space-y-6 flex flex-col h-full">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">{pkg.name}</h3>
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><Users className="size-3.5" /> {pkg.audience}</span>
                      <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {pkg.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">
                      {pkg.price}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <Check className="size-4 shrink-0 text-emerald-500 mt-1" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded-full h-12 font-bold transition-all duration-300">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl border-none">
                      <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                        <div className="relative w-full md:w-2/5 min-h-[240px] md:min-h-full bg-muted">
                          {pkg.image ? (
                            <Image
                              src={pkg.image}
                              alt={pkg.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center p-8 text-center">
                              <div className="flex flex-col items-center gap-3">
                                <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                  <Trees className="size-6 text-primary/60" />
                                </div>
                                <span className="text-primary/60 font-bold uppercase tracking-[0.2em] text-[10px]">Pertiwi Moment</span>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                        </div>

                        <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white">
                          <DialogHeader className="mb-8 text-left">
                            <div className="flex items-center justify-between mb-4">
                              <Badge className="bg-primary/10 text-primary border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1">
                                {pkg.badge}
                              </Badge>
                              <div className="text-xl font-bold text-primary">{pkg.price}</div>
                            </div>
                            <DialogTitle className="text-3xl font-bold mb-2">{pkg.name}</DialogTitle>
                            <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                              {pkg.subtitle}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-8">
                            <div className="space-y-4">
                              <h4 className="font-bold text-sm uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Full Description</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">
                                {pkg.description}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
                              <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                                <ShieldCheck className="size-5" />
                                Highlights
                              </div>
                              <ul className="grid sm:grid-cols-2 gap-4 text-sm leading-relaxed text-muted-foreground">
                                {pkg.features.map((feature, i) => (
                                  <li key={i} className="flex gap-3">
                                    <Check className="mt-1 size-4 shrink-0 text-emerald-500" />
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
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
