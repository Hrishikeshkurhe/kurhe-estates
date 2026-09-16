import React from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { infinia } from '../data/infinia.js';

const RESIDENCE_PLANS = [
  {
    key: 'typical',
    number: '01',
    label: 'Typical Floor Plan',
    title: 'Thoughtfully planned residences',
    description:
      'The typical floor plan is designed around spacious 3 BHK living, with every residence planned to provide privacy, natural light and efficient use of space.',
    img: '/assets/floorplan-typical.jpg',
    alt: 'Typical 1st to 6th floor plan with Vastu zones',
    features: [
     
    ],
  },
  {
    key: 'cut',
    number: '02',
    label: '3 BHK Cut Section',
    title: 'A home designed in layers',
    description:
      'The cut section gives a clear view of the residence planning and vertical organization, showcasing how each 3 BHK home is thoughtfully arranged for comfortable everyday living.',
    img: '/assets/floorplan-cutsection.jpg',
    alt: '3 BHK cut section — flat no. 101 to 601',
    features: [
 
    ],
  },
  {
    key: 'ground',
    number: '03',
    label: 'Ground / Parking',
    title: 'Convenience from the ground up',
    description:
      'The ground and parking plan is carefully organized to provide smooth movement, convenient access and a well-planned arrival experience for residents and their guests.',
    img: '/assets/floorplan-ground.jpg',
    alt: 'Ground floor parking plan',
    features: [
    
    ],
  },
];

export default function Residences() {
  const [headRef, headClass] = useReveal();
  const [gridRef, gridClass] = useReveal();
  const [dimsRef, dimsClass] = useReveal();

  return (
    <section className="section" id="residences">

      {/* Section Heading */}
    <div
  className={`section-head residences-head ${headClass}`}
  ref={headRef}
>
  <p className="eyebrow">02 — The Residences</p>

  <h2>
    Where Energy Meets Design,
    <br />
    <em>built on Vastu principles</em>
  </h2>

  <p className="section-lede">
    Every Infinia residence is oriented to the eight energies of Vastu
    Shastra — from the Ishanya puja corner to the Nairutya master retreat —
    so the plan supports the life lived inside it, not just its square
    footage.
  </p>
</div>

      {/* All Three Floor Plans */}
      <div className="residence-plans">

        {RESIDENCE_PLANS.map((plan, index) => (
          <div
            className={`residence-plan ${
              index % 2 !== 0 ? 'reverse' : ''
            }`}
            key={plan.key}
          >

            {/* Image */}
            <div className="residence-plan-media">
              <img
                src={plan.img}
                alt={plan.alt}
                loading="lazy"
              />
            </div>

            {/* Details */}
            <div className="residence-plan-content">

              <p className="eyebrow">
                {plan.number} — {plan.label}
              </p>

              <h3>{plan.title}</h3>

              <p className="residence-plan-description">
                {plan.description}
              </p>

              <ul className="residence-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={feature}>
                    <span>
                      {String(featureIndex + 1).padStart(2, '0')}
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>

       {/* Dimensions */}
      <div
        className={`dims ${dimsClass}`}
        ref={dimsRef}
      >
        {Object.entries(infinia.dims).map(([title, rows]) => (
          <div className="dims-col" key={title}>

            <h5>{title}</h5>

            {rows.map((r) => (
              <p key={r}>{r}</p>
            ))}

          </div>
        ))}
      </div>

      {/* Vastu Planning */}
      <div className="vastu-section">

        <div className="vastu-heading">
          <p className="eyebrow">Vastu Planning</p>

          <h2>
            Designed in harmony with Vastu
          </h2>
        </div>

        <div
          className={`vastu-grid ${gridClass}`}
          ref={gridRef}
        >
          {infinia.vastuZones.map((z) => (
            <div className="vastu-card" key={z.name}>
              <span className="vastu-dir">{z.dir}</span>

              <h4>{z.name}</h4>

              <p>{z.desc}</p>
            </div>
          ))}
        </div>

      </div>

     

    </section>
  );
}