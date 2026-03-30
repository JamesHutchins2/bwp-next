import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import SectionHeader from "@/components/shared/SectionHeader";

const advantages = [
  "50+ years of uninterrupted service to Bolton & Caledon",
  "3rd generation family ownership — same values, every visit",
  "Certified technicians with hands-on training and experience",
  "LaMotte Spin Lab computerized water analysis — free in-store",
  "Flexible maintenance packages: Basic, Deluxe, or One-Time",
  "Full-service retail showroom with expert staff",
];

export default function WhyBreezewood() {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-max">
        {/* Row 1: Text left, visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <SectionHeader
              id="why-heading"
              eyebrow="The Breezewood Advantage"
              title="50+ Years of Local Pool Expertise"
              subtitle="We didn't just set up shop yesterday. Breezewood Pools has been serving Bolton families since 1976 — through three generations of ownership and thousands of satisfied customers."
            />
            <ul className="space-y-3 mb-8">
              {advantages.map((adv) => (
                <li key={adv} className="flex items-start gap-3">
                  <CheckCircleIcon
                    className="w-5 h-5 text-bwp-blue flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{adv}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-bwp-blue font-semibold text-sm hover:text-bwp-deep transition-colors"
            >
              Our full story →
            </Link>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "1976", label: "Year Founded" },
              { stat: "50+", label: "Years in Business" },
              { stat: "3rd", label: "Generation of Ownership" },
              { stat: "1000s", label: "Pools Serviced" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-bwp-blue-light rounded-2xl p-6 text-center"
              >
                <p className="font-heading text-4xl font-bold text-bwp-blue mb-1">
                  {stat}
                </p>
                <p className="text-gray-600 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Owner intro */}
        <div className="bg-gradient-to-br from-bwp-dark to-gray-900 rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-bwp-blue text-sm font-semibold uppercase tracking-widest mb-4">
              Meet the Owners
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Matt & Effie Gibbons
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              When Matt and Effie purchased Breezewood Pools in 2015, they
              became the third family to carry on a tradition built on integrity,
              reliability, and exceptional service. Matt brings over 15 years of
              business leadership experience and an MBA, while Effie&apos;s retail
              expertise and community roots keep Breezewood connected to the
              families it serves.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              &ldquo;Our goal is simple: treat every customer the way we&apos;d want to be
              treated. Whether you&apos;re booking your first pool opening or you&apos;ve
              been with us for 30 years, you get the same commitment to quality
              and service.&rdquo;
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-bwp-blue hover:bg-bwp-blue-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
