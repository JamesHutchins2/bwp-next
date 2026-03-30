import Link from "next/link";
import { PhoneIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "@/components/shared/Breadcrumb";
import VideoBackground from "@/components/shared/VideoBackground";
import { BUSINESS } from "@/lib/constants";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
  badge?: string;
  videoSrc?: string;
}

export default function ServicePageHero({
  title,
  subtitle,
  breadcrumbs,
  ctaLabel = "Book This Service",
  ctaHref = "/contact",
  badge,
  videoSrc,
}: ServicePageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-bwp-deep to-bwp-blue text-white py-16 sm:py-20"
      aria-label={`${title} hero`}
    >
      {videoSrc && <VideoBackground src={videoSrc} />}
      {videoSrc && (
        <div className="absolute inset-0 bg-bwp-deep/65" aria-hidden="true" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span[aria-current]]:text-white [&_svg]:text-blue-300">
          <Breadcrumb items={breadcrumbs} />
        </div>

        {badge && (
          <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {badge}
          </span>
        )}

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="text-blue-100 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-bwp-deep font-bold text-base px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            <CalendarDaysIcon className="w-5 h-5" />
            {ctaLabel}
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-base px-6 py-3 rounded-xl hover:bg-white/10 transition-colors plausible-event-name=Phone+Click"
          >
            <PhoneIcon className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
