import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

const RESIDENCE_PLANS = [
  {
    key: 'typical',
    number: '01',
    label: 'Typical Floor Plan',
    title: 'Thoughtfully planned residences',
    description: 'The typical floor plan is designed around spacious 3 BHK living, with every residence planned to provide privacy, natural light and efficient use of space.',
    img: '/assets/floorplan-typical.jpg',
    alt: 'Typical 1st to 6th floor plan with Vastu zones'
  },
  {
    key: 'cut',
    number: '02',
    label: '3 BHK Cut Section',
    title: 'A home designed in layers',
    description: 'The cut section gives a clear view of the residence planning and vertical organization, showcasing how each 3 BHK home is thoughtfully arranged for comfortable everyday living.',
    img: '/assets/floorplan-cutsection.jpg',
    alt: '3 BHK cut section — flat no. 101 to 601'
  },
  {
    key: 'ground',
    number: '03',
    label: 'Ground / Parking',
    title: 'Convenience from the ground up',
    description: 'The ground and parking plan is carefully organized to provide smooth movement, convenient access and a well-planned arrival experience for residents and their guests.',
    img: '/assets/floorplan-ground.jpg',
    alt: 'Ground floor parking plan'
  }
];

export default function Residences() {
  const [headRef, headClass] = useReveal();
  const [plansRef, plansClass] = useReveal();
  const [dimsRef, dimsClass] = useReveal();
  const [vastuRef, vastuClass] = useReveal();

  return (
    <section className="residences-section" id="residences">

      <div className={`residences-intro ${headClass}`} ref={headRef}>
        <div className="residences-intro-top">
          <p className="eyebrow">02 — The Residences</p>
          <span className="residences-intro-index">INFINIA / 02</span>
        </div>

       <h2>Where energy meets design, <em>built on Vastu principles.</em></h2>

        <div className="residences-intro-bottom">
          <span className="residences-intro-line"></span>
          <p>
            Every Infinia residence is oriented to the eight energies of Vastu
            Shastra — thoughtfully planned around light, privacy, movement and
            everyday living.
          </p>
        </div>
      </div>

      <div className={`residence-plans ${plansClass}`} ref={plansRef}>
        {RESIDENCE_PLANS.map((plan, index) => (
          <article
            className={`residence-plan ${index % 2 !== 0 ? 'reverse' : ''}`}
            key={plan.key}
          >
            <div className="residence-plan-media">
              <img src={plan.img} alt={plan.alt} loading="lazy" />
              <div className="residence-media-shade"></div>
              <div className="residence-media-top">
                <span>{plan.number}</span>
                <span>INFINIA</span>
              </div>
              <div className="residence-media-bottom">
                <span>ARCHITECTURAL PLAN</span>
                <span>VIEW / {plan.number}</span>
              </div>
              <div className="residence-media-frame"></div>
            </div>

            <div className="residence-plan-content">
              <div className="residence-content-number">{plan.number}</div>

              <p className="residence-plan-label">
                {plan.label}
              </p>

              <h3>{plan.title}</h3>

              <div className="residence-content-line"></div>

              <p className="residence-plan-description">
                {plan.description}
              </p>

              <div className="residence-plan-meta">
                <span>INFINIA</span>
                <span>3 BHK RESIDENCES</span>
              </div>

              <div className="residence-content-arrow">↗</div>
            </div>
          </article>
        ))}
      </div>

      <div className={`residence-dimensions ${dimsClass}`} ref={dimsRef}>
        <div className="dimensions-heading">
          <p className="eyebrow">Technical Overview</p>
          <h3>Dimensions details</h3>
        </div>

        <div className="dimensions-grid">
          {Object.entries(infinia.dims).map(([title, rows]) => (
            <div className="dimension-group" key={title}>
              <div className="dimension-group-head">
                <span>+</span>
                <h4>{title}</h4>
              </div>

              <div className="dimension-values">
                {rows.map((row) => (
                  <p key={row}>{row}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vastu-section">
   <div className="vastu-heading"><div><p className="eyebrow">Vastu Planning</p><h2>Designed in harmony <em>with Vastu.</em></h2></div></div>

        <div className={`vastu-grid ${vastuClass}`} ref={vastuRef}>
          {infinia.vastuZones.map((zone, index) => (
            <div className="vastu-card" key={zone.name}>
              <div className="vastu-card-top">
                <span>0{index + 1}</span>
                <strong>{zone.dir}</strong>
              </div>

              <div className="vastu-card-body">
                <h4>{zone.name}</h4>
                <p>{zone.desc}</p>
              </div>

              <span className="vastu-card-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}