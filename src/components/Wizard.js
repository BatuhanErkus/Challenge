import React, { useState } from 'react';
import PdfViewer from './Pdfviewer';

function Wizard(props) {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handlePinSubmit = (event) => {
    event.preventDefault();
    if (props.pin === '1337') {
      alert('Pin is correct!');
    } else {
      alert('Invalid pin!');
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <PdfViewer pdfUrl={props.pdfUrl} />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <form onSubmit={handlePinSubmit}>
            <label>
              Enter Pin:
              <input type="password" value={props.pin} onChange={props.onPinChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <button onClick={handlePrevious}>Previous</button>
        </div>
      )}
    </div>
  );
}

export default Wizard;
