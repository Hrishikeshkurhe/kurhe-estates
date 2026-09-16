import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo4.png" alt="Kurhe Estates" />
          {/* <p>KURHE ESTATES</p> */}
        </div>
        
        <p className="footer-copy">© {new Date().getFullYear()} Kurhe Estates. All rights reserved.</p>
      </div>
    </footer>
  );
}
