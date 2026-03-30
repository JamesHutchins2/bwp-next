import type { Metadata } from "next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContactForm from "@/components/contact/ContactForm";
import SchemaOrg from "@/components/shared/SchemaOrg";
import VideoBackground from "@/components/shared/VideoBackground";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Breezewood Pools | Book a Pool Service in Bolton ON",
  description:
    "Request pool service, ask about products, or book an appointment with Breezewood Pools in Bolton, Ontario. Call (905) 857-3830 or use our online form. We respond within one business day.",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={localBusinessSchema()} />

      {/* Page header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bwp-deep to-bwp-blue text-white py-14 sm:py-16">
        <VideoBackground src="/content/male_floating.mp4" />
        <div className="absolute inset-0 bg-bwp-deep/65" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span[aria-current]]:text-white [&_svg]:text-blue-300">
            <Breadcrumb items={[{ label: "Contact" }]} />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            Contact Breezewood Pools
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Request a service quote, ask about our products, or book an appointment.
            We respond to all inquiries within one business day.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form column */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar: contact info + map */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Contact card */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="font-heading font-bold text-lg text-bwp-dark mb-5">
                  Get In Touch
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={BUSINESS.phoneHref}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 bg-bwp-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneIcon className="w-4 h-4 text-bwp-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">
                          Phone
                        </p>
                        <p className="text-sm font-semibold text-bwp-dark group-hover:text-bwp-blue transition-colors">
                          {BUSINESS.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={BUSINESS.emailHref}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 bg-bwp-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <EnvelopeIcon className="w-4 h-4 text-bwp-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-0.5">
                          Email
                        </p>
                        <p className="text-sm font-semibold text-bwp-dark group-hover:text-bwp-blue transition-colors break-all">
                          {BUSINESS.email}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-bwp-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-4 h-4 text-bwp-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-0.5">
                        Showroom Address
                      </p>
                      <a
                        href={BUSINESS.social.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-bwp-dark hover:text-bwp-blue transition-colors"
                      >
                        {BUSINESS.address.full}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-bwp-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-4 h-4 text-bwp-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-0.5">
                        Hours
                      </p>
                      <p className="text-sm text-bwp-dark leading-relaxed">
                        {BUSINESS.hours.weekdays}<br />
                        {BUSINESS.hours.saturday}<br />
                        {BUSINESS.hours.sunday}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {BUSINESS.hours.seasonal}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service area */}
              <div className="bg-bwp-blue-light rounded-2xl p-5">
                <h3 className="font-heading font-bold text-bwp-dark text-sm mb-3">
                  Service Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS.serviceArea.map((area) => (
                    <span
                      key={area}
                      className="bg-white text-bwp-dark text-xs px-2.5 py-1 rounded-full border border-bwp-blue/20"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="bg-white text-gray-400 text-xs px-2.5 py-1 rounded-full border border-gray-200">
                    & more...
                  </span>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.5!2d-79.7368!3d43.8763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1e4b8e8b8e8b%3A0x8e8b8e8b8e8b8e8b!2s274+Queen+St+S%2C+Bolton%2C+ON+L7E+4Z5!5e0!3m2!1sen!2sca!4v1680000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Breezewood Pools location — 274 Queen St S, Bolton, ON"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
