"use client";

import { Instagram, Mail, MapPin, MoveUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pb-8 pt-10">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-white/10 bg-[#091712] px-6 py-10 shadow-2xl shadow-black/20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.85fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <span className="text-xl font-black">P</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                    Scenic adventure destination
                  </p>
                  <p className="text-lg font-semibold text-foreground">Pertiwi Jungle Swing</p>
                </div>
              </div>
              <p className="max-w-md leading-7 text-muted-foreground">{t("footer.description")}</p>
              <Button asChild>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                  {t("nav.book")} <MoveUpRight />
                </a>
              </Button>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Quick Links</p>
              <div className="mt-5 space-y-3">
                {navItems.map((item) => {
                  const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      {t(key) || item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Contact & Visit</p>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm leading-7 text-muted-foreground hover:text-foreground"
              >
                <MapPin className="mt-1 size-4 text-primary" />
                <span>Google Maps direction to Pertiwi Jungle Swing, Ubud</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="size-4 text-primary" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-4 text-primary" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <Instagram className="size-4 text-primary" />
                <span>@pertiwijungleswing</span>
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-sm text-muted-foreground">
            Copyright © 2026 Pertiwi Jungle Swing.
          </div>
        </div>
      </div>
    </footer>
  );
}
