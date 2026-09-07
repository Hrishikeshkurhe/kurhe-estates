import React, { useEffect, useRef } from 'react';

const SKYLINE = [
  { x: 10, y: 70, h: 90 },
  { x: 40, y: 40, h: 120 },
  { x: 70, y: 10, h: 150 },
  { x: 100, y: 55, h: 105 },
  { x: 130, y: 0, h: 160 },
  { x: 160, y: 55, h: 105 },
  { x: 190, y: 10, h: 150 },
  { x: 220, y: 40, h: 120 },
  { x: 250, y: 70, h: 90 },
];

export default function Hero() {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;

      const box = bar.getBBox();
      const len = box.height * 2 + box.width * 2;

      bar.style.strokeDasharray = len;
      bar.style.strokeDashoffset = len;

      bar.style.transition =
        `stroke-dashoffset 1s ease ${i * 0.08}s`;

      requestAnimationFrame(() => {
        bar.style.strokeDashoffset = 0;
      });
    });
  }, []);

  return (
    <section className="hero" id="top">

      {/* Background Image */}
      <div className="hero-media">

        <img
          src="/assets/hero-cover.jpg"
          alt="Infinia — the new standard of imperial living"
          className="hero-background"
        />

        <div className="hero-scrim"></div>

      </div>


      {/* Hero Content */}
      <div className="hero-content">

        <h3 >
          A Leading Real Estate Company in Vidarbha
        </h3>

        <h1 className="hero-title">

          <span className="skyline-word">
            Infinia
          </span>

          <span className="hero-sub">
            The New Standard of
            <br />
            Imperial Living
          </span>

        </h1>

        <p className="hero-desc">
          Crafting landmarks. Creating legacies.
          <br />
          A boutique address of nine 3&nbsp;BHK residences in Amravati -
          Vastu-aligned, thoughtfully designed, and built for generations
          to call home.
        </p>

        <div className="hero-actions">

          {/* Book Site Visit */}
          <a
            href="#contact"
            className="btn btn-solid"
          >
            Book a Site Visit
          </a>


          {/* Download Brochure */}
          <a
            href="/assets/Infinia-Brochure.pdf"
            className="btn btn-ghost"
            download="Infinia-Brochure.pdf"
          >
            Download Brochure ↓
          </a>

        </div>

      </div>


    </section>
  );
}