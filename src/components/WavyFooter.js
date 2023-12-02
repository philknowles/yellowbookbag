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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F2CD5D" d="M0,288L60,272C120,256,240,224,360,202.7C480,181,600,171,720,186.7C840,203,960,245,1080,256C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      <div className="footer-content">
        {/* Add your footer content here */}
        <p>Your footer content goes here.</p>
      </div>
    </div>
  );
};

export default WavyFooter;
