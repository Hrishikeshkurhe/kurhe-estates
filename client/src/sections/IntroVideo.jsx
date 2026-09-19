import React, { useEffect, useState } from 'react';

export default function IntroVideo() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="intro-video">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setShow(false)}
      >
        <source src="/assets/logovideo.mp4" type="video/mp4" />
      </video>

      {/* <div className="intro-video-overlay">
        <img
          src="/assets/logo.png"
          alt="Kurhe Estates"
        />
      </div> */}
    </div>
  );
}