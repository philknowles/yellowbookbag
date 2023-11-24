// BarcodeScanner.js

import React, { useEffect } from 'react';
import Quagga from 'quagga';
import './BarcodeScanner.css'; // Import a CSS file for styling

const BarcodeScanner = ({ onBarcodeScanned }) => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.querySelector('#barcode-scanner'),
        },
        decoder: {
          readers: ['ean_reader'],
        },
      }, (err) => {
        if (err) {
          console.error('Error initializing Quagga:', err);
          return;
        }
        Quagga.start();
      });

      Quagga.onDetected((result) => {
        const scannedBarcode = result.codeResult.code;
        onBarcodeScanned(scannedBarcode);
        Quagga.stop();
      });

      return () => {
        Quagga.stop();
      };
    }
  }, [onBarcodeScanned]);

  return (
    <div>
      {window.innerWidth <= 768 && <div id="barcode-scanner"></div>}
    </div>
  );
};

export default BarcodeScanner;
