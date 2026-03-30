import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

interface UrgencyCalloutProps {
  title: string;
  message: string;
  ctaLabel: string;
  ctaHref?: string;
  variant?: "warning" | "info" | "success";
}

const variantStyles = {
  warning: "bg-amber-50 border-amber-300 text-amber-900",
  info: "bg-bwp-blue-light border-bwp-blue text-bwp-deep",
  success: "bg-green-50 border-green-300 text-green-900",
};

const iconStyles = {
  warning: "text-amber-500",
  info: "text-bwp-blue",
  success: "text-green-600",
};

export default function UrgencyCallout({
  title,
  message,
  ctaLabel,
  ctaHref = "/contact",
  variant = "info",
}: UrgencyCalloutProps) {
  return (
    <div
      className={`rounded-2xl border-2 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 ${variantStyles[variant]}`}
      role="note"
    >
      <ExclamationTriangleIcon
        className={`w-6 h-6 flex-shrink-0 ${iconStyles[variant]}`}
        aria-hidden="true"
      />
      <div className="flex-1">
        <p className="font-semibold text-base mb-1">{title}</p>
        <p className="text-sm opacity-90 leading-relaxed">{message}</p>
      </div>
      <Link
        href={ctaHref}
        className="flex-shrink-0 bg-bwp-blue text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-bwp-blue-hover transition-colors whitespace-nowrap"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
