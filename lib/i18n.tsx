"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations["en"]) => string;
}

export const translations = {
  en: {
    "nav.home": "Home",
    "nav.attractions": "Attractions",
    "nav.packages": "Packages",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.book": "Book schedule",
    "hero.title": "Discover the Thrill of Bali's Jungle Swing Experience",
    "hero.subtitle": "Discover Nature's Finest Places, breathtaking landscapes, untouched beauty, and nature at its purest. Experience the ultimate swing over the lush greenery of New Ubud, Bali.",
    "hero.spots": "Discover Pertiwi Jungle Swing",
    "destinations.eyebrow": "Our Destination",
    "destinations.title": "Your Journey to the Perfect Destination Begins Here",
    "destinations.seeAll": "See All Destination",
    "whyus.title": "Why Pertiwi Jungle Swing?",
    "whyus.subtitle": "We prioritize your safety and visual experience.",
    "packages.title": "Choose Your Experience",
    "packages.subtitle": "Select the best package that fits your adventure.",
    "gallery.title": "Visual Journey",
    "gallery.subtitle": "Glimpses of what awaits you.",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know before you fly.",
    "footer.description": "Experience the thrill of the jungle.",
    "footer.rights": "All rights reserved."
  },
  id: {
    "nav.home": "Beranda",
    "nav.attractions": "Atraksi",
    "nav.packages": "Paket",
    "nav.gallery": "Galeri",
    "nav.faq": "FAQ",
    "nav.book": "Pesan Jadwal",
    "hero.title": "Pertiwi Jungle Swing\nTemukan Sensasi Petualangan Ayunan Hutan di Bali",
    "hero.subtitle": "Jelajahi tempat-tempat terbaik, pemandangan memukau, keindahan murni, dan alam yang asri. Rasakan pengalaman ayunan terbaik di atas hijaunya Ubud.",
    "hero.spots": "300+ Titik\nIkonik Termasuk",
    "destinations.eyebrow": "Destinasi Kami",
    "destinations.title": "Perjalanan Anda Menuju Destinasi Sempurna Dimulai di Sini",
    "destinations.seeAll": "Lihat Semua Destinasi",
    "whyus.title": "Mengapa Pertiwi Jungle Swing?",
    "whyus.subtitle": "Kami mengutamakan keselamatan dan pengalaman visual Anda.",
    "packages.title": "Pilih Pengalaman Anda",
    "packages.subtitle": "Pilih paket terbaik yang sesuai dengan petualangan Anda.",
    "gallery.title": "Perjalanan Visual",
    "gallery.subtitle": "Sekilas tentang apa yang menanti Anda.",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.subtitle": "Semua yang perlu Anda ketahui sebelum melayang.",
    "footer.description": "Rasakan sensasi hutan rimba.",
    "footer.rights": "Hak cipta dilindungi."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved && (saved === "en" || saved === "id")) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: keyof typeof translations["en"]) => {
    return translations[lang][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
