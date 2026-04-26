"use client";

import { Check, MoveUpRight } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { packageOptions } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

export function PackagesSection() {
  const { t } = useLanguage();

  return (
    <section id="packages" className="section-anchor section-space relative">
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("packages.eyebrow" as any) || "Packages & Booking"}
            title={t("packages.title")}
            description={t("packages.subtitle")}
          />
        </SectionReveal>

        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {packageOptions.map((item, index) => (
              <SectionReveal key={item.id} delay={index * 0.08}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-primary/80">
                          {item.audience}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold uppercase">{item.name}</h3>
                      </div>
                      {item.badge ? <Badge>{item.badge}</Badge> : null}
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <p className="text-3xl font-semibold text-primary">{item.price}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.duration}</p>
                    </div>

                    <div className="mt-6 space-y-3">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm leading-6">
                          <div className="mt-1 rounded-full bg-primary/15 p-1 text-primary">
                            <Check className="size-3" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <Button asChild variant="secondary" className="w-full">
                        <a href="#booking-embed">
                          Choose This Package <MoveUpRight />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>

          {/* Embed-ready booking system container */}
          <SectionReveal delay={0.12}>
            <div id="booking-embed" className="space-y-5">
              <Card>
                <CardContent className="space-y-6 p-6 sm:p-7">
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.22em] text-primary/80">
                      Online Reservation
                    </p>
                    <h3 className="text-3xl font-semibold uppercase">
                      Book Your Experience
                    </h3>
                    <p className="leading-7 text-muted-foreground">
                      Use the booking system below to reserve your spot. Select your preferred date, time, and package to secure your adventure.
                    </p>
                  </div>

                  {/*
                    ==========================================
                    EMBED YOUR BOOKING SYSTEM HERE
                    ==========================================
                    
                    Options to embed:
                    
                    1. IFRAME EMBED:
                       <iframe 
                         src="https://your-booking-system-url.com/embed" 
                         width="100%" 
                         height="600" 
                         frameBorder="0"
                         title="Booking System"
                       />
                    
                    2. SCRIPT EMBED:
                       Add the script tag to your <head> in layout.tsx, then
                       place the target div here:
                       <div id="booking-widget"></div>
                    
                    3. DIRECT COMPONENT:
                       Import and render your booking component directly:
                       <YourBookingComponent />
                    
                    ==========================================
                  */}

                  <div className="min-h-[300px] rounded-2xl border-2 border-dashed border-border/60 bg-muted/30 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MoveUpRight className="size-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Booking System Embed Area</p>
                      <p className="text-sm text-muted-foreground max-w-sm">
                        Replace this placeholder with your booking system embed code (iframe, script widget, or custom component).
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
