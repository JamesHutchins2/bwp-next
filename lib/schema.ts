import { BUSINESS } from "./constants";

// ============================================================
// SCHEMA.ORG JSON-LD BUILDERS
// ============================================================

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    image: `${BUSINESS.siteUrl}/images/logo-color.png`,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postal,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    areaServed: BUSINESS.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.googleMaps],
    foundingDate: "1976",
    knowsAbout: [
      "Swimming Pool Service",
      "Pool Opening",
      "Pool Closing",
      "Pool Maintenance",
      "Pool Repair",
      "Leak Detection",
      "Pool Chemicals",
      "Pool Equipment",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.siteUrl}/#website`,
    url: BUSINESS.siteUrl,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
  };
}

export function serviceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${BUSINESS.siteUrl}${url}`,
    provider: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
    areaServed: BUSINESS.serviceArea.map((city) => ({
      "@type": "City",
      name: `${city}, Ontario`,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BUSINESS.siteUrl}/contact`,
      servicePhone: BUSINESS.phone,
    },
  };
}

export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; item: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.item}`,
    })),
  };
}

export function personSchema({
  name,
  jobTitle,
  description,
}: {
  name: string;
  jobTitle: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    worksFor: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
  };
}
