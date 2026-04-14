'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isVisible: false,
  });

  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isVisible: false });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // Visible only if less than 5 days are left
      const isVisible = diff < 5 * 24 * 60 * 60 * 1000;

      setTimeLeft({ days, hours, minutes, seconds, isVisible });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: 'center', minWidth: '40px' }}>
      <div
        style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          color: '#5BE2B3',
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div
        style={{
          fontSize: '0.6rem',
          fontWeight: 700,
          color: 'rgba(91, 226, 179, 0.6)',
          letterSpacing: '0.05em',
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CountdownTimer({
  targetDate,
  label,
  dayNum,
  month,
}: {
  targetDate: Date;
  label: string;
  dayNum: string;
  month: string;
}) {
  const { days, hours, minutes, seconds, isVisible } = useCountdown(targetDate);

  return (
    <div className="animate-float countdown-timer" style={{ textAlign: 'center' }}>
      {!isVisible ? (
        /* HORIZONTAL LAYOUT - Original Style (Date | Days) */
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
          }}
        >
          {/* DATE */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1,
              }}
            >
              {dayNum}
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#5BE2B3',
                marginTop: 2,
              }}
            >
              {month}
            </div>
          </div>

          {/* DIVIDER */}
          <div
            style={{
              width: 1,
              height: 46,
              backgroundColor: '#2C3E3A',
            }}
          />

          {/* DAYS */}
          <div>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#5BE2B3',
                lineHeight: 1,
              }}
            >
              {String(days).padStart(2, '0')}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'rgba(91, 226, 179, 0.6)',
                letterSpacing: '0.08em',
                marginTop: 4,
              }}
            >
              DAYS
            </div>
          </div>
        </div>
      ) : (
        /* VERTICAL LAYOUT - Timer Style (Date / Full Timer) */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {/* DATE */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#f8fafc',
                lineHeight: 1,
                transition: 'all 0.3s ease',
              }}
            >
              {dayNum}
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#5BE2B3',
                marginTop: 2,
                transition: 'all 0.3s ease',
              }}
            >
              {month}
            </div>
          </div>

          {/* TIMER GRID */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '8px 12px',
              backgroundColor: 'rgba(91, 226, 179, 0.05)',
              borderRadius: '8px',
              border: '1px solid rgba(91, 226, 179, 0.1)',
            }}
          >
            <TimeUnit value={days} label="DD" />
            <TimeUnit value={hours} label="HH" />
            <TimeUnit value={minutes} label="MM" />
            <TimeUnit value={seconds} label="SS" />
          </div>
        </div>
      )}

      {/* LABEL */}
      <p
        style={{
          fontSize: '0.65rem',
          fontWeight: 600,
          color: '#94a3b8',
          marginTop: isVisible ? 6 : 10,
          letterSpacing: '0.12em',
        }}
      >
        {label}
      </p>
    </div>
  );
}

const IDEATHON_DATE = new Date('2026-04-11T09:00:00+05:30');
const HACKATHON_DATE = new Date('2026-04-16T09:00:00+05:30');

export default function Hero() {

  return (
    <section
      id="hero"
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
          <div style={{ width: 40, height: 4, backgroundColor: '#5BE2B3', marginBottom: 24 }} />

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
            <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>DPDP Act 2023</p>
          </div>

          <div className="hero-cta" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#event"
              className="btn-brochure-outline"
              style={{
                borderColor: 'white',
                color: 'white',
                padding: '12px 28px',
                fontSize: '0.8rem',
                fontWeight: 800,
                borderRadius: '4px',
                letterSpacing: '0.1em',
              }}
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
          <div
            style={{
              position: 'relative',
              width: 'clamp(160px, 18vw, 260px)',
              height: 'clamp(160px, 18vw, 260px)',
              margin: '0 auto',
            }}
          >
            <Image src="/collegeLogo-bg.png" alt="BVCOE" fill priority style={{ objectFit: 'contain' }} />
          </div>

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

          {/* COUNTDOWNS */}
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 24,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <CountdownTimer targetDate={IDEATHON_DATE} label="IDEATHON" dayNum="11" month="APRIL" />

            <div style={{ width: 1, height: 120, backgroundColor: '#2C3E3A', marginTop: 8 }} />

            <CountdownTimer targetDate={HACKATHON_DATE} label="HACKATHON" dayNum="16-18" month="APRIL" />
          </div>
        </div>
      </div>
    </section>
  );
}