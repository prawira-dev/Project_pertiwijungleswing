"use client";

import { Menu, MoveUpRight, X, Globe, Trees, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data/landing";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "id" : "en");

  // Custom scroll handler to account for fixed header height
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 90; // Adjust this value based on header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setOpen(false);
        setShowMore(false);
      }
    }
  };

  // Split items: 5 important + the rest
  const mainItems = navItems.slice(0, 5);
  const otherItems = navItems.slice(5);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-40 transition-all duration-300",
      isScrolled ? "bg-foreground/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="container-shell">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={(e) => scrollToSection(e, "#home")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground">
              <Trees className="size-6" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-wider text-white">
              PERTIWI JUNGLE SWING
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {mainItems.map((item) => {
              const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm font-medium tracking-wide text-white/75 hover:text-white transition-colors"
                >
                  {t(key) || item.label}
                </a>
              );
            })}

            {/* More Menu Dropdown */}
            {otherItems.length > 0 && (
              <div className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide text-white/75 hover:text-white transition-colors"
                >
                  More <ChevronDown className={cn("size-4 transition-transform", showMore && "rotate-180")} />
                </button>

                {showMore && (
                  <div className="absolute top-full right-0 mt-4 w-48 rounded-2xl bg-foreground border border-white/10 shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {otherItems.map((item) => {
                      const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {t(key) || item.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Globe className="size-4" />
              {lang.toUpperCase()}
            </button>
            <Button asChild className="rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-primary transition-all">
              <a
                href="https://pertiwiadventure.com/bookings/"
                target="_blank"
                rel="noreferrer"
              >
                BOOK NOW <MoveUpRight className="ml-2 size-4 rounded-full bg-white text-primary p-0.5" />
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

        {/* Mobile Navigation */}
        <div
          className={cn(
            "bg-foreground shadow-xl mt-3 overflow-hidden rounded-[1.75rem] transition-all duration-300 lg:hidden",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-1 px-4 py-4 max-h-[30rem] overflow-y-auto scrollbar-hide">
            {navItems.map((item) => {
              const key = `nav.${item.label.toLowerCase()}` as Parameters<typeof t>[0];
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {t(key) || item.label}
                </a>
              );
            })}
            <div className="px-4 py-4 border-t border-white/5 mt-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                <Globe className="size-4" />
                {lang === "en" ? "Switch to Indonesia" : "Switch to English"}
              </button>
            </div>
            <Button asChild className="mt-3 w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-12">
              <a
                href="https://pertiwiadventure.com/bookings/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2"
              >
                BOOK NOW <MoveUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
