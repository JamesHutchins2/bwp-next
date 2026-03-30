import type { Metadata } from "next";
import ServicePageHero from "@/components/services/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/services/FAQSection";
import MaintenancePackageTable from "@/components/services/MaintenancePackageTable";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weekly Pool Maintenance Bolton ON | Basic & Deluxe Packages",
  description:
    "Professional weekly pool maintenance in Bolton, Caledon & the GTA. Basic chemical balancing and Deluxe vacuum service packages. Free up your weekends — we keep your pool perfect. Call (905) 857-3830.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services/weekly-maintenance`,
  },
};

const faqs: FAQ[] = [
  {
    question: "Why is regular pool maintenance so important?",
    answer:
      "Maintaining a clean and chemically balanced pool is critically important for two reasons: the health and safety of everyone who swims in it, and protecting your backyard investment. Unbalanced pool chemistry can cause significant damage to your pool's liner, pump, filter, and heater — and you may not be able to tell there's a problem just by looking at the water. Clear water is not necessarily chemically balanced water. Proper chlorine levels (1–3 ppm), pH (7.2–7.6), total alkalinity (80–120 ppm), and calcium hardness (200–400 ppm) must be maintained consistently. Regular testing and balancing is the only way to ensure your pool is safe and your equipment is protected.",
  },
  {
    question: "What's included in the Basic pool maintenance package?",
    answer:
      "The Basic Service package includes: on-site computerized water chemical analysis using the LaMotte Spin Lab; chemical balancing based on water test results (chemicals billed separately); addition of regular maintenance chemicals including sanitizer pucks, weekly shock, stain prevent, and algaecide; checking and emptying skimmer and pump baskets; and backwashing the filter as required. This package keeps your water chemistry perfectly balanced every week without requiring you to do any chemical work.",
  },
  {
    question: "What does the Deluxe package include that Basic doesn't?",
    answer:
      "The Deluxe Service adds full physical cleaning on top of all the chemical services in the Basic package. Deluxe includes: skimming the pool surface and removing leaves from the bottom; a complete vacuum of your pool using our professional equipment; brushing the pool steps; scrubbing the waterline; and monitoring and restocking your chemical supply so you never run low. If you want to be completely hands-off with your pool, the Deluxe package gives you a perfectly maintained pool every week with zero effort on your part.",
  },
  {
    question: "Can I get bi-weekly service instead of weekly?",
    answer:
      "Yes — all of our weekly maintenance programs are also available on a bi-weekly basis. While weekly service is ideal for keeping your pool consistently clean and balanced (especially during high-use periods in July and August), bi-weekly service can be a good fit for pools that are lightly used or that have robotic pool cleaners handling debris between visits. Contact us to discuss which schedule makes the most sense for your specific pool.",
  },
  {
    question: "What months is the maintenance service available?",
    answer:
      "All service packages are available from early May, once your pool has been professionally opened, through Labour Day weekend (the first Monday in September). This coincides with the Ontario pool season and the period when our seasonal technicians are available. After Labour Day, many of our seasonal staff return to school, which is why the service season concludes at that time. For off-season needs — including repairs, equipment upgrades, or retail purchases — our store and service team remain available year-round.",
  },
  {
    question: "Do you provide a one-time vacuum service?",
    answer:
      "Yes — we offer a one-time Initial/Vacation vacuum service billed on an hourly basis, plus HST and the cost of any chemicals required. This is popular for the first vacuum of the season (often the most challenging), before hosting a pool party, or when you're going on vacation and need your pool cleaned before or after. Contact us for a quotation based on your pool's size and current condition.",
  },
];

export default function WeeklyMaintenancePage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema({
          name: "Weekly Pool Maintenance Service",
          description:
            "Professional weekly swimming pool maintenance in Bolton and Caledon, Ontario. Basic chemical balancing and Deluxe vacuum service packages available May through Labour Day.",
          serviceType: "Pool Maintenance",
          url: "/services/weekly-maintenance",
        })}
      />

      <ServicePageHero
        title="Weekly Pool Maintenance in Bolton & the GTA"
        subtitle="Enjoy your pool all summer without the work. Our flexible weekly maintenance packages keep your water crystal clear and chemically balanced — so you can relax, not work."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Weekly Maintenance" },
        ]}
        ctaLabel="Get a Maintenance Quote"
        ctaHref="/contact?service=weekly-maintenance"
        videoSrc="/content/pool_being_skimmed.mp4"
      />

      {/* Why it matters — white background */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-4">
              Why Professional Maintenance Matters
            </h2>
            <div className="prose prose-gray text-gray-700">
              <p>
                A swimming pool is a fantastic addition to your backyard — and
                the source of hours of fun with family and friends. But
                maintaining a clean and chemically balanced pool is a serious
                responsibility that many homeowners underestimate.
              </p>
              <p>
                Unbalanced pool chemistry is not just inconvenient — it can
                cause significant and costly damage to your pool equipment
                including the liner, pump, filter, and heater. More importantly,
                improperly treated water can be a source of water-borne illness.
                You may not be able to tell by looking: clear water is not
                necessarily safe water.
              </p>
              <p>
                Given how short the pool season is in Ontario — roughly May
                through Labour Day — why spend your valuable summer days testing
                chemicals and vacuuming when you could be swimming? At
                Breezewood Pools, making your pool maintenance carefree and
                simple is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package comparison — gray band so white cards pop */}
      <section className="py-14 bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-3">
              Choose Your Maintenance Package
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              All packages available weekly or bi-weekly, May through Labour Day.
              Chemicals billed separately.
            </p>
          </div>
          <MaintenancePackageTable />
        </div>
      </section>

      <FAQSection faqs={faqs} title="Weekly Maintenance FAQs" />
      <ContactCTA />
    </>
  );
}
