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
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
            description={t("testimonials.subtitle")}
            align="center"
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonialItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.1}>
              <Card className="h-full border-primary/5 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 space-y-6 flex flex-col h-full">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`size-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed flex-grow">
                    "{t(`testimonial.${item.id}.text` as any)}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary/5">
                      <User className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-1/2 -left-20 size-96 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-1/4 -right-20 size-96 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
    </section>
  );
}
