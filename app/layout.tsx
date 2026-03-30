import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeasonalBanner from "@/components/layout/SeasonalBanner";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { localBusinessSchema, webSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "Breezewood Pools Inc. | Bolton's Pool Experts Since 1976",
    template: "%s | Breezewood Pools Bolton ON",
  },
  description:
    "Breezewood Pools Inc. — Bolton's premier pool service, repair, and retail store since 1976. Pool openings, closings, weekly maintenance, leak detection, and a fully-stocked showroom. Serving Bolton, Caledon & the GTA. Call (905) 857-3830.",
  keywords: [
    "pool service Bolton",
    "pool opening Bolton Ontario",
    "pool closing Bolton Ontario",
    "pool maintenance Bolton",
    "pool repair Bolton",
    "pool leak detection",
    "pool chemicals Bolton",
    "swimming pool service Caledon",
    "pool store Bolton",
    "Breezewood Pools",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: "Breezewood Pools Inc. | Bolton's Pool Experts Since 1976",
    description:
      "Bolton's premier pool service and retail store. Over 50 years of trusted service in Bolton, Caledon, and the GTA. Pool openings, closings, maintenance, repairs.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Breezewood Pools Inc. — Bolton's Pool Experts Since 1976",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breezewood Pools Inc. | Bolton's Pool Experts Since 1976",
    description:
      "Bolton's premier pool service and retail store. 48 years of trusted service. Call (905) 857-3830.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BUSINESS.siteUrl,
  },
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // TODO: Add before launch
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/*
          Plausible Analytics — cookieless, privacy-first analytics.
          Served via our own domain proxy (next-plausible withPlausibleProxy)
          to avoid ad-blocker interference and ensure accurate data.
          No cookies are set. No personal data is collected or stored.
          Compliant with PIPEDA and Canadian privacy law without a consent banner.
          See /privacy for full disclosure.
        */}
        <PlausibleProvider
          domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "breezewoodpools.ca"}
          trackOutboundLinks
          taggedEvents
          selfHosted={false}
        />
      </head>
      <body className="font-sans antialiased bg-bwp-white text-bwp-dark">
        <SchemaOrg schema={[localBusinessSchema(), webSiteSchema()]} />
        <SeasonalBanner />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
