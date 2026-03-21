'use client';
import SubServicePageTemplate, { SubServicePageData } from '@/components/SubServicePageTemplate';

const pageData: SubServicePageData = {
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
    { label: 'Performance & Scaling' },
  ],
  hero: {
    badge: 'CLOUD & DEVOPS',
    title: 'Performance Engineering for',
    titleAccent: 'Any Scale',
    description: 'We find and fix the bottlenecks that slow your product down — from database queries to global CDN strategy — so you can handle any traffic without breaking a sweat.',
    service: 'Performance & Scaling',
    stats: [
      { value: '10x', label: 'Traffic Spikes Handled' },
      { value: '<200ms', label: 'p95 Latency Achieved' },
      { value: '70%', label: 'DB Query Time Reduction' },
      { value: '99.99%', label: 'Uptime SLA' },
    ],
  },
  services: {
    label: 'What We Offer',
    title: 'Our Capabilities',
    items: [
      { icon: '🔬', title: 'Load Testing & Benchmarking', desc: 'Realistic load tests simulating peak traffic scenarios using k6, Locust, or Gatling to establish baselines and find breaking points before users do.' },
      { icon: '🗄️', title: 'Database Query Optimisation', desc: 'Index analysis, query plan review, N+1 elimination, slow query identification, and schema optimization to dramatically reduce database latency.' },
      { icon: '🌐', title: 'CDN & Caching Strategy', desc: 'CloudFront, Fastly, or Cloudflare configuration with cache-control tuning, edge caching for APIs, and Redis/Memcached for application-layer caching.' },
      { icon: '📈', title: 'Horizontal & Vertical Autoscaling', desc: 'Kubernetes HPA, AWS Auto Scaling Groups, and predictive scaling configured to expand capacity ahead of demand and contract during quiet periods.' },
      { icon: '📊', title: 'APM & Observability (Datadog/Grafana)', desc: 'Application performance monitoring with distributed tracing, custom dashboards, SLO tracking, and alerting so you know about issues before users report them.' },
      { icon: '🗺️', title: 'Capacity Planning', desc: 'Data-driven forecasts of infrastructure requirements based on growth projections, so you scale proactively rather than reactively under pressure.' },
    ],
  },
  portfolioCategory: 'cloud-devops',
  process: {
    label: 'Our Process',
    title: 'How We Work',
    steps: [
      { num: '01', title: 'Performance Audit', desc: 'We instrument your application with APM tooling and collect baseline metrics across response times, throughput, error rates, and resource utilisation.' },
      { num: '02', title: 'Bottleneck Identification', desc: 'Distributed traces, slow query logs, and profiling data are analyzed to pinpoint the specific code paths, queries, or infrastructure components causing latency.' },
      { num: '03', title: 'Optimisation Sprints', desc: 'Targeted fixes are implemented in priority order — database indexes, caching layers, connection pooling, async processing — with each change benchmarked.' },
      { num: '04', title: 'Load Testing', desc: 'Final load tests validate that optimizations hold under peak traffic conditions and that autoscaling responds correctly before returning to production.' },
    ],
  },
  faqs: [
    { q: 'How do you identify performance bottlenecks?', a: 'We combine multiple data sources: distributed tracing (OpenTelemetry/Jaeger/Datadog APM) to find slow spans, database slow query logs and EXPLAIN plans, application profiling (Py-Spy, async-profiler, Go pprof), infrastructure metrics (CPU, memory, I/O, network), and synthetic load tests to reproduce issues at controlled traffic levels.' },
    { q: 'What load testing tools do you use?', a: 'We primarily use k6 for its developer-friendly JavaScript scripting, Git-friendly test scripts, and cloud execution support. Locust is preferred for Python teams and complex dynamic scenarios. Gatling is used when JVM-compatible reporting is required. Artillery is used for quick API load tests. All tools produce comparable metrics — choice depends on your team\'s language preferences.' },
    { q: 'Database vs application-layer optimization — which comes first?', a: 'Database optimization almost always delivers the highest return first. The majority of web application latency lives in the data layer — slow queries, missing indexes, N+1 problems, and inefficient joins. Once the database is optimized, application-layer caching (Redis), connection pooling, and async processing address the remaining bottlenecks. We profile first to confirm rather than assume.' },
    { q: 'How do you cache effectively without serving stale data?', a: 'Cache strategy depends on data freshness requirements. For static content, long TTLs with cache-busting via hashed filenames are used. For API responses, shorter TTLs with stale-while-revalidate headers are appropriate. For user-specific data, per-user cache keys with event-driven invalidation (on write) keep caches fresh without sacrificing hit rates. We avoid global cache clears which cause thundering herd problems.' },
    { q: 'When should I scale horizontally vs vertically?', a: 'Vertical scaling (larger instances) is fast and requires no code changes — it is the right first response to a sudden capacity problem. Horizontal scaling (more instances) is cost-effective at scale and removes the single-node ceiling, but requires your application to be stateless. We recommend moving toward horizontal scaling for any production system with more than a handful of concurrent users, with stateful data externalised to managed databases and caches.' },
  ],
  faqDescription: 'Everything you need to know about our performance engineering and scaling services.',
  ctaTitle: 'Ready to Scale Without Limits?',
  ctaDescription: 'Let\'s discuss your project. Free consultation, NDA on Day 1, and a detailed proposal within 48 hours.',
};

export default function PageClient() {
  return <SubServicePageTemplate data={pageData} />;
}
