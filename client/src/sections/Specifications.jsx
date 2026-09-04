import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Specifications() {
  const [bannerRef, bannerClass] = useReveal();
  return (
    <>
      <section className="banner">
        <img src="/assets/living-room.jpg" alt="Infinia living room specification" />
        <div className={`banner-text ${bannerClass}`} ref={bannerRef}>
          <p className="eyebrow">03 — Specifications</p>
          <h2>Detail is the<br />real luxury</h2>
        </div>
      </section>

      <section className="section" id="specifications">
        <div className="specs-grid">
          {infinia.specs.map((s) => (
            <div className="spec-card" key={s.h}>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
