import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyBreezewood from "@/components/home/WhyBreezewood";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import ContactCTA from "@/components/home/ContactCTA";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Breezewood Pools Inc. | Bolton's Pool Experts Since 1976",
  description:
    "Breezewood Pools — Bolton's premier swimming pool service, repair, and retail store since 1976. Expert pool openings, closings, weekly maintenance, and a fully-stocked showroom. Call (905) 857-3830.",
  alternates: {
    canonical: BUSINESS.siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyBreezewood />
      <TestimonialsCarousel />
      <ContactCTA />
    </>
  );
}
