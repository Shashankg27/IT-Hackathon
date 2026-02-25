'use client';
import ScrollReveal from './ScrollReveal';

const phases = [
  {
    phase: 'PHASE I',
    title: 'IDEATHON',
    date: '11 April 2026',
    mode: 'OFFLINE',
    color: '#c29b40',
    rounds: [
      { step: '01', name: 'Abstract Submission', desc: 'Teams submit innovative abstracts aligned with tracks.' },
      { step: '02', name: 'Innovation Pitch', desc: 'Shortlisted teams will present the solution.' },
      // { step: '03', name: 'Top 3 Privilege', desc: 'Winners get ₹15k total prize + direct entry to Hackathon Rd 2.' },
    ],
  },
  {
    phase: 'PHASE II',
    title: 'HACKATHON',
    date: '18 April 2026',
    mode: 'HYBRID',
    color: '#1e293b',
    rounds: [
      { step: 'R1', name: 'Presentation Round', desc: 'Virtual technical solution walkthrough.' },
      { step: 'R2', name: 'Mentoring Round', desc: 'Feasibility, technical implementation, and theme alignment.' },
      { step: 'R3', name: 'Grand Finale', desc: 'Prototype presentation at college.' },
    ],
  },
];

export default function EventStructure() {
  return (
    <section id="event" className="section-gray">
      <div className="dots-grid" />
      <div className="bg-text-large" style={{ top: '5%', right: '-10%', opacity: 0.015, color: '#1e293b' }}>PLAN</div>
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-lg">EVENT SCHEDULE</h2>
        </ScrollReveal>
        <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 60 }}>
          {phases.map((ph, pIdx) => (
            <div key={ph.title} style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
              {/* Sidebar label style */}
              <ScrollReveal animation="reveal-left" delay={pIdx * 200} style={{ flex: '0 0 200px' }}>
                <div style={{ borderLeft: `6px solid ${ph.color}`, paddingLeft: 20 }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 800, color: ph.color, letterSpacing: '0.1em' }}>{ph.phase}</p>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>{ph.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: 12 }}>{ph.date}</p>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, marginTop: 4, opacity: 0.6 }}>{ph.mode}</p>
                </div>
              </ScrollReveal>

              {/* Steps/Timeline style */}
              <div style={{ flex: '1 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                 {ph.rounds.map((r, rIdx) => (
                    <ScrollReveal key={r.name} delay={(pIdx * 200) + (rIdx * 100)}>
                      <div style={{ backgroundColor: 'white', padding: '24px', border: '1px solid #e2e8f0', height: '100%', transition: 'all 0.3s ease' }} className="hover:shadow-md">
                         <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#c29b40', marginBottom: 12 }}>{r.step}</div>
                         <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{r.name}</h4>
                         <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'justify' }}>{r.desc}</p>
                      </div>
                    </ScrollReveal>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
