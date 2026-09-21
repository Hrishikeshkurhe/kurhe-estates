import React from 'react';

export default function Video() {
  return (
    <section className="video-page">
      <div className="video-hero">

        <div className="video-header">
          <p className="eyebrow">05 — Infinia</p>

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
            src="/assets/Infinia-video.mp4"
            title="Infinia Project Video"
            controls
            playsInline
            preload="metadata"
          />
        </div>

      </div>
    </section>
  );
}