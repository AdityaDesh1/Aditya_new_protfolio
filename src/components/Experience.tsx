import { useRef, useEffect, useState } from 'react';

// ── tiny scroll-animation hook (inline so no extra file needed) ──
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── data ──
const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Magnum Technologies Services',
    period: 'Dec 2024 – May 2025',
    accent: '#1a56ff',
    status: 'past',
    points: [
      'Developed front-end school management and HR dashboards using React.js.',
      'Built reusable and maintainable React components to improve scalability.',
      'Implemented responsive layouts optimised for mobile and tablet devices.',
      'Enhanced web performance by minimising CSS/JS and compressing assets.',
      'Improved UI consistency, accessibility, and responsiveness across the School Website.',
    ],
  },
  {
    role: 'Technical Program Co-ordinator',
    company: 'CL Infotech Pvt. Ltd. (MindMatrix)',
    period: 'Jul 2025 – Nov 2025',
    accent: '#0ea5e9',
    status: 'past',
    points: [
      'Worked on web applications using React.js, HTML, CSS, and JavaScript.',
      'Created and managed content through Strapi CMS, integrating with frontend components.',
      'Contributed to project coordination — documentation, feature tracking, and updates.',
      'Collaborated with content and design teams for layout consistency across the platform.',
      'Followed agile practices including sprint planning, daily stand-ups, and code reviews.',
    ],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Aadya Health Science Pvt. Ltd. (LinQMD)',
    period: 'Dec 2025 – Present',
    accent: '#10b981',
    status: 'current',
    points: [
      'Built patient-facing and doctor-facing apps for LinQMD using Next.js, TypeScript, and Tailwind CSS.',
      'Built an analytics dashboard to visualise key healthcare metrics with real-time data rendering.',
      'Developed CMS-driven features via Drupal (PHP, Twig, AJAX) and Strapi.',
      'Translated Figma designs into pixel-perfect reusable UI components.',
      'Integrated REST APIs for doctor profiles, clinic listings, and appointment flows.',
      'Implemented SEO-friendly structures and resolved 404 edge cases.',
      'Contributed to sprint planning, code reviews, feature branching, PRs, and deployments.',
    ],
  },
];

const certifications = [
  {
    title: 'React.js Developer Certificate',
    issuer: 'LearnTube.ai',
    date: 'July 2025',
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'JSpiders Training & Development Center',
    date: '2023',
  },
];

const education = [
  { degree: 'Master of Computer Applications', institution: 'Visvesvaraya Technological University, Belagavi', year: '2023' },
  { degree: 'Bachelor of Computer Applications', institution: 'Bapuji Institute of Hi-Tech Education', year: '2021' },
  { degree: 'Intermediate (PUC)', institution: 'Sir M.V PU College', year: '2017' },
  { degree: 'Higher Primary School', institution: 'D.R.R School', year: '2015' },
];

// ── component ──
export default function Experience() {
  const heading = useReveal();
  const expSection = useReveal(0.1);
  const certSection = useReveal(0.1);
  const eduSection = useReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .exp-root {
          background: #f9f7f4;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #0f0f0f;
          padding: 100px 0 120px;
          position: relative;
          overflow: hidden;
        }
        .exp-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,15,15,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,15,15,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .exp-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; position: relative; }

        /* ── section heading ── */
        .exp-heading {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .exp-heading.visible { opacity: 1; transform: translateY(0); }
        .exp-eyebrow {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #8a8a8a; margin-bottom: 12px;
        }
        .exp-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05; letter-spacing: -0.025em; color: #0f0f0f;
        }
        .exp-title em { font-style: italic; color: #1a56ff; }
        .exp-rule { width: 48px; height: 2px; background: #1a56ff; margin-top: 20px; }

        /* ── experience cards ── */
        .exp-cards {
          display: flex; flex-direction: column; gap: 32px; margin-bottom: 80px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .exp-cards.visible { opacity: 1; transform: translateY(0); }

        .exp-card {
          background: #fff;
          border: 1px solid rgba(15,15,15,0.09);
          border-radius: 16px;
          padding: 36px 40px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 40px;
          transition: box-shadow 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--card-accent, #1a56ff);
          border-radius: 3px 0 0 3px;
        }
        .exp-card:hover { box-shadow: 0 12px 40px rgba(15,15,15,0.08); transform: translateY(-2px); }

        .exp-card-left {}
        .exp-role {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 20px; color: #0f0f0f; line-height: 1.2;
          letter-spacing: -0.01em; margin-bottom: 6px;
        }
        .exp-company { font-size: 13px; font-weight: 500; color: var(--card-accent, #1a56ff); margin-bottom: 10px; }
        .exp-period {
          font-size: 12px; color: #8a8a8a; letter-spacing: 0.02em;
          display: flex; align-items: center; gap: 6px;
        }
        .exp-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--card-accent, #1a56ff);
          flex-shrink: 0;
        }
        .exp-status-dot.pulse { animation: dotpulse 2s infinite; }
        @keyframes dotpulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

        .exp-card-right {}
        .exp-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .exp-point {
          font-size: 14px; line-height: 1.7; color: #555;
          display: flex; gap: 10px; align-items: flex-start;
        }
        .exp-point::before {
          content: '—';
          color: var(--card-accent, #1a56ff);
          flex-shrink: 0;
          font-size: 12px;
          margin-top: 3px;
          opacity: 0.7;
        }

        /* ── certs ── */
        .cert-section {
          margin-bottom: 80px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cert-section.visible { opacity: 1; transform: translateY(0); }
        .sub-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          letter-spacing: -0.02em; color: #0f0f0f;
          margin-bottom: 32px;
        }
        .sub-heading em { font-style: italic; color: #1a56ff; }
        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .cert-card {
          background: #fff;
          border: 1px solid rgba(15,15,15,0.09);
          border-radius: 14px;
          padding: 28px 32px;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cert-card:hover { box-shadow: 0 8px 28px rgba(26,86,255,0.1); transform: translateY(-2px); }
        .cert-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: #e8edff;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .cert-icon svg { width: 18px; height: 18px; stroke: #1a56ff; fill: none; stroke-width: 2; }
        .cert-title { font-size: 15px; font-weight: 500; color: #0f0f0f; margin-bottom: 6px; }
        .cert-meta { font-size: 12px; color: #8a8a8a; }
        .cert-meta strong { color: #555; font-weight: 500; }

        /* ── education timeline ── */
        .edu-section {
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .edu-section.visible { opacity: 1; transform: translateY(0); }
        .edu-timeline { position: relative; padding-left: 28px; margin-top: 32px; }
        .edu-timeline::before {
          content: '';
          position: absolute; left: 0; top: 6px; bottom: 6px;
          width: 1px; background: rgba(15,15,15,0.12);
        }
        .edu-item {
          position: relative; padding: 0 0 36px 28px;
        }
        .edu-item:last-child { padding-bottom: 0; }
        .edu-item::before {
          content: '';
          position: absolute; left: -4px; top: 6px;
          width: 9px; height: 9px; border-radius: 50%;
          background: #fff; border: 2px solid #1a56ff;
        }
        .edu-year {
          font-size: 11px; font-weight: 500; color: #1a56ff;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 4px;
        }
        .edu-degree {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 18px; color: #0f0f0f; margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .edu-institution { font-size: 13px; color: #8a8a8a; }

        @media (max-width: 720px) {
          .exp-container { padding: 0 20px; }
          .exp-card { grid-template-columns: 1fr; gap: 20px; padding: 24px; }
          .exp-card::before { top: 0; left: 0; right: 0; bottom: auto; width: auto; height: 3px; border-radius: 3px 3px 0 0; }
        }
      `}</style>

      <section id="experience" className="exp-root">
        <div className="exp-container">

          {/* Heading */}
          <div ref={heading.ref} className={`exp-heading ${heading.visible ? 'visible' : ''}`}>
            <p className="exp-eyebrow">Career</p>
            <h2 className="exp-title">Experience &amp; <em>Journey</em></h2>
            <div className="exp-rule" />
          </div>

          {/* Experience Cards */}
          <div ref={expSection.ref} className={`exp-cards ${expSection.visible ? 'visible' : ''}`}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="exp-card"
                style={{ '--card-accent': exp.accent, transitionDelay: `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="exp-card-left">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-period">
                    <span className={`exp-status-dot ${exp.status === 'current' ? 'pulse' : ''}`} />
                    {exp.period}
                  </div>
                </div>
                <div className="exp-card-right">
                  <ul className="exp-points">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="exp-point">{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div ref={certSection.ref} className={`cert-section ${certSection.visible ? 'visible' : ''}`}>
            <h3 className="sub-heading">Certifications &amp; <em>Achievements</em></h3>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-card" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="cert-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-meta">
                    <strong>{cert.issuer}</strong> · {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduSection.ref} className={`edu-section ${eduSection.visible ? 'visible' : ''}`}>
            <h3 className="sub-heading">Education <em>Details</em></h3>
            <div className="edu-timeline">
              {education.map((edu, i) => (
                <div key={i} className="edu-item" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="edu-year">{edu.year}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-institution">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}