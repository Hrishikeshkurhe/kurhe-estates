import React, { useEffect, useRef } from 'react';

const BARS = [
  { x: 6, y: 26, h: 34 }, { x: 17, y: 14, h: 46 }, { x: 28, y: 2, h: 58 },
  { x: 39, y: 10, h: 50 }, { x: 50, y: 0, h: 60 }, { x: 61, y: 10, h: 50 },
  { x: 72, y: 2, h: 58 }, { x: 83, y: 14, h: 46 }, { x: 94, y: 26, h: 34 },
];

// Signature element: the Kurhe skyline mark doubles as a reading-progress
// indicator. Each bar fills as the visitor scrolls through the page.
export default function ProgressMark() {
  const barsRef = useRef([]);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      const active = Math.round(pct * BARS.length);
      barsRef.current.forEach((el, i) => {
        if (el) el.style.transform = i < active ? 'scaleY(1)' : 'scaleY(0)';
      });
    };
    document.addEventListener('scroll', update, { passive: true });
    update();
    return () => document.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="progress-mark" aria-hidden="true">
      <svg viewBox="0 0 120 60" className="progress-svg">
        {BARS.map((b, i) => (
          <rect
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
            className="bar"
            x={b.x}
            y={b.y}
            width="6"
            height={b.h}
          />
        ))}
      </svg>
    </div>
  );
}
