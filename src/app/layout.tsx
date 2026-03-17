import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "@/components/CookieConsent";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import TechConstellation from "@/components/TechConstellation";
import { poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codazz.com"),
  title: {
    default: "Codazz | Custom Software Development Company",
    template: "%s | Codazz",
  },
  description:
    "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Dual headquarters in New York & Dubai — delivering worldwide.",
  keywords:
    "custom software development, web development, mobile app development, AI solutions, blockchain, New York, Dubai, USA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codazz.com",
    siteName: "Codazz",
    title: "Codazz | Custom Software Development Company",
    description:
      "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Dual headquarters in New York & Dubai — delivering worldwide.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Codazz - Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codazz",
    creator: "@codazz",
    title: "Codazz | Custom Software Development Company",
    description:
      "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Dual headquarters in New York & Dubai — delivering worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://codazz.com",
  },
  verification: {
    google: "bk5xt83LIShhQ9QrejYXCOg9lXhZubSY9ksIEtYrIVs",
  },
  icons: {
    icon: "/Favicon.png",
    apple: "/Favicon.png",
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "New York",
    "theme-color": "#ffffff",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Codazz",
  url: "https://codazz.com",
  logo: "https://codazz.com/logo.png",
  description:
    "Custom software development company founded by Raman Makkar. Dual headquarters in New York & Dubai. 46 locations across 24 countries. Best engineers from around the world working virtually.",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/codazz/",
    "https://www.facebook.com/codazz/",
    "https://www.instagram.com/codazz/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "Arabic"],
  },
  foundingDate: "2018",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "New York",
      addressCountry: "US",
    },
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 25,
    maxValue: 50,
  },
  founder: {
    "@type": "Person",
    name: "Raman Makkar",
    jobTitle: "CEO & Founder",
    url: "https://codazz.com/about",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Web Development",
        url: "https://codazz.com/services/web-development",
      },
      {
        "@type": "OfferCatalog",
        name: "Mobile App Development",
        url: "https://codazz.com/services/mobile-app-development",
      },
      {
        "@type": "OfferCatalog",
        name: "AI & Machine Learning",
        url: "https://codazz.com/services/ai-ml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GT-PJ46RCMN');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLHNY6HD88" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LLHNY6HD88');`,
          }}
        />
      </head>
      <body className={poppins.className}>
        <a href="#main-content" className="sr-only-focusable">Skip to main content</a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-PJ46RCMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <TechConstellation />
        {children}
        <CookieConsent />
        <ClarityAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
