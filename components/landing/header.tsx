"use client";

import { Menu, MoveUpRight, X, Globe, Trees } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { contactInfo, navItems } from "@/lib/data/landing";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
      isScrolled ? "bg-foreground/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container-shell pt-4 pb-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground">
              <Trees className="size-6" />
            </div>
            <span className="text-2xl font-bold tracking-wider text-white">
              PERTIWI JUNGLE SWING
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium tracking-[0.02em] text-white/75 hover:text-white"
                >
                  {t(key) || item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Globe className="size-4" />
              {lang.toUpperCase()}
            </button>
            <Button asChild className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-primary">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(t("whatsapp.message"))}`}
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.book")} <MoveUpRight className="ml-2 size-4 rounded-full bg-white text-primary p-0.5" />
              </a>
            </Button>
          </div>

          <Button
            variant="secondary"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        <div
          className={cn(
            "bg-foreground shadow-xl mt-3 overflow-hidden rounded-[1.75rem] transition-all duration-300 lg:hidden",
            open ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => {
              const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {t(key) || item.label}
                </a>
              );
            })}
            <div className="px-4 py-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <Globe className="size-4" />
                {lang === "en" ? "Switch to Indonesia" : "Switch to English"}
              </button>
            </div>
            <Button asChild className="mt-3 w-full bg-white text-primary hover:bg-white/90">
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                {t("nav.book")} <MoveUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
