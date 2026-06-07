import { useRef, useEffect, useState } from 'react';

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

const categories = [
  {
    title: 'Frontend',
    accent: '#1a56ff',
    bg: '#e8edff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    accent: '#10b981',
    bg: '#d1fae5',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    skills: ['Node.js', 'Express.js', 'PHP', 'Drupal', 'Strapi', 'Core Java'],
  },
  {
    title: 'Database',
    accent: '#f59e0b',
    bg: '#fef3c7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    accent: '#8b5cf6',
    bg: '#ede9fe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
];

const learning = ['MongoDB', 'Spring Boot', 'Hibernate', 'Angular'];

export default function Skills() {
  const heading = useReveal();
  const grid = useReveal(0.08);
  const bottom = useReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-root {
          background: #f9f7f4;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #0f0f0f;
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
        }
        .skills-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,15,15,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,15,15,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .skills-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; position: relative; }

        /* heading */
        .skills-heading {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .skills-heading.visible { opacity: 1; transform: translateY(0); }
        .skills-eyebrow { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a8a8a; margin-bottom: 12px; }
        .skills-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05; letter-spacing: -0.025em;
        }
        .skills-title em { font-style: italic; color: #1a56ff; }
        .skills-rule { width: 48px; height: 2px; background: #1a56ff; margin-top: 20px; }

        /* grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .skills-grid.visible { opacity: 1; transform: translateY(0); }

        .skill-card {
          background: #fff;
          border: 1px solid rgba(15,15,15,0.09);
          border-radius: 16px;
          padding: 28px 24px 24px;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          position: relative;
        }
        .skill-card:hover {
          box-shadow: 0 12px 36px rgba(15,15,15,0.08);
          transform: translateY(-3px);
          border-color: var(--card-accent-border);
        }

        .skill-card-top {
          display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
        }
        .skill-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .skill-icon svg { width: 18px; height: 18px; }
        .skill-cat-title {
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: #0f0f0f; letter-spacing: -0.01em;
        }

        .skill-divider {
          height: 1px; background: rgba(15,15,15,0.07); margin-bottom: 18px;
        }

        .skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-pill {
          font-size: 12px; font-weight: 400;
          border: 1px solid rgba(15,15,15,0.1);
          border-radius: 100px;
          padding: 4px 12px;
          color: #444;
          background: #f9f7f4;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          cursor: default;
        }
        .skill-pill:hover {
          background: var(--pill-hover-bg);
          border-color: var(--pill-hover-border);
          color: var(--pill-hover-color);
        }

        /* learning bar */
        .learning-bar {
          background: #fff;
          border: 1px solid rgba(15,15,15,0.09);
          border-radius: 16px;
          padding: 28px 32px;
          display: flex; align-items: center; gap: 28px; flex-wrap: wrap;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .learning-bar.visible { opacity: 1; transform: translateY(0); }
        .learning-label {
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: #8a8a8a; white-space: nowrap; flex-shrink: 0;
        }
        .learning-divider { width: 1px; height: 32px; background: rgba(15,15,15,0.1); flex-shrink: 0; }
        .learning-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .learning-pill {
          font-size: 13px; font-weight: 400; color: #1a56ff;
          background: #e8edff; border: 1px solid rgba(26,86,255,0.2);
          border-radius: 100px; padding: 5px 16px;
          transition: background 0.15s, transform 0.15s;
          cursor: default;
        }
        .learning-pill:hover { background: #d0daff; transform: translateY(-1px); }

        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .skills-container { padding: 0 20px; }
          .skills-grid { grid-template-columns: 1fr; }
          .learning-bar { flex-direction: column; align-items: flex-start; gap: 14px; }
          .learning-divider { display: none; }
        }
      `}</style>

      <section id="skills" className="skills-root">
        <div className="skills-container">

          {/* Heading */}
          <div ref={heading.ref} className={`skills-heading ${heading.visible ? 'visible' : ''}`}>
            <p className="skills-eyebrow">What I know</p>
            <h2 className="skills-title">Technical <em>Skills</em></h2>
            <div className="skills-rule" />
          </div>

          {/* Category cards */}
          <div ref={grid.ref} className={`skills-grid ${grid.visible ? 'visible' : ''}`}>
            {categories.map((cat, i) => (
              <div
                key={i}
                className="skill-card"
                style={{
                  '--card-accent-border': cat.accent + '44',
                  '--pill-hover-bg': cat.bg,
                  '--pill-hover-border': cat.accent + '55',
                  '--pill-hover-color': cat.accent,
                  transitionDelay: `${i * 80}ms`,
                } as React.CSSProperties}
              >
                <div className="skill-card-top">
                  <div className="skill-icon" style={{ background: cat.bg }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={cat.accent} strokeWidth="2" aria-hidden="true">
                      {cat.icon.props.children}
                    </svg>
                  </div>
                  <div className="skill-cat-title">{cat.title}</div>
                </div>
                <div className="skill-divider" />
                <div className="skill-pills">
                  {cat.skills.map((s, j) => (
                    <span className="skill-pill" key={j}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning / interests */}
          <div ref={bottom.ref} className={`learning-bar ${bottom.visible ? 'visible' : ''}`}>
            <span className="learning-label">Currently exploring</span>
            <div className="learning-divider" />
            <div className="learning-pills">
              {learning.map((t, i) => (
                <span key={i} className="learning-pill">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}