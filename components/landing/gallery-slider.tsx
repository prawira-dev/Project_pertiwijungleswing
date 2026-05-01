"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
}

export const GallerySlider = ({ gallery }: { gallery: GalleryImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    if (width <= 0) return;
    const index = Math.round(scrollLeft / width);
    if (!isNaN(index)) {
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative group/gallery bg-gray-100 lg:rounded-l-2xl overflow-hidden w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px]">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide absolute inset-0"
      >
        {gallery.map((image, idx) => (
          <div
            key={image.id}
            className="relative min-w-full h-full w-full snap-start flex-shrink-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{ backgroundImage: `url(${image.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Image Caption/Counter */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
                Gallery {idx + 1}/{gallery.length}
              </p>
              <h4 className="text-xl font-bold text-white leading-tight">
                {image.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {gallery.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-30 opacity-0 group-hover/gallery:opacity-100 transition-opacity">
          <button
            className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 pointer-events-auto transition-all disabled:opacity-30"
            onClick={() => scrollTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            className="p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 pointer-events-auto transition-all disabled:opacity-30"
            onClick={() => scrollTo(activeIndex + 1)}
            disabled={activeIndex === gallery.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}

      {/* Progress Dots */}
      {gallery.length > 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`size-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-white w-5" : "bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
