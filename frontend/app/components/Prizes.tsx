'use client';
import ScrollReveal from './ScrollReveal';

const prizeSummary = [
  { label: 'TOTAL PRIZE POOL', value: '₹ 10.5L+' },
];

export default function Prizes() {
  return (
    <section id="prizes" className="section-navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#5BE2B3', letterSpacing: '0.2em', marginBottom: 12 }}>
             PRIZE POOL
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: 60 }}>
             WIN BIG, BUILD <span style={{ color: '#5BE2B3' }}>BIGGER</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', justifyContent: 'center' }} className="perspective-1000">
           {prizeSummary.map((p, idx) => (
              <ScrollReveal key={p.label} delay={idx * 150} animation="reveal">
                 <div 
                   className="card-3d" 
                   style={{ 
                     minWidth: 320, 
                     padding: '60px 40px', 
                     border: '2px solid rgba(91, 226, 179, 0.2)', 
                     background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                     boxShadow: '0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(91, 226, 179, 0.05)',
                     position: 'relative',
                     overflow: 'hidden'
                   }}
                 >
                    {/* Decorative glow */}
                    <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(91, 226, 179, 0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#5BE2B3', letterSpacing: '0.15em', marginBottom: 24, textTransform: 'uppercase' }}>{p.label}</p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6 }}>
                       <p style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: '#f8fafc', letterSpacing: '-0.02em', textShadow: '0 0 30px rgba(91, 226, 179, 0.3)' }}>
                         {p.value}
                       </p>
                    </div>
                    
                    <div className="brochure-line" style={{ margin: '32px auto', opacity: 0.3, width: '60%' }} />
                    
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '240px', margin: '0 auto', lineHeight: 1.6 }}>
                      Including cash prizes, platform credits, and exclusive goodies.
                    </p>
                 </div>
              </ScrollReveal>
           ))}
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
           {[
              { icon: '🏆', title: 'Grand Winner', desc: 'Top Performance Rewards' },
              { icon: '🥉', title: 'Top 3 Ideathon', desc: 'Direct Hackathon Entry' },
              { icon: '🥈', title: 'Certificates', desc: 'For All Participants' },
              { icon: '🎖️', title: 'Networking', desc: 'Industry Connections' },
           ].map(item => (
              <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 16, backgroundColor: 'rgba(255,255,255,0.03)', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                 <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                 <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>{item.title}</p>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{item.desc}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
