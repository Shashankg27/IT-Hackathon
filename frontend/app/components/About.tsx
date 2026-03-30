'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section
      id="about"
      className="section-navy relative overflow-visible"
      style={{ background: '#0F1A18', padding: '120px 24px' }}
    >
      <div className="dots-grid opacity-10" />
      <div
        className="bg-text-large"
        style={{
          bottom: '10%',
          left: '-5%',
          opacity: 0.03,
          color: '#f8fafc',
        }}
      >
        COLLEGE
      </div>

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
                Our Institution
              </span>
              <h2 className="heading-lg" style={{ color: '#f8fafc', margin: 0, border: 'none' }}>
                ABOUT <span style={{ color: '#5BE2B3' }}>US</span>
              </h2>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: '#f8fafc', 
                marginTop: '12px',
                marginBottom: '32px',
                lineHeight: 1.4
              }}>
                Bharati Vidyapeeth&apos;s College of Engineering, Delhi
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(91, 226, 179, 0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <Image
                  src="/college.jpg"
                  alt="Bharati Vidyapeeth College of Engineering"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A18]/60 to-transparent" />
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
                  Bharati Vidyapeeth&apos;s College of Engineering, New Delhi, since its establishment in 1999, has strived to provide the best engineering education through well-qualified and dedicated faculty and modern labs.
                </p>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  textAlign: 'justify'
                }}>
                  Affiliated to GGSIPU and approved by AICTE, BVCOE is steadily striding forward among the top engineering colleges in North India. Our vision is to excel through research, technological awareness, and providing a platform for budding innovators to achieve their place in the scientific community.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision & Mission Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Vision Card */}
              <ScrollReveal delay={200} animation="reveal">
                <div style={{
                  backgroundColor: 'rgba(26, 47, 43, 0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(91, 226, 179, 0.1)',
                }}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '16px' }}>
                    INSTITUTE VISION
                  </h4>
                  <p style={{ color: '#f8fafc', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    To be an institute of excellence that provides quality technical education and research to create competent graduates for serving industry and society.
                  </p>
                </div>
              </ScrollReveal>

              {/* Mission Card */}
              <ScrollReveal delay={300} animation="reveal">
                <div style={{
                  backgroundColor: 'rgba(26, 47, 43, 0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '40px',
                  borderRadius: '20px',
                  border: '1px solid rgba(91, 226, 179, 0.1)',
                }}>
                  <h4 style={{ color: '#5BE2B3', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '24px' }}>
                    INSTITUTE MISSION
                  </h4>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {[
                      { id: '01', text: 'Impart quality technical education through dynamic teaching-learning environment.' },
                      { id: '02', text: 'Promote research and innovation activities for life-long learning.' },
                      { id: '03', text: 'Build links with industry through partnerships and collaboration.' },
                      { id: '04', text: 'Inculcate work ethics and commitment to serve the society.' }
                    ].map((m) => (
                      <div key={m.id} style={{ display: 'flex', gap: '20px' }}>
                        <span style={{ color: '#5BE2B3', fontWeight: 900, fontSize: '0.8rem', opacity: 0.5 }}>{m.id}</span>
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