"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SchemaOrg from "@/components/shared/SchemaOrg";
import { faqPageSchema } from "@/lib/schema";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <SchemaOrg schema={faqPageSchema(faqs)} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          id="faq-heading"
          className="font-heading text-2xl sm:text-3xl font-bold text-bwp-dark mb-8 text-center"
        >
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-bwp-dark text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-bwp-blue flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
