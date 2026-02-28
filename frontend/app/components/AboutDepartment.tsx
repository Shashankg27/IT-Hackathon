'use client';
import ScrollReveal from './ScrollReveal';

const deptMissions = [
  {
    id: 'DM1',
    text: 'Provide a platform to impart quality education through continuous teaching-learning process for ensuring lifelong learning in field of Information Technology and related domains.',
  },
  {
    id: 'DM2',
    text: 'Train graduates to apply their learning for innovation and research in solving real life problems.',
  },
  {
    id: 'DM3',
    text: 'Prepare graduates for industry by involving them in various professional societies, industry internships and technical events.',
  },
  {
    id: 'DM4',
    text: 'Inculcate ethical values among graduates to prepare them to be a responsible citizen of the society.',
  },
];

export default function AboutDepartment() {
  return (
    <section id="about-department" className="section-navy" style={{ background: '#0F1A18', padding: '100px 24px' }}>
      <div className="dots-grid" />
      <div className="bg-text-large" style={{ bottom: '-5%', right: '-5%', opacity: 0.05, color: '#f8fafc' }}>DEPT</div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section Heading ── */}
        <ScrollReveal>
          <h2 className="heading-lg" style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3' }}>THE DEPARTMENT</h2>
        </ScrollReveal>

        {/* ── Department Description ── */}
        <ScrollReveal delay={100}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginTop: 40, marginBottom: 16 }}>
            Department of Information Technology
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.8, textAlign: 'justify', marginBottom: 40, maxWidth: 900 }}>
            The Department of Information Technology was formed in 1999 with an intake of 60 students in the
            undergraduate programme of B. Tech (Information Technology). In 2015, department intake was increased
            to 120. The primary objective of the IT Department is to impart quality technical education and
            resources to its students with a focus on all-round development. The department offers an excellent
            academic environment with a team of highly qualified faculty members to inspire the students to develop
            their technical skills and inculcate the spirit of teamwork in them. The department is constantly
            engaging the students in innovative research ideas and emerging technological trends through
            project-based learning, expert talks, industrial visits, focused mentorship and many more.
          </p>
        </ScrollReveal>

        {/* ── Vision & Mission Cards ── */}
        <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
          {/* Department Vision */}
          <ScrollReveal delay={300} animation="reveal-left" className="flex-1 min-w-[280px]">
            <div className="brochure-card hover:border-[#5BE2B3] transition-colors" style={{ backgroundColor: '#1A2F2B', color: 'white', border: '1px solid #2C3E3A', padding: '32px', borderRadius: '8px' }}>
              <h4 style={{ color: '#5BE2B3', fontSize: '0.85rem', fontWeight: 800, marginBottom: 14, letterSpacing: '0.12em' }}>
                VISION OF THE DEPARTMENT
              </h4>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, lineHeight: 1.8, textAlign: 'justify', color: '#94a3b8' }}>
                To impart Quality Technical Education to the graduates and groom them as World Class IT Engineers,
                Researchers, Scholars and Entrepreneurs to serve industry and society.
              </p>
              <div className="brochure-line bg-[#5BE2B3]" style={{ marginTop: 24, height: '2px', width: '40px' }} />
            </div>
          </ScrollReveal>

          {/* Department Mission */}
          <ScrollReveal delay={400} animation="reveal-right" className="flex-1 min-w-[280px]">
            <div className="brochure-card hover:border-[#5BE2B3] transition-colors" style={{ backgroundColor: '#1A2F2B', color: 'white', border: '1px solid #2C3E3A', padding: '32px', borderRadius: '8px' }}>
              <h4 style={{ color: '#5BE2B3', fontSize: '0.85rem', fontWeight: 800, marginBottom: 14, letterSpacing: '0.12em' }}>
                MISSION OF THE DEPARTMENT
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {deptMissions.map((m) => (
                  <li key={m.id} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                    <span
                      style={{
                        backgroundColor: '#121F1C',
                        color: '#5BE2B3',
                        fontWeight: 800,
                        fontSize: '0.7rem',
                        padding: '2px 6px',
                        borderRadius: 4,
                        minWidth: 36,
                        textAlign: 'center',
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      {m.id}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.75, textAlign: 'justify' }}>
                      {m.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="brochure-line bg-[#5BE2B3]" style={{ marginTop: 24, height: '2px', width: '40px' }} />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Stats Strip ── */}
        <ScrollReveal delay={300}>
          <div
            style={{
              marginTop: 56,
              display: 'flex',
              gap: 0,
              flexWrap: 'wrap',
              border: '1px solid #2C3E3A',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            {[
              { stat: '1999', label: 'Year Established' },
              { stat: '120+', label: 'Students per Batch' },
              { stat: '25+', label: 'Years of Excellence' },
              { stat: 'AICTE', label: 'Approved' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 200px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  backgroundColor: i % 2 === 0 ? '#1A2F2B' : '#121F1C',
                  color: 'white',
                  borderRight: i < 3 ? '1px solid #2C3E3A' : 'none',
                }}
              >
                <p style={{ fontSize: '2rem', fontWeight: 800, color: '#5BE2B3' }}>{item.stat}</p>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', marginTop: 6, letterSpacing: '0.05em' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
