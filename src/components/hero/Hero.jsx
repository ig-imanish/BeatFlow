import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="left">
        <h1>Feel the Beat.</h1>
        <h2>Anytime, Anywhere.</h2>
        <p>
          Play over 100 million songs, always ad‑free. Hear next-level sound
          quality with Spatial Audio and lossless audio.
        </p>

        <a href="#premium" className="cta">
          Start Listening
        </a>
      </div>

      <div className="right">
        <img
          src="https://i.pinimg.com/736x/c2/e7/50/c2e750b5b130c97225d85516f16a2111.jpg"
          alt="Person enjoying music with headphones"
        />
      </div>
    </section>
  );
}
