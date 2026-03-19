import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/data/cities';
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
      },
      alternates: { canonical: `https://codazz.com/locations/${countryData.slug}` },
    };
  }

  const data = getCityBySlug(city);
  if (!data) return {};

  const countryLabels: Record<string, string> = { UAE: 'UAE', UK: 'UK', AU: 'Australia', CA: 'Canada', SA: 'Saudi Arabia', QA: 'Qatar', SG: 'Singapore', DE: 'Germany', IN: 'India', JP: 'Japan', KR: 'South Korea', NL: 'Netherlands', IE: 'Ireland', IL: 'Israel', PL: 'Poland', BR: 'Brazil', MX: 'Mexico', NG: 'Nigeria', KE: 'Kenya', VN: 'Vietnam', EG: 'Egypt', NZ: 'New Zealand', CH: 'Switzerland' };
  const locationLabel = countryLabels[data.country] ? `${data.name}, ${countryLabels[data.country]}` : `${data.name}, ${data.state}`;

  return {
    title: `Software Development Company in ${data.name} | Codazz`,
    description: `Codazz delivers custom software development, mobile apps, AI solutions, and web development in ${locationLabel}. ${data.isHQ ? 'Headquartered in Edmonton & Chandigarh with offices in New York & Dubai.' : ''} Get a free quote today.`,
    openGraph: {
      title: `Software Development Company in ${data.name} | Codazz`,
      description: `Codazz delivers custom software development, mobile apps, AI solutions, and web development in ${locationLabel}.`,
      url: `https://codazz.com/locations/${data.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://codazz.com/locations/${data.slug}`,
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

  const countryLabels: Record<string, string> = { UAE: 'UAE', UK: 'UK', AU: 'Australia', CA: 'Canada', SA: 'Saudi Arabia', QA: 'Qatar', SG: 'Singapore', DE: 'Germany', IN: 'India', JP: 'Japan', KR: 'South Korea', NL: 'Netherlands', IE: 'Ireland', IL: 'Israel', PL: 'Poland', BR: 'Brazil', MX: 'Mexico', NG: 'Nigeria', KE: 'Kenya', VN: 'Vietnam', EG: 'Egypt', NZ: 'New Zealand', CH: 'Switzerland' };
  const locationLabel = countryLabels[data.country] ? `${data.name}, ${countryLabels[data.country]}` : `${data.name}, ${data.state}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Codazz - ${data.name}`,
    url: `https://codazz.com/locations/${data.slug}`,
    priceRange: '$$-$$$',
    image: 'https://codazz.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      ...(['US','UK','AU','CA','DE','IN'].includes(data.country) ? { addressRegion: data.state } : {}),
      addressCountry: ({ UAE: 'AE', UK: 'GB', AU: 'AU', CA: 'CA', SA: 'SA', QA: 'QA', SG: 'SG', DE: 'DE', IN: 'IN', JP: 'JP', KR: 'KR', NL: 'NL', IE: 'IE', IL: 'IL', PL: 'PL', BR: 'BR', MX: 'MX', NG: 'NG', KE: 'KE', VN: 'VN', EG: 'EG', NZ: 'NZ', CH: 'CH' } as Record<string, string>)[data.country] || 'US',
    },
    areaServed: { '@type': 'City', name: data.name },
    serviceType: ['Web Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud & DevOps', 'SaaS Development', 'Digital Marketing'],
    sameAs: [
      'https://www.linkedin.com/company/codazz/',
      'https://www.instagram.com/codazz/',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codazz.com/locations' },
      { '@type': 'ListItem', position: 3, name: data.name, item: `https://codazz.com/locations/${data.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient city={data} />
    </>
  );
}
