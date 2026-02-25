'use client';
import ScrollReveal from './ScrollReveal';

const tiers = [
  { name: 'TITLE PARTNER', price: '1 L', color: '#c29b40', perks: ['Chief Guest', 'Logo on Main Screen', 'Stall Space'] },
  { name: 'GOLD PARTNER', price: '50 K', color: '#1e293b', perks: ['Guest of Honor', 'Screen Branding', 'Stall Space'] },
  { name: 'SILVER PARTNER', price: '25 K', color: '#1e293b', perks: ['Guest of Honor', 'Screen Branding', 'Stall Space'] },
  { name: 'EVENT PARTNER', price: '15 K', color: '#1e293b', perks: ['Naming Rights', 'Logo on Posters', 'Market Research'] },
];

export default function SponsorTiers() {
  return (
    <section id="sponsor-tiers" className="section-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-lg">PARTNERSHIP BRACKETS</h2>
        </ScrollReveal>
        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }} className="perspective-1000">
           {tiers.map((tier, idx) => (
              <ScrollReveal key={tier.name} delay={idx * 150} animation="reveal">
                <div 
                  className="card-3d"
                  style={{ 
                    border: `2px solid ${tier.color === '#c29b40' ? '#c29b40' : '#e2e8f0'}`, 
                    padding: '32px',
                    backgroundColor: tier.color === '#c29b40' ? 'rgba(194, 155, 64, 0.05)' : 'white',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                 <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1e293b', letterSpacing: '0.1em' }}>{tier.name}</h3>
                 <p style={{ fontSize: '2rem', fontWeight: 800, color: tier.color, margin: '16px 0' }}>{tier.price}</p>
                 <ul style={{ listStyle: 'none', padding: 0, marginTop: 24, borderTop: '1px solid #e2e8f0', paddingTop: 24 }}>
                    {tier.perks.map(p => (
                       <li key={p} style={{ fontSize: '0.8rem', color: '#475569', marginBottom: 12, display: 'flex', gap: 10 }}>
                          <span style={{ color: '#c29b40' }}>✓</span> {p}
                       </li>
                    ))}
                 </ul>
              </div>
              </ScrollReveal>
           ))}
        </div>
        
        {/* Additional Tiers - Compact list style */}
        <div style={{ marginTop: 40, borderTop: '1px solid #e2e8f0', paddingTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30 }}>
           {[
              { name: 'TECHNICAL PARTNER', price: '15 K' },
              { name: 'EDUCATIONAL PARTNER', price: '12 K' },
              { name: 'FOOD PARTNER', price: '8 K' },
              { name: 'GIFTING PARTNER', price: 'Kind' },
           ].map(t => (
              <div key={t.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: 12 }}>
                 <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e293b' }}>{t.name}</p>
                 <p style={{ fontSize: '0.85rem', fontWeight: 800, color: '#c29b40' }}>{t.price}</p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
