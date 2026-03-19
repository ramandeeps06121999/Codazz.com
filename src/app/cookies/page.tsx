import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Codazz Cookie Policy — how we use cookies on our website and how you can manage them.',
  openGraph: {
    title: 'Cookie Policy | Codazz',
    description: 'Codazz Cookie Policy — how we use cookies on our website and how you can manage them.',
    url: 'https://codazz.com/cookies',
  },
  alternates: {
    canonical: 'https://codazz.com/cookies',
  },
};

const sectionTitle: React.CSSProperties = {
  fontSize: 22, fontWeight: 700, color: '#ffffff', marginTop: 48, marginBottom: 16,
};

const sectionText: React.CSSProperties = {
  fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: 16,
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container" style={{ maxWidth: 800 }}>
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>&larr; Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Cookie Policy</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            Codazz uses cookies to improve your experience on our website. This policy explains what cookies we use, why we use them, and how you can manage your preferences.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>Last updated: March 2026</p>

          <div style={{ marginTop: 48 }}>

            <h2 style={sectionTitle}>1. What Are Cookies</h2>
            <p style={sectionText}>Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better browsing experience, and give website owners useful information about how their site is being used.</p>
            <p style={sectionText}>Cookies can be &ldquo;persistent&rdquo; (remaining on your device until they expire or you delete them) or &ldquo;session&rdquo; cookies (deleted when you close your browser).</p>

            <h2 style={sectionTitle}>2. Cookies We Use</h2>
            <p style={sectionText}>We categorize the cookies on our website into four types:</p>

            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 12 }}>Essential Cookies</h3>
            <p style={sectionText}>These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure areas, and cookie consent preferences. The website cannot function properly without these cookies, and they cannot be disabled.</p>

            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 12 }}>Analytics Cookies</h3>
            <p style={sectionText}>We use analytics cookies to understand how visitors interact with our website. This includes Google Analytics 4 and Vercel Web Analytics. These cookies collect information such as pages visited, time spent on pages, bounce rate, and traffic sources. All data is anonymized and used solely to improve our website experience.</p>

            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 12 }}>Performance Cookies</h3>
            <p style={sectionText}>Performance cookies help us understand which pages are the most and least popular and how visitors navigate around the site. This information helps us optimize our website speed, layout, and content delivery.</p>

            <h3 style={{ fontSize: 17, fontWeight: 600, color: '#ffffff', marginTop: 32, marginBottom: 12 }}>Marketing Cookies</h3>
            <p style={sectionText}>These cookies may be set through our site by advertising partners such as Google Ads and LinkedIn. They may be used to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and device.</p>

            <h2 style={sectionTitle}>3. Managing Cookies</h2>
            <p style={sectionText}>You can control and manage cookies in several ways:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. The steps to do this vary by browser &mdash; check your browser&apos;s help documentation for instructions.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Cookie Consent Banner:</strong> When you first visit our website, you can accept or decline non-essential cookies through our cookie consent banner.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Opt-Out Tools:</strong> You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.</li>
            </ul>
            <p style={sectionText}>Please note that disabling certain cookies may affect the functionality of our website and your ability to access some features.</p>

            <h2 style={sectionTitle}>4. Third-Party Cookies</h2>
            <p style={sectionText}>Our website may include cookies set by third-party services that we use:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Google Analytics:</strong> Used for website analytics and visitor behavior tracking</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Vercel Analytics:</strong> Used for performance monitoring and page load metrics</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Web3Forms:</strong> Used to process contact form submissions securely</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Calendly:</strong> Used for scheduling discovery calls and consultations</li>
            </ul>
            <p style={sectionText}>Each of these third-party services has their own privacy and cookie policies. We recommend reviewing their policies for more information about how they handle your data.</p>

            <h2 style={sectionTitle}>5. Your Rights</h2>
            <p style={sectionText}>Depending on your location, you may have rights under data protection laws including GDPR, CCPA, and PIPEDA. These rights may include the ability to access, correct, delete, or port your personal data, as well as the right to object to or restrict certain processing activities.</p>
            <p style={sectionText}>For more information about how we handle your personal data, please see our <Link href="/privacy" style={{ color: '#22c55e' }}>Privacy Policy</Link>.</p>

            <h2 style={sectionTitle}>6. Changes to This Policy</h2>
            <p style={sectionText}>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will post any changes on this page and update the &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.</p>

            <h2 style={sectionTitle}>7. Contact Us</h2>
            <p style={sectionText}>If you have questions about our use of cookies, please contact us:</p>
            <div style={{ marginTop: 24, padding: 32, borderRadius: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Codazz</strong><br />
                Edmonton, Alberta, Canada &amp; Chandigarh, India<br />
                Email: <a href="mailto:hello@codazz.com" style={{ color: '#22c55e' }}>hello@codazz.com</a><br />
                Website: <a href="https://codazz.com" style={{ color: '#22c55e' }}>codazz.com</a>
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
