import type {
  Attraction,
  FaqItem,
  NavItem,
  PackageOption,
  ValuePoint
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "WhyUs", href: "#whyus" },
  { label: "Attractions", href: "#attractions" },
  { label: "Experiences", href: "#experiences" },
  { label: "Inclusions", href: "#inclusions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Adventures", href: "#adventure" },
];

export const attractionItems: Attraction[] = [
  {
    id: "jungle-swing",
    title: "Jungle Swing",
    title_id: "Jungle Swing",
    subtitle: "Feel the thrill of swinging above the jungle with beautiful views of the Ayung River valley and authentic nature at Pertiwi Jungle Swing.",
    subtitle_id: "Rasakan sensasi berayun di atas hutan dengan pemandangan lembah Sungai Ayung yang indah dan alam yang otentik di Pertiwi Jungle Swing.",
    shortDescription: "Experience the iconic Jungle Swing at Pertiwi Jungle Swing, where you can glide above lush tropical greenery with breathtaking views of the Ayung River valley.",
    shortDescription_id: "Rasakan pengalaman Jungle Swing ikonik di Pertiwi Jungle Swing, di mana Anda dapat meluncur di atas tanaman hijau tropis yang rimbun dengan pemandangan lembah Sungai Ayung yang menakjubkan.",
    description: "Experience the iconic Jungle Swing at Pertiwi Jungle Swing, where you can glide above lush tropical greenery with breathtaking views of the Ayung River valley. This is one of the must-try Bali swing experiences for guests who want a mix of adventure, scenery, and unforgettable photo moments. Perfect for solo travelers, couples, and anyone looking for a classic jungle swing in Bali.",
    description_id: "Rasakan pengalaman Jungle Swing ikonik di Pertiwi Jungle Swing, di mana Anda dapat meluncur di atas tanaman hijau tropis yang rimbun dengan pemandangan lembah Sungai Ayung yang menakjubkan. Ini adalah salah satu pengalaman ayunan Bali yang wajib dicoba bagi tamu yang menginginkan campuran petualangan, pemandangan, dan momen foto yang tak terlupakan. Sempurna untuk pelancong tunggal, pasangan, dan siapa pun yang mencari ayunan hutan klasik di Bali.",
    safetyNotes: [
      "Scenic swing above lush jungle views",
      "Overlooking the Ayung River valley",
      "Perfect for stunning Bali photos",
      "A must-try signature swing experience"
    ],
    safetyNotes_id: [
      "Ayunan indah di atas pemandangan hutan rimbun",
      "Menghadap ke lembah Sungai Ayung",
      "Sempurna untuk foto Bali yang menakjubkan",
      "Pengalaman ayunan khas yang wajib dicoba"
    ],
    image: "/static/images/jungle_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(8,58,47,0.95), rgba(29,110,89,0.75), rgba(238,202,104,0.45))",
    gallery: [
      { id: "jungle-1", title: "Valley Launch", image: "/static/images/jungle_swing_1.jpg" },
      { id: "jungle-2", title: "Jungle View", image: "/static/images/jungle_swing_2.jpg" },
      { id: "jungle-3", title: "Tropical Breeze", image: "/static/images/jungle_swing_3.jpg" },
      { id: "jungle-4", title: "Jungle Peak", image: "/static/images/jungle_swing_4.jpg" }
    ]
  },
  {
    id: "bloom-ring-swing",
    title: "Bloom Ring Swing",
    title_id: "Bloom Ring Swing",
    subtitle: "A beautiful floral swing surrounded by nature, perfect for elegant photos and a romantic Bali swing experience.",
    subtitle_id: "Ayunan bunga yang indah dikelilingi oleh alam, sempurna untuk foto elegan dan pengalaman ayunan Bali yang romantis.",
    shortDescription: "Bloom Ring Swing offers a graceful and photogenic experience with a floral ring design that stands out beautifully against the green jungle backdrop.",
    shortDescription_id: "Bloom Ring Swing menawarkan pengalaman yang anggun dan fotogenik dengan desain cincin bunga yang menonjol indah di latar belakang hutan hijau.",
    description: "Bloom Ring Swing offers a graceful and photogenic experience with a floral ring design that stands out beautifully against the green jungle backdrop. This spot is ideal for guests who love aesthetic photo moments and want a softer, more romantic Bali swing experience. With flowers, nature, and scenic surroundings, it creates a dreamy atmosphere for memorable photos.",
    description_id: "Bloom Ring Swing menawarkan pengalaman yang anggun dan fotogenik dengan desain cincin bunga yang menonjol indah di latar belakang hutan hijau. Tempat ini ideal bagi tamu yang menyukai momen foto estetis dan menginginkan pengalaman ayunan Bali yang lebih lembut dan romantis. Dengan bunga, alam, dan lingkungan yang indah, tempat ini menciptakan suasana mimpi untuk foto yang tak terlupakan.",
    safetyNotes: [
      "Elegant floral swing design",
      "Beautiful spot for romantic photos",
      "Surrounded by lush tropical nature",
      "Ideal for stylish and Instagram-worthy moments"
    ],
    safetyNotes_id: [
      "Desain ayunan bunga yang elegan",
      "Tempat yang indah untuk foto romantis",
      "Dikelilingi oleh alam tropis yang rimbun",
      "Ideal untuk momen bergaya dan layak masuk Instagram"
    ],
    image: "/static/images/bloom_ring_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(43,54,35,0.95), rgba(97,123,77,0.82), rgba(207,162,91,0.4))",
    gallery: [
      { id: "bloom-1", title: "Floral Ring", image: "/static/images/bloom_ring_swing_1.jpg" },
      { id: "bloom-2", title: "Petal Swing", image: "/static/images/bloom_ring_swing_2.jpg" },
      { id: "bloom-3", title: "Garden View", image: "/static/images/bloom_ring_swing_3.jpg" },
      { id: "bloom-4", title: "Blossom Spot", image: "/static/images/bloom_ring_swing_4.jpg" }
    ]
  },
  {
    id: "harmony-swing",
    title: "Harmony Swing",
    title_id: "Harmony Swing",
    subtitle: "Share the moment together on a double swing with beautiful jungle views, perfect for couples, best friends, or family photo memories.",
    subtitle_id: "Bagikan momen bersama di ayunan ganda dengan pemandangan hutan yang indah, sempurna untuk kenangan foto pasangan, sahabat, atau keluarga.",
    shortDescription: "Harmony Swing is designed for two, making it a perfect choice for couples, friends, sisters, or family members who want to enjoy the experience together.",
    shortDescription_id: "Harmony Swing dirancang untuk berdua, menjadikannya pilihan sempurna bagi pasangan, teman, saudara perempuan, atau anggota keluarga yang ingin menikmati pengalaman bersama.",
    description: "Harmony Swing is designed for two, making it a perfect choice for couples, friends, sisters, or family members who want to enjoy the experience together. Set against the stunning natural landscape of Pertiwi Jungle Swing, this double swing combines scenic beauty with meaningful shared moments. It is one of the best photo spots for capturing connection, joy, and unforgettable Bali memories.",
    description_id: "Harmony Swing dirancang untuk berdua, menjadikannya pilihan sempurna bagi pasangan, teman, saudara perempuan, atau anggota keluarga yang ingin menikmati pengalaman bersama. Berlatar belakang pemandangan alam Pertiwi Jungle Swing yang menakjubkan, ayunan ganda ini menggabungkan keindahan pemandangan dengan momen bersama yang bermakna. Ini adalah salah satu spot foto terbaik untuk mengabadikan koneksi, kegembiraan, dan kenangan Bali yang tak terlupakan.",
    safetyNotes: [
      "Double swing for two people",
      "Great for couples, friends, or family",
      "Beautiful jungle and valley backdrop",
      "Perfect for shared photo moments"
    ],
    safetyNotes_id: [
      "Ayunan ganda untuk dua orang",
      "Bagus untuk pasangan, teman, atau keluarga",
      "Latar belakang hutan dan lembah yang indah",
      "Sempurna untuk momen foto bersama"
    ],
    image: "/static/images/harmony_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "harmony-1", title: "Double Joy", image: "/static/images/harmony_swing_1.jpg" },
      { id: "harmony-2", title: "Shared Moments", image: "/static/images/harmony_swing_2.jpg" },
      { id: "harmony-3", title: "Twin Thrills", image: "/static/images/harmony_swing_3.jpg" },
      { id: "harmony-4", title: "Connection", image: "/static/images/harmony_swing_4.jpg" }
    ]
  },
  {
    id: "bird-nest",
    title: "Bird Nest",
    title_id: "Sarang Burung",
    subtitle: "Pose inside a unique nest-shaped photo spot surrounded by tropical greenery for a magical Bali jungle photography experience.",
    subtitle_id: "Berpose di dalam spot foto berbentuk sarang unik yang dikelilingi oleh tanaman hijau tropis untuk pengalaman fotografi hutan Bali yang ajaib.",
    shortDescription: "Bird Nest is one of the most eye-catching photo spots at Pertiwi Jungle Swing. Designed in a beautiful nest shape.",
    shortDescription_id: "Sarang Burung adalah salah satu spot foto paling menarik di Pertiwi Jungle Swing. Dirancang dengan bentuk sarang yang indah.",
    description: "Bird Nest is one of the most eye-catching photo spots at Pertiwi Jungle Swing. Designed in a beautiful nest shape, this spot blends naturally with the surrounding tropical landscape and offers a charming setting for elegant photos. It is perfect for guests who want a creative Bali photo experience with a nature-inspired backdrop that feels unique and memorable.",
    description_id: "Sarang Burung adalah salah satu spot foto paling menarik di Pertiwi Jungle Swing. Dirancang dengan bentuk sarang yang indah, spot ini menyatu secara alami dengan lanskap tropis di sekitarnya dan menawarkan pengaturan yang menawan untuk foto-foto elegan. Sempurna bagi tamu yang menginginkan pengalaman foto Bali yang kreatif dengan latar belakang yang terinspirasi alam yang terasa unik dan berkesan.",
    safetyNotes: [
      "Unique nest-inspired photo spot",
      "Surrounded by lush jungle scenery",
      "Great for elegant and creative photos",
      "One of the most iconic photo spots"
    ],
    safetyNotes_id: [
      "Spot foto unik yang terinspirasi sarang burung",
      "Dikelilingi oleh pemandangan hutan rimbun",
      "Bagus untuk foto yang elegan dan kreatif",
      "Salah satu spot foto paling ikonik"
    ],
    image: "/static/images/bird_nest_1.jpg",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "nest-1", title: "Cozy Nest", image: "/static/images/bird_nest_1.jpg" },
      { id: "nest-2", title: "Forest Home", image: "/static/images/bird_nest_2.jpg" },
      { id: "nest-3", title: "Nature's Cradle", image: "/static/images/bird_nest_3.jpg" },
      { id: "nest-4", title: "Bird's View", image: "/static/images/bird_nest_4.jpg" }
    ]
  },
  {
    id: "bed-swing",
    title: "Bed Swing",
    title_id: "Bed Swing",
    subtitle: "Relax and pose on a stylish bed swing with panoramic jungle views, combining comfort, romance, and scenic Bali photography.",
    subtitle_id: "Bersantai dan berpose di ayunan tempat tidur yang penuh gaya dengan pemandangan hutan panorama, menggabungkan kenyamanan, romansa, dan fotografi Bali yang indah.",
    shortDescription: "Bed Swing offers a different kind of Bali swing experience by combining comfort and beauty in one unique spot.",
    shortDescription_id: "Bed Swing menawarkan jenis pengalaman ayunan Bali yang berbeda dengan menggabungkan kenyamanan dan keindahan di satu spot unik.",
    description: "Bed Swing offers a different kind of Bali swing experience by combining comfort and beauty in one unique spot. Suspended with scenic jungle views behind it, this spot is perfect for romantic poses, stylish content, and memorable travel photos. Whether you are visiting as a couple or with friends, Bed Swing creates a soft and elegant atmosphere with a premium feel.",
    description_id: "Bed Swing menawarkan jenis pengalaman ayunan Bali yang berbeda dengan menggabungkan kenyamanan dan keindahan di satu spot unik. Tergantung dengan pemandangan hutan yang indah di belakangnya, spot ini sangat cocok untuk pose romantis, konten penuh gaya, dan foto perjalanan yang tak terlupakan. Baik Anda berkunjung sebagai pasangan atau bersama teman, Bed Swing menciptakan suasana yang lembut dan elegan dengan nuansa premium.",
    safetyNotes: [
      "Unique swing bed concept",
      "Perfect for romantic and elegant photos",
      "Scenic jungle and valley views",
      "Comfortable and visually striking spot"
    ],
    safetyNotes_id: [
      "Konsep tempat tidur ayun yang unik",
      "Sempurna untuk foto romantis dan elegan",
      "Pemandangan hutan dan lembah yang indah",
      "Spot yang nyaman dan menonjol secara visual"
    ],
    image: "/static/images/bed_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "bed-1", title: "Soft Romance", image: "/static/images/bed_swing_1.jpg" },
      { id: "bed-2", title: "Dreamy View", image: "/static/images/bed_swing_2.jpg" },
      { id: "bed-3", title: "Comfort Zone", image: "/static/images/bed_swing_3.jpg" },
      { id: "bed-4", title: "Relaxation", image: "/static/images/bed_swing_4.jpg" }
    ]
  },
  {
    id: "stairs-to-heaven",
    title: "Stairs to Heaven",
    title_id: "Tangga Menuju Surga",
    subtitle: "Step into one of Bali’s most iconic photo concepts with elevated views, open sky, and a dramatic backdrop above the jungle.",
    subtitle_id: "Melangkah ke salah satu konsep foto paling ikonik di Bali dengan pemandangan tinggi, langit terbuka, dan latar belakang dramatis di atas hutan.",
    shortDescription: "Stairs to Heaven is a striking photo spot designed to create dramatic and unforgettable Bali moments.",
    shortDescription_id: "Tangga Menuju Surga adalah spot foto mencolok yang dirancang untuk menciptakan momen Bali yang dramatis dan tak terlupakan.",
    description: "Stairs to Heaven is a striking photo spot designed to create dramatic and unforgettable Bali moments. With open sky above and lush jungle scenery around, this elevated structure gives guests the feeling of stepping into the clouds. It is ideal for guests looking for bold, eye-catching travel photos with a scenic and uplifting atmosphere in Bali.",
    description_id: "Tangga Menuju Surga adalah spot foto mencolok yang dirancang untuk menciptakan momen Bali yang dramatis dan tak terlupakan. Dengan langit terbuka di atas dan pemandangan hutan rimbun di sekelilingnya, struktur yang ditinggikan ini memberi tamu perasaan melangkah ke awan. Sangat ideal bagi tamu yang mencari foto perjalanan yang berani dan menarik dengan suasana pemandangan yang membangkitkan semangat di Bali.",
    safetyNotes: [
      "Iconic elevated photo spot",
      "Open sky and scenic jungle backdrop",
      "Perfect for dramatic Bali photos",
      "A standout experience for social media content"
    ],
    safetyNotes_id: [
      "Spot foto tinggi yang ikonik",
      "Langit terbuka dan latar belakang hutan yang indah",
      "Sempurna untuk foto Bali yang dramatis",
      "Pengalaman menonjol untuk konten media sosial"
    ],
    image: "/static/images/staris_to_heaven_1.jpg",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "stairs-1", title: "Heaven Step", image: "/static/images/staris_to_heaven_1.jpg" }
    ]
  },
  {
    id: "woven-nest",
    title: "Woven Nest",
    title_id: "Sarang Anyaman",
    subtitle: "Enjoy a peaceful nest-style photo spot tucked into nature, perfect for relaxed portraits with an authentic jungle atmosphere.",
    subtitle_id: "Nikmati spot foto bergaya sarang yang tenang yang tersembunyi di alam, sempurna untuk potret santai dengan suasana hutan yang otentik.",
    shortDescription: "Woven Nest offers a calm and intimate photo experience surrounded by greenery and natural textures.",
    shortDescription_id: "Sarang Anyaman menawarkan pengalaman foto yang tenang dan akrab yang dikelilingi oleh tanaman hijau dan tekstur alami.",
    description: "Woven Nest offers a calm and intimate photo experience surrounded by greenery and natural textures. This nest-style spot feels cozy, peaceful, and beautifully connected to the authentic landscape of Pertiwi Jungle Swing. It is perfect for guests who want softer portraits, nature-inspired compositions, and a more serene Bali photo moment away from the more dramatic swing setups.",
    description_id: "Sarang Anyaman menawarkan pengalaman foto yang tenang dan akrab yang dikelilingi oleh tanaman hijau dan tekstur alami. Spot bergaya sarang ini terasa nyaman, damai, dan terhubung indah dengan lanskap otentik Pertiwi Jungle Swing. Sangat cocok bagi tamu yang menginginkan potret yang lebih lembut, komposisi yang terinspirasi alam, dan momen foto Bali yang lebih tenang jauh dari pengaturan ayunan yang lebih dramatis.",
    safetyNotes: [
      "Cozy nest-style photo spot",
      "Peaceful and nature-inspired setting",
      "Great for soft and relaxed portraits",
      "Authentic jungle atmosphere"
    ],
    safetyNotes_id: [
      "Spot foto bergaya sarang yang nyaman",
      "Pengaturan yang tenang dan terinspirasi alam",
      "Bagus untuk potret yang lembut dan santai",
      "Suasana hutan yang otentik"
    ],
    image: "/static/images/woven_nest_1.jpg",
    gradient: "linear-gradient(135deg, rgba(92,66,20,0.93), rgba(176,127,53,0.7), rgba(55,80,41,0.72))",
    gallery: [
      { id: "woven-1", title: "Peaceful Nest", image: "/static/images/woven_nest_1.jpg" },
      { id: "woven-2", title: "Organic Texture", image: "/static/images/woven_nest_2.jpg" },
      { id: "woven-3", title: "Nature's Web", image: "/static/images/woven_nest_3.jpg" },
      { id: "woven-4", title: "Quiet Corner", image: "/static/images/woven_nest_4.jpg" },
      { id: "woven-5", title: "Jungle Hideout", image: "/static/images/woven_nest_5.jpg" }
    ]
  },
  {
    id: "love-seat",
    title: "Love Seat",
    title_id: "Love Seat",
    subtitle: "A charming heart-inspired seating spot for romantic photos, surrounded by flowers and natural scenery at Pertiwi Jungle Swing.",
    subtitle_id: "Tempat duduk menawan yang terinspirasi hati untuk foto romantis, dikelilingi oleh bunga dan pemandangan alam di Pertiwi Jungle Swing.",
    shortDescription: "Love Seat is a romantic photo spot designed for sweet and memorable moments. With its heart-inspired shape.",
    shortDescription_id: "Love Seat adalah spot foto romantis yang dirancang untuk momen manis dan tak terlupakan. Dengan bentuknya yang terinspirasi hati.",
    description: "Love Seat is a romantic photo spot designed for sweet and memorable moments. With its heart-inspired shape and floral details, this spot is perfect for couples, honeymooners, or anyone who wants a soft and beautiful Bali photo setting. Surrounded by nature, it brings together romance, elegance, and a warm atmosphere in one lovely frame.",
    description_id: "Love Seat adalah spot foto romantis yang dirancang untuk momen manis dan tak terlupakan. Dengan bentuknya yang terinspirasi hati dan detail bunga, spot ini sangat cocok bagi pasangan, yang sedang berbulan madu, atau siapa pun yang menginginkan suasana foto Bali yang lembut dan indah. Dikelilingi oleh alam, tempat ini menyatukan romansa, keanggunan, dan suasana hangat dalam satu bingkai yang indah.",
    safetyNotes: [
      "Romantic heart-inspired design",
      "Beautiful floral details",
      "Perfect for couples and honeymoon photos",
      "Soft and elegant Bali photo spot"
    ],
    safetyNotes_id: [
      "Desain romantis yang terinspirasi hati",
      "Detail bunga yang indah",
      "Sempurna untuk foto pasangan dan bulan madu",
      "Spot foto Bali yang lembut dan elegan"
    ],
    image: "/static/images/love_seat_1.jpg",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "love-1", title: "Heart Frame", image: "/static/images/love_seat_1.jpg" },
      { id: "love-2", title: "Romantic Spot", image: "/static/images/love_seat_2.jpg" },
      { id: "love-3", title: "Valentine Breeze", image: "/static/images/love_seat_3.jpg" },
      { id: "love-4", title: "Eternal Love", image: "/static/images/love_seat_4.jpg" }
    ]
  },
  {
    id: "angel-wings",
    title: "Angel Wings",
    title_id: "Sayap Malaikat",
    subtitle: "Stand before stunning wing art with scenic jungle views for one of the most iconic and eye-catching photo spots in Bali.",
    subtitle_id: "Berdiri di depan seni sayap yang menakjubkan dengan pemandangan hutan yang indah untuk salah satu spot foto paling ikonik dan menarik di Bali.",
    shortDescription: "Angel Wings is a bold and artistic photo spot that creates a powerful visual moment against the natural beauty of the jungle.",
    shortDescription_id: "Angel Wings adalah spot foto artistik dan berani yang menciptakan momen visual yang kuat melawan keindahan alam hutan.",
    description: "Angel Wings is a bold and artistic photo spot that creates a powerful visual moment against the natural beauty of the jungle. This spot is perfect for guests who want a striking Bali photo with a confident and stylish feel. With its colorful wing design and scenic backdrop, Angel Wings is one of the most memorable and Instagram-worthy spots at Pertiwi Jungle Swing.",
    description_id: "Angel Wings adalah spot foto artistik dan berani yang menciptakan momen visual yang kuat melawan keindahan alam hutan. Spot ini sangat cocok bagi tamu yang menginginkan foto Bali yang mencolok dengan nuansa percaya diri dan penuh gaya. Dengan desain sayap berwarna-warni dan latar belakang pemandangan, Angel Wings adalah salah satu spot paling berkesan dan layak masuk Instagram di Pertiwi Jungle Swing.",
    safetyNotes: [
      "Iconic wing-inspired photo spot",
      "Stunning for bold and stylish portraits",
      "Scenic jungle backdrop",
      "One of the most Instagram-worthy locations"
    ],
    safetyNotes_id: [
      "Spot foto terinspirasi sayap yang ikonik",
      "Menakjubkan untuk potret berani dan penuh gaya",
      "Latar belakang hutan yang indah",
      "Salah satu lokasi yang paling layak masuk Instagram"
    ],
    image: "/static/images/angels_wing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(43,54,35,0.95), rgba(97,123,77,0.82), rgba(207,162,91,0.4))",
    gallery: [
      { id: "wings-1", title: "Wings of Art", image: "/static/images/angels_wing_1.jpg" }
    ]
  },
  {
    id: "adventure-swing",
    title: "Adventure Swing",
    title_id: "Adventure Swing",
    badge: "More Thrilling",
    badge_id: "Lebih Menegangkan",
    subtitle: "A more thrilling swing experience with a stronger push, perfect for guests who want more excitement with scenic jungle views.",
    subtitle_id: "Pengalaman ayunan yang lebih menegangkan dengan dorongan yang lebih kuat, sempurna bagi tamu yang menginginkan lebih banyak keseruan dengan pemandangan hutan yang indah.",
    shortDescription: "Adventure Swing is designed for guests who want a more exciting version of the classic swing experience.",
    shortDescription_id: "Adventure Swing dirancang bagi tamu yang menginginkan versi yang lebih seru dari pengalaman ayunan klasik.",
    description: "Adventure Swing is designed for guests who want a more exciting version of the classic swing experience. With a stronger push from the instructor, this swing delivers more speed, more thrill, and a more dynamic feeling while still surrounded by the beautiful natural scenery of Pertiwi Jungle Swing. It is perfect for those who want to enjoy a scenic swing moment with a little more adrenaline and energy.",
    description_id: "Adventure Swing dirancang bagi tamu yang menginginkan versi yang lebih seru dari pengalaman ayunan klasik. Dengan dorongan yang lebih kuat dari instruktur, ayunan ini memberikan lebih banyak kecepatan, sensasi, dan perasaan yang lebih dinamis sambil tetap dikelilingi oleh pemandangan alam Pertiwi Jungle Swing yang indah. Sangat cocok bagi mereka yang ingin menikmati momen ayunan yang indah dengan sedikit lebih banyak adrenalin dan energi.",
    safetyNotes: [
      "More thrilling than the regular swing",
      "Stronger push for a more exciting experience",
      "Beautiful jungle and valley views",
      "Perfect for adventurous photo and video moments"
    ],
    safetyNotes_id: [
      "Lebih menegangkan daripada ayunan biasa",
      "Dorongan lebih kuat untuk pengalaman yang lebih seru",
      "Pemandangan hutan dan lembah yang indah",
      "Sempurna untuk momen foto dan video petualangan"
    ],
    image: "/static/images/adventure_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(8,58,47,0.95), rgba(29,110,89,0.75), rgba(238,202,104,0.45))",
    gallery: [
      { id: "adventure-1", title: "Thrill Moment", image: "/static/images/adventure_swing_1.jpg" },
      { id: "adventure-2", title: "Adrenaline", image: "/static/images/adventure_swing_2.jpg" },
      { id: "adventure-3", title: "Action Shot", image: "/static/images/adventure_swing_3.jpg" },
      { id: "adventure-4", title: "Bold Experience", image: "/static/images/adventure_swing_4.jpg" }
    ]
  },
  {
    id: "flying-swing",
    title: "Flying Swing",
    title_id: "Flying Swing",
    badge: "Most Extreme",
    badge_id: "Paling Ekstrem",
    subtitle: "Our most extreme swing experience, creating dramatic flying moments with breathtaking views and unforgettable photos from below.",
    subtitle_id: "Pengalaman ayunan paling ekstrem kami, menciptakan momen terbang dramatis dengan pemandangan menakjubkan dan foto tak terlupakan dari bawah.",
    shortDescription: "Flying Swing is the most extreme swing experience at Pertiwi Jungle Swing. Designed for guests who want a more dramatic.",
    shortDescription_id: "Flying Swing adalah pengalaman ayunan paling ekstrem di Pertiwi Jungle Swing. Dirancang bagi tamu yang menginginkan sesuatu yang lebih dramatis.",
    description: "Flying Swing is the most extreme swing experience at Pertiwi Jungle Swing. Designed for guests who want a more dramatic and adrenaline-filled moment, this swing creates a stunning visual effect that makes you look as if you are flying when captured from below. With scenic views, open space, and a thrilling sensation, Flying Swing is perfect for bold guests who want unforgettable Bali moments with a more spectacular look and feel.",
    description_id: "Flying Swing adalah pengalaman ayunan paling ekstrem di Pertiwi Jungle Swing. Dirancang bagi tamu yang menginginkan momen yang lebih dramatis dan penuh adrenalin, ayunan ini menciptakan efek visual yang menakjubkan yang membuat Anda terlihat seolah-olah sedang terbang saat diabadikan dari bawah. Dengan pemandangan yang indah, ruang terbuka, dan sensasi yang mendebarkan, Flying Swing sangat cocok bagi tamu yang berani yang menginginkan momen Bali yang tak terlupakan dengan tampilan dan nuansa yang lebih spektakuler.",
    safetyNotes: [
      "Our most extreme swing experience",
      "Creates a dramatic flying effect in photos",
      "Best captured from below for stunning visuals",
      "Perfect for bold and unforgettable Bali moment"
    ],
    safetyNotes_id: [
      "Pengalaman ayunan paling ekstrem kami",
      "Menciptakan efek terbang dramatis dalam foto",
      "Terbaik diabadikan dari bawah untuk visual yang menakjubkan",
      "Sempurna untuk momen Bali yang berani dan tak terlupakan"
    ],
    image: "/static/images/flying_swing_1.jpg",
    gradient: "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(70,88,61,0.8), rgba(219,188,88,0.28))",
    gallery: [
      { id: "flying-1", title: "Sky Flight", image: "/static/images/flying_swing_1.jpg" },
      { id: "flying-2", title: "High Altitude", image: "/static/images/flying_swing_2.jpg" },
      { id: "flying-3", title: "Above Jungle", image: "/static/images/flying_swing_3.jpg" },
      { id: "flying-4", title: "Extreme View", image: "/static/images/flying_swing_4.jpg" }
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
  },
  {
    id: "dress-rental",
    title: "Dress Rental (Add-on)",
    description: "Available for beautiful and more elegant photo moments.",
    icon: "camera"
  }
];

export const packageOptions: PackageOption[] = [
  {
    id: "koi-pond-boat",
    name: "Koi Pond Boat",
    name_id: "Sampan Kolam Koi",
    subtitle: "Enjoy a charming boat ride on a koi-filled pond while taking photos, videos, and feeding the fish in a beautiful jungle setting.",
    subtitle_id: "Nikmati perjalanan sampan yang menawan di kolam penuh ikan koi sambil berfoto, video, dan memberi makan ikan di lingkungan hutan yang indah.",
    description: "Koi Pond Boat is a special add-on experience at Pertiwi Jungle Swing, designed for guests who want to enjoy a unique photo and video moment on the water. Set on a pond filled with colorful koi fish, this experience lets you ride the boat, capture beautiful content, and interact with the koi by feeding them during the session. Surrounded by lush greenery and scenic views, Koi Pond Boat offers a peaceful yet visually striking atmosphere that feels both playful and elegant. It is a perfect choice for couples, friends, and content lovers looking for an extra memorable experience beyond the main included spots and swings.",
    description_id: "Sampan Kolam Koi adalah pengalaman tambahan khusus di Pertiwi Jungle Swing, dirancang bagi tamu yang ingin menikmati momen foto dan video unik di atas air. Bertempat di kolam yang penuh dengan ikan koi berwarna-warni, pengalaman ini memungkinkan Anda menaiki sampan, mengabadikan konten yang indah, dan berinteraksi dengan koi dengan memberi mereka makan selama sesi berlangsung. Dikelilingi oleh tanaman hijau subur dan pemandangan indah, Sampan Kolam Koi menawarkan suasana yang tenang namun mencolok secara visual yang terasa ceria sekaligus elegan. Ini adalah pilihan sempurna bagi pasangan, teman, dan pecinta konten yang mencari pengalaman ekstra berkesan di luar spot dan ayunan utama yang tersedia.",
    audience: "Limited availability\ncheck at lobby",
    audience_id: "Ketersediaan terbatas\ncek di lobi",
    // price: "IDR 300K/person", /*jika ada harga bisa di uncomment*/
    duration: "3-7 Minutes section",
    duration_id: "Sesi 3-7 Menit",
    badge: "Featured",
    badge_id: "Unggulan", 
    image: "/static/images/koi_pond_boat_1.jpg",
    features: [
      "Special add-on experience at Pertiwi Jungle Swing",
      "Ride a boat on a koi-filled pond",
      "Perfect for photos and videos",
      "Enjoy feeding the koi during the experience",
      "Beautiful jungle setting with scenic views",
      "Ideal for couples, friends, and content creation"
    ],
    features_id: [
      "Pengalaman tambahan khusus di Pertiwi Jungle Swing",
      "Naik sampan di kolam penuh ikan koi",
      "Sempurna untuk foto dan video",
      "Nikmati memberi makan koi selama pengalaman berlangsung",
      "Lingkungan hutan yang indah dengan pemandangan menawan",
      "Ideal untuk pasangan, teman, dan pembuatan konten"
    ],
    gallery: [
      { id: "koi-1", title: "Peaceful Ride", image: "/static/images/koi_pond_boat_1.jpg" },
      { id: "koi-2", title: "Golden Koi", image: "/static/images/koi_pond_boat_2.jpg" },
      { id: "koi-3", title: "Lush Surroundings", image: "/static/images/koi_pond_boat_3.jpg" },
      { id: "koi-5", title: "Serene Water", image: "/static/images/koi_pond_boat_5.jpg" }
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


