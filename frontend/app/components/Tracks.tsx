'use client';
import ScrollReveal from './ScrollReveal';

const tracks = [
  {
    icon: '⚖️',
    title: 'LAW + TECH COLLABORATION',
    color: '#1e293b',
    desc: 'Bridges legal frameworks (DPDP Act 2023) and tech innovation.',
  },
  {
    icon: '🤖',
    title: 'AI INNOVATION',
    color: '#1e293b',
    desc: 'Ethical AI systems aligned with privacy and compliance.',
  },
  {
    icon: '🛡️',
    title: 'CYBERSECURITY SOLUTION',
    color: '#1e293b',
    desc: 'Robust frameworks for secure data lifecycle management.',
  },
  {
    icon: '🌍',
    title: 'SOCIAL IMPACT PROJECT',
    color: '#1e293b',
    desc: 'Digital governance models creating community value.',
  },
  {
    icon: '👩‍💻',
    title: 'WOMEN-LED TEAM',
    color: '#1e293b',
    desc: 'Empowering diversity and female leadership in tech.',
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="section-white">
      <div className="dots-grid" />
      <div className="bg-text-large" style={{ bottom: '10%', right: '0%', opacity: 0.02 }}>TRACKS</div>
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-lg">INNOVATION TRACKS</h2>
        </ScrollReveal>
        <div style={{ marginTop: 60 }} className="brochure-grid perspective-1000">
          {tracks.map((track, idx) => (
            <ScrollReveal key={track.title} delay={idx * 100} animation="reveal">
              <div 
                className="brochure-card card-3d"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                 <div style={{ fontSize: '2.5rem', color: '#c29b40', marginBottom: 20 }}>{track.icon}</div>
                 <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: 16, letterSpacing: '0.05em' }}>
                    {track.title}
                 </h3>
                 <p style={{ fontSize: '0.85rem', color: '#475569' }}>
                    {track.desc}
                 </p>
                 <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                    <div className="brochure-line" />
                 </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
