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
  title: "Pool Opening Service Bolton ON | Breezewood Pools",
  description:
    "Professional pool opening service in Bolton, Caledon, and the GTA. Our trained technicians handle everything from cover removal to water balancing. Book early — slots fill fast. Call (905) 857-3830.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services/pool-opening`,
  },
};

const openingIncludes = [
  "Remove, clean, and store your winter cover",
  "Reconnect and reinstall all pool equipment",
  "Prime and start pump and filtration system",
  "Install return fittings, skimmer baskets, and ladders",
  "Fill pool to appropriate operating level",
  "On-site computerized water analysis (LaMotte Spin Lab)",
  "Initial chemical balancing (chemicals extra)",
  "Full equipment inspection and operational check",
  "Walk-through and review of equipment operation",
];

const faqs: FAQ[] = [
  {
    question: "When should I open my pool in Bolton, Ontario?",
    answer:
      "Most Bolton-area pools are ready to open between late April and mid-May, depending on overnight temperatures. Water temperature needs to be consistently above 10°C (50°F) before adding chemicals effectively. Opening too early in Ontario risks wasting chemicals if a cold snap is still possible. We typically begin booking pool openings in March and April, and slots fill up quickly — we recommend booking 4–6 weeks in advance. Waiting too long can lead to green water and algae growth, which requires additional chemicals and time to correct.",
  },
  {
    question: "What is included in a Breezewood Pools pool opening?",
    answer:
      "Our pool opening service includes: removing, cleaning, and storing your winter or safety cover; reconnecting and reinstalling all pool equipment (pump, filter, heater connections); priming and starting your circulation system; reinstalling return fittings, skimmer baskets, and pool ladders or stairs; filling the pool to the correct operating level; performing a full on-site computerized water analysis using our LaMotte Spin Lab technology; initial chemical balancing based on the water test results (chemicals billed separately); a complete equipment inspection; and a walk-through with you to confirm everything is operating correctly.",
  },
  {
    question: "How far in advance should I book a pool opening in the Bolton area?",
    answer:
      "We strongly recommend booking 4 to 6 weeks before your desired opening date. Our service schedule fills up quickly in April and May, especially for customers in Bolton, Caledon, and surrounding areas. Clients who book earliest get first choice of dates. If you wait until May to book, you may find your preferred dates unavailable. Contact us in March or early April to secure your spot for the season.",
  },
  {
    question: "Do you service pools in Caledon, Brampton, and surrounding GTA areas?",
    answer:
      "Yes — Breezewood Pools services pools throughout the Bolton, Caledon, Brampton, Vaughan, Kleinburg, Palgrave, Schomberg, Nobleton, and King City areas. We have been serving these communities since 1976. If you are unsure whether your address falls within our service area, please call us at (905) 857-3830 or use our contact form and we will confirm.",
  },
  {
    question: "What happens if I skip a year of proper pool opening?",
    answer:
      "Skipping a professional pool opening or delaying it can lead to several costly problems. Without proper water balancing, algae can bloom rapidly, turning the water green or cloudy. Imbalanced chemistry — particularly low pH or low chlorine — can damage your liner, corrode metal equipment, and cause scale buildup on your filter media. Additionally, if the cover was not properly maintained or removed, debris and organic matter can create significant water chemistry challenges. A professional opening catches these issues early and sets your pool up for a trouble-free season.",
  },
];

export default function PoolOpeningPage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema({
          name: "Pool Opening Service",
          description:
            "Professional swimming pool opening service in Bolton and Caledon, Ontario. Includes cover removal, equipment reconnection, water testing, and initial chemical balancing.",
          serviceType: "Pool Opening",
          url: "/services/pool-opening",
        })}
      />

      <ServicePageHero
        title="Pool Opening Service in Bolton & the GTA"
        subtitle="Get your pool ready for summer with our professional opening service. Our trained technicians handle everything — so you can dive in, not dig in."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Pool Opening" },
        ]}
        ctaLabel="Book Your Opening"
        ctaHref="/contact?service=pool-open"
        badge="Spring Service"
        videoSrc="/content/male_swimming_birdseye.mp4"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content — GEO-optimized */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-4">
                Professional Pool Opening — Done Right the First Time
              </h2>
              <div className="prose prose-gray max-w-none text-gray-700 mb-8">
                <p>
                  After a long Ontario winter, getting your pool open correctly
                  is the most important step for a great pool season. A poorly
                  executed pool opening can lead to weeks of water chemistry
                  problems, equipment issues, and costly repairs. Breezewood
                  Pools has been opening pools in Bolton, Caledon, and the
                  surrounding GTA since 1976 — we know exactly what it takes.
                </p>
                <p>
                  Our opening service begins with a careful removal of your
                  winter or safety cover. We clean the cover and store it
                  properly to extend its life. All pool equipment is reconnected,
                  including the pump, filter, heater, and any automation systems.
                  We prime the pump, start the circulation system, and check all
                  equipment for proper operation.
                </p>
                <p>
                  Once the water is circulating, we perform a comprehensive
                  on-site water analysis using our LaMotte Spin Lab — the most
                  advanced computerized water testing system available. Based on
                  the results, we add the necessary chemicals to establish a
                  properly balanced water chemistry. Balanced water at opening
                  prevents algae growth, protects your liner and equipment, and
                  ensures the water is safe for swimming as quickly as possible.
                  Chemicals are billed separately based on your pool&apos;s specific
                  needs.
                </p>
              </div>

              {/* What's included checklist */}
              <div className="bg-bwp-blue-light rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-bold text-lg text-bwp-dark mb-4">
                  What&apos;s Included in Your Pool Opening
                </h3>
                <ul className="space-y-2.5">
                  {openingIncludes.map((item) => (
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
                title="Book Early — Openings Fill Up Fast"
                message="Pool opening slots in Bolton and Caledon are in high demand from late April to mid-May. We recommend booking 4–6 weeks in advance to secure your preferred date."
                ctaLabel="Book Now"
                variant="warning"
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-bwp-dark rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Ready to Book?
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Contact us to schedule your pool opening. We&apos;ll confirm
                  availability and provide a quote based on your pool&apos;s size and
                  current condition.
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
                <div className="mt-6 pt-5 border-t border-gray-700">
                  <p className="text-xs text-gray-500">
                    Serving Bolton, Caledon, Brampton, Vaughan & surrounding GTA
                    communities since 1976.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Pool Opening FAQs" />
      <ContactCTA />
    </>
  );
}
