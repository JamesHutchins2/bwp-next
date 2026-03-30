import { withPlausibleProxy } from "next-plausible";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Ensure trailing slashes for consistent canonical URLs
  trailingSlash: true,
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

// withPlausibleProxy rewrites /proxy/plausible.io/* → plausible.io/*
// This serves the Plausible script from our own domain, bypassing most ad blockers
// and ensuring accurate analytics data without requiring third-party script access.
export default withPlausibleProxy()(nextConfig);
