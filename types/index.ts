export type NavItem = {
  label: string;
  href: string;
};

export type AttractionGalleryImage = {
  id: string;
  title: string;
  gradient: string;
};

export type Attraction = {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  safetyNotes: string[];
  reservationLabel: string;
  gallery: AttractionGalleryImage[];
  gradient: string;
  badge?: string;
};

export type ValuePoint = {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "camera" | "mountain" | "sparkles" | "cup" | "lock" | "trees" | "utensils";
};

export type PackageOption = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  audience: string;
  price: string;
  duration: string;
  features: string[];
  badge?: string;
  image?: string;
};

export type GalleryItem = {
  id: string;
  caption: string;
  location: string;
  postUrl: string;
  gradient: string;
  imageUrl?: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BookingFormState = {
  date: string;
  guests: number;
  timeSlot: string;
  packageId?: string;
};
