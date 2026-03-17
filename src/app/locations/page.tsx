import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '46 Locations Across 24 Countries | Codazz',
  description: 'Codazz operates from 46 locations across the US, UK, UAE, Australia, Canada, Saudi Arabia, Singapore, Germany, India, Japan, South Korea, Netherlands, Ireland, Israel, Poland, Brazil, Mexico, Nigeria, Kenya, Vietnam, Egypt, New Zealand, Switzerland, and Qatar. Find a software development team near you.',
  openGraph: {
    title: '46 Locations Across 24 Countries | Codazz',
    description: 'Codazz operates from 46 locations across the US, UK, UAE, Australia, Canada, Saudi Arabia, Singapore, Germany, India, Japan, South Korea, Netherlands, Ireland, Israel, Poland, Brazil, Mexico, Nigeria, Kenya, Vietnam, Egypt, New Zealand, Switzerland, and Qatar. Find a software development team near you.',
    url: 'https://codazz.com/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://codazz.com/locations',
  },
};

export default function Page() {
  return <PageClient />;
}
