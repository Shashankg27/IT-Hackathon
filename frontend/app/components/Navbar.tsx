'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'TIMELINE', href: '#event' },
  { label: 'PRIZES', href: '#prizes' },
  { label: 'PAST EVENTS', href: '#past-events' },
  { label: 'SPONSORS', href: '#sponsor-tiers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? '#121F1C' : 'rgba(18,31,28,0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled
            ? '1px solid rgba(91,226,179,0.3)'
            : '1px solid rgba(255,255,255,0.1)',
          height: 80,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="nav-inner">
          <div className="logo">
            <Image
              src="/collegeLogo.png"
              alt="BVCOE Logo"
              width={44}
              height={44}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div>
              <div className="logo-top">IT DEPT · BVCOE</div>
              <div className="logo-bottom">Hack.IT@BVP 3.0</div>
            </div>
          </div>

          <button
            className={`mobile-menu-button ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="register-btn">
              REGISTER
            </a>
          </div>
        </div>
      </nav>

      {/* ================= RIGHT DRAWER ================= */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-register-btn"
          onClick={() => setMenuOpen(false)}
        >
          REGISTER
        </a>
      </div>

      {/* OVERLAY */}
      <div
        className={`mobile-overlay ${menuOpen ? 'show' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <style>{`
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 24px;
        }

        .logo {
          display: flex;
          gap: 12px;
          align-items: center;
          color: white;
        }

        .logo-top {
          font-size: 0.65rem;
          font-weight: 700;
        }

        .logo-bottom {
          font-size: 1rem;
          font-weight: 800;
          color: #5BE2B3;
        }

        .desktop-nav {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .desktop-nav a {
          color: white;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .register-btn {
          background: #5BE2B3;
          color: #0F1A18;
          padding: 8px 24px;
          border-radius: 4px;
          font-weight: 800;
        }

        /* 🍔 button */
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu-button span {
          width: 22px;
          height: 2px;
          background: white;
          transition: 0.3s;
        }

        .mobile-menu-button.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .mobile-menu-button.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-button.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* 📱 DRAWER */
        .mobile-drawer {
          position: fixed;
          top: 80px;
          right: 0;
          width: 75%;
          max-width: 320px;
          height: calc(100vh - 80px);
          background: #121F1C;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transform: translateX(100%);
          transition: transform 0.35s ease;
          z-index: 1001;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .mobile-drawer a {
          color: white;
          text-decoration: none;
          font-weight: 700;
        }

        .mobile-register-btn {
          background: #5BE2B3;
          color: #0F1A18 !important;
          padding: 12px;
          text-align: center;
          border-radius: 4px;
          font-weight: 800;
        }

        /* overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          opacity: 0;
          pointer-events: none;
          transition: 0.3s;
          z-index: 1000;
        }

        .mobile-overlay.show {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-button {
            display: flex;
          }
        }

        @media (min-width: 1025px) {
          .mobile-drawer,
          .mobile-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
}