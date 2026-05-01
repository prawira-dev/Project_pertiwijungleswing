"use client";

import { Instagram, MoveUpRight } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/landing/section-heading";
import { SectionReveal } from "@/components/landing/section-reveal";
import { Badge } from "@/components/ui/badge";
import { galleryItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

export function GallerySection() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section-anchor section-space relative">
      <div className="container-shell space-y-12">
        <SectionReveal>
          <SectionHeading
            eyebrow={t("gallery.eyebrow" as any) || "Gallery"}
            title={t("gallery.title")}
            description={t("gallery.subtitle")}
          />
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.05}>
              <a
                href={item.postUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-muted shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.caption}
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: item.gradient, backgroundSize: "cover" }}
                  />
                )}

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Badge */}
                <div className="absolute right-6 top-6 z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <Badge variant="default" className="gap-2 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-black backdrop-blur-md">
                    <Instagram className="size-3.5" /> INSTAGRAM
                  </Badge>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {item.location}
                      </p>
                      <h4 className="text-lg font-semibold leading-snug text-white line-clamp-2">
                        {item.caption}
                      </h4>
                    </div>
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <MoveUpRight className="size-5" />
                    </div>
                  </div>
                </div>

                {/* Hover Action Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-xl ring-1 ring-white/30">
                    View Post
                  </span>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
