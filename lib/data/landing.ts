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
  { label: "WhyUs", href: "#whyus" },
  { label: "Attractions", href: "#attractions" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" }
];

export const attractionItems: Attraction[] = [
  {
    id: "jungle-swing",
    title: "Jungle Swing",
    subtitle: "Feel the thrill of swinging above the jungle with beautiful views of the Ayung River valley and authentic nature at Pertiwi Jungle Swing.",
    shortDescription: "Experience the iconic Jungle Swing at Pertiwi Jungle Swing, where you can glide above lush tropical greenery with breathtaking views of the Ayung River valley.",
    description: "Experience the iconic Jungle Swing at Pertiwi Jungle Swing, where you can glide above lush tropical greenery with breathtaking views of the Ayung River valley. This is one of the must-try Bali swing experiences for guests who want a mix of adventure, scenery, and unforgettable photo moments. Perfect for solo travelers, couples, and anyone looking for a classic jungle swing in Bali.",
    safetyNotes: [
      "Scenic swing above lush jungle views",
      "Overlooking the Ayung River valley",
      "Perfect for stunning Bali photos",
      "A must-try signature swing experience"
    ],
    reservationLabel: "Add Jungle Swing",
    gradient: "linear-gradient(135deg, rgba(8,58,47,0.95), rgba(29,110,89,0.75), rgba(238,202,104,0.45))",
    gallery: [
      { id: "jungle-1", title: "Valley Launch", gradient: "linear-gradient(135deg, rgba(16,88,73,0.95), rgba(66,138,111,0.78))" }
    ]
  },
  {
    id: "bloom-ring-swing",
    title: "Bloom Ring Swing",
    subtitle: "A beautiful floral swing surrounded by nature, perfect for elegant photos and a romantic Bali swing experience.",
    shortDescription: "Bloom Ring Swing offers a graceful and photogenic experience with a floral ring design that stands out beautifully against the green jungle backdrop.",
    description: "Bloom Ring Swing offers a graceful and photogenic experience with a floral ring design that stands out beautifully against the green jungle backdrop. This spot is ideal for guests who love aesthetic photo moments and want a softer, more romantic Bali swing experience. With flowers, nature, and scenic surroundings, it creates a dreamy atmosphere for memorable photos.",
    safetyNotes: [
      "Elegant floral swing design",
      "Beautiful spot for romantic photos",
      "Surrounded by lush tropical nature",
      "Ideal for stylish and Instagram-worthy moments"
    ],
    reservationLabel: "Add Bloom Ring",
    gradient: "linear-gradient(135deg, rgba(43,54,35,0.95), rgba(97,123,77,0.82), rgba(207,162,91,0.4))",
    gallery: [
      { id: "bloom-1", title: "Floral Ring", gradient: "linear-gradient(135deg, rgba(56,68,41,0.95), rgba(112,131,88,0.75))" }
    ]
  },
  {
    id: "harmony-swing",
    title: "Harmony Swing",
    subtitle: "Share the moment together on a double swing with beautiful jungle views, perfect for couples, best friends, or family photo memories.",
    shortDescription: "Harmony Swing is designed for two, making it a perfect choice for couples, friends, sisters, or family members who want to enjoy the experience together.",
    description: "Harmony Swing is designed for two, making it a perfect choice for couples, friends, sisters, or family members who want to enjoy the experience together. Set against the stunning natural landscape of Pertiwi Jungle Swing, this double swing combines scenic beauty with meaningful shared moments. It is one of the best photo spots for capturing connection, joy, and unforgettable Bali memories.",
    safetyNotes: [
      "Double swing for two people",
      "Great for couples, friends, or family",
      "Beautiful jungle and valley backdrop",
      "Perfect for shared photo moments"
    ],
    reservationLabel: "Add Harmony Swing",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "harmony-1", title: "Double Joy", gradient: "linear-gradient(135deg, rgba(24,24,24,0.98), rgba(74,92,65,0.72))" }
    ]
  },
  {
    id: "bird-nest",
    title: "Bird Nest",
    subtitle: "Pose inside a unique nest-shaped photo spot surrounded by tropical greenery for a magical Bali jungle photography experience.",
    shortDescription: "Bird Nest is one of the most eye-catching photo spots at Pertiwi Jungle Swing. Designed in a beautiful nest shape.",
    description: "Bird Nest is one of the most eye-catching photo spots at Pertiwi Jungle Swing. Designed in a beautiful nest shape, this spot blends naturally with the surrounding tropical landscape and offers a charming setting for elegant photos. It is perfect for guests who want a creative Bali photo experience with a nature-inspired backdrop that feels unique and memorable.",
    safetyNotes: [
      "Unique nest-inspired photo spot",
      "Surrounded by lush jungle scenery",
      "Great for elegant and creative photos",
      "One of the most iconic photo spots"
    ],
    reservationLabel: "Add Bird Nest",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "nest-1", title: "Cozy Nest", gradient: "linear-gradient(135deg, rgba(136,97,33,0.96), rgba(208,155,62,0.58))" }
    ]
  },
  {
    id: "bed-swing",
    title: "Bed Swing",
    subtitle: "Relax and pose on a stylish bed swing with panoramic jungle views, combining comfort, romance, and scenic Bali photography.",
    shortDescription: "Bed Swing offers a different kind of Bali swing experience by combining comfort and beauty in one unique spot.",
    description: "Bed Swing offers a different kind of Bali swing experience by combining comfort and beauty in one unique spot. Suspended with scenic jungle views behind it, this spot is perfect for romantic poses, stylish content, and memorable travel photos. Whether you are visiting as a couple or with friends, Bed Swing creates a soft and elegant atmosphere with a premium feel.",
    safetyNotes: [
      "Unique swing bed concept",
      "Perfect for romantic and elegant photos",
      "Scenic jungle and valley views",
      "Comfortable and visually striking spot"
    ],
    reservationLabel: "Add Bed Swing",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "bed-1", title: "Soft Romance", gradient: "linear-gradient(135deg, rgba(136,97,33,0.96), rgba(208,155,62,0.58))" }
    ]
  },
  {
    id: "stairs-to-heaven",
    title: "Stairs to Heaven",
    subtitle: "Step into one of Bali’s most iconic photo concepts with elevated views, open sky, and a dramatic backdrop above the jungle.",
    shortDescription: "Stairs to Heaven is a striking photo spot designed to create dramatic and unforgettable Bali moments.",
    description: "Stairs to Heaven is a striking photo spot designed to create dramatic and unforgettable Bali moments. With open sky above and lush jungle scenery around, this elevated structure gives guests the feeling of stepping into the clouds. It is ideal for guests looking for bold, eye-catching travel photos with a scenic and uplifting atmosphere in Bali.",
    safetyNotes: [
      "Iconic elevated photo spot",
      "Open sky and scenic jungle backdrop",
      "Perfect for dramatic Bali photos",
      "A standout experience for social media content"
    ],
    reservationLabel: "Add Stairs",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "stairs-1", title: "Heaven Step", gradient: "linear-gradient(135deg, rgba(136,97,33,0.96), rgba(208,155,62,0.58))" }
    ]
  },
  {
    id: "woven-nest",
    title: "Woven Nest",
    subtitle: "Enjoy a peaceful nest-style photo spot tucked into nature, perfect for relaxed portraits with an authentic jungle atmosphere.",
    shortDescription: "Woven Nest offers a calm and intimate photo experience surrounded by greenery and natural textures.",
    description: "Woven Nest offers a calm and intimate photo experience surrounded by greenery and natural textures. This nest-style spot feels cozy, peaceful, and beautifully connected to the authentic landscape of Pertiwi Jungle Swing. It is perfect for guests who want softer portraits, nature-inspired compositions, and a more serene Bali photo moment away from the more dramatic swing setups.",
    safetyNotes: [
      "Cozy nest-style photo spot",
      "Peaceful and nature-inspired setting",
      "Great for soft and relaxed portraits",
      "Authentic jungle atmosphere"
    ],
    reservationLabel: "Add Woven Nest",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "woven-1", title: "Peaceful Nest", gradient: "linear-gradient(135deg, rgba(136,97,33,0.96), rgba(208,155,62,0.58))" }
    ]
  },
  {
    id: "love-seat",
    title: "Love Seat",
    subtitle: "A charming heart-inspired seating spot for romantic photos, surrounded by flowers and natural scenery at Pertiwi Jungle Swing.",
    shortDescription: "Love Seat is a romantic photo spot designed for sweet and memorable moments. With its heart-inspired shape.",
    description: "Love Seat is a romantic photo spot designed for sweet and memorable moments. With its heart-inspired shape and floral details, this spot is perfect for couples, honeymooners, or anyone who wants a soft and beautiful Bali photo setting. Surrounded by nature, it brings together romance, elegance, and a warm atmosphere in one lovely frame.",
    safetyNotes: [
      "Romantic heart-inspired design",
      "Beautiful floral details",
      "Perfect for couples and honeymoon photos",
      "Soft and elegant Bali photo spot"
    ],
    reservationLabel: "Add Love Seat",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "love-1", title: "Heart Frame", gradient: "linear-gradient(135deg, rgba(24,24,24,0.98), rgba(74,92,65,0.72))" }
    ]
  },
  {
    id: "angel-wings",
    title: "Angel Wings",
    subtitle: "Stand before stunning wing art with scenic jungle views for one of the most iconic and eye-catching photo spots in Bali.",
    shortDescription: "Angel Wings is a bold and artistic photo spot that creates a powerful visual moment against the natural beauty of the jungle.",
    description: "Angel Wings is a bold and artistic photo spot that creates a powerful visual moment against the natural beauty of the jungle. This spot is perfect for guests who want a striking Bali photo with a confident and stylish feel. With its colorful wing design and scenic backdrop, Angel Wings is one of the most memorable and Instagram-worthy spots at Pertiwi Jungle Swing.",
    safetyNotes: [
      "Iconic wing-inspired photo spot",
      "Stunning for bold and stylish portraits",
      "Scenic jungle backdrop",
      "One of the most Instagram-worthy locations"
    ],
    reservationLabel: "Add Angel Wings",
    gradient: "linear-gradient(135deg, rgba(43,54,35,0.95), rgba(97,123,77,0.82), rgba(207,162,91,0.4))",
    gallery: [
      { id: "wings-1", title: "Wings of Art", gradient: "linear-gradient(135deg, rgba(56,68,41,0.95), rgba(112,131,88,0.75))" }
    ]
  },
  {
    id: "adventure-swing",
    title: "Adventure Swing",
    badge: "More Thrilling",
    subtitle: "A more thrilling swing experience with a stronger push, perfect for guests who want more excitement with scenic jungle views.",
    shortDescription: "Adventure Swing is designed for guests who want a more exciting version of the classic swing experience.",
    description: "Adventure Swing is designed for guests who want a more exciting version of the classic swing experience. With a stronger push from the instructor, this swing delivers more speed, more thrill, and a more dynamic feeling while still surrounded by the beautiful natural scenery of Pertiwi Jungle Swing. It is perfect for those who want to enjoy a scenic swing moment with a little more adrenaline and energy.",
    safetyNotes: [
      "More thrilling than the regular swing",
      "Stronger push for a more exciting experience",
      "Beautiful jungle and valley views",
      "Perfect for adventurous photo and video moments"
    ],
    reservationLabel: "Add Adventure Swing",
    gradient: "linear-gradient(135deg, rgba(8,58,47,0.95), rgba(29,110,89,0.75), rgba(238,202,104,0.45))",
    gallery: [
      { id: "adventure-1", title: "Thrill Moment", gradient: "linear-gradient(135deg, rgba(16,88,73,0.95), rgba(66,138,111,0.78))" }
    ]
  },
  {
    id: "flying-swing",
    title: "Flying Swing",
    badge: "Most Extreme",
    subtitle: "Our most extreme swing experience, creating dramatic flying moments with breathtaking views and unforgettable photos from below.",
    shortDescription: "Flying Swing is the most extreme swing experience at Pertiwi Jungle Swing. Designed for guests who want a more dramatic.",
    description: "Flying Swing is the most extreme swing experience at Pertiwi Jungle Swing. Designed for guests who want a more dramatic and adrenaline-filled moment, this swing creates a stunning visual effect that makes you look as if you are flying when captured from below. With scenic views, open space, and a thrilling sensation, Flying Swing is perfect for bold guests who want unforgettable Bali moments with a more spectacular look and feel.",
    safetyNotes: [
      "Our most extreme swing experience",
      "Creates a dramatic flying effect in photos",
      "Best captured from below for stunning visuals",
      "Perfect for bold and unforgettable Bali moment"
    ],
    reservationLabel: "Add Flying Swing",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "flying-1", title: "Sky Flight", gradient: "linear-gradient(135deg, rgba(24,24,24,0.98), rgba(74,92,65,0.72))" }
    ]
  }
];

export const valuePoints: ValuePoint[] = [
  {
    id: "views",
    title: "Better Views",
    description: "Breathtaking views of the Ayung River valley from a scenic jungle cliff.",
    icon: "mountain"
  },
  {
    id: "nature",
    title: "Authentic Nature",
    description: "A peaceful setting surrounded by lush greenery and natural beauty.",
    icon: "trees"
  },
  {
    id: "photo",
    title: "Beautiful Photo Moments",
    description: "Scenic swings and photo spots designed for memorable moments and beautiful content.",
    icon: "camera"
  },
  {
    id: "more-to-experience",
    title: "More to Experience",
    description: "More than swings, with special experiences to enjoy during your visit.",
    icon: "sparkles"
  }
];

export const inclusionPoints: ValuePoint[] = [
  {
    id: "jungle-swing",
    title: "Access to Jungle Swing",
    description: "Experience the thrill of our signature swings.",
    icon: "sparkles"
  },
  {
    id: "photo-spots",
    title: "Access to Photo Spots",
    description: "Full access to all iconic photo spots around the valley.",
    icon: "camera"
  },
  {
    id: "welcome-drink",
    title: "Welcome Drink",
    description: "Refreshing arrival beverage to start your journey.",
    icon: "cup"
  },
  {
    id: "lunch",
    title: "Lunch",
    description: "Delicious lunch served with a view of the jungle.",
    icon: "utensils"
  },
  {
    id: "insurance",
    title: "Insurance Coverage",
    description: "Basic activity protection is included with every booking.",
    icon: "shield"
  }
];

export const packageOptions: PackageOption[] = [
  {
    id: "koi-pond-boat",
    name: "Koi Pond Boat",
    subtitle: "Enjoy a charming boat ride on a koi-filled pond while taking photos, videos, and feeding the fish in a beautiful jungle setting.",
    description: "Koi Pond Boat is a special add-on experience at Pertiwi Jungle Swing, designed for guests who want to enjoy a unique photo and video moment on the water. Set on a pond filled with colorful koi fish, this experience lets you ride the boat, capture beautiful content, and interact with the koi by feeding them during the session. Surrounded by lush greenery and scenic views, Koi Pond Boat offers a peaceful yet visually striking atmosphere that feels both playful and elegant. It is a perfect choice for couples, friends, and content lovers looking for an extra memorable experience beyond the main included spots and swings.",
    audience: "Add-on",
    price: "IDR 50k",
    duration: "15-20 Min",
    badge: "Featured",
    image: "/static/images/koi-pond.png",
    features: [
      "Special add-on experience at Pertiwi Jungle Swing",
      "Ride a boat on a koi-filled pond",
      "Perfect for photos and videos",
      "Enjoy feeding the koi during the experience",
      "Beautiful jungle setting with scenic views",
      "Ideal for couples, friends, and content creation"
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
    caption: "Koi Pond Boat",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(19,53,42,0.96), rgba(42,109,88,0.76))"
  },
  {
    id: "gallery-2",
    caption: "Lorem Ipsum",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(122,85,27,0.96), rgba(210,162,74,0.58))"
  },
  {
    id: "gallery-3",
    caption: "Lorem Ipsum",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(31,40,28,0.96), rgba(99,117,78,0.75))"
  },
  {
    id: "gallery-4",
    caption: "Lorem Ipsum",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(23,23,23,0.98), rgba(71,88,62,0.8))"
  },
  {
    id: "gallery-5",
    caption: "Lorem Ipsum",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(17,43,33,0.96), rgba(64,125,102,0.75))"
  },
  {
    id: "gallery-6",
    caption: "Lorem Ipsum",
    location: "Ubud, Bali",
    postUrl: "https://instagram.com/pertiwijungleswing",
    gradient: "linear-gradient(135deg, rgba(56,76,43,0.96), rgba(104,144,88,0.73))"
  }
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is included in the ticket?",
    answer: "The ticket includes access to Pertiwi Jungle Swing, beautiful photo spots, welcome drink, lunch, and insurance."
  },
  {
    id: "faq-2",
    question: "Is Koi Pond Boat included in the ticket?",
    answer: "Koi Pond Boat is available as a featured experience during your visit."
  },
  {
    id: "faq-3",
    question: "Can we take photos and videos here?",
    answer: "Yes, Pertiwi Jungle Swing is designed for beautiful photo and video moments, with scenic swings, photo spots, and stunning natural views."
  },
  {
    id: "faq-4",
    question: "Is it suitable for couples, friends, and families?",
    answer: "Yes, Pertiwi Jungle Swing is perfect for couples, friends, and families who want to enjoy beautiful moments in a scenic and peaceful setting."
  },
  {
    id: "faq-5",
    question: "Is dress rental available?",
    answer: "Yes, dress rental for photo is available to make your experience even more special and elegant."
  },
  {
    id: "faq-6",
    question: "Where is Pertiwi Jungle Swing located?",
    answer: "Pertiwi Jungle Swing is located at Pertiwi Adventure Bali in Bongkasa Village, in a beautiful natural setting above the Ayung River valley."
  },
  {
    id: "faq-7",
    question: "How can I book my visit?",
    answer: "You can book your visit directly through our website or contact our team for more information."
  }
];

export const contactInfo = {
  description:
    "Pertiwi Jungle Swing menghadirkan pengalaman ayunan, photo spot, dan panorama lembah Ubud dalam satu destinasi yang siap mengubah rasa penasaran menjadi kenyataan.",
  phone: "+62 81338597825", /*insert phone number here*/
  email: "[EMAIL_ADDRESS]", /*insert email here*/
  whatsapp: "6281338597825", /*insert whatsapp here*/
  mapsUrl: "https://maps.app.goo.gl/2yanGY9i9RKQfhZSA", /*insert maps url here*/
  instagramUrl: "https://www.instagram.com/pertiwijungleswing/" /*insert instagram url here*/
};

export const testimonialItems = [
  {
    id: "t-1",
    name: "Ananya Sharma",
    country: "India",
    text: "We really loved the Jungle Swing and Bloom Swing. The views were stunning, and the whole place felt peaceful and beautiful. It was one of our favorite experiences in Bali.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Min-ji Kim",
    country: "South Korea",
    text: "Harmony Swing was such a lovely experience for us. We also enjoyed Stairs to Heaven and Angel Wings for photos. Everything looked beautiful and the jungle atmosphere felt very special.",
    rating: 5
  },
  {
    id: "t-3",
    name: "Li Na",
    country: "China",
    text: "This place is so scenic and photogenic. My favorite spots were Bird Nest and Love Seat, and the view above the valley made the experience even more memorable.",
    rating: 5
  },
  {
    id: "t-4",
    name: "Sophie Williams",
    country: "Australia",
    text: "Pertiwi Jungle Swing was absolutely worth visiting. I loved the Jungle Swing and Bed Swing, and there were so many beautiful photo spots to enjoy. The whole setting felt premium and natural.",
    rating: 5
  },
  {
    id: "t-5",
    name: "Charlotte Miller",
    country: "New Zealand",
    text: "Such a beautiful place with amazing scenery. Woven Nest and Stairs to Heaven were my favorite spots, and the experience felt calm, relaxing, and perfect for photos.",
    rating: 5
  },
  {
    id: "t-6",
    name: "Yuki Tanaka",
    country: "Japan",
    text: "Koi Pond Boat was such a lovely extra experience, and I also really enjoyed Bloom Swing and Angel Wings. It was beautiful, elegant, and perfect for unforgettable Bali moments.",
    rating: 5
  }
];


