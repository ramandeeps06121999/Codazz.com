import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'logo.clearbit.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https: http:; connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://api.web3forms.com https://*.vercel-insights.com https://*.google-analytics.com; frame-src 'self' https://www.googletagmanager.com; media-src 'self' blob:;" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old city+service slug pattern redirects
      { source: '/software-development-company-in-:city', destination: '/locations/:city/web-development', permanent: true },
      { source: '/app-development-company-in-:city', destination: '/locations/:city/mobile-app-development', permanent: true },
      { source: '/web-development-company-in-:city', destination: '/locations/:city/web-development', permanent: true },
      { source: '/digital-marketing-company-in-:city', destination: '/locations/:city/digital-marketing', permanent: true },
      { source: '/ai-development-company-in-:city', destination: '/locations/:city/ai-ml', permanent: true },
      { source: '/mobile-app-development-:city', destination: '/locations/:city/mobile-app-development', permanent: true },
      { source: '/web-development-:city', destination: '/locations/:city/web-development', permanent: true },
      { source: '/software-development-:city', destination: '/locations/:city/web-development', permanent: true },
    ];
  },
};

export default nextConfig;
