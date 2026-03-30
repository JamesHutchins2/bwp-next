import Link from "next/link";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const chemicalServices = [
  "On-site computerized water analysis (LaMotte Spin Lab)",
  "Chemical balancing based on water test results",
  "Sanitizer pucks added (weekly)",
  "Weekly shock treatment",
  "Stain prevent & algaecide added",
  "Check and empty skimmer and pump baskets",
  "Backwash filter as required",
];

const cleaningServices = [
  "Surface skimming (leaves, debris)",
  "Full pool vacuum",
  "Brush pool steps",
  "Scrub waterline",
  "Monitor and restock chemical supply",
];

const packages = [
  {
    name: "Basic Service",
    subtitle: "Chemical Analysis & Balancing",
    description:
      "Keep your water perfectly balanced every visit — without lifting a finger. Ideal for owners who handle their own cleaning.",
    featured: false,
    includesCleaning: false,
  },
  {
    name: "Deluxe Service",
    subtitle: "Full Cleaning + Chemical Analysis",
    description:
      "Completely hands-off pool ownership. We handle chemistry and cleaning so you can enjoy your pool, not maintain it.",
    featured: true,
    includesCleaning: true,
  },
];

function FeatureRow({
  label,
  included,
}: {
  label: string;
  included: boolean;
}) {
  return (
    <li className="flex items-start gap-3 py-2.5">
      {included ? (
        <CheckCircleIcon
          className="w-5 h-5 text-bwp-blue flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
      ) : (
        <XCircleIcon
          className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
      )}
      <span
        className={`text-sm leading-snug ${
          included ? "text-gray-700" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </li>
  );
}

export default function MaintenancePackageTable() {
  return (
    <div>
      {/* Cards grid — centered, max-w-2xl so cards are comfortably wide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col rounded-2xl overflow-hidden transition-shadow duration-200 ${
              pkg.featured
                ? "ring-2 ring-bwp-blue shadow-xl hover:shadow-2xl"
                : "border border-gray-200 shadow-sm hover:shadow-md"
            }`}
          >
            {/* Card header */}
            <div
              className={`px-6 pt-6 pb-5 ${
                pkg.featured
                  ? "bg-bwp-blue text-white"
                  : "bg-gray-50 text-bwp-dark"
              }`}
            >
              {pkg.featured && (
                <span className="inline-flex items-center bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-xl mb-1">
                {pkg.name}
              </h3>
              <p
                className={`text-sm font-medium mb-3 ${
                  pkg.featured ? "text-blue-100" : "text-bwp-blue"
                }`}
              >
                {pkg.subtitle}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  pkg.featured ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {pkg.description}
              </p>
              <p
                className={`mt-4 text-sm font-semibold ${
                  pkg.featured ? "text-white" : "text-gray-500"
                }`}
              >
                Contact us for pricing
              </p>
            </div>

            {/* Feature list */}
            <div className="flex flex-col flex-1 bg-white px-6 py-4">
              {/* Chemical services group */}
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Chemical Services
              </p>
              <ul className="divide-y divide-gray-50 mb-4">
                {chemicalServices.map((f) => (
                  <FeatureRow key={f} label={f} included={true} />
                ))}
              </ul>

              {/* Physical cleaning group */}
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                Physical Cleaning
              </p>
              <ul className="divide-y divide-gray-50 mb-6">
                {cleaningServices.map((f) => (
                  <FeatureRow
                    key={f}
                    label={f}
                    included={pkg.includesCleaning}
                  />
                ))}
              </ul>

              {/* CTA — pushed to bottom via flex-1 */}
              <div className="mt-auto pt-2 border-t border-gray-100">
                <Link
                  href="/contact?service=weekly-maintenance"
                  className={`block w-full text-center font-bold text-sm px-4 py-3 rounded-xl transition-colors ${
                    pkg.featured
                      ? "bg-bwp-blue text-white hover:bg-bwp-blue-hover"
                      : "bg-gray-100 text-bwp-dark hover:bg-gray-200"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-xs text-gray-400 mt-6 text-center max-w-2xl mx-auto">
        * Chemicals are billed separately based on your pool&apos;s specific
        needs. All programs available weekly or bi-weekly. Service available May
        through Labour Day.
      </p>
    </div>
  );
}
