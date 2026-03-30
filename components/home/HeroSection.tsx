import Link from "next/link";
import { PhoneIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import VideoBackground from "@/components/shared/VideoBackground";
import { BUSINESS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <VideoBackground src="/content/family_in_pool.mp4" priority />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,51,204,0.82) 0%, rgba(50,152,203,0.70) 50%, rgba(0,20,80,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        {/* Eyebrow */}
        <p className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/25">
          Serving Bolton & Caledon Since 1976
        </p>

        {/* H1 */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance">
          Bolton&apos;s{" "}
          <span className="text-sky-300">Pool Experts</span>
          <br />
          You Can Trust
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed">
          Family-owned and community-trusted for over 50 years. We handle
          everything from pool openings and closings to weekly maintenance,
          repairs, and a fully-stocked retail store.
        </p>
        <p className="text-base text-blue-200 mb-10 max-w-2xl mx-auto">
          Serving Bolton, Caledon, Brampton, Vaughan & surrounding GTA communities.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-bwp-deep font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-blue-50 transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            <CalendarDaysIcon className="w-5 h-5" />
            Book a Service
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            <PhoneIcon className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
