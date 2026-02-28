'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

type Tier = {
  name: string;
  price: string;
  color: string;
  perks: string[];
};

const tiers: Tier[] = [
  {
    name: 'TITLE PARTNER',
    price: '1 L',
    color: '#34d399',
    perks: [
      'Naming Rights: Official presenter of the event.',
      'Branding: Logo displayed on main screen, posters, hoardings, banners, certificates.',
      'Presence: Representative serves as Chief Guest.',
      'On-Site Promotion: Specially designed stall at prime location.',
      'Stage Time: Address audience and showcase promotional video.',
      'Campus Signage: 15ft x 7ft banners and major hoardings.',
      'Digital Outreach: Instagram, website, and WhatsApp promotion.',
    ],
  },
  {
    name: 'GOLD PARTNER',
    price: '50 K',
    color: '#e2e8f0',
    perks: [
      'Naming Rights: "Powered by Gold Partner".',
      'Branding: Logo on main screen, posters, hoardings, borders, certificates.',
      'Presence: Representatives as Guests of Honor.',
      'On-Site Promotion: Specially designed stall at prime location.',
      'Stage Time: Address audience before hackathon begins.',
      'Campus Signage: Promotional hoardings at major locations.',
      'Digital Outreach: Extensive online publicity.',
    ],
  },
  {
    name: 'SILVER PARTNER',
    price: '25 K',
    color: '#94a3b8',
    perks: [
      'Naming Rights: "Hackathon [Silver Partner Name]".',
      'Branding: Logo on main screen, posters, hoardings, banners.',
      'On-Site Presence: Stall allocated for both days.',
      'Engagement: Conduct market research or surveys.',
      'Recognition: Representatives as Guests of Honor.',
      'Campus Visibility: Promotional hoardings at major locations.',
    ],
  },
  {
    name: 'EVENT PARTNER',
    price: '15 K',
    color: '#5BE2B3',
    perks: [
      'Special Feature: Participatory event presented by your brand.',
      'Naming Rights: "Hackathon [Event Partner Name]".',
      'Branding: Logo and name on main screen, posters, hoardings.',
      'Engagement: Conduct market research or surveys.',
      'Digital Outreach: Publicity across social media.',
    ],
  },
  {
    name: 'TECHNICAL PARTNER',
    price: '15 K',
    color: '#5BE2B3',
    perks: [
      'Technical Integration: Services used during hackathon.',
      'Workshop Opportunity: 1-hour session before/after hackathon.',
      'Naming Rights: "Hackathon [Technical Partner Name]".',
      'Branding: Name/logo on main screen and posters.',
      'Engagement: Conduct market research/surveys.',
    ],
  },
  {
    name: 'EDUCATIONAL PARTNER',
    price: '12 K',
    color: '#5BE2B3',
    perks: [
      'Educational Sessions: 1-hour session before/after hackathon.',
      'Naming Rights: "Hackathon [Educational Partner Name]".',
      'Branding: Name/logo on main screen and posters.',
      'Engagement: Conduct market research/surveys.',
      'Digital Outreach: Extensive publicity.',
    ],
  },
  {
    name: 'FOOD PARTNER',
    price: '8 K',
    color: '#5BE2B3',
    perks: [
      'On-Site Presence: Stall allocated for 2 days.',
      'Branding: Name and logo published on every banner.',
      'Digital Outreach: Extensive publicity including WhatsApp messages to all students.',
    ],
  },
  {
    name: 'GIFTING PARTNER',
    price: 'In-Kind',
    color: '#5BE2B3',
    perks: [
      'Product Placement: Products used as official gifts for judges.',
      'Social Growth: Assistance increasing social media followers.',
      'Naming Rights: "Hackathon [Gifting Partner Name]".',
      'Branding: Name/logo on main screen and posters.',
      'Engagement: Conduct market research/surveys.',
    ],
  },
];

export default function SponsorTiers() {
  const [activeTier, setActiveTier] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');

    const handleChange = () => setIsMobile(media.matches);

    handleChange();
    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, []);

  const handleTierClick = (index: number) => {
    if (isMobile) {
      setActiveTier(activeTier === index ? null : index);
    }
  };

  return (
    <section
      id="sponsor-tiers"
      className="section-white"
      style={{ background: '#121F1C', padding: '100px 24px' }}
    >
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2
              className="heading-lg"
              style={{ color: '#5BE2B3', borderBottomColor: '#5BE2B3' }}
            >
              PARTNERSHIP BRACKETS
            </h2>

            <p
              style={{
                color: '#94a3b8',
                marginTop: '20px',
                maxWidth: '600px',
                marginInline: 'auto',
              }}
            >
              {isMobile
                ? 'Tap a bracket to reveal exclusive perks and branding opportunities.'
                : 'Hover over a bracket to reveal the exclusive perks and branding opportunities available.'}
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}
          className="perspective-1000"
        >
          {tiers.map((tier, idx) => {
            const isActive = activeTier === idx;

            return (
              <ScrollReveal key={tier.name} delay={idx * 100} animation="reveal">
                <div
                  className="group"
                  onClick={() => handleTierClick(idx)}
                  style={{
                    position: 'relative',
                    border: `1px solid ${tier.color}`,
                    padding: '32px',
                    backgroundColor: '#0F1A18',
                    height: '280px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: isMobile ? 'pointer' : 'default',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  {/* FRONT */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      !isMobile
                        ? 'group-hover:opacity-0 group-hover:scale-90'
                        : ''
                    }`}
                    style={{
                      zIndex: 2,
                      opacity: isMobile && isActive ? 0 : 1,
                      transform:
                        isMobile && isActive ? 'scale(0.9)' : 'scale(1)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: '#f8fafc',
                        letterSpacing: '0.15em',
                        marginBottom: '16px',
                      }}
                    >
                      {tier.name}
                    </h3>

                    <div
                      style={{
                        width: '40px',
                        height: '2px',
                        background: tier.color,
                        margin: '0 auto 16px',
                      }}
                    />

                    <p
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        color: tier.color,
                      }}
                    >
                      {tier.price}
                    </p>

                    {isMobile && (
                      <p
                        style={{
                          fontSize: '0.75rem',
                          color: '#5BE2B3',
                          marginTop: '12px',
                          opacity: 0.8,
                        }}
                      >
                        {isActive ? 'Tap to close' : 'Tap to view perks'}
                      </p>
                    )}
                  </div>

                  {/* PERKS */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-in-out ${
                      !isMobile
                        ? 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'
                        : ''
                    }`}
                    style={{
                      background: tier.color,
                      padding: '24px',
                      zIndex: 10,
                      opacity: isMobile ? (isActive ? 1 : 0) : undefined,
                      transform: isMobile
                        ? isActive
                          ? 'translateY(0)'
                          : 'translateY(100%)'
                        : undefined,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '12px',
                        borderBottom: '1px solid rgba(15,26,24,0.2)',
                        paddingBottom: '8px',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: 800,
                          color: '#0F1A18',
                        }}
                      >
                        PERKS
                      </h4>

                      {isMobile && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTier(null);
                          }}
                          style={{
                            background: 'rgba(15,26,24,0.2)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '28px',
                            height: '28px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        maxHeight: '180px',
                        overflowY: 'auto',
                        textAlign: 'left',
                      }}
                      className="custom-scrollbar"
                    >
                      {tier.perks.map((perk, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            color: '#121F1C',
                            marginBottom: '8px',
                            display: 'flex',
                            gap: '8px',
                            fontWeight: 500,
                          }}
                        >
                          <span style={{ fontWeight: 800 }}>›</span>
                          <span style={{ lineHeight: 1.4 }}>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}