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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.0187697927463!2d77.74610009999999!3d20.9115645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a5003e9eb769%3A0x9c48bc46ab0a5c6f!2sINFINIA!5e0!3m2!1sen!2sin!4v1788694687431!5m2!1sen!2sin"
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