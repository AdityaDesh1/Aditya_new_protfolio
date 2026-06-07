import { useRef, useEffect, useState } from 'react';
import School from '../components/Assets/School.png';
import HrDash from '../components/Assets/HrDash.png';
import KeyVault from '../components/Assets/KeyVault.png';
import SchoolWebsite from '../components/Assets/SchoolWebsite.png';

function useReveal(threshold = 0.1) {
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

const projects = [
  {
    title: 'School Dashboard',
    number: '01',
    description: 'Comprehensive school management system with student, teacher, and admin portals. Features attendance tracking, grade management, and real-time notifications.',
    image: School,
    tech: ['React', 'Node.js', 'MySQL', 'Express'],
    accent: '#1a56ff',
    accentBg: '#e8edff',
    githubUrl: '#',
    liveUrl: null,
  },
  {
    title: 'HR & Employee Dashboard',
    number: '02',
    description: 'Employee management platform with leave management, payroll tracking, attendance system, and performance analytics — similar to GreytHR.',
    image: HrDash,
    tech: ['React', 'Express.js', 'MySQL', 'Chart.js'],
    accent: '#10b981',
    accentBg: '#d1fae5',
    githubUrl: '#',
    liveUrl: null,
  },
  {
    title: 'KeyVault',
    number: '03',
    description: 'Securely upload and share files with unique keys. Clients can download files without logging in using a unique key — effortless and secure file sharing.',
    image: KeyVault,
    tech: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
    accent: '#8b5cf6',
    accentBg: '#ede9fe',
    githubUrl: '#',
    liveUrl: null,
  },
  {
    title: 'School Website',
    number: '04',
    description: 'Modern responsive school website with information pages, gallery, admission forms, and contact system. Built with clean UI and smooth animations.',
    image: SchoolWebsite,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    accent: '#f59e0b',
    accentBg: '#fef3c7',
    githubUrl: '#',
    liveUrl: null,
  },
];

export default function Projects() {
  const heading = useReveal();
  const grid = useReveal(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-root {
          background: #fff;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #0f0f0f;
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(15,15,15,0.07);
        }
        .proj-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(15,15,15,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .proj-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; position: relative; }

        /* heading */
        .proj-heading {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .proj-heading.visible { opacity: 1; transform: translateY(0); }
        .proj-eyebrow { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a8a8a; margin-bottom: 12px; }
        .proj-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05; letter-spacing: -0.025em;
        }
        .proj-title em { font-style: italic; color: #1a56ff; }
        .proj-rule { width: 48px; height: 2px; background: #1a56ff; margin-top: 20px; }

        /* grid */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .proj-grid.visible { opacity: 1; transform: translateY(0); }

        /* card */
        .proj-card {
          background: #f9f7f4;
          border: 1px solid rgba(15,15,15,0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          display: flex; flex-direction: column;
        }
        .proj-card:hover {
          box-shadow: 0 16px 48px rgba(15,15,15,0.1);
          transform: translateY(-4px);
          border-color: var(--card-accent-dim);
        }

        /* image area */
        .proj-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: var(--card-accent-bg);
        }
        .proj-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          display: block;
        }
        .proj-card:hover .proj-img-wrap img { transform: scale(1.05); }

        /* number badge */
        .proj-number {
          position: absolute;
          top: 14px; left: 16px;
          font-family: 'DM Serif Display', serif;
          font-size: 13px;
          color: #fff;
          background: var(--card-accent);
          border-radius: 6px;
          padding: 3px 10px;
          letter-spacing: 0.04em;
          opacity: 0.92;
        }

        /* overlay on hover */
        .proj-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,15,15,0.55) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.35s;
          display: flex; align-items: flex-end; justify-content: flex-end;
          padding: 16px;
          gap: 10px;
        }
        .proj-card:hover .proj-img-overlay { opacity: 1; }
        .proj-overlay-btn {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 8px;
          padding: 7px 14px;
          color: #fff; font-size: 12px; font-family: 'DM Sans', sans-serif;
          text-decoration: none; cursor: pointer;
          transition: background 0.2s;
        }
        .proj-overlay-btn:hover { background: rgba(255,255,255,0.25); }
        .proj-overlay-btn svg { width: 13px; height: 13px; stroke: #fff; fill: none; stroke-width: 2; flex-shrink: 0; }

        /* body */
        .proj-body { padding: 24px 26px 26px; flex: 1; display: flex; flex-direction: column; }

        .proj-card-title {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; color: #0f0f0f; letter-spacing: -0.02em;
          margin-bottom: 10px; line-height: 1.2;
        }
        .proj-desc {
          font-size: 14px; line-height: 1.75; color: #666; font-weight: 300;
          flex: 1; margin-bottom: 18px;
        }

        .proj-tech-row { display: flex; flex-wrap: wrap; gap: 7px; }
        .proj-tech-pill {
          font-size: 11px; color: var(--card-accent);
          background: var(--card-accent-bg);
          border: 1px solid var(--card-accent-dim);
          border-radius: 100px; padding: 3px 11px;
          cursor: default;
          transition: transform 0.15s;
        }
        .proj-tech-pill:hover { transform: translateY(-1px); }

        @media (max-width: 700px) {
          .proj-container { padding: 0 20px; }
          .proj-grid { grid-template-columns: 1fr; }
          .proj-img-wrap { height: 180px; }
        }
      `}</style>

      <section id="projects" className="proj-root">
        <div className="proj-container">

          {/* Heading */}
          <div ref={heading.ref} className={`proj-heading ${heading.visible ? 'visible' : ''}`}>
            <p className="proj-eyebrow">What I've built</p>
            <h2 className="proj-title">Featured <em>Projects</em></h2>
            <div className="proj-rule" />
          </div>

          {/* Cards */}
          <div ref={grid.ref} className={`proj-grid ${grid.visible ? 'visible' : ''}`}>
            {projects.map((p, i) => (
              <div
                key={i}
                className="proj-card"
                style={{
                  '--card-accent': p.accent,
                  '--card-accent-bg': p.accentBg,
                  '--card-accent-dim': p.accent + '33',
                  transitionDelay: `${i * 80}ms`,
                } as React.CSSProperties}
              >
                {/* Image */}
                <div className="proj-img-wrap" style={{ '--card-accent-bg': p.accentBg } as React.CSSProperties}>
                  <img src={p.image} alt={p.title} />
                  <span className="proj-number">{p.number}</span>
                  <div className="proj-img-overlay">
                    {p.liveUrl && (
                      <a href={p.liveUrl} className="proj-overlay-btn" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live
                      </a>
                    )}
                    <a href={p.githubUrl} className="proj-overlay-btn" target="_blank" rel="noreferrer">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="proj-body">
                  <h3 className="proj-card-title">{p.title}</h3>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-tech-row">
                    {p.tech.map((t, j) => (
                      <span key={j} className="proj-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}