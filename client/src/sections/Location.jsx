import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

export default function Location() {
  const [mediaRef, mediaClass] = useReveal('left');
  const [copyRef, copyClass] = useReveal('right');

  return (
    <section className="split rev" id="location">

      <div className={`split-media ${mediaClass}`} ref={mediaRef}>
        <iframe
          src="https://www.google.com/maps?q=Plot%20No.%208,%20Ganesh%20Vihar%20No.%202,%20Jagadare%20Layout,%20Amravati,%20Maharashtra%20444604&output=embed"
          title="Infinia Location, Amravati"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className={`split-copy ${copyClass}`} ref={copyRef}>
        <p className="eyebrow">05 — Location</p>

        <h2>
          Plot No. 8,
          <br />
          Ganesh Vihar No. 2
        </h2>

        <p>
          Near Jagadare Layout, Amravati 444604 — inside a settled
          residential pocket, minutes from schools, hospitals and the
          city's daily rhythm.
        </p>

        <ul className="connect-list">
          {infinia.connectivity.map(([place, dist]) => (
            <li key={place}>
              <span>{place}</span>
              <em>{dist}</em>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}