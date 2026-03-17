import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WebXR Development Services',
  description: 'Browser-based AR and VR experiences with WebXR. Codazz builds immersive 3D web applications accessible on any device.',
  openGraph: {
    title: 'WebXR Development Services | Codazz',
    description: 'Browser-based AR and VR experiences with WebXR. Codazz builds immersive 3D web applications accessible on any device.',
    url: 'https://codazz.com/services/ar-vr/webxr-experiences',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/services/ar-vr/webxr-experiences',
  },
};


const jsonLd0 = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WebXR Experiences",
  "url": "https://codazz.com/services/ar-vr/webxr-experiences",
  "description": "Browser-based AR and VR experiences with WebXR. Codazz builds immersive 3D web applications accessible on any device.",
  "provider": {
    "@type": "Organization",
    "name": "Codazz",
    "url": "https://codazz.com"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  ],
  "serviceType": "WebXR Experiences",
  "isPartOf": {
    "@type": "Service",
    "name": "AR & VR",
    "url": "https://codazz.com/services/ar-vr"
  }
};

const jsonLd1 = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://codazz.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://codazz.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AR & VR",
      "item": "https://codazz.com/services/ar-vr"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "WebXR Experiences",
      "item": "https://codazz.com/services/ar-vr/webxr-experiences"
    }
  ]
};

export default function Page() {
  return (
    <>
      <PageClient />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd0) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd1) }}
        />
    </>
  );
}
