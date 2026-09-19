import React, { useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const HIGHLIGHTS = [
  ['6', 'Residences'],
  ['G+6', 'Structure'],
  ['1375', 'Sq.Ft Super Built-Up Area'],
  ['1 Floor = 1 Flat', 'Concept'],
  ['3 BHK', 'Luxurious Flats'],
];

export default function AboutInfinia() {
  const [mediaRef, mediaClass] = useReveal('left');
  const [copyRef, copyClass] = useReveal('right');

  const videoRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  const handleVideoEnd = () => {
    setShowImage(true);

    setTimeout(() => {
      setShowImage(false);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 5000);
  };

  return (
    <section className="infinia-about" id="infinia">

      <div className={`infinia-about-media ${mediaClass}`} ref={mediaRef}>

        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          aria-label="Infinia luxury residence"
        >
          <source src="/assets/Infinia-video.mp4" type="video/mp4" />
        </video>

        <img
          className={`infinia-about-poster ${showImage ? 'visible' : ''}`}
          src="/assets/building-render.jpg"
          alt="Infinia tower render"
        />

        <div className="infinia-image-overlay"></div>

        <div className="infinia-image-label">
          <span>INFINIA</span>
          <span>THE ADDRESS</span>
        </div>

      </div>

      <div className={`infinia-about-content ${copyClass}`} ref={copyRef}>

        <div className="infinia-about-header">
          <p className="eyebrow">01 — The Address</p>
          <span className="infinia-about-number">01</span>
        </div>

        <h2>
          An infinite standard
          <br />
          <em>of luxury living</em>
        </h2>

        <div className="infinia-about-line"></div>

        <p className="infinia-about-lead">
          Experience a world where architecture becomes art and comfort
          becomes a way of life. Infinia sets a new benchmark for modern
          luxury in Amravati — an exceptional blend of style, space and
          prestige.
        </p>

        <div className="infinia-highlights">
          {HIGHLIGHTS.map(([value, label], index) => (
            <div className="infinia-highlight" key={label}>
              <span className="highlight-index">
                0{index + 1}
              </span>

              <div className="highlight-main">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>

              <div className="highlight-line"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}