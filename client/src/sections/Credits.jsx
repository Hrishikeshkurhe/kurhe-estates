import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Credits() {
  const [ref, cls] = useReveal();

  return (
    <section className={`credits ${cls}`} ref={ref}>

      <div className="credits-header">
        <div className="credits-heading">
          <p className="eyebrow">07 — Our Team</p>
          <h2>People <em>behind Infinia.</em></h2>
        </div>

       
      </div>

      <div className="credits-inner">
        {infinia.credits.map(([h, p], index) => (
          <div className="credit" key={h}>
            <div className="credit-top">
              <span>0{index + 1}</span>
              <span>INFINIA</span>
            </div>

            <div className="credit-content">
              <h5>{h}</h5>
              <p>{p}</p>
            </div>

            <span className="credit-arrow">↗</span>
          </div>
        ))}
      </div>

    </section>
  );
}