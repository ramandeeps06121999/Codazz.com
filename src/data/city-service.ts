import { CityData, getCityBySlug, cities } from './cities';
import { ServiceData, getServiceBySlug, services } from './services';

export interface CityServicePageData {
  // City data
  cityName: string;
  citySlug: string;
  state: string;
  stateAbbr: string;
  country: 'US' | 'UAE' | 'UK' | 'AU' | 'CA' | 'SA' | 'QA' | 'SG' | 'DE' | 'IN' | 'JP' | 'KR' | 'NL' | 'IE' | 'IL' | 'PL' | 'BR' | 'MX' | 'NG' | 'KE' | 'VN' | 'EG' | 'NZ' | 'CH';
  isHQ: boolean;
  // Service data
  serviceName: string;
  serviceSlug: string;
  badge: string;
  // Merged content
  heroContext: string;
  heroDescription: string;
  localIndustries: string[];
  industryExpertise: string;
  servicesIntro: string;
  processIntro: string;
  techIntro: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
  // SEO
  title: string;
  description: string;
  canonicalUrl: string;
}

function replacePlaceholders(text: string, city: CityData): string {
  return text
    .replace(/\{city\}/g, city.name)
    .replace(/\{state\}/g, city.state)
    .replace(/\{stateAbbr\}/g, city.stateAbbr);
}

const COUNTRY_LABELS: Record<string, string> = {
  UAE: 'UAE', UK: 'UK', AU: 'Australia', CA: 'Canada',
  SA: 'Saudi Arabia', QA: 'Qatar', SG: 'Singapore', DE: 'Germany', IN: 'India',
  JP: 'Japan', KR: 'South Korea', NL: 'Netherlands', IE: 'Ireland', IL: 'Israel',
  PL: 'Poland', BR: 'Brazil', MX: 'Mexico', NG: 'Nigeria', KE: 'Kenya',
  VN: 'Vietnam', EG: 'Egypt', NZ: 'New Zealand', CH: 'Switzerland',
};

function getLocationLabel(city: CityData): string {
  const label = COUNTRY_LABELS[city.country];
  if (label) return `${city.name}, ${label}`;
  return `${city.name}, ${city.state}`;
}

// ─── CITY-SPECIFIC CONTENT GENERATORS ─────────────────────────────────────
// These generate unique text per city+service combo to differentiate 540 pages
// and avoid Google's doorway page classification.

// Industry compliance/regulatory contexts by industry
const INDUSTRY_CONTEXT: Record<string, string> = {
  'FinTech': 'PCI-DSS compliance, SOC 2 certification, and financial regulatory frameworks',
  'Healthcare': 'HIPAA compliance, HL7 FHIR interoperability, and patient data encryption',
  'Real Estate': 'MLS integrations, property valuation APIs, and virtual tour infrastructure',
  'E-Commerce': 'payment gateway integrations, inventory sync, and conversion optimization',
  'Enterprise SaaS': 'multi-tenant architecture, SSO/SAML authentication, and usage-based billing',
  'Media & Entertainment': 'adaptive bitrate streaming, content DRM, and high-availability CDN architecture',
  'AI & Machine Learning': 'model training pipelines, GPU-optimized inference, and responsible AI guardrails',
  'Logistics': 'real-time GPS tracking, route optimization algorithms, and warehouse management integrations',
  'Education': 'LMS standards (SCORM/xAPI), accessibility compliance (WCAG 2.1), and live video infrastructure',
  'Government & Smart City': 'government security frameworks (FedRAMP/IRAP), open data APIs, and citizen identity verification',
  'Energy & Sustainability': 'SCADA system integration, IoT sensor networks, and grid management protocols',
  'Tourism & Hospitality': 'GDS/OTA integrations, dynamic pricing engines, and multi-language localization',
  'AgriTech': 'IoT sensor ingestion, satellite imagery processing, and supply chain traceability',
  'Automotive': 'CAN bus integration, OTA firmware delivery, and V2X communication protocols',
  'Gaming': 'low-latency multiplayer networking, anti-cheat systems, and in-app purchase flows',
  'Cybersecurity': 'zero-trust architecture, SIEM integration, and penetration testing frameworks',
  'Biotech': 'FDA 21 CFR Part 11 compliance, lab information management, and genomic data pipelines',
  'Aerospace': 'DO-178C compliance, real-time telemetry systems, and mission-critical fault tolerance',
  'Defence': 'classified-environment deployment, zero-trust networking, and ITAR compliance',
  'Oil & Gas Tech': 'SCADA/DCS integration, predictive maintenance models, and HSE compliance systems',
  'Mining Tech': 'remote equipment telemetry, safety monitoring systems, and ore-grade prediction models',
  'Fashion Tech': 'virtual try-on integration, size recommendation engines, and drop-release infrastructure',
  'Food Tech': 'cold-chain tracking, food safety compliance, and delivery route optimization',
  'CleanTech': 'carbon tracking APIs, ESG reporting frameworks, and renewable energy forecasting',
  'InsurTech': 'actuarial model integration, claims automation, and regulatory filing systems',
  'LegalTech': 'document analysis pipelines, e-discovery platforms, and privilege log automation',
  'Maritime': 'AIS data integration, port management systems, and crew scheduling optimization',
  'Robotics': 'ROS integration, real-time control loops, and computer vision pipelines',
  'VFX & Film': 'render farm orchestration, asset management pipelines, and real-time preview systems',
  'Space Tech': 'ground station communication, satellite telemetry parsing, and orbital mechanics APIs',
  'Sovereign Wealth': 'portfolio analytics, regulatory reporting, and multi-jurisdiction compliance',
  'Smart Manufacturing': 'Industry 4.0 connectivity, digital twin platforms, and predictive quality control',
  'IoT': 'device provisioning at scale, MQTT/CoAP protocols, and edge computing deployment',
  'PropTech': 'tenant portals, smart building integration, and property management workflows',
  'Telecom': '5G network slicing, OSS/BSS integration, and subscriber management platforms',
  'Retail Tech': 'POS integration, omnichannel inventory sync, and customer loyalty platforms',
};

// Generate intro paragraph for the Services Breakdown section
function generateServicesIntro(city: CityData, service: ServiceData): string {
  const ind1 = city.localIndustries[0];
  const ind2 = city.localIndustries[1] || ind1;
  const ctx1 = INDUSTRY_CONTEXT[ind1] || 'industry-specific compliance and integration requirements';
  const ctx2 = INDUSTRY_CONTEXT[ind2] || 'domain-specific workflows and data handling';

  return `${city.name}'s ${ind1.toLowerCase()} and ${ind2.toLowerCase()} sectors have specific technical demands that off-the-shelf solutions cannot address. Our ${service.shortName.toLowerCase()} services are built around ${ctx1} for ${ind1.toLowerCase()} clients, and ${ctx2} for ${ind2.toLowerCase()} businesses. Every engagement starts with a deep-dive into your domain so we ship software that meets both your users' expectations and your industry's regulatory standards.`;
}

// Generate intro paragraph for the Process section
function generateProcessIntro(city: CityData, service: ServiceData): string {
  const isLocal = city.isHQ;
  const locationNote = isLocal
    ? `As one of our dual headquarters, our ${city.name} team is available for in-person workshops, whiteboard sessions, and sprint reviews throughout the engagement`
    : `Our ${city.name} engagements follow the same rigorous process we use at our Edmonton and Chandigarh headquarters, with a dedicated project manager in your timezone`;

  return `${locationNote}. For ${service.shortName.toLowerCase()} projects serving ${city.name}'s ${city.localIndustries[0].toLowerCase()} market, we typically front-load discovery with stakeholder interviews and competitive analysis specific to ${city.state}'s regulatory environment. This ensures zero wasted sprints and a product that fits your market from day one.`;
}

// Generate intro paragraph for the Tech Stack section
function generateTechIntro(city: CityData, service: ServiceData): string {
  const ind1 = city.localIndustries[0];
  const ind2 = city.localIndustries[1] || ind1;
  const ctx = INDUSTRY_CONTEXT[ind1] || 'specialized infrastructure';

  return `For ${city.name} ${ind1.toLowerCase()} clients, our stack choices are driven by ${ctx}. ${ind2} projects in ${city.state} often require additional focus on data residency and performance at scale — we select tools that satisfy both technical requirements and regional compliance standards.`;
}

// Generate a unique industry expertise paragraph that connects the city's
// local industries with the specific service being offered.
function generateIndustryExpertise(city: CityData, service: ServiceData): string {
  const industries = city.localIndustries;
  const svc = service.shortName.toLowerCase();
  const top3 = industries.slice(0, 3).join(', ');
  const remaining = industries.slice(3);

  let text = `${city.name} is a major hub for ${top3}`;
  if (remaining.length > 0) {
    text += `, along with ${remaining.join(' and ')}`;
  }
  text += `. Our ${svc} work in ${city.name} is shaped by the specific demands of these sectors — `;
  text += `from regulatory compliance and data security requirements in ${industries[0]} `;
  text += `to the high-performance, user-facing experiences expected in ${industries[1] || industries[0]}. `;
  text += `We bring deep domain knowledge that generic agencies simply cannot match, `;
  text += `having delivered ${svc} solutions to businesses across ${city.state} since 2018.`;

  return text;
}

export function getCityServiceData(
  citySlug: string,
  serviceSlug: string
): CityServicePageData | null {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) return null;

  // Generate related city+service links (other services in same city)
  const relatedCityServices = services
    .filter(s => s.slug !== serviceSlug)
    .slice(0, 4)
    .map(s => ({
      name: s.shortName,
      citySlug: city.slug,
      serviceSlug: s.slug,
    }));

  // Process FAQs with city data
  const processedFaqs = service.faqs.map(faq => ({
    q: replacePlaceholders(faq.q, city),
    a: replacePlaceholders(faq.a, city),
  }));

  // Build hero description with city context
  const heroDescription = replacePlaceholders(service.heroDescription, city);

  // Build city-specific bridge content (unique per city+service combo)
  const industryExpertise = generateIndustryExpertise(city, service);
  const servicesIntro = generateServicesIntro(city, service);
  const processIntro = generateProcessIntro(city, service);
  const techIntro = generateTechIntro(city, service);

  // SEO metadata
  const title = `${service.heroHeadlinePrefix} Company in ${city.name}`;
  const locationLabel = getLocationLabel(city);
  const description = `${service.heroHeadlinePrefix} company in ${locationLabel}. Codazz delivers custom ${service.shortName.toLowerCase()} solutions. ${city.isHQ ? 'Headquartered in Edmonton & Chandigarh.' : '50 locations across 24 countries.'} Get a free quote today.`;
  const canonicalUrl = `https://codazz.com/locations/${city.slug}/${service.slug}`;

  return {
    cityName: city.name,
    citySlug: city.slug,
    state: city.state,
    stateAbbr: city.stateAbbr,
    country: city.country,
    isHQ: city.isHQ,
    serviceName: service.name,
    serviceSlug: service.slug,
    badge: service.badge,
    heroContext: city.heroContext,
    heroDescription,
    localIndustries: city.localIndustries,
    industryExpertise,
    servicesIntro,
    processIntro,
    techIntro,
    stats: city.stats,
    largeServices: service.largeServices,
    smallServices: service.smallServices,
    whyCity: city.whyCity,
    steps: service.steps,
    techCategories: service.techCategories,
    testimonials: city.testimonials,
    faqs: processedFaqs,
    relatedSubServices: service.relatedSubServices,
    relatedCityServices,
    title,
    description,
    canonicalUrl,
  };
}

// Generate all possible city+service combinations for static params
export function getAllCityServiceParams(): { city: string; service: string }[] {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}
