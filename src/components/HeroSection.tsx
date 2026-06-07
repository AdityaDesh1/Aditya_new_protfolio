import { useState, useEffect, useRef } from "react";
import Ballpit from "../components/Animations/Ballpit";

const roles = ["Full Stack Engineer", "React Developer", "Node.js Architect", "UI Craftsman"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeoutRef.current ?? undefined);
  }, [displayed, deleting, roleIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f9f7f4;
          --ink: #0f0f0f;
          --muted: #8a8a8a;
          --accent: #1a56ff;
          --accent-light: #e8edff;
          --border: rgba(15,15,15,0.10);
          --serif: 'DM Serif Display', Georgia, serif;
          --sans: 'DM Sans', system-ui, sans-serif;
        }
        .hero-root {
          background: var(--bg);
          min-height: 100vh;
          font-family: var(--sans);
          color: var(--ink);
          position: relative;
          overflow: hidden;
        }
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }
        .ballpit-container {
          position: absolute;
          top: 0; right: 0;
          width: 52%;
          height: 100vh;
          z-index: 1;
          opacity: 0.85;
        }
        .ballpit-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--bg) 0%, transparent 35%);
          z-index: 2;
          pointer-events: none;
        }
        .bg-letter {
          position: absolute;
          right: -30px; top: 50%;
          transform: translateY(-55%);
          font-family: var(--serif);
          font-size: clamp(240px, 30vw, 460px);
          color: rgba(15,15,15,0.03);
          line-height: 1;
          user-select: none; pointer-events: none;
          z-index: 1;
          letter-spacing: -0.05em;
        }
        nav {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 56px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo { font-family: var(--serif); font-size: 22px; color: var(--ink); letter-spacing: -0.02em; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { font-size: 13px; font-weight: 400; color: var(--muted); text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta {
          background: var(--ink); color: var(--bg); border: none; border-radius: 100px;
          padding: 10px 22px; font-size: 13px; font-family: var(--sans); cursor: pointer;
          letter-spacing: 0.01em; transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: var(--accent); transform: scale(1.03); }
        .hero-inner {
          position: relative; z-index: 5;
          padding: 72px 56px 60px;
          max-width: 680px;
        }
        .availability-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid var(--border); background: #fff; border-radius: 100px;
          padding: 6px 16px; font-size: 12px; color: var(--muted); margin-bottom: 44px;
          opacity: 0; animation: fadeUp 0.6s 0.1s forwards;
        }
        .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .hero-headline {
          font-family: var(--serif);
          font-size: clamp(52px, 8vw, 108px);
          line-height: 1.0; letter-spacing: -0.03em; color: var(--ink);
          opacity: 0; animation: fadeUp 0.7s 0.25s forwards;
        }
        .hero-headline .italic { font-style: italic; color: var(--accent); }
        .role-line {
          display: flex; align-items: center; gap: 14px; margin-top: 28px;
          opacity: 0; animation: fadeUp 0.7s 0.45s forwards;
        }
        .role-dash { width: 40px; height: 2px; background: var(--accent); flex-shrink: 0; }
        .role-text { font-size: clamp(16px, 2vw, 22px); font-weight: 300; color: var(--muted); min-height: 1.4em; }
        .role-cursor {
          display: inline-block; width: 2px; height: 1em;
          background: var(--accent); vertical-align: middle; margin-left: 2px;
          animation: blink 0.9s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-bottom {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-top: 64px; gap: 40px; flex-wrap: wrap;
          opacity: 0; animation: fadeUp 0.7s 0.6s forwards;
        }
        .hero-desc { max-width: 340px; font-size: 15px; line-height: 1.75; color: var(--muted); font-weight: 300; }
        .hero-desc strong { color: var(--ink); font-weight: 500; }
        .hero-right { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; }
        .stats-row { display: flex; gap: 28px; }
        .stat-num { font-family: var(--serif); font-size: 32px; color: var(--ink); line-height: 1; letter-spacing: -0.02em; }
        .stat-label { font-size: 11px; color: var(--muted); margin-top: 4px; letter-spacing: 0.04em; text-transform: uppercase; }
        .cta-row { display: flex; gap: 12px; }
        .btn-primary {
          background: var(--ink); color: var(--bg); border: 1.5px solid var(--ink); border-radius: 100px;
          padding: 13px 28px; font-size: 14px; font-family: var(--sans); cursor: pointer;
          letter-spacing: 0.01em; transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-2px); }
        .btn-secondary {
          background: transparent; color: var(--ink); border: 1.5px solid var(--border); border-radius: 100px;
          padding: 13px 28px; font-size: 14px; font-family: var(--sans); cursor: pointer;
          transition: border-color 0.2s, transform 0.15s;
        }
        .btn-secondary:hover { border-color: var(--ink); transform: translateY(-2px); }
        .stack-row {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          padding-top: 32px; border-top: 1px solid var(--border); margin-top: 32px;
          opacity: 0; animation: fadeUp 0.7s 0.75s forwards;
        }
        .stack-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-right: 4px; }
        .stack-pill {
          font-size: 12px; color: var(--ink); background: #fff;
          border: 1px solid var(--border); border-radius: 100px; padding: 5px 14px;
          transition: background 0.15s, border-color 0.15s, color 0.15s; cursor: default;
        }
        .stack-pill:hover { background: var(--accent-light); border-color: var(--accent); color: var(--accent); }
        .location-tag { font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 5px; margin-left: auto; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 680px) {
          nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .hero-inner { padding: 48px 24px 40px; }
          .hero-bottom { flex-direction: column; }
          .ballpit-container { width: 100%; opacity: 0.2; }
        }
      `}</style>

      {/* ── hero-root wraps EVERYTHING ── */}
      <div className="hero-root">

        {/* 1. Ballpit — absolute, right half, behind all content */}
        <div className="ballpit-container">
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <Ballpit
              count={120}
              gravity={0.4}
              friction={0.9975}
              wallBounce={0.95}
              followCursor={true}
              colors={[0x1a56ff, 0x6ea8fe, 0x0f0f0f, 0xffffff, 0x85b7eb]}
            />
          </div>
        </div>

        {/* 2. Watermark letter — behind nav/content */}
        <div className="bg-letter" aria-hidden="true">A</div>

        {/* 3. Nav */}
        <nav>
          <div className="nav-logo">Aditya Deshpande</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta">Let's talk</button>
        </nav>

        {/* 4. Hero content */}
        <div className="hero-inner">
          <div className="availability-badge">
            <span className="avail-dot" />
            Available for opportunities · Bengaluru
          </div>

          <h1 className="hero-headline">
            I build<br />
            <span className="italic">things</span><br />
            for the web.
          </h1>

          <div className="role-line">
            <div className="role-dash" />
            <p className="role-text">
              {mounted ? displayed : "Full Stack Engineer"}
              <span className="role-cursor" />
            </p>
          </div>

          <div className="hero-bottom">
            <p className="hero-desc">
              <strong>Full Stack Engineer</strong> from Bengaluru crafting responsive,
              performant web apps — from pixel-perfect UIs to rock-solid APIs.
              Passionate about clean code and seamless user experiences.
            </p>

            <div className="hero-right">
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-num">12+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-num">2+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat">
                  <div className="stat-num">5</div>
                  <div className="stat-label">Stack</div>
                </div>
              </div>
              <div className="cta-row">
                <button className="btn-primary">View Projects</button>
                <button className="btn-secondary">Download CV</button>
              </div>
            </div>
          </div>

          <div className="stack-row">
            <span className="stack-label">Stack</span>
            {["React", "JavaScript", "Node.js", "MySQL", "Express"].map((s) => (
              <span className="stack-pill" key={s}>{s}</span>
            ))}
            <span className="location-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Bengaluru, IN
            </span>
          </div>
        </div>

      </div>{/* end .hero-root */}
    </>
  );
}