// ============================================================
// BREEZEWOOD POOLS INC. — Central business data constants
// Update this file to reflect real values before launch
// ============================================================

export const BUSINESS = {
  name: "Breezewood Pools Inc.",
  shortName: "Breezewood Pools",
  tagline: "Bolton's Pool Experts Since 1976",
  description:
    "Breezewood Pools Inc. is Bolton's premier swimming pool service, repair, and retail store. Serving the Bolton, Caledon, and surrounding GTA communities since 1976.",
  phone: "(905) 857-3830",
  phoneHref: "tel:+19058573830",
  email: "breezewood@breezewoodpools.ca",
  emailHref: "mailto:breezewood@breezewoodpools.ca",
  address: {
    street: "274 Queen St S",
    city: "Bolton",
    province: "ON",
    postal: "L7E 4Z5",
    country: "Canada",
    full: "274 Queen St S, Bolton, ON L7E 4Z5",
  },
  coordinates: {
    lat: 43.8763,
    lng: -79.7368,
  },
  founded: 1976,
  siteUrl: "https://www.breezewoodpools.ca",
  // TODO: Update with real social media URLs before launch
  social: {
    facebook: "#",
    googleMaps:
      "https://maps.google.com/?q=274+Queen+St+S+Bolton+ON+L7E+4Z5",
    instagram: "#",
  },
  // TODO: Update with real store hours before launch
  hours: {
    weekdays: "Monday–Friday: [HOURS]",
    saturday: "Saturday: [HOURS]",
    sunday: "Sunday: [HOURS]",
    seasonal: "Service: May through Labour Day",
  },
  serviceArea: [
    "Bolton",
    "Caledon",
    "Brampton",
    "Vaughan",
    "Kleinburg",
    "Schomberg",
    "Palgrave",
    "Nobleton",
    "King City",
  ],
} as const;

// ============================================================
// SERVICES DATA
// ============================================================

export const SERVICES = [
  {
    id: "pool-opening",
    title: "Pool Opening",
    shortTitle: "Pool Opening",
    description:
      "Get your pool ready for summer with our professional opening service. Let our trained technicians handle everything from removing your cover to balancing your water chemistry.",
    href: "/services/pool-opening",
    icon: "sun",
    seasonal: true,
  },
  {
    id: "pool-closing",
    title: "Pool Closing",
    shortTitle: "Pool Closing",
    description:
      "Protect your pool investment through the Ontario winter with our expert closing and winterization service. Proper closing prevents freeze damage and saves money.",
    href: "/services/pool-closing",
    icon: "snowflake",
    seasonal: true,
  },
  {
    id: "weekly-maintenance",
    title: "Weekly Maintenance",
    shortTitle: "Maintenance",
    description:
      "Enjoy your pool all season without lifting a finger. Our Basic and Deluxe weekly maintenance packages keep your water crystal clear and chemically balanced.",
    href: "/services/weekly-maintenance",
    icon: "sparkles",
    seasonal: false,
  },
  {
    id: "repair-leak-detection",
    title: "Repair & Leak Detection",
    shortTitle: "Repairs",
    description:
      "From pump replacements and liner repairs to professional leak detection, our certified technicians diagnose and fix pool problems quickly and correctly.",
    href: "/services/repair-leak-detection",
    icon: "wrench",
    seasonal: false,
  },
  {
    id: "retail-store",
    title: "Retail Store & Water Testing",
    shortTitle: "Retail Store",
    description:
      "Visit our Bolton showroom for a full line of pool chemicals, equipment, accessories, and free computerized water analysis using the LaMotte Spin Lab.",
    href: "/services/retail-store",
    icon: "building-storefront",
    seasonal: false,
  },
] as const;

// ============================================================
// EQUIPMENT TYPES (for repair & retail pages)
// ============================================================

export const EQUIPMENT_TYPES = [
  "Pumps",
  "Filters",
  "Heaters & Heat Pumps",
  "Robotic Pool Cleaners",
  "Pool Automation Systems",
  "UV Sanitation Systems",
  "Salt Systems",
  "Safety Covers",
  "Winter Covers",
  "Solar Blankets & Rollers",
  "New Vinyl Liners",
  "Coping Repair & Replacement",
  "Lighting",
  "Skimmers & Returns",
] as const;

// ============================================================
// PLACEHOLDER TESTIMONIALS
// Replace with real Google reviews before launch
// ============================================================

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Bolton, ON",
    text: "Breezewood has been taking care of our pool for years. Matt and his team are always professional, punctual, and thorough. Our pool has never looked better!",
    stars: 5,
    date: "June 2024",
  },
  {
    id: 2,
    name: "David K.",
    location: "Caledon, ON",
    text: "Excellent service from start to finish. They opened our pool in early May and it was swim-ready the same day. Highly recommend for anyone in the Bolton area.",
    stars: 5,
    date: "May 2024",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Bolton, ON",
    text: "I've been going to Breezewood's store for my pool chemicals for over 10 years. Effie always knows exactly what my pool needs. The free water testing is invaluable.",
    stars: 5,
    date: "July 2024",
  },
  {
    id: 4,
    name: "Robert T.",
    location: "Nobleton, ON",
    text: "After another company failed to find our pool leak, Breezewood found and fixed it in one visit. They're the real deal — experienced, knowledgeable, and fair priced.",
    stars: 5,
    date: "August 2024",
  },
  {
    id: 5,
    name: "Maria S.",
    location: "Palgrave, ON",
    text: "Our pool liner replacement was handled beautifully. The team was clean, respectful of our property, and finished ahead of schedule. Couldn't be happier.",
    stars: 5,
    date: "September 2024",
  },
  {
    id: 6,
    name: "Tom B.",
    location: "Bolton, ON",
    text: "Three generations of Breezewood ownership and the quality just keeps getting better. Matt treats every customer like family. This is what local business should look like.",
    stars: 5,
    date: "June 2024",
  },
  {
    id: 7,
    name: "Christine H.",
    location: "Caledon East, ON",
    text: "Signed up for the Deluxe weekly maintenance package this year and it has been life-changing. Pool is always pristine and I never have to worry about chemistry.",
    stars: 5,
    date: "July 2024",
  },
  {
    id: 8,
    name: "James P.",
    location: "Bolton, ON",
    text: "When my pump failed on a July long weekend, Breezewood had someone out within 48 hours. Fast, professional, and the repair held perfectly all season.",
    stars: 5,
    date: "July 2024",
  },
] as const;

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pool Opening", href: "/services/pool-opening" },
      { label: "Pool Closing", href: "/services/pool-closing" },
      { label: "Weekly Maintenance", href: "/services/weekly-maintenance" },
      {
        label: "Repair & Leak Detection",
        href: "/services/repair-leak-detection",
      },
      { label: "Retail Store", href: "/services/retail-store" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
