'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hrs: 0, min: 0, sec: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hrs:  Math.floor((diff / (1000 * 60 * 60)) % 24),
        min:  Math.floor((diff / (1000 * 60)) % 60),
        sec:  Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function CountdownTimer({ targetDate, label, dayNum, month }: {
  targetDate: Date;
  label: string;
  dayNum: string;
  month: string;
}) {
  const t = useCountdown(targetDate);

  return (
    <div className="animate-float countdown-timer" style={{ textAlign: 'center' }}>
      {/* Date display */}
      <p style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>{dayNum}</p>
      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#5BE2B3', marginTop: 2 }}>{month}</p>
      <p style={{ fontSize: '0.65rem', fontWeight: 600, color: '#94a3b8', marginTop: 2, marginBottom: 12 }}>{label}</p>

      {/* Countdown strip */}
      <div
        style={{
          // backgroundColor: '#1e293b',
          borderRadius: 6,
          padding: '8px 6px',
          display: 'inline-flex',
          alignItems: 'flex-end',
          gap: 3,
        }}
      >
        {[
          { v: t.days, l: 'D' },
          { v: t.hrs,  l: 'H' },
          { v: t.min,  l: 'M' },
          { v: t.sec,  l: 'S' },
        ].map((unit, i) => (
          <div key={unit.l} style={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#5BE2B3', lineHeight: 1 }}>
                {String(unit.v).padStart(2, '0')}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(91, 226, 179, 0.59)', letterSpacing: '0.05em', marginTop: 2 }}>
                {unit.l}
              </div>
            </div>
            {i < 3 && (
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#5BE2B3', paddingBottom: 20 }}>:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const IDEATHON_DATE  = new Date('2026-04-11T09:00:00+05:30');
const HACKATHON_DATE = new Date('2026-04-18T09:00:00+05:30');

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0F1A18',
      }}
    >
      {/* LEFT PANEL */}
      <div
        className="hero-left"
        style={{
          width: '45%',
          backgroundColor: '#121F1C',
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
              backgroundColor: '#5BE2B3',
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
            <span style={{ color: '#5BE2B3' }}>@BVP 3.0</span>
          </h1>

          <div style={{ marginBottom: 40, maxWidth: 400, lineHeight: 1.5 }}>
            Innovation Ideathon &amp; Hackathon on <br />
            <span style={{ color: '#5BE2B3', fontWeight: 700 }}>
              Digital Trust &amp; Data Accountability
            </span>
          </div>

          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>POWERED BY</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              DPDP Act 2023
            </p>
          </div>

          <div className="hero-cta" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" style={{ background: '#5BE2B3', color: '#0F1A18', padding: '12px 28px', fontSize: '0.8rem', fontWeight: 800, borderRadius: '4px', letterSpacing: '0.1em' }} className="hover:bg-[#34d399] transition-colors">
              REGISTER NOW
            </a>
            <a
              href="#event"
              className="btn-brochure-outline"
              style={{ borderColor: 'white', color: 'white', padding: '12px 28px', fontSize: '0.8rem', fontWeight: 800, borderRadius: '4px', letterSpacing: '0.1em' }}
            >
              VIEW SCHEDULE
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="hero-right"
        style={{
          width: '55%',
          backgroundColor: '#0F1A18',
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
          {/* BIG CENTERED LOGO */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(160px, 18vw, 260px)',
              height: 'clamp(160px, 18vw, 260px)',
              margin: '0 auto 0px auto',
            }}
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
              color: '#f8fafc',
              marginBottom: 16,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Bharati Vidyapeeth&apos;s <br /> College of Engineering, <br /> New Delhi
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '1rem',
              maxWidth: 450,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            An ISO 9001:2015 Certified Institution approved by AICTE &amp;
            Affiliated to GGSIPU, Delhi.
          </p>

          {/* DATES + TIMERS */}
          <div
            className="hero-countdowns"
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 24,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <CountdownTimer
              targetDate={IDEATHON_DATE}
              label="IDEATHON"
              dayNum="11"
              month="APRIL"
            />

            <div
              className="hero-countdowns-divider"
              style={{ width: 1, height: 120, backgroundColor: '#2C3E3A', marginTop: 8 }}
            />

            <CountdownTimer
              targetDate={HACKATHON_DATE}
              label="HACKATHON"
              dayNum="18"
              month="APRIL"
            />
          </div>
        </div>
      </div>
    </section>
  );
}