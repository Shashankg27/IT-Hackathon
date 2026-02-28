'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="section-navy" style={{ padding: '60px 24px 40px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
             <Image src="/collegeLogo.png" alt="BVCOE" width={40} height={40} style={{ filter: 'brightness(0) invert(1)' }} />
             <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#5BE2B3' }}>Hack.IT@BVP 3.0</p>
          </div>
          <p style={{ fontSize: '0.8rem', opacity: 0.6, maxWidth: 300 }}>
             Organized by the IT Department, Bharati Vidyapeeth’s College of Engineering, New Delhi. 
             Connecting law, technology, and innovation.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
           <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5BE2B3', letterSpacing: '0.1em', marginBottom: 20 }}>LINKS</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                 <li><a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.7 }}>About Us</a></li>
                 <li><a href="#event" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.7 }}>Event Schedule</a></li>
                 {/* <li><a href="#tracks" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.7 }}>Innovation Tracks</a></li> */}
              </ul>
           </div>
           <div>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5BE2B3', letterSpacing: '0.1em', marginBottom: 20 }}>LEGAL</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                 <li><p style={{ color: 'white', fontSize: '0.8rem', opacity: 0.7 }}>DPDP Act 2023</p></li>
                 <li><p style={{ color: 'white', fontSize: '0.8rem', opacity: 0.7 }}>Privacy Policy</p></li>
              </ul>
           </div>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: 60, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40, textAlign: 'center' }}>
      </div>
    </footer>
  );
}
