'use client';
import ScrollReveal from './ScrollReveal';

const prizeSummary = [
  { label: 'IDEATHON POOL' },
  { label: 'HACKATHON POOL' },
];

export default function Prizes() {
  return (
    <section id="prizes" className="section-navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c29b40', letterSpacing: '0.2em', marginBottom: 12 }}>
             PRIZE POOL
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: 60 }}>
             WIN BIG, BUILD <span style={{ color: '#c29b40' }}>BIGGER</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }} className="perspective-1000">
           {prizeSummary.map((p, idx) => (
              <ScrollReveal key={p.label} delay={idx * 150} animation="reveal">
                <div className="card-3d" style={{ minWidth: 280, padding: '40px', border: '2px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                   <p style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.1em', marginBottom: 20 }}>{p.label}</p>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: '1.4rem' }}>🔒</span>
                      <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c29b40', letterSpacing: '0.04em' }}>
                        Revealing Soon
                      </p>
                   </div>
                   <div className="brochure-line" style={{ margin: '24px auto', opacity: 0.5 }} />
                   <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>Stay tuned for the announcement</p>
                </div>
              </ScrollReveal>
           ))}
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
           {[
              { icon: '🥇', title: 'Top 3 Ideathon', desc: 'Direct Hackathon Entry' },
              { icon: '🥈', title: 'Certificates', desc: 'For All Participants' },
              { icon: '🥉', title: 'Networking', desc: 'Industry Connections' },
           ].map(item => (
              <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 16, backgroundColor: 'rgba(255,255,255,0.03)', padding: '20px' }}>
                 <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                 <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>{item.title}</p>
                    <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{item.desc}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
