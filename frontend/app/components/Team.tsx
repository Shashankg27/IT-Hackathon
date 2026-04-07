'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

/* ─── Types ─── */
interface Member {
  name: string;
  role?: string;
  photo?: string; // Relative path from /public, e.g., 'team/anisha-garg.jpg'
}

/* ─── DATA ─── */

const convener: Member = {
  name: 'Prof. Prakhar Priyadarshi',
  role: 'Convener',
  photo: 'team/prakhar-priyadarshi.jpg',
};

const coConveners: Member[] = [
  { name: 'Dr. Neha Gupta', role: 'Co-Convener', photo: 'team/neha-gupta.jpg' },
  { name: 'Dr. Alka Leekha', role: 'Co-Convener', photo: 'team/alka-leekha.jpg' },
  { name: 'Dr. Sarita Yadav', role: 'Co-Convener', photo: 'team/sarita-yadav.jpg' },
  { name: 'Dr. Mahesh Kumar', role: 'Co-Convener', photo: 'team/mahesh-kumar.jpg' },
];

const core: Member[] = [
  { name: 'Anjali Priyadarshi', role: 'Student Coordinator', photo: 'team/anjali-priyadarshi.jpg' },
  { name: 'Tanay Chhabra', role: 'Student Coordinator', photo: 'team/tanay-chhabra.jpg' },
  {
    name: 'Ubaid Ashraf',
    role: 'Student Coordinator',
    photo: 'team/ubaid-ashraf.jpg',
  },
  {
    name: 'Anisha Garg',
    role: 'Student Coordinator',
    photo: 'team/anisha-garg.jpg',
  },
];

const heads: Member[] = [
  { name: 'Shashank Gupta', role: 'Tech Head', photo: 'team/shashank-gupta.jpg' },
  {
    name: 'Astha Pathak',
    role: 'Design Head',
    photo: 'team/astha-pathak.jpg',
  },
  { name: 'Chhavi', role: 'SM & Publicity Head'},
  {
    name: 'Bhavishya Ratna',
    role: 'Sponsorship Head',
    photo: 'team/bhavishya-ratna.jpg',
  },
  {
    name: 'Tanishq Pandey',
    role: 'C&D Head · Logistics Head',
    photo: 'team/tanishq-pandey.jpg',
  },
];

const team: Member[] = [
  {
    name: 'Anshika Gupta',
    role: 'Executive',
    photo: 'team/anshika-gupta.jpg',
  },
  { name: 'Amrit Raj', role: 'Executive' },
  {
    name: 'Tushar Sharma',
    role: 'Executive',
    photo: 'team/tushar-sharma.jpg',
  },
  {
    name: 'Manishka Gupta',
    role: 'Executive',
    photo: 'team/manishka-gupta.jpg',
  },
  {
    name: 'Sambhav Jain',
    role: 'Executive',
    photo: 'team/sambhav-jain.jpg',
  },
  { name: 'Vinayak', role: 'Executive' },
  {
    name: 'Harmanpreet Singh',
    role: 'Executive',
    photo: 'team/harmanpreet-singh.jpg',
  },
  {
    name: 'Avani Sharma',
    role: 'Executive',
    photo: 'team/avani-sharma.jpg',
  },
  { name: 'Drishti', role: 'Executive' },
  {
    name: 'Aastha Narang',
    role: 'Executive',
    photo: 'team/aastha-narang.jpg',
  },
  { name: 'Akshit', role: 'Executive'},
  {
    name: 'Aniket Kumar Singh',
    role: 'Executive',
    photo: 'team/aniket-kumar-singh.jpg',
  },
  {
    name: 'Ayush Kumar',
    role: 'Executive',
    photo: 'team/ayush-kumar.jpg',
  },
  { name: 'Devanshu', role: 'Executive' },
  { name: 'Sankalp', role: 'Executive' },
  { name: 'Aayush Dutta', role: 'Executive' },
  { name: 'Parth Sharma', role: 'Executive' },
  { name: 'Tridibesh Samantroy', role: 'Executive' },
];

/* ─── Initials helper ─── */
function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/* ─── Avatar fallback ─── */
function Avatar({ name, photo, size = 120 }: { name: string; photo?: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const initials = getInitials(name);

  if (photo && !failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '3px solid rgba(91, 226, 179, 0.25)',
          background: 'linear-gradient(135deg, #1A2F2B 0%, #0F1A18 100%)',
        }}
      >
        <img
          src={`/${photo}`}
          alt={name}
          onError={() => setFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  }

  /* gradient based on name hash for unique colors */
  const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const hue = hash % 360;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        background: `linear-gradient(135deg, hsl(${hue}, 45%, 22%) 0%, hsl(${hue + 30}, 35%, 14%) 100%)`,
        border: '3px solid rgba(91, 226, 179, 0.2)',
        fontSize: size * 0.32,
        fontWeight: 800,
        color: '#5BE2B3',
        letterSpacing: '0.05em',
        userSelect: 'none',
      }}
    >
      {initials}
    </div>
  );
}

/* ─── CARD Components ─── */

/* Convener – large featured card */
function ConvenerCard({ member }: { member: Member }) {
  return (
    <ScrollReveal>
      <div className="team-card team-card--convener">
        <div className="team-card__glow" />
        <Avatar name={member.name} photo={member.photo} size={150} />
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <p className="team-card__label">{member.role}</p>
          <h3 className="team-card__name" style={{ fontSize: '1.35rem' }}>
            {member.name}
          </h3>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* Standard member card */
function MemberCard({
  member,
  avatarSize = 110,
  delay = 0,
}: {
  member: Member;
  avatarSize?: number;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="team-card">
        <Avatar name={member.name} photo={member.photo} size={avatarSize} />
        <div style={{ textAlign: 'center', marginTop: 14 }}>
          <p className="team-card__label">{member.role}</p>
          <h4 className="team-card__name">{member.name}</h4>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Section title ─── */
function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <ScrollReveal>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span
          style={{
            color: '#5BE2B3',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 8,
          }}
        >
          {label}
        </span>
        <h3
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 800,
            color: '#f8fafc',
          }}
        >
          {title}
        </h3>
        <div
          style={{
            width: 60,
            height: 3,
            background: 'linear-gradient(90deg, #5BE2B3, #34d399)',
            margin: '12px auto 0',
            borderRadius: 2,
          }}
        />
      </div>
    </ScrollReveal>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: '#0F1A18',
        padding: '120px 24px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
      }}
    >
      {/* Background decoration */}
      <div className="dots-grid" style={{ opacity: 0.06 }} />
      <div
        className="bg-text-large"
        style={{ top: '5%', right: '-8%', opacity: 0.025, color: '#f8fafc' }}
      >
        TEAM
      </div>
      <div
        className="bg-glow-static"
        style={{ top: '20%', left: '-15%', background: 'radial-gradient(circle, rgba(91,226,179,0.04) 0%, transparent 70%)' }}
      />
      <div
        className="bg-glow-static"
        style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(91,226,179,0.03) 0%, transparent 70%)' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ── Main Heading ── */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span
              style={{
                color: '#5BE2B3',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 16,
              }}
            >
              The People Behind
            </span>
            <h2
              className="heading-lg"
              style={{
                color: '#f8fafc',
                margin: 0,
                display: 'inline-block',
              }}
            >
              OUR <span style={{ color: '#5BE2B3' }}>TEAM</span>
            </h2>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '1.1rem',
                maxWidth: 600,
                margin: '24px auto 0',
                lineHeight: 1.7,
              }}
            >
              Meet the brilliant minds orchestrating Hack.IT@BVP 3.0 — from
              faculty mentors to the tireless student crew making it all happen.
            </p>
          </div>
        </ScrollReveal>

        {/* ── CONVENER ── */}
        <SectionTitle label="Faculty" title="Convener" />
        <div className="team-grid team-grid--center" style={{ marginBottom: 80 }}>
          <ConvenerCard member={convener} />
        </div>

        {/* ── CO-CONVENERS ── */}
        <SectionTitle label="Faculty" title="Co-Conveners" />
        <div className="team-grid team-grid--4" style={{ marginBottom: 80 }}>
          {coConveners.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 80} avatarSize={100} />
          ))}
        </div>

        {/* ── STUDENT COORDINATORS ── */}
        <SectionTitle label="Core" title="Student Coordinators" />
        <div className="team-grid team-grid--4" style={{ marginBottom: 80 }}>
          {core.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 80} avatarSize={110} />
          ))}
        </div>

        {/* ── HEADS ── */}
        <SectionTitle label="Leadership" title="Heads" />
        <div className="team-grid team-grid--heads" style={{ marginBottom: 80 }}>
          {heads.map((m, i) => (
            <MemberCard key={m.name + (m.role || '')} member={m} delay={i * 80} avatarSize={100} />
          ))}
        </div>

        {/* ── TEAM ── */}
        <SectionTitle label="Executives" title="Team" />
        <div className="team-grid team-grid--team">
          {team.map((m, i) => (
            <MemberCard key={m.name} member={m} delay={i * 40} avatarSize={90} />
          ))}
        </div>
      </div>

      {/* ── COMPONENT STYLES ── */}
      <style>{`
        /* ───── GRID LAYOUTS ───── */
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
        }

        .team-grid--center {
          justify-content: center;
        }

        .team-grid--4 > * {
          flex: 0 1 240px;
          max-width: 260px;
        }

        .team-grid--heads > * {
          flex: 0 1 220px;
          max-width: 250px;
        }

        .team-grid--team > * {
          flex: 0 1 190px;
          max-width: 220px;
        }

        /* ───── CARD ───── */
        .team-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 20px 28px;
          border-radius: 20px;
          background: rgba(26, 47, 43, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(91, 226, 179, 0.08);
          transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
                      border-color 0.45s ease,
                      box-shadow 0.45s ease;
          overflow: hidden;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: rgba(91, 226, 179, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35),
                      0 0 30px rgba(91, 226, 179, 0.06);
        }

        /* Subtle top accent line */
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #5BE2B3, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .team-card:hover::before {
          opacity: 1;
        }

        .team-card--convener {
          padding: 44px 36px 36px;
          background: linear-gradient(
            160deg,
            rgba(26, 47, 43, 0.5) 0%,
            rgba(15, 26, 24, 0.7) 100%
          );
          border: 1px solid rgba(91, 226, 179, 0.15);
          max-width: 300px;
          margin: 0 auto;
        }

        .team-card--convener::before {
          height: 4px;
          opacity: 0.6;
        }

        .team-card--convener:hover::before {
          opacity: 1;
        }

        /* Glow element */
        .team-card__glow {
          position: absolute;
          top: -40%;
          left: 50%;
          width: 200%;
          height: 200%;
          transform: translateX(-50%);
          background: radial-gradient(
            circle,
            rgba(91, 226, 179, 0.04) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* Text styles */
        .team-card__label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #5BE2B3;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 6px;
          opacity: 0.8;
        }

        .team-card__name {
          font-size: 1rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.3;
          margin: 0;
        }

        /* ───── RESPONSIVE ───── */
        @media (max-width: 768px) {
          .team-grid--4 > *,
          .team-grid--heads > * {
            flex: 0 1 160px;
            max-width: 180px;
          }

          .team-grid--team > * {
            flex: 0 1 140px;
            max-width: 160px;
          }

          .team-card {
            padding: 24px 14px 20px;
          }

          .team-card__name {
            font-size: 0.88rem;
          }

          .team-card__label {
            font-size: 0.62rem;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            gap: 16px;
          }

          .team-grid--4 > *,
          .team-grid--heads > *,
          .team-grid--team > * {
            flex: 0 1 130px;
            max-width: 48%;
          }

          .team-card {
            padding: 20px 10px 16px;
            border-radius: 14px;
          }

          .team-card__name {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
