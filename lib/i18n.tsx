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
    "whyus.point.safety-gear.title": "Safety Equipment",
    "whyus.point.safety-gear.description": "Standard international safety gear provided for all rides.",
    "whyus.point.photo-spots.title": "Photo Spots Access",
    "whyus.point.photo-spots.description": "Full access to all iconic photo spots around the valley.",
    "whyus.inclusions.title": "What's Included",
    "whyus.inclusions.subtitle": "Every visit includes premium facilities to ensure your comfort and safety.",
    "packages.eyebrow": "Packages & Booking",
    "packages.title": "Choose Your Experience",
    "packages.subtitle": "Select the best package that fits your adventure.",
    "booking.title": "Secure Your Adventure",
    "booking.subtitle": "Reserve your jungle experience online for guaranteed availability and instant confirmation.",
    "booking.step1.title": "Select Your Date",
    "booking.step1.desc": "Choose your preferred visit date and time slot.",
    "booking.step2.title": "Choose Package",
    "booking.step2.desc": "Select the experience that fits your journey.",
    "booking.step3.title": "Instant Confirmation",
    "booking.step3.desc": "Receive your e-ticket immediately via email.",
    "gallery.eyebrow": "Visual Story",
    "gallery.title": "Visual Journey",
    "gallery.subtitle": "Glimpses of what awaits you.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know before you fly.",
    "faq.q1": "Do I need to book before arriving?",
    "faq.a1": "Advance booking is highly recommended, especially for midday and golden-hour slots. You can still walk-in, but slot availability and wait times may vary.",
    "faq.q2": "Is the swing suitable for first-timers?",
    "faq.a2": "Yes. Our team guides every guest through harness fitting, safety instructions, and boarding support so first-time riders can feel prepared before launch.",
    "faq.q3": "Can I choose photo spots without taking the extreme swing?",
    "faq.a3": "Absolutely. Several packages can be adjusted for photo-focused visits, including Bird Nest and signature post access depending on availability.",
    "faq.q4": "What should I wear for the experience?",
    "faq.a4": "Wear comfortable clothing and shoes with stable footing. Flowing outfits photograph beautifully, but secure footwear helps during platform access.",
    "footer.description": "Experience the thrill of the jungle.",
    "footer.rights": "All rights reserved.",
    "whatsapp.message": "Hi Pertiwi Jungle Swing, I would like to book a schedule consultation."
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
    "whyus.point.safety-gear.title": "Peralatan Keselamatan",
    "whyus.point.safety-gear.description": "Peralatan keselamatan standar internasional disediakan untuk semua wahana.",
    "whyus.point.photo-spots.title": "Akses Spot Foto",
    "whyus.point.photo-spots.description": "Akses penuh ke semua spot foto ikonik di sekitar lembah.",
    "whyus.inclusions.title": "Sudah Termasuk",
    "whyus.inclusions.subtitle": "Setiap kunjungan mencakup fasilitas premium untuk memastikan kenyamanan dan keamanan Anda.",
    "packages.eyebrow": "Paket & Pemesanan",
    "packages.title": "Pilih Pengalaman Anda",
    "packages.subtitle": "Pilih paket terbaik yang sesuai dengan petualangan Anda.",
    "booking.title": "Pesan Petualangan Anda",
    "booking.subtitle": "Reservasi pengalaman hutan Anda secara online untuk jaminan ketersediaan dan konfirmasi instan.",
    "booking.step1.title": "Pilih Tanggal",
    "booking.step1.desc": "Tentukan tanggal kunjungan dan slot waktu pilihan Anda.",
    "booking.step2.title": "Pilih Paket",
    "booking.step2.desc": "Pilih pengalaman yang paling sesuai untuk Anda.",
    "booking.step3.title": "Konfirmasi Instan",
    "booking.step3.desc": "Terima e-tiket Anda segera melalui email.",
    "gallery.eyebrow": "Cerita Visual",
    "gallery.title": "Perjalanan Visual",
    "gallery.subtitle": "Sekilas tentang apa yang menanti Anda.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.subtitle": "Semua yang perlu Anda ketahui sebelum melayang.",
    "faq.q1": "Apakah saya perlu memesan sebelum datang?",
    "faq.a1": "Pemesanan di muka sangat disarankan, terutama untuk slot tengah hari dan golden-hour. Anda tetap bisa walk-in, tetapi ketersediaan slot dan waktu tunggu bisa berbeda.",
    "faq.q2": "Apakah ayunan ini cocok untuk pemula?",
    "faq.a2": "Ya. Tim kami memandu setiap tamu melalui pemasangan harness, instruksi keselamatan, dan dukungan naik sehingga pengendara pertama kali merasa siap sebelum meluncur.",
    "faq.q3": "Bisakah saya memilih spot foto tanpa mencoba ayunan ekstrem?",
    "faq.a3": "Tentu saja. Beberapa paket dapat disesuaikan untuk kunjungan fokus foto, termasuk akses Bird Nest dan spot ikonik lainnya tergantung ketersediaan.",
    "faq.q4": "Apa yang harus saya kenakan untuk pengalaman ini?",
    "faq.a4": "Kenakan pakaian yang nyaman dan sepatu dengan pijakan yang stabil. Pakaian yang melambai terlihat indah di foto, tetapi alas kaki yang aman membantu selama akses platform.",
    "footer.description": "Rasakan sensasi hutan rimba.",
    "footer.rights": "Hak cipta dilindungi.",
    "whatsapp.message": "Halo Pertiwi Jungle Swing, saya ingin memesan jadwal konsultasi."
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
