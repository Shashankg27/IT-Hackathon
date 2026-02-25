'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const events = [
  {
    title: 'HACK.IT@BVP 2.0',
    date: 'BVEST 2023',
    tag: 'Innovation Hackathon',
    image: '/hackitbvp2.png', // replace with actual image
    description: [
      'HACK.IT@BVP 2.0 was the flagship hackathon event of the annual college festival BVEST\'23, designed to bring together engineering and MBA students to collaborate on creative and technical solutions under competitive timelines.',
      'Participants engaged in team-based innovation challenges aimed at problem-solving in real-world domains. The event offered a total prize pool of approximately ₹45,000, with cash awards for top-performing teams and additional recognition for notable ideas.',
      'The multi-round format tested both conceptual thinking and execution skills, fostering teamwork, technical creativity, and practical implementation among attendees.',
    ],
  },
  {
    title: 'HACK.IT@BVP 1.0',
    date: 'BVEST 2019',
    tag: 'Go Green Hackathon',
    image: '/hackitbvp1.png', // replace with actual image
    description: [
      'The IT department of Bharati Vidyapeeth\'s College of Engineering organized one of its kind 24-hour hackathon, Hack.IT@BVP 1.0 during BVEST 2019. It was one of the biggest hackathons in Northern India with prizes worth ₹12.5 Lakhs. The hackathon was a great success and got over 750 registrations, of which 136 were shortlisted.',
      'Themed around the Government\'s "Go Green" movement, tracks spanned Healthcare, Education, Sustainability, Security, and Blockchain — encouraging innovative and scalable ideas that can create real-world impact.',
      'The Go Green Movement shows that people can do a lot to help out the environment. Through this hackathon, the department brought innovative and scalable ideas in front of the community which can be later implemented in the real world and create the change we all need.',
    ],
  },
];

export default function PastEvents() {
  return (
    <section id="past-events" className="section-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="heading-lg">EVENT HIGHLIGHTS</h2>
        </ScrollReveal>

        <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 60 }}>
          {events.map((ev, idx) => (
            <ScrollReveal key={ev.title} delay={idx * 150} animation="reveal">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 0,
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Image Panel */}
                <div style={{ position: 'relative', flex: '1 1 340px', minHeight: 300 }}>
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Fallback overlay shown when image is missing */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#1e293b',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: '2.5rem' }}>🖼️</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                      IMAGE COMING SOON
                    </p>
                  </div>
                  {/* Title overlay at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '20px 24px',
                      background: 'linear-gradient(transparent, rgba(30,41,59,0.95))',
                      color: 'white',
                      zIndex: 1,
                    }}
                  >
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#c29b40', marginBottom: 4 }}>
                      {ev.date} · {ev.tag}
                    </p>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{ev.title}</h3>
                  </div>
                </div>

                {/* Content Panel */}
                <div
                  style={{
                    flex: '1 1 380px',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 4,
                      backgroundColor: '#c29b40',
                      marginBottom: 20,
                    }}
                  />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1e293b', marginBottom: 20 }}>
                    {ev.title}
                  </h3>
                  {ev.description.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        fontSize: '0.875rem',
                        color: '#475569',
                        lineHeight: 1.8,
                        textAlign: 'justify',
                        marginBottom: pIdx < ev.description.length - 1 ? 14 : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
