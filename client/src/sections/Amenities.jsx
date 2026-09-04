import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Amenities() {
  const [headRef, headClass] = useReveal();
  const [rowRef, rowClass] = useReveal();
  return (
    <section className="section dark" id="amenities">
      <div className={`section-head ${headClass}`} ref={headRef}>
        <p className="eyebrow">04 — Amenities</p>
        <h2>Everyday, elevated</h2>
      </div>
      <div className={`split ${rowClass}`} ref={rowRef}>
        <div className="split-media">
          <img src="/assets/amenities.jpg" alt="Infinia amenities — modular kitchen, CCTV, smart lighting" />
        </div>
        <div className="amen-list">
          {infinia.amenities.map((a, i) => (
            <div className="amen-item" key={a}>
              <span>{String(i + 1).padStart(2, '0')}</span>{a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
