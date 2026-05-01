"use client";

import { Check, MoveUpRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

import { SectionHeading } from "@/components/landing/section-heading";
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
import { GallerySlider } from "./gallery-slider";

/* Shared card used in both layouts */
const AttractionCard = ({
  item,
  index,
  showAll
}: {
  item: typeof attractionItems[number];
  index: number;
  showAll: boolean;
}) => {
  const { lang } = useLanguage();
  return (
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
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />

            {/* Default gradient - bottom only */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/75 group-hover:to-black/50" />

            {/* Arrow icon top-right */}
            <div className="absolute top-4 right-4 z-10">
              <span className="flex size-9 items-center justify-center rounded-full bg-white/80 text-foreground shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 group-hover:bg-white">
                <MoveUpRight className="size-4" />
              </span>
            </div>

            {/* Badge top-left */}
            {(lang === "id" && item.badge_id ? item.badge_id : item.badge) && (
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="default" className="bg-primary text-white border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {lang === "id" && item.badge_id ? item.badge_id : item.badge}
                </Badge>
              </div>
            )}

            {/* Title - always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end h-full">
              <h3 className="text-lg font-bold text-white transition-all duration-300 font-heading">
                {lang === "id" && item.title_id ? item.title_id : item.title}
              </h3>
              {/* Description - expands to fill card on hover */}
              <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-[70%] group-hover:opacity-100">
                <p className="mt-3 text-sm text-white/90 font-medium leading-relaxed">
                  {lang === "id" && item.shortDescription_id ? item.shortDescription_id : item.shortDescription}
                </p>
              </div>
            </div>
          </button>
        </DialogTrigger>

        <DialogContent className="max-h-[95vh] w-[95vw] max-w-5xl overflow-hidden p-0 border-none bg-background/95 backdrop-blur-xl">
          <div className="grid h-full gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Gallery panel - Horizontal Slider */}
            <GallerySlider gallery={item.gallery} />

            {/* Info panel */}
            <div className="flex flex-col h-full max-h-[60vh] lg:max-h-full overflow-y-auto p-6 sm:p-10 lg:p-12">
              <DialogHeader className="pr-10 text-left">
                <DialogTitle className="text-3xl font-bold text-gray-900 tracking-tight font-heading">
                  {lang === "id" && item.title_id ? item.title_id : item.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-primary/70 mt-2 font-medium">
                  {lang === "id" && item.subtitle_id ? item.subtitle_id : item.subtitle}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <p className="leading-7 text-gray-600">
                  {lang === "id" && item.description_id ? item.description_id : item.description}
                </p>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <ShieldCheck className="size-4" />
                    {lang === "id" ? "Sorotan" : "Highlights"}
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-gray-600">
                    {(lang === "id" && item.safetyNotes_id ? item.safetyNotes_id : item.safetyNotes).map((note) => (
                      <li key={note} className="flex gap-3">
                        <Check className="mt-1 size-3.5 shrink-0 text-emerald-500" />
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
};

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

  return (
    <section id="attractions" className="section-space relative bg-background">
      <div className="container-shell space-y-10">
        {/* Header row */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <SectionHeading
              title={t("attraction.title")}
              description={t("attraction.subtitle")}
            />
            <Button
              variant="outline"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full bg-transparent border-border text-foreground hover:bg-foreground hover:text-background pb-0 pt-0 pr-1 pl-4 h-10 gap-2 font-medium shrink-0 mb-2"
            >
              {showAll ? t("attraction.showLess") : t("attraction.seeAll")}
              <span className="rounded-full bg-foreground text-background p-1.5 flex items-center justify-center">
                <MoveUpRight className={`size-3 transition-transform ${showAll ? "rotate-90" : ""}`} />
              </span>
            </Button>
          </div>
        </SectionReveal>

        {showAll ? (
          /* Grid view – shows ALL attractions with balanced layout */
          <div className="grid grid-cols-12 gap-5">
            {attractionItems.map((item, index) => {
              // First 3 items take 4 columns each (3 items per row)
              // Next 8 items take 3 columns each (4 items per row)
              const isTopThree = index < 3;
              const isLast = index === attractionItems.length - 1;
              return (
                <div 
                  key={item.id} 
                  className={cn(
                    "col-span-12 sm:col-span-6 lg:col-span-4", // Mobile: 1 per row, Tablet: 2 per row
                    !isTopThree && "lg:col-span-3", // Desktop rest: 4 per row
                    isLast && "sm:col-span-12 lg:col-span-3" // Last item: full width on tablet
                  )}
                >
                  <AttractionCard item={item} index={index} showAll={showAll} />
                </div>
              );
            })}
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
                <AttractionCard key={item.id} item={item} index={index} showAll={showAll} />
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
