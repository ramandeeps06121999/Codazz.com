import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Codazz',
  description: 'Terms of Service for Codazz. Read our terms and conditions.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Terms of Service</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            By using Codazz services and website, you agree to these terms. Please read them carefully before engaging with our services.
          </p>
          <div style={{ marginTop: 48, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
            <p>Last updated: March 2025. For questions, contact us at <a href="mailto:hello@codazz.com" style={{ color: '#4F46E5' }}>hello@codazz.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
