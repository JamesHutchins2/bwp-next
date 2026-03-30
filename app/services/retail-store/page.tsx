import type { Metadata } from "next";
import { BeakerIcon, ShoppingBagIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ServicePageHero from "@/components/services/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/services/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { serviceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Supply Store Bolton ON | Free Water Testing | Breezewood Pools",
  description:
    "Bolton's premier pool supply store. Full line of pool chemicals, equipment, accessories, covers, liners, and more. Free computerized water analysis using LaMotte Spin Lab. Visit our showroom at 274 Queen St S, Bolton.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/services/retail-store`,
  },
};

const productCategories = [
  {
    title: "Pool Chemicals",
    description: "Chlorine, shock, algaecides, pH adjusters, and complete chemical kits for every pool type.",
    icon: "🧪",
  },
  {
    title: "Equipment",
    description: "Pumps, filters, heaters, heat pumps, salt systems, UV systems, and automation.",
    icon: "⚙️",
  },
  {
    title: "Cleaners & Vacuums",
    description: "Robotic pool cleaners, manual vacuums, brushes, nets, and cleaning accessories.",
    icon: "🤖",
  },
  {
    title: "Covers & Blankets",
    description: "Safety covers, winter covers, solar blankets, and automatic cover systems.",
    icon: "🛡️",
  },
  {
    title: "Liners",
    description: "Replacement vinyl liners in a variety of patterns and styles for all pool shapes and sizes.",
    icon: "🏊",
  },
  {
    title: "Accessories",
    description: "Ladders, steps, lighting, water features, toys, floats, and everything in between.",
    icon: "✨",
  },
];

const faqs: FAQ[] = [
  {
    question: "Does Breezewood Pools offer free water testing?",
    answer:
      "Yes — Breezewood Pools offers free computerized water analysis at our Bolton store. Simply bring in a sample of your pool water (about 500mL / 16oz in a clean container, taken from elbow-depth in the deep end) and our staff will analyze it immediately using our state-of-the-art LaMotte Spin Lab. The results are instant and comprehensive: chlorine levels, pH, total alkalinity, calcium hardness, cyanuric acid, and more. Our staff will explain exactly what adjustments are needed and recommend the right products to get your water perfectly balanced.",
  },
  {
    question: "What water testing technology does Breezewood use?",
    answer:
      "We use the LaMotte Spin Lab, one of the most advanced computerized water analysis systems available. The Spin Lab analyzes your water sample automatically and delivers precise, quantified results for all key water chemistry parameters within minutes. Unlike traditional wet test kits (which rely on color comparisons that can be subjective), the Spin Lab provides objective, measurable results. We also have a traditional wet lab for additional tests. Our staff are trained to interpret the results and prescribe exactly the right chemical treatment for your specific pool.",
  },
  {
    question: "What brands of pool equipment do you carry?",
    answer:
      "As a member of the IPG (Independent Pool Group) buying cooperative, Breezewood Pools has access to a wide range of premium pool equipment brands at competitive prices. Our buying group membership means we can offer quality brands without the markups of smaller independent retailers. Our knowledgeable staff can recommend the right brand and model for your specific pool, budget, and needs. Ask us in-store or call for product availability.",
  },
  {
    question: "Can I order products if they aren't in stock?",
    answer:
      "Yes — through our IPG buying group network, we can order a wide range of products that may not be on our showroom floor. Lead times vary by product and supplier. For seasonal items (liners, safety covers, major equipment), we recommend ordering well in advance — particularly for spring installations. Contact us by phone or visit the store to discuss special orders.",
  },
  {
    question: "Do you sell products without service?",
    answer:
      "Absolutely. You are welcome to visit our store at 274 Queen St S in Bolton to browse and purchase products independently. Our staff is always happy to provide advice and guidance. You don't need to be a service customer to shop at Breezewood Pools — we serve the entire Bolton, Caledon, and GTA community.",
  },
];

export default function RetailStorePage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema({
          name: "Pool Supply Retail Store and Water Testing",
          description:
            "Full-service pool supply retail store in Bolton, Ontario. Free computerized water analysis, complete pool chemicals, equipment, accessories, liners, and covers.",
          serviceType: "Pool Retail",
          url: "/services/retail-store",
        })}
      />

      <ServicePageHero
        title="Pool Supply Store & Free Water Testing in Bolton"
        subtitle="Everything your pool needs, under one roof. Visit our Bolton showroom for a full line of pool chemicals, equipment, and accessories — plus free computerized water analysis."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Retail Store" },
        ]}
        ctaLabel="Get Directions"
        ctaHref={BUSINESS.social.googleMaps}
        badge="Showroom Open"
        videoSrc="/content/female_in_tube_drinking.mp4"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Water testing feature */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-2">
                Our Signature Service
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-4">
                Free Computerized Water Analysis
              </h2>
              <div className="prose prose-gray text-gray-700">
                <p>
                  One of the best things you can do for your pool is bring in a
                  water sample for a free professional analysis. We use the
                  state-of-the-art <strong>LaMotte Spin Lab</strong> —
                  the same technology used by the best pool professionals in the
                  industry. Unlike colour-matching test strips, the Spin Lab
                  delivers precise, quantified results in minutes.
                </p>
                <p>
                  Our knowledgeable staff will review your results with you, explain
                  what every parameter means, and recommend exactly the right products
                  to get your water balanced. No guessing, no over-treating — just
                  the right chemistry for your specific pool.
                </p>
              </div>
              <div className="mt-6 p-4 bg-bwp-blue-light rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <BeakerIcon className="w-5 h-5 text-bwp-blue" />
                  <span className="font-semibold text-bwp-dark text-sm">
                    How to prepare your water sample:
                  </span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Collect 500mL (16oz) in a clean container</li>
                  <li>• Sample from elbow-depth in the deep end</li>
                  <li>• Bring it in — we test immediately, no appointment needed</li>
                </ul>
              </div>
            </div>
            <div className="bg-bwp-blue-light rounded-3xl p-8 text-center">
              <BeakerIcon className="w-16 h-16 text-bwp-blue mx-auto mb-4" />
              <p className="font-heading text-2xl font-bold text-bwp-dark mb-2">
                Free Water Testing
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Powered by LaMotte Spin Lab technology — the most accurate
                computerized water analysis available.
              </p>
              <p className="text-bwp-blue font-semibold text-sm">No appointment needed</p>
            </div>
          </div>

          {/* Product categories */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBagIcon className="w-6 h-6 text-bwp-blue" />
              <h2 className="font-heading text-2xl font-bold text-bwp-dark">
                What We Carry
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <h3 className="font-heading font-bold text-bwp-dark mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IPG membership */}
          <div className="bg-bwp-dark rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                IPG Member — Better Selection, Better Prices
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                As a member of the Independent Pool Group (IPG), one of Canada&apos;s
                leading pool industry buying groups, Breezewood Pools has access to
                premium brands and products at competitive prices. Our buying group
                membership means more selection for you, and better value.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/IPGLogoNewFooter.png"
                alt="IPG — Independent Pool Group"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
          </div>

          {/* Store location */}
          <div className="mt-8 flex items-center gap-3 text-gray-600">
            <MapPinIcon className="w-5 h-5 text-bwp-blue flex-shrink-0" />
            <span className="text-sm">
              Visit our showroom:{" "}
              <a
                href={BUSINESS.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bwp-blue font-semibold hover:underline"
              >
                {BUSINESS.address.full}
              </a>
            </span>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Retail Store & Water Testing FAQs" />
      <ContactCTA />
    </>
  );
}
