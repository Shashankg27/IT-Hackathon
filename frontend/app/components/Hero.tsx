'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f8fafc',
        // paddingTop: '90px', // match navbar height
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: '45%',
          backgroundColor: '#1e293b',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 8%',
          color: 'white',
        }}
      >
        <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <div
            style={{
              width: 40,
              height: 4,
              backgroundColor: '#c29b40',
              marginBottom: 24,
            }}
          />

          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            HACK.IT <br />
            <span style={{ color: '#c29b40' }}>@BVP 3.0</span>
          </h1>

          <div style={{ marginBottom: 40, maxWidth: 400, lineHeight: 1.5 }}>
            Innovation Ideathon & Hackathon on <br />
            <span style={{ color: '#c29b40', fontWeight: 700 }}>
              Digital Trust & Data Accountability
            </span>
          </div>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>POWERED BY</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              DPDP Act 2023
            </p>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            <a href="#contact" className="btn-brochure-gold">
              REGISTER NOW
            </a>
            <a
              href="#event"
              className="btn-brochure-outline"
              style={{ borderColor: 'white', color: 'white' }}
            >
              VIEW SCHEDULE
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          width: '55%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10%',
        }}
      >
        <div
          className="animate-fadeIn card-3d"
          style={{
            textAlign: 'center',
            animationDelay: '0.5s',
            width: '100%',
            maxWidth: 520,
          }}
        >
          {/* ✅ BIG CENTERED LOGO */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(160px, 18vw, 260px)',
              height: 'clamp(160px, 18vw, 260px)',
              margin: '0 auto 0px auto',
            }}
            className=""
          >
            <Image
              src="/collegeLogo.png"
              alt="BVCOE"
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* COLLEGE NAME */}
          <h2
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#1e293b',
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Bharati Vidyapeeth&apos;s <br /> College of Engineering
          </h2>

          <p
            style={{
              color: '#475569',
              fontSize: '1rem',
              maxWidth: 450,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            An ISO 9001:2015 Certified Institution approved by AICTE &
            Affiliated to GGSIPU, Delhi.
          </p>

          {/* DATES */}
          <div
            style={{
              marginTop: 60,
              display: 'inline-flex',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>11</p>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c29b40' }}>
                APRIL
              </p>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, color: '#64748b' }}>
                IDEATHON
              </p>
            </div>

            <div style={{ width: 1, height: 80, backgroundColor: '#e2e8f0' }} />

            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 800 }}>18</p>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c29b40' }}>
                APRIL
              </p>
              <p style={{ fontSize: '0.65rem', fontWeight: 600, color: '#64748b' }}>
                HACKATHON
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}