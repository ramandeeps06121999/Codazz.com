import { Metadata } from 'next';
import PageClient from './PageClient';

const TITLE = 'AI in E-Commerce 2026: Personalization, Pricing & Beyond';
const DESCRIPTION = 'Learn how AI ecommerce solutions are transforming online retail with recommendation engines, dynamic pricing, visual search, chatbot commerce, and inventory prediction.';
const SLUG = 'ai-in-ecommerce-2026';
const DATE = '2026-03-20';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    publishedTime: DATE,
    url: `https://codazz.com/blog/${SLUG}`,
    images: [
      {
        url: 'https://codazz.com/blog_images/ai-in-ecommerce-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'AI in e-commerce personalization and dynamic pricing',
      },
    ],
  },
  alternates: {
    canonical: `https://codazz.com/blog/${SLUG}`,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE,
  dateModified: DATE,
  author: {
    '@type': 'Person',
    name: 'Raman Makkar',
    jobTitle: 'CEO',
    url: 'https://codazz.com/about/raman-makkar',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Codazz',
    url: 'https://codazz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://codazz.com/logo.png',
    },
  },
  image: 'https://codazz.com/blog_images/ai-in-ecommerce-2026.jpg',
  url: `https://codazz.com/blog/${SLUG}`,
  mainEntityOfPage: `https://codazz.com/blog/${SLUG}`,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  );
}
