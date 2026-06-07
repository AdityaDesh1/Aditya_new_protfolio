const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          background: #0f0f0f;
          font-family: 'DM Sans', system-ui, sans-serif;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-inner {
          max-width: 1100px; margin: 0 auto; padding: 28px 40px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 13px; color: #555; letter-spacing: 0.01em;
        }
        .footer-copy strong { color: #888; font-weight: 400; }

        .footer-made {
          font-size: 13px; color: #555;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-heart {
          color: #ef4444;
          animation: heartbeat 1.4s ease infinite;
          font-size: 14px; line-height: 1;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          14% { transform: scale(1.25); }
          28% { transform: scale(1); }
          42% { transform: scale(1.15); }
          56% { transform: scale(1); }
        }

        .footer-top-btn {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #888;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .footer-top-btn:hover {
          background: #1a56ff; border-color: #1a56ff;
          color: #fff; transform: translateY(-2px);
        }
        .footer-top-btn svg {
          width: 15px; height: 15px;
          stroke: currentColor; fill: none; stroke-width: 2.5;
        }

        @media (max-width: 560px) {
          .footer-inner { padding: 24px 20px; justify-content: center; text-align: center; }
          .footer-top-btn { display: none; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <p className="footer-copy">
            © {year} <strong>Aditya Deshpande</strong>. All rights reserved.
          </p>

          <p className="footer-made">
            Made with <span className="footer-heart">♥</span> using React
          </p>

          <button className="footer-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;