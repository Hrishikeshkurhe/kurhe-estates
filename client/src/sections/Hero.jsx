import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty('--mouse-x', `${x * 12}px`);
      hero.style.setProperty('--mouse-y', `${y * 8}px`);
    };

    const handleMouseLeave = () => {
      hero.style.setProperty('--mouse-x', '0px');
      hero.style.setProperty('--mouse-y', '0px');
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero-modern" id="top" ref={heroRef}>
      <div className="hero-modern-media">
        <img
          src="/assets/hero-cover.jpg"
          alt="Infinia — The New Standard of Imperial Living"
        />
        <div className="hero-modern-overlay"></div>
        <div className="hero-modern-glow"></div>
      </div>

      <div className="hero-grid"></div>

      <div className="hero-topline">
        <span>KE / 01</span>
        <span>AMRAVATI · MAHARASHTRA</span>
      </div>

      <div className="hero-vertical hero-vertical-left">
        <span>ARCHITECTURE</span>
        <i></i>
        <span>RESIDENCES</span>
      </div>

      <div className="hero-vertical hero-vertical-right">
        <span>VASTU ALIGNED</span>
        <i></i>
        <span>PRIVATE ADDRESS</span>
      </div>

      <div className="hero-modern-content">
        <div className="hero-modern-kicker">
          <span></span>
          A Growing Real Estate Company in Vidarbha
        </div>
        

        <div className="hero-modern-title-wrap">
          <span className="hero-index">01</span>

          <h1>
            <span className="hero-infinia">INFINIA</span>

            <span className="hero-standard">
              The New Standard of
              <em> Imperial Living</em>
            </span>
          </h1>
        </div>

        <div className="hero-modern-bottom">
          <div className="hero-modern-copy">
            <p>
              Crafting landmarks. Creating legacies.
              A boutique address of SIX 3 BHK residences in Amravati —
              Vastu-aligned, thoughtfully designed, and built for generations
              to call home.
            </p>
          </div>

          <div className="hero-modern-actions">
            <a href="#contact" className="modern-hero-btn primary">
              <span>Book a Site Visit</span>
              <strong>↗</strong>
            </a>

            <a
              href="/assets/Infinia-Brochure.pdf"
              download="Infinia-Brochure.pdf"
              className="modern-hero-btn secondary"
            >
              <span>View Brochure</span>
              <strong>↓</strong>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-project-mark">
        <span>INFINIA</span>
        <span>G+6 · 3 BHK</span>
      </div>

      <div className="hero-scroll-modern">
        <span>SCROLL</span>
        <i></i>
      </div>

      <div className="hero-corner hero-corner-tl"></div>
      <div className="hero-corner hero-corner-br"></div>
    </section>
  );
}