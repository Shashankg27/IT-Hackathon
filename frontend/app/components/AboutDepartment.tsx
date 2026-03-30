'use client';
import ScrollReveal from './ScrollReveal';

const deptMissions = [
  {
    id: '01',
    text: 'Provide a platform to impart quality education through continuous teaching-learning process for ensuring lifelong learning in Information Technology.',
  },
  {
    id: '02',
    text: 'Train graduates to apply their learning for innovation and research in solving real life problems.',
  },
  {
    id: '03',
    text: 'Prepare graduates for industry by involving them in professional societies, internships and technical events.',
  },
  {
    id: '04',
    text: 'Inculcate ethical values among graduates to prepare them to be responsible citizens.',
  },
];

export default function AboutDepartment() {
  return (
    <section id="about-department" className="section-navy relative overflow-visible" style={{ background: '#0F1A18', padding: '120px 24px' }}>
      <div className="dots-grid opacity-10" />
      <div className="bg-text-large" style={{ bottom: '10%', right: '-5%', opacity: 0.03, color: '#f8fafc' }}>DEPT</div>
      
      <div className="container relative z-10">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '60px', 
          flexWrap: 'wrap',
          alignItems: 'flex-start' 
        }}>
          
          {/* ── Left Column (Sticky Sidebar) ── */}
          <div style={{ 
            flex: '1 1 400px', 
            position: 'sticky', 
            top: '120px',
            alignSelf: 'flex-start'
          }}>
            <ScrollReveal>
              <span style={{ 
                color: '#5BE2B3', 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                letterSpacing: '0.3em', 
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px'
              }}>
                Academic Excellence
              </span>
              <h2 className="heading-lg" style={{ color: '#f8fafc', margin: 0, border: 'none' }}>
                THE <span style={{ color: '#5BE2B3' }}>DEPARTMENT</span>
              </h2>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: '#f8fafc', 
                marginTop: '12px',
                marginBottom: '32px',
                lineHeight: 1.4
              }}>
                Department of Information Technology
              </h3>
            </ScrollReveal>

            {/* Stats Grid inside Sticky Column */}
            <ScrollReveal delay={200}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginTop: '20px'
              }}>
                {[
                  { stat: '1999', label: 'Established' },
                  { stat: '120+', label: 'Intake' },
                  { stat: '25+', label: 'Years' },
                  { stat: 'AICTE', label: 'Approved' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px',
                    backgroundColor: 'rgba(26, 47, 43, 0.4)',
                    border: '1px solid rgba(91, 226, 179, 0.1)',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#5BE2B3' }}>{item.stat}</p>
                    <p style={{ fontSize: '0.65rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column (Scrolling Content) ── */}
          <div style={{ flex: '1.2 1 500px' }}>
            <ScrollReveal delay={100}>
              <div style={{ marginBottom: '60px' }}>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify',
                  marginBottom: '24px'
                }}>
                  The Department of Information Technology was formed in 1999 and has since grown to become a cornerstone of technical education at BVCOE. With an increased intake of 120 students, we focus on all-round development and technical excellence.
                </p>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}>
                  Our department offers an excellent academic environment with highly qualified faculty members who inspire students to develop technical skills and a spirit of teamwork. We engage students in project-based learning, industrial visits, and innovative research to keep pace with emerging trends.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision & Mission Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Dept Vision Card */}
              <ScrollReveal delay={200} animation="reveal">
                <div style={{
                  backgroundColor: 'rgba(26, 47, 43, 0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(91, 226, 179, 0.1)',
                }}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '16px' }}>
                    VISION OF THE DEPARTMENT
                  </h4>
                  <p style={{ color: '#f8fafc', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    To impart Quality Technical Education to the graduates and groom them as World Class IT Engineers, Researchers, Scholars and Entrepreneurs to serve industry and society.
                  </p>
                </div>
              </ScrollReveal>

              {/* Dept Mission Card */}
              <ScrollReveal delay={300} animation="reveal">
                <div style={{
                  backgroundColor: 'rgba(26, 47, 43, 0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(91, 226, 179, 0.1)',
                }}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '24px' }}>
                    MISSION OF THE DEPARTMENT
                  </h4>
                  <div style={{ display: 'grid', gap: '24px' }}>
                    {deptMissions.map((m) => (
                      <div key={m.id} style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          backgroundColor: 'rgba(91, 226, 179, 0.1)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0 
                        }}>
                          <span style={{ color: '#5BE2B3', fontWeight: 800, fontSize: '0.75rem' }}>{m.id}</span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{m.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
