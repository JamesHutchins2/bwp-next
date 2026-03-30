import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Breezewood Pools Inc.",
  description:
    "Privacy Policy for Breezewood Pools Inc. — how we collect, use, and protect your information in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
  alternates: {
    canonical: `${BUSINESS.siteUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: false, // Privacy policy pages don't need to pass link equity
  },
};

const EFFECTIVE_DATE = "March 30, 2026";
const LAST_UPDATED = "March 30, 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-bwp-deep to-bwp-blue text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 [&_a]:text-blue-200 [&_a:hover]:text-white [&_span[aria-current]]:text-white [&_svg]:text-blue-300">
            <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-base max-w-2xl">
            Effective {EFFECTIVE_DATE} · Last updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-gray-700">

            {/* Introduction */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Breezewood Pools Inc. (&ldquo;Breezewood Pools&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is committed to protecting the privacy and security of
              your personal information. This Privacy Policy explains how we
              collect, use, disclose, and protect information when you visit our
              website at{" "}
              <a href={BUSINESS.siteUrl} className="text-bwp-blue hover:underline">
                {BUSINESS.siteUrl}
              </a>{" "}
              or interact with our services.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              This policy is governed by Canada&apos;s{" "}
              <em>Personal Information Protection and Electronic Documents Act</em>{" "}
              (PIPEDA) and Ontario&apos;s applicable privacy legislation. By using
              our website, you acknowledge that you have read and understood this
              policy.
            </p>

            {/* Section 1 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              1. Who We Are
            </h2>
            <p>
              Breezewood Pools Inc. is a family-owned swimming pool service and
              retail company located at {BUSINESS.address.full}. We have served
              the Bolton, Caledon, and Greater Toronto Area communities since
              1976. For privacy inquiries, contact us at:
            </p>
            <ul className="mt-3 mb-6 space-y-1 list-none pl-0">
              <li>
                <strong>Email:</strong>{" "}
                <a href={BUSINESS.emailHref} className="text-bwp-blue hover:underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href={BUSINESS.phoneHref} className="text-bwp-blue hover:underline">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <strong>Mail:</strong> {BUSINESS.address.full}
              </li>
            </ul>

            {/* Section 2 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              2. Information We Collect
            </h2>
            <p>We collect two categories of information:</p>

            <h3 className="font-heading text-base font-bold text-bwp-dark mt-5 mb-2">
              2a. Information You Provide Directly
            </h3>
            <p>
              When you submit a service request or contact us through our
              website, we collect the information you choose to provide,
              including:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service address (street, city, postal code)</li>
              <li>Preferred service dates</li>
              <li>Type of service requested</li>
              <li>Details about your pool or service needs</li>
              <li>
                Any photos or documents you choose to attach to your inquiry
              </li>
              <li>
                Email marketing consent (only if you explicitly opt in — see
                Section 5)
              </li>
            </ul>
            <p>
              This information is used solely to respond to your inquiry,
              provide the requested service, schedule appointments, and follow
              up on your service needs.
            </p>

            <h3 className="font-heading text-base font-bold text-bwp-dark mt-5 mb-2">
              2b. Analytics Data (Aggregated, Non-Personal)
            </h3>
            <p>
              We use{" "}
              <a
                href="https://plausible.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bwp-blue hover:underline"
              >
                Plausible Analytics
              </a>{" "}
              to understand how visitors use our website. Plausible is a
              privacy-first analytics platform. Here is exactly what this means
              for you:
            </p>
            <ul>
              <li>
                <strong>No cookies are used.</strong> Plausible does not set any
                cookies on your device.
              </li>
              <li>
                <strong>No personal data is collected or stored.</strong>{" "}
                Plausible does not collect or store your IP address, device
                identifiers, or any information that could identify you as an
                individual.
              </li>
              <li>
                <strong>No cross-site tracking.</strong> You are not tracked
                across different websites.
              </li>
              <li>
                <strong>Daily anonymization.</strong> Plausible generates a
                temporary, anonymized daily identifier using a hash that is
                automatically deleted and reset every 24 hours.
              </li>
              <li>
                <strong>Data stored in the EU.</strong> All aggregated analytics
                data is processed and stored on servers in Germany operated by
                European companies.
              </li>
            </ul>
            <p>
              The aggregated metrics Plausible provides include: pages visited,
              referral source (where visitors came from), browser and operating
              system type, device type (desktop/mobile/tablet), and
              approximate country/region. This data cannot be used to identify
              any individual visitor.
            </p>
            <p>
              Because Plausible collects no personal information and uses no
              cookies,{" "}
              <strong>
                no consent banner is required under PIPEDA or applicable
                Canadian privacy law.
              </strong>
            </p>

            {/* Section 3 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              Personal information collected through our contact form is used
              exclusively to:
            </p>
            <ul>
              <li>Respond to your service inquiries and quote requests</li>
              <li>Schedule and coordinate pool service appointments</li>
              <li>Follow up on services we have provided</li>
              <li>
                Send email marketing communications, only if you have given
                explicit consent (see Section 5)
              </li>
            </ul>
            <p>
              We do not use your personal information for automated
              decision-making, profiling, or any purpose beyond providing you
              with pool services.
            </p>

            {/* Section 4 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              4. Disclosure of Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to any
              third party. We may share your information only in the following
              limited circumstances:
            </p>
            <ul>
              <li>
                <strong>Service delivery:</strong> With staff or sub-contractors
                who assist in delivering the pool service you requested, under
                confidentiality obligations.
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by law, court
                order, or government authority.
              </li>
              <li>
                <strong>Business transition:</strong> In the event of a sale or
                transfer of our business, personal information may be
                transferred as a business asset, subject to the same privacy
                commitments.
              </li>
            </ul>
            <p>
              Your form submissions are transmitted to our appointment management
              system via a secure webhook. This system is configured and
              controlled by Breezewood Pools Inc.
            </p>

            {/* Section 5 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              5. Email Marketing & CASL Compliance
            </h2>
            <p>
              Canada&apos;s{" "}
              <em>Anti-Spam Legislation</em> (CASL) requires that we obtain
              your explicit consent before sending you commercial electronic
              messages. Our contact form includes an optional, unchecked
              checkbox through which you may consent to receive promotional
              emails from Breezewood Pools Inc. about our services, seasonal
              specials, and pool care tips.
            </p>
            <p>
              <strong>You are never automatically opted in.</strong> Checking
              this box is entirely voluntary and has no effect on whether we
              respond to your service request. You may unsubscribe from marketing
              emails at any time by clicking the unsubscribe link in any email
              we send, or by contacting us directly at{" "}
              <a href={BUSINESS.emailHref} className="text-bwp-blue hover:underline">
                {BUSINESS.email}
              </a>
              .
            </p>

            {/* Section 6 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain personal information collected through contact form
              submissions for as long as is reasonably necessary to provide
              services, maintain business records, and meet legal obligations —
              typically no longer than seven (7) years in accordance with
              standard Canadian business record-keeping practices. When personal
              information is no longer needed, it is securely deleted or
              anonymized.
            </p>
            <p>
              Analytics data collected by Plausible is retained indefinitely in
              aggregated, non-personal form. Because it cannot identify any
              individual, retention is not subject to PIPEDA&apos;s personal
              information retention limits.
            </p>

            {/* Section 7 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              7. Data Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to protect
              your personal information against unauthorized access, loss,
              misuse, or alteration. These measures include encrypted data
              transmission (HTTPS), access controls, and selecting service
              providers with strong security practices.
            </p>
            <p>
              However, no method of internet transmission is completely secure.
              We cannot guarantee absolute security of information transmitted
              online.
            </p>

            {/* Section 8 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              8. Your Rights Under PIPEDA
            </h2>
            <p>
              As a Canadian resident, you have the following rights regarding
              your personal information held by Breezewood Pools Inc.:
            </p>
            <ul>
              <li>
                <strong>Right of access:</strong> You may request a copy of the
                personal information we hold about you.
              </li>
              <li>
                <strong>Right to correction:</strong> You may request that
                inaccurate or incomplete information be corrected.
              </li>
              <li>
                <strong>Right to withdraw consent:</strong> You may withdraw
                consent for email marketing at any time. Withdrawal of consent
                will not affect any services already provided.
              </li>
              <li>
                <strong>Right to complain:</strong> You have the right to
                complain to the Office of the Privacy Commissioner of Canada
                (OPC) if you believe we have not handled your personal
                information appropriately. Visit{" "}
                <a
                  href="https://www.priv.gc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bwp-blue hover:underline"
                >
                  www.priv.gc.ca
                </a>{" "}
                for more information.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href={BUSINESS.emailHref} className="text-bwp-blue hover:underline">
                {BUSINESS.email}
              </a>
              . We will respond within 30 days.
            </p>

            {/* Section 9 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (such as
              Google Maps). We are not responsible for the privacy practices of
              those websites and encourage you to review their privacy policies
              before providing any personal information.
            </p>

            {/* Section 10 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our website is not directed at children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe a child has submitted personal information through our
              website, please contact us so we can delete it.
            </p>

            {/* Section 11 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or applicable law. When we
              make material changes, we will update the &ldquo;Last updated&rdquo; date at
              the top of this page. We encourage you to review this policy
              periodically.
            </p>

            {/* Section 12 */}
            <h2 className="font-heading text-xl font-bold text-bwp-dark mt-10 mb-4">
              12. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or how we handle your personal information, please
              contact our Privacy Officer:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 mt-4 not-prose">
              <p className="font-bold text-bwp-dark text-sm mb-1">
                Breezewood Pools Inc.
              </p>
              <p className="text-gray-600 text-sm">Privacy Officer</p>
              <p className="text-gray-600 text-sm mt-2">
                {BUSINESS.address.full}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                <a href={BUSINESS.emailHref} className="text-bwp-blue hover:underline">
                  {BUSINESS.email}
                </a>
              </p>
              <p className="text-gray-600 text-sm">
                <a href={BUSINESS.phoneHref} className="text-bwp-blue hover:underline">
                  {BUSINESS.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-bwp-blue hover:text-bwp-blue-hover transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
