"use client";

import { Star, User } from "lucide-react";
import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { testimonialItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-space relative overflow-hidden">
      <div className="container-shell space-y-6">
        <SectionReveal>
          <SectionHeading
            title={t("testimonials.title")}
            description={t("testimonials.subtitle")}
            align="center"
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Fading edges for smooth enter/exit */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max gap-8 animate-scroll">
              {[...testimonialItems, ...testimonialItems].map((item, index) => (
                <div key={`${item.id}-${index}`} className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0">
                  <Card className="h-full border-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8 space-y-6 flex flex-col h-full">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`size-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed flex-grow text-sm lg:text-base">
                        &quot;{t(`testimonial.${item.id}.text` as any)}&quot;
                      </p>

                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary/5 flex-shrink-0">
                          <User className="size-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-base sm:text-lg leading-tight line-clamp-1">{item.name}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">{item.country}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 -left-20 size-96 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-1/4 -right-20 size-96 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
    </section>
  );
}
