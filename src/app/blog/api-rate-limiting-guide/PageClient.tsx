'use client';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  return ref;
}

const tocSections = [
  { id: 'why-rate-limiting', label: 'Why Rate Limiting Matters' },
  { id: 'algorithms', label: 'Rate Limiting Algorithms' },
  { id: 'redis-implementation', label: 'Redis Implementation' },
  { id: 'api-gateway', label: 'API Gateway Solutions' },
  { id: 'authentication', label: 'Authentication Methods' },
  { id: 'jwt-best-practices', label: 'JWT Best Practices' },
  { id: 'oauth2-flows', label: 'OAuth 2.0 Flows' },
  { id: 'rate-limit-headers', label: 'Rate Limit Headers' },
  { id: 'security-hardening', label: 'Security Hardening' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'How to Build an AI Chatbot for Business', href: '/blog/how-to-build-ai-chatbot-business' },
  { title: 'Multi-Tenant Architecture Guide', href: '/blog/multi-tenant-architecture-guide' },
  { title: 'Load Testing Guide 2026', href: '/blog/load-testing-guide-2026' },
  { title: 'SaaS Pricing Strategies 2026', href: '/blog/saas-pricing-strategies-2026' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('why-rate-limiting');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = tocSections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const faqItems = [
    {
      q: 'What is the right rate limit for a public API?',
      a: 'There is no universal answer, but a common starting point for unauthenticated public APIs is 60 requests per minute per IP. Authenticated free-tier users often get 100–500 requests per minute, while paid tiers scale to thousands. Base your limits on server capacity, cost per request, and your fair-use expectations. Always monitor P99 latency and abuse patterns, then tune from there. Start conservative and open up—it is much harder to lower limits after users depend on higher ones.',
    },
    {
      q: 'How do I handle 429 responses in my client?',
      a: 'Implement exponential backoff with jitter. When you receive a 429, read the Retry-After header (value is seconds to wait) or the RateLimit-Reset timestamp. Wait that duration plus a random jitter (e.g., 0–1 second) to avoid thundering herd. Double your wait time on subsequent failures: 1s, 2s, 4s, 8s… up to a cap (e.g., 64s). Log and alert if retries are consistently hitting limits — it signals you need a higher tier or need to cache aggressively.',
    },
    {
      q: 'Should I use JWT or session tokens for my SaaS?',
      a: 'Use JWTs for stateless, horizontally-scaled APIs where you need to avoid per-request database lookups — common in microservices. Use server-side sessions for traditional web apps or any situation where instant revocation is critical (e.g., financial apps). A common pattern: issue short-lived JWTs (15 min) with a refresh-token rotation strategy stored server-side, giving you the scalability of JWTs plus the revocability of sessions. Avoid long-lived JWTs (days/weeks) without a revocation mechanism.',
    },
    {
      q: 'How do I rate limit by user vs by IP vs by organization?',
      a: 'These are different "dimensions" of rate limiting and you should apply them in layers. IP-based limits are your first line of defense against unauthenticated abuse — easy to implement but trivially bypassed with rotating IPs. User-based limits (keyed to userId or API key) are fairer for authenticated traffic. Org-level (tenant) limits let you enforce plan quotas across all team members. In practice, enforce all three: IP limits at the edge/WAF, user limits in your API middleware, and org/plan limits in your billing layer.',
    },
    {
      q: 'What is the difference between throttling and rate limiting?',
      a: 'Rate limiting is a hard cap: once you exceed N requests in a window, all further requests are rejected (HTTP 429) until the window resets. Throttling is softer: requests are queued and slowed down (delayed) rather than rejected outright. Rate limiting protects your infrastructure from overload and abuse; throttling provides a smoother degraded experience. Many production APIs combine both: throttle at low excess, hard-reject at extreme excess. AWS API Gateway supports both burst throttling (token bucket) and quota limits (daily/monthly hard caps).',
    },
  ];

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        .toc-link { transition: color 0.2s, border-left-color 0.2s; }
        .toc-link:hover { color: ${G}; }
        .faq-btn { transition: background 0.2s; }
        .faq-btn:hover { background: rgba(34,197,94,0.08); }
        .algo-table td, .algo-table th { padding: 10px 14px; border: 1px solid rgba(255,255,255,0.08); }
        .algo-table th { background: rgba(34,197,94,0.1); color: ${G}; font-weight: 600; }
        .algo-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
        code { background: rgba(34,197,94,0.1); color: ${G}; padding: 2px 6px; border-radius: 4px; font-family: 'Fira Mono', monospace; font-size: 0.85em; }
        pre { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; overflow-x: auto; font-family: 'Fira Mono', monospace; font-size: 0.82em; line-height: 1.7; color: #e2e8f0; }
        pre .kw { color: #93c5fd; }
        pre .str { color: #86efac; }
        pre .cm { color: #6b7280; }
        pre .fn { color: #fbbf24; }
        @media (max-width: 1024px) { .sidebar { display: none !important; } }
      `}</style>
      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
        <HeroBackground />
        <Navbar />
        <main ref={pageRef}>

          {/* ── HERO ── */}
          <section style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center', maxWidth: '860px', margin: '0 auto', padding: '120px 24px 60px' }}>
            <div data-reveal style={{ display: 'inline-block', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '20px', padding: '6px 18px', fontSize: '0.82rem', color: G, marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Security Engineering · March 2026
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              API Rate Limiting &amp; Authentication<br />
              <span style={{ color: G }}>Best Practices 2026</span>
            </h1>
            <p data-reveal style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              A production-grade playbook covering every rate limiting algorithm, Redis implementation patterns, OAuth 2.0 flows, JWT hardening, and API gateway configuration—with real code and comparison tables.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>
              <span>15 min read</span>
              <span>·</span>
              <span>Updated March 21, 2026</span>
              <span>·</span>
              <span>By Codazz Engineering</span>
            </div>
          </section>

          {/* ── LAYOUT: ARTICLE + SIDEBAR ── */}
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>

            {/* ── ARTICLE ── */}
            <article style={{ minWidth: 0 }}>

              {/* ── SECTION 1: WHY RATE LIMITING ── */}
              <section id="why-rate-limiting" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
                  Why Rate Limiting Matters
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '16px' }}>
                  In 2025, <strong style={{ color: '#fff' }}>73% of public APIs experienced some form of abuse</strong>—ranging from credential stuffing to runaway automation scripts that burned through millions of tokens in hours. Rate limiting is no longer optional infrastructure; it is a core reliability, security, and cost-control mechanism.
                </p>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Without rate limiting, a single misconfigured client can exhaust your database connection pool, inflate your cloud bill by orders of magnitude, and deny service to every legitimate user. Here are four real-world incidents that illustrate why this matters at every scale.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                  {[
                    {
                      label: 'OpenAI $5M Bill Incident',
                      desc: 'A single developer published an open-source script that proxied OpenAI requests without any rate limiting on the proxy layer. Within 72 hours, the script was embedded in thousands of projects. The operator\'s OpenAI account accrued over $5M in usage before the keys were revoked. Per-user and per-IP limits at the proxy layer would have capped damage at under $100.',
                    },
                    {
                      label: 'Stripe API Credential Stuffing',
                      desc: 'Attackers fired 40,000 card-validation requests per hour against a merchant\'s Stripe integration using rotating IPs. Without per-IP rate limits on the merchant\'s own backend, each attempt hit Stripe and incurred API costs. Stripe\'s own per-key limits eventually triggered a suspension of the merchant\'s account.',
                    },
                    {
                      label: 'GitHub Actions Cache Stampede',
                      desc: 'A newly deployed GitHub Actions workflow had an infinite retry loop on cache miss. During a CI spike, 3,000 parallel jobs each retried the cache API every 500ms. GitHub\'s rate limiting responded with 429s, but the client code treated 429 as a transient error and retried immediately — amplifying the problem. Exponential backoff with jitter would have self-healed within minutes.',
                    },
                    {
                      label: 'Twitter API v2 Migration',
                      desc: 'When Twitter migrated from v1 to v2 and tightened rate limits from 900 to 500 requests per 15-minute window, hundreds of production applications that relied on "free" unlimited access collapsed overnight. Teams with proper rate limit header parsing (Retry-After, X-Rate-Limit-Remaining) recovered in hours; others spent days debugging cascading timeouts.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${G}`, borderRadius: '8px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: G, marginBottom: '8px', fontSize: '0.95rem' }}>{item.label}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontSize: '0.93rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  {[
                    { label: 'DDoS Protection', desc: 'Caps request volume per IP or key before it saturates your origin.' },
                    { label: 'Cost Control', desc: 'Prevents runaway automation from generating unexpected cloud/API charges.' },
                    { label: 'Fair Use Enforcement', desc: 'Ensures high-volume users cannot degrade experience for others.' },
                    { label: 'SLA Guarantees', desc: 'Keeps latency and availability within contractual bounds for all tenants.' },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontWeight: 700, color: '#fff', marginBottom: '6px', fontSize: '0.9rem' }}>{item.label}</div>
                      <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0, fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 2: ALGORITHMS ── */}
              <section id="algorithms" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Rate Limiting Algorithms Compared
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Choosing the right algorithm determines whether your API rejects bursts gracefully or allows them intentionally. Each algorithm trades precision, memory usage, and implementation complexity differently.
                </p>

                <div data-reveal style={{ overflowX: 'auto', marginBottom: '32px' }}>
                  <table className="algo-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Algorithm</th>
                        <th style={{ textAlign: 'left' }}>Burst Handling</th>
                        <th style={{ textAlign: 'left' }}>Memory</th>
                        <th style={{ textAlign: 'left' }}>Precision</th>
                        <th style={{ textAlign: 'left' }}>Best Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Token Bucket</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Allows burst up to bucket size</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>O(1) per key</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Approximate</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Public APIs, general purpose</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Sliding Window Log</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>No burst — precise count</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>O(N requests in window)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Exact</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Strict per-user financial APIs</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Fixed Window Counter</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>2× burst at window boundary</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>O(1) per key</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Low</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Simple quota enforcement</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Leaky Bucket</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Rejects excess bursts</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>O(1) per key</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Moderate</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Rate-smoothing, queuing systems</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div data-reveal style={{ display: 'grid', gap: '20px' }}>
                  {[
                    {
                      name: 'Token Bucket',
                      pro: 'Natural burst allowance mirrors real user behavior. O(1) storage. Tokens replenish continuously — no sharp window resets.',
                      con: 'Approximate — an attacker can always consume the full bucket in the first millisecond of each refill cycle.',
                      when: 'Default choice for public REST APIs where short bursts are acceptable (e.g., loading a dashboard that fires 5 requests at once).',
                    },
                    {
                      name: 'Sliding Window Log',
                      pro: 'Exact request count within any rolling time window. No boundary burst problem. Best auditability.',
                      con: 'Stores a timestamp for every request in the window. At high traffic, memory consumption is proportional to request volume. Expensive to query.',
                      when: 'Financial APIs, SMS/email sending APIs, any context where you must guarantee exactly N per window with no exceptions.',
                    },
                    {
                      name: 'Fixed Window Counter',
                      pro: 'Simplest possible implementation: single Redis INCR + EXPIRE. Lowest memory and CPU overhead.',
                      con: 'Boundary burst problem: a user can fire N requests at the end of window T and N more at the start of T+1, effectively 2N in a short span.',
                      when: 'Coarse daily/monthly quota enforcement (e.g., "1,000 API calls per day") where sub-minute precision does not matter.',
                    },
                    {
                      name: 'Leaky Bucket',
                      pro: 'Guarantees a smooth, constant output rate regardless of input burst. Ideal for protecting downstream services from spikes.',
                      con: 'Bursts are lost rather than queued, which frustrates legitimate users with bursty patterns. Harder to reason about for end users.',
                      when: 'Upstream rate-smoothing before hitting a downstream service with strict capacity (e.g., a payment processor or external partner API).',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1rem', marginBottom: '12px' }}>{item.name}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '10px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pros</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.pro}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cons</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.con}</p>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best For</div>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.when}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 3: REDIS IMPLEMENTATION ── */}
              <section id="redis-implementation" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Redis-Based Rate Limiting Implementation
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Redis is the de facto standard for production rate limiting because it provides sub-millisecond latency, atomic operations via Lua scripts, and native TTL support. Here are the key patterns you need.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Token Bucket — INCR + EXPIRE</h3>
                <pre data-reveal><code>{`// Node.js — Token Bucket via Redis INCR + EXPIRE
async function isAllowed(redis, key, limit, windowSeconds) {
  const current = await redis.incr(key);
  if (current === 1) {
    // First request in window — set TTL
    await redis.expire(key, windowSeconds);
  }
  return current <= limit;
}

// Usage
const allowed = await isAllowed(redis, \`rl:\${userId}\`, 100, 60);
if (!allowed) {
  res.status(429).json({ error: 'Rate limit exceeded', retryAfter: 60 });
  return;
}`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Sliding Window Log — ZADD + ZREMRANGEBYSCORE</h3>
                <pre data-reveal><code>{`// Sliding Window Log — stores timestamp per request as sorted set
async function slidingWindowCheck(redis, key, limit, windowMs) {
  const now = Date.now();
  const windowStart = now - windowMs;

  const pipeline = redis.pipeline();
  // Remove timestamps outside the window
  pipeline.zremrangebyscore(key, '-inf', windowStart);
  // Add current request timestamp
  pipeline.zadd(key, now, \`\${now}-\${Math.random()}\`);
  // Count requests in window
  pipeline.zcard(key);
  // Set TTL so keys self-clean
  pipeline.expire(key, Math.ceil(windowMs / 1000) + 1);
  const results = await pipeline.exec();

  const requestCount = results[2][1];
  return requestCount <= limit;
}`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Atomic Lua Script (Race-Condition Safe)</h3>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '12px' }}>
                  The INCR + EXPIRE pattern above has a tiny race window between the two commands. Use a Lua script to make the operation fully atomic — Redis executes Lua scripts as a single unit with no interruption.
                </p>
                <pre data-reveal><code>{`-- rate_limit.lua — atomic token bucket
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])

local current = redis.call('GET', key)
if current and tonumber(current) >= limit then
  return 0  -- rate limited
end

local new_val = redis.call('INCR', key)
if new_val == 1 then
  redis.call('EXPIRE', key, window)
end
return 1  -- allowed

-- Load and call from Node.js:
-- const result = await redis.eval(luaScript, 1, key, limit, windowSecs);`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Using redis-rate-limiter (npm)</h3>
                <pre data-reveal><code>{`import { RateLimiterRedis } from 'rate-limiter-flexible';
import { createClient } from 'redis';

const redisClient = createClient({ url: process.env.REDIS_URL });
await redisClient.connect();

const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rl',
  points: 100,       // max requests
  duration: 60,      // per 60 seconds
  blockDuration: 30, // block for 30s after limit exceeded
});

// Express middleware
export async function rateLimitMiddleware(req, res, next) {
  try {
    const key = req.user?.id ?? req.ip;
    await rateLimiter.consume(key);
    next();
  } catch (rejRes) {
    const secs = Math.ceil(rejRes.msBeforeNext / 1000);
    res.set('Retry-After', String(secs));
    res.status(429).json({ error: 'Too Many Requests', retryAfter: secs });
  }
}`}</code></pre>

                <div data-reveal style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', padding: '20px', marginTop: '24px' }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>Key Production Considerations</div>
                  <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                    <li><strong style={{ color: '#fff' }}>Redis Cluster vs Single-Node:</strong> Use cluster mode for HA. Be aware that Lua scripts must run on the same shard — ensure your keys hash to the same slot using hash tags: <code>{'{{userId}}'}</code>.</li>
                    <li><strong style={{ color: '#fff' }}>Lua Atomicity:</strong> Redis executes Lua scripts single-threaded with no preemption. This is your safest option for race-free counters, but keep scripts short to avoid blocking other clients.</li>
                    <li><strong style={{ color: '#fff' }}>TTL Management:</strong> Always set a TTL. Without it, rate limit keys accumulate indefinitely. Use slightly longer TTL than your window (window + 1 second) to avoid edge-case expiry during window evaluation.</li>
                    <li><strong style={{ color: '#fff' }}>Graceful Degradation:</strong> If Redis is unavailable, decide upfront: fail open (allow all traffic) or fail closed (block all traffic). Most APIs fail open with logging to avoid an outage-within-an-outage.</li>
                  </ul>
                </div>
              </section>

              {/* ── SECTION 4: API GATEWAY ── */}
              <section id="api-gateway" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  API Gateway Rate Limiting Solutions
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  For most teams, the right move is to enforce rate limiting at the gateway layer before requests reach application code. Here is how the major platforms compare.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Kong Rate Limiting Plugin (YAML Config)</h3>
                <pre data-reveal><code>{`# kong.yml — Declarative config for rate limiting plugin
plugins:
  - name: rate-limiting
    config:
      minute: 100          # requests per minute
      hour: 2000           # requests per hour
      policy: redis        # local | cluster | redis
      redis_host: redis.internal
      redis_port: 6379
      redis_timeout: 2000
      limit_by: consumer   # ip | consumer | credential | header | path
      hide_client_headers: false
      fault_tolerant: true # fail open if Redis is down`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>AWS API Gateway — Usage Plans + Throttling</h3>
                <pre data-reveal><code>{`# AWS CDK — API Gateway Usage Plan with throttling
const plan = api.addUsagePlan('BasicPlan', {
  name: 'Basic',
  throttle: {
    rateLimit: 100,   // requests per second (steady state)
    burstLimit: 200,  // token bucket size (max concurrent burst)
  },
  quota: {
    limit: 10000,         // total requests
    period: Period.MONTH, // per calendar month
  },
});

// Attach an API key to the plan
const key = api.addApiKey('MyApiKey');
plan.addApiKey(key);

// Attach the plan to a stage
plan.addApiStage({ stage: api.deploymentStage });`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Cloudflare Rate Limiting</h3>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '12px' }}>
                  Cloudflare&apos;s rule builder lets you create rate limit rules based on IP, User-Agent, ASN, cookie, header value, or request path. Rules fire before the request reaches your origin, making them ideal for DDoS mitigation.
                </p>
                <pre data-reveal><code>{`# Cloudflare Rate Limiting Rule (Terraform)
resource "cloudflare_rate_limit" "api" {
  zone_id   = var.zone_id
  threshold = 100
  period    = 60  # seconds

  match {
    request {
      url_pattern = "example.com/api/*"
      schemes     = ["HTTPS"]
      methods     = ["GET", "POST"]
    }
  }

  action {
    mode    = "ban"
    timeout = 300  # ban for 5 minutes
    response {
      content_type = "application/json"
      body         = "{\"error\":\"rate limited\"}"
    }
  }
}`}</code></pre>

                <div data-reveal style={{ overflowX: 'auto', marginTop: '32px' }}>
                  <table className="algo-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Solution</th>
                        <th style={{ textAlign: 'left' }}>Cost</th>
                        <th style={{ textAlign: 'left' }}>Complexity</th>
                        <th style={{ textAlign: 'left' }}>Algorithm</th>
                        <th style={{ textAlign: 'left' }}>Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Kong</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Free (OSS) / Paid</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Medium</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Sliding Window</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Self-hosted microservices</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>AWS API GW</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Pay-per-call</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Low</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Token Bucket</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>AWS-native serverless APIs</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Cloudflare</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>$5/mo + overages</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Low</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Fixed Window</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Edge DDoS protection</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Nginx limit_req</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Free</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Medium</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Leaky Bucket</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Simple single-server setup</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 5: AUTHENTICATION ── */}
              <section id="authentication" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  API Authentication Methods Compared
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Rate limiting works best when paired with strong authentication — you can only enforce fair use if you know who is making the request. Here is how the four major approaches compare across eight dimensions.
                </p>

                <div data-reveal style={{ overflowX: 'auto' }}>
                  <table className="algo-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Factor</th>
                        <th style={{ textAlign: 'left' }}>API Keys</th>
                        <th style={{ textAlign: 'left' }}>OAuth 2.0</th>
                        <th style={{ textAlign: 'left' }}>JWT</th>
                        <th style={{ textAlign: 'left' }}>mTLS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Complexity', 'Very Low', 'High', 'Medium', 'High'],
                        ['Revocation', 'Immediate (DB lookup)', 'Token introspection', 'Hard (requires blacklist)', 'Certificate revocation (CRL/OCSP)'],
                        ['Expiry', 'Manual rotation', 'Short-lived tokens', 'Built-in (exp claim)', 'Certificate validity period'],
                        ['Use Case', 'Server-to-server, simple', 'User-delegated access', 'Stateless auth at scale', 'Zero-trust service mesh'],
                        ['Client Type', 'Any', 'Browser, Mobile, Server', 'Any', 'Server-to-server only'],
                        ['Server Load', 'DB lookup per request', 'Token exchange overhead', 'Verify signature only', 'TLS handshake overhead'],
                        ['Standards', 'None (ad-hoc)', 'RFC 6749 / 6750', 'RFC 7519', 'RFC 5246 / 8446'],
                        ['Ecosystem', 'Universal', 'Excellent (Google, GitHub…)', 'Excellent (every language)', 'Strong (service mesh)'],
                      ].map(([factor, ...vals], i) => (
                        <tr key={i}>
                          <td><strong style={{ color: '#fff' }}>{factor}</strong></td>
                          {vals.map((v, j) => (
                            <td key={j} style={{ color: 'rgba(255,255,255,0.65)' }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 6: JWT BEST PRACTICES ── */}
              <section id="jwt-best-practices" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  JWT Best Practices
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                  JWTs are everywhere — and widely misused. These are the non-negotiable practices for production JWT systems.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>1. Token Lifetimes — Keep Them Short</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 10px' }}>
                      Access tokens should expire in <strong style={{ color: '#fff' }}>15 minutes</strong>. Refresh tokens can live for <strong style={{ color: '#fff' }}>7 days</strong> but must be single-use and rotated on every use. If a refresh token is used twice (replay attack), invalidate the entire refresh token family immediately.
                    </p>
                    <pre style={{ margin: 0 }}><code>{`// Issuing tokens
const accessToken = jwt.sign(
  { sub: userId, iss: 'api.yourdomain.com', aud: 'app', jti: uuidv4() },
  privateKey,
  { algorithm: 'RS256', expiresIn: '15m' }
);

const refreshToken = jwt.sign(
  { sub: userId, family: familyId, jti: uuidv4() },
  refreshSecret,
  { expiresIn: '7d' }
);`}</code></pre>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>2. RS256 vs HS256 — Use Asymmetric Keys for Multi-Service</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 10px' }}>
                      HS256 uses a shared secret — every service that needs to verify tokens must hold the secret, creating a wide attack surface. RS256 uses a private key to sign (held only by your auth server) and a public key to verify (distributed freely to all services). Use RS256 in any multi-service architecture.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ color: '#f87171', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>HS256 — Avoid in Multi-Service</div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>Shared secret. All verifiers must know the secret. One compromised service leaks all tokens.</p>
                      </div>
                      <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ color: G, fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>RS256 — Recommended</div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>Private key signs. Public key verifies. Services get the public key from a JWKS endpoint.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>3. JWT Standard Claims — What Each Means</div>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {[
                        { claim: 'iss', desc: 'Issuer — who created the token (e.g., "auth.yourdomain.com"). Validate this on every request.' },
                        { claim: 'sub', desc: 'Subject — the user or entity the token represents. Usually your userId.' },
                        { claim: 'aud', desc: 'Audience — the intended recipient service. Validate to prevent token reuse across services.' },
                        { claim: 'exp', desc: 'Expiration — Unix timestamp after which the token must be rejected. Always validate.' },
                        { claim: 'iat', desc: 'Issued At — when the token was created. Useful for detecting clock skew attacks.' },
                        { claim: 'jti', desc: 'JWT ID — a unique token identifier. Required for implementing token blacklists.' },
                      ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <code style={{ flexShrink: 0, marginTop: '2px' }}>{item.claim}</code>
                          <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: '#f87171', marginBottom: '10px' }}>Never Put PII in JWT Payload</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
                      JWT payloads are base64-encoded, not encrypted. Anyone with the token can decode the payload without a key. Never include email addresses, phone numbers, credit card details, or any personally identifiable information. The payload is visible to clients, intermediary proxies, and anyone with access to server logs. Include only a userId and minimal claims needed for routing/authorization decisions.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── SECTION 7: OAUTH2 FLOWS ── */}
              <section id="oauth2-flows" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  OAuth 2.0 Flows — When to Use Each
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                  OAuth 2.0 defines several grant types optimized for different client environments. Choosing the wrong flow is a common security mistake.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      flow: 'Authorization Code + PKCE',
                      forWhat: 'Web apps, mobile apps, any user-facing application',
                      desc: 'The user is redirected to the authorization server, authenticates, and is redirected back with an authorization code. The code is exchanged for tokens server-side (or via PKCE for public clients). PKCE (Proof Key for Code Exchange) prevents authorization code interception attacks — mandatory for mobile and SPA apps.',
                      example: 'User logs into your SaaS with Google/GitHub SSO. Your app gets an access token to call Google APIs on their behalf.',
                    },
                    {
                      flow: 'Client Credentials',
                      forWhat: 'Machine-to-machine (M2M) communication — no user involved',
                      desc: 'Your service authenticates directly with the auth server using its client ID and secret, and receives an access token. There is no user redirect, no consent screen. Used when your backend needs to call another service\'s API using its own identity.',
                      example: 'Your billing microservice calling the notifications microservice. Your CI/CD pipeline calling your deployment API.',
                    },
                    {
                      flow: 'Device Authorization Flow',
                      forWhat: 'Devices with limited input capability (TVs, IoT, CLI tools)',
                      desc: 'The device displays a short code and a URL. The user goes to the URL on another device (phone/laptop) and enters the code to authorize. The device polls the token endpoint until authorization is granted or times out.',
                      example: 'Logging into Netflix on a smart TV. Authorizing a CLI tool (like GitHub CLI or AWS CLI) to access your account.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1rem', marginBottom: '4px' }}>{item.flow}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.forWhat}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 10px', fontSize: '0.9rem' }}>{item.desc}</p>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                        <strong style={{ color: G }}>Example: </strong>{item.example}
                      </div>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ overflowX: 'auto' }}>
                  <table className="algo-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Flow</th>
                        <th style={{ textAlign: 'left' }}>User Present?</th>
                        <th style={{ textAlign: 'left' }}>Redirect?</th>
                        <th style={{ textAlign: 'left' }}>PKCE?</th>
                        <th style={{ textAlign: 'left' }}>Token Storage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Auth Code + PKCE</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Yes</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Yes</td>
                        <td style={{ color: G }}>Required</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>HttpOnly cookie or memory</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Client Credentials</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>No</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>No</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>N/A</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Server env variable / vault</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Device Flow</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Yes (on 2nd device)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>No</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>No</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Device secure storage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ── SECTION 8: RATE LIMIT HEADERS ── */}
              <section id="rate-limit-headers" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Rate Limit Headers &amp; Client Handling
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Well-behaved APIs communicate rate limit state through standard response headers. This lets clients self-throttle before hitting the limit, dramatically reducing unnecessary 429 responses.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Standard Response Headers</h3>
                <pre data-reveal><code>{`HTTP/1.1 200 OK
RateLimit-Limit: 100
RateLimit-Remaining: 47
RateLimit-Reset: 1742600000
Retry-After: 32
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 47
X-RateLimit-Reset: 1742600000

# When rate limited (HTTP 429):
HTTP/1.1 429 Too Many Requests
Retry-After: 32
RateLimit-Policy: 100;w=60;comment="sliding window"
Content-Type: application/json

{
  "error": "too_many_requests",
  "message": "Rate limit exceeded. Retry after 32 seconds.",
  "retryAfter": 32
}`}</code></pre>

                <div data-reveal style={{ display: 'grid', gap: '12px', margin: '24px 0' }}>
                  {[
                    { header: 'RateLimit-Limit', desc: 'The maximum number of requests allowed in the current window. Set this to the limit for the caller\'s current tier.' },
                    { header: 'RateLimit-Remaining', desc: 'Requests remaining in the current window. Clients should start throttling themselves when this approaches zero.' },
                    { header: 'RateLimit-Reset', desc: 'Unix timestamp (seconds) when the current window resets. Clients can calculate exact wait time.' },
                    { header: 'Retry-After', desc: 'Defined in RFC 6585. Seconds to wait before retrying. Sent with 429 and 503 responses. Takes priority over RateLimit-Reset.' },
                    { header: 'RateLimit-Policy', desc: 'New IETF draft header. Describes the rate limit policy: limit;w=window;burst=N. Helps clients understand the algorithm.' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '14px 16px' }}>
                      <code style={{ flexShrink: 0, fontSize: '0.8rem' }}>{item.header}</code>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem', lineHeight: 1.6 }}>{item.desc}</span>
                    </div>
                  ))}
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Client-Side 429 Handling — Exponential Backoff with Jitter</h3>
                <pre data-reveal><code>{`// Fetch with exponential backoff + jitter
async function fetchWithRetry(url, options = {}, maxRetries = 5) {
  let attempt = 0;
  while (attempt <= maxRetries) {
    const response = await fetch(url, options);
    if (response.status !== 429) return response;

    const retryAfter = response.headers.get('Retry-After');
    const baseWait = retryAfter
      ? parseInt(retryAfter, 10) * 1000
      : Math.min(1000 * 2 ** attempt, 64000);

    // Add jitter: +/- 20% of base wait to avoid thundering herd
    const jitter = baseWait * 0.2 * (Math.random() - 0.5);
    const waitMs = Math.round(baseWait + jitter);

    console.warn(\`429 received. Waiting \${waitMs}ms before retry \${attempt + 1}\`);
    await new Promise(resolve => setTimeout(resolve, waitMs));
    attempt++;
  }
  throw new Error(\`Max retries exceeded for \${url}\`);
}`}</code></pre>
              </section>

              {/* ── SECTION 9: SECURITY HARDENING ── */}
              <section id="security-hardening" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Security Hardening Techniques
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '24px' }}>
                  Rate limiting and authentication are the foundation, but production APIs need additional layers. Here are the hardening techniques used at scale.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>HMAC Request Signing (AWS SigV4 Pattern)</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.9rem' }}>
                      Sign the request body and key headers using HMAC-SHA256 with a shared secret. The server recomputes the signature and rejects any request where it does not match. This prevents request tampering in transit and replay attacks (use a timestamp in the signed content, reject if timestamp is older than 5 minutes).
                    </p>
                    <pre style={{ margin: 0 }}><code>{`// HMAC request signing
import crypto from 'crypto';

function signRequest(body, secret) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const payload = timestamp + '.' + JSON.stringify(body);
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return { 'X-Timestamp': timestamp, 'X-Signature': \`sha256=\${sig}\` };
}`}</code></pre>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>IP Allowlisting for Internal Services</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>
                      Internal APIs (metrics endpoints, admin APIs, database management interfaces) should only be reachable from known IP ranges. Use your cloud provider&apos;s security group rules (AWS: security groups, GCP: firewall rules, Cloudflare: IP Access Rules) to allowlist your office IPs, VPN exit nodes, and deployment server IPs. Layer this with authentication — never rely solely on IP allowlisting as it can be spoofed in certain network configurations.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>mTLS for Service Mesh (Istio/Linkerd)</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0, fontSize: '0.9rem' }}>
                      Mutual TLS means both the client and server authenticate each other with certificates — not just the server proving identity to the client. In a Kubernetes environment, Istio or Linkerd can enforce mTLS automatically between all services in the mesh, with zero code changes. Every service gets a SPIFFE/SPIRE identity certificate. This eliminates the need for API keys between internal services entirely and makes lateral movement after a breach dramatically harder.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>API Versioning Strategy</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.9rem' }}>
                      Versioning your API allows you to make breaking changes without forcing all clients to update simultaneously. Two common approaches:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ color: '#fff', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>URL Path Versioning</div>
                        <code style={{ fontSize: '0.8rem' }}>/api/v1/users</code>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5, margin: '8px 0 0' }}>Cacheable, visible in logs, easy to route at gateway level. Recommended for public APIs.</p>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '12px' }}>
                        <div style={{ color: '#fff', fontWeight: 700, marginBottom: '6px', fontSize: '0.85rem' }}>Header Versioning</div>
                        <code style={{ fontSize: '0.8rem' }}>Accept: application/vnd.api+json;version=2</code>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.5, margin: '8px 0 0' }}>Cleaner URLs, but harder to test in browsers and debug in logs.</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>Webhook Security — Shared Secret + Signature Validation</div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.9rem' }}>
                      When receiving webhooks, you cannot use OAuth since the provider is pushing to you. Instead, validate the HMAC signature that providers include in the request headers (e.g., <code>X-Hub-Signature-256</code> from GitHub, <code>Stripe-Signature</code> from Stripe).
                    </p>
                    <pre style={{ margin: 0 }}><code>{`// Webhook signature validation (Stripe/GitHub pattern)
function validateWebhook(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  const trusted = \`sha256=\${expected}\`;
  // Use timingSafeEqual to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(trusted)
  );
}`}</code></pre>
                  </div>
                </div>
              </section>

              {/* ── SECTION 10: FAQ ── */}
              <section id="faq" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '24px' }}>
                  Frequently Asked Questions
                </h2>
                <div data-reveal style={{ display: 'grid', gap: '12px' }}>
                  {faqItems.map((item, i) => (
                    <div key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        className="faq-btn"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: 'none', color: '#fff', padding: '18px 20px', textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: 600 }}
                      >
                        <span>{item.q}</span>
                        <span style={{ color: G, fontSize: '1.3rem', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 20px 18px', background: 'rgba(255,255,255,0.02)' }}>
                          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0, fontSize: '0.9rem' }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CTA ── */}
              <section data-reveal style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.04))', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>
                  Book a Security Architecture Review
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 28px' }}>
                  Our senior engineers will audit your API authentication, rate limiting configuration, and token handling — and deliver a prioritized remediation plan within 5 business days.
                </p>
                <Link
                  href="/contact"
                  style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.01em' }}
                >
                  Book a Free Security Review
                </Link>
              </section>

            </article>

            {/* ── SIDEBAR ── */}
            <aside className="sidebar" style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* TOC */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', fontSize: '0.95rem' }}>Contents</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {tocSections.map((s) => (
                    <button
                      key={s.id}
                      className="toc-link"
                      onClick={() => scrollTo(s.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        borderLeft: `2px solid ${activeSection === s.id ? G : 'rgba(255,255,255,0.1)'}`,
                        color: activeSection === s.id ? G : 'rgba(255,255,255,0.5)',
                        padding: '7px 14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.83rem',
                        fontWeight: activeSection === s.id ? 700 : 400,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Rate Limit Header Reference */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: '14px', fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Header Quick Reference</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { h: 'RateLimit-Limit', v: 'Max requests/window' },
                    { h: 'RateLimit-Remaining', v: 'Requests left' },
                    { h: 'RateLimit-Reset', v: 'Unix reset timestamp' },
                    { h: 'Retry-After', v: 'Seconds to wait (429)' },
                    { h: 'RateLimit-Policy', v: 'Policy descriptor (IETF draft)' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <code style={{ fontSize: '0.75rem' }}>{item.h}</code>
                      <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{item.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '14px', fontSize: '0.9rem' }}>Related Articles</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {relatedPosts.map((post, i) => (
                    <Link
                      key={i}
                      href={post.href}
                      style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5, textDecoration: 'none', borderLeft: `2px solid rgba(34,197,94,0.3)`, paddingLeft: '10px', transition: 'color 0.2s', display: 'block' }}
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <Link
                href="/contact"
                style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '14px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', textAlign: 'center', letterSpacing: '0.01em' }}
              >
                Book a Security Review
              </Link>

            </aside>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
