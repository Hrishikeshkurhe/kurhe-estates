import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Credits() {
  const [ref, cls] = useReveal();
  return (
    <section className={`credits ${cls}`} ref={ref}>
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
