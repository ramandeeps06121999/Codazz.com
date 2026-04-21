// ─── CITY × SERVICE CONTENT OVERRIDES REGISTRY ────────────────────────
// Hand-crafted unique content per city+service combination.
// Populated wave-by-wave. Any field left undefined falls back to the
// generator logic in city-service.ts.
//
// Goal: 80%+ unique content vs sibling pages to pass Google's
// Helpful Content Update (HCU) thresholds.
//
// Wave 1 (shipped 2026-04-20): Toronto — 9 services + hub.

import { torontoAiMlOverride } from './toronto/ai-ml';
import { torontoMobileAppDevelopmentOverride } from './toronto/mobile-app-development';
import { torontoWebDevelopmentOverride } from './toronto/web-development';
import { torontoProductDesignOverride } from './toronto/product-design';
import { torontoBlockchainWeb3Override } from './toronto/blockchain-web3';
import { torontoCloudDevopsOverride } from './toronto/cloud-devops';
import { torontoSaasDevelopmentOverride } from './toronto/saas-development';
import { torontoDigitalMarketingOverride } from './toronto/digital-marketing';
import { torontoGameDevelopmentOverride } from './toronto/game-development';

export interface CityServiceOverride {
  heroDescription?: string;
  servicesIntro?: string;
  processIntro?: string;
  techIntro?: string;
  industryExpertise?: string;
  faqs?: { q: string; a: string }[];
  whyCity?: { icon: string; title: string; desc: string }[];
  testimonials?: { name: string; company: string; role: string; quote: string }[];
}

// Keyed: [citySlug][serviceSlug]
export const cityServiceOverrides: Record<string, Record<string, CityServiceOverride>> = {
  toronto: {
    'ai-ml': torontoAiMlOverride,
    'mobile-app-development': torontoMobileAppDevelopmentOverride,
    'web-development': torontoWebDevelopmentOverride,
    'product-design': torontoProductDesignOverride,
    'blockchain-web3': torontoBlockchainWeb3Override,
    'cloud-devops': torontoCloudDevopsOverride,
    'saas-development': torontoSaasDevelopmentOverride,
    'digital-marketing': torontoDigitalMarketingOverride,
    'game-development': torontoGameDevelopmentOverride,
  },
};

export function getCityServiceOverride(
  citySlug: string,
  serviceSlug: string
): CityServiceOverride | undefined {
  return cityServiceOverrides[citySlug]?.[serviceSlug];
}
