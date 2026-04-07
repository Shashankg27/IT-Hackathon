'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const sponsors = [
  {
    name: 'HoverRobotix',
    logo: '/sponsors/HoverRobotix Logo png.png',
    link: '#',
  },
  {
    name: 'Lucr8 Ventures',
    logo: '/sponsors/Lucr8 Ventures Logo png.jpg.jpeg',
    link: '#',
  },
  {
    name: 'MENTORx',
    logo: '/sponsors/MENTORx Logo png.png',
    link: '#',
  },
  {
    name: 'RevUp',
    logo: '/sponsors/RevUp Logo png (2).png',
    link: '#',
  },
  {
    name: 'Devfolio',
    logo: '/Devfolio_Logo-White.png',
    link: 'https://devfolio.co',
  },
  {
    name: 'Wolfram',
    logo: '/sponsors/Wolfram.png',
    link: 'https://www.wolfram.com',
    padding: '10px'
  },
  {
    name: 'UniAcademy',
    logo: '/sponsors/uniacademy.jpg',
    link: 'https://uniacademy.pro',
  }
];

function SponsorCard({ sponsor, delay }: { sponsor: typeof sponsors[0], delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <a 
        href={sponsor.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative block"
        style={{ textDecoration: 'none' }}
      >
        <div 
          className="relative transition-all duration-500 ease-out transform group-hover:-translate-y-3"
          style={{
            width: '320px',
            maxWidth: '100%',
            height: '120px',
            backgroundColor: 'rgba(18, 31, 28, 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '1px solid rgba(91, 226, 179, 0.15)',
            padding: sponsor.padding || '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Animated Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(91, 226, 179, 0.15) 0%, transparent 70%)'
            }}
          />
          
          <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
            <Image 
              src={sponsor.logo} 
              alt={`${sponsor.name.toUpperCase()} LOGO`} 
              fill
              style={{ objectFit: 'contain' }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <h4 className="transition-colors duration-300 group-hover:text-[#5BE2B3]" 
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600 }}>
            {sponsor.name}
          </h4>
        </div>
      </a>
    </ScrollReveal>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative" style={{ backgroundColor: '#0F1A18', padding: '120px 24px' }}>
      {/* Background Decor */}
      <div className="dots-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#5BE2B3]/[0.03] blur-[100px] rounded-full" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#5BE2B3]/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ 
              color: '#5BE2B3', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              Partnerships
            </span>
            <h2 className="heading-lg" style={{ color: '#f8fafc', margin: 0 }}>
              POWERED BY <span style={{ color: '#5BE2B3' }}>INNOVATORS</span>
            </h2>
            <p style={{ color: '#94a3b8', marginTop: '24px', maxWidth: '600px', marginInline: 'auto', fontSize: '1.1rem' }}>
              We collaborate with visionary organizations to redefine the boundaries of what&apos;s possible.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px', 
          justifyItems: 'center' 
        }}>
          {sponsors.map((s, i) => (
            <SponsorCard key={s.name} sponsor={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
