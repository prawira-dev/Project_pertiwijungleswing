"use client";

import { Instagram, MoveUpRight } from "lucide-react";

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

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 0.04}>
              <a
                href={item.postUrl}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[2rem] border border-white/10"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ backgroundImage: item.gradient }}
                >
                  <div className="absolute right-4 top-4">
                    <Badge variant="muted" className="gap-2 text-[10px]">
                      <Instagram className="size-3.5" /> Social proof
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.caption}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary/85">
                          {item.location}
                        </p>
                      </div>
                      <div className="rounded-full border border-white/15 bg-black/20 p-3 text-foreground/70 transition group-hover:bg-primary/15 group-hover:text-primary">
                        <MoveUpRight className="size-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
