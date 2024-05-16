// qrcode.js
import React, { useState } from 'react';
import { QRCode } from 'react-qrcode';
import './qrcode.css'; // Import the CSS file

function QRCodeGenerator() {
    
  const [inputText, setInputText] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setQrCodeValue(newText); // Update QR code value whenever the input text changes
  };

  return (
    <div className="qrcode-container">
        <h1>QR Code </h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        className="qrcode-input"
      />
      {inputText && <QRCode value={qrCodeValue} className="qrcode" />} {/* Conditionally render QRCode component */}
    </div>
  );
}

export default QRCodeGenerator;
