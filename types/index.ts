export type NavItem = {
  label: string;
  href: string;
};

export type AttractionGalleryImage = {
  id: string;
  title: string;
  image: string;
};

export type Attraction = {
  id: string;
  title: string;
  title_id?: string;
  subtitle: string;
  subtitle_id?: string;
  shortDescription: string;
  shortDescription_id?: string;
  description: string;
  description_id?: string;
  safetyNotes: string[];
  safetyNotes_id?: string[];
  image: string;
  gallery: AttractionGalleryImage[];
  gradient: string;
  badge?: string;
  badge_id?: string;
};

export type ValuePoint = {
  id: string;
  title: string;
  title_id?: string;
  description: string;
  description_id?: string;
  icon: "shield" | "camera" | "mountain" | "sparkles" | "cup" | "lock" | "trees" | "utensils";
};

export type PackageOption = {
  id: string;
  name: string;
  name_id?: string;
  subtitle: string;
  subtitle_id?: string;
  description: string;
  description_id?: string;
  audience: string;
  audience_id?: string;
  price?: string;
  duration: string;
  duration_id?: string;
  features: string[];
  features_id?: string[];
  badge?: string;
  badge_id?: string;
  image?: string;
  gallery?: AttractionGalleryImage[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
