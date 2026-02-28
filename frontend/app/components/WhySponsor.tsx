'use client';
import ScrollReveal from './ScrollReveal';

const benefits = [
  { icon: '📢', title: 'BRAND VISIBILITY', desc: 'Prominent exposure on banners, digital promotions, and certifications.' },
  { icon: '🎯', title: 'TALENT ACCESS', desc: 'Engage with top-tier engineering talent for recruitment and internships.' },
  { icon: '🏛️', title: 'INSTITUTIONAL LINKS', desc: 'Strengthen industry-academia collaboration through high-impact technical engagement.' },
  { icon: '🌱', title: 'SOCIAL IMPACT', desc: 'Demonstrate commitment to data privacy and ethical technical transformation.' }
];

export default function WhySponsor() {
  return (
    <section id="sponsors" className="section-navy" style={{ background: '#121F1C', padding: '100px 24px' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'left', marginBottom: 40 }}>
             <p style={{ fontSize: '0.75rem', fontWeight: 800, color: '#5BE2B3', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PARTNERSHIP OPPORTUNITIES</p>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
           <div>
              <ScrollReveal animation="reveal-left">
                <h2 className="heading-lg" style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3' }}>WHY SPONSOR US?</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: 32, marginTop: 20 }}>
                   Sponsoring this event offers a strategic opportunity to associate your brand with innovation and responsible technology.
                </p>
              </ScrollReveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                 {benefits.map((b, idx) => (
                    <ScrollReveal key={b.title} delay={idx * 100}>
                       <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{b.icon}</div>
                       <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f8fafc', marginBottom: 8 }}>{b.title}</h4>
                       <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>{b.desc}</p>
                    </ScrollReveal>
                 ))}
              </div>
           </div>
           
           {/* Visual "Graph" / Stat style block */}
           <ScrollReveal animation="reveal-right" className="perspective-1000">
             <div className="card-3d" style={{ backgroundColor: '#1A2F2B', padding: '48px', color: 'white', border: '1px solid #2C3E3A', borderRadius: '12px' }}>
              <div style={{ borderLeft: '3px solid #5BE2B3', paddingLeft: 24 }}>
                 <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.1em', color: '#5BE2B3' }}>STRATEGIC VALUE</p>
                 <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: 12, marginBottom: 24 }}>Industry-Academia Collaboration</h3>
                 <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.8 }}>
                    Create lasting partnerships with the IT Department of BVCOE. Leverage early access to fresh prototypes and compliance-oriented solutions that align with your strategic interests.
                 </p>
                 <div style={{ marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 40, display: 'flex', gap: 40 }}>
                    <div>
                      <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#5BE2B3' }}>50+</p>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>TEAMS</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#5BE2B3' }}>1.1L</p>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>PRIZE POOL</p>
                    </div>
                 </div>
              </div>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
