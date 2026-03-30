import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaOrg from "@/components/shared/SchemaOrg";
import VideoBackground from "@/components/shared/VideoBackground";
import { personSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Breezewood Pools | Bolton's Pool Experts Since 1976",
  description:
    "The story of Breezewood Pools Inc. — Bolton's family-owned pool service company since 1976. Three generations of ownership. Meet current owners Matt & Effie Gibbons and learn our history.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/about`,
  },
};

const timelineEvents = [
  {
    year: "1976",
    title: "Founded by Carl Baker",
    description:
      "Breezewood Pools Inc. was founded in Bolton, Ontario by Carl Baker as a services-only company. Carl quickly built a reputation for excellent customer service through pool openings and closings across the Bolton area.",
  },
  {
    year: "1992",
    title: "Chris & Fred Baldwin Take the Helm",
    description:
      "When Carl retired, Chris and Fred Baldwin purchased the business and worked tirelessly to grow it into the proud organization it became. Chris ran the retail store, renowned for her deep knowledge of water chemistry. Fred managed the service side, known for his work ethic and quality workmanship. Together, they built Breezewood into the leading pool service company and retail store in Bolton and Caledon.",
  },
  {
    year: "2015",
    title: "Matt & Effie Gibbons — The Next Chapter",
    description:
      "Matt and Effie Gibbons purchased Breezewood from Chris and Fred in early 2015, becoming the third generation of family owners. They continue the same husband-wife management tradition and the same commitment to quality, integrity, and community that has defined Breezewood since its founding.",
  },
  {
    year: "Today",
    title: "Bolton's Trusted Pool Experts",
    description:
      "Nearly five decades after its founding, Breezewood Pools Inc. remains Bolton's premier swimming pool service and retail company — family-owned, community-focused, and dedicated to providing the highest quality products and service at competitive prices.",
  },
];

export default function AboutPage() {
  const schemas = [
    personSchema({
      name: "Matt Gibbons",
      jobTitle: "President",
      description:
        "Matt Gibbons is the President of Breezewood Pools Inc., Bolton's premier pool service and retail company. He purchased Breezewood in 2015 with his wife Effie, becoming the third generation of family ownership. Matt brings an MBA and over 15 years of business leadership experience to the company.",
    }),
    personSchema({
      name: "Effie Gibbons",
      jobTitle: "Co-Owner",
      description:
        "Effie Gibbons co-owns and helps manage Breezewood Pools Inc. alongside her husband Matt. She oversees the retail store and brings extensive background in education, retail operations, and community involvement.",
    }),
  ];

  return (
    <>
      <SchemaOrg schema={schemas} />

      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bwp-deep to-bwp-blue text-white py-16 sm:py-20">
        <VideoBackground src="/content/people_drinking_in_pool.mp4" />
        <div className="absolute inset-0 bg-bwp-deep/65" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span[aria-current]]:text-white [&_svg]:text-blue-300">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            About Breezewood Pools — Bolton&apos;s Pool Experts Since 1976
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Three generations of family ownership. Nearly five decades of trusted
            service. One commitment: the best pool service and products in Bolton,
            Caledon, and the GTA.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Our Mission
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-4">
              Quality Products, Exceptional Service
            </h2>
            <div className="prose prose-gray text-gray-700">
              <p>
                Breezewood Pools Inc. is Bolton&apos;s premier swimming pool service,
                repair, and retail store. Our mission is to provide high-quality
                products and service at competitive prices, delivered by people who
                genuinely care about the community they serve.
              </p>
              <p>
                We are your full-service pool partner — from opening day in
                spring through closing in fall, and everything in between. Our
                fully-stocked retail store offers free computerized water analysis
                using the state-of-the-art LaMotte Spin Lab, as well as a complete
                selection of pool chemicals, accessories, and equipment. Our service
                team handles openings, closings, weekly maintenance, repairs, and
                installations.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-10">
              50+ Years of History
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-bwp-blue-light"
                aria-hidden="true"
              />
              <div className="space-y-10">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className="flex gap-6 sm:gap-8 relative">
                    {/* Year bubble */}
                    <div className="flex-shrink-0 w-12 sm:w-16 flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                          index === timelineEvents.length - 1
                            ? "bg-bwp-blue text-white"
                            : "bg-white border-2 border-bwp-blue text-bwp-blue"
                        }`}
                      >
                        {event.year === "Today" ? "Now" : event.year.slice(2)}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-heading font-bold text-bwp-blue text-sm">
                          {event.year}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-bwp-dark">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Owner Bios */}
          <div>
            <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Meet the Owners
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-10">
              Matt & Effie Gibbons
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Matt */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-bwp-blue rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl mb-5">
                  MG
                </div>
                <h3 className="font-heading text-xl font-bold text-bwp-dark mb-1">
                  Matt Gibbons
                </h3>
                <p className="text-bwp-blue text-sm font-semibold mb-4">
                  President — Service Operations
                </p>
                <div className="prose prose-gray prose-sm text-gray-700">
                  <p>
                    Matt Gibbons grew up an avid swimmer, surrounded by pools in
                    his Mississauga neighbourhood. He learned about pool maintenance
                    young, helping care for his grandparents&apos; pool. His family
                    instilled a strong entrepreneurial spirit — his grandfather was
                    the founding President of Braun Canada.
                  </p>
                  <p>
                    After completing his B.A. at the University of Western Ontario,
                    Matt pursued a career in retail and commercial banking before
                    becoming General Manager of United Road Signs Corp. (URS) in
                    1999, building it into one of Ontario&apos;s leading traffic
                    management companies. He then completed an MBA before seeking
                    a new challenge — and found Breezewood Pools.
                  </p>
                  <p>
                    As President, Matt works hands-on managing the service side
                    of the business, bringing over 15 years of successful
                    business leadership to every customer interaction.
                  </p>
                </div>
              </div>

              {/* Effie */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="w-16 h-16 bg-bwp-deep rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl mb-5">
                  EG
                </div>
                <h3 className="font-heading text-xl font-bold text-bwp-dark mb-1">
                  Effie Gibbons
                </h3>
                <p className="text-bwp-blue text-sm font-semibold mb-4">
                  Co-Owner — Retail Operations
                </p>
                <div className="prose prose-gray prose-sm text-gray-700">
                  <p>
                    Effie grew up in an entrepreneurial family — her parents
                    operated a successful restaurant for decades. From a young
                    age, she absorbed the values of hard work, integrity, and
                    genuine customer care that continue to define how Breezewood
                    operates today.
                  </p>
                  <p>
                    After graduating from Humber College, Effie became a resource
                    teacher, helping children with special needs. Her retail
                    experience, gained through a career at The Bay, gave her
                    deep insight into customer service and store operations.
                  </p>
                  <p>
                    At Breezewood, Effie works alongside the store manager and
                    staff to ensure the retail experience — from water testing
                    to product selection — reflects the same standards of
                    knowledge and care the service team provides.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 bg-bwp-blue rounded-3xl p-8 sm:p-12 text-white text-center">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Our Core Values
            </h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              These values have guided every generation of Breezewood ownership,
              and they guide every decision we make today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  desc: "We tell you the truth about your pool and your options. Always.",
                },
                {
                  title: "Reliability",
                  desc: "When we say we'll be there, we'll be there. No surprises.",
                },
                {
                  title: "Quality",
                  desc: "We don't cut corners — on products, workmanship, or customer care.",
                },
              ].map((val) => (
                <div key={val.title} className="text-center">
                  <p className="font-heading font-bold text-xl mb-2">{val.title}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
