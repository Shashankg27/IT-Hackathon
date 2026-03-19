'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const sponsors = [
  {
    name: 'Devfolio',
    logo: '/Devfolio_Logo-White.png',
    link: 'https://devfolio.co',
    category: 'PLATFORM PARTNER'
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ backgroundColor: '#0F1A18', padding: '100px 24px' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-lg" style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3', display: 'inline-block' }}>
              OUR SPONSORS
            </h2>
            <p style={{ color: '#94a3b8', marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }}>
              We are proud to be supported by industry-leading organizations that share our vision for innovation and data accountability.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px', 
          justifyItems: 'center', 
          alignItems: 'center' 
        }}>
          {sponsors.map((sponsor, idx) => (
            <ScrollReveal key={sponsor.name} delay={idx * 100}>
              <a 
                href={sponsor.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{
                  backgroundColor: '#121F1C',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid #2C3E3A',
                  width: '100%',
                  maxWidth: '400px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="sponsor-card hover:border-[#5BE2B3] hover:shadow-[0_0_30px_rgba(91,226,179,0.1)]"
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      fill
                      style={{ objectFit: 'contain', filter: 'grayscale(1) brightness(1.2)', transition: 'filter 0.3s ease' }}
                      className="group-hover:filter-none"
                    />
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#5BE2B3', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {sponsor.category}
                  </p>
                  <h4 style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 700 }}>{sponsor.name}</h4>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
