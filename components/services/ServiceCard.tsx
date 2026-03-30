import Link from "next/link";
import {
  SunIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// A simple snowflake icon since Heroicons doesn't have one
function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: SunIcon,
  snowflake: SnowflakeIcon,
  sparkles: SparklesIcon,
  wrench: WrenchScrewdriverIcon,
  "building-storefront": BuildingStorefrontIcon,
};

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  variant?: "default" | "featured";
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? SparklesIcon;

  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group block bg-bwp-blue text-white rounded-2xl p-7 hover:bg-bwp-blue-hover transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <p className="text-blue-100 text-sm leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:gap-2 transition-all">
          Learn more <ArrowRightIcon className="w-4 h-4" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:border-bwp-blue hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-bwp-blue-light rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-bwp-blue" />
      </div>
      <h3 className="font-heading font-bold text-lg text-bwp-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-bwp-blue group-hover:gap-2 transition-all">
        Learn more <ArrowRightIcon className="w-4 h-4" />
      </span>
    </Link>
  );
}
