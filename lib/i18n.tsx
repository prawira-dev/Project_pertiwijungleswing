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
    "nav.whyus": "Why Us",
    "nav.attractions": "Attractions",
    "nav.packages": "Packages",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.book": "Book schedule",
    "hero.title": "Pertiwi Jungle Swing\nDiscover the Thrill of Bali's Jungle Swing Experience",
    "hero.subtitle": "Discover Nature's Finest Places, breathtaking landscapes, untouched beauty, and nature at its purest. Experience the ultimate swing over the lush greenery of New Ubud, Bali.",
    "hero.spots": "Discover Pertiwi Jungle Swing",
    "attraction.eyebrow": "Our Attractions",
    "attraction.title": "Your Journey to the Perfect Attractions Begins Here",
    "attraction.seeAll": "See All Attractions",
    "attraction.showLess": "Show Less",
    "whyus.eyebrow": "Why Us",
    "whyus.title": "Why Pertiwi Jungle Swing?",
    "whyus.subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "whyus.point.safety.title": "Safety First",
    "whyus.point.safety.description": "International-standard harness checks and trained operators at every ride point.",
    "whyus.point.photographer.title": "Professional Photographer",
    "whyus.point.photographer.description": "Capture your holiday moments with our recommended angles and expert timing.",
    "whyus.point.view.title": "Best Valley View",
    "whyus.point.view.description": "Open jungle sightlines that make every swing feel cinematic from takeoff to landing.",
    "whyus.point.welcome-drink.title": "Welcome Drink",
    "whyus.point.welcome-drink.description": "Refreshing arrival beverage before your session starts.",
    "whyus.point.insurance.title": "Insurance Coverage",
    "whyus.point.insurance.description": "Basic activity protection is included with every qualifying booking.",
    "whyus.point.locker.title": "Secure Locker",
    "whyus.point.locker.description": "Keep your belongings safe and practical while you enjoy the rides.",
    "packages.eyebrow": "Packages & Booking",
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
    "nav.whyus": "Kenapa Kami",
    "nav.attractions": "Atraksi",
    "nav.packages": "Paket",
    "nav.gallery": "Galeri",
    "nav.faq": "FAQ",
    "nav.book": "Pesan Jadwal",
    "hero.title": "Pertiwi Jungle Swing\nTemukan Sensasi Petualangan Ayunan Hutan di Bali",
    "hero.subtitle": "Jelajahi tempat-tempat terbaik, pemandangan memukau, keindahan murni, dan alam yang asri. Rasakan pengalaman ayunan terbaik di atas hijaunya Ubud.",
    "hero.spots": "300+ Titik\nIkonik Termasuk",
    "attraction.eyebrow": "Atraksi Kami",
    "attraction.title": "Perjalanan Anda Menuju Atraksi Sempurna Dimulai di Sini",
    "attraction.seeAll": "Lihat Semua Atraksi",
    "attraction.showLess": "Tampilkan Sedikit",
    "whyus.eyebrow": "Kenapa Kami",
    "whyus.title": "Mengapa Pertiwi Jungle Swing?",
    "whyus.subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "whyus.point.safety.title": "Keselamatan Utama",
    "whyus.point.safety.description": "Pemeriksaan harness standar internasional dan operator terlatih di setiap titik wahana.",
    "whyus.point.photographer.title": "Fotografer Profesional",
    "whyus.point.photographer.description": "Konten liburan Anda terbantu dengan sudut pengambilan gambar dan waktu terbaik.",
    "whyus.point.view.title": "Pemandangan Lembah Terbaik",
    "whyus.point.view.description": "Pandangan hutan terbuka yang membuat setiap ayunan terasa sinematik dari awal hingga akhir.",
    "whyus.point.welcome-drink.title": "Minuman Selamat Datang",
    "whyus.point.welcome-drink.description": "Minuman penyegar saat kedatangan sebelum sesi Anda dimulai.",
    "whyus.point.insurance.title": "Perlindungan Asuransi",
    "whyus.point.insurance.description": "Perlindungan aktivitas dasar sudah termasuk dalam setiap pemesanan yang memenuhi syarat.",
    "whyus.point.locker.title": "Loker Aman",
    "whyus.point.locker.description": "Titip barang tetap praktis dan aman selama Anda menikmati wahana.",
    "packages.eyebrow": "Paket & Pemesanan",
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
