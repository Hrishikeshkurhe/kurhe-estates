import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo 2.jpeg" alt="Kurhe Estates" />
          {/* <p>KURHE ESTATES</p> */}
        </div>
        <p className="footer-disclaimer">
          This site is purely conceptual &amp; not a legal offering. Plans, specifications &amp;
          images are indicative; furniture &amp; accessories will not be provided. Dimensions may
          vary with construction contingencies. No details herein shall govern any sale/lease transaction.
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Kurhe Estates. All rights reserved.</p>
      </div>
    </footer>
  );
}
