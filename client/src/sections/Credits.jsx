import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Credits() {
  const [ref, cls] = useReveal();

  return (
    <section className={`credits ${cls}`} ref={ref}>

      {/* Centered Title */}
      <div className="credits-heading">
        <p className="eyebrow">Our Team</p>

        <h2>
          Meet the people
      
          behind Infinia
        </h2>
      </div>

      {/* Team Members */}
      <div className="credits-inner">
        {infinia.credits.map(([h, p]) => (
          <div className="credit" key={h}>
            <h5>{h}</h5>
            <p>{p}</p>
          </div>
        ))}
      </div>

    </section>
  );
}