'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const events = [
  {
    title: 'HACK THE CRISIS 3.0',
    date: 'MARCH 2024',
    theme: 'Climate Change',
    image: '/hackTheCrisis3.0.png',
  },
  {
    title: 'GDSC BVCOE EVENT',
    date: 'OCTOBER 2023',
    theme: 'Google Cloud',
    image: '/GDSCEvent1.png',
  },
  {
    title: 'HACK.IT@BVP 2.0',
    date: 'BVEST 2023',
    theme: 'Innovation Hackathon',
    image: '/GDSCEvent2.png', 
  }
];

export default function PastEvents() {
  return (
    <section id="past-events" className="section-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-lg">EVENT HIGHLIGHTS</h2>
        </ScrollReveal>
        <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
           {events.map((ev, idx) => (
              <ScrollReveal key={ev.title} delay={idx * 150} animation="reveal">
                <div style={{ border: '1px solid #e2e8f0', overflow: 'hidden', height: '100%' }} className="card-3d brochure-card">
                   <div style={{ position: 'relative', height: 240 }}>
                    <Image src={ev.image} alt={ev.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px', backgroundColor: 'rgba(30, 41, 59, 0.9)', color: 'white', width: '100%' }}>
                       <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#c29b40' }}>{ev.date}</p>
                       <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>{ev.title}</h3>
                    </div>
                 </div>
                 <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                       Successfully organized by the IT department, fostering innovation and technical excellence among students.
                    </p>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e293b', marginTop: 12 }}>
                       Theme: {ev.theme}
                    </p>
                 </div>
              </div>
              </ScrollReveal>
           ))}
        </div>
      </div>
    </section>
  );
}
