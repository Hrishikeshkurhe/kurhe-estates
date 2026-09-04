import React, { useEffect, useRef } from 'react';

const SKYLINE = [
  { x: 10, y: 70, h: 90 }, { x: 40, y: 40, h: 120 }, { x: 70, y: 10, h: 150 },
  { x: 100, y: 55, h: 105 }, { x: 130, y: 0, h: 160 }, { x: 160, y: 55, h: 105 },
  { x: 190, y: 10, h: 150 }, { x: 220, y: 40, h: 120 }, { x: 250, y: 70, h: 90 },
];

export default function Hero() {
  const barsRef = useRef([]);

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      const len = bar.getBBox().height * 2 + bar.getBBox().width * 2;
      bar.style.strokeDasharray = len;
      bar.style.strokeDashoffset = len;
      bar.style.transition = `stroke-dashoffset 1s ease ${i * 0.08}s`;
      requestAnimationFrame(() => { bar.style.strokeDashoffset = 0; });
    });
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <img src="/assets/hero-cover.jpg" alt="Infinia — the new standard of imperial living" />
        <div className="hero-scrim"></div>
      </div>
      <div className="hero-content">
        <p className="eyebrow">Kurhe Estates presents</p>
        <h1 className="hero-title">
          <span className="skyline-word">Infinia</span>
          <span className="hero-sub">The New Standard of<br />Imperial Living</span>
        </h1>
        <p className="hero-desc">
          A boutique address of nine 3&nbsp;BHK residences in Amravati — Vastu-aligned,
          quietly monumental, built for a single generation to call home.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">Book a Site Visit</a>
          <a href="#infinia" className="btn btn-ghost">Explore Infinia ↓</a>
        </div>
      </div>
      <div className="hero-skyline" aria-hidden="true">
        <svg viewBox="0 0 400 160" className="skyline-svg">
          {SKYLINE.map((b, i) => (
            <rect
              key={i}
              ref={(el) => (barsRef.current[i] = el)}
              className="skybar"
              x={b.x}
              y={160 - b.h}
              width="18"
              height={b.h}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
