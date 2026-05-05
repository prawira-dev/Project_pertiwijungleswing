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
    "nav.experiences": "Experiences",
    "nav.about": "About Us",
    "nav.faq": "FAQ",
    "nav.adventures": "Adventures",
    "nav.inclusions": "Inclusions",
    "nav.testimonials": "Reviews",
    "nav.book": "Book Now",
    "hero.title": "A More Beautiful Swing Experience in Bali",
    "hero.subtitle": "Enjoy scenic swings, iconic photo spots, and authentic nature with breathtaking Ayung River valley views at Pertiwi Jungle Swing.",
    "hero.spots": "Discover Pertiwi Jungle Swing",
    "hero.cta": "BOOK NOW",
    "hero.disclaimer": "* You will be redirected to the official Pertiwi Adventure Bali booking website.",
    "attraction.eyebrow": "Our Attractions",
    "attraction.title": "Photo Spots & Swings",
    "attraction.subtitle": "Discover beautiful photo spots and swing experiences at Pertiwi Jungle Swing, surrounded by authentic nature and stunning views of the Ayung River valley.",
    "attraction.seeAll": "See All Attractions",
    "attraction.showLess": "Show Less",
    "whyus.eyebrow": "Why Us",
    "whyus.title": "More Than Just a Swing Destination",
    "whyus.subtitle": "Pertiwi Jungle Swing brings together scenic swings, beautiful photo spots, and authentic nature in one unforgettable setting above the Ayung River valley.",
    "whyus.point.views.title": "Better Views",
    "whyus.point.views.description": "Breathtaking views of the Ayung River valley from a scenic jungle cliff.",
    "whyus.point.nature.title": "Authentic Nature",
    "whyus.point.nature.description": "A peaceful setting surrounded by lush greenery and natural beauty.",
    "whyus.point.photo.title": "Beautiful Photo Moments",
    "whyus.point.photo.description": "Scenic swings and photo spots designed for memorable moments and beautiful content.",
    "whyus.point.more-to-experience.title": "More to Experience",
    "whyus.point.more-to-experience.description": "More than swings, with special experiences to enjoy during your visit.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find quick answers to the most common questions before your visit to Pertiwi Jungle Swing.",
    "faq.q1": "What is included in the ticket?",
    "faq.a1": "The ticket includes access to Pertiwi Jungle Swing, beautiful photo spots, welcome drink, lunch, and insurance.",
    "faq.q2": "Is Koi Pond Boat included in the ticket?",
    "faq.a2": "Koi Pond Boat is available as a featured experience during your visit.",
    "faq.q3": "Can we take photos and videos here?",
    "faq.a3": "Yes, Pertiwi Jungle Swing is designed for beautiful photo and video moments, with scenic swings, photo spots, and stunning natural views.",
    "faq.q4": "Is it suitable for couples, friends, and families?",
    "faq.a4": "Yes, Pertiwi Jungle Swing is perfect for couples, friends, and families who want to enjoy beautiful moments in a scenic and peaceful setting.",
    "faq.q5": "Is dress rental available?",
    "faq.a5": "Yes, dress rental for photo is available to make your experience even more special and elegant.",
    "faq.q6": "Where is Pertiwi Jungle Swing located?",
    "faq.a6": "Pertiwi Jungle Swing is located at Pertiwi Adventure Bali in Bongkasa Village, in a beautiful natural setting above the Ayung River valley.",
    "faq.q7": "How can I book my visit?",
    "faq.a7": "You can book your visit directly through our website or contact our team for more information.",
    "footer.description": "Beautiful swings, scenic photo spots, and authentic nature above the Ayung River valley, all within Pertiwi Adventure Bali.",
    "footer.address": "Jl. Dewi Saraswati No. 2 Bongkasa Pertiwi, Badung, Bali - Indonesia",
    "footer.opening": "Open Everyday, 09AM - 05PM (UTC +8)",
    "footer.highlights.title": "Highlights",
    "footer.products.title": "Pertiwi Adventure Products",
    "footer.rights": "All rights reserved.",
    "whatsapp.message": "Hi Pertiwi Jungle Swing, I would like to book a schedule consultation.",
    "featured.eyebrow": "Featured Experiences",
    "featured.title": "Featured Experiences",
    "featured.subtitle": "Discover featured experiences at Pertiwi Jungle Swing created for unforgettable moments, beautiful content, and authentic nature.",
    "inclusion.eyebrow": "WHAT'S INCLUDED",
    "inclusion.title": "What's Included",
    "inclusion.subtitle": "Enjoy more than just beautiful views with inclusions designed to make your Pertiwi Jungle Swing experience even more complete.",
    "inclusion.price.ticket": "Pertiwi Jungle Swing Ticket",
    "inclusion.price.original": "IDR 650,000",
    "inclusion.price.promo": "IDR 475,000",
    "inclusion.price.note": "*only for online direct booking from our website",
    "inclusion.addon.title": "Optional Add-On",
    "inclusion.addon.heading": "Elevate Your Visual Memories",
    "inclusion.addon.description": "Dress Rental for Photo is available for beautiful and more elegant photo moments.",
    "inclusion.point.jungle-swing.title": "Access to Jungle Swing",
    "inclusion.point.jungle-swing.description": "Experience the thrill of our signature swings.",
    "inclusion.point.photo-spots.title": "Access to Photo Spots",
    "inclusion.point.photo-spots.description": "Full access to all iconic photo spots around the valley.",
    "inclusion.point.welcome-drink.title": "Welcome Drink",
    "inclusion.point.welcome-drink.description": "Refreshing arrival beverage to start your journey.",
    "inclusion.point.lunch.title": "Lunch",
    "inclusion.point.lunch.description": "Delicious lunch served with a view of the jungle.",
    "inclusion.point.insurance.title": "Insurance Coverage",
    "inclusion.point.insurance.description": "Basic activity protection is included with every booking.",
    "inclusion.point.dress-rental.title": "Dress Rental (Add-on)",
    "inclusion.point.dress-rental.description": "Available for beautiful and more elegant photo moments.",
    "testimonials.eyebrow": "Reviews",
    "testimonials.title": "Loved by Our Guests",
    "testimonials.subtitle": "Beautiful moments, scenic views, and memorable experiences that make every visit feel special.",
    "testimonial.t-1.text": "We really loved the Jungle Swing and Bloom Swing. The views were stunning, and the whole place felt peaceful and beautiful. It was one of our favorite experiences in Bali.",
    "testimonial.t-2.text": "Harmony Swing was such a lovely experience for us. We also enjoyed Stairs to Heaven and Angel Wings for photos. Everything looked beautiful and the jungle atmosphere felt very special.",
    "testimonial.t-3.text": "This place is so scenic and photogenic. My favorite spots were Bird Nest and Love Seat, and the view above the valley made the experience even more memorable.",
    "testimonial.t-4.text": "Pertiwi Jungle Swing was absolutely worth visiting. I loved the Jungle Swing and Bed Swing, and there were so many beautiful photo spots to enjoy. The whole setting felt premium and natural.",
    "testimonial.t-5.text": "Such a beautiful place with amazing scenery. Woven Nest and Stairs to Heaven were my favorite spots, and the experience felt calm, relaxing, and perfect for photos.",
    "testimonial.t-6.text": "Koi Pond Boat was such a lovely extra experience, and I also really enjoyed Bloom Swing and Angel Wings. It was beautiful, elegant, and perfect for unforgettable Bali moments.",
    "about.eyebrow": "About Us",
    "about.title": "About Pertiwi Jungle Swing",
    "about.subtitle": "Set above the Ayung River valley, Pertiwi Jungle Swing is a beautiful destination where scenic swings, photo spots, and authentic nature come together in one unforgettable experience.",
    "about.story": "Pertiwi Jungle Swing offers more than just a Bali swing experience. Surrounded by lush greenery and beautiful views from a scenic jungle cliff, this destination is designed for guests who want to enjoy memorable moments in a more peaceful and authentic setting. From scenic swings and beautiful photo spots to featured experiences like Koi Pond Boat, every part of the visit is created to feel special, photogenic, and enjoyable. Whether you are visiting as a couple, with friends, or with family, Pertiwi Jungle Swing is a beautiful place to create unforgettable memories in Bali.",
    "about.quote": "Experience the authentic spirit of Bali's jungle.",
    "about.feature.1": "International safety standards",
    "about.feature.2": "Professional photographers on-site",
    "about.feature.3": "Sustainable and eco-friendly practices",
    "about.feature.4": "Panoramic valley views",
    "cta.title": "Ready for Your Jungle Adventure?",
    "cta.subtitle": "Book your spot today and create memories that will last a lifetime.",
    "cta.button": "Book Your Visit Now",
    "adventure.title": "More Adventures in One Place",
    "adventure.subtitle": "Enjoy more than just beautiful photo moments by combining Pertiwi Jungle Swing with other exciting activities at Pertiwi Adventure Bali, all in one place.",
    "adventure.button": "Discover More Adventures",
    "adventure.item.vw": "Majestic VW Tours",
    "adventure.item.utv": "UTV Jungle Buggy",
    "adventure.item.atv": "ATV Quad Bike",
    "adventure.item.rafting": "White Water Rafting",
    "adventure.item.paintball": "Paintball Game",
    "adventure.item.more": "And many more..."
  },
  id: {
    "nav.home": "Beranda",
    "nav.whyus": "Mengapa Kami",
    "nav.attractions": "Atraksi",
    "nav.experiences": "Pengalaman",
    "nav.about": "Tentang Kami",
    "nav.faq": "FAQ",
    "nav.adventures": "Petualangan",
    "nav.inclusions": "Inklusi",
    "nav.testimonials": "Ulasan",
    "nav.book": "Pesan Sekarang",
    "hero.title": "Pengalaman Ayunan yang Lebih Indah di Bali",
    "hero.subtitle": "Nikmati ayunan yang indah, tempat foto ikonik, dan alam otentik dengan pemandangan lembah Sungai Ayung yang menakjubkan di Pertiwi Jungle Swing.",
    "hero.spots": "Temukan Keindahan Alam di Sekitar Pertiwi Jungle Swing",
    "hero.cta": "PESAN SEKARANG",
    "hero.disclaimer": "*Anda akan diarahkan ke situs web pemesanan resmi Pertiwi Adventure Bali.",
    "attraction.eyebrow": "Atraksi Kami",
    "attraction.title": "Spot Foto & Ayunan",
    "attraction.subtitle": "Temukan spot foto yang indah dan pengalaman ayunan di Pertiwi Jungle Swing, dikelilingi oleh alam yang otentik dan pemandangan lembah Sungai Ayung yang menakjubkan.",
    "attraction.seeAll": "Lihat Semua Atraksi",
    "attraction.showLess": "Tampilkan Sedikit",
    "whyus.eyebrow": "Kenapa Kami",
    "whyus.title": "Lebih dari Sekadar Destinasi Ayunan",
    "whyus.subtitle": "Pertiwi Jungle Swing menggabungkan ayunan yang indah, tempat foto yang cantik, dan alam yang autentik dalam satu lokasi yang tak terlupakan di atas lembah Sungai Ayung.",
    "whyus.point.views.title": "Pemandangan Lembah Terbaik",
    "whyus.point.views.description": "Pemandangan hutan terbuka yang membuat setiap ayunan terasa sinematik dari awal hingga akhir.",
    "whyus.point.nature.title": "Alam yang Otentik",
    "whyus.point.nature.description": "Suasana damai yang dikelilingi oleh rimbunnya tanaman hijau dan keindahan alam.",
    "whyus.point.photo.title": "Momen Foto yang Indah",
    "whyus.point.photo.description": "Ayunan indah dan tempat berfoto yang dirancang untuk momen tak terlupakan dan konten yang indah.",
    "whyus.point.more-to-experience.title": "Lebih Banyak Pengalaman",
    "whyus.point.more-to-experience.description": "Lebih dari sekadar ayunan, dengan pengalaman istimewa yang dapat dinikmati selama kunjungan.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.subtitle": "Temukan jawaban cepat untuk pertanyaan paling umum sebelum kunjungan Anda ke Pertiwi Jungle Swing.",
    "faq.q1": "Apa saja yang termasuk dalam tiket?",
    "faq.a1": "Tiket sudah termasuk akses ke Pertiwi Jungle Swing, spot foto yang indah, minuman selamat datang, makan siang, dan asuransi.",
    "faq.q2": "Apakah Koi Pond Boat termasuk dalam tiket?",
    "faq.a2": "Koi Pond Boat tersedia sebagai pengalaman unggulan selama kunjungan Anda.",
    "faq.q3": "Bisakah kami mengambil foto dan video di sini?",
    "faq.a3": "Ya, Pertiwi Jungle Swing dirancang untuk momen foto dan video yang indah, dengan ayunan yang menawan, spot foto, dan pemandangan alam yang menakjubkan.",
    "faq.q4": "Apakah cocok untuk pasangan, teman, dan keluarga?",
    "faq.a4": "Ya, Pertiwi Jungle Swing sangat cocok untuk pasangan, teman, dan keluarga yang ingin menikmati momen indah dalam suasana yang menawan dan tenang.",
    "faq.q5": "Apakah tersedia penyewaan gaun?",
    "faq.a5": "Ya, penyewaan gaun untuk foto tersedia untuk membuat pengalaman Anda semakin istimewa dan elegan.",
    "faq.q6": "Di mana lokasi Pertiwi Jungle Swing?",
    "faq.a6": "Pertiwi Jungle Swing berlokasi di Pertiwi Adventure Bali di Desa Bongkasa, dalam lingkungan alam yang indah di atas lembah Sungai Ayung.",
    "faq.q7": "Bagaimana cara memesan kunjungan saya?",
    "faq.a7": "Anda dapat memesan kunjungan Anda secara langsung melalui situs web kami atau hubungi tim kami untuk informasi lebih lanjut.",
    "footer.description": "Ayunan indah, spot foto ikonik, dan alam otentik di atas lembah Sungai Ayung, semuanya berada di kawasan Pertiwi Adventure Bali.",
    "footer.address": "Jl. Dewi Saraswati No. 2 Bongkasa Pertiwi, Badung, Bali - Indonesia",
    "footer.opening": "Buka Setiap Hari, 09AM - 05PM (UTC +8)",
    "footer.highlights.title": "Sorotan",
    "footer.products.title": "Produk Pertiwi Adventure",
    "footer.rights": "Seluruh hak cipta dilindungi.",
    "whatsapp.message": "Halo Pertiwi Jungle Swing, saya ingin bertanya mengenai pemesanan tiket.",
    "featured.eyebrow": "Pengalaman Unggulan",
    "featured.title": "Pengalaman Unggulan",
    "featured.subtitle": "Temukan pengalaman unggulan di Pertiwi Jungle Swing yang diciptakan untuk momen tak terlupakan, konten yang indah, dan alam yang autentik.",
    "inclusion.eyebrow": "YANG ANDA DAPATKAN",
    "inclusion.title": "Apa yang Termasuk",
    "inclusion.subtitle": "Nikmati lebih dari sekadar pemandangan indah dengan kelengkapan yang dirancang untuk membuat pengalaman Pertiwi Jungle Swing Anda semakin lengkap.",
    "inclusion.price.ticket": "Tiket Pertiwi Jungle Swing",
    "inclusion.price.original": "IDR 650.000",
    "inclusion.price.promo": "IDR 475.000",
    "inclusion.price.note": "*khusus untuk pemesanan online langsung dari situs kami",
    "inclusion.addon.title": "Tambahan Opsional",
    "inclusion.addon.heading": "Tingkatkan Kenangan Visual Anda",
    "inclusion.addon.description": "Penyewaan Gaun untuk Foto tersedia untuk momen foto yang indah dan lebih elegan.",
    "inclusion.point.jungle-swing.title": "Akses ke Jungle Swing",
    "inclusion.point.jungle-swing.description": "Rasakan sensasi ayunan ikonik kami.",
    "inclusion.point.photo-spots.title": "Akses ke Spot Foto",
    "inclusion.point.photo-spots.description": "Akses penuh ke semua spot foto ikonik di sekitar lembah.",
    "inclusion.point.welcome-drink.title": "Minuman Selamat Datang",
    "inclusion.point.welcome-drink.description": "Minuman penyegar saat kedatangan untuk memulai perjalanan Anda.",
    "inclusion.point.lunch.title": "Makan Siang",
    "inclusion.point.lunch.description": "Makan siang lezat yang disajikan dengan pemandangan hutan.",
    "inclusion.point.insurance.title": "Cakupan Asuransi",
    "inclusion.point.insurance.description": "Perlindungan aktivitas dasar sudah termasuk dalam setiap pemesanan.",
    "inclusion.point.dress-rental.title": "Penyewaan Gaun (Tambahan)",
    "inclusion.point.dress-rental.description": "Tersedia untuk momen foto yang indah dan lebih elegan.",
    "testimonials.eyebrow": "Ulasan",
    "testimonials.title": "Disukai oleh Tamu Kami",
    "testimonials.subtitle": "Momen indah, pemandangan indah, dan pengalaman tak terlupakan yang membuat setiap kunjungan terasa istimewa.",
    "testimonial.t-1.text": "Kami sangat menyukai Jungle Swing dan Bloom Swing. Pemandangannya menakjubkan, dan seluruh tempat terasa damai dan indah. Ini adalah salah satu pengalaman favorit kami di Bali.",
    "testimonial.t-2.text": "Harmony Swing adalah pengalaman yang sangat menyenangkan bagi kami. Kami juga menikmati Stairs to Heaven dan Angel Wings untuk berfoto. Semuanya terlihat indah dan suasana hutan terasa sangat istimewa.",
    "testimonial.t-3.text": "Tempat ini sangat indah dan fotogenik. Spot favorit saya adalah Bird Nest dan Love Seat, dan pemandangan di atas lembah membuat pengalaman ini semakin berkesan.",
    "testimonial.t-4.text": "Pertiwi Jungle Swing benar-benar layak dikunjungi. Saya menyukai Jungle Swing dan Bed Swing, dan ada begitu banyak spot foto indah untuk dinikmati. Seluruh suasananya terasa premium dan alami.",
    "testimonial.t-5.text": "Tempat yang sangat indah dengan pemandangan yang luar biasa. Woven Nest dan Stairs to Heaven adalah spot favorit saya, dan pengalamannya terasa tenang, santai, dan sempurna untuk berfoto.",
    "testimonial.t-6.text": "Koi Pond Boat adalah pengalaman tambahan yang sangat menyenangkan, dan saya juga sangat menikmati Bloom Swing dan Angel Wings. Itu indah, elegan, dan sempurna untuk momen Bali yang tak terlupakan.",
    "about.eyebrow": "Tentang Kami",
    "about.title": "Tentang Pertiwi Jungle Swing",
    "about.subtitle": "Terletak di atas lembah Sungai Ayung, Pertiwi Jungle Swing adalah destinasi indah di mana ayunan yang menawan, spot foto, dan alam otentik menyatu dalam satu pengalaman yang tak terlupakan.",
    "about.story": "Pertiwi Jungle Swing menawarkan lebih dari sekadar pengalaman ayunan Bali. Dikelilingi oleh rimbunnya tanaman hijau dan pemandangan indah dari tebing hutan yang menawan, destinasi ini dirancang untuk tamu yang ingin menikmati momen berkesan dalam suasana yang lebih tenang dan otentik. Dari ayunan yang menawan dan spot foto yang indah hingga pengalaman unggulan seperti Koi Pond Boat, setiap bagian dari kunjungan diciptakan agar terasa istimewa, fotogenik, dan menyenangkan. Baik Anda berkunjung sebagai pasangan, bersama teman, atau keluarga, Pertiwi Jungle Swing adalah tempat yang indah untuk menciptakan kenangan tak terlupakan di Bali.",
    "about.quote": "Rasakan semangat otentik dari hutan Bali.",
    "about.feature.1": "Standar keamanan internasional",
    "about.feature.2": "Fotografer profesional di lokasi",
    "about.feature.3": "Praktik berkelanjutan dan ramah lingkungan",
    "about.feature.4": "Pemandangan lembah panorama",
    "cta.title": "Siap untuk Petualangan Hutan Anda?",
    "cta.subtitle": "Pesan tempat Anda hari ini dan ciptakan kenangan yang akan bertahan seumur hidup.",
    "cta.button": "Pesan Kunjungan Anda Sekarang",
    "adventure.title": "Lebih Banyak Petualangan di Satu Tempat",
    "adventure.subtitle": "Nikmati lebih dari sekadar momen foto yang indah dengan menggabungkan Pertiwi Jungle Swing dengan aktivitas menarik lainnya di Pertiwi Adventure Bali, semuanya di satu tempat.",
    "adventure.button": "Temukan Petualangan Lainnya",
    "adventure.item.vw": "Majestic VW Tours",
    "adventure.item.utv": "UTV Jungle Buggy",
    "adventure.item.atv": "ATV Quad Bike",
    "adventure.item.rafting": "Arung Jeram",
    "adventure.item.paintball": "Permainan Paintball",
    "adventure.item.more": "Dan masih banyak lagi..."
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
