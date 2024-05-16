// import React, { useState, useRef } from 'react';
// import QRCode from 'react-qr-code';
// import FileReader from 'react-file-reader';

// const ImageUploadQr = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [qrData, setQrData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const fileInputRef = useRef(null); // Ref for the file input element

//   const handleImageChange = (event) => {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       const allowedExtensions = ['image/jpeg', 'image/png', 'image/gif'];

//       if (!allowedExtensions.includes(file.type)) {
//         setErrorMessage('Invalid file type. Please select a JPEG, PNG, or GIF image.');
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setSelectedImage(e.target.result);
//         // Generate QR code data (replace with your actual logic)
//         setQrData(`QR code data for image: ${e.target.result}`);
//         setErrorMessage(null);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="image-upload-qr">
//       <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} />
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       {selectedImage && (
//         <>
//           <img src={selectedImage} alt="Selected Image" />
//           {qrData && <QRCode value={qrData} />}
//         </>
//       )}
//     </div>
//   );
// };

// export default ImageUploadQr;
