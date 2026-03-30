"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="w-4 h-4 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="section-padding bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Customer Reviews"
          title="What Bolton Families Are Saying"
          subtitle="Don't take our word for it — hear from the families and homeowners who trust Breezewood Pools year after year."
          centered
        />

        {/* Google branding */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            aria-label="Google"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-gray-600 text-sm font-medium">Google Reviews</span>
          <div className="flex items-center gap-1 ml-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-bwp-dark">5.0</span>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <StarRating count={review.stars} />
                      <svg
                        className="w-6 h-6 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-9 h-9 bg-bwp-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-bwp-dark">
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {review.location} · {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5 text-bwp-dark" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5 text-bwp-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}
