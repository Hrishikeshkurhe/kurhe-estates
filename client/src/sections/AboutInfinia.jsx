import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

const HIGHLIGHTS = [
   ['3 BHK', 'Luxurious Flats'],
  ['6', 'Residences'],
   ['1375', 'Sq.Ft Super Built-Up Area'],
  ['1 Flat', 'Per Floor'],
 
];

export default function AboutInfinia() {
  const [mediaRef, mediaClass] = useReveal('left');
  const [copyRef, copyClass] = useReveal('right');

  return (
    <section className="infinia-about" id="infinia">

      <div className={`infinia-about-media ${mediaClass}`} ref={mediaRef}>
        <img src="/assets/building-render.jpg" alt="Infinia tower render" />

        <div className="infinia-image-overlay"></div>

        <div className="infinia-image-label">
          <span>INFINIA</span>
          <span>THE ADDRESS</span>
        </div>
      </div>

      <div className={`infinia-about-content ${copyClass}`} ref={copyRef}>

        <div className="infinia-about-header">
          <p className="eyebrow">01 — The Address</p>
          <span className="infinia-about-number">01</span>
        </div>

        <h2>
          An infinite standard
          <br />
          <em>of luxury living</em>
        </h2>

        <div className="infinia-about-line"></div>

        <p className="infinia-about-lead">
          Experience a world where architecture becomes art and comfort
          becomes a way of life. Infinia sets a new benchmark for modern
          luxury in Amravati — an exceptional blend of style, space and
          prestige.
        </p>

        <div className="infinia-highlights">
          {HIGHLIGHTS.map(([value, label], index) => (
            <div className="infinia-highlight" key={label}>
              <span className="highlight-index">0{index + 1}</span>

              <div className="highlight-main">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>

              <div className="highlight-line"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}