import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

const TABS = [
  { key: 'typical', label: 'Typical Floor Plan', img: '/assets/floorplan-typical.jpg', alt: 'Typical 1st to 6th floor plan with Vastu zones' },
  { key: 'cut', label: '3 BHK Cut Section', img: '/assets/floorplan-cutsection.jpg', alt: '3 BHK cut section — flat no. 101 to 601' },
  { key: 'ground', label: 'Ground / Parking', img: '/assets/floorplan-ground.jpg', alt: 'Ground floor parking plan' },
];

export default function Residences() {
  const [active, setActive] = useState('typical');
  const [headRef, headClass] = useReveal();
  const [gridRef, gridClass] = useReveal();
  const [dimsRef, dimsClass] = useReveal();

  return (
    <section className="section" id="residences">
      <div className={`section-head ${headClass}`} ref={headRef}>
        <p className="eyebrow">02 — The Residences</p>
        <h2>Three bedrooms,<br />built on Vastu principles</h2>
        <p className="section-lede">
          Every Infinia residence is oriented to the eight energies of Vastu Shastra — from the
          Ishanya puja corner to the Nairutya master retreat — so the plan supports the life
          lived inside it, not just its square footage.
        </p>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`tab-btn${active === t.key ? ' active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tab-panels">
        {TABS.map((t) => (
          <div key={t.key} className={`tab-panel${active === t.key ? ' active' : ''}`}>
            <img src={t.img} alt={t.alt} />
          </div>
        ))}
      </div>

      <div className={`vastu-grid ${gridClass}`} ref={gridRef}>
        {infinia.vastuZones.map((z) => (
          <div className="vastu-card" key={z.name}>
            <span className="vastu-dir">{z.dir}</span>
            <h4>{z.name}</h4>
            <p>{z.desc}</p>
          </div>
        ))}
      </div>

      <div className={`dims ${dimsClass}`} ref={dimsRef}>
        {Object.entries(infinia.dims).map(([title, rows]) => (
          <div className="dims-col" key={title}>
            <h5>{title}</h5>
            {rows.map((r) => <p key={r}>{r}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
}
