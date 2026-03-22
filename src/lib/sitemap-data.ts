export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://codazz.com';

export const serviceSlugs = [
  'mobile-app-development', 'ai-ml', 'web-development', 'product-design',
  'blockchain-web3', 'cloud-devops', 'ar-vr', 'digital-marketing',
  'wordpress-cms', 'game-development', 'branding', 'saas-development',
  'ai-agent-development', 'cybersecurity', 'generative-ai', 'iot-development',
  'legacy-modernization', 'llm-integration', 'qa-testing', 'rag-development',
  'flutter-development',
  'nodejs-development',
];

export const subServices: Record<string, string[]> = {
  'mobile-app-development': ['ios-app-development', 'android-app-development', 'flutter-development', 'react-native-apps', 'cross-platform-apps'],
  'ai-ml': ['llm-integration', 'ai-automation', 'computer-vision', 'predictive-analytics', 'ai-chatbots'],
  'web-development': ['nextjs-development', 'saas-platforms', 'ecommerce-systems', 'api-backend', 'enterprise-portals'],
  'product-design': ['ui-ux-strategy', 'wireframing', 'prototyping', 'design-systems', 'brand-identity'],
  'blockchain-web3': ['smart-contracts', 'defi-protocols', 'nft-platforms', 'crypto-wallets', 'web3-dapps'],
  'cloud-devops': ['aws-architecture', 'kubernetes-docker', 'ci-cd-pipelines', 'infrastructure-as-code', 'performance-scaling'],
  'ar-vr': ['mobile-ar', 'vr-applications', 'webxr-experiences', 'apple-vision-pro', 'industrial-ar'],
  'digital-marketing': ['seo-services', 'google-ads-ppc', 'social-media-marketing', 'content-marketing', 'performance-analytics'],
  'wordpress-cms': ['custom-wordpress-themes', 'woocommerce-stores', 'headless-wordpress', 'strapi-sanity-cms', 'site-speed-optimisation'],
  'game-development': ['mobile-games', 'unity-development', 'unreal-engine', 'hyper-casual-games', 'multiplayer-liveops'],
  'branding': ['brand-strategy', 'logo-visual-identity', 'brand-guidelines', 'rebranding', 'motion-video-branding'],
  'saas-development': ['saas-mvp-development', 'multi-tenant-architecture', 'billing-subscriptions', 'auth-sso', 'analytics-dashboards'],
};

export const industrySlugs = [
  'fintech', 'healthcare', 'ecommerce', 'logistics', 'edtech', 'enterprise',
  'food-delivery', 'dating-social', 'travel-hospitality', 'real-estate', 'fitness-wellness',
  'on-demand', 'fantasy-sports', 'streaming-entertainment', 'grocery-retail', 'telemedicine',
];

export const blogSlugs = [
  'ai-app-development-guide-2026', 'ai-chatbot-development-cost', 'ai-development-companies-usa',
  'ai-agent-development-guide', 'ai-development-cost-guide-2026', 'ai-development-cost-usa',
  'ai-in-ecommerce-2026', 'ai-in-fintech-2026', 'ai-in-healthcare-2026', 'ai-trends-2026',
  'api-development-guide-2026', 'app-development-companies-abu-dhabi',
  'app-development-companies-bangalore', 'app-development-companies-dubai',
  'app-development-companies-new-york', 'app-development-companies-riyadh',
  'app-development-companies-saudi-arabia', 'app-development-cost-dubai', 'app-development-cost-usa',
  'apple-vision-pro-development-guide', 'aws-vs-gcp-vs-azure-2026',
  'blockchain-development-companies-usa', 'blockchain-development-cost',
  'chatgpt-integration-guide', 'choose-software-development-company',
  'choose-software-development-company-usa', 'custom-crm-development-guide',
  'custom-vs-off-the-shelf-software', 'dating-app-development-guide',
  'content-marketing-guide-2026', 'digital-marketing-cost-usa', 'ecommerce-app-development-cost', 'ecommerce-trends-2026',
  'education-app-development-guide', 'enterprise-software-development-guide',
  'fitness-app-development-guide', 'flutter-vs-react-native-2026',
  'food-delivery-app-cost', 'food-delivery-app-development-guide', 'healthcare-app-trends-2026',
  'how-much-does-app-development-cost-2026', 'how-to-build-ai-chatbot-business', 'how-to-build-fintech-app', 'how-to-build-healthcare-app',
  'how-to-build-marketplace-app', 'how-to-build-on-demand-app', 'in-house-vs-outsourcing-development',
  'iot-app-development-guide', 'logistics-app-development-guide', 'microservices-vs-monolith-2026',
  'mobile-app-development-cost-breakdown', 'mobile-app-marketing-strategy', 'mvp-development-guide',
  'native-vs-cross-platform-2026', 'nextjs-performance-optimization', 'nextjs-vs-react-2026',
  'ppc-vs-seo-2026', 'postgresql-vs-mongodb-2026', 'python-vs-nodejs-backend-2026',
  'kubernetes-vs-docker-guide', 'react-vs-angular-2026',
  'real-estate-app-development-guide', 'saas-development-cost-guide', 'saas-development-cost-usa',
  'saas-guide', 'saas-vs-custom-software-2026', 'seo-for-saas-companies-2026',
  'social-media-app-development-guide', 'software-development-companies-austin',
  'software-development-companies-dubai', 'software-development-cost-india',
  'startup-marketing-guide-2026', 'stripe-payment-integration-guide', 'aws-architecture-guide-2026',
  'cicd-pipeline-guide-2026',
  'top-10-unicorn-apps-2026', 'top-ai-development-companies-dubai',
  'top-app-development-companies-austin', 'top-app-development-companies-boston',
  'top-app-development-companies-canada', 'top-app-development-companies-chicago',
  'top-app-development-companies-dubai', 'top-app-development-companies-london',
  'top-app-development-companies-los-angeles', 'top-app-development-companies-miami',
  'top-app-development-companies-san-francisco', 'top-app-development-companies-seattle',
  'top-app-development-companies-usa', 'top-fintech-apps-2026', 'top-seo-companies-usa',
  'top-software-development-companies-canada', 'top-software-development-companies-usa',
  'mobile-game-development-guide', 'video-streaming-app-development',
  'taxi-booking-app-development', 'travel-app-development-guide',
  'app-monetization-strategies-2026',
  'grocery-delivery-app-development', 'telemedicine-app-development', 'fantasy-sports-app-development',
  'uber-like-app-development-guide', 'web-app-development-cost-2026',
  'web-development-companies-san-francisco', 'web-development-trends-2026',
  'web3-development-guide-2026', 'website-cost-usa',
  'wearable-app-development-guide', 'ar-app-development-guide',
  'offshore-vs-nearshore-development', 'agile-vs-waterfall-software-development',
  'how-to-find-cto-startup', 'product-roadmap-guide-2026',
  'app-security-best-practices-2026', 'gdpr-compliance-app-development',
  'lms-development-guide', 'hr-tech-app-development',
  'api-rate-limiting-guide', 'app-development-companies-toronto',
  'crypto-wallet-development-guide', 'load-testing-guide-2026',
  'mobile-app-testing-guide', 'multi-tenant-architecture-guide',
  'nft-marketplace-development-guide', 'proptech-trends-2026',
  'rental-property-app-development', 'saas-pricing-strategies-2026',
  'software-development-companies-edmonton', 'staff-augmentation-guide-2026',
  'subscription-billing-guide-2026', 'technical-interview-guide-2026',
  'fintech-app-development-guide', 'healthcare-app-development-guide',
  'app-development-cost-canada', 'app-development-cost-australia',
  'how-to-hire-remote-developers',
];

export const landingPageSlugs = [
  'dedicated-development-team',
  'software-outsourcing',
  'offshore-development',
];

export const allSolutionSlugs = [
  'uber-clone', 'airbnb-clone', 'doordash-clone', 'instacart-clone', 'netflix-clone',
  'tinder-clone', 'shopify-clone', 'whatsapp-clone', 'spotify-clone', 'tiktok-clone',
  'amazon-clone', 'linkedin-clone', 'zoom-clone', 'stripe-clone', 'slack-clone',
];

export const hireSlugs = [
  'react-developers', 'nodejs-developers', 'flutter-developers', 'react-native-developers', 'python-developers', 'ai-ml-engineers',
  'ios-developers', 'android-developers', 'blockchain-developers', 'devops-engineers', 'ui-ux-designers',
  'golang-developers', 'java-developers', 'aws-engineers', 'data-engineers', 'qa-engineers',
  'typescript-developers', 'vue-developers', 'cloud-architects', 'ml-engineers',
];

export const citySlugs = [
  // North America — US
  'new-york', 'san-francisco', 'los-angeles', 'chicago', 'austin',
  'seattle', 'miami', 'boston', 'denver', 'atlanta', 'dallas', 'houston',
  // North America — Canada
  'edmonton', 'toronto', 'vancouver', 'montreal', 'calgary', 'ottawa',
  'waterloo', 'halifax', 'winnipeg', 'victoria', 'quebec-city',
  // Middle East
  'dubai', 'abu-dhabi', 'riyadh', 'jeddah', 'doha', 'kuwait-city', 'manama', 'muscat',
  // Europe
  'london', 'manchester', 'birmingham', 'edinburgh', 'leeds', 'bristol',
  'glasgow', 'cambridge', 'berlin', 'munich', 'hamburg', 'frankfurt',
  'amsterdam', 'dublin', 'zurich', 'geneva', 'stockholm', 'copenhagen',
  'lisbon', 'barcelona', 'warsaw', 'tel-aviv',
  // Asia Pacific
  'singapore', 'bangalore', 'mumbai', 'delhi', 'chandigarh', 'pune', 'hyderabad',
  'ahmedabad', 'jaipur', 'kochi', 'tokyo', 'seoul', 'hong-kong',
  'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'canberra',
  'auckland',
  // Latin America
  'sao-paulo', 'mexico-city',
  // Africa
  'lagos', 'nairobi', 'cairo', 'cape-town', 'johannesburg', 'accra', 'kigali',
  // Southeast Asia
  'ho-chi-minh-city',
];

export const countrySlugs = [
  'usa', 'uae', 'uk', 'australia', 'canada', 'saudi-arabia', 'singapore',
  'germany', 'india', 'japan', 'south-korea', 'netherlands', 'ireland',
  'israel', 'poland', 'brazil', 'mexico', 'nigeria', 'kenya', 'vietnam',
  'egypt', 'new-zealand', 'switzerland', 'kuwait', 'bahrain', 'oman',
  'sweden', 'denmark', 'portugal', 'spain', 'hong-kong', 'south-africa',
  'ghana', 'rwanda',
];

export function buildUrlset(urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]): string {
  const entries = urls.map(u =>
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}
