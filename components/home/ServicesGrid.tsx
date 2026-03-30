import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
      <div className="container-max">
        <SectionHeader
          id="services-heading"
          eyebrow="What We Do"
          title="Full-Service Pool Care & Retail"
          subtitle="From opening day through closing, and everything in between — Breezewood Pools has you covered. One company, one phone number, total peace of mind."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              variant={index === 0 ? "featured" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
