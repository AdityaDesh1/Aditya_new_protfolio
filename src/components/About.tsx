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

const facts = [
  {
    label: 'Location',
    value: 'Bengaluru, IN',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Education',
    value: 'MCA — VTU, Belagavi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Current Role',
    value: 'Full Stack Engineer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    label: 'Passion',
    value: 'Building Interactive UIs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

const traits = [
  { num: '3+', label: 'Years building' },
  { num: '12+', label: 'Projects shipped' },
  { num: '3', label: 'Companies worked' },
];

export default function About() {
  const heading = useReveal();
  const left = useReveal(0.1);
  const right = useReveal(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          background: #fff;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #0f0f0f;
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(15,15,15,0.07);
          border-bottom: 1px solid rgba(15,15,15,0.07);
        }
        /* Subtle dot grid */
        .about-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(15,15,15,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        /* big serif watermark */
        .about-watermark {
          position: absolute;
          right: -40px; bottom: -60px;
          font-family: 'DM Serif Display', serif;
          font-size: clamp(180px, 22vw, 320px);
          color: rgba(15,15,15,0.025);
          line-height: 1;
          user-select: none; pointer-events: none;
          letter-spacing: -0.04em;
        }

        .about-container {
          max-width: 1100px; margin: 0 auto; padding: 0 40px;
          position: relative;
        }

        /* heading */
        .about-heading {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about-heading.visible { opacity: 1; transform: translateY(0); }
        .about-eyebrow {
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #8a8a8a; margin-bottom: 12px;
        }
        .about-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05; letter-spacing: -0.025em;
        }
        .about-title em { font-style: italic; color: #1a56ff; }
        .about-rule { width: 48px; height: 2px; background: #1a56ff; margin-top: 20px; }

        /* grid */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        /* left — bio */
        .about-left {
          opacity: 0; transform: translateX(-28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about-left.visible { opacity: 1; transform: translateX(0); }

        .about-bio {
          font-size: 16px; line-height: 1.85; color: #555; font-weight: 300;
          margin-bottom: 20px;
        }
        .about-bio strong { color: #0f0f0f; font-weight: 500; }
        .about-bio em { font-style: italic; color: #1a56ff; font-weight: 400; }

        .about-traits {
          display: flex; gap: 32px; margin-top: 40px;
          padding-top: 32px; border-top: 1px solid rgba(15,15,15,0.08);
        }
        .trait-num {
          font-family: 'DM Serif Display', serif;
          font-size: 36px; color: #0f0f0f; line-height: 1;
          letter-spacing: -0.02em;
        }
        .trait-label { font-size: 12px; color: #8a8a8a; margin-top: 4px; letter-spacing: 0.02em; }

        /* right — fact cards */
        .about-right {
          opacity: 0; transform: translateX(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about-right.visible { opacity: 1; transform: translateX(0); }

        .facts-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .fact-card {
          background: #f9f7f4;
          border: 1px solid rgba(15,15,15,0.08);
          border-radius: 14px;
          padding: 24px;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
          position: relative; overflow: hidden;
        }
        .fact-card:hover {
          box-shadow: 0 8px 28px rgba(26,86,255,0.09);
          border-color: rgba(26,86,255,0.25);
          transform: translateY(-2px);
        }
        .fact-card:hover .fact-icon-wrap { background: #1a56ff; }
        .fact-card:hover .fact-icon-wrap svg { stroke: #fff; }
        .fact-icon-wrap {
          width: 38px; height: 38px; border-radius: 10px;
          background: #e8edff;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
          transition: background 0.2s;
        }
        .fact-icon-wrap svg { width: 17px; height: 17px; stroke: #1a56ff; transition: stroke 0.2s; }
        .fact-label { font-size: 11px; color: #8a8a8a; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 5px; }
        .fact-value { font-size: 14px; font-weight: 500; color: #0f0f0f; line-height: 1.3; }

        @media (max-width: 760px) {
          .about-container { padding: 0 20px; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-left, .about-right { transform: none; }
          .facts-grid { grid-template-columns: 1fr 1fr; }
          .about-traits { gap: 20px; }
        }
      `}</style>

      <section id="about" className="about-root">
        <div className="about-watermark" aria-hidden="true">AD</div>

        <div className="about-container">

          {/* Heading */}
          <div ref={heading.ref} className={`about-heading ${heading.visible ? 'visible' : ''}`}>
            <p className="about-eyebrow">Who I am</p>
            <h2 className="about-title">About <em>Me</em></h2>
            <div className="about-rule" />
          </div>

          <div className="about-grid">

            {/* Left — bio */}
            <div ref={left.ref} className={`about-left ${left.visible ? 'visible' : ''}`}>
              <p className="about-bio">
                I'm <strong>Aditya Deshpande</strong>, a <em>Full Stack Engineer</em> from Bengaluru
                who loves building things that live on the internet. I work across the full stack —
                crafting pixel-perfect UIs with React and Next.js, and powering them with
                Node.js APIs and MySQL on the backend.
              </p>
              <p className="about-bio">
                Currently at <strong>Aadya Health Science (LinQMD)</strong>, I'm building
                healthcare platforms that help doctors and patients connect more seamlessly.
                I care deeply about <strong>performance, accessibility,</strong> and writing
                code that's a pleasure to maintain.
              </p>
              <p className="about-bio">
                When I'm not coding, I'm exploring new tools, reading about design systems,
                or figuring out how to make something just a little bit smoother.
              </p>

              <div className="about-traits">
                {traits.map((t, i) => (
                  <div key={i}>
                    <div className="trait-num">{t.num}</div>
                    <div className="trait-label">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — facts */}
            <div ref={right.ref} className={`about-right ${right.visible ? 'visible' : ''}`}>
              <div className="facts-grid">
                {facts.map((f, i) => (
                  <div
                    key={i}
                    className="fact-card"
                    style={{ transitionDelay: `${i * 70}ms` }}
                  >
                    <div className="fact-icon-wrap">{f.icon}</div>
                    <div className="fact-label">{f.label}</div>
                    <div className="fact-value">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}