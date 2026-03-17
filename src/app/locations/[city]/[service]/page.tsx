import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityServiceData, getAllCityServiceParams } from '@/data/city-service';
import CityServicePageClient from './PageClient';

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return getAllCityServiceParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Codazz`,
      description: data.description,
      url: data.canonicalUrl,
      type: 'website',
    },
    alternates: {
      canonical: data.canonicalUrl,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city, service } = await params;
  const data = getCityServiceData(city, service);

  if (!data) {
    notFound();
  }

  // Combined JSON-LD schema (single @graph to avoid duplicate field errors)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${data.serviceName} in ${data.cityName}`,
        provider: {
          '@type': 'Organization',
          name: 'Codazz',
          url: 'https://codazz.com',
        },
        areaServed: {
          '@type': 'City',
          name: data.cityName,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: data.state,
          },
        },
        serviceType: data.serviceName,
        description: data.description,
        url: data.canonicalUrl,
      },
      {
        '@type': 'ProfessionalService',
        name: `Codazz ${data.cityName}`,
        url: `https://codazz.com/locations/${data.citySlug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: data.cityName,
          addressRegion: data.stateAbbr,
          addressCountry: ({ UAE: 'AE', UK: 'GB', AU: 'AU', CA: 'CA', SA: 'SA', QA: 'QA', SG: 'SG', DE: 'DE', IN: 'IN', JP: 'JP', KR: 'KR', NL: 'NL', IE: 'IE', IL: 'IL', PL: 'PL', BR: 'BR', MX: 'MX', NG: 'NG', KE: 'KE', VN: 'VN', EG: 'EG', NZ: 'NZ', CH: 'CH' } as Record<string, string>)[data.country] || 'US',
        },
        priceRange: '$$$',
        image: 'https://codazz.com/logo.png',
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codazz.com/locations' },
          { '@type': 'ListItem', position: 3, name: data.cityName, item: `https://codazz.com/locations/${data.citySlug}` },
          { '@type': 'ListItem', position: 4, name: data.serviceName, item: data.canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityServicePageClient
        cityName={data.cityName}
        citySlug={data.citySlug}
        state={data.state}
        stateAbbr={data.stateAbbr}
        isHQ={data.isHQ}
        serviceName={data.serviceName}
        serviceSlug={data.serviceSlug}
        heroContext={data.heroContext}
        heroDescription={data.heroDescription}
        badge={data.badge}
        localIndustries={data.localIndustries}
        industryExpertise={data.industryExpertise}
        servicesIntro={data.servicesIntro}
        processIntro={data.processIntro}
        techIntro={data.techIntro}
        stats={data.stats}
        largeServices={data.largeServices}
        smallServices={data.smallServices}
        whyCity={data.whyCity}
        steps={data.steps}
        techCategories={data.techCategories}
        testimonials={data.testimonials}
        faqs={data.faqs}
        relatedSubServices={data.relatedSubServices}
        relatedCityServices={data.relatedCityServices}
      />
    </>
  );
}
