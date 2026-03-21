'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import Image from 'next/image';

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

const tocSections = [
  { id: 'testing-pyramid', label: 'Testing Pyramid for Mobile', emoji: '🔺' },
  { id: 'detox-react-native', label: 'Detox for React Native', emoji: '⚛️' },
  { id: 'native-frameworks', label: 'XCUITest & Espresso', emoji: '📱' },
  { id: 'appium', label: 'Appium Cross-Platform', emoji: '🤖' },
  { id: 'device-farms', label: 'BrowserStack & Sauce Labs', emoji: '☁️' },
  { id: 'accessibility', label: 'Accessibility Testing', emoji: '♿' },
  { id: 'beta-crash', label: 'Beta Testing & Crash Reporting', emoji: '🐛' },
  { id: 'faq', label: 'FAQ', emoji: '❓' },
];

const relatedPosts = [
  { slug: 'flutter-vs-react-native-2026', title: 'Flutter vs React Native in 2026', category: 'Mobile', readTime: '17 min' },
  { slug: 'native-vs-cross-platform-2026', title: 'Native vs Cross-Platform 2026', category: 'Mobile', readTime: '14 min' },
  { slug: 'how-much-does-app-development-cost-2026', title: 'App Development Cost Guide 2026', category: 'Business', readTime: '16 min' },
];

export default function MobileAppTestingGuideClient() {
  const pageRef = useReveal();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000000', minHeight: '100vh' }}>

        {/* ── FEATURED IMAGE ── */}
        <div className="cb-container" style={{ paddingTop: 100 }}>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <Image
              src="/blog_images/mobile-app-testing-guide.jpg"
              alt="Mobile app testing guide 2026 with Appium Detox and test automation"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 'clamp(16px, 3vw, 28px)',
              }}
            />
          </div>
        </div>

        {/* ── ARTICLE HERO ── */}
        <section style={{ padding: 'clamp(40px, 8vw, 80px) 0 clamp(32px, 5vw, 64px)', position: 'relative', overflow: 'hidden' }}>
          <HeroBackground variant="left" />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <Link href="/blog" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'color 0.2s',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                All Articles
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span className="reveal reveal-d1" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'rgba(34,197,94,0.12)', color: '#22c55e',
                padding: '5px 14px', borderRadius: 100,
              }}>Mobile Testing</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>March 20, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 8px' }}>&middot;</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>Updated Mar 2026</span>
              <span className="reveal reveal-d1" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
              <span className="reveal reveal-d1" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.25)',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                21 min read
              </span>
            </div>

            <h1 className="reveal reveal-d2" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24, maxWidth: 900,
            }}>
              Mobile App Testing Guide 2026: Appium, Detox &amp; Test Automation
            </h1>

            <p className="reveal reveal-d3" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65,
              maxWidth: 720, marginBottom: 48, fontWeight: 400,
            }}>
              A complete mobile testing guide for 2026. Covers the testing pyramid for mobile apps, Detox for React Native E2E, XCUITest for iOS, Espresso for Android, Appium cross-platform automation, BrowserStack and Sauce Labs device farms, accessibility testing, TestFlight beta distribution, and Firebase Crashlytics crash reporting.
            </p>

            {/* Author + Share row */}
            <div className="reveal reveal-d4" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 24, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#22c55e',
                }}>RM</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#ffffff', margin: 0 }}>Raman Makkar</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0 }}>CEO, Codazz</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginRight: 4 }}>Share:</span>
                <button onClick={handleCopy} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                  color: copied ? '#22c55e' : 'rgba(255,255,255,0.6)',
                }}>
                  {copied ? '✓' : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'clamp(40px, 6vw, 80px)' }}>

              {/* ── MAIN ARTICLE ── */}
              <article style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.75 }}>

                {/* Intro */}
                <div className="reveal" style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 20, color: '#ffffff', fontWeight: 500, marginBottom: 24 }}>
                    Mobile app testing is harder than web testing. You have two operating systems, dozens of screen sizes, hardware variation, network conditions, background process interruptions, and App Store review processes that can reject builds with crashes. A solid testing strategy is not optional — it is what separates a 4.8-star app from a 2.1-star one.
                  </p>
                  <p>
                    The mobile testing landscape has matured enormously. Detox has replaced manual QA for React Native E2E tests. Appium 2.0 brought plugin-based architecture and WebDriver BiDi support. BrowserStack and Sauce Labs give you access to real devices in the cloud. There has never been a better time to build a robust mobile test suite.
                  </p>
                  <p style={{ fontSize: 18, color: '#22c55e', fontWeight: 600, margin: '24px 0' }}>
                    At Codazz, we ship mobile apps with automated test suites covering unit, integration, and E2E layers. Here is the full playbook.
                  </p>
                </div>

                {/* Section: Testing Pyramid */}
                <h2 id="testing-pyramid" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>The Testing Pyramid for Mobile Apps</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    The testing pyramid is a model that tells you how many tests to write at each layer. It applies to mobile just as it does to web — but the tools and trade-offs are different. You should have more tests at the bottom (fast, cheap) than the top (slow, expensive):
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      layer: 'Unit Tests',
                      ratio: '~70% of total tests',
                      color: '#22c55e',
                      tools: ['Jest (React Native)', 'XCTest (iOS)', 'JUnit + Mockito (Android)'],
                      description: 'Test individual functions, hooks, ViewModels, and business logic in isolation. Fast (milliseconds each), cheap to maintain, and provide a safety net for refactoring. Unit tests do not require a device or simulator — they run in Node.js or the JVM. Aim for >80% coverage of business logic.',
                      examples: ['calculateTax(price, rate) returns correct amount', 'useCart hook adds/removes items correctly', 'formatCurrency handles edge cases (zero, negative, decimals)'],
                    },
                    {
                      layer: 'Integration Tests',
                      ratio: '~20% of total tests',
                      color: '#3b82f6',
                      tools: ['React Native Testing Library', 'XCTest (component level)', 'Robolectric (Android)'],
                      description: 'Test components and screens with mocked services. Verifies that UI renders correctly, user interactions trigger the right state changes, and navigation works. React Native Testing Library is the gold standard — it tests behaviour, not implementation.',
                      examples: ['LoginScreen shows error on invalid credentials', 'ProductList renders items from mock API', 'CartButton increments count on tap'],
                    },
                    {
                      layer: 'E2E Tests',
                      ratio: '~10% of total tests',
                      color: '#f59e0b',
                      tools: ['Detox (React Native)', 'XCUITest (iOS)', 'Espresso (Android)', 'Appium (cross-platform)'],
                      description: 'Test complete user flows on a real device or simulator. Slow (minutes each), but the only way to catch issues that only appear in production: gesture conflicts, keyboard covering inputs, permission dialogs. Write E2E tests for critical user journeys only.',
                      examples: ['User can sign up, log in, and complete a purchase', 'Checkout flow works end-to-end including payment', 'Push notification opens the correct screen'],
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${item.color}22`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                        <h3 style={{ color: item.color, fontSize: 20, fontWeight: 700, margin: 0 }}>{item.layer}</h3>
                        <span style={{
                          fontSize: 12, fontWeight: 600, color: item.color,
                          background: `${item.color}15`, padding: '4px 12px', borderRadius: 100,
                        }}>{item.ratio}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                        {item.tools.map((t, j) => (
                          <span key={j} style={{
                            fontSize: 12, fontFamily: 'monospace', color: 'rgba(255,255,255,0.7)',
                            background: 'rgba(255,255,255,0.05)', padding: '3px 10px', borderRadius: 6,
                          }}>{t}</span>
                        ))}
                      </div>
                      <p style={{ fontSize: 14, margin: '0 0 12px', lineHeight: 1.7 }}>{item.description}</p>
                      <ul style={{ paddingLeft: 20, margin: 0, fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)' }}>
                        {item.examples.map((e, j) => <li key={j}>{e}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Section: Detox */}
                <h2 id="detox-react-native" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Detox for React Native E2E Testing</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Detox is the leading E2E testing framework for React Native. Unlike Appium (which uses web automation protocols), Detox communicates directly with the React Native app via a websocket connection, making it far more reliable and faster. Tests run synchronised with the JavaScript thread — no arbitrary sleeps required.
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Detox Configuration</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Install Detox
npm install --save-dev detox @config-plugins/detox
npx detox init

# .detoxrc.js
module.exports = {
  testRunner: {
    args: { '$0': 'jest', config: 'e2e/jest.config.js' },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/MyApp.app',
      build: 'xcodebuild -workspace ios/MyApp.xcworkspace -scheme MyApp -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
    },
  },
  devices: {
    simulator: { type: 'ios.simulator', device: { type: 'iPhone 16 Pro' } },
    emulator: { type: 'android.emulator', device: { avdName: 'Pixel_8_API_35' } },
  },
  configurations: {
    'ios.sim.debug': { device: 'simulator', app: 'ios.debug' },
    'android.emu.debug': { device: 'emulator', app: 'android.debug' },
  },
};`}</pre>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Writing a Detox E2E Test: Login Flow</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// e2e/login.test.ts — Detox E2E test
import { device, element, by, expect as detoxExpect } from 'detox';

describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show login screen on launch', async () => {
    await detoxExpect(element(by.id('login-screen'))).toBeVisible();
    await detoxExpect(element(by.id('email-input'))).toBeVisible();
  });

  it('should show error for invalid credentials', async () => {
    await element(by.id('email-input')).typeText('wrong@example.com');
    await element(by.id('password-input')).typeText('wrongpassword');
    await element(by.id('login-button')).tap();
    await detoxExpect(element(by.id('error-message'))).toBeVisible();
    await detoxExpect(element(by.id('error-message')))
      .toHaveText('Invalid email or password');
  });

  it('should navigate to home on successful login', async () => {
    await element(by.id('email-input')).clearText();
    await element(by.id('email-input')).typeText('test@example.com');
    await element(by.id('password-input')).clearText();
    await element(by.id('password-input')).typeText('ValidPassword123!');
    await element(by.id('login-button')).tap();

    // Detox waits automatically — no sleep() required
    await detoxExpect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should handle biometric authentication', async () => {
    await element(by.id('biometric-login-button')).tap();
    await device.matchFace(); // Simulate Face ID approval
    await detoxExpect(element(by.id('home-screen'))).toBeVisible();
  });
});`}</pre>
                  </div>
                </div>

                {/* Section: Native Frameworks */}
                <h2 id="native-frameworks" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>XCUITest for iOS &amp; Espresso for Android</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    If you are building native iOS or Android apps, Apple&apos;s XCUITest and Google&apos;s Espresso are the official, first-party testing frameworks. They have the deepest OS integration, fastest execution, and most reliable element selectors of any option.
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}>
                    <h3 style={{ color: '#3b82f6', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 12 }}>XCUITest (iOS)</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Built into Xcode — no extra installation</li>
                      <li>Runs on Simulator and real device</li>
                      <li>Swift/Objective-C, same language as the app</li>
                      <li>Excellent accessibility identifier support</li>
                      <li>Record tests via Xcode UI recording</li>
                      <li>Parallel testing via xcodebuild</li>
                      <li>Integrates with XCTest performance metrics</li>
                    </ul>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <h3 style={{ color: '#22c55e', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 12 }}>Espresso (Android)</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Official Google framework for Android UI</li>
                      <li>Synchronises automatically with UI thread</li>
                      <li>Kotlin/Java — same language as the app</li>
                      <li>Espresso Device API for rotation, folding</li>
                      <li>Compose UI testing with semantics matchers</li>
                      <li>Firebase Test Lab integration</li>
                      <li>Faster and more stable than UI Automator</li>
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Espresso Test Example (Kotlin)</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`// LoginActivityTest.kt — Espresso UI test
@RunWith(AndroidJUnit4::class)
class LoginActivityTest {

  @get:Rule
  val activityRule = ActivityScenarioRule(LoginActivity::class.java)

  @Test
  fun showsErrorOnInvalidCredentials() {
    onView(withId(R.id.emailInput))
      .perform(typeText("wrong@example.com"), closeSoftKeyboard())
    onView(withId(R.id.passwordInput))
      .perform(typeText("wrongpassword"), closeSoftKeyboard())
    onView(withId(R.id.loginButton)).perform(click())
    onView(withId(R.id.errorMessage))
      .check(matches(isDisplayed()))
      .check(matches(withText("Invalid email or password")))
  }

  @Test
  fun navigatesToHomeOnSuccess() {
    onView(withId(R.id.emailInput))
      .perform(typeText("test@example.com"), closeSoftKeyboard())
    onView(withId(R.id.passwordInput))
      .perform(typeText("ValidPassword123!"), closeSoftKeyboard())
    onView(withId(R.id.loginButton)).perform(click())
    // Espresso waits for UI to settle automatically
    onView(withId(R.id.homeScreen)).check(matches(isDisplayed()))
  }

  @Test
  fun handlesScreenRotation() {
    activityRule.scenario.onActivity { activity ->
      activity.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
    }
    onView(withId(R.id.loginButton)).check(matches(isDisplayed()))
  }
}`}</pre>
                  </div>
                </div>

                {/* Section: Appium */}
                <h2 id="appium" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Appium 2.0: Cross-Platform Mobile Automation</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Appium lets you write one test suite that runs on both iOS and Android using the same API. Appium 2.0 was a major architectural overhaul: the monolith became a plugin-based system with separate drivers (XCUITest driver, Espresso driver, Flutter driver). Here is when to choose Appium versus native frameworks:
                  </p>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', overflowX: 'auto',
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 500 }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#ffffff', fontSize: 14 }}>Factor</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#22c55e', fontSize: 14 }}>Appium 2.0</th>
                          <th style={{ textAlign: 'left', padding: '12px 10px', color: '#3b82f6', fontSize: 14 }}>Native Frameworks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['Test language', 'Any (JS, Python, Java, Ruby)', 'Swift/Kotlin only'],
                          ['Cross-platform', 'Yes — one codebase for iOS + Android', 'No — separate suites'],
                          ['Speed', 'Moderate (driver overhead)', 'Fast (direct OS access)'],
                          ['Reliability', 'Good (improved in v2)', 'Excellent'],
                          ['Setup complexity', 'High (Appium server + drivers)', 'Low (built into IDE)'],
                          ['Best for', 'Cross-platform teams, non-mobile devs', 'Native iOS/Android teams'],
                        ].map(([factor, appium, native], i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '12px 10px', fontWeight: 600, color: '#ffffff' }}>{factor}</td>
                            <td style={{ padding: '12px 10px', fontSize: 14 }}>{appium}</td>
                            <td style={{ padding: '12px 10px', fontSize: 14 }}>{native}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="reveal" style={{ marginBottom: 32 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: '#ffffff', marginBottom: 16 }}>Appium 2.0 + WebdriverIO Cross-Platform Test</h3>
                  <div style={{
                    background: '#0d1117', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'monospace', fontSize: 13,
                    overflowX: 'auto', color: 'rgba(255,255,255,0.85)',
                  }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`# Appium 2.0 setup
npm install -g appium
appium driver install xcuitest   # iOS driver
appium driver install espresso   # Android driver

# wdio.conf.ts — parallel iOS + Android
export const config = {
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 16 Pro',
      'appium:platformVersion': '18.0',
      'appium:app': './build/MyApp.app',
      'appium:automationName': 'XCUITest',
    },
    {
      platformName: 'Android',
      'appium:deviceName': 'Pixel 8',
      'appium:platformVersion': '15',
      'appium:app': './build/app-debug.apk',
      'appium:automationName': 'Espresso',
    },
  ],
};

// e2e/login.ts — runs on BOTH iOS and Android
describe('Login', () => {
  it('should login successfully', async () => {
    // Accessibility IDs work cross-platform when set correctly
    const emailInput = await $('~email-input');
    const passwordInput = await $('~password-input');
    const loginButton = await $('~login-button');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('ValidPassword123!');
    await loginButton.click();

    const homeScreen = await $('~home-screen');
    await expect(homeScreen).toBeDisplayed();
  });
});`}</pre>
                  </div>
                </div>

                {/* Section: Device Farms */}
                <h2 id="device-farms" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>BrowserStack &amp; Sauce Labs Device Farms</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    You cannot test every device in your office. The Android ecosystem alone has 24,000+ distinct device/OS combinations. Cloud device farms give you access to hundreds of real physical devices streamed over the network.
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 16, marginBottom: 40 }}>
                  {[
                    {
                      name: 'BrowserStack App Automate',
                      badge: 'Most popular',
                      badgeColor: '#22c55e',
                      pricing: 'From $29/month. Real device testing from $99/month',
                      highlights: [
                        '3,500+ real iOS and Android devices',
                        'Supports Appium, Espresso, XCUITest, Detox',
                        'Video recording, device logs, network logs per test',
                        'Percy visual testing integration',
                        'GitHub Actions, Jenkins, CircleCI native integrations',
                        'App Live for manual exploratory testing',
                      ],
                      best: 'Most teams — best balance of device coverage, reliability, and integrations',
                    },
                    {
                      name: 'Sauce Labs',
                      badge: 'Enterprise-grade',
                      badgeColor: '#f59e0b',
                      pricing: 'Enterprise pricing (~$149+/month)',
                      highlights: [
                        '800+ real devices + extensive emulator/simulator fleet',
                        'Sauce Labs Insights for flaky test detection',
                        'Real Device Cloud with exclusive device access option',
                        'Virtual USB for low-latency device interaction',
                        'SOC 2 Type II, GDPR compliance (fintech/health)',
                        'Unified platform for mobile and web testing',
                      ],
                      best: 'Enterprises with compliance requirements or large QA teams',
                    },
                    {
                      name: 'Firebase Test Lab',
                      badge: 'Best free tier',
                      badgeColor: '#3b82f6',
                      pricing: 'Free: 5 physical + 10 virtual device hours/day',
                      highlights: [
                        'Google-maintained real and virtual Android devices',
                        'Robo test: AI-driven automatic app exploration',
                        'Espresso and XCUITest support',
                        'Integrated with Firebase Crashlytics',
                        'Accessible directly from Android Studio',
                        'Best free tier for Android testing',
                      ],
                      best: 'Android teams wanting free device testing and automated Robo crawling',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                      border: `1px solid ${item.badgeColor}22`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                        <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, margin: 0 }}>{item.name}</h3>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: item.badgeColor,
                          background: `${item.badgeColor}15`, padding: '3px 10px', borderRadius: 100,
                          letterSpacing: '0.08em',
                        }}>{item.badge}</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#22c55e', margin: '0 0 12px', fontFamily: 'monospace' }}>{item.pricing}</p>
                      <ul style={{ paddingLeft: 20, margin: '0 0 12px', fontSize: 14, lineHeight: 1.8 }}>
                        {item.highlights.map((h, j) => <li key={j}>{h}</li>)}
                      </ul>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                        <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Best for:</strong> {item.best}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Section: Accessibility */}
                <h2 id="accessibility" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Accessibility Testing</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Accessibility is not just a moral obligation — it is a legal requirement in many markets (ADA in the US, EN 301 549 in the EU) and a commercial advantage. Apps that fail accessibility checks get rejected from the App Store. Here is how to test accessibility systematically:
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gap: 12, marginBottom: 40 }}>
                  {[
                    {
                      title: 'iOS Accessibility Inspector',
                      detail: 'Built into Xcode. Run it against your Simulator to find elements missing accessibilityLabel, components with insufficient contrast ratios, and interactive elements too small for VoiceOver. Run it before every release — takes 5 minutes and can prevent App Store rejection.',
                      color: '#3b82f6',
                    },
                    {
                      title: 'Android Accessibility Scanner',
                      detail: 'Google Play app that overlays your running app and highlights issues: missing content descriptions, touch target size below 48dp, low contrast text. The Accessibility Test Framework can be integrated into Espresso tests to catch issues automatically in CI.',
                      color: '#22c55e',
                    },
                    {
                      title: 'Automated Accessibility in Tests',
                      detail: 'In React Native, ensure every interactive element has accessibilityLabel and accessibilityHint set. Use React Native Testing Library\'s getByRole queries — they enforce accessible markup by design. In Detox, use by.id() with accessibility identifiers which doubles as a best practice (avoids brittle index-based selectors).',
                      color: '#f59e0b',
                    },
                    {
                      title: 'WCAG 2.2 AA for Mobile',
                      detail: 'Key mobile requirements: minimum touch target 24×24dp (recommended 44pt iOS, 48dp Android); color contrast ratio 4.5:1 for normal text, 3:1 for large text; no information conveyed by color alone. Test with VoiceOver (iOS) and TalkBack (Android) turned on manually at least once per release.',
                      color: '#8b5cf6',
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)', padding: 20, borderRadius: 16,
                      border: `1px solid ${item.color}22`,
                      display: 'flex', gap: 16,
                    }}>
                      <div style={{ width: 4, borderRadius: 4, background: item.color, flexShrink: 0 }} />
                      <div>
                        <h4 style={{ color: '#ffffff', marginBottom: 8, marginTop: 0, fontSize: 16 }}>{item.title}</h4>
                        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section: Beta & Crash */}
                <h2 id="beta-crash" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Beta Testing &amp; Crash Reporting</h2>

                <div className="reveal" style={{ marginBottom: 24 }}>
                  <p>
                    Automated tests catch regressions — but real users find the edge cases your tests did not anticipate. A structured beta testing program and crash reporting pipeline closes this gap.
                  </p>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}>
                    <h3 style={{ color: '#3b82f6', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>TestFlight (iOS Beta)</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Up to 10,000 external beta testers</li>
                      <li>Automatic crash report collection</li>
                      <li>Beta feedback with screenshots</li>
                      <li>Internal (100) vs external tester groups</li>
                      <li>90-day build expiry — plan releases accordingly</li>
                      <li>Fastlane pilot automates uploads</li>
                    </ul>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(34,197,94,0.2)',
                  }}>
                    <h3 style={{ color: '#22c55e', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>Firebase App Distribution</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Distribute APK/AAB to up to 500 testers</li>
                      <li>In-app feedback overlay (screenshot + comment)</li>
                      <li>Tester groups for staged rollouts</li>
                      <li>Fastlane integration for CI/CD automation</li>
                      <li>Works for iOS as alternative to TestFlight</li>
                      <li>Free with Firebase project</li>
                    </ul>
                  </div>
                </div>

                <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(245,158,11,0.2)',
                  }}>
                    <h3 style={{ color: '#f59e0b', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>Firebase Crashlytics</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Real-time crash reporting with full stack traces</li>
                      <li>Groups similar crashes automatically</li>
                      <li>Custom keys and logs for crash context</li>
                      <li>Non-fatal exception tracking</li>
                      <li>Crash-free users metric (target: &gt;99.5%)</li>
                      <li>Integrates with Firebase Test Lab data</li>
                    </ul>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(139,92,246,0.2)',
                  }}>
                    <h3 style={{ color: '#8b5cf6', fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 16 }}>Sentry for Mobile</h3>
                    <ul style={{ paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                      <li>Crash reporting + performance monitoring</li>
                      <li>Session replay for crash reproduction</li>
                      <li>Alerts routed to Slack/PagerDuty</li>
                      <li>Source maps for React Native JS deobfuscation</li>
                      <li>Distributed tracing: mobile to backend</li>
                      <li>Best for teams already using Sentry on web/API</li>
                    </ul>
                  </div>
                </div>

                {/* FAQ */}
                <h2 id="faq" className="reveal" style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff',
                  marginTop: 64, marginBottom: 24, letterSpacing: '-0.02em',
                }}>Frequently Asked Questions</h2>

                {[
                  {
                    q: 'Should I use Detox or Appium for React Native E2E testing?',
                    a: 'Use Detox for React Native E2E if your team writes JavaScript. Detox is faster, more reliable (no arbitrary sleeps), and integrates better with the React Native runtime. Appium is the better choice if your team is not JavaScript-native, you have an existing Appium infrastructure, or you need to test a mixed app (partly WebView, partly native). For new React Native projects in 2026, Detox is the clear default.',
                  },
                  {
                    q: 'How many E2E tests should a mobile app have?',
                    a: 'Follow the 70/20/10 rule: 70% unit tests, 20% integration tests, 10% E2E tests. In practice, 20–50 E2E tests covering your 5–10 most critical user journeys is a good target. Cover happy paths plus one critical error path per journey. Do not try to achieve 100% E2E coverage — E2E tests are expensive to write, slow to run, and brittle to maintain. Unit and integration tests should carry most of your coverage weight.',
                  },
                  {
                    q: 'What is a good crash-free rate target for mobile apps in 2026?',
                    a: 'The industry standard is >99.5% crash-free users. Top apps (Gmail, Slack, Spotify) target >99.9%. Firebase Crashlytics shows this metric by default. Track it weekly and set up alerts if it drops below your threshold. An app dropping below 99% will typically see significant negative review volume within 48 hours, directly impacting App Store ranking and conversion.',
                  },
                  {
                    q: 'How do I test push notifications in automated tests?',
                    a: 'Push notifications are hard to test in CI because they require APNs/FCM integration. The practical approach: use Detox\'s device.sendUserNotification() to simulate local notifications in tests (no real network required). For FCM/APNs end-to-end testing, use a dedicated integration test environment that sends real push tokens to a test server. BrowserStack App Automate also supports triggering push notifications on real devices.',
                  },
                  {
                    q: 'How do I handle test data in mobile E2E tests?',
                    a: 'The safest approach is to create test accounts and data via your API before each test run (in a beforeAll or setup hook), and clean up after. Never share test accounts between test runs — parallel test execution will cause data conflicts. For tests that require specific app states (e.g., logged-in user with a cart), use your API to set the state rather than driving the UI through the full user journey each time. This makes tests faster and more reliable.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24, marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 0, marginBottom: 12 }}>{faq.q}</h3>
                    <p style={{ fontSize: 15, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}

                {/* CTA */}
                <div className="reveal" style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(8,50,61,0.3) 100%)',
                  borderRadius: 28, padding: 40, marginTop: 64, textAlign: 'center',
                  border: '1px solid rgba(34,197,94,0.2)',
                }}>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
                    Need Help Building Your Mobile Test Suite?
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
                    We&apos;ll design and implement a complete mobile testing strategy — unit, integration, and E2E tests — integrated into your CI/CD pipeline with device farm coverage and crash reporting.
                  </p>
                  <Link href="/contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#22c55e', color: '#000000',
                    padding: '16px 32px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 16,
                    transition: 'transform 0.2s',
                  }}>
                    Get a Free Mobile QA Audit
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>

              </article>

              {/* ── SIDEBAR ── */}
              <aside style={{ display: 'block' }}>
                <div style={{ position: 'sticky', top: 100 }}>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24,
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Table of Contents
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {tocSections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '8px 0', fontSize: 14,
                          color: activeSection === section.id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                          textDecoration: 'none', transition: 'color 0.2s',
                          borderLeft: activeSection === section.id ? '2px solid #22c55e' : '2px solid transparent',
                          paddingLeft: 12,
                        }}>
                          <span>{section.emoji}</span>
                          <span>{section.label}</span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="reveal" style={{
                    background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 24,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 16, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Related Articles
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                          display: 'block', padding: 16,
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 12, textDecoration: 'none',
                          border: '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.2s',
                        }}>
                          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>{post.category}</span>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: '#ffffff', margin: '8px 0', lineHeight: 1.4 }}>{post.title}</h4>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{post.readTime} read</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
