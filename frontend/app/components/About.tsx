'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section
      id="about"
      className="section-navy"
      style={{ background: '#0F1A18', padding: '100px 24px' }}
    >
      <div className="dots-grid" />
      <div
        className="bg-text-large"
        style={{
          bottom: '-5%',
          left: '-5%',
          opacity: 0.05,
          color: '#f8fafc',
        }}
      >
        ABOUT
      </div>

      <div className="container">
        {/* ── Section Heading ── */}
        <ScrollReveal>
          <h2
            className="heading-lg"
            style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3' }}
          >
            ABOUT US
          </h2>
        </ScrollReveal>

        {/* ── Institute Title ── */}
        <ScrollReveal delay={100}>
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#f8fafc',
              marginTop: 40,
              marginBottom: 24,
            }}
          >
            Bharati Vidyapeeth's College of Engineering, Delhi
          </h3>
        </ScrollReveal>

        {/* ── Institute Content with Image ── */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          {/* Text */}
          <ScrollReveal delay={200} className="flex-1 min-w-[300px]">
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                textAlign: 'justify',
              }}
            >
              Bharati Vidyapeeth's College of Engineering, New Delhi since its
              establishment in 1999, has strived to provide the best engineering
              education to its students through well qualified and dedicated
              faculty and provision of well equipped modern labs. The college
              affiliated to Guru Gobind Singh Indraprastha University, New
              Delhi, and approved by All India Council for Technical Education
              (AICTE), Ministry of HRD, Govt. of India, BVCOE is steadily
              striding forward in its quest of establishing itself among the top
              engineering colleges in North India. The vision of the college is
              to continuously excel and thus coming together enlivens the
              research themes, creates awareness about upcoming technologies and
              provide platform to budding research workers for achieving their
              rightful place in the scientific community.
            </p>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={300} className="flex-1 min-w-[260px]">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #2C3E3A',
              }}
            >
              <Image
                src="/college.jpg"
                alt="Bharati Vidyapeeth College of Engineering"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Vision & Mission Cards ── */}
        <div
          style={{
            display: 'flex',
            gap: 30,
            flexWrap: 'wrap',
            marginBottom: 48,
          }}
        >
          {/* Vision */}
          <ScrollReveal
            delay={300}
            animation="reveal-left"
            className="flex-1 min-w-[280px]"
          >
            <div
              className="brochure-card hover:border-[#5BE2B3] transition-colors"
              style={{
                backgroundColor: '#1A2F2B',
                color: 'white',
                padding: '32px',
                border: '1px solid #2C3E3A',
                borderRadius: '8px',
              }}
            >
              <h4
                style={{
                  color: '#5BE2B3',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  marginBottom: 14,
                  letterSpacing: '0.12em',
                }}
              >
                INSTITUTE VISION
              </h4>

              <p
                style={{
                  fontSize: '0.875rem',
                  opacity: 0.9,
                  lineHeight: 1.8,
                  textAlign: 'justify',
                  color: '#94a3b8',
                }}
              >
                To be an institute of excellence that provides quality technical
                education and research to create competent graduates for
                serving industry and society.
              </p>

              <div
                className="brochure-line bg-[#5BE2B3]"
                style={{ marginTop: 24, height: '2px', width: '40px' }}
              />
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal
            delay={400}
            animation="reveal-right"
            className="flex-1 min-w-[280px]"
          >
            <div
              className="brochure-card hover:border-[#5BE2B3] transition-colors"
              style={{
                backgroundColor: '#1A2F2B',
                color: 'white',
                padding: '32px',
                border: '1px solid #2C3E3A',
                borderRadius: '8px',
              }}
            >
              <h4
                style={{
                  color: '#5BE2B3',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  marginBottom: 14,
                  letterSpacing: '0.12em',
                }}
              >
                INSTITUTE MISSION
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  {
                    id: 'M1',
                    text: 'To impart quality technical education through dynamic teaching-learning environment.',
                  },
                  {
                    id: 'M2',
                    text: 'To promote research and innovation activities which gives opportunities for life-long learning in context of academic and industry.',
                  },
                  {
                    id: 'M3',
                    text: 'To build up links with industry-institute through partnerships and collaborative developmental works.',
                  },
                  {
                    id: 'M4',
                    text: 'To inculcate work ethics and commitment in graduates for their future endeavors to serve the society.',
                  },
                ].map((m) => (
                  <li
                    key={m.id}
                    style={{
                      display: 'flex',
                      gap: 10,
                      marginBottom: 10,
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        color: '#5BE2B3',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        minWidth: 28,
                        marginTop: 2,
                      }}
                    >
                      {m.id}
                    </span>

                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: '#94a3b8',
                        lineHeight: 1.7,
                        textAlign: 'justify',
                      }}
                    >
                      {m.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="brochure-line bg-[#5BE2B3]"
                style={{ marginTop: 24, height: '2px', width: '40px' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}