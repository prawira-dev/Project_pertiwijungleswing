import type {
  Attraction,
  FaqItem,
  GalleryItem,
  NavItem,
  PackageOption,
  ValuePoint
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Attractions", href: "#attractions" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" }
];

export const attractionItems: Attraction[] = [
  {
    id: "extreme-swing",
    title: "The Extreme Swing",
    subtitle: "Ayunan tunggal dengan valley drop yang paling dramatis.",
    shortDescription: "A signature rush with a panoramic jungle backdrop.",
    description:
      "Built for thrill-seekers, The Extreme Swing lifts guests above the valley for a cinematic arc over Ubud's lush canopy. The experience is ideal for travelers who want a defining hero moment and memorable photos in one ride.",
    safetyNotes: [
      "Minimum height recommendation: 120 cm.",
      "Harness fitting and operator briefing are mandatory before takeoff.",
      "Not recommended for guests with severe vertigo or specific medical restrictions."
    ],
    reservationLabel: "Add Extreme Swing",
    gradient:
      "linear-gradient(135deg, rgba(8,58,47,0.95), rgba(29,110,89,0.75), rgba(238,202,104,0.45))",
    gallery: [
      {
        id: "extreme-1",
        title: "Launch platform",
        gradient:
          "linear-gradient(135deg, rgba(16,88,73,0.95), rgba(66,138,111,0.78))"
      },
      {
        id: "extreme-2",
        title: "Valley arc",
        gradient:
          "linear-gradient(135deg, rgba(17,43,33,0.95), rgba(44,101,73,0.78))"
      },
      {
        id: "extreme-3",
        title: "Hero capture",
        gradient:
          "linear-gradient(135deg, rgba(96,72,21,0.92), rgba(226,186,78,0.55))"
      }
    ]
  },
  {
    id: "couple-swing",
    title: "Couple Swing",
    subtitle: "Pilihan romantis untuk dua tamu dalam satu momen.",
    shortDescription: "Designed for shared adrenaline and sweeping photo angles.",
    description:
      "The Couple Swing blends scenic spectacle with a more intimate experience, making it perfect for honeymooners, couples, and travel companions who want synchronized motion above the jungle.",
    safetyNotes: [
      "Best suited for two guests booking the same time slot.",
      "Combined rider load must stay within operator safety thresholds.",
      "Closed-toe footwear is strongly encouraged for boarding comfort."
    ],
    reservationLabel: "Add Couple Swing",
    gradient:
      "linear-gradient(135deg, rgba(43,54,35,0.95), rgba(97,123,77,0.82), rgba(207,162,91,0.4))",
    gallery: [
      {
        id: "couple-1",
        title: "Twin setup",
        gradient:
          "linear-gradient(135deg, rgba(56,68,41,0.95), rgba(112,131,88,0.75))"
      },
      {
        id: "couple-2",
        title: "Golden hour ride",
        gradient:
          "linear-gradient(135deg, rgba(120,88,34,0.95), rgba(224,175,88,0.52))"
      },
      {
        id: "couple-3",
        title: "Photo frame",
        gradient:
          "linear-gradient(135deg, rgba(17,43,33,0.95), rgba(65,97,63,0.75))"
      }
    ]
  },
  {
    id: "bird-nest",
    title: "Bird Nest Spot",
    subtitle: "Photo spot favorit untuk editorial tropical look.",
    shortDescription: "Soft, elevated framing for standout travel portraits.",
    description:
      "The Bird Nest Spot offers a calmer attraction with crafted natural textures, layered greenery, and a polished angle for solo portraits, couple moments, or content-focused shoots.",
    safetyNotes: [
      "Designed for seated photo moments rather than high-adrenaline movement.",
      "Queue rotation may apply during peak afternoon traffic.",
      "Staff can assist with personal phone capture positioning."
    ],
    reservationLabel: "Add Bird Nest",
    gradient:
      "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      {
        id: "nest-1",
        title: "Editorial frame",
        gradient:
          "linear-gradient(135deg, rgba(136,97,33,0.96), rgba(208,155,62,0.58))"
      },
      {
        id: "nest-2",
        title: "Natural textures",
        gradient:
          "linear-gradient(135deg, rgba(43,64,32,0.95), rgba(94,125,68,0.7))"
      },
      {
        id: "nest-3",
        title: "Portrait angle",
        gradient:
          "linear-gradient(135deg, rgba(90,66,21,0.95), rgba(160,128,64,0.6))"
      }
    ]
  },
  {
    id: "gorilla-face",
    title: "Gorilla Face",
    subtitle: "Instalasi ikonik untuk foto dramatis dan playful.",
    shortDescription: "A bold backdrop that gives your gallery an instant signature shot.",
    description:
      "One of the most recognizable photo points on site, Gorilla Face creates contrast against the greenery and helps guests capture a visually distinct, story-worthy stop beyond the swing itself.",
    safetyNotes: [
      "Spot access is staff-managed during heavy crowd periods.",
      "Please follow queue markings for safe movement around the platform.",
      "Flash-friendly angles are available during shaded sessions."
    ],
    reservationLabel: "Add Gorilla Face",
    gradient:
      "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      {
        id: "gorilla-1",
        title: "Iconic profile",
        gradient:
          "linear-gradient(135deg, rgba(24,24,24,0.98), rgba(74,92,65,0.72))"
      },
      {
        id: "gorilla-2",
        title: "Jungle contrast",
        gradient:
          "linear-gradient(135deg, rgba(30,52,40,0.95), rgba(83,111,84,0.76))"
      },
      {
        id: "gorilla-3",
        title: "Signature post",
        gradient:
          "linear-gradient(135deg, rgba(126,102,41,0.94), rgba(223,190,91,0.55))"
      }
    ]
  }
];

export const valuePoints: ValuePoint[] = [
  {
    id: "safety",
    title: "Safety First",
    description: "International-standard harness checks and trained operators at every ride point.",
    icon: "shield"
  },
  {
    id: "photographer",
    title: "Professional Photographer",
    description: "Konten liburan Anda terbantu dengan recommended angles dan timing terbaik.",
    icon: "camera"
  },
  {
    id: "view",
    title: "Best Valley View",
    description: "Open jungle sightlines that make every swing feel cinematic from takeoff to landing.",
    icon: "mountain"
  }
];

export const inclusionPoints: ValuePoint[] = [
  {
    id: "welcome-drink",
    title: "Welcome Drink",
    description: "Refreshing arrival beverage before your session starts.",
    icon: "cup"
  },
  {
    id: "insurance",
    title: "Insurance Coverage",
    description: "Basic activity protection is included with every qualifying booking.",
    icon: "sparkles"
  },
  {
    id: "locker",
    title: "Secure Locker",
    description: "Titip barang tetap praktis dan aman selama Anda menikmati wahana.",
    icon: "lock"
  }
];

export const packageOptions: PackageOption[] = [
  {
    id: "jungle-swings",
    name: "Jungle Swings",
    audience: "All Visitors",
    price: "Custom",
    duration: "Flexible",
    badge: "Popular",
    features: [
      "Enjoy a variety of swing experiences designed for both relaxation and adrenaline."
    ]
  },
  {
    id: "instagrammable-spots",
    name: "Instagrammable Spots",
    audience: "All Visitors",
    price: "Custom",
    duration: "Flexible",
    features: [
      "Capture stunning photos with scenic backdrops around the jungle area."
    ]
  },
  {
    id: "scenic-view-point",
    name: "Scenic View Point",
    audience: "All Visitors",
    price: "Custom",
    duration: "Flexible",
    features: [
      "Enjoy breathtaking views of the Ayung River valley from our main platform."
    ]
  },
  {
    id: "relax-area",
    name: "Relax Area",
    audience: "All Visitors",
    price: "Custom",
    duration: "Flexible",
    features: [
      "Take a moment to unwind and enjoy the peaceful jungle atmosphere."
    ]
  }
];

export const timeSlots = [
  "08:00",
  "09:30",
  "11:00",
  "13:00",
  "15:00",
  "16:30"
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    caption: "Morning glide above the canopy",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(19,53,42,0.96), rgba(42,109,88,0.76), rgba(229,188,90,0.38))"
  },
  {
    id: "gallery-2",
    caption: "Bird Nest editorial mood",
    location: "Photo Spot",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(122,85,27,0.96), rgba(210,162,74,0.58), rgba(48,73,39,0.72))"
  },
  {
    id: "gallery-3",
    caption: "Couple swing at golden hour",
    location: "Main Valley Deck",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(31,40,28,0.96), rgba(99,117,78,0.75), rgba(228,194,102,0.32))"
  },
  {
    id: "gallery-4",
    caption: "Signature Gorilla Face frame",
    location: "Icon Spot",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(23,23,23,0.98), rgba(71,88,62,0.8), rgba(215,176,81,0.24))"
  },
  {
    id: "gallery-5",
    caption: "Harnessed and ready to launch",
    location: "Safety Zone",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(17,43,33,0.96), rgba(64,125,102,0.75), rgba(241,205,112,0.34))"
  },
  {
    id: "gallery-6",
    caption: "Jungle textures from every angle",
    location: "Upper Walkway",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient:
      "linear-gradient(135deg, rgba(56,76,43,0.96), rgba(104,144,88,0.73), rgba(206,157,70,0.3))"
  }
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need to book before arriving?",
    answer:
      "Advance booking is highly recommended, especially for midday and golden-hour slots. Anda tetap bisa walk-in, tetapi ketersediaan wahana dan waktu tunggu bisa berbeda."
  },
  {
    id: "faq-2",
    question: "Is the swing suitable for first-timers?",
    answer:
      "Yes. Our team guides every guest through harness fitting, safety instructions, and boarding support so first-time riders can feel prepared before launch."
  },
  {
    id: "faq-3",
    question: "Can I choose photo spots without taking the extreme swing?",
    answer:
      "Absolutely. Several packages can be adjusted for photo-focused visits, including Bird Nest and Gorilla Face access depending on availability."
  },
  {
    id: "faq-4",
    question: "What should I wear for the experience?",
    answer:
      "Wear comfortable clothing and shoes with stable footing. Flowing outfits photograph beautifully, but secure footwear helps during platform access."
  }
];

export const contactInfo = {
  description:
    "Pertiwi Jungle Swing menghadirkan pengalaman ayunan, photo spot, dan panorama lembah Ubud dalam satu destinasi yang siap mengubah rasa penasaran menjadi booking.",
  phone: "+62 811-3877-221",
  email: "hello@pertiwijungleswing.com",
  whatsapp: "628113877221",
  mapsUrl: "https://maps.google.com/?q=Pertiwi+Jungle+Swing+Ubud",
  instagramUrl: "https://instagram.com/pertiwijungleswing"
};
