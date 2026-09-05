import React, { useEffect, useState } from 'react';

const LINKS = [
  ['#infinia', 'Infinia'],
  ['#residences', 'Residences'],
  ['#amenities', 'Amenities'],
  ['#specifications', 'Specifications'],
  ['#location', 'Location'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <img src="/assets/logo 2.jpeg" alt="Kurhe Estates" className="nav-logo" />
          {/* <span className="nav-brand-text">KURHE <em>ESTATES</em></span> */}
        </a>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
        <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
