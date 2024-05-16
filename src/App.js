// App.js
import React from 'react';
import './App.css';
// import ImageUploadQr from './component/qrimage'
import QRCodeGenerator from './component/qrcode';
 // Update the import path

function App() {
  return (
    <div className="App">
      <QRCodeGenerator />
      {/* <ImageUploadQr/> */}
    </div>
  );
}

export default App;
