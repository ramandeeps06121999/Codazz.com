'use client';

import { solutions } from '@/data/solutions';
import SolutionPageTemplate, { type SolutionPageData } from '@/components/SolutionPageTemplate';

function splitHeadline(headline: string): { title: string; accent: string } {
  const idx = headline.lastIndexOf(' Like ');
  if (idx !== -1) {
    return { title: headline.slice(0, idx), accent: headline.slice(idx + 1) };
  }
  // Fallback: last word as accent
  const words = headline.split(' ');
  return { title: words.slice(0, -1).join(' '), accent: words[words.length - 1] };
}

export default function SolutionPageClient({ slug }: { slug: string }) {
  const solution = solutions.find(s => s.slug === slug)!;
  const otherSolutions = solutions.filter(s => s.slug !== slug).slice(0, 3);
  const { title, accent } = splitHeadline(solution.headline);

  const pageData: SolutionPageData = {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: solution.name },
    ],
    hero: {
      badge: solution.badge,
      title,
      titleAccent: accent,
      description: solution.heroDescription,
      stats: solution.stats,
    },
    features: {
      label: 'Key Features',
      title: `Everything Your ${solution.appName}-Like`,
      titleDim: 'App Needs.',
      items: solution.features,
    },
    process: {
      label: 'Development Process',
      title: 'How We Build Your',
      titleDim: `${solution.appName} Clone.`,
      steps: solution.steps,
    },
    techStack: solution.techCategories,
    pricing: {
      plans: [
        {
          tier: 'MVP Launch',
          price: `Starting ${solution.startingPrice}`,
          desc: 'Core features to validate your market and acquire early users. Ship fast, learn faster.',
          features: [
            'Core app functionality',
            'User authentication & profiles',
            'Payment integration',
            'Basic admin dashboard',
            'App Store submission',
            '30-day post-launch support',
          ],
        },
        {
          tier: 'Full Platform',
          price: solution.priceRange,
          desc: 'Complete production-ready platform with advanced features, multiple apps, and scale-ready architecture.',
          features: [
            'Everything in MVP, plus:',
            'All advanced features',
            'Multiple native apps',
            'Admin analytics dashboard',
            'Performance optimization',
            'Dedicated SLA support',
          ],
          recommended: true,
        },
      ],
    },
    faqs: solution.faqs,
    otherSolutions: otherSolutions.map(s => ({
      name: s.headline,
      href: `/solutions/${s.slug}`,
      category: s.category,
      price: s.startingPrice,
    })),
    ctaTitle: `Your ${solution.appName}-Like App Starts Here.`,
  };

  return <SolutionPageTemplate data={pageData} />;
}
