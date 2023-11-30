import React from 'react';
import './WavyHero.css'; // Make sure to import your CSS file for styling

const WavyHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>What's in Your Book Bag?</h1>
        <p><button className="button-color">Get Started</button></p>
      </div>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="15 24 90 30" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          {/* Adding mountains */}
          {/* <image href="https://theyellowbookbag.codependentllc.com/assets/images/bg-hero-kids.jpg" x="30" y="10" width="40" height="40" /> */}
        </g>
      </svg>
    </div>
  );
};

export default WavyHero;
