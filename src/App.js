import React, { useState } from 'react';
import Wizard from './components/Wizard';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pin, setPin] = useState('');

  const handlePdfSelect = (event) => {
    setPdfUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  return (
    <div className="App">
      <h1>Select PDF File</h1>
      <input type="file" onChange={handlePdfSelect} />
      {pdfUrl && (
        <Wizard pdfUrl={pdfUrl} pin={pin} onPinChange={handlePinChange} />
      )}
    </div>
  );
}

export default App;
