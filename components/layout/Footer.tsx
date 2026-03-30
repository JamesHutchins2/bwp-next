import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { BUSINESS, SERVICES } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bwp-dark text-bwp-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-color.png"
              alt="Breezewood Pools Inc."
              width={180}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Bolton&apos;s premier swimming pool service, repair, and retail store.
              Proudly serving the community since 1976.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                aria-label="Facebook"
                className="text-gray-400 hover:text-bwp-blue transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={BUSINESS.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="text-gray-400 hover:text-bwp-blue transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-bwp-blue text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-bwp-blue text-sm transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-2.5 text-gray-300 hover:text-bwp-blue text-sm transition-colors plausible-event-name=Phone+Click"
                >
                  <PhoneIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-start gap-2.5 text-gray-300 hover:text-bwp-blue text-sm transition-colors plausible-event-name=Email+Click"
                >
                  <EnvelopeIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-gray-300 hover:text-bwp-blue text-sm transition-colors plausible-event-name=Directions+Click"
                >
                  <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {BUSINESS.address.full}
                </a>
              </li>
              <li className="pt-1">
                <p className="text-gray-400 text-xs leading-relaxed">
                  {BUSINESS.hours.weekdays}<br />
                  {BUSINESS.hours.saturday}<br />
                  {BUSINESS.hours.sunday}
                </p>
              </li>
            </ul>

            {/* IPG Logo */}
            <div className="mt-5 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Member of:</p>
              <Image
                src="/images/IPGLogoNewFooter.png"
                alt="IPG — Independent Pool & Spa Group"
                width={100}
                height={30}
                className="h-8 w-auto brightness-0 invert opacity-70"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {currentYear} {BUSINESS.name}. All rights reserved. Serving
            Bolton, Ontario since 1976.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">·</span>
            <span className="text-gray-400">Website by Breezewood Pools Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
