import React, { useEffect, useRef } from 'react';

export default function Video() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="video-page" ref={sectionRef}>
      <div className="video-hero">

        <div className="video-header">
          <p className="eyebrow">06 — Infinia</p>

          <h1>
            Experience
            <em> Infinia.</em>
          </h1>

          <p className="video-intro">
            Discover the vision, architecture and lifestyle behind
            Infinia through our presentation film.
          </p>
        </div>

        <div className="video-frame">
          <video
            ref={videoRef}
            src="/assets/Infinia-video.mp4"
            title="Infinia Project Video"
            controls
            muted
            playsInline
            preload="auto"
          />
        </div>

      </div>
    </section>
  );
}