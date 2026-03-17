import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Codazz',
  description: 'Cookie Policy for Codazz. Learn how we use cookies on our website.',
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a14', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 24 }}>Cookie Policy</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 720 }}>
            Codazz uses cookies to improve your experience on our website. This policy explains what cookies we use and how you can manage them.
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
