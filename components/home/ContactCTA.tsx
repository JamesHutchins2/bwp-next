import Link from "next/link";
import { PhoneIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { BUSINESS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section
      className="bg-bwp-blue"
      aria-labelledby="contact-cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
        <h2
          id="contact-cta-heading"
          className="font-heading text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Enjoy Your Pool This Season?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Whether you need an opening, closing, weekly maintenance, or a repair —
          Breezewood Pools is here. Contact us today for a free quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-bwp-deep font-bold text-base px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            <CalendarDaysIcon className="w-5 h-5" />
            Book a Service
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 border-2 border-white text-white font-bold text-base px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
        <p className="text-blue-200 text-sm mt-8">
          Serving Bolton, Caledon, Brampton, Vaughan & surrounding GTA communities
        </p>
      </div>
    </section>
  );
}
