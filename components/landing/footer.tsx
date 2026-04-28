"use client";

import { Instagram, Mail, MapPin, MoveUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/lib/data/landing";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#091712] border-t border-white/10 pt-16 pb-12">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_0.85fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <span className="text-xl font-black">P</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400/90">Pertiwi Jungle Swing</p>
                <h3 className="text-lg font-bold text-white mt-0.5">Discover the Thrill of Bali's Jungle Swing</h3>
              </div>
            </div>
            <p className="max-w-md leading-relaxed text-gray-400 text-sm">Experience the thrill of the jungle with breathtaking views and unforgettable adventures at Bali's premier jungle swing destination.</p>
            <div className="pt-2">
              <Button asChild className="rounded-full bg-emerald-500 text-white hover:bg-emerald-600 border-none px-6">
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                  {t("nav.book")} <MoveUpRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 transition hover:text-emerald-400"
                >
                  {t(`nav.${item.label.toLowerCase()}` as any) || item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-gray-400 transition hover:text-white"
              >
                <MapPin className="mt-1 size-4 shrink-0 text-emerald-400" />
                <span>Pertiwi Jungle Swing Location</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-emerald-400" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-emerald-400" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <Instagram className="size-4 shrink-0 text-emerald-400" />
                <span>@pertiwijungleswing</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.299912554737!2d115.24030060000001!3d-8.470189199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd223000dc6682f%3A0x881ff8a2570ef274!2sPertiwi%20Jungle%20Swing!5e0!3m2!1sen!2sid!4v1777277786696!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pertiwi Jungle Swing Location"
            className="grayscale-[0] invert-[0] contrast-[1] brightness-[1.0]"
          ></iframe>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-xs font-medium text-gray-500 uppercase tracking-widest">
          <p>Copyright © 2026 Pertiwi Jungle Swing.</p>
          <p>Designed by Aditya</p>
        </div>
      </div>
    </footer>
  );
}
