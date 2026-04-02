/**
 * Site-wide constants
 */

export const SITE_NAME = "NgertiGresik.Id";
export const SITE_DESCRIPTION = "Mengenal Keragaman dan Keunikan Kota Gresik";
export const SITE_URL = "https://ngertigresik.id";

/**
 * Navigation menu items
 */
export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Makanan", href: "/makanan" },
  { label: "Pakaian Adat", href: "/pakaian-adat" },
  { label: "Kesenian", href: "/kesenian" },
  { label: "Pekerjaan", href: "/pekerjaan" },
  { label: "Kebiasaan Masyarakat", href: "/kebiasaan-masyarakat" },
  { label: "Kesimpulan", href: "/kesimpulan" },
] as const;

/**
 * Section IDs for scroll navigation
 */
export const SECTION_IDS = {
  HERO: "hero",
  ABOUT: "about",
  EXPLORE: "explore",
  STATS: "stats",
} as const;

/**
 * Animation variants
 */
export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.6 } },
};

export const FADE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const SCALE_IN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const SLIDE_IN_FROM_LEFT_VARIANTS = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const SLIDE_IN_FROM_RIGHT_VARIANTS = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Breakpoints (matching Tailwind defaults)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Chart colors
 */
export const CHART_COLORS = {
  primary: "#D4695B", // terracotta
  secondary: "#00B4AB", // teal
  accent: "#E07A3E", // burnt
  neutral: "#2D5F4C", // forest
  highlight: "#1A2332", // navy
} as const;

export const CHART_COLOR_PALETTE = [
  "#D4695B", // terracotta
  "#00B4AB", // teal
  "#E07A3E", // burnt orange
  "#2D5F4C", // forest green
  "#E8DCC4", // beige
  "#1A2332", // navy
];

/**
 * Economic data constants (2025 estimates)
 */
export const ECONOMIC_DATA = {
  UMK_GRESIK_2025: 2350000, // Rp 2.350.000
  TOTAL_WORKFORCE: 750000,
  GDP_CONTRIBUTION: 12.5, // percentage to East Java
  AVERAGE_GROWTH_RATE: 4.8, // percentage per year
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
  youtube: "#",
} as const;

/**
 * Meta tags
 */
export const META_TAGS = {
  keywords: [
    "Gresik",
    "Budaya Gresik",
    "Wisata Gresik",
    "Makanan Khas Gresik",
    "Kesenian Gresik",
    "Pakaian Adat Gresik",
    "Ekonomi Gresik",
    "Jawa Timur",
  ],
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
} as const;
