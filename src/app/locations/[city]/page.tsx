import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, CityData } from '@/data/cities';
import { countries, getCountryBySlug, getCitiesForCountry } from '@/data/countries';
import PageClient from './PageClient';
import CountryPageClient from './CountryPageClient';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const cityParams = cities.map(c => ({ city: c.slug }));
  const countryParams = countries.map(c => ({ city: c.slug }));
  return [...cityParams, ...countryParams];
}

const COUNTRY_TO_ISO: Record<string, string> = {
  US: 'US', UAE: 'AE', UK: 'GB', AU: 'AU', CA: 'CA', SA: 'SA', QA: 'QA',
  SG: 'SG', DE: 'DE', IN: 'IN', JP: 'JP', KR: 'KR', NL: 'NL', IE: 'IE',
  IL: 'IL', PL: 'PL', BR: 'BR', MX: 'MX', NG: 'NG', KE: 'KE', VN: 'VN',
  EG: 'EG', NZ: 'NZ', CH: 'CH',
};

const COUNTRY_LABELS: Record<string, string> = {
  UAE: 'UAE', UK: 'UK', AU: 'Australia', CA: 'Canada', SA: 'Saudi Arabia',
  QA: 'Qatar', SG: 'Singapore', DE: 'Germany', IN: 'India', JP: 'Japan',
  KR: 'South Korea', NL: 'Netherlands', IE: 'Ireland', IL: 'Israel',
  PL: 'Poland', BR: 'Brazil', MX: 'Mexico', NG: 'Nigeria', KE: 'Kenya',
  VN: 'Vietnam', EG: 'Egypt', NZ: 'New Zealand', CH: 'Switzerland',
};

const GEO_REGIONS: Record<string, string> = {
  US: 'US', UAE: 'AE', UK: 'GB', AU: 'AU', CA: 'CA', SA: 'SA', QA: 'QA',
  SG: 'SG', DE: 'DE', IN: 'IN', JP: 'JP', KR: 'KR', NL: 'NL', IE: 'IE',
  IL: 'IL', PL: 'PL', BR: 'BR', MX: 'MX', NG: 'NG', KE: 'KE', VN: 'VN',
  EG: 'EG', NZ: 'NZ', CH: 'CH',
};

const BLOG_LINKS: Record<string, { title: string; href: string }[]> = {
  'new-york': [
    { title: 'Top App Development Companies in New York', href: '/blog/app-development-companies-new-york' },
    { title: 'Top App Development Companies in USA', href: '/blog/top-app-development-companies-usa' },
    { title: 'How to Choose a Software Development Company in USA', href: '/blog/choose-software-development-company-usa' },
  ],
  'dubai': [
    { title: 'Top App Development Companies in Dubai', href: '/blog/app-development-companies-dubai' },
    { title: 'Top AI Development Companies in Dubai', href: '/blog/top-ai-development-companies-dubai' },
    { title: 'Top App Development Companies in Dubai', href: '/blog/top-app-development-companies-dubai' },
  ],
  'toronto': [
    { title: 'Top App Development Companies in Toronto', href: '/blog/app-development-companies-toronto' },
    { title: 'Top App Development Companies in Canada', href: '/blog/top-app-development-companies-canada' },
    { title: 'Top Software Development Companies in Canada', href: '/blog/top-software-development-companies-canada' },
  ],
  'london': [
    { title: 'Top App Development Companies in London', href: '/blog/top-app-development-companies-london' },
  ],
  'san-francisco': [
    { title: 'Top App Development Companies in San Francisco', href: '/blog/top-app-development-companies-san-francisco' },
    { title: 'Top Web Development Companies in San Francisco', href: '/blog/web-development-companies-san-francisco' },
  ],
  'chicago': [
    { title: 'Top App Development Companies in Chicago', href: '/blog/top-app-development-companies-chicago' },
  ],
  'boston': [
    { title: 'Top App Development Companies in Boston', href: '/blog/top-app-development-companies-boston' },
  ],
  'miami': [
    { title: 'Top App Development Companies in Miami', href: '/blog/top-app-development-companies-miami' },
  ],
  'austin': [
    { title: 'Top App Development Companies in Austin', href: '/blog/top-app-development-companies-austin' },
    { title: 'Top Software Development Companies in Austin', href: '/blog/software-development-companies-austin' },
  ],
  'los-angeles': [
    { title: 'Top App Development Companies in Los Angeles', href: '/blog/top-app-development-companies-los-angeles' },
  ],
  'seattle': [
    { title: 'Top App Development Companies in Seattle', href: '/blog/top-app-development-companies-seattle' },
  ],
  'edmonton': [
    { title: 'Top Software Development Companies in Edmonton', href: '/blog/software-development-companies-edmonton' },
  ],
  'bangalore': [
    { title: 'Top App Development Companies in Bangalore', href: '/blog/app-development-companies-bangalore' },
  ],
  'riyadh': [
    { title: 'Top App Development Companies in Riyadh', href: '/blog/app-development-companies-riyadh' },
  ],
  'abu-dhabi': [
    { title: 'Top App Development Companies in Abu Dhabi', href: '/blog/app-development-companies-abu-dhabi' },
  ],
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;

  const countryData = getCountryBySlug(city);
  if (countryData) {
    return {
      title: `Software Development Company in ${countryData.name} | Codazz`,
      description: `Codazz delivers custom software development, mobile apps, AI solutions, and web development across ${countryData.name}. Get a free quote today.`,
      openGraph: {
        title: `Software Development Company in ${countryData.name} | Codazz`,
        description: `Codazz delivers custom software across ${countryData.name}.`,
        url: `https://codazz.com/locations/${countryData.slug}`,
        type: 'website',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: `Codazz - Software Development in ${countryData.name}` }],
      },
      twitter: {
        card: 'summary_large_image',
        title: `Software Development Company in ${countryData.name} | Codazz`,
        description: `Codazz delivers custom software across ${countryData.name}.`,
      },
      alternates: { canonical: `https://codazz.com/locations/${countryData.slug}` },
    };
  }

  const data = getCityBySlug(city);
  if (!data) return {};

  const locationLabel = COUNTRY_LABELS[data.country]
    ? `${data.name}, ${COUNTRY_LABELS[data.country]}`
    : `${data.name}, ${data.state}`;

  const desc = (data as CityData & { metaDescription?: string }).metaDescription ||
    `Codazz delivers custom software development, mobile apps, AI solutions, and web development in ${data.name}, ${data.state}. Expert team, 500+ projects delivered, free quote in 24 hours.`;

  const geoRegion = data.country === 'US'
    ? `US-${data.stateAbbr}`
    : GEO_REGIONS[data.country] || 'CA-AB';

  return {
    title: `Software Development Company in ${data.name} | Codazz`,
    description: desc,
    keywords: `software development ${data.name}, app development ${data.name}, web development ${data.name}, custom software ${data.name}, mobile app development ${locationLabel}, AI development ${data.name}, SaaS development ${data.name}`,
    openGraph: {
      title: `Software Development Company in ${data.name} | Codazz`,
      description: `Codazz delivers custom software development, mobile apps, AI solutions, and web development in ${locationLabel}.`,
      url: `https://codazz.com/locations/${data.slug}`,
      type: 'website',
      images: [{ url: '/logo.png', width: 1200, height: 630, alt: `Codazz - Software Development Company in ${data.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@codazz',
      creator: '@codazz',
      title: `Software Development Company in ${data.name} | Codazz`,
      description: desc,
    },
    alternates: {
      canonical: `https://codazz.com/locations/${data.slug}`,
    },
    other: {
      'geo.region': geoRegion,
      'geo.placename': data.name,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;

  const countryData = getCountryBySlug(city);
  if (countryData) {
    const countryCities = getCitiesForCountry(countryData.code);
    return <CountryPageClient country={countryData} countryCities={countryCities} />;
  }

  const data = getCityBySlug(city);
  if (!data) notFound();

  const locationLabel = COUNTRY_LABELS[data.country]
    ? `${data.name}, ${COUNTRY_LABELS[data.country]}`
    : `${data.name}, ${data.state}`;

  const isoCountry = COUNTRY_TO_ISO[data.country] || 'US';

  const desc = (data as CityData & { metaDescription?: string }).metaDescription ||
    `Custom software development company serving ${data.name} businesses with mobile apps, web applications, AI solutions, and SaaS products.`;

  // ─── Merged ProfessionalService schema (single, comprehensive) ──────
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Codazz — Software Development Company in ${data.name}`,
    description: desc,
    url: `https://codazz.com/locations/${data.slug}`,
    telephone: '+1-403-604-8692',
    email: 'hello@codazz.com',
    priceRange: '$$-$$$',
    image: 'https://codazz.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      ...(['US', 'UK', 'AU', 'CA', 'DE', 'IN'].includes(data.country) ? { addressRegion: data.state } : {}),
      addressCountry: isoCountry,
    },
    areaServed: { '@type': 'City', name: data.name },
    serviceType: [
      'Mobile App Development', 'Web Development', 'AI & Machine Learning',
      'Cloud & DevOps', 'SaaS Development', 'UI/UX Design', 'Blockchain Development',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '527',
      bestRating: '5',
    },
    sameAs: [
      'https://www.linkedin.com/company/codazz/',
      'https://www.instagram.com/codazz/',
      'https://twitter.com/codazz',
      'https://clutch.co/profile/codazz',
    ],
  };

  // ─── Breadcrumb schema ─────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codazz.com/locations' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://codazz.com/locations/${data.slug}` },
    ],
  };

  // ─── FAQ schema ────────────────────────────────────────────────────
  const faqItems = data.faqs && data.faqs.length > 0 ? data.faqs : [
    { q: `How much does app development cost in ${data.name}?`, a: `App development in ${data.name} typically starts at $25,000 for an MVP and scales to $250,000+ for enterprise platforms.` },
    { q: `Does Codazz have an office in ${data.name}?`, a: `We serve ${data.name} clients through our global delivery model with headquarters in Edmonton, Canada and Chandigarh, India.` },
  ];
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  // ─── Review schema from testimonials ───────────────────────────────
  const reviewSchema = data.testimonials?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Codazz — ${data.name}`,
    url: `https://codazz.com/locations/${data.slug}`,
    review: data.testimonials.map(t => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      publisher: { '@type': 'Organization', name: t.company },
    })),
  } : null;

  // ─── Hreflang alternates for international cities ──────────────────
  const hreflangCities = cities.filter(c =>
    c.slug !== data.slug && c.name === data.name && c.country !== data.country
  );
  const hreflangLinks: Record<string, string> = {
    'x-default': `https://codazz.com/locations/${data.slug}`,
  };
  const langMap: Record<string, string> = {
    US: 'en-US', UK: 'en-GB', AU: 'en-AU', CA: 'en-CA', IN: 'en-IN',
    SG: 'en-SG', NZ: 'en-NZ', IE: 'en-IE', DE: 'de-DE', JP: 'ja-JP',
    KR: 'ko-KR', NL: 'nl-NL', BR: 'pt-BR', MX: 'es-MX', VN: 'vi-VN',
    UAE: 'ar-AE', SA: 'ar-SA', QA: 'ar-QA', EG: 'ar-EG',
    IL: 'he-IL', PL: 'pl-PL', KE: 'en-KE', NG: 'en-NG', CH: 'de-CH',
  };
  const selfLang = langMap[data.country] || 'en';
  hreflangLinks[selfLang] = `https://codazz.com/locations/${data.slug}`;
  hreflangCities.forEach(c => {
    const lang = langMap[c.country];
    if (lang) hreflangLinks[lang] = `https://codazz.com/locations/${c.slug}`;
  });

  const blogLinks = BLOG_LINKS[data.slug] || [];
  const lastUpdated = new Date().toISOString().split('T')[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      {reviewSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      )}

      {/* Hreflang tags */}
      {Object.entries(hreflangLinks).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Software Development Company in {data.name} — Codazz</h1>
        <p>{data.heroContext}</p>
        <p>Codazz is a custom software development company serving {locationLabel}. We build mobile apps, web platforms, AI solutions, SaaS products, and blockchain applications. {desc}</p>
        <p>Last updated: {lastUpdated}</p>
      </div>

      <PageClient city={data} blogLinks={blogLinks} lastUpdated={lastUpdated} />
    </>
  );
}
