'use client';
import ScrollReveal from './ScrollReveal';
import { useState, useEffect } from 'react';

const timelineData = [
  {
    phase: 'Phase I',
    title: 'IDEATHON',
    y: 80,
    rounds: [
      { num: 'ROUND 1', title: 'Abstract Submission', desc: 'Teams submit innovative abstracts aligned with tracks.', y: 180, icon: '💡', roadPeak: 'left', showPin: false },
      { num: 'ROUND 2', title: 'Innovation Pitch', date: '11 APRIL 2026', subtitle: 'OFFLINE', desc: 'Shortlisted teams present the solution.', y: 500, icon: '⚙️', roadPeak: 'right', showPin: true, venue: 'BVCOE Campus' }
    ]
  },
  {
    phase: 'Phase II',
    title: 'HACKATHON',
    y: 650,
    rounds: [
      { num: 'ROUND 1', title: 'Presentation Round', desc: 'Virtual technical solution walkthrough.', y: 800, icon: '📝', roadPeak: 'left', showPin: false },
      { num: 'ROUND 2', title: 'Mentoring Round', desc: 'Shortlisted teams build and refine working prototypes.', y: 1160, icon: '🚀', roadPeak: 'right', showPin: false },
      { num: 'GRAND FINALE', title: 'OFFLINE', date: '18 APRIL 2026', subtitle: 'Presentation Round', desc: 'Finalist teams present prototypes before an expert jury panel.', y: 1500, icon: '🔬', roadPeak: 'left', showPin: true, venue: 'BVCOE Campus' }
    ]
  }
];

// Location Pin Component
const LocationPin = ({ size = 32 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size * 1.25} 
    viewBox="0 0 24 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
  >
    <path 
      d="M12 0C5.373 0 0 5.373 0 12c0 9 12 18 12 18s12-9 12-18c0-6.627-5.373-12-12-12z" 
      fill="#5BE2B3"
    />
    <circle cx="12" cy="12" r="5" fill="#0F1A18" />
    <ellipse cx="9" cy="9" rx="2" ry="1.5" fill="rgba(255,255,255,0.4)" />
  </svg>
);

export default function EventStructure() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allRounds = timelineData.flatMap(p => p.rounds);

  return (
    <section style={{ background: '#0F1A18', padding: '120px 24px', position: 'relative', overflow: 'hidden' }} id='event'>
      
      {/* Desktop Version */}
      <div className="desktop-timeline" style={{ 
        display: isMobile ? 'none' : 'block',
        position: 'relative', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        minHeight: '1800px',
        paddingBottom: '100px'
      }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

          {/* SIDE TITLE */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '400px',
            transform: 'rotate(-90deg) translateX(-50%)',
            transformOrigin: 'left center',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '0.1em'
          }}>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(91,226,179,0.8)' }}>
              EVENT
            </span> TIMELINE
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', marginLeft: '100px' }}>

            {/* ROAD */}
            <svg
              viewBox="0 0 800 1800"
              preserveAspectRatio="xMidYMin slice"
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%) scaleX(-1)',
                width: '100%',
                height: '1800px',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            >
              <path
                d="M 400 0 C 580 80, 580 280, 400 360 
                   C 220 440, 220 560, 400 640 
                   C 580 720, 580 880, 400 960 
                   C 220 1040, 220 1160, 400 1240 
                   C 580 1320, 580 1440, 400 1520
                   C 220 1600, 220 1720, 400 1800"
                fill="none"
                stroke="#545959"
                strokeWidth="60"
                strokeLinecap="round"
              />
              <path
                d="M 400 0 C 580 80, 580 280, 400 360 
                   C 220 440, 220 560, 400 640 
                   C 580 720, 580 880, 400 960 
                   C 220 1040, 220 1160, 400 1240 
                   C 580 1320, 580 1440, 400 1520
                   C 220 1600, 220 1720, 400 1800"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeDasharray="12,12"
                strokeLinecap="round"
              />
            </svg>

            {/* PINS ON ROAD - Desktop */}
            {allRounds.map((round, idx) => {
              if (!round.showPin) return null;
              const isRight = round.roadPeak === 'right';
              // Position pin on the road (center is 400, offset based on peak)
              const pinX = isRight ? '65%' : '35%';
              
              return (
                <div
                  key={`pin-${idx}`}
                  style={{
                    position: 'absolute',
                    left: pinX,
                    top: round.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 15,
                    animation: 'bounce 2s infinite'
                  }}
                >
                  <LocationPin size={36} />
                  {/* Venue label */}
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '4px',
                    background: 'rgba(15,26,24,0.9)',
                    border: '1px solid rgba(91,226,179,0.5)',
                    borderRadius: '12px',
                    padding: '3px 10px',
                    fontSize: '0.6rem',
                    color: '#5BE2B3',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    backdropFilter: 'blur(4px)'
                  }}>
                    📍 {round.venue}
                  </div>
                </div>
              );
            })}

            {/* PHASE LABELS */}
            {timelineData.map((phase, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  top: phase.y,
                  left: idx % 2 === 0 ? '60%' : '10%',
                  transform: 'translateX(-50%)',
                  zIndex: 10
                }}
              >
                <ScrollReveal animation={idx % 2 === 0 ? "reveal-right" : "reveal-left"}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.85rem', fontWeight: 900 }}>{phase.phase}</h4>
                  <h2 style={{ color: '#F8FAFC', fontSize: '2rem', fontWeight: 900 }}>{phase.title}</h2>
                </ScrollReveal>
              </div>
            ))}

            {/* ROUNDS */}
            {allRounds.map((round, idx) => {
              const isRight = round.roadPeak === 'right';
              const iconX = isRight ? '78%' : '22%';
              const textX = isRight ? '38%' : '62%';
              const textAlign = isRight ? 'right' : 'left';
              const textAnimation = isRight ? 'reveal-left' : 'reveal-right';

              return (
                <div key={idx} style={{ position: 'absolute', top: round.y, left: 0, right: 0, height: '120px' }}>

                  {/* ICON - Kept in original position */}
                  <div style={{
                    position: 'absolute',
                    left: iconX,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(18,31,28,0.95)',
                    border: '2px solid rgba(91,226,179,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    zIndex: 20
                  }}>
                    {round.icon}
                  </div>

                  {/* TEXT */}
                  <div style={{
                    position: 'absolute',
                    left: textX,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    textAlign: textAlign,
                    zIndex: 10
                  }}>
                    <ScrollReveal animation={textAnimation}>
                      <p style={{ color: '#5BE2B3', fontSize: '0.7rem', fontWeight: 800 }}>{round.num}</p>
                      <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', fontWeight: 900 }}>{round.title}</h4>
                      {round.date && <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{round.date}</p>}
                      {round.subtitle && <p style={{ fontSize: '0.8rem', fontWeight: 800 }}>{round.subtitle}</p>}
                      <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '6px' }}>{round.desc}</p>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Mobile Version - Vertical Timeline */}
      <div className="mobile-timeline" style={{ 
        display: isMobile ? 'block' : 'none',
        maxWidth: '600px',
        margin: '0 auto',
        position: 'relative',
        padding: '0 20px'
      }}>
        
        {/* Mobile Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 900, 
            color: '#F8FAFC',
            marginBottom: '8px'
          }}>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(91,226,179,0.8)' }}>
              EVENT
            </span> TIMELINE
          </h2>
          <div style={{ width: '60px', height: '3px', background: '#5BE2B3', margin: '0 auto' }}></div>
        </div>

        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '40px',
          top: '120px',
          bottom: '0',
          width: '3px',
          background: 'linear-gradient(to bottom, #5BE2B3, #545959)',
          zIndex: 1
        }}></div>

        {/* PINS ON ROAD - Mobile */}
        {allRounds.map((round, idx) => {
          if (!round.showPin) return null;
          return (
            <div
              key={`mobile-pin-${idx}`}
              style={{
                position: 'absolute',
                left: '40px',
                top: round.y + 100, // Offset to align with timeline
                transform: 'translate(-50%, -50%)',
                zIndex: 15,
                animation: 'bounce 2s infinite'
              }}
            >
              <LocationPin size={28} />
            </div>
          );
        })}

        {/* Mobile Timeline Items */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {timelineData.map((phase, phaseIdx) => (
            <div key={phaseIdx} style={{ marginBottom: '50px' }}>
              
              {/* Phase Header */}
              <ScrollReveal animation="reveal-left">
                <div style={{
                  marginBottom: '30px',
                  paddingLeft: '60px'
                }}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.8rem', fontWeight: 900, marginBottom: '4px' }}>
                    {phase.phase}
                  </h4>
                  <h2 style={{ color: '#F8FAFC', fontSize: '1.5rem', fontWeight: 900 }}>
                    {phase.title}
                  </h2>
                </div>
              </ScrollReveal>

              {/* Rounds */}
              {phase.rounds.map((round, roundIdx) => (
                <ScrollReveal key={roundIdx} animation="reveal-left" delay={roundIdx * 100}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '40px',
                    paddingLeft: '20px'
                  }}>
                    
                    {/* Icon Node - Kept in place */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(18,31,28,0.95)',
                      border: '2px solid #5BE2B3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      marginRight: '20px',
                      position: 'relative',
                      zIndex: 3
                    }}>
                      {round.icon}
                    </div>

                    {/* Content Card */}
                    <div style={{
                      flex: 1,
                      background: 'rgba(26,47,43,0.6)',
                      border: '1px solid rgba(91,226,179,0.3)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                      position: 'relative'
                    }}>
                      {/* Connector Line */}
                      <div style={{
                        position: 'absolute',
                        left: '-20px',
                        top: '20px',
                        width: '20px',
                        height: '2px',
                        background: '#5BE2B3',
                        opacity: 0.5
                      }}></div>

                      <p style={{ color: '#5BE2B3', fontSize: '0.65rem', fontWeight: 800, marginBottom: '4px' }}>
                        {round.num}
                      </p>
                      <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', fontWeight: 900, marginBottom: '4px' }}>
                        {round.title}
                      </h4>
                      {round.date && (
                        <p style={{ fontSize: '0.75rem', color: '#5BE2B3', fontWeight: 600, marginBottom: '2px' }}>
                          {round.date}
                        </p>
                      )}
                      {round.subtitle && (
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700, marginBottom: '4px' }}>
                          {round.subtitle}
                        </p>
                      )}
                      
                      {/* Venue info for offline events */}
                      {round.showPin && (
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'rgba(91,226,179,0.15)',
                          border: '1px solid rgba(91,226,179,0.4)',
                          borderRadius: '12px',
                          padding: '3px 10px',
                          fontSize: '0.7rem',
                          color: '#5BE2B3',
                          fontWeight: 700,
                          marginTop: '8px',
                          marginBottom: '4px'
                        }}>
                          <span>📍</span>
                          <span>{round.venue}</span>
                        </div>
                      )}
                      
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5, marginTop: '8px' }}>
                        {round.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }
        @media (max-width: 1024px) {
          .desktop-timeline {
            display: none !important;
          }
          .mobile-timeline {
            display: block !important;
          }
        }
        @media (min-width: 1025px) {
          .desktop-timeline {
            display: block !important;
          }
          .mobile-timeline {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}