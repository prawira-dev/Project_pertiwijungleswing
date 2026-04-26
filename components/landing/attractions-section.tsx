"use client";

import { MoveUpRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

import { SectionReveal } from "@/components/landing/section-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { attractionItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

export function AttractionsSection() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="attractions" className="section-anchor section-space relative bg-background">
      <div className="container-shell space-y-10">
        {/* Header row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-4">
              <Badge>{t("destinations.eyebrow")}</Badge>
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {t("destinations.title")}
              </h2>
            </div>
            <Button
              variant="outline"
              className="rounded-full bg-transparent border-border text-foreground hover:bg-foreground hover:text-background pb-0 pt-0 pr-1 pl-4 h-10 gap-2 font-medium shrink-0"
            >
              {t("destinations.seeAll")}
              <span className="rounded-full bg-foreground text-background p-1.5 flex items-center justify-center">
                <MoveUpRight className="size-3" />
              </span>
            </Button>
          </div>
        </SectionReveal>

        {/* Cards grid */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {attractionItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.06}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="group relative min-h-[22rem] w-[80vw] sm:w-[60vw] lg:w-full flex-shrink-0 snap-start overflow-hidden rounded-2xl text-left shadow-md transition-shadow hover:shadow-xl"
                    style={{ backgroundImage: item.gradient }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition duration-300 group-hover:from-black/80" />

                    {/* Arrow icon top-right */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="flex size-9 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition group-hover:scale-110 group-hover:bg-white">
                        <MoveUpRight className="size-4" />
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/75 font-medium">
                        {item.shortDescription}
                      </p>
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="grid min-h-[22rem] grid-cols-1 gap-3 bg-[#091712] p-5 sm:grid-cols-3 lg:min-h-full lg:grid-cols-1">
                      {item.gallery.map((image) => (
                        <div
                          key={image.id}
                          className="relative overflow-hidden rounded-[1.5rem] border border-white/10"
                          style={{ backgroundImage: image.gradient }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                          <p className="absolute bottom-4 left-4 text-sm font-medium text-foreground">
                            {image.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 sm:p-8">
                      <DialogHeader className="pr-10">
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>{item.subtitle}</DialogDescription>
                      </DialogHeader>

                      <div className="mt-6 space-y-6">
                        <p className="leading-7 text-muted-foreground">{item.description}</p>

                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                            <ShieldCheck className="size-4" />
                            Safety & Session Notes
                          </div>
                          <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                            {item.safetyNotes.map((note) => (
                              <li key={note} className="flex gap-3">
                                <span className="mt-2 size-1.5 rounded-full bg-primary" />
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild>
                          <a href="#packages">{item.reservationLabel}</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </SectionReveal>
          ))}
        </div>

        {/* Navigation arrows */}
        <SectionReveal delay={0.15}>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous attractions"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next attractions"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
