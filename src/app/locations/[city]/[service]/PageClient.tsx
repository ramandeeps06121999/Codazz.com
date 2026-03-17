'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHeroForm from '@/components/ServiceHeroForm';

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface CityServicePageProps {
  cityName: string;
  citySlug: string;
  state: string;
  stateAbbr: string;
  isHQ: boolean;
  serviceName: string;
  serviceSlug: string;
  heroContext: string;
  heroDescription: string;
  badge: string;
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
}

// ─── SHARED STYLES ───────────────────────────────────────────────────────────

const sectionPad: React.CSSProperties = { padding: 'clamp(60px, 10vw, 120px) 0' };
const sectionBorder: React.CSSProperties = { borderTop: '1px solid rgba(0,0,0,0.05)' };
const heading2: React.CSSProperties = { fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 };
const subLabel: React.CSSProperties = { fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.25)', marginBottom: 20 };
const bodyText: React.CSSProperties = { fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75 };
const autoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 'clamp(16px, 2vw, 20px)' };

function hoverCard(e: React.MouseEvent, on: boolean) {
  const t = e.currentTarget as HTMLElement;
  t.style.borderColor = on ? 'rgba(79,70,229,0.2)' : 'rgba(0,0,0,0.06)';
  t.style.background = on ? 'rgba(79,70,229,0.03)' : 'rgba(0,0,0,0.015)';
  t.style.transform = on ? 'translateY(-4px)' : '';
  t.style.boxShadow = on ? '0 24px 60px rgba(0,0,0,0.06)' : '';
}

const cardStyle: React.CSSProperties = {
  padding: '36px 32px',
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: 28,
  background: 'rgba(0,0,0,0.015)',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CityServicePageClient(props: CityServicePageProps) {
  const {
    cityName, citySlug, state, stateAbbr, isHQ,
    serviceName, serviceSlug, heroContext, heroDescription, badge,
    localIndustries, industryExpertise, servicesIntro, processIntro, techIntro,
    stats, largeServices, smallServices, whyCity, steps,
    techCategories, testimonials, faqs,
    relatedSubServices, relatedCityServices,
  } = props;

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const whyRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const portfolioRef = useReveal() as React.RefObject<HTMLElement>;
  const testimonialsRef = useReveal() as React.RefObject<HTMLElement>;
  const industryRef = useReveal() as React.RefObject<HTMLElement>;
  const faqRef = useReveal() as React.RefObject<HTMLElement>;
  const relatedRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  // City-aware portfolio items based on local industries
  const PORTFOLIO_POOL: Record<string, { title: string; desc: string; metrics: string; gradient: string }> = {
    'FinTech': { title: 'Real-Time Payment Processing Engine for Series B Startup', desc: 'Built a PCI-DSS Level 1 compliant payment gateway handling ACH, wire, and card-present transactions with sub-200ms latency. Integrated KYC/AML screening via Plaid and Sardine APIs with automated SAR filing.', metrics: '$840M processed in first year', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Healthcare': { title: 'Patient Intake & Clinical Workflow Digitization for Regional Hospital Network', desc: 'Replaced paper-based intake across 14 facilities with a HIPAA-compliant portal supporting HL7 FHIR interoperability, e-prescribing via Surescripts, and real-time bed-management dashboards for nursing staff.', metrics: '42% reduction in patient wait times', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'HealthTech': { title: 'Remote Patient Monitoring Platform for Chronic Care Management', desc: 'Developed a BLE-connected wearable data pipeline ingesting vitals from 12 device types, with clinician alerting rules engine and CPT-code-based billing automation for RPM reimbursement.', metrics: '31% fewer ER readmissions', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Real Estate': { title: 'Automated Commercial Lease Management Platform for REIT Portfolio', desc: 'Built a multi-tenant lease abstraction system parsing 8,000+ PDF lease documents using OCR and NLP, with automated rent escalation tracking, CAM reconciliation, and FASB ASC 842 compliance reporting.', metrics: '67% faster lease renewals', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))' },
    'Real Estate Tech': { title: 'Predictive Property Valuation API for Mortgage Lender', desc: 'Trained gradient-boosted models on 2.4M transaction records with 340 features including satellite imagery analysis, walk-score data, and permit history to produce automated appraisal reports.', metrics: '94.2% accuracy vs. manual appraisals', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))' },
    'E-Commerce': { title: 'Headless Commerce Migration for D2C Brand Doing $50M ARR', desc: 'Migrated from monolithic Magento to a composable stack (Medusa.js, Algolia search, Stripe billing) with edge-rendered storefronts, cutting page load from 4.2s to 0.9s and enabling 15-minute deploys.', metrics: '23% increase in conversion rate', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'Enterprise SaaS': { title: 'Multi-Tenant RBAC & Audit System for Compliance-Heavy SaaS', desc: 'Architected a hierarchical permission model supporting 200+ granular scopes with SOC 2 Type II audit trails, SSO via SAML/OIDC, and SCIM provisioning across 3,400 enterprise accounts.', metrics: '99.97% uptime over 18 months', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'Media & Entertainment': { title: 'Ad-Supported Streaming Backend for Regional Broadcaster', desc: 'Engineered an ABR transcoding pipeline on AWS MediaConvert with SSAI ad-insertion, DRM packaging (Widevine + FairPlay), and a recommendation engine serving 2.1M MAU across 6 device platforms.', metrics: '3.8x increase in watch time', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Entertainment & Media': { title: 'Content Rights Management System for Streaming Distributor', desc: 'Built a territorial licensing database tracking 40,000+ titles across 190 territories with automated window management, royalty calculations, and integration with Nielsen measurement APIs.', metrics: '85% reduction in licensing disputes', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'AI & Machine Learning': { title: 'Document Intelligence Pipeline for Insurance Claims Processing', desc: 'Deployed a multi-model ensemble (LayoutLM + custom NER) extracting structured data from handwritten forms, medical records, and invoices with human-in-the-loop review for edge cases.', metrics: '78% of claims auto-adjudicated', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'AI & ML': { title: 'Demand Forecasting Engine for Quick-Commerce Grocery Startup', desc: 'Built an LSTM-based forecasting system predicting SKU-level demand at 15-minute intervals across 120 dark stores, feeding into automated reorder and markdown-pricing modules.', metrics: '19% reduction in food waste', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'AI & Deep Learning': { title: 'Visual Defect Detection System for Electronics Manufacturer', desc: 'Trained and deployed a YOLOv8 model on 180K annotated PCB images running on-prem via NVIDIA Triton, detecting solder bridges and component misalignment at 45 fps on the production line.', metrics: '96.8% defect catch rate', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'AI & DeepTech': { title: 'Conversational AI Agent for Tier-1 Bank Customer Service', desc: 'Developed a retrieval-augmented generation system over 12,000 policy documents with guardrails, intent routing to 340 flows, and seamless handoff to live agents with full conversation context.', metrics: '52% call deflection rate', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Logistics': { title: 'Last-Mile Route Optimization Engine for 3PL Provider', desc: 'Implemented a constraint-based solver (OR-Tools + custom heuristics) optimizing 8,000+ daily deliveries across dynamic time windows, vehicle capacities, and real-time traffic feeds from HERE API.', metrics: '28% reduction in fuel costs', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'Logistics & Shipping': { title: 'Container Tracking & ETA Platform for Freight Forwarder', desc: 'Aggregated AIS vessel data, port congestion feeds, and customs clearance status into a unified shipment visibility dashboard with proactive delay alerts and automated document generation.', metrics: '4.1-day average ETA accuracy', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'Logistics & Trade': { title: 'Cross-Border Trade Compliance Engine for Import/Export Firm', desc: 'Built an HS-code classification system with automated duty calculation across 30 trade agreements, denied-party screening, and electronic filing to customs authorities in 12 countries.', metrics: '91% reduction in shipment holds', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'Education': { title: 'Adaptive Learning Platform for K-12 Math Curriculum', desc: 'Built an item-response-theory engine that adjusts problem difficulty in real time based on student performance, with teacher dashboards showing mastery maps and intervention recommendations.', metrics: '0.8 grade-level improvement in 6 months', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'EdTech': { title: 'Cohort-Based Online Course Platform for Professional Upskilling', desc: 'Developed a live-class platform with breakout rooms, peer-review assignments, skill-assessment rubrics, and employer-verified digital credentials integrated with LinkedIn and Credly.', metrics: '74% course completion rate vs. 12% industry avg', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Government & Smart City': { title: 'Integrated Municipal Operations Center for City of 2M Residents', desc: 'Unified 14 siloed city systems (traffic signals, water SCADA, waste fleet GPS, 311 calls) into a single command dashboard with anomaly detection and automated incident routing.', metrics: '15% reduction in emergency response time', gradient: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.03))' },
    'Smart City': { title: 'Smart Parking & Traffic Flow Platform for Metropolitan Area', desc: 'Deployed 6,000 in-ground sensors and camera-based occupancy detection with a driver-facing app showing real-time availability, dynamic pricing, and integration with municipal citation systems.', metrics: '24% reduction in cruising-for-parking time', gradient: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.03))' },
    'GovTech': { title: 'Digital Permitting & Inspection Portal for State Government', desc: 'Replaced a 22-year-old mainframe system with a cloud-native permitting workflow handling building, electrical, and plumbing permits with GIS integration and automated plan-review routing.', metrics: 'Permit approval time cut from 47 to 12 days', gradient: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.03))' },
    'Energy & Sustainability': { title: 'Grid Load Balancing Dashboard for Regional Utility', desc: 'Developed a real-time SCADA integration layer with 15-second telemetry ingestion from 4,200 substations, predictive load curves, and automated demand-response dispatch during peak events.', metrics: '18% peak-load reduction', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Energy': { title: 'Wholesale Energy Trading & Risk Management Platform', desc: 'Built a position-management system for day-ahead and intraday power markets with VaR calculations, credit-limit enforcement, and automated settlement reconciliation against ISO invoices.', metrics: '$12M annual trading P&L improvement', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Energy & Oil': { title: 'Upstream Production Optimization Platform for Mid-Size E&P', desc: 'Built a digital twin of 340 wellheads integrating downhole sensor data, nodal analysis, and ESP pump curves to recommend optimal lift parameters and predict failures 72 hours in advance.', metrics: '11% increase in barrel-per-day output', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Energy Tech': { title: 'Battery Storage Management System for Utility-Scale Operator', desc: 'Engineered a bid-optimization algorithm for 200MW battery assets participating in day-ahead and real-time energy markets, with degradation-aware cycling strategies and FERC compliance reporting.', metrics: '$4.2M additional annual revenue', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Clean Energy': { title: 'Solar Farm Performance Monitoring for 120MW Portfolio', desc: 'Deployed an edge-to-cloud telemetry stack ingesting inverter, pyranometer, and weather data at 1-second intervals with ML-based soiling detection and automated O&M work-order generation.', metrics: '6.3% improvement in energy yield', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Renewable Energy': { title: 'Wind Turbine Predictive Maintenance Platform for 80-Turbine Farm', desc: 'Analyzed SCADA vibration and temperature data using isolation forests and LSTM autoencoders to predict gearbox and bearing failures, scheduling maintenance during low-wind windows.', metrics: '34% reduction in unplanned downtime', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'CleanTech': { title: 'Carbon Accounting & ESG Reporting Platform for Mid-Market Companies', desc: 'Built a Scope 1-2-3 emissions calculator integrating utility bills, fleet telematics, and supplier surveys with GHG Protocol methodology, generating TCFD and CDP-aligned reports automatically.', metrics: '200+ companies onboarded in year one', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Tourism & Hospitality': { title: 'Dynamic Pricing & Channel Manager for Boutique Hotel Group', desc: 'Built a rate-optimization engine analyzing competitor pricing, occupancy forecasts, and event calendars across OTAs (Booking.com, Expedia) with automated inventory allocation and parity monitoring.', metrics: '21% RevPAR improvement', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))' },
    'Tourism': { title: 'Concierge & Upsell Platform for Luxury Resort Chain', desc: 'Developed a guest-facing PWA with pre-arrival preferences, in-stay experience booking, and post-checkout review capture, integrated with Opera PMS and Micros POS for seamless billing.', metrics: '38% increase in ancillary revenue per guest', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))' },
    'Tourism Tech': { title: 'Contactless Guest Experience App for Resort Chain', desc: 'Developed a PWA handling mobile check-in, digital room keys via BLE, in-app F&B ordering, spa booking, and post-stay feedback with integration into Opera PMS and Micros POS systems.', metrics: '38% reduction in front-desk queues', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))' },
    'Travel Tech': { title: 'Multi-GDS Fare Aggregation API for Corporate Travel Platform', desc: 'Integrated Amadeus, Sabre, and Travelport feeds into a normalized fare-search API with policy-compliance filtering, unused-ticket tracking, and carbon-offset calculation per itinerary.', metrics: '14% average savings on corporate bookings', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))' },
    'AgriTech': { title: 'Precision Irrigation System for 15,000-Acre Row Crop Operation', desc: 'Deployed soil-moisture sensors at variable-rate zones feeding a prescription-map engine that controls center-pivot VRI nozzles, with satellite NDVI overlays and seasonal water-budget tracking.', metrics: '26% water savings with 12% yield uplift', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Automotive': { title: 'Connected Vehicle Data Platform for Tier-1 OEM Supplier', desc: 'Architected a cloud ingestion layer processing 2TB/day of CAN-bus telemetry from 400K vehicles, powering predictive maintenance alerts, usage-based insurance scoring, and OTA update targeting.', metrics: '40% reduction in warranty claims', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Gaming': { title: 'Multiplayer Backend & LiveOps Platform for Mobile RPG', desc: 'Built a globally distributed game server on Agones/GKE handling 120K concurrent players with match-making, leaderboards, real-time inventory, and an A/B-tested battle-pass monetization system.', metrics: 'Day-30 retention improved from 8% to 14%', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Gaming & VFX': { title: 'Cloud Rendering Pipeline for Animation Studio', desc: 'Migrated a Houdini/Nuke rendering farm to a burst-capable cloud architecture on AWS with deadline-aware job scheduling, asset versioning, and real-time cost dashboards for producers.', metrics: '3.2x faster render throughput', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Gaming & Esports': { title: 'Tournament Management & Broadcasting Platform for Esports Org', desc: 'Built an end-to-end system handling team registration, Swiss/double-elim bracket generation, anti-cheat integration, live stats overlays via OBS WebSocket, and prize-pool distribution.', metrics: '2.4M peak concurrent viewers', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Aerospace': { title: 'MRO Inventory & Work-Order System for Regional Airline', desc: 'Replaced spreadsheet-based parts tracking with a digital system managing 45,000 rotable/expendable parts across 3 hangars, with EASA/FAA compliance tagging and automated minimum-stock reordering.', metrics: 'AOG parts retrieval cut from 4hr to 22min', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Aerospace & Defense': { title: 'Satellite Telemetry Analysis Dashboard for Defense Contractor', desc: 'Built a NIST 800-171 compliant analytics platform processing 8TB/day of orbital telemetry with anomaly detection, conjunction assessment feeds, and automated reporting for DoD stakeholders.', metrics: '99.6% anomaly detection recall', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Space & Aerospace': { title: 'Mission Planning & Payload Scheduling Tool for Smallsat Operator', desc: 'Developed a constraint-satisfaction scheduler optimizing imaging passes across a 12-satellite constellation, balancing ground-station contacts, power budgets, and customer priority queues.', metrics: '35% more imaging passes per orbit cycle', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Insurance': { title: 'Underwriting Workbench for Mid-Market P&C Carrier', desc: 'Digitized the submission-to-bind workflow with automated data enrichment (Verisk, LexisNexis), risk-scoring models, and comparative rater integration, replacing a 15-year-old AS/400 system.', metrics: 'Quote turnaround from 5 days to 4 hours', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'InsurTech': { title: 'Parametric Insurance Platform for Climate-Risk Products', desc: 'Built an event-triggered payout system using weather-station and satellite data feeds with smart-contract settlement, covering drought, hurricane, and flood perils for agricultural clients.', metrics: 'Claims settled in 72hrs vs. industry avg of 45 days', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'Insurance & FinTech': { title: 'Embedded Insurance API for Gig-Economy Platform', desc: 'Designed a per-trip micro-insurance product with real-time premium calculation, instant policy issuance, and automated FNOL intake, embedded directly into a ride-hailing app checkout flow.', metrics: '340K policies issued in first quarter', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'Cybersecurity': { title: 'SOC Automation & Threat-Hunting Platform for MSSP', desc: 'Deployed a SOAR platform ingesting logs from 2,400 endpoints, correlating alerts via MITRE ATT&CK mapping, and automating playbooks for phishing, lateral movement, and data exfiltration scenarios.', metrics: 'MTTR reduced from 6hr to 23min', gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.03))' },
    'Biotech': { title: 'LIMS & Assay Data Management System for Drug Discovery Lab', desc: 'Built a laboratory information management system tracking 50,000+ compound plates with barcode scanning, automated dose-response curve fitting, and integration with Hamilton liquid handlers.', metrics: '3x throughput in screening campaigns', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Biotech & Pharma': { title: 'Clinical Trial Data Pipeline for Phase III Oncology Study', desc: 'Engineered an EDC-to-data-warehouse pipeline with CDISC SDTM mapping, automated edit checks, and real-time safety signal dashboards for a 1,200-patient multi-site trial.', metrics: 'Database lock achieved 3 weeks ahead of schedule', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Pharma Tech': { title: 'Drug Supply Chain Serialization Platform for Global Pharma', desc: 'Implemented DSCSA-compliant track-and-trace across 40 distribution partners with unique serial number generation, aggregation hierarchy management, and FDA EPCIS reporting.', metrics: '100% serialization compliance at launch', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Pharma & BioTech': { title: 'Regulatory Submission Automation for Global CRO', desc: 'Built an eCTD assembly tool that auto-populates Module 2-5 documents from structured templates, validates XML backbone against ICH specs, and manages lifecycle sequences across 28 health authorities.', metrics: '60% reduction in submission prep time', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Manufacturing': { title: 'Shop Floor MES Integration for Discrete Manufacturer', desc: 'Connected 78 CNC machines and PLCs via OPC-UA to a cloud MES layer with real-time OEE dashboards, digital work instructions, and traceability linking each part to raw-material lot numbers.', metrics: 'OEE improved from 62% to 79%', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Manufacturing Tech': { title: 'Quality Control Vision System for Consumer Electronics Factory', desc: 'Deployed edge-inference cameras on 6 assembly lines running custom defect-classification models, with automatic reject gating and shift-level quality trend reporting for line supervisors.', metrics: '0.02% escaped-defect rate', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'SaaS': { title: 'Usage-Based Billing Engine for Developer Tools Company', desc: 'Built a metering and invoicing system ingesting 500M+ API call events daily, supporting prepaid credits, overage tiers, and commitment-based discounts with Stripe and NetSuite integration.', metrics: 'Revenue leakage eliminated ($1.8M annually)', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'Web3': { title: 'NFT Marketplace with On-Chain Royalty Enforcement', desc: 'Developed ERC-721/1155 smart contracts with EIP-2981 royalty enforcement, a custom indexer (Ponder + PostgreSQL), and a Next.js storefront with wallet-connect and gasless minting via relayers.', metrics: '18,000 NFTs minted in first 30 days', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Web3 & Crypto': { title: 'Institutional-Grade Crypto Custody & Reporting Dashboard', desc: 'Built a multi-sig wallet management interface with MPC key sharding, real-time portfolio valuation across 14 chains, tax-lot accounting, and SOC 2-compliant audit exports.', metrics: '$2.3B AUM onboarded in 6 months', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Blockchain': { title: 'Supply Chain Provenance Ledger for Luxury Goods Brand', desc: 'Implemented a Polygon-based traceability system assigning NFC-linked digital certificates to 80,000 handbags, tracking material origin, manufacturing steps, and ownership transfers.', metrics: '73% reduction in counterfeit claims', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))' },
    'Robotics': { title: 'Warehouse Pick-and-Pack Orchestration for AMR Fleet', desc: 'Built the fleet-management layer coordinating 60 autonomous mobile robots with WMS integration, dynamic path planning, charging scheduling, and human-safety interlock protocols.', metrics: '2.8x picks per hour vs. manual process', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Semiconductors': { title: 'Yield Analytics Platform for Wafer Fabrication Facility', desc: 'Correlated inline metrology, WAT, and final test data across 12 process layers to identify systematic yield-loss signatures using spatial pattern recognition on wafer maps.', metrics: '4.2% yield improvement on 7nm node', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Semiconductor': { title: 'Design-for-Test Automation Suite for Fabless Chip Company', desc: 'Built a scan-chain insertion and ATPG tool integration layer automating DFT from RTL through GDSII signoff, with coverage-gap analysis and test-time estimation for production planning.', metrics: '98.7% stuck-at fault coverage achieved', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Telecom': { title: 'Network Inventory & Service Assurance Platform for Tier-2 Telco', desc: 'Unified fiber, microwave, and GPON asset records into a geospatial inventory with automated topology discovery, service-impact analysis, and trouble-ticket correlation for NOC operators.', metrics: '41% reduction in mean time to repair', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    '5G & Telecom': { title: 'Network Slicing Orchestrator for 5G Private Network Deployments', desc: 'Developed an NSMF layer automating slice lifecycle management for enterprise campus networks with SLA monitoring, resource scaling, and integration with Ericsson and Nokia RAN controllers.', metrics: '12 enterprise slices deployed in 8 weeks', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'PropTech': { title: 'Tenant Experience & Building Operations App for Class-A Office Portfolio', desc: 'Launched a mobile app for 14 buildings covering visitor management, conference-room booking, HVAC comfort requests, package notifications, and integration with Honeywell BMS and Kastle access control.', metrics: '72 NPS score from building tenants', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))' },
    'Oil & Gas': { title: 'Pipeline Integrity Management System for Midstream Operator', desc: 'Built a risk-based inspection scheduling tool integrating ILI pig-run data, corrosion-growth rates, cathodic protection readings, and PHMSA compliance requirements across 3,200 miles of pipeline.', metrics: '22% fewer integrity digs with same safety margin', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Oil & Gas Tech': { title: 'Drilling Operations Dashboard for Offshore Rig Fleet', desc: 'Aggregated WITSML real-time drilling data from 8 rigs into a centralized monitoring platform with automated kick-detection alerts, connection-time analysis, and daily-cost tracking for well engineers.', metrics: '17% improvement in rate of penetration', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Mining Tech': { title: 'Autonomous Haul-Truck Dispatch & Fleet Optimization System', desc: 'Implemented a GPS/LiDAR-based dispatching system for 45 haul trucks in an open-pit mine, optimizing load-haul-dump cycles, fuel consumption, and blast-area exclusion zone compliance.', metrics: '14% increase in tonnes moved per shift', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Defence': { title: 'Secure Field Communications Platform for Defense Contractor', desc: 'Built a TEMPEST-compliant messaging and file-sharing system with end-to-end encryption, air-gap sync capability, and role-based compartmentalization meeting ITAR and classified-network requirements.', metrics: 'Deployed across 6 allied nations', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Defence Tech': { title: 'ISR Data Fusion Platform for Unmanned Systems Program', desc: 'Developed a multi-sensor correlation engine fusing EO/IR, SAR, and SIGINT feeds from drone payloads into a common operating picture with automated target-detection and cross-cueing.', metrics: '68% reduction in analyst workload', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Sports Tech': { title: 'Player Performance Analytics Platform for Professional Soccer Club', desc: 'Built a system ingesting GPS/accelerometer data from Catapult vests, match-event feeds, and video clips to produce load-management dashboards, tactical heat-maps, and injury-risk scores.', metrics: '31% reduction in soft-tissue injuries', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))' },
    'Cloud Computing': { title: 'Multi-Cloud Cost Optimization Platform for Fortune 500', desc: 'Built a FinOps tool analyzing spend across AWS, Azure, and GCP with automated rightsizing recommendations, Reserved Instance purchasing strategies, and anomaly detection on daily spend deltas.', metrics: '$3.6M annual cloud savings identified', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'Venture Capital': { title: 'Deal-Flow & Portfolio Monitoring Platform for Growth Equity Fund', desc: 'Developed a CRM-meets-analytics system tracking 4,000+ prospects with automated enrichment (PitchBook, Crunchbase), co-investor network mapping, and quarterly portfolio KPI collection.', metrics: '2.3x faster deal screening', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'Professional Services': { title: 'Resource Planning & Utilization Dashboard for Consulting Firm', desc: 'Built a staffing-optimization tool matching 1,200 consultants to engagements based on skills, availability, client preferences, and margin targets with Workday and Salesforce PSA integration.', metrics: 'Utilization rate improved from 71% to 82%', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'Creative Tech': { title: 'Generative Design Tool for Packaging & Brand Identity Studio', desc: 'Built a web app letting designers specify brand constraints (color palette, typography, exclusion zones) and generate 50+ packaging layout variations using parametric algorithms and diffusion models.', metrics: '4x faster concept-to-client pipeline', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Creative Industries': { title: 'Digital Asset Management Platform for Global Agency Network', desc: 'Centralized 2.4M creative assets across 18 offices with AI-powered auto-tagging, rights-expiration tracking, brand-guideline compliance checks, and integration with Adobe CC and Figma.', metrics: '56% reduction in asset search time', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Digital Media': { title: 'Programmatic Ad Yield Platform for Digital Publisher Network', desc: 'Built a header-bidding wrapper and floor-price optimization engine across 80 publisher sites, integrating Prebid.js, GAM, and custom first-party data segments for cookieless targeting.', metrics: '34% lift in programmatic CPM', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Media': { title: 'Newsroom Content Management & Distribution System for Wire Service', desc: 'Developed a real-time editorial workflow handling 3,000 stories/day with AI-assisted headline generation, automated distribution to 400+ subscriber feeds, and multilingual translation pipeline.', metrics: 'Time-to-publish cut from 12min to 90sec', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Media & Publishing': { title: 'Subscription & Paywall Analytics for Major News Organization', desc: 'Built a propensity-to-subscribe model analyzing reading patterns, referral source, and engagement depth, powering dynamic paywall rules and personalized conversion prompts across 8M monthly visitors.', metrics: '28% increase in digital subscriptions', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Media & Broadcasting': { title: 'Live Production Switching & Playout Automation for Sports Network', desc: 'Replaced legacy SDI infrastructure with an IP-based (SMPTE ST 2110) playout system with automated graphics insertion, replay triggering, and remote-production capability for 6 simultaneous feeds.', metrics: '45% reduction in production crew costs', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Film & Animation': { title: 'Production Budget & Scheduling Tool for Independent Film Studio', desc: 'Developed a collaborative platform linking script breakdowns to department budgets, shooting schedules, and vendor contracts with automated cost-report generation matching AICP standards.', metrics: 'Average production came in 8% under budget', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Film & VFX': { title: 'VFX Shot Management & Review System for Post-Production House', desc: 'Built a ShotGrid alternative with frame-accurate annotation, version comparison, client-review portals with watermarked streaming, and automated Nuke/Houdini render-farm submission.', metrics: 'Artist feedback loops reduced by 40%', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Outdoor Tech': { title: 'Trail & Backcountry Navigation App with Offline-First Architecture', desc: 'Built a React Native app with vector tile caching for 120,000+ trails, barometric altimeter calibration, satellite SOS integration, and trip-sharing with real-time breadcrumb tracking.', metrics: '890K downloads in first 12 months', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))' },
    'Shipping & Trade': { title: 'Port Terminal Operating System for Multi-Modal Hub', desc: 'Replaced a legacy TOS with a cloud-native system managing berth allocation, yard-crane scheduling, gate automation, and rail-car loading with EDI integration to 200+ shipping lines.', metrics: '22% improvement in vessel turnaround time', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'Enterprise IT': { title: 'IT Service Management Consolidation for 30,000-Employee Enterprise', desc: 'Migrated 5 disparate ITSM tools to a unified ServiceNow implementation with CMDB auto-discovery, change-advisory-board workflows, and self-service portal handling 45K tickets/month.', metrics: 'First-call resolution improved to 74%', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'IoT': { title: 'Industrial IoT Gateway & Edge Analytics for Water Utility', desc: 'Deployed 1,800 LoRaWAN-connected flow meters and pressure sensors with edge anomaly detection for leak identification, feeding a central SCADA dashboard with 15-minute reporting intervals.', metrics: '18% reduction in non-revenue water loss', gradient: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.03))' },
    'Mobility': { title: 'MaaS Platform Integrating Transit, Micromobility & Ride-Hail', desc: 'Built a mobility-as-a-service app unifying real-time GTFS feeds, e-scooter availability, and ride-hail APIs into a single trip planner with unified payment and monthly subscription passes.', metrics: '47K monthly active commuters', gradient: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.03))' },
    'Outsourcing': { title: 'BPO Workforce Management & Quality Assurance Platform', desc: 'Built a real-time agent-performance dashboard ingesting ACD, CRM, and screen-recording data with automated QA scoring using speech analytics and compliance-keyword detection across 8,000 seats.', metrics: 'CSAT improved from 3.6 to 4.3', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'Nearshore IT': { title: 'Distributed Engineering Team Platform for Nearshore Staffing Firm', desc: 'Developed an internal platform matching 600+ engineers to client projects based on tech stack, timezone overlap, and security-clearance level with automated onboarding and time-tracking integration.', metrics: 'Bench time reduced from 18 to 6 days avg', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))' },
    'FinTech & M-Pesa': { title: 'Mobile Money Agent Network Management Platform', desc: 'Built a float-management and reconciliation system for 40,000+ M-Pesa agents with real-time liquidity alerts, automated commission calculations, and fraud-detection rules on transaction velocity.', metrics: '99.4% transaction reconciliation rate', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'K-Content': { title: 'Global Content Licensing & Subtitle Platform for K-Drama Distributor', desc: 'Built a B2B portal managing territorial rights for 2,800 drama episodes with automated subtitle file conversion (SRT/VTT/DFXP), QC workflows, and revenue-share reporting across 45 OTT partners.', metrics: 'Licensing deal velocity up 55%', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Big Tech EMEA HQs': { title: 'EMEA Data Residency & Compliance Middleware for Global SaaS', desc: 'Architected a geo-routing layer ensuring EU customer data stays within GDPR-compliant regions with automated DPIA generation, DPO workflow tools, and cross-border transfer impact assessments.', metrics: 'Zero GDPR violations across 14M EU users', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    'Life Sciences': { title: 'Biobank Sample Tracking & Chain-of-Custody System', desc: 'Built a LIMS extension tracking 2.1M biospecimens across 6 freezer farms with temperature-excursion alerting, consent-status verification, and automated IRB-compliant de-identification for researchers.', metrics: 'Sample retrieval time cut from 2hr to 8min', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
    'Entertainment': { title: 'Ticketing & Venue Operations Platform for Live Events Company', desc: 'Developed a white-label ticketing system with dynamic pricing, anti-scalping queue logic, mobile-entry QR validation, and real-time capacity dashboards for venues up to 60,000 seats.', metrics: '12% revenue uplift from dynamic pricing', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))' },
    'Banking & Finance': { title: 'Core Banking Middleware Migration for Regional Credit Union', desc: 'Replaced a COBOL-based core with an API-driven middleware layer enabling mobile banking, Zelle P2P integration, and real-time fraud scoring while maintaining backward compatibility with legacy GL systems.', metrics: 'Mobile banking adoption jumped from 22% to 68%', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Banking & Wealth Tech': { title: 'Robo-Advisory & Portfolio Rebalancing Engine for Private Bank', desc: 'Built a goal-based investing platform with tax-loss harvesting, ESG screening, and automated rebalancing across 8 asset classes, integrated with Bloomberg market data and Pershing custody.', metrics: 'CHF 1.2B AUM migrated in 9 months', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Sovereign Wealth': { title: 'Investment Portfolio Analytics for Sovereign Wealth Fund', desc: 'Developed a multi-asset-class performance attribution system covering public equities, fixed income, PE, and real assets with benchmarking against CPI+ targets and GIPS-compliant reporting.', metrics: 'Reporting cycle reduced from 6 weeks to 5 days', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    'Space Tech': { title: 'Ground Station Network Scheduling Platform for LEO Constellation', desc: 'Built a multi-objective optimizer allocating contact windows across 22 ground stations for a 48-satellite constellation, balancing data-downlink priority, latency requirements, and station maintenance.', metrics: '94% data-downlink success rate', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
    'Precision Engineering': { title: 'Metrology Data Pipeline for Swiss Watchmaking Manufacturer', desc: 'Connected CMM machines and optical comparators to a cloud quality system with SPC charting, Cpk trend analysis, and automated non-conformance routing for components measured to 1-micron tolerance.', metrics: 'Scrap rate reduced from 3.2% to 0.8%', gradient: 'linear-gradient(135deg, rgba(100,116,139,0.15), rgba(100,116,139,0.03))' },
  };

  const DEFAULT_PORTFOLIO = [
    { title: 'Multi-Tenant RBAC & Audit System for Compliance-Heavy SaaS', industry: 'Technology', desc: 'Architected a hierarchical permission model supporting 200+ granular scopes with SOC 2 Type II audit trails and SCIM provisioning across 3,400 enterprise accounts.', metrics: '99.97% uptime over 18 months', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' },
    { title: 'Headless Commerce Migration for D2C Brand Doing $50M ARR', industry: 'Retail', desc: 'Migrated from monolithic Magento to a composable stack with edge-rendered storefronts, cutting page load from 4.2s to 0.9s and enabling 15-minute deploys.', metrics: '23% increase in conversion rate', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))' },
    { title: 'Patient Intake & Clinical Workflow Digitization for Hospital Network', industry: 'Healthcare', desc: 'Replaced paper-based intake across 14 facilities with a HIPAA-compliant portal supporting HL7 FHIR interoperability and real-time bed-management dashboards.', metrics: '42% reduction in patient wait times', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))' },
  ];

  const portfolioItems = localIndustries.length > 0
    ? localIndustries.slice(0, 3).map(ind => {
        const match = PORTFOLIO_POOL[ind];
        if (match) return { ...match, industry: ind };
        return { title: `${ind} Platform`, industry: ind, desc: `Custom-built solution for ${cityName}'s ${ind.toLowerCase()} sector with industry-specific compliance and integrations.`, metrics: 'Custom scope', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(79,70,229,0.03))' };
      })
    : DEFAULT_PORTFOLIO;

  return (
    <>
      <Navbar />
      <main style={{ background: '#ffffff', color: '#111827', paddingTop: 80 }}>

        {/* ════════════════════════════════════════════
            1. HERO
        ════════════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(48px, 8vw, 100px) 0 clamp(48px, 8vw, 120px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '5%', width: 600, height: 600, background: 'radial-gradient(ellipse,rgba(79,70,229,0.08) 0%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'center' }}>

              {/* Left column */}
              <div>
                {/* Breadcrumb */}
                <nav className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Locations', href: '/locations' },
                    { label: cityName, href: `/locations/${citySlug}` },
                  ].map((crumb, i) => (
                    <span key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Link href={crumb.href} style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#4F46E5'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.4)'}>
                        {crumb.label}
                      </Link>
                      <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)' }}>/</span>
                    </span>
                  ))}
                  <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)' }}>{serviceName}</span>
                </nav>

                {/* Badge */}
                <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', boxShadow: '0 0 8px #4F46E5' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{badge}</span>
                </div>

                {/* H1 */}
                <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
                  {serviceName} Company in{' '}<span style={{ color: '#4F46E5' }}>{cityName}</span>
                </h1>

                {/* Hero context paragraph */}
                <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(0,0,0,0.55)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
                  {heroContext}
                </p>

                {/* CTAs */}
                <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get a Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                    View Case Studies
                  </Link>
                </div>

                {/* Stats strip (inline in hero) */}
                <div className="reveal reveal-d4 loc-hero-stats" style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 16 }}>
                  {stats.map((s, i) => (
                    <div key={s.label} style={{ textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', paddingRight: i < stats.length - 1 ? 16 : 0 }}>
                      <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#4F46E5', letterSpacing: '-0.03em' }}>{s.value}</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — form */}
              <div className="reveal reveal-d2">
                <ServiceHeroForm />
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            2. STATS STRIP
        ════════════════════════════════════════════ */}
        <section ref={statsRef} style={{ ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal loc-stats-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: '52px 40px', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            3. SERVICES BREAKDOWN
        ════════════════════════════════════════════ */}
        <section ref={servicesRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>What We Build</div>
              <h2 style={heading2}>{serviceName} Services We Offer in {cityName}</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {servicesIntro}
            </p>

            {/* Large cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 20, marginBottom: 20 }}>
              {largeServices.slice(0, 2).map(s => (
                <div key={s.title} className="loc-large-card" style={{ ...cardStyle, padding: '48px 44px', borderRadius: 32, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #4F46E5, transparent)' }} />
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.03em', marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ ...bodyText, marginBottom: s.tags && s.tags.length > 0 ? 28 : 0 }}>{s.desc}</p>
                  {s.tags && s.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.4)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Small cards */}
            <div className="reveal reveal-d2" style={autoGrid}>
              {smallServices.map(s => (
                <div key={s.title} style={{ ...cardStyle, padding: '32px 28px', borderRadius: 24, position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #4F46E5, transparent)' }} />
                  <div style={{ fontSize: 24, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.55)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            4. WHY CITY
        ════════════════════════════════════════════ */}
        <section ref={whyRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Local Advantage</div>
              <h2 style={{ ...heading2, maxWidth: 800, margin: '0 auto' }}>Why {cityName} Businesses Choose {serviceName}</h2>
            </div>
            <div className="reveal reveal-d1" style={autoGrid}>
              {whyCity.map((w, i) => (
                <div key={w.title} className={`reveal reveal-d${Math.min(i + 1, 4)} loc-why-card`} style={{ ...cardStyle, padding: '44px 36px' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{w.icon}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            5. OUR PROCESS
        ════════════════════════════════════════════ */}
        <section ref={processRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 32 }}>
              <div style={subLabel}>Our Process</div>
              <h2 style={heading2}>Our {serviceName} Process</h2>
            </div>

            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 80 }}>
              {processIntro}
            </p>

            <div style={{ position: 'relative' }}>
              <div className="loc-process-timeline" style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom, rgba(79,70,229,0.5), rgba(79,70,229,0.05))', zIndex: 0 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${Math.min(i + 1, 5)} loc-process-row`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 32, alignItems: 'start', padding: '32px 0' }}>
                    <div className="loc-process-num" style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(79,70,229,0.4)', background: 'rgba(79,70,229,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#4F46E5', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>

                    <div className="loc-process-card" style={{ ...cardStyle, padding: '32px 40px' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,70,229,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.03)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.04)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.015)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#4F46E5', background: 'rgba(79,70,229,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ ...bodyText, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.55)', padding: '6px 14px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            6. TECH STACK
        ════════════════════════════════════════════ */}
        <section ref={techRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={subLabel}>Technology</div>
                <h2 style={heading2}>Technologies We Use</h2>
              </div>
            </div>
            <p className="reveal" style={{ ...bodyText, maxWidth: 800, marginBottom: 64 }}>
              {techIntro}
            </p>
            <div className="reveal reveal-d1" style={autoGrid}>
              {techCategories.map(cat => (
                <div key={cat.title} style={{ ...cardStyle }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,70,229,0.2)'; (e.currentTarget as HTMLElement).style.background = 'rgba(79,70,229,0.02)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.015)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 }}>{cat.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.items.map(item => (
                      <span key={item} style={{ padding: '7px 16px', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.45)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'; e.currentTarget.style.color = 'rgba(0,0,0,0.45)'; e.currentTarget.style.background = 'transparent'; }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            7. PORTFOLIO / CASE STUDIES
        ════════════════════════════════════════════ */}
        <section ref={portfolioRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={subLabel}>Portfolio</div>
                <h2 style={heading2}>Projects We&apos;ve Built for {state} Clients</h2>
              </div>
              <Link href="/case-studies" style={{ fontSize: 14, fontWeight: 600, color: '#4F46E5', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: '0.2s' }}
                onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}>
                View All Case Studies
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 20 }}>
              {portfolioItems.map((p, i) => (
                <div key={p.title} className={`reveal reveal-d${i + 1}`} style={{ ...cardStyle, padding: 0, overflow: 'hidden', borderRadius: 28 }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  <div style={{ height: 200, background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                    </div>
                  </div>
                  <div className="loc-portfolio-inner" style={{ padding: '28px 32px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 10, display: 'block' }}>{p.industry}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#4F46E5', background: 'rgba(79,70,229,0.08)', padding: '6px 14px', borderRadius: 100 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12l-4-4v3H2v2h16v3l4-4z" /></svg>
                      {p.metrics}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            8. TESTIMONIALS
        ════════════════════════════════════════════ */}
        <section ref={testimonialsRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>Testimonials</div>
              <h2 style={heading2}>What {cityName} Clients Say</h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={t.name} className={`reveal reveal-d${Math.min(i + 1, 3)} loc-testimonial-card`} style={{ ...cardStyle, padding: '44px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                  onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                  {/* Quote icon */}
                  <div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(79,70,229,0.3)" style={{ marginBottom: 20 }}><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" /></svg>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 28 }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#4F46E5', flexShrink: 0 }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            9. INDUSTRY EXPERTISE + GET A QUOTE
        ════════════════════════════════════════════ */}
        <section ref={industryRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={subLabel}>Industry Expertise</div>
              <h2 style={heading2}>{serviceName} for {cityName}&apos;s Key Industries</h2>
            </div>

            <div className="reveal reveal-d1" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.55)', lineHeight: 1.85, maxWidth: 800 }}>
                {industryExpertise}
              </p>
            </div>

            {/* Industry tags */}
            <div className="reveal reveal-d2" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 64 }}>
              {localIndustries.map(ind => (
                <span key={ind} style={{ padding: '10px 22px', border: '1px solid rgba(79,70,229,0.2)', borderRadius: 100, fontSize: 14, fontWeight: 600, color: '#4F46E5', background: 'rgba(79,70,229,0.06)', transition: '0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.12)'; e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; e.currentTarget.style.borderColor = 'rgba(79,70,229,0.2)'; }}>
                  {ind}
                </span>
              ))}
            </div>

            {/* Get a Quote CTA card */}
            <div className="reveal reveal-d3" style={{ position: 'relative', overflow: 'hidden', borderRadius: 32, border: '1px solid rgba(79,70,229,0.15)', background: 'linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(6,182,212,0.04) 100%)', padding: 'clamp(40px, 6vw, 64px)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #4F46E5, #06B6D4)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 40, alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 600, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
                    Get a Custom Quote for Your {cityName} Project
                  </h3>
                  <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', lineHeight: 1.75, marginBottom: 32 }}>
                    Every project is unique. Share your requirements and a senior engineer will respond within 4 hours with a detailed scope, timeline, and fixed-price proposal — no obligation.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
                    {['Fixed-Price Guarantee', 'No Hidden Fees', 'Scope Before Code'].map(t => (
                      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                        <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>{t}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 56, padding: '0 36px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.35)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                    Get Your Free Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: '📋', title: 'Detailed Scope Document', desc: 'Every feature, screen, and integration mapped out before development starts.' },
                    { icon: '📅', title: 'Milestone Timeline', desc: 'Week-by-week delivery plan with clear checkpoints and demo dates.' },
                    { icon: '💰', title: 'Fixed-Price Proposal', desc: 'Know exactly what you\'re investing — no hourly billing, no surprises.' },
                  ].map(item => (
                    <div key={item.title} style={{ display: 'flex', gap: 16, padding: '20px 24px', borderRadius: 20, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.04)' }}>
                      <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</div>
                        <div style={{ fontSize: 13, color: 'rgba(0,0,0,0.4)', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            10. FAQ
        ════════════════════════════════════════════ */}
        <section ref={faqRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container" style={{ maxWidth: 860 }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={subLabel}>FAQ</div>
              <h2 style={heading2}>Frequently Asked Questions About {serviceName} in {cityName}</h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((faq, i) => (
                <div key={i}
                  style={{ background: openFaq === i ? 'rgba(79,70,229,0.04)' : 'rgba(0,0,0,0.015)', border: `1px solid ${openFaq === i ? 'rgba(79,70,229,0.2)' : 'rgba(0,0,0,0.05)'}`, borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                  <button className="loc-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#111827', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#4F46E5' : 'rgba(0,0,0,0.55)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  <div
                    style={{ maxHeight: openFaq === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                    <p className="loc-faq-answer" style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(0,0,0,0.4)', lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            11. RELATED SERVICES
        ════════════════════════════════════════════ */}
        <section ref={relatedRef} style={{ ...sectionPad, ...sectionBorder }}>
          <div className="cb-container">
            {/* Related city+service pages */}
            {relatedCityServices.length > 0 && (
              <div className="reveal" style={{ marginBottom: 64 }}>
                <div style={subLabel}>Explore</div>
                <h2 style={{ ...heading2, marginBottom: 32 }}>Related Services in {cityName}</h2>
                <div style={autoGrid}>
                  {relatedCityServices.map(rs => (
                    <Link key={`${rs.citySlug}-${rs.serviceSlug}`} href={`/locations/${rs.citySlug}/${rs.serviceSlug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ ...cardStyle, padding: '24px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                        onMouseEnter={e => hoverCard(e, true)} onMouseLeave={e => hoverCard(e, false)}>
                        <span style={{ fontSize: 15, fontWeight: 500, color: '#111827' }}>{rs.name}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related sub-service pages */}
            {relatedSubServices.length > 0 && (
              <div className="reveal reveal-d2">
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.03em', marginBottom: 24 }}>Explore Our {serviceName} Services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {relatedSubServices.map(sub => (
                    <Link key={sub.slug} href={`/services/${serviceSlug}/${sub.slug}`} style={{ padding: '10px 22px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(0,0,0,0.5)', textDecoration: 'none', transition: '0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; e.currentTarget.style.color = '#4F46E5'; e.currentTarget.style.background = 'rgba(79,70,229,0.06)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.color = 'rgba(0,0,0,0.5)'; e.currentTarget.style.background = 'transparent'; }}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            12. BOTTOM CTA
        ════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(80px, 12vw, 140px) 0', position: 'relative', overflow: 'hidden', textAlign: 'center', ...sectionBorder }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(79,70,229,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)', marginBottom: 24 }}>Ready to Build?</div>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 5rem)', fontWeight: 500, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Start Your {serviceName} Project in{' '}<span style={{ color: '#4F46E5' }}>{cityName}</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.35)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.7 }}>
              {heroDescription}
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#4F46E5', color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href={`/locations/${citySlug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(0,0,0,0.08)', color: '#111827', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                All {cityName} Services
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NDA on Day 1', 'Fixed-Price Guarantee', '48hr Proposal', 'Secure Data Residency'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media(max-width:768px){
          .cb-container{padding-left:20px!important;padding-right:20px!important;}
          .loc-hero-stats{grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))!important;gap:12px!important;}
          .loc-hero-stats>div{padding-right:0!important;border-right:none!important;}
          .loc-stats-strip{grid-template-columns:repeat(2,1fr)!important;}
          .loc-stats-strip>div{padding:28px 16px!important;}
          .loc-stats-strip>div:nth-child(2){border-right:none!important;}
          .loc-large-card{padding:28px 20px!important;}
          .loc-why-card{padding:28px 20px!important;}
          .loc-process-row{grid-template-columns:1fr!important;gap:16px!important;}
          .loc-process-num{display:none!important;}
          .loc-process-card{padding:24px 20px!important;}
          .loc-portfolio-inner{padding:20px!important;}
          .loc-testimonial-card{padding:28px 20px!important;}
          .loc-faq-btn{padding:18px 16px!important;}
          .loc-faq-answer{padding:0 16px 18px!important;}
          .loc-process-timeline{display:none!important;}
        }
        @media(max-width:480px){
          .loc-stats-strip{grid-template-columns:1fr!important;}
          .loc-stats-strip>div{border-right:none!important;padding:20px 12px!important;}
          .loc-hero-stats{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
