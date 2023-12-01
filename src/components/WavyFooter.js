import React from 'react';
import './WavyFooter.css';

const WavyFooter = () => {
  return (
    <div className="footer-container">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F2CD5D"
        fillOpacity="1"
        d="M0,64L80,64C160,64,320,64,480,80C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        transform={`translate(0, ${scrollY / 2}px)`}
      ></path>
    </svg> */}
    <svg viewBox="0 -20 700 110" width="100%" preserveAspectRatio="none">
      <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#ffeaac" />
      <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#F2CD5D" />
    </svg>

      <div className="footer-content">
        {/* Add your footer content here */}
        <p>Your footer content goes here.</p>
      </div>
    </div>
  );
};

export default WavyFooter;
