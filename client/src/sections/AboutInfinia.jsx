import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

export default function AboutInfinia() {
  const [mediaRef, mediaClass] = useReveal('left');
  const [copyRef, copyClass] = useReveal('right');

  return (
    <section className="split" id="infinia">

      {/* Building Image */}
      <div className={`split-media ${mediaClass}`} ref={mediaRef}>
        <img
          src="/assets/building-render.jpg"
          alt="Infinia tower render"
        />
      </div>

      {/* Content */}
      <div className={`split-copy ${copyClass}`} ref={copyRef}>

        <p className="eyebrow">01 — The Address</p>

        <h2>
          An infinite standard
          <br />
          of luxury living
        </h2>

        <p>
          Experience a world where architecture becomes art and comfort
          becomes a way of life. Infinia sets a new benchmark for modern
          luxury in Amravati — an exceptional blend of style, space and
          prestige.
        </p>

        <p>
          Its striking façade, thoughtfully curated residences and attention
          to every detail create an address that reflects success and
          sophistication. This is more than a home — it is a statement of
          achievement.
        </p>

        {/* Project Highlights */}
        <div className="stat-grid">

          <div className="stat-item">
            <strong>6</strong>
            <span>Residences</span>
          </div>

          <div className="stat-item">
            <strong>G+6</strong>
            <span>Structure</span>
          </div>

          <div className="stat-item">
            <strong>1375</strong>
            <span>Sq.Ft Super Built-Up Area</span>
          </div>

          <div className="stat-item stat-item-wide">
            <strong>1 Floor = 1 Flat</strong>
            <span>Concept</span>
          </div>

          <div className="stat-item">
            <strong>3 BHK</strong>
            <span>Luxurious Flats</span>
          </div>

        </div>

      </div>
    </section>
  );
}