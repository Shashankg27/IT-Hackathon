'use client';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section-white">
      <div className="dots-grid" />
      <div className="bg-text-large" style={{ bottom: '-5%', left: '-5%', opacity: 0.02 }}>ABOUT</div>
      <div className="container">

        {/* ── Section Heading ── */}
        <ScrollReveal>
          <h2 className="heading-lg">ABOUT US</h2>
        </ScrollReveal>

        {/* ── Institute About ── */}
        <ScrollReveal delay={100}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginTop: 40, marginBottom: 16 }}>
            Bharati Vidyapeeth's College of Engineering, Delhi
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, textAlign: 'justify', marginBottom: 40 }}>
            Bharati Vidyapeeth's College of Engineering, New Delhi since its establishment in 1999, has strived to
            provide the best engineering education to its students through well qualified and dedicated faculty and
            provision of well equipped modern labs. The college affiliated to Guru Gobind Singh Indraprastha
            University, New Delhi, and approved by All India Council for Technical Education (AICTE), Ministry of
            HRD, Govt. of India, BVCOE is steadily striding forward in its quest of establishing itself among the
            top engineering colleges in North India. The vision of the college is to continuously excel and thus
            coming together enlivens the research themes, creates awareness about upcoming technologies and provide
            platform to budding research workers for achieving their rightful place in the scientific community.
          </p>
        </ScrollReveal>

        {/* ── Vision & Mission Cards ── */}
        <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', marginBottom: 48 }}>
          {/* Vision */}
          <ScrollReveal delay={300} animation="reveal-left" className="flex-1 min-w-[280px]">
            <div className="brochure-card" style={{ backgroundColor: '#1e293b', color: 'white' }}>
              <h4 style={{ color: '#c29b40', fontSize: '0.85rem', fontWeight: 800, marginBottom: 14, letterSpacing: '0.12em' }}>
                INSTITUTE VISION
              </h4>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, lineHeight: 1.8, textAlign: 'justify' }}>
                To be an institute of excellence that provides quality technical education and research to create
                competent graduates for serving industry and society.
              </p>
              <div className="brochure-line" style={{ marginTop: 24 }} />
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={400} animation="reveal-right" className="flex-1 min-w-[280px]">
            <div className="brochure-card">
              <h4 style={{ color: '#c29b40', fontSize: '0.85rem', fontWeight: 800, marginBottom: 14, letterSpacing: '0.12em' }}>
                INSTITUTE MISSION
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { id: 'M1', text: 'To impart quality technical education through dynamic teaching-learning environment.' },
                  { id: 'M2', text: 'To promote research and innovation activities which gives opportunities for life-long learning in context of academic and industry.' },
                  { id: 'M3', text: 'To build up links with industry-institute through partnerships and collaborative developmental works.' },
                  { id: 'M4', text: 'To inculcate work ethics and commitment in graduates for their future endeavors to serve the society.' },
                ].map((m) => (
                  <li key={m.id} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#c29b40', fontWeight: 800, fontSize: '0.8rem', minWidth: 28, marginTop: 2 }}>{m.id}</span>
                    <span style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, textAlign: 'justify' }}>{m.text}</span>
                  </li>
                ))}
              </ul>
              <div className="brochure-line" style={{ marginTop: 24 }} />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Theme Highlight ── */}
        {/* <ScrollReveal delay={200}>
          <div style={{ border: '2px solid #c29b40', padding: '32px', maxWidth: 700 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: 14 }}>THE THEME</h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600, marginBottom: 12, textAlign: 'justify' }}>
              Digital Trust &amp; Data Accountability powered by the DPDP Act 2023
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'justify', lineHeight: 1.8 }}>
              The theme targets the creation of trust architectures that integrate legal compliance, ethical AI, and
              cybersecurity resilience into scalable digital systems.
            </p>
          </div>
        </ScrollReveal> */}

      </div>
    </section>
  );
}
