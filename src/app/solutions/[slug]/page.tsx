import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { solutions } from '@/data/solutions';
import PageClient from './PageClient';

export function generateStaticParams() {
  return solutions.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find(s => s.slug === slug);
  if (!solution) return {};

  return {
    title: solution.seo.title,
    description: solution.seo.description,
    keywords: solution.seo.keywords,
    openGraph: {
      title: solution.seo.title,
      description: solution.seo.description,
      url: `https://codazz.com/solutions/${solution.slug}`,
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `${solution.name} - Codazz`,
        },
      ],
    },
    alternates: {
      canonical: `https://codazz.com/solutions/${solution.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find(s => s.slug === slug);
  if (!solution) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solution.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: solution.name,
    description: solution.seo.description,
    provider: {
      '@type': 'Organization',
      name: 'Codazz',
      url: 'https://codazz.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: `https://codazz.com/solutions/${solution.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codazz.com' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://codazz.com/solutions' },
      { '@type': 'ListItem', position: 3, name: solution.name, item: `https://codazz.com/solutions/${solution.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient slug={slug} />
    </>
  );
}
