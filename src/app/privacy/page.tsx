import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Codazz',
  description: 'Privacy Policy for Codazz. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Privacy Policy</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            Codazz is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you use our services or visit our website.
          </p>
          <div style={{ marginTop: 48, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p>Last updated: March 2025. For questions, contact us at <a href="mailto:hello@codazz.com" style={{ color: '#111827' }}>hello@codazz.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
