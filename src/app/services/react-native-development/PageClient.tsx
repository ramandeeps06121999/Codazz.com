'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function PageClient() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#000', paddingTop: '100px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', color: '#fff' }}>
          <h1 style={{ fontSize: 36, fontWeight: 700 }}>React Native Development</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
