import type { Metadata } from "next";
import { WrenchScrewdriverIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import ServicePageHero from "@/components/services/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/services/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS, EQUIPMENT_TYPES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Repair & Leak Detection Bolton ON | Breezewood Pools",
  description:
    "Professional pool repair and leak detection in Bolton, Caledon & the GTA. Pump replacement, liner repair, equipment installation, and leak testing. Family-owned since 1976. Call (905) 857-3830.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services/repair-leak-detection`,
  },
};

const leakSigns = [
  "Water loss of more than ½ inch per day (normal evaporation is about ¼ inch)",
  "Air bubbles coming out of your return jets",
  "Pump has difficulty priming or maintaining prime",
  "Pool deck is heaving, sinking, or cracking",
  "Landscaped areas near the pool are wet or have standing water",
  "Unexpectedly high water bills",
  "Needing to add more water than usual on a regular basis",
];

const faqs: FAQ[] = [
  {
    question: "How do I know if my pool is leaking?",
    answer:
      "The most reliable way to check for a leak is the bucket test: fill a bucket with pool water to about an inch from the top, place it on your pool step or hang it on the pool wall, and mark both the water level in the bucket and the pool water level. After 24 hours, compare the two. If the pool has lost significantly more water than the bucket, you likely have a leak. Signs that clearly suggest a pool leak include: losing more than ½ inch of water per day (normal evaporation is about ¼ inch), air bubbles coming from return jets, the pump struggling to prime, wet areas or pooling water in your lawn near the pool, and cracks or heaving in your pool deck. If you notice any of these signs, call us — the sooner a leak is detected and repaired, the less damage and expense results.",
  },
  {
    question: "How much water loss per day is normal?",
    answer:
      "It is normal to lose approximately ¼ inch (6mm) of water per day from a combination of evaporation and splash-out during active swimming. This rate can increase on very hot, dry, or windy days. If you are consistently losing more than ½ inch of water per day, and particularly if that loss continues even when the pool is not being used or covered, it is worth investigating for a possible leak. Losses of 1 inch or more per day almost always indicate a leak that requires professional leak detection and repair.",
  },
  {
    question: "What pool repairs do you offer?",
    answer:
      "Breezewood Pools handles the full range of pool repair and maintenance work, including: pump replacement and repair; filter cleaning, media replacement, and tank repair; heater and heat pump repair and replacement; new vinyl liner installation; skimmer repair and replacement; return fitting replacement; coping repair and replacement; pool automation system installation and repair; UV sanitation system installation; salt system installation and repair; solar blanket and roller installation; robotic pool cleaner service; and lighting repair and replacement. If you have a pool problem, chances are we have fixed it before.",
  },
  {
    question: "Do you install new pool liners?",
    answer:
      "Yes — liner replacement is one of our core services. Vinyl pool liners typically last 8–15 years depending on water chemistry, UV exposure, and usage. Signs that your liner needs replacing include: visible fading or discolouration, persistent wrinkling or bead separation, small cracks or tears that are patched frequently, and persistent leaks. Breezewood carries and installs a variety of liner styles and patterns through our buying group (IPG), giving you good selection at competitive prices. Contact us for a liner consultation and measurement appointment.",
  },
  {
    question: "What pool equipment do you install and service?",
    answer:
      "Our technicians are trained to install and service all major categories of pool equipment. This includes single-speed, two-speed, and variable-speed pumps; cartridge, sand, and DE (diatomaceous earth) filters; gas, propane, and electric heat pumps; pool automation systems (remote control, app-based scheduling); UV sanitation systems and salt chlorinators; pool lighting (traditional and LED); solar blankets and rollers; robotic pool cleaners; and more. We stock parts and have access to a wide range of equipment through our IPG buying group. Call us for availability and pricing.",
  },
];

export default function RepairLeakDetectionPage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema({
          name: "Pool Repair and Leak Detection",
          description:
            "Professional swimming pool repair, equipment installation, and leak detection in Bolton and Caledon, Ontario. Pump, filter, heater, liner, and full equipment service.",
          serviceType: "Pool Repair",
          url: "/services/repair-leak-detection",
        })}
      />

      <ServicePageHero
        title="Pool Repair & Leak Detection in Bolton & the GTA"
        subtitle="From pump failures and liner repairs to full leak detection — our certified technicians diagnose and fix pool problems quickly and correctly. Don't wait; small problems become big ones."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Repair & Leak Detection" },
        ]}
        ctaLabel="Request a Service Call"
        videoSrc="/content/plumber_fixing_a_leak.mp4"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* General Repairs */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-bwp-blue-light rounded-xl flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-5 h-5 text-bwp-blue" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-bwp-dark">
                  General Pool Service & Repair
                </h2>
              </div>
              <div className="prose prose-gray text-gray-700 mb-6">
                <p>
                  Pool equipment fails. When it does, you need a reliable,
                  experienced technician who can diagnose the problem and fix it
                  right the first time. Breezewood Pools has been servicing and
                  repairing pool equipment in the Bolton and Caledon area since
                  1976. Our technicians have seen — and solved — virtually every
                  pool problem there is.
                </p>
                <p>
                  We handle the full range of pool repairs: pumps, filters,
                  heaters, salt systems, UV systems, automation, lighting,
                  liners, coping, and more. We carry parts and have access to
                  a wide equipment selection through our IPG buying group
                  membership, which means faster repair times and competitive
                  pricing.
                </p>
              </div>
              {/* Equipment grid */}
              <div className="grid grid-cols-2 gap-2">
                {EQUIPMENT_TYPES.map((eq) => (
                  <div
                    key={eq}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-bwp-blue flex-shrink-0" />
                    <span className="text-xs text-gray-700">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leak Detection */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-bwp-blue-light rounded-xl flex items-center justify-center">
                  <MagnifyingGlassIcon className="w-5 h-5 text-bwp-blue" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-bwp-dark">
                  Pool Leak Detection
                </h2>
              </div>
              <div className="prose prose-gray text-gray-700 mb-6">
                <p>
                  At some point, nearly every pool owner gets the nagging
                  feeling that they&apos;re adding water more frequently than usual.
                  Sometimes a leak is obvious — water dropping by inches every
                  day. More often, it&apos;s gradual, and homeowners aren&apos;t sure if
                  they have a leak or it&apos;s just evaporation.
                </p>
                <p>
                  Either way, the issue can&apos;t be ignored. If you have a leak,
                  every day you delay leads to increased water bills, higher
                  chemical costs, and potential damage to your pool equipment,
                  liner, deck, and surrounding landscape.
                </p>
              </div>

              {/* Signs of a leak */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ExclamationCircleIcon className="w-5 h-5 text-amber-600" />
                  <h3 className="font-semibold text-amber-900 text-sm">
                    Signs Your Pool May Be Leaking
                  </h3>
                </div>
                <ul className="space-y-2">
                  {leakSigns.map((sign) => (
                    <li key={sign} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold text-xs mt-1">•</span>
                      <span className="text-amber-900 text-xs leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Repair & Leak Detection FAQs" />
      <ContactCTA />
    </>
  );
}
