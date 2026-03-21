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
  { id: 'testing-pyramid', label: 'Mobile Testing Pyramid' },
  { id: 'test-types', label: 'Types of Mobile Testing' },
  { id: 'tool-comparison', label: 'Tool Comparison: Detox, Appium, XCTest, Espresso' },
  { id: 'device-farms', label: 'Device Farms: Firebase Test Lab & BrowserStack' },
  { id: 'automation-vs-manual', label: 'Automation vs Manual Testing' },
  { id: 'cicd-mobile', label: 'CI/CD for Mobile' },
  { id: 'crash-reporting', label: 'Crash Reporting & Monitoring' },
  { id: 'beta-testing', label: 'Beta Testing Strategy' },
  { id: 'launch-checklist', label: 'Pre-Launch Checklist' },
  { id: 'faq', label: 'FAQ' },
];

const relatedPosts = [
  { title: 'Flutter vs React Native in 2026', href: '/blog/flutter-vs-react-native-2026' },
  { title: 'Load Testing Guide 2026', href: '/blog/load-testing-guide-2026' },
  { title: 'App Development Cost Guide 2026', href: '/blog/how-much-does-app-development-cost-2026' },
  { title: 'API Rate Limiting & Authentication Best Practices 2026', href: '/blog/api-rate-limiting-guide' },
];

const G = '#22c55e';

export default function PageClient() {
  const pageRef = useReveal();
  const [activeSection, setActiveSection] = useState('testing-pyramid');
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
      q: 'How many real devices should I test on before releasing?',
      a: 'At minimum, test on three to five real devices covering your top device categories by market share. For iOS this typically means the current iPhone (full display), one iPhone from two generations back, and an iPad if you support tablets. For Android, cover a flagship (Samsung Galaxy S-series), a mid-range device (Pixel 6a or similar), and a budget device (Moto G-series) — these have very different performance profiles, GPU capabilities, and sometimes different WebView versions. Use Firebase Test Lab or BrowserStack to run your automated suite across 20–30 devices in CI, then reserve real device hands-on testing for critical flows.',
    },
    {
      q: 'What is the right balance of unit, integration, and E2E tests for mobile?',
      a: 'Follow the testing pyramid: aim for roughly 70% unit tests, 20% integration tests, and 10% E2E tests by count. Unit tests are fast (milliseconds), cheap to maintain, and run on every commit. E2E tests are slow (minutes per test), brittle, and expensive to maintain — but irreplaceable for validating full user flows. In practice for React Native: Jest unit tests for business logic and components, React Native Testing Library for component integration, Detox for E2E flows covering your top 5–10 user journeys.',
    },
    {
      q: 'Is Detox or Appium better for React Native testing?',
      a: 'Detox is almost always the better choice for React Native in 2026. Detox is purpose-built for React Native, uses a grey-box approach (communicating directly with the React Native bridge) rather than Appium\'s black-box approach, and is dramatically faster and more reliable. Detox tests are less brittle, have better synchronization with async operations, and integrate more naturally with JavaScript tooling. Choose Appium if you have a cross-platform test suite that covers both iOS and Android and multiple app types (native, hybrid, web), or if your team already has deep Appium expertise.',
    },
    {
      q: 'How do I test push notifications in automated tests?',
      a: 'Push notification testing is one of the trickiest areas in mobile automation. For unit/integration tests, mock the push notification service entirely and test the notification handling logic in isolation. For E2E tests, Detox supports triggering local notifications programmatically on simulators. For real device testing, use Firebase Test Lab\'s test loop feature combined with a test Notification service account. For end-to-end production push testing, use a tool like Pushwoosh or your APNs/FCM test console to send to specific device tokens registered by your QA devices.',
    },
    {
      q: 'What crash reporting tool should I use for a React Native app?',
      a: 'Sentry is the most developer-friendly choice for React Native in 2026. It captures both native crashes (iOS/Android) and JavaScript errors with full React component stack traces, automatically deobfuscates and desymbolizes crash reports, integrates with source maps for readable stack traces from production, and groups similar errors into issues. Firebase Crashlytics is a strong free alternative if you are already in the Firebase ecosystem — it has excellent native crash symbolication but weaker JavaScript error tracking. Use both if budget allows: Crashlytics for native crashes, Sentry for JS errors and performance monitoring.',
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
        .data-table td, .data-table th { padding: 10px 14px; border: 1px solid rgba(255,255,255,0.08); }
        .data-table th { background: rgba(34,197,94,0.1); color: ${G}; font-weight: 600; }
        .data-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
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
              Mobile Engineering · March 2026
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Mobile App Testing Guide 2026:<br />
              <span style={{ color: G }}>Complete QA Strategy</span>
            </h1>
            <p data-reveal style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              A production-grade QA playbook covering the mobile testing pyramid, tool comparisons (Detox, Appium, XCTest, Espresso, Firebase Test Lab, BrowserStack), CI/CD pipelines, crash reporting, beta testing, and a pre-launch checklist.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem' }}>
              <span>22 min read</span>
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

              {/* ── SECTION 1: TESTING PYRAMID ── */}
              <section id="testing-pyramid" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
                  The Mobile Testing Pyramid
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '16px' }}>
                  The testing pyramid is the foundational model for building a sustainable, cost-effective mobile QA strategy. It prescribes writing many small, fast tests at the bottom (unit), fewer medium-scope tests in the middle (integration), and a small number of slow, comprehensive tests at the top (E2E).
                </p>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Mobile teams that invert the pyramid — relying primarily on manual and E2E tests — pay a steep price: slow feedback cycles, brittle test suites that break on every UI change, and an inability to ship confidently at speed. The pyramid keeps your test suite fast, maintainable, and genuinely useful.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                  {[
                    {
                      layer: 'Unit Tests — 70% of your suite',
                      tools: 'Jest, JUnit, XCTest',
                      desc: 'Test individual functions, reducers, ViewModels, and business logic in complete isolation. No network calls, no filesystem, no UI rendering. Run in milliseconds. Should cover every edge case in your core logic: authentication state machines, data transformation functions, API response parsing, price calculation, form validation.',
                      speed: '< 1ms per test',
                      maintenance: 'Low — pure logic, minimal change when UI evolves',
                      color: G,
                    },
                    {
                      layer: 'Integration Tests — 20% of your suite',
                      tools: 'React Native Testing Library, Espresso (unit mode), XCTest',
                      desc: 'Test how components and modules work together — without a real device or network. Render components with real (mocked) data, verify that a Redux action updates the UI correctly, confirm that navigation happens after a form submission. Slower than unit tests but far more realistic.',
                      speed: '10ms–200ms per test',
                      maintenance: 'Medium — changes when component contracts change',
                      color: '#fbbf24',
                    },
                    {
                      layer: 'E2E Tests — 10% of your suite',
                      tools: 'Detox, Appium, XCUITest, Espresso (UI mode)',
                      desc: 'Test the full application from the user\'s perspective on a real device or simulator. Covers complete user journeys: sign up, complete onboarding, make a purchase, receive a push notification. Slow, potentially brittle, and expensive to maintain — but irreplaceable for catching integration failures between app and backend.',
                      speed: '30s–5 min per test',
                      maintenance: 'High — tightly coupled to UI structure and backend behavior',
                      color: '#f87171',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${item.color}`, borderRadius: '10px', padding: '22px' }}>
                      <div style={{ fontWeight: 700, color: item.color, fontSize: '1rem', marginBottom: '6px' }}>{item.layer}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '10px' }}>Tools: {item.tools}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 14px', fontSize: '0.92rem' }}>{item.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '10px 14px' }}>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Speed</div>
                          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', margin: 0 }}>{item.speed}</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', padding: '10px 14px' }}>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Maintenance</div>
                          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', margin: 0 }}>{item.maintenance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontWeight: 700, color: G, marginBottom: '8px' }}>The Anti-Pattern: The Ice Cream Cone</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
                    Many mobile teams end up with an inverted pyramid — heavy reliance on manual testing and E2E automation, almost no unit tests. This is called the &quot;ice cream cone&quot; and it is a quality crisis waiting to happen. E2E tests break when UI changes, take hours to run, and provide no signal about where the bug actually lives. If your team&apos;s QA process is primarily manual with a few flaky E2E tests, reorganizing toward the pyramid is the highest-ROI improvement you can make.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2: TEST TYPES ── */}
              <section id="test-types" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Types of Mobile App Testing
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Beyond the pyramid&apos;s structural layers, there are specialized testing disciplines that target specific risk areas of mobile apps. A mature QA strategy integrates all of them.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                  {[
                    {
                      type: 'Functional / UI Testing',
                      what: 'Verifies that every feature works as the user expects — buttons respond, forms validate, data displays correctly, navigation flows correctly.',
                      tools: 'Detox, Appium, XCUITest, Espresso',
                      priority: 'Critical',
                    },
                    {
                      type: 'Performance Testing',
                      what: 'Measures app startup time, screen render time, memory usage, CPU usage, battery consumption, and network efficiency. Reveals issues that make the app feel sluggish on real hardware.',
                      tools: 'Android Profiler, Instruments (Xcode), Firebase Performance Monitoring',
                      priority: 'High',
                    },
                    {
                      type: 'Security Testing',
                      what: 'Checks for insecure data storage (plaintext secrets in SharedPreferences/UserDefaults), unencrypted API communication, certificate pinning bypass, insecure deep link handling, and sensitive data leakage in logs or screenshots.',
                      tools: 'MobSF, OWASP ZAP, Frida, Burp Suite Mobile',
                      priority: 'High',
                    },
                    {
                      type: 'Accessibility Testing',
                      what: 'Ensures the app is usable by people with disabilities. Verifies that all interactive elements have accessibility labels, sufficient color contrast, logical focus order, and that screen readers (VoiceOver/TalkBack) can navigate the app meaningfully.',
                      tools: 'Accessibility Inspector (iOS), Accessibility Scanner (Android), axe DevTools Mobile',
                      priority: 'High',
                    },
                    {
                      type: 'Compatibility Testing',
                      what: 'Validates that the app works correctly across different OS versions, screen sizes, device manufacturers (especially on Android), and locale/language settings. Also tests behavior with different system settings: dark mode, large text, reduced motion.',
                      tools: 'Firebase Test Lab, BrowserStack, Sauce Labs',
                      priority: 'High',
                    },
                    {
                      type: 'Network Condition Testing',
                      what: 'Tests app behavior under poor network conditions — slow 3G, airplane mode, sudden connection drops, flaky WiFi. Verifies that error states are handled gracefully, data is not lost, and the app recovers when connectivity returns.',
                      tools: 'Network Link Conditioner (iOS), Android Emulator network settings, Charles Proxy',
                      priority: 'Medium',
                    },
                    {
                      type: 'Installation / Update Testing',
                      what: 'Verifies that fresh installs, updates from previous versions, and uninstall/reinstall cycles work correctly. Particularly important for database migration testing — does upgrading from v2 to v3 correctly migrate all user data?',
                      tools: 'Manual + scripted upgrade tests',
                      priority: 'Medium',
                    },
                    {
                      type: 'Localization Testing',
                      what: 'Validates that translated strings fit UI layouts (German and Russian strings are often 30–50% longer than English), that date/time/currency formats are correct for each locale, and that RTL languages (Arabic, Hebrew) render the UI correctly.',
                      tools: 'Pseudo-localization tools, manual testing in target locales',
                      priority: 'Medium (high if you support multiple languages)',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.97rem' }}>{item.type}</div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 10px', borderRadius: '20px', background: item.priority === 'Critical' ? 'rgba(248,113,113,0.15)' : item.priority === 'High' ? 'rgba(251,191,36,0.12)' : 'rgba(148,163,184,0.1)', color: item.priority === 'Critical' ? '#f87171' : item.priority === 'High' ? '#fbbf24' : '#94a3b8' }}>{item.priority}</span>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: '0 0 8px', fontSize: '0.88rem' }}>{item.what}</p>
                      <div style={{ fontSize: '0.8rem', color: G }}>Tools: <span style={{ color: 'rgba(255,255,255,0.45)' }}>{item.tools}</span></div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 3: TOOL COMPARISON ── */}
              <section id="tool-comparison" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Tool Comparison: Detox, Appium, XCTest, Espresso
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Choosing the right test automation framework shapes your entire QA workflow. Each tool has a distinct architecture and optimal use case.
                </p>

                <div data-reveal style={{ overflowX: 'auto', marginBottom: '32px' }}>
                  <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Tool</th>
                        <th style={{ textAlign: 'left' }}>Platform</th>
                        <th style={{ textAlign: 'left' }}>Approach</th>
                        <th style={{ textAlign: 'left' }}>Language</th>
                        <th style={{ textAlign: 'left' }}>Speed</th>
                        <th style={{ textAlign: 'left' }}>Reliability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Detox</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>iOS + Android (React Native, Expo)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Grey-box (syncs with JS bridge)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>JavaScript / TypeScript</td>
                        <td style={{ color: G }}>Fast</td>
                        <td style={{ color: G }}>High</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Appium</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>iOS, Android, Web, Desktop</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Black-box (WebDriver protocol)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Any (JS, Python, Java, Ruby, C#)</td>
                        <td style={{ color: '#fbbf24' }}>Moderate</td>
                        <td style={{ color: '#fbbf24' }}>Medium</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>XCUITest</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>iOS / iPadOS only</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>White-box (Apple SDK, in-process)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Swift / Objective-C</td>
                        <td style={{ color: G }}>Fast</td>
                        <td style={{ color: G }}>High</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>Espresso</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Android only</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>White-box (Google SDK, in-process)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Java / Kotlin</td>
                        <td style={{ color: G }}>Fast</td>
                        <td style={{ color: G }}>High</td>
                      </tr>
                      <tr>
                        <td><strong style={{ color: '#fff' }}>XCUI + Espresso via Appium</strong></td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>iOS + Android</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Black-box (WebDriver wrapper)</td>
                        <td style={{ color: 'rgba(255,255,255,0.7)' }}>Any</td>
                        <td style={{ color: '#fbbf24' }}>Moderate</td>
                        <td style={{ color: '#fbbf24' }}>Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div data-reveal style={{ display: 'grid', gap: '20px' }}>
                  {[
                    {
                      name: 'Detox',
                      tagline: 'Best E2E framework for React Native and Expo in 2026',
                      pro: 'Grey-box design means Detox automatically waits for async operations to complete before running assertions — dramatically reducing flaky tests caused by timing issues. First-class TypeScript support. Ships with React Native CLI. Excellent documentation and active community. Works with simulators and real devices.',
                      con: 'Only supports React Native and Expo apps. Requires native build process — adds complexity to CI setup. Some Expo managed workflow features require ejecting or using Expo\'s build service.',
                      verdict: 'The default E2E choice for any React Native project. Start here.',
                    },
                    {
                      name: 'Appium',
                      tagline: 'Best when you need cross-platform tests written once in a single language',
                      pro: 'Truly cross-platform — one test suite covers iOS, Android, and mobile web. Supports virtually any programming language via the W3C WebDriver protocol. Works with any app type (native, hybrid, React Native, Flutter). Large ecosystem of drivers and plugins.',
                      con: 'Black-box approach means you must add explicit waits and sleeps — the primary source of test flakiness. Slower test execution than native frameworks. Requires Appium server setup and management. WebDriver protocol overhead adds latency.',
                      verdict: 'Ideal when your team needs a single cross-platform test suite, or when testing hybrid apps, mobile web, or non-React Native frameworks.',
                    },
                    {
                      name: 'XCUITest',
                      tagline: 'Apple\'s official iOS testing framework — fastest and most reliable for native iOS',
                      pro: 'Runs in-process with your app — no network round-trip to an Appium server. Best possible performance and reliability for iOS. Full access to iOS accessibility tree. First-party Apple support and documentation. Integrates natively with Xcode Cloud CI.',
                      con: 'iOS and iPadOS only. Tests must be written in Swift or Objective-C. Cannot easily be reused for Android. Requires Xcode and macOS build agents.',
                      verdict: 'Essential for native iOS apps. For React Native, Detox wraps XCUITest, so you get the same reliability through a more convenient JavaScript interface.',
                    },
                    {
                      name: 'Espresso',
                      tagline: 'Google\'s official Android testing framework — fastest for native Android',
                      pro: 'Runs in-process on Android — no WebDriver server overhead. Automatic synchronization with the main thread, AsyncTask, and RecyclerView scroll animations. Deep integration with Android Studio and Firebase Test Lab. Strong Kotlin support.',
                      con: 'Android only. Kotlin/Java required. Cannot be reused for iOS. RecyclerView interactions require additional Espresso-Contrib library. Idling resource setup can be complex for custom async operations.',
                      verdict: 'The correct choice for native Android apps. For React Native, Detox wraps Espresso under the hood on Android — use Detox for a unified JavaScript experience.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '22px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1.05rem', marginBottom: '4px' }}>{item.name}</div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, marginBottom: '14px' }}>{item.tagline}</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.pro}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitations</div>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.87rem', lineHeight: 1.6, margin: 0 }}>{item.con}</p>
                        </div>
                      </div>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.87rem' }}>
                        <strong style={{ color: G }}>Verdict: </strong><span style={{ color: 'rgba(255,255,255,0.65)' }}>{item.verdict}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Sample Detox Test — React Native Login Flow</h3>
                <pre data-reveal><code>{`// e2e/auth/login.test.ts — Detox E2E test
import { device, element, by, expect } from 'detox';

describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen on launch', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
    await expect(element(by.id('email-input'))).toBeVisible();
    await expect(element(by.id('password-input'))).toBeVisible();
  });

  it('should show validation errors for empty form', async () => {
    await element(by.id('login-button')).tap();
    await expect(element(by.text('Email is required'))).toBeVisible();
    await expect(element(by.text('Password is required'))).toBeVisible();
  });

  it('should show error for invalid credentials', async () => {
    await element(by.id('email-input')).typeText('wrong@example.com');
    await element(by.id('password-input')).typeText('wrongpassword');
    await element(by.id('login-button')).tap();

    // Detox automatically waits for async operations
    await expect(element(by.text('Invalid email or password'))).toBeVisible();
  });

  it('should navigate to dashboard on successful login', async () => {
    await element(by.id('email-input')).typeText('testuser@example.com');
    await element(by.id('password-input')).typeText(process.env.TEST_USER_PASSWORD!);
    await element(by.id('login-button')).tap();

    // Detox waits for navigation to complete
    await expect(element(by.id('dashboard-screen'))).toBeVisible();
    await expect(element(by.id('welcome-message'))).toHaveText('Welcome back, Test User');
  });

  it('should persist session across app restarts', async () => {
    // After successful login from previous test
    await device.sendToHome();
    await device.launchApp({ newInstance: false }); // Do not clear storage
    await expect(element(by.id('dashboard-screen'))).toBeVisible();
  });
});`}</code></pre>
              </section>

              {/* ── SECTION 4: DEVICE FARMS ── */}
              <section id="device-farms" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Device Farms: Firebase Test Lab &amp; BrowserStack
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Running automated tests on a single device or simulator catches some bugs, but the real world has thousands of device and OS combinations. Device farms let you run your suite across dozens of real devices in parallel.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      name: 'Firebase Test Lab',
                      tagline: 'Google\'s cloud device farm — best integration with Android and free tier available',
                      desc: 'Firebase Test Lab provides real Android and iOS devices hosted in Google data centers. Supports Espresso, XCUITest, Robo tests (automated exploration without writing test code), and game loops. Integrates natively with Google Cloud CI/CD. The free Spark plan includes limited daily tests on shared devices.',
                      strengths: ['Native Espresso + XCUITest support', 'Robo test crawls app automatically (no code needed)', 'Free tier (Spark plan: 10 virtual, 5 physical tests/day)', 'Deep Firebase ecosystem integration', 'Detailed video, screenshot, and log output'],
                      limitations: ['Physical device availability varies', 'iOS device selection smaller than Android', 'Pricing can scale quickly at high volume'],
                      pricing: 'Free Spark tier; Blaze: ~$1/hr virtual, ~$5/hr physical device',
                    },
                    {
                      name: 'BrowserStack App Automate',
                      tagline: 'Most comprehensive device catalogue — best for cross-platform and iOS',
                      desc: 'BrowserStack offers the largest real device catalogue: 3,000+ Android and iOS devices. Supports Appium, Espresso, XCUITest, and Flutter. Provides live interactive device sessions for exploratory testing alongside automated test execution. Excellent for accessibility testing — ships with screen reader testing support.',
                      strengths: ['3,000+ real devices including latest and legacy', 'Best iOS physical device coverage', 'Interactive live device sessions for exploratory testing', 'Accessibility testing with screen reader support', 'Low-latency network simulation built-in'],
                      limitations: ['More expensive than Firebase at scale', 'No free tier for automated testing (only 100-minute trial)', 'Can be slower than native device farms for Espresso/XCUITest'],
                      pricing: 'Automate plans from ~$249/mo; Team plans scale with parallel sessions',
                    },
                    {
                      name: 'Sauce Labs',
                      tagline: 'Enterprise-grade with the strongest compliance and security story',
                      desc: 'Sauce Labs targets enterprise teams with strict compliance requirements. Offers real device, virtual device, and browser testing in one platform. GDPR, SOC 2 Type II, and FedRAMP compliant. Excellent for regulated industries (fintech, healthcare) where data residency matters.',
                      strengths: ['SOC 2, GDPR, FedRAMP compliance', 'Dedicated private device cloud options', 'Unified real device + browser + virtual device platform', 'Strong enterprise SLA and support'],
                      limitations: ['Most expensive option', 'Overkill for small teams', 'UI less polished than BrowserStack'],
                      pricing: 'Enterprise plans from ~$399/mo; custom pricing for private clouds',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '22px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1.05rem', marginBottom: '4px' }}>{item.name}</div>
                      <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600, marginBottom: '12px' }}>{item.tagline}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 14px', fontSize: '0.9rem' }}>{item.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: G, fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strengths</div>
                          <ul style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0, paddingLeft: '16px' }}>
                            {item.strengths.map((s, j) => <li key={j}>{s}</li>)}
                          </ul>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Limitations</div>
                          <ul style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0, paddingLeft: '16px' }}>
                            {item.limitations.map((l, j) => <li key={j}>{l}</li>)}
                          </ul>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.83rem', color: G }}>Pricing: <span style={{ color: 'rgba(255,255,255,0.5)' }}>{item.pricing}</span></div>
                    </div>
                  ))}
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Running Detox Tests on Firebase Test Lab</h3>
                <pre data-reveal><code>{`# Run Detox E2E tests on Firebase Test Lab via gcloud CLI
# Step 1: Build your app for testing
yarn detox build --configuration ios.release

# Step 2: Run on Firebase Test Lab
gcloud firebase test ios run \\
  --test "ios/build/Build/Products/Release-iphonesimulator/YourAppUITests.zip" \\
  --app "ios/build/Build/Products/Release-iphonesimulator/YourApp.app" \\
  --device model=iphone15pro,version=17,locale=en_US,orientation=portrait \\
  --device model=iphone12,version=16,locale=en_US,orientation=portrait \\
  --results-bucket gs://your-project-test-results \\
  --results-dir "e2e-$(date +%Y%m%d-%H%M%S)"

# For Android (Espresso) on Firebase Test Lab
gcloud firebase test android run \\
  --type instrumentation \\
  --app app/build/outputs/apk/debug/app-debug.apk \\
  --test app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk \\
  --device model=Pixel7,version=33,locale=en,orientation=portrait \\
  --device model=GalaxyS21,version=31,locale=en,orientation=portrait \\
  --use-orchestrator`}</code></pre>
              </section>

              {/* ── SECTION 5: AUTOMATION VS MANUAL ── */}
              <section id="automation-vs-manual" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Automation vs Manual Testing
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Automation and manual testing are complementary, not competing. The question is not &quot;should we automate?&quot; — it is &quot;what should we automate, and what requires human judgment?&quot;
                </p>

                <div data-reveal style={{ overflowX: 'auto', marginBottom: '32px' }}>
                  <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left' }}>Test Type</th>
                        <th style={{ textAlign: 'left' }}>Automate?</th>
                        <th style={{ textAlign: 'left' }}>Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Regression tests for stable features', 'Always automate', 'Run on every commit. Too slow and error-prone to do manually every release.'],
                        ['Happy path critical flows (login, checkout)', 'Always automate', 'Must run on every build. Automation catches regressions immediately.'],
                        ['Edge case business logic', 'Automate as unit tests', 'Fast, precise, and documents the expected behavior.'],
                        ['Visual / UI aesthetics review', 'Manual (+ visual diffing tools)', 'Pixel differences require human aesthetic judgment. Tools like Percy help flag changes.'],
                        ['Exploratory testing of new features', 'Manual', 'Human creativity finds unexpected paths that scripted tests cannot predict.'],
                        ['Accessibility review with screen readers', 'Hybrid', 'Automated checks flag obvious issues; manual testing with VoiceOver/TalkBack is required.'],
                        ['Usability / UX assessment', 'Manual (user testing)', 'No tool can assess whether UX is intuitive — requires real user observation.'],
                        ['Complex multi-step payment flows', 'Automate in test mode', 'Use sandbox credentials. Automate the flow but do not test with real payment methods.'],
                        ['Device-specific hardware features (camera, GPS)', 'Manual on real devices', 'Simulators cannot accurately replicate hardware sensors.'],
                      ].map(([type, auto, why], i) => (
                        <tr key={i}>
                          <td><strong style={{ color: '#fff' }}>{type}</strong></td>
                          <td style={{ color: auto.includes('Always') ? G : auto.includes('Manual') ? '#94a3b8' : '#fbbf24', fontWeight: 600, fontSize: '0.82rem' }}>{auto}</td>
                          <td style={{ color: 'rgba(255,255,255,0.6)' }}>{why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: G, marginBottom: '10px' }}>When Automation Pays Off</div>
                    <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, paddingLeft: '18px', margin: 0, fontSize: '0.88rem' }}>
                      <li>Tests that run on every commit (regression suite)</li>
                      <li>Tests across many device/OS combinations</li>
                      <li>Data-driven tests with many input variations</li>
                      <li>Long-running stability and soak tests</li>
                      <li>Tests that require precise timing or speed</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.15)', borderRadius: '10px', padding: '20px' }}>
                    <div style={{ fontWeight: 700, color: '#f87171', marginBottom: '10px' }}>When Manual Testing is Irreplaceable</div>
                    <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, paddingLeft: '18px', margin: 0, fontSize: '0.88rem' }}>
                      <li>First-time UX review of new features</li>
                      <li>Hardware integration (camera, NFC, biometrics)</li>
                      <li>Accessibility testing with real assistive technology</li>
                      <li>Exploratory testing to find unexpected edge cases</li>
                      <li>User acceptance testing before major releases</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ── SECTION 6: CI/CD FOR MOBILE ── */}
              <section id="cicd-mobile" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  CI/CD for Mobile Apps
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Mobile CI/CD has unique challenges vs web: builds are slow, Apple requires macOS agents, code signing is complex, and distributing to devices requires platform-specific tools. Here is a production-ready pipeline structure.
                </p>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>GitHub Actions — React Native CI Pipeline</h3>
                <pre data-reveal><code>{`# .github/workflows/mobile-ci.yml
name: Mobile CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # ── Unit & Integration Tests (fast, runs on every PR) ──
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'yarn' }
      - run: yarn install --frozen-lockfile
      - run: yarn test --coverage --ci
      - uses: codecov/codecov-action@v4

  # ── iOS E2E Tests (slow, runs on main branch merges) ──
  ios-e2e:
    runs-on: macos-14  # Apple Silicon runner
    needs: unit-tests
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'yarn' }
      - run: yarn install --frozen-lockfile

      - name: Install Detox CLI
        run: yarn global add detox-cli

      - name: Install pods
        run: cd ios && pod install

      - name: Build for testing
        run: detox build --configuration ios.sim.release

      - name: Run Detox E2E tests
        run: detox test --configuration ios.sim.release --cleanup
        env:
          TEST_USER_PASSWORD: \${{ secrets.TEST_USER_PASSWORD }}

      - name: Upload Detox artifacts on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: detox-artifacts-ios
          path: artifacts/

  # ── Android E2E on Firebase Test Lab ──
  android-e2e:
    runs-on: ubuntu-latest
    needs: unit-tests
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with: { java-version: '17', distribution: 'temurin' }

      - name: Build Android APKs
        run: |
          cd android
          ./gradlew assembleDebug assembleAndroidTest

      - uses: google-github-actions/auth@v2
        with:
          credentials_json: \${{ secrets.FIREBASE_SERVICE_ACCOUNT }}

      - name: Run on Firebase Test Lab
        run: |
          gcloud firebase test android run \\
            --type instrumentation \\
            --app android/app/build/outputs/apk/debug/app-debug.apk \\
            --test android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk \\
            --device model=Pixel7,version=33 \\
            --use-orchestrator`}</code></pre>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px', marginTop: '32px' }}>Mobile CI/CD Platform Comparison</h3>
                <div data-reveal style={{ display: 'grid', gap: '16px' }}>
                  {[
                    {
                      platform: 'Bitrise',
                      best: 'Teams wanting a mobile-first CI/CD service with minimal setup',
                      features: 'Pre-built steps for iOS code signing, Fastlane, Firebase, App Store Connect. macOS machines included. Mobile-specific caching for CocoaPods and Gradle.',
                      pricing: 'From $45/mo for 1 concurrency; dedicated macOS machines on higher tiers',
                    },
                    {
                      platform: 'Xcode Cloud',
                      best: 'Native iOS/macOS apps staying entirely in the Apple ecosystem',
                      features: 'Deep Xcode integration, free with Apple Developer membership (limited compute), TestFlight distribution built-in, automatic code signing via Xcode managed profiles.',
                      pricing: 'Free (25 compute hours/mo) with Apple Developer Program; additional compute from $14.99/mo',
                    },
                    {
                      platform: 'GitHub Actions (self-hosted macOS)',
                      best: 'Teams already using GitHub who want full control',
                      features: 'Full GitHub ecosystem integration, unlimited customization, no vendor lock-in. Requires self-hosted macOS runners (use MacStadium, MacMini.cloud, or your own hardware) for iOS builds.',
                      pricing: 'GitHub Actions free minutes + self-hosted runner cost (~$75–150/mo for a Mac mini)',
                    },
                    {
                      platform: 'Fastlane (cross-platform automation)',
                      best: 'Automating code signing, versioning, and app store distribution in any CI',
                      features: 'Not a CI platform — a toolchain of lanes for build, test, sign, and deploy automation. match (certificate sync), deliver (App Store upload), supply (Play Store upload). Runs in any CI environment.',
                      pricing: 'Free and open source',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${G}`, borderRadius: '8px', padding: '18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ fontWeight: 700, color: G }}>{item.platform}</div>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{item.pricing}</div>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px' }}>Best for: {item.best}</div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0, fontSize: '0.88rem' }}>{item.features}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── SECTION 7: CRASH REPORTING ── */}
              <section id="crash-reporting" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Crash Reporting &amp; Performance Monitoring
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Testing catches the bugs you know to look for. Crash reporting catches everything else — the edge cases that only surface with real users on real devices in the real world. Set it up before your first TestFlight or Play Store release.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
                  {[
                    {
                      tool: 'Sentry',
                      type: 'Crash reporting + JS error tracking + performance',
                      desc: 'The best overall choice for React Native. Captures both native crashes (iOS/Android) and JavaScript errors with full React component stack traces. Automatically deobfuscates source maps so stack traces point to your actual source code, not minified bundles. Groups similar errors into issues, tracks error frequency and affected user count, and integrates with Slack, Jira, and GitHub.',
                      setup: 'yarn add @sentry/react-native then Sentry.init() in your entry file. Run sentry-cli sourcemaps inject in your build script.',
                    },
                    {
                      tool: 'Firebase Crashlytics',
                      type: 'Native crash reporting (free)',
                      desc: 'Google\'s free, best-in-class native crash reporter. Excellent for native iOS and Android crash symbolication with minimal setup. Integrates seamlessly with Firebase Analytics to correlate crashes with user segments, app versions, and custom events. Does not capture JavaScript errors in React Native without additional setup.',
                      setup: 'Add @react-native-firebase/crashlytics package. iOS: add GoogleService-Info.plist. Android: add google-services.json and apply the Crashlytics Gradle plugin.',
                    },
                    {
                      tool: 'Datadog Mobile RUM',
                      type: 'Full observability: crashes + performance + user sessions',
                      desc: 'For teams already using Datadog for backend observability, the Mobile RUM SDK provides end-to-end visibility: crash reports, performance traces, user session replay, and network request tracking — all correlated in a single platform. Expensive but eliminates context switching between tools.',
                      setup: 'yarn add @datadog/mobile-react-native and configure with your Datadog client token and application ID.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: G, fontSize: '1rem', marginBottom: '4px' }}>{item.tool}</div>
                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, marginBottom: '12px' }}>{item.type}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.9rem' }}>{item.desc}</p>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.85rem' }}>
                        <strong style={{ color: G }}>Quick setup: </strong><span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.setup}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 data-reveal style={{ fontSize: '1.2rem', fontWeight: 700, color: G, marginBottom: '12px' }}>Sentry Setup for React Native</h3>
                <pre data-reveal><code>{`// App.tsx — Sentry initialization
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: __DEV__ ? 'development' : 'production',
  tracesSampleRate: 0.2,        // 20% of sessions traced
  profilesSampleRate: 0.1,      // 10% of traced sessions profiled
  attachScreenshot: true,       // Attach screenshot on error
  attachViewHierarchy: true,    // Attach view hierarchy on error

  beforeSend(event) {
    // Filter out events you do not care about
    if (event.exception?.values?.[0]?.type === 'NetworkError') {
      return null; // Do not send network errors
    }
    return event;
  },
});

// Wrap your root component for automatic error boundaries
export default Sentry.wrap(App);

// Manual error capture with context
try {
  await processPayment(cart);
} catch (error) {
  Sentry.withScope((scope) => {
    scope.setUser({ id: user.id });
    scope.setTag('flow', 'checkout');
    scope.setContext('cart', { items: cart.length, total: cart.total });
    Sentry.captureException(error);
  });
  throw error;
}`}</code></pre>
              </section>

              {/* ── SECTION 8: BETA TESTING ── */}
              <section id="beta-testing" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Beta Testing Strategy
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Beta testing is the bridge between internal QA and public release. It exposes your app to real users in real environments before it reaches your entire user base. A structured beta program catches the issues that no amount of internal testing finds.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                  {[
                    {
                      platform: 'TestFlight (iOS)',
                      desc: 'Apple\'s official beta distribution platform. Internal testers (up to 100) can receive builds within minutes of upload. External testers (up to 10,000) receive builds after a one-time Apple review (~24–48 hours). Testers receive crash reports automatically. No additional app required. Essential for any iOS app.',
                      tip: 'Use build groups to segment internal team, trusted power users, and general beta testers. Distribute different feature builds to different groups.',
                    },
                    {
                      platform: 'Google Play Internal Testing / Beta',
                      desc: 'Google Play offers internal testing (up to 100 testers, immediate), closed beta (invite via email or link), and open beta (anyone can opt in) tracks. Builds are published via the Play Console. Testers can submit feedback via the Play Store. ANR and crash reports flow into the Play Console.',
                      tip: 'Use the staged rollout feature for production releases — roll out to 10% of users first, monitor crash rates and ANRs, then expand to 100%.',
                    },
                    {
                      platform: 'Firebase App Distribution',
                      desc: 'Cross-platform beta distribution for both iOS and Android. Distribute any build (debug or release) to testers via email or a shareable link, without requiring App Store or Play Store submission. Integrates with Fastlane and CI/CD pipelines for automatic distribution after every successful build.',
                      tip: 'Combine with Firebase Crashlytics for automatic crash reports from beta testers, correlated with the specific build they installed.',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: `3px solid ${G}`, borderRadius: '8px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: G, marginBottom: '8px' }}>{item.platform}</div>
                      <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 12px', fontSize: '0.9rem' }}>{item.desc}</p>
                      <div style={{ background: 'rgba(34,197,94,0.06)', borderRadius: '6px', padding: '10px 14px', fontSize: '0.85rem' }}>
                        <strong style={{ color: G }}>Strategy tip: </strong><span style={{ color: 'rgba(255,255,255,0.55)' }}>{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div data-reveal style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px' }}>
                  <div style={{ fontWeight: 700, color: '#fff', marginBottom: '14px' }}>Building a Great Beta Tester Community</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                    {[
                      { label: 'Recruit diverse device owners', desc: 'Target testers with older Android devices and less common screen sizes — they surface the most compatibility issues.' },
                      { label: 'Set clear expectations', desc: 'Tell testers what you need: crash reports, specific feature feedback, or performance observations. Vague requests get vague feedback.' },
                      { label: 'Make feedback frictionless', desc: 'Use Shake, Instabug, or a simple in-app feedback button. Testers who have to send an email rarely do.' },
                      { label: 'Reward participation', desc: 'Early access to features, premium perks, or public acknowledgement increases beta program retention and feedback quality.' },
                    ].map((item, i) => (
                      <div key={i} style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.1)', borderRadius: '8px', padding: '14px' }}>
                        <div style={{ fontWeight: 600, color: '#fff', marginBottom: '6px', fontSize: '0.9rem' }}>{item.label}</div>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── SECTION 9: PRE-LAUNCH CHECKLIST ── */}
              <section id="launch-checklist" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '16px' }}>
                  Pre-Launch QA Checklist
                </h2>
                <p data-reveal style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '28px' }}>
                  Use this checklist before every major public release. A green checkmark on all items does not guarantee a bug-free launch, but it dramatically reduces the risk of the most common and damaging launch failures.
                </p>

                <div data-reveal style={{ display: 'grid', gap: '20px' }}>
                  {[
                    {
                      category: 'Functionality',
                      color: G,
                      items: [
                        'All critical user flows tested end-to-end on real iOS and Android devices',
                        'Authentication: sign up, sign in, sign out, password reset, OAuth flows',
                        'Payment or subscription flows tested in sandbox mode',
                        'Push notifications received and tap-to-open works correctly',
                        'Deep links open the correct screen from email, SMS, and other apps',
                        'Offline mode: app degrades gracefully with no network connection',
                        'App recovers correctly when connection is restored',
                        'Data persists correctly across app close and re-open',
                        'All form validation messages are accurate and helpful',
                      ],
                    },
                    {
                      category: 'Performance',
                      color: '#fbbf24',
                      items: [
                        'Cold start time under 3 seconds on a mid-range Android device',
                        'No visible jank (dropped frames) during navigation or list scrolling',
                        'Memory usage stable over 15 minutes of active use (no upward drift)',
                        'App does not consume excessive battery in the background',
                        'Images load within 2 seconds on a 4G connection',
                        'API response times acceptable under normal conditions',
                      ],
                    },
                    {
                      category: 'Compatibility',
                      color: '#93c5fd',
                      items: [
                        'Tested on iOS 16, 17, and 18 (or current minus two major versions)',
                        'Tested on Android API 29–35 (Android 10–15)',
                        'Tested on small (SE/compact), standard, and large screen sizes',
                        'Works in both portrait and landscape orientation (or locks correctly)',
                        'Works with system text size set to largest accessibility size',
                        'Works in dark mode and light mode',
                        'Correct behavior with reduced motion setting enabled',
                        'Tested with flaky network (Network Link Conditioner)',
                      ],
                    },
                    {
                      category: 'Security',
                      color: '#f87171',
                      items: [
                        'No API keys, secrets, or credentials hardcoded in the binary',
                        'All API calls use HTTPS (no HTTP allowed in production)',
                        'Certificate pinning implemented for sensitive endpoints (banking, health)',
                        'Sensitive data (tokens, PII) stored in Keychain (iOS) or EncryptedSharedPreferences (Android), not AsyncStorage',
                        'Screenshots disabled on payment screens (iOS: set isSecureTextEntry, Android: FLAG_SECURE)',
                        'App passes basic OWASP Mobile Top 10 review',
                      ],
                    },
                    {
                      category: 'Accessibility',
                      color: '#a78bfa',
                      items: [
                        'All interactive elements have meaningful accessibility labels',
                        'VoiceOver (iOS) can navigate the full app without getting stuck',
                        'TalkBack (Android) announces all interactive elements correctly',
                        'Color contrast ratio meets WCAG 2.1 AA (4.5:1 for normal text)',
                        'Touch targets are at least 44x44pt (iOS) / 48x48dp (Android)',
                        'No information conveyed by color alone',
                      ],
                    },
                    {
                      category: 'App Store Requirements',
                      color: '#94a3b8',
                      items: [
                        'All required permissions have clear usage descriptions (iOS Privacy Manifests)',
                        'App does not access Contacts, Camera, or Location without requesting permission first',
                        'Privacy policy URL valid and up to date in store listing',
                        'App Store screenshots and preview match the current UI',
                        'Age rating accurately reflects content',
                        'In-app purchases use the platform payment system (no external payment links for digital goods)',
                      ],
                    },
                  ].map((section, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px' }}>
                      <div style={{ fontWeight: 700, color: section.color, fontSize: '1rem', marginBottom: '14px' }}>{section.category}</div>
                      <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'grid', gap: '8px' }}>
                        {section.items.map((item, j) => (
                          <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                            <span style={{ color: section.color, flexShrink: 0, marginTop: '2px' }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq" style={{ marginBottom: '64px' }}>
                <h2 data-reveal style={{ fontSize: '1.9rem', fontWeight: 700, marginBottom: '24px' }}>
                  Frequently Asked Questions
                </h2>
                <div data-reveal style={{ display: 'grid', gap: '12px' }}>
                  {faqItems.map((item, i) => (
                    <div key={i} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        className="faq-btn"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ width: '100%', textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: 'none', padding: '18px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                      >
                        <span style={{ fontWeight: 600, color: '#fff', fontSize: '0.97rem', lineHeight: 1.4 }}>{item.q}</span>
                        <span style={{ color: G, fontSize: '1.3rem', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                      </button>
                      {openFaq === i && (
                        <div style={{ padding: '0 20px 18px', background: 'rgba(255,255,255,0.01)' }}>
                          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: 0, fontSize: '0.92rem' }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── CTA ── */}
              <section data-reveal style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px' }}>
                  Need Help Building a QA Strategy for Your App?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '560px', margin: '0 auto 28px' }}>
                  Codazz builds mobile apps with production-grade testing from day one — automated E2E suites, CI/CD pipelines, crash reporting, and beta programs that catch issues before your users do.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ display: 'inline-block', background: G, color: '#000', fontWeight: 700, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.97rem' }}>
                    Book a Free Consultation
                  </Link>
                  <Link href="/services" style={{ display: 'inline-block', border: `1px solid ${G}`, color: G, fontWeight: 600, padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.97rem' }}>
                    View Our Services
                  </Link>
                </div>
              </section>

            </article>

            {/* ── SIDEBAR ── */}
            <aside className="sidebar" style={{ position: 'sticky', top: '100px' }}>

              {/* TOC */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Table of Contents</div>
                <nav style={{ display: 'grid', gap: '4px' }}>
                  {tocSections.map(({ id, label }) => (
                    <button
                      key={id}
                      className="toc-link"
                      onClick={() => scrollTo(id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        borderLeft: `2px solid ${activeSection === id ? G : 'rgba(255,255,255,0.1)'}`,
                        padding: '6px 12px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: activeSection === id ? G : 'rgba(255,255,255,0.55)',
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        fontWeight: activeSection === id ? 600 : 400,
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Related Posts */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Related Articles</div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {relatedPosts.map((post, i) => (
                    <Link key={i} href={post.href} style={{ textDecoration: 'none', display: 'block', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s' }}>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '4px' }}>{post.title}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '8px', fontSize: '0.97rem' }}>Build With Confidence</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>Get a mobile app built with end-to-end QA from the start.</p>
                <Link href="/contact" style={{ display: 'block', background: G, color: '#000', fontWeight: 700, padding: '11px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Get a Free Quote
                </Link>
              </div>
            </aside>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
