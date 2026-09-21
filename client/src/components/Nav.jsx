import React, { useEffect, useState } from 'react';

const LINKS = [
  ['#infinia', 'Infinia'],
  ['#residences', 'Residences'],
  // ['#specifications', 'Specifications'],
  ['#amenities', 'Amenities'],
    ['#location', 'Location'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>

      <div className="nav-inner">

        {/* LOGO */}
        <a
          href="#top"
          className="nav-brand"
          onClick={() => setOpen(false)}
        >
          <img
            src="/assets/logo4.png"
            alt="Kurhe Estates"
            className="nav-logo"
          />
        </a>


        {/* NAVIGATION */}
        <nav className={`nav-links${open ? ' open' : ''}`}>

          <div className="nav-links-inner">

            {LINKS.map(([href, label], index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ '--nav-index': index }}
              >
                <span className="nav-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="nav-label">
                  {label}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              <span>Enquire</span>
              <strong>↗</strong>
            </a>

          </div>

        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className={`nav-burger${open ? ' active' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}