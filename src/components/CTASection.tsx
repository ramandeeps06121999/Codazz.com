'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        company: form.company,
        projectType: form.service,
        message: form.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={{
      background:'linear-gradient(135deg, #000 0%, #08323d 100%)',
      position:'relative', overflow:'hidden',
    }}>
      {/* BG orbs */}
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-20%', left:'-10%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(8,50,61,0.8) 0%, transparent 70%)', pointerEvents:'none' }}/>

      <div className="cb-container" style={{ position:'relative', zIndex:10 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px 80px', alignItems:'center' }}>

          {/* Left */}
          <div>
            <p className="section-tag">Ready to Start?</p>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:800, color:'#ffffff', lineHeight:1.15, marginBottom:20 }}>
              Let's Build Something <span style={{ color:'#22c55e' }}>Amazing Together</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:15, lineHeight:1.8, marginBottom:36 }}>
              Have a project in mind? Tell us about it and we'll get back to you within 24 hours with a clear path forward.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
              {['✓ Free Discovery Call','✓ 24h Response','✓ No Commitment Required'].map(item => (
                <span key={item} style={{ color:'rgba(255,255,255,0.45)', fontSize:13, fontWeight:500 }}>{item}</span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
            borderRadius:20, padding:36, backdropFilter:'blur(20px)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Thank You!</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>We'll get back to you within 24 hours.</div>
              </div>
            ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                <input required type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
                <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
              </div>
              <input type="text" placeholder="Company (optional)" value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none' }}/>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color: form.service ? '#fff' : 'rgba(255,255,255,0.6)', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none', appearance:'none' }}>
                <option value="" disabled>Select a Service</option>
                {['Custom Software','Web Development','Mobile App','AI & Automation','Blockchain','Enterprise Software','Other'].map(s=><option key={s} value={s} style={{ background:'#1e1e1e' }}>{s}</option>)}
              </select>
              <textarea required rows={4} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                style={{ padding:'13px 16px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, color:'#fff', fontFamily:'Poppins,sans-serif', fontSize:14, outline:'none', resize:'none' }}/>
              <button type="submit" disabled={isLoading} className="btn-primary btn-lg" style={{ width:'100%', justifyContent:'center' }}>
                {isLoading ? 'Sending...' : 'Send Message'}
                {!isLoading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
              </button>
            </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
