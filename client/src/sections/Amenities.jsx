import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Amenities() {
  const [headRef, headClass] = useReveal();
  const [rowRef, rowClass] = useReveal();

  return (
    <section className={`amenities ${headClass}`} id="amenities">
      <div className="amenities-heading" ref={headRef}>
        <p className="eyebrow">04 — Amenities</p>
        <h2>Everyday, elevated</h2>
        <span className="amenities-heading-line"></span>
        <p className="amenities-intro">
          Thoughtfully selected amenities designed to bring comfort, convenience
          and refined living into every part of your everyday life.
        </p>
      </div>

      <div className={`amenities-main ${rowClass}`} ref={rowRef}>
        <div className="amenities-visual">
          <img
            src="/assets/amenities.jpg"
            alt="Infinia premium amenities"
            loading="lazy"
          />

          <div className="amenities-overlay">
            <span>INFINIA</span>
            <span>MODERN LIVING SPACES</span>
          </div>
        </div>

        <div className="amenities-list">
          {infinia.amenities.map((amenity, index) => (
            <div className="amenity" key={amenity}>
              <span className="amenity-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{amenity}</h3>

              <span className="amenity-arrow">↗</span>
            </div>
          ))}

          <div className="amenities-meta">
            <span>CURATED FOR COMFORT</span>
            <span>AMRAVATI · MAHARASHTRA</span>
          </div>
        </div>
      </div>
    </section>
  );
}