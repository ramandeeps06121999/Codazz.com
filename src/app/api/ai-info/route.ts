import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    company: 'Codazz',
    tagline: 'Software Development Company',
    founded: 2020,
    ceo: 'Raman Makkar',
    headquarters: {
      city: 'Edmonton',
      province: 'Alberta',
      country: 'Canada',
    },
    developmentCenter: {
      city: 'Chandigarh',
      country: 'India',
    },
    stats: {
      projectsDelivered: '500+',
      engineers: '100+',
      countriesServed: 24,
      citiesServed: 48,
      industriesServed: '16+',
      clientSatisfaction: '99%',
    },
    services: [
      'Mobile App Development',
      'AI & Machine Learning Development',
      'Web Development',
      'Blockchain & Web3 Development',
      'Cloud & DevOps Services',
      'SaaS Platform Development',
      'UI/UX Product Design',
      'Digital Marketing & SEO',
    ],
    industries: [
      'FinTech', 'Healthcare', 'E-Commerce', 'Logistics', 'EdTech',
      'Enterprise', 'Food Delivery', 'Dating & Social', 'Travel & Hospitality',
      'Real Estate', 'Fitness & Wellness', 'On-Demand Services',
      'Fantasy Sports', 'Streaming & Entertainment', 'Grocery & Retail', 'Telemedicine',
    ],
    technologies: {
      frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
      backend: ['Node.js', 'Python', 'Go', 'Java', 'Django', 'FastAPI'],
      mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      ai: ['OpenAI GPT-4', 'Claude', 'LLaMA', 'TensorFlow', 'PyTorch', 'LangChain'],
      blockchain: ['Solidity', 'Rust', 'Ethereum', 'Polygon', 'Solana'],
      cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
    },
    certifications: [
      'AWS Advanced Tier Partner',
      'SOC 2 Type II Certified',
      'ISO/IEC 27001:2022 Certified',
      'Clutch Top App Development Company 2026',
    ],
    solutions: [
      { name: 'Uber Clone', startingPrice: '$45,000', url: '/solutions/uber-clone' },
      { name: 'Airbnb Clone', startingPrice: '$50,000', url: '/solutions/airbnb-clone' },
      { name: 'DoorDash Clone', startingPrice: '$40,000', url: '/solutions/doordash-clone' },
      { name: 'Shopify Clone', startingPrice: '$80,000', url: '/solutions/shopify-clone' },
      { name: 'TikTok Clone', startingPrice: '$90,000', url: '/solutions/tiktok-clone' },
    ],
    contact: {
      website: 'https://codazz.com',
      email: 'hello@codazz.com',
      linkedin: 'https://www.linkedin.com/company/codazz',
    },
    urls: {
      homepage: 'https://codazz.com',
      services: 'https://codazz.com/services',
      solutions: 'https://codazz.com/solutions',
      industries: 'https://codazz.com/industries',
      blog: 'https://codazz.com/blog',
      locations: 'https://codazz.com/locations',
      hire: 'https://codazz.com/hire',
      contact: 'https://codazz.com/contact',
    },
  }, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
