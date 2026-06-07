import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

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

const contactInfo = [
  {
    label: 'Email',
    value: 'adityadesh.webdev@gmail.com',
    link: 'mailto:adityadesh.webdev@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bengaluru, India',
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7337732018',
    link: 'tel:+917337732018',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.48-1.48a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aditya-deshpande-5921311b9/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    url: 'https://github.com/AdityaDesh1?tab=repositories',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    url: 'mailto:adityadesh.webdev@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const heading = useReveal();
  const left = useReveal(0.1);
  const right = useReveal(0.1);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send('service_6j66p9r', 'template_4xnpu6u', formData, '4PgCMVIyMpCsIaH83')
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          background: #f9f7f4;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #0f0f0f;
          padding: 100px 0 110px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(15,15,15,0.07);
        }
        .contact-root::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15,15,15,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,15,15,0.07) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .contact-container { max-width: 1100px; margin: 0 auto; padding: 0 40px; position: relative; }

        /* heading */
        .contact-heading {
          margin-bottom: 72px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .contact-heading.visible { opacity: 1; transform: translateY(0); }
        .contact-eyebrow { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #8a8a8a; margin-bottom: 12px; }
        .contact-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.05; letter-spacing: -0.025em;
        }
        .contact-title em { font-style: italic; color: #1a56ff; }
        .contact-rule { width: 48px; height: 2px; background: #1a56ff; margin-top: 20px; }

        /* two-col layout */
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.3fr; gap: 64px; align-items: start;
        }

        /* left */
        .contact-left {
          opacity: 0; transform: translateX(-28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .contact-left.visible { opacity: 1; transform: translateX(0); }

        .contact-tagline {
          font-size: 16px; line-height: 1.75; color: #666; font-weight: 300;
          margin-bottom: 40px;
        }
        .contact-tagline strong { color: #0f0f0f; font-weight: 500; }

        .info-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .info-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px;
          background: #fff;
          border: 1px solid rgba(15,15,15,0.08);
          border-radius: 12px;
          transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .info-item:hover {
          box-shadow: 0 6px 20px rgba(26,86,255,0.08);
          border-color: rgba(26,86,255,0.2);
          transform: translateX(4px);
        }
        .info-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: #e8edff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: background 0.2s;
        }
        .info-item:hover .info-icon { background: #1a56ff; }
        .info-icon svg { width: 16px; height: 16px; stroke: #1a56ff; transition: stroke 0.2s; }
        .info-item:hover .info-icon svg { stroke: #fff; }
        .info-text {}
        .info-label { font-size: 11px; color: #8a8a8a; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
        .info-value { font-size: 14px; font-weight: 500; color: #0f0f0f; }

        /* socials */
        .socials-label { font-size: 11px; color: #8a8a8a; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 14px; }
        .socials-row { display: flex; gap: 10px; }
        .social-btn {
          width: 42px; height: 42px; border-radius: 10px;
          background: #fff; border: 1px solid rgba(15,15,15,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #555; text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .social-btn svg { width: 17px; height: 17px; }
        .social-btn:hover { background: #1a56ff; border-color: #1a56ff; color: #fff; transform: translateY(-2px); }

        /* right — form */
        .contact-right {
          opacity: 0; transform: translateX(28px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .contact-right.visible { opacity: 1; transform: translateX(0); }

        .contact-form {
          background: #fff;
          border: 1px solid rgba(15,15,15,0.08);
          border-radius: 18px;
          padding: 36px;
        }

        .form-row { margin-bottom: 22px; }
        .form-label {
          display: block; font-size: 12px; font-weight: 500; color: #555;
          text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 8px;
        }
        .form-input, .form-textarea {
          width: 100%; padding: 12px 16px;
          background: #f9f7f4;
          border: 1px solid rgba(15,15,15,0.1);
          border-radius: 10px;
          font-size: 14px; font-family: 'DM Sans', sans-serif;
          color: #0f0f0f;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #aaa; }
        .form-input:focus, .form-textarea:focus {
          border-color: #1a56ff;
          box-shadow: 0 0 0 3px rgba(26,86,255,0.08);
          background: #fff;
        }
        .form-textarea { resize: none; min-height: 130px; line-height: 1.6; }

        .form-status {
          padding: 12px 16px; border-radius: 10px; font-size: 13px;
          margin-bottom: 18px; text-align: center;
        }
        .form-status.success { background: #d1fae5; color: #065f46; border: 1px solid #6ee7b7; }
        .form-status.error   { background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }

        .form-submit {
          width: 100%;
          background: #0f0f0f; color: #fff;
          border: none; border-radius: 10px;
          padding: 14px 24px;
          font-size: 14px; font-weight: 500; font-family: 'DM Sans', sans-serif;
          cursor: pointer; letter-spacing: 0.01em;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s, transform 0.15s;
        }
        .form-submit:hover:not(:disabled) { background: #1a56ff; transform: translateY(-1px); }
        .form-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-submit svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 2; }

        @media (max-width: 760px) {
          .contact-container { padding: 0 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-left, .contact-right { transform: none; }
        }
      `}</style>

      <section id="contact" className="contact-root">
        <div className="contact-container">

          {/* Heading */}
          <div ref={heading.ref} className={`contact-heading ${heading.visible ? 'visible' : ''}`}>
            <p className="contact-eyebrow">Say hello</p>
            <h2 className="contact-title">Get in <em>Touch</em></h2>
            <div className="contact-rule" />
          </div>

          <div className="contact-grid">

            {/* Left */}
            <div ref={left.ref} className={`contact-left ${left.visible ? 'visible' : ''}`}>
              <p className="contact-tagline">
                I'm currently <strong>open to new opportunities</strong> — whether it's a full-time role,
                freelance project, or just a conversation about something interesting. My inbox is always open.
              </p>

              <div className="info-list">
                {contactInfo.map((item, i) => {
                  const Tag = item.link ? 'a' : 'div';
                  return (
                    <Tag
                      key={i}
                      {...(item.link ? { href: item.link } : {})}
                      className="info-item"
                    >
                      <div className="info-icon">{item.icon}</div>
                      <div className="info-text">
                        <div className="info-label">{item.label}</div>
                        <div className="info-value">{item.value}</div>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              <div className="socials-label">Find me on</div>
              <div className="socials-row">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div ref={right.ref} className={`contact-right ${right.visible ? 'visible' : ''}`}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="form-input"
                    placeholder="Aditya Deshpande"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="form-input"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-row">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" required
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'success' && (
                  <div className="form-status success">Message sent! I'll get back to you soon.</div>
                )}
                {status === 'error' && (
                  <div className="form-status error">Something went wrong. Please try again.</div>
                )}

                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Send Message
                    </>
                  )}
                </button>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}