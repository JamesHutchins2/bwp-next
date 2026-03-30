"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlausible } from "next-plausible";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const plausible = usePlausible();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-bwp-dark text-white text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <span className="text-gray-300">
            274 Queen St S, Bolton, ON L7E 4Z5
          </span>
          <a
            href={BUSINESS.phoneHref}
            onClick={() => plausible("Phone Click", { props: { location: "navbar-utility" } })}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-bwp-blue transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo-color.png"
              alt="Breezewood Pools Inc."
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if ("children" in link && link.children) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-bwp-blue"
                          : "text-bwp-dark hover:text-bwp-blue"
                      }`}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="py-1">
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm font-semibold text-bwp-blue hover:bg-bwp-blue-light border-b border-gray-100"
                        >
                          All Services
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? "text-bwp-blue bg-bwp-blue-light"
                                : "text-bwp-dark hover:bg-bwp-blue-light hover:text-bwp-blue"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-bwp-blue"
                      : "text-bwp-dark hover:text-bwp-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-3 bg-bwp-blue hover:bg-bwp-blue-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Book a Service
            </Link>

            {/* Mobile phone — always visible below md */}
            <a
              href={BUSINESS.phoneHref}
              className="ml-2 flex items-center gap-1.5 text-sm font-semibold text-bwp-dark hover:text-bwp-blue transition-colors sm:hidden"
            >
              <PhoneIcon className="w-4 h-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={BUSINESS.phoneHref}
              onClick={() => plausible("Phone Click", { props: { location: "navbar-mobile" } })}
              className="flex items-center gap-1 text-sm font-semibold text-bwp-dark"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <PhoneIcon className="w-5 h-5 text-bwp-blue" />
              <span className="hidden xs:inline">{BUSINESS.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-bwp-dark hover:text-bwp-blue hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 pb-4">
            <div className="pt-2 space-y-1">
              {NAV_LINKS.map((link) => {
                if ("children" in link && link.children) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-bwp-dark"
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-bwp-blue"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 text-sm font-medium text-bwp-dark hover:text-bwp-blue"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 px-3">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-bwp-blue text-white font-semibold text-sm px-4 py-3 rounded-lg"
                >
                  Book a Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
