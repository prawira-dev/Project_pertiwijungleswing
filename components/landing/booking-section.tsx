"use client";

import { Calendar, CheckCircle2, CreditCard, Info, MoveUpRight } from "lucide-react";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function BookingSection() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: Calendar,
      title: t("booking.step1.title" as any),
      desc: t("booking.step1.desc" as any)
    },
    {
      id: 2,
      icon: Info,
      title: t("booking.step2.title" as any),
      desc: t("booking.step2.desc" as any)
    },
    {
      id: 3,
      icon: CheckCircle2,
      title: t("booking.step3.title" as any),
      desc: t("booking.step3.desc" as any)
    }
  ];

  return (
    <section id="packages" className="section-anchor section-space relative bg-muted/30">
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("packages.eyebrow" as any) || "Booking"}
            title={t("booking.title" as any)}
            description={t("booking.subtitle" as any)}
            align="center"
          />
        </SectionReveal>

        {/* Booking Steps Wrapper */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SectionReveal key={step.id} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Embed-ready booking system container */}
        <SectionReveal delay={0.3}>
          <div id="booking-embed" className="relative">
            <Card className="overflow-hidden border-2 border-primary/10 shadow-xl">
              <div className="bg-primary/5 border-b border-primary/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Live Booking System</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-border" />
                  <div className="size-2.5 rounded-full bg-border" />
                  <div className="size-2.5 rounded-full bg-border" />
                </div>
              </div>
              <CardContent className="p-0 sm:p-2 bg-white">
                {/* 
                  ==========================================
                  EMBED YOUR BOOKING SYSTEM HERE
                  ==========================================
                  
                  Options to embed:
                  
                  1. IFRAME EMBED (Recommended):
                     <iframe 
                       src="https://your-booking-system-url.com/embed" 
                       className="w-full min-h-[600px] border-0"
                       title="Pertiwi Booking System"
                     />
                  
                  2. SCRIPT WIDGET:
                     Place the script tag in your layout.tsx or use Next.js Script component,
                     then render the target div here:
                     <div id="booking-widget-container" className="w-full h-full"></div>
                  
                  ==========================================
                */}

                {/* Placeholder for the embed */}
                <div className="min-h-[500px] md:min-h-[700px] w-full flex flex-col items-center justify-center gap-6 p-10 text-center bg-muted/20">
                  <div className="relative">
                    <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center animate-bounce duration-[2000ms]">
                      <CreditCard className="size-10 text-primary/60" />
                    </div>
                    <div className="absolute -top-1 -right-1 size-6 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center">
                      <MoveUpRight className="size-3 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-3 max-w-md">
                    <h3 className="text-xl font-bold">Booking System Ready</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This area is optimized for your booking engine embed. Whether you use Rezdy, FareHarbor, or a custom iframe, it will fit perfectly within this container.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground uppercase tracking-widest pt-4">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-500" /> Secure Payment</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-500" /> Instant E-Ticket</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-emerald-500" /> No Booking Fees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Background Decorations */}
            <div className="absolute -z-10 -top-10 -right-10 size-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-10 -left-10 size-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
