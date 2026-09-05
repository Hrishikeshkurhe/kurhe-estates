import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

export default function AboutInfinia() {
  const [mediaRef, mediaClass] = useReveal('left');
  const [copyRef, copyClass] = useReveal('right');
  return (
    <section className="split" id="infinia">
      <div className={`split-media ${mediaClass}`} ref={mediaRef}>
        <img src="/assets/building-render.jpg" alt="Infinia tower render" />
      </div>
      <div className={`split-copy ${copyClass}`} ref={copyRef}>
        <p className="eyebrow">01 — The Address</p>
        <h2>An infinite standard<br />of luxury living</h2>
        <p>Experience a world where architecture becomes art and comfort becomes a way of life. Infinia sets a new benchmark for modern luxury in Amravati — an exceptional blend of style, space and prestige.</p>
        <p>Its striking façade, thoughtfully curated residences and attention to every detail create an address that reflects success and sophistication. This is more than a home — it is a statement of achievement.</p>
        <ul className="stat-row">
          <li><strong>6</strong><span>Residences</span></li>
          <li><strong>G+6</strong><span>Structure</span></li>
          <li><strong>1375</strong><span>Sq.Ft. Each</span></li>
        </ul>
      </div>
    </section>
  );
}
