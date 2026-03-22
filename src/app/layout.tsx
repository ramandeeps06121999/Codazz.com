import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "@/components/CookieConsent";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import NavigationHelper from "@/components/NavigationHelper";
import ScrollProgress from "@/components/ScrollProgress";

import { poppins } from "@/lib/fonts";
import {
  BRAND_OG_IMAGE_PATH,
  BRAND_ORGANIZATION_LOGO_URL,
} from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codazz.com"),
  title: {
    default: "Codazz | Custom Software Development Company",
    template: "%s | Codazz",
  },
  description:
    "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Headquartered in Edmonton & Chandigarh with offices in New York & Dubai — delivering worldwide.",
  keywords:
    "custom software development, web development, mobile app development, AI solutions, blockchain, Edmonton, Canada, Chandigarh, India, New York, Dubai, USA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codazz.com",
    siteName: "Codazz",
    title: "Codazz | Custom Software Development Company",
    description:
      "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Headquartered in Edmonton & Chandigarh with offices in New York & Dubai — delivering worldwide.",
    images: [
      {
        url: BRAND_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Codazz - Custom Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codazz | Custom Software Development Company",
    description:
      "Codazz builds custom software, web apps, mobile apps, AI solutions, and blockchain platforms. Headquartered in Edmonton & Chandigarh with offices in New York & Dubai — delivering worldwide.",
    images: [BRAND_OG_IMAGE_PATH],
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
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Codazz",
  url: "https://codazz.com",
  logo: BRAND_ORGANIZATION_LOGO_URL,
  description:
    "Custom software development company founded by Raman Makkar. Headquartered in Edmonton (Canada) & Chandigarh (India) with offices in New York & Dubai. 50 locations across 24 countries. Best engineers from around the world working virtually.",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "IN",
    },
  ],
  sameAs: [],
  knowsAbout: [
    "Mobile App Development",
    "AI Development",
    "Machine Learning",
    "Web Development",
    "Blockchain Development",
    "Cloud Computing",
    "SaaS Development",
    "Custom Software Development",
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
      addressLocality: "Edmonton",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 100,
    maxValue: 200,
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
  areaServed: ["CA", "US", "GB", "AE", "AU", "SG"],
  serviceType: [
    "Mobile App Development",
    "Web Development",
    "AI Development",
    "SaaS Development",
    "UI/UX Design",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://codazz.com",
  name: "Codazz",
  description:
    "Custom software development company headquartered in Edmonton, Canada. We build mobile apps, web applications, AI solutions, and SaaS products.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://codazz.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
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
        <ScrollProgress />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
        <NavigationHelper />
        <CookieConsent />
        <ClarityAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
