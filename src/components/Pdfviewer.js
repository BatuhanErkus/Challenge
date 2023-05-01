import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@material-ui/core";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfDocument, setPdfDocument] = useState(null);

  const onLoadSuccess = (pdf) => {
    setPdfDocument(pdf);
    setNumPages(pdf.numPages);
  };

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Document file={props.pdfUrl} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
        <Button variant="contained" onClick={handlePreviousPage}>
          Previous Page
        </Button>
        <Button variant="contained" onClick={handleNextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default PdfViewer;
