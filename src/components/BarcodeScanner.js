// BarcodeScanner.js

import React, { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onBarcodeScanned }) => {
  useEffect(() => {
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
  }, [onBarcodeScanned]);

  return <div id="barcode-scanner"></div>;
};

export default BarcodeScanner;
