import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Codazz Privacy Policy — how we collect, use, store, and protect your personal data when you use our website and services.',
  openGraph: {
    title: 'Privacy Policy | Codazz',
    description: 'Codazz Privacy Policy — how we collect, use, and protect your data.',
    url: 'https://codazz.com/privacy',
  },
  alternates: {
    canonical: 'https://codazz.com/privacy',
  },
};

const sectionTitle: React.CSSProperties = {
  fontSize: 22, fontWeight: 700, color: '#ffffff', marginTop: 48, marginBottom: 16,
};

const sectionText: React.CSSProperties = {
  fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, marginBottom: 16,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container" style={{ maxWidth: 800 }}>
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>&larr; Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Privacy Policy</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            Codazz (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at codazz.com or engage with our services.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginTop: 16 }}>Last updated: March 2026</p>

          <div style={{ marginTop: 48 }}>

            <h2 style={sectionTitle}>1. Information We Collect</h2>
            <p style={sectionText}><strong style={{ color: '#ffffff' }}>Personal Information:</strong> When you fill out a contact form, request a quote, or schedule a consultation, we may collect your name, email address, phone number, company name, project details, and any other information you choose to provide.</p>
            <p style={sectionText}><strong style={{ color: '#ffffff' }}>Automatically Collected Information:</strong> When you browse our website, we automatically collect certain information including your IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and other browsing behavior through cookies and analytics tools.</p>
            <p style={sectionText}><strong style={{ color: '#ffffff' }}>Analytics Data:</strong> We use Google Analytics 4, Microsoft Clarity, and Vercel Web Analytics to understand how visitors interact with our website. This data is anonymized and used solely for improving user experience and website performance.</p>

            <h2 style={sectionTitle}>2. How We Use Your Information</h2>
            <p style={sectionText}>We use the information we collect for the following purposes:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>To respond to your inquiries and provide requested services</li>
              <li style={{ marginBottom: 8 }}>To communicate with you about projects, proposals, and engagements</li>
              <li style={{ marginBottom: 8 }}>To improve our website, services, and user experience</li>
              <li style={{ marginBottom: 8 }}>To analyze website traffic and usage patterns</li>
              <li style={{ marginBottom: 8 }}>To comply with legal obligations and protect our rights</li>
              <li style={{ marginBottom: 8 }}>To send you relevant updates about our services (only with your consent)</li>
            </ul>

            <h2 style={sectionTitle}>3. Third-Party Services</h2>
            <p style={sectionText}>We use the following third-party services that may collect data:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Web3Forms:</strong> Processes contact form submissions. Data is transmitted securely and not stored beyond delivery.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Google Analytics 4:</strong> Collects anonymized browsing data for website analytics.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Microsoft Clarity:</strong> Records anonymized session replays and heatmaps to improve UX.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Vercel:</strong> Hosts our website and collects basic web analytics.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Calendly:</strong> Manages meeting scheduling. Subject to Calendly&apos;s own privacy policy.</li>
            </ul>

            <h2 style={sectionTitle}>4. Cookies</h2>
            <p style={sectionText}>Our website uses cookies and similar tracking technologies to enhance your experience. We use:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Essential cookies:</strong> Required for basic website functionality</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Marketing cookies:</strong> Used to deliver relevant content and measure ad effectiveness</li>
            </ul>
            <p style={sectionText}>You can manage cookie preferences through your browser settings. Please see our <Link href="/cookies" style={{ color: '#22c55e', textDecoration: 'none' }}>Cookie Policy</Link> for more details.</p>

            <h2 style={sectionTitle}>5. Data Security</h2>
            <p style={sectionText}>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for all data transmission. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 style={sectionTitle}>6. Data Retention</h2>
            <p style={sectionText}>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for the duration of our business relationship and for a reasonable period thereafter.</p>

            <h2 style={sectionTitle}>7. Your Rights</h2>
            <p style={sectionText}>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul style={{ ...sectionText, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>Right to access your personal data</li>
              <li style={{ marginBottom: 8 }}>Right to correct inaccurate data</li>
              <li style={{ marginBottom: 8 }}>Right to request deletion of your data</li>
              <li style={{ marginBottom: 8 }}>Right to restrict processing</li>
              <li style={{ marginBottom: 8 }}>Right to data portability</li>
              <li style={{ marginBottom: 8 }}>Right to withdraw consent at any time</li>
            </ul>
            <p style={sectionText}>To exercise any of these rights, please contact us at <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a>.</p>

            <h2 style={sectionTitle}>8. Children&apos;s Privacy</h2>
            <p style={sectionText}>Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete it promptly.</p>

            <h2 style={sectionTitle}>9. International Data Transfers</h2>
            <p style={sectionText}>Codazz operates globally with headquarters in Edmonton (Canada) and Chandigarh (India), and offices in New York (USA) and Dubai (UAE). Your information may be transferred to and processed in countries other than the one in which you reside. We ensure appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.</p>

            <h2 style={sectionTitle}>10. Changes to This Policy</h2>
            <p style={sectionText}>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.</p>

            <h2 style={sectionTitle}>11. Contact Us</h2>
            <p style={sectionText}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
              <p style={{ ...sectionText, marginBottom: 8 }}><strong style={{ color: '#ffffff' }}>Codazz</strong></p>
              <p style={{ ...sectionText, marginBottom: 8 }}>Email: <a href="mailto:hello@codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>hello@codazz.com</a></p>
              <p style={{ ...sectionText, marginBottom: 0 }}>Website: <a href="https://codazz.com" style={{ color: '#22c55e', textDecoration: 'none' }}>codazz.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
