import React from 'react';

const ITEMS = [
  'Vastu-Aligned Layouts', '1375 Sq.Ft. Super Built-up', 'G + 6 Structure',
  '3 BHK Luxurious Flats', 'Amravati',
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <React.Fragment key={i}>
            <span>{item}</span><span>•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
