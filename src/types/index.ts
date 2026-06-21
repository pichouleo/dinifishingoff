// ============================================================
// Types globaux — Dini Fishing
// ============================================================

export type Locale = 'fr' | 'en' | 'es';

export interface NavLink {
  key: string;
  href: string;
}

export interface Species {
  id: string;
  latin: string;
  name: Record<Locale, string>;
  image: string;
  imageAlt: string;
  description: Record<Locale, string>;
  techniques: string[];
  activeMonths: number[]; // 0–11
}

export interface Stay {
  id: string;
  badge: Record<Locale, string>;
  title: Record<Locale, string>;
  duration: Record<Locale, string>;
  description: Record<Locale, string>;
  includes: Record<Locale, string[]>;
}

export interface Lodging {
  id: string;
  name: string;
  capacity: number;
  bedrooms: number;
  description: Record<Locale, string>;
  amenities: Record<Locale, string[]>;
  image: string;
  imageAlt: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  dataSrc: string;
  alt: string;
  caption: Record<Locale, string>;
  wide?: boolean;
}

export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string;
}

export type TranslationKey = keyof typeof import('../lib/i18n').translations.fr;
