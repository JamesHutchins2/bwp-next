import type { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ServicePageHero from "@/components/services/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/services/FAQSection";
import UrgencyCallout from "@/components/services/UrgencyCallout";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Closing Service Bolton ON | Winterization | Breezewood Pools",
  description:
    "Professional pool closing and winterization in Bolton, Caledon, and the GTA. Protect your pool from freeze damage with Breezewood Pools. Book before Labour Day — slots fill fast. Call (905) 857-3830.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services/pool-closing`,
  },
};

const closingIncludes = [
  "Backwash and clean the filter",
  "Lower water level below skimmer and return lines",
  "Blow out and plug all plumbing lines",
  "Drain and winterize pump, filter, and heater",
  "Remove, clean, and store accessories (ladders, baskets, etc.)",
  "Add winterizing chemicals to balance water for the off-season",
  "Install and secure winter safety cover or tarp cover",
  "Final equipment inspection and anti-freeze treatment",
];

const faqs: FAQ[] = [
  {
    question: "When should I close my pool in Ontario?",
    answer:
      "In the Bolton and Caledon area, most pools should be closed between mid-September and mid-October. The general guideline is to close your pool when overnight temperatures consistently approach 10°C (50°F) or below. Closing too early means you lose swimming days; closing too late risks freezing damage to your plumbing and equipment. We recommend booking your closing in August to ensure you get your preferred September date — our schedule fills up quickly after Labour Day.",
  },
  {
    question: "What happens if a pool isn't properly winterized?",
    answer:
      "Improper pool closing is one of the most common causes of expensive pool damage in Ontario. If water remains in the pipes and equipment when temperatures drop below freezing, it can crack your PVC plumbing lines, damage the pump housing, crack the filter tank, and damage the heater heat exchanger. Even a small freeze crack can result in thousands of dollars in repairs the following spring. Proper winterization — including blowing out all lines, draining all equipment, and adding antifreeze where required — is essential to protect your investment through an Ontario winter.",
  },
  {
    question: "What chemicals do you add when closing a pool?",
    answer:
      "At closing, we add a specific set of winterizing chemicals to protect your pool water and equipment through the off-season. These typically include: a high-dose shock treatment (usually lithium or calcium hypochlorite) to eliminate all bacteria and algae; a long-acting algaecide specifically formulated for winter use; a stain and scale preventative to protect your liner and surfaces; and a pool closing kit that slowly releases chemicals over the winter. The exact chemical treatment depends on your pool's current water chemistry, which we test on-site using our LaMotte Spin Lab. Chemicals are billed separately.",
  },
  {
    question: "Do you offer combined opening and closing packages?",
    answer:
      "Yes — many of our customers book both their pool opening and closing services at the same time, often when we come out for the spring opening. This helps secure your preferred fall closing date well in advance, as September slots fill up quickly. Ask our team about combined service packages when you contact us.",
  },
  {
    question: "Should I use a safety cover or a standard winter tarp?",
    answer:
      "Safety covers are a significant upgrade over standard winter tarps. A properly installed safety cover keeps debris out of the pool, prevents algae growth over the winter (meaning a cleaner opening in spring), and provides an important safety barrier that can support the weight of a child or pet. Safety covers typically last 10–15 years and can actually save money on chemicals and opening costs over time. We carry and install a range of safety covers at our Bolton store. Standard tarp covers are also available and offer basic protection at a lower initial cost.",
  },
];

export default function PoolClosingPage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema({
          name: "Pool Closing Service",
          description:
            "Professional swimming pool closing and winterization in Bolton and Caledon, Ontario. Protects pool from freeze damage through the Ontario winter.",
          serviceType: "Pool Closing",
          url: "/services/pool-closing",
        })}
      />

      <ServicePageHero
        title="Pool Closing & Winterization in Bolton & the GTA"
        subtitle="Protect your pool investment through the Ontario winter. Our professional closing service ensures your pool is safe from freeze damage and ready for a smooth opening next spring."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Pool Closing" },
        ]}
        ctaLabel="Book Your Closing"
        ctaHref="/contact?service=pool-close"
        badge="Fall Service"
        videoSrc="/content/pool_being_skimmed.mp4"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-4">
                Don&apos;t Risk Winter Damage — Close Properly
              </h2>
              <div className="prose prose-gray max-w-none text-gray-700 mb-8">
                <p>
                  A proper pool closing is one of the most important services
                  you can invest in as a pool owner in Bolton and Caledon. The
                  Ontario winter brings freezing temperatures that can cause
                  significant — and expensive — damage to plumbing lines,
                  pumps, filters, heaters, and other pool equipment if water is
                  left in the system.
                </p>
                <p>
                  Breezewood Pools has been winterizing pools in this region
                  since 1976. Our trained technicians know exactly what it takes
                  to protect a pool through an Ontario winter: every line must
                  be blown out and plugged, every piece of equipment must be
                  drained and protected, and water chemistry must be correctly
                  balanced before the cover goes on.
                </p>
                <p>
                  Pools that are closed correctly are also significantly easier
                  to open the following spring. A well-winterized pool with the
                  right chemistry typically opens with clear water and minimal
                  chemical correction needed. Pools that were poorly closed
                  often open green, requiring days of treatment and additional
                  chemical expense before they&apos;re swim-ready.
                </p>
              </div>

              <div className="bg-bwp-blue-light rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-bold text-lg text-bwp-dark mb-4">
                  What&apos;s Included in Your Pool Closing
                </h3>
                <ul className="space-y-2.5">
                  {closingIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon
                        className="w-5 h-5 text-bwp-blue flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <UrgencyCallout
                title="Book Before Labour Day — September Slots Go Fast"
                message="Our fall closing schedule fills up quickly after August. Don't wait — book your pool closing in August to secure your preferred September date."
                ctaLabel="Book Now"
                variant="warning"
              />
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-bwp-dark rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Book Your Closing
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Protect your pool investment. Book your closing now to secure
                  your preferred date before our fall schedule fills.
                </p>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full text-center bg-bwp-blue hover:bg-bwp-blue-hover text-white font-semibold text-sm px-4 py-3 rounded-lg transition-colors"
                  >
                    Request a Quote Online
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="block w-full text-center border border-gray-600 text-gray-300 hover:text-white font-semibold text-sm px-4 py-3 rounded-lg transition-colors"
                  >
                    Call {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Pool Closing FAQs" />
      <ContactCTA />
    </>
  );
}
