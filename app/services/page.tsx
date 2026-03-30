import type { Metadata } from "next";
import ServicePageHero from "@/components/services/ServicePageHero";
import ServiceCard from "@/components/services/ServiceCard";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Services Bolton ON | Openings, Closings, Maintenance & Repair",
  description:
    "Complete swimming pool services in Bolton, Caledon & the GTA. Pool openings, closings, weekly maintenance, leak detection, equipment repair, and retail store. Family-owned since 1976. Call (905) 857-3830.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const schemas = SERVICES.map((s) =>
    serviceSchema({
      name: s.title,
      description: s.description,
      serviceType: s.title,
      url: s.href,
    })
  );

  return (
    <>
      <SchemaOrg schema={schemas} />

      <ServicePageHero
        title="Full-Service Pool Care in Bolton & the GTA"
        subtitle="From the first warm day of spring through the last swim of summer — Breezewood Pools handles every aspect of your pool. One company, one phone number, total peace of mind."
        breadcrumbs={[{ label: "Services" }]}
        ctaLabel="Request a Quote"
        badge="All Services"
        videoSrc="/content/people_drinking_in_pool.mp4"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-12">
            <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-bwp-dark mb-4">
              Everything Your Pool Needs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Breezewood Pools has been the Bolton community&apos;s trusted partner for
              swimming pool service and supplies since 1976. Our fully-trained
              technicians and knowledgeable retail staff are ready to help with
              every aspect of pool ownership — from first opening to final closing
              and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                variant={index === 0 ? "featured" : "default"}
              />
            ))}
          </div>

          {/* Why choose Breezewood prose — GEO-optimized self-contained passage */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
            <h3 className="font-heading text-2xl font-bold text-bwp-dark mb-4">
              Why Bolton Families Choose Breezewood Pools
            </h3>
            <div className="prose prose-gray max-w-none text-gray-700">
              <p>
                Breezewood Pools Inc. was founded in Bolton, Ontario in 1976 and
                has grown to become the region&apos;s most trusted swimming pool
                service company. Unlike national chains, Breezewood is family-owned
                and locally operated — currently in its third generation of
                ownership under Matt and Effie Gibbons. This continuity means
                every technician and retail staff member is deeply invested in
                the community and the quality of their work.
              </p>
              <p>
                Our service team handles the full lifecycle of your pool: spring
                opening (removing and cleaning covers, reconnecting equipment,
                balancing water chemistry), summer maintenance (weekly chemical
                testing and balancing, debris removal, equipment monitoring),
                fall closing (winterization, water level adjustment, equipment
                storage), and everything in between including leak detection,
                liner replacement, equipment repair, and new installations.
              </p>
              <p>
                Our retail store at 274 Queen St S in Bolton carries a complete
                line of pool chemicals, accessories, equipment, covers, liners,
                and robotic pool cleaners. We offer free computerized water
                analysis using the state-of-the-art LaMotte Spin Lab — the most
                accurate water testing technology available — so you always know
                exactly what your pool water needs. Come visit our showroom!
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
