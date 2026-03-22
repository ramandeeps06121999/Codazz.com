'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'AI & Machine Learning', href: '/services/ai-ml' },
    { label: 'Predictive Analytics' },
  ],
  hero: {
    badge: 'AI & MACHINE LEARNING',
    title: 'Predictive Analytics That Drive',
    titleAccent: 'Revenue',
    description: 'We build production-grade ML models for demand forecasting, churn prediction, fraud detection, and price optimization — turning your historical data into competitive advantage with measurable business impact.',
    service: 'Predictive Analytics',
    stats: [
      { value: '50+', label: 'Predictive Models Built' },
      { value: '89%', label: 'Avg Forecast Accuracy' },
      { value: '$30M+', label: 'Revenue Impact Generated' },
      { value: '4wk', label: 'To First Working Model' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '\u{1F4C8}', title: 'Demand Forecasting', desc: 'Predict future demand at SKU, location, and channel level using historical sales, seasonality, promotions, and external signals. Reduce inventory costs while maintaining service levels.' },
      { icon: '\u{1F6AA}', title: 'Churn Prediction', desc: 'Identify customers at risk of leaving before they do. We build behavioral churn models that score your entire customer base daily, enabling targeted retention campaigns with measurable ROI.' },
      { icon: '\u{1F6E1}\u{FE0F}', title: 'Fraud Detection', desc: 'Real-time fraud scoring for transactions, account creation, and insurance claims. Our models learn from your fraud patterns and adapt to new attack vectors continuously.' },
      { icon: '\u{1F4B2}', title: 'Price Optimization', desc: 'Dynamic pricing models that maximize revenue and margin by predicting price elasticity, competitor moves, and demand sensitivity. Used in e-commerce, SaaS, travel, and retail.' },
      { icon: '\u{1F381}', title: 'Recommendation Engines', desc: 'Collaborative and content-based filtering systems that drive product discovery, upsell, and cross-sell. Personalize experiences across email, web, and app touchpoints at scale.' },
      { icon: '\u{23F1}\u{FE0F}', title: 'Time-Series Forecasting', desc: 'Advanced forecasting for any time-indexed metric — energy consumption, website traffic, sales pipelines, financial markets. We handle seasonality, trend, and external regressors.' },
    ],
  },
  portfolioCategory: 'ai-ml',
  process: {
    label: 'Our Process',
    title: 'Our Predictive Analytics Process',
    steps: [
      { num: '01', title: 'Data Audit', desc: 'We assess the quality, completeness, and history of your data sources, identify gaps, and define a data strategy — including what additional data collection or enrichment will improve model performance.' },
      { num: '02', title: 'Feature Engineering', desc: 'The most impactful phase. We transform raw data into predictive signals — lag features, rolling aggregates, external enrichment (weather, economics), and domain-specific derived metrics.' },
      { num: '03', title: 'Model Training', desc: 'We train, validate, and compare multiple model families (XGBoost, LightGBM, neural networks, Prophet) using rigorous cross-validation to select the most accurate and stable approach for your data.' },
      { num: '04', title: 'Business Integration', desc: 'We deploy models to production with APIs, integrate outputs into your dashboards and workflows, set up automated retraining schedules, and configure drift monitoring to maintain accuracy over time.' },
    ],
  },
  faqs: [
    { q: 'How much historical data do I need to build a predictive model?', a: 'For most use cases, 1\u20132 years of historical data is a solid starting point. Demand forecasting with strong seasonality benefits from 2\u20133 years to capture seasonal cycles. Fraud detection can work with as little as 6 months if fraud events are frequent enough. We assess your data during the audit phase and recommend strategies to work effectively with what you have.' },
    { q: 'How accurate will the predictions actually be?', a: 'Accuracy varies by problem type and data quality. Our demand forecasting models typically achieve 80\u201392% accuracy (MAPE basis). Churn models typically achieve 75\u201390% AUC. No model is 100% accurate — the goal is to be significantly better than current heuristics or manual judgment. We always benchmark against your existing approach and report results honestly before deployment.' },
    { q: 'How do models stay accurate as business conditions change over time?', a: 'Model drift is real, and we design for it from day one. We implement automated monitoring that tracks prediction accuracy over time and alerts when drift is detected. Retraining pipelines are scheduled (weekly or monthly) to incorporate new data. For high-stakes models, we implement champion-challenger frameworks where new model versions are validated before replacing the incumbent.' },
    { q: 'When should I use an ML model versus a rules-based system?', a: 'Rules-based systems are better when your logic is well-understood, rarely changes, and needs to be fully explainable (e.g., regulatory compliance). ML models win when patterns are complex, data volume is high, conditions change frequently, or accuracy gains are commercially significant. In practice, many production systems combine both — ML for prediction, rules for hard constraints.' },
    { q: 'How do I explain AI-driven decisions to stakeholders and regulators?', a: 'We build explainability into every model using SHAP values, which show exactly which features drove each prediction. For regulated industries (finance, insurance, healthcare), we choose inherently interpretable models (logistic regression, decision trees) when accuracy trade-offs are acceptable. We also build business-facing dashboards that translate model outputs into plain-language explanations for non-technical audiences.' },
  ],
  faqDescription: 'Everything you need to know about our predictive analytics services.',
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: 'Let\'s discuss your predictive analytics project and build something great together.',
};

export default function PredictiveAnalyticsPage() {
  return <SubServicePageTemplate data={pageData} />;
}
