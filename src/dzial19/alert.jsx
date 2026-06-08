import React, { useState } from 'react';
import './app.css'; // Twoje style CSS

const CustomAlert = ({ message, onClose }) => {
  return (
    <>
    <div id="sukces">
        <p>Success</p>
      </div>
      <div id="ostrzez">
        <p>Warning</p>
      </div>
      <div id="niebezp">
        <p>Danger</p>
      </div>
      <button onClick={onClose}>OK</button>
    </>
      
      
  );
};

export default function Alert() {
  const [showAlert, setShowAlert] = useState(false);
  

  return (
    <div>
      <button onClick={() => setShowAlert(true)}>Pokaż alert</button>
      {showAlert && (
        <CustomAlert 
          message="Sukces" 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </div>
  );
}