'use client';

export default function StickySidebar() {
  return (
    <div style={{
      position: 'fixed',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
      zIndex: 1000,
    }} className="hide-mobile">
      <a href="https://wa.me/16475551234" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" style={{
        width: 54, height: 54, borderRadius: '50%', background: '#25D366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(37,211,102,0.3)', transition: '0.3s'
      }} onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.1)')} onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.758.463 3.472 1.342 4.977l-1.43 5.213 5.334-1.4c1.454.793 3.09 1.21 4.743 1.21 5.508 0 9.988-4.479 9.988-9.987 0-5.508-4.479-9.987-9.988-9.987zm0 18.291c-1.554 0-3.078-.42-4.409-1.213l-.316-.188-3.273.858.873-3.184-.207-.33c-.87-1.385-1.328-2.996-1.328-4.647 0-4.654 3.785-8.439 8.439-8.439 4.654 0 8.439 3.785 8.439 8.439s-3.785 8.439-8.439 8.439z"/></svg>
      </a>
      <a href="tel:+16475551234" aria-label="Call us" style={{
        width: 54, height: 54, borderRadius: '50%', background: '#128C7E',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(18,140,126,0.3)', transition: '0.3s'
      }} onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.1)')} onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
    </div>
  );
}
