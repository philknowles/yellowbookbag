import React from 'react';
import './WavyHero.css'; // Make sure to import your CSS file for styling

const WavyHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          
          <h1>What's in Your Book Bag?</h1>
          <p><button className="button-color">Get Started</button></p>
        </div>
        <div className="hero-image">
          <img className="hero_image" src="./mascot_hero.jpg" />
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2CD5D" fill-opacity="0.67" d="M0,96L60,133.3C120,171,240,245,360,245.3C480,245,600,171,720,149.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      </div>
    </div>
  );
};

export default WavyHero;
