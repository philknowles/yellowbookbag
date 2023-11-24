// BarcodeScanner.js

import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onBarcodeScanned }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [manualInput, setManualInput] = useState('');

  useEffect(() => {
    const initScanner = async () => {
      try {
        await Quagga.init({
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#barcode-scanner'),
            constraints: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          },
          decoder: {
            readers: ['ean_reader'],
          },
        });

        Quagga.onDetected((result) => {
          const scannedBarcode = result.codeResult.code;
          onBarcodeScanned(scannedBarcode);
          setShowVideo(false); // Turn off video after scanning
          Quagga.stop();
        });

        Quagga.start();

        // Clean up when the component is unmounted
        return () => {
          Quagga.stop();
        };
      } catch (error) {
        console.error('Error initializing Quagga:', error);
      }
    };

    if (showVideo) {
      initScanner();
    }

    return () => {
      // Clean up if the component is unmounted
      Quagga.stop();
    };
  }, [onBarcodeScanned, showVideo]);

  const handleManualInputChange = (event) => {
    setManualInput(event.target.value);
  };

  const handleManualInputSubmit = (event) => {
    event.preventDefault();
    onBarcodeScanned(manualInput);
    setManualInput('');
  };

  return (
    <div>
      {showVideo ? (
        <div id="barcode-scanner"></div>
      ) : (
        <form onSubmit={handleManualInputSubmit}>
          <label>
            Manual Input:
            <input
              type="text"
              value={manualInput}
              onChange={handleManualInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default BarcodeScanner;
