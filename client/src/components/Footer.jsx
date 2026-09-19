import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">
            <img
              src="/assets/logo4.png"
              alt="Kurhe Estates"
            />
          </div>

          <p className="footer-tagline">
            Crafting landmarks. Creating legacies.
          </p>

        </div>


        {/* DIVIDER */}
        <div className="footer-divider"></div>


        {/* MIDDLE */}
        <div className="footer-middle">

          <div className="footer-column">
            <span className="footer-label">
              Kurhe Estates
            </span>

            <p>
              A boutique real estate company
              creating refined spaces and
              timeless addresses.
            </p>
          </div>


          <div className="footer-column">
            <span className="footer-label">
              Explore
            </span>

            <a href="#top">Home</a>
            <a href="#infinia">About Infinia</a>
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#contact">Contact</a>
          </div>


          <div className="footer-column">
            <span className="footer-label">
              Contact
            </span>

            <a href="tel:+917972383011">
              +91 7972 383011
            </a>

            <a href="mailto:kurheestates@gmail.com">
              kurheestates@gmail.com
            </a>

            <p>
              Amravati, Maharashtra
            </p>
          </div>


          <div className="footer-column footer-project">
            <span className="footer-label">
              Featured Address
            </span>

            <h3>INFINIA</h3>

            <span>
              The New Standard of
              <br />
              Imperial Living
            </span>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Kurhe Estates.
            All rights reserved.
          </p>

          <p>
            INFINIA · AMRAVATI
          </p>

        </div>

      </div>

    </footer>
  );
}