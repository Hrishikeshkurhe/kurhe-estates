import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Specifications() {
  const [bannerRef, bannerClass] = useReveal();

  return (
    <section className="section specifications-section" id="specifications">

      <div className="specifications-heading">
        <p className="eyebrow">03 — Specifications</p>

        <h2>Detail is the real luxury</h2>

        <p className="specifications-lede">
          Every element of Infinia has been considered with precision,
          from structure and finishes to electrical and plumbing systems.
        </p>
      </div>

      <div className="specs-grid">
        {infinia.specs.map((s) => (
          <div className="spec-card" key={s.h}>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>

    </section>
  );
}