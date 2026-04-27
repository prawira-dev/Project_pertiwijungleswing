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
  const [showAll, setShowAll] = useState(false);

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

  /* Shared card used in both layouts */
  const AttractionCard = ({ item, index }: { item: typeof attractionItems[number]; index: number }) => (
    <SectionReveal key={item.id} delay={index * 0.06}>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`group relative overflow-hidden rounded-2xl text-left shadow-md transition-all duration-500 hover:shadow-2xl ${showAll
              ? "aspect-[9/16] w-full"
              : "aspect-[9/16] w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 snap-start"
              }`}
          >
            {/* Background with zoom effect */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ backgroundImage: item.gradient, backgroundSize: "cover", backgroundPosition: "center" }}
            />

            {/* Default gradient - bottom only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/75 group-hover:to-black/50" />

            {/* Arrow icon top-right */}
            <div className="absolute top-4 right-4 z-10">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/80 text-foreground shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-white">
                <MoveUpRight className="size-4" />
              </span>
            </div>

            {/* Title - always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end h-full">
              <h3 className="text-lg font-bold text-white transition-all duration-300">
                {item.title}
              </h3>
              {/* Description - expands to fill card on hover */}
              <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[70%] group-hover:opacity-100">
                <p className="mt-3 text-sm text-white/90 font-medium leading-relaxed">
                  {item.shortDescription}
                </p>
              </div>
            </div>
          </button>
        </DialogTrigger>

        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Gallery panel */}
            <div className="grid min-h-[22rem] grid-cols-1 gap-3 bg-gray-100 p-5 sm:grid-cols-3 lg:min-h-full lg:grid-cols-1 rounded-l-2xl">
              {item.gallery.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm"
                  style={{ backgroundImage: image.gradient }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    {image.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Info panel */}
            <div className="p-6 sm:p-8">
              <DialogHeader className="pr-10">
                <DialogTitle className="text-gray-900">{item.title}</DialogTitle>
                <DialogDescription className="text-gray-500">{item.subtitle}</DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <p className="leading-7 text-gray-600">{item.description}</p>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <ShieldCheck className="size-4" />
                    Safety & Session Notes
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-gray-600">
                    {item.safetyNotes.map((note) => (
                      <li key={note} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{note}</span>
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

  return (
    <section id="attractions" className="section-anchor section-space relative bg-background">
      <div className="container-shell space-y-10">
        {/* Header row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-4">
              <Badge>{t("attraction.eyebrow")}</Badge>
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {t("attraction.title")}
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full bg-transparent border-border text-foreground hover:bg-foreground hover:text-background pb-0 pt-0 pr-1 pl-4 h-10 gap-2 font-medium shrink-0"
            >
              {showAll ? t("attraction.showLess") : t("attraction.seeAll")}
              <span className="rounded-full bg-foreground text-background p-1.5 flex items-center justify-center">
                <MoveUpRight className={`size-3 transition-transform ${showAll ? "rotate-90" : ""}`} />
              </span>
            </Button>
          </div>
        </SectionReveal>

        {showAll ? (
          /* Grid view – shows ALL attractions */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {attractionItems.map((item, index) => (
              <AttractionCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <>
            {/* Horizontal scrolling cards - IG-style portrait */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              {attractionItems.map((item, index) => (
                <AttractionCard key={item.id} item={item} index={index} />
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
          </>
        )}
      </div>
    </section>
  );
}
