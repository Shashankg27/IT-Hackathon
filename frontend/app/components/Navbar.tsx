'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'TRACKS', href: '#tracks' },
  { label: 'TIMELINE', href: '#event' },
  { label: 'PRIZES', href: '#prizes' },
  { label: 'PAST EVENTS', href: '#past-events' },
  { label: 'SPONSORS', href: '#sponsor-tiers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? '#1e293b' : 'rgba(30, 41, 59, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(194,155,64,0.3)' : '1px solid rgba(255,255,255,0.1)',
        height: 80,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/collegeLogo.png" alt="BVCOE Logo" width={44} height={44} style={{ filter: 'brightness(0) invert(1)' }} />
          <div style={{ color: 'white', lineHeight: 1.1 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>IT DEPT · BVCOE</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#c29b40' }}>Hack.IT@BVP 3.0</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                transition: 'all 0.3s',
                padding: '8px 0',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#c29b40';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              {link.label}
              <span className="nav-line" style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: 0, 
                height: 2, 
                background: '#c29b40', 
                transition: 'width 0.3s' 
              }} />
            </a>
          ))}
          <a href="#contact" className="btn-brochure-gold" style={{ padding: '8px 24px', fontSize: '0.7rem', borderRadius: '4px' }}>
            REGISTER
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
        }
        nav a:hover .nav-line {
          width: 100% !important;
        }
      `}</style>
    </nav>
  );
}
