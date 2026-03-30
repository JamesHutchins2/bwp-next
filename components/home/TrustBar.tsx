import {
  CalendarDaysIcon,
  HomeIcon,
  StarIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { BUSINESS } from "@/lib/constants";

const trustItems = [
  {
    icon: CalendarDaysIcon,
    label: `Since ${BUSINESS.founded}`,
    sublabel: "50+ Years of Local Expertise",
  },
  {
    icon: HomeIcon,
    label: "3rd Generation",
    sublabel: "Family-Owned & Operated",
  },
  {
    icon: StarIcon,
    label: "5-Star Rated",
    sublabel: "Bolton's #1 Pool Service",
  },
  {
    icon: BeakerIcon,
    label: "LaMotte Spin Lab",
    sublabel: "Free Water Analysis",
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-bwp-blue text-white"
      aria-label="Trust signals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm sm:text-base leading-tight">
                  {item.label}
                </p>
                <p className="text-blue-100 text-xs sm:text-sm leading-tight">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
