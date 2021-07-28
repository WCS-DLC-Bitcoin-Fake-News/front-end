import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


// import colors from '../utils/colors';
const colors = {
  menu: "#43425D",
  menuSelect: "#00000024",
  menuSelectBorder: "#6C63FF",
  buttons: "#6C63FF",
  videospaceBackground: "rgb(240, 240, 240)",
  freeSlot: "#6C63FF",
  pendingSlot: "#6c63ff42",
  pendingStatusBackground: "rgb(253, 245, 232)",
  approvedStatusBackground: "rgb(230, 249, 238)",
  profileShadows: "#6c63ff42",
  chatMe: "#6c63ff42",
  chatOther: "rgb(230, 230, 230)",
  chatDisabled: "rgb(200, 200, 200)",
  lessonSlot: "#43425D",
  pageTitleText: "rgb(90, 90, 110)",
  subTitleText: "rgb(90, 90, 110)",
  dashboardBorder: "rgb(230, 230, 230)",
  contactsBorder: "rgb(230, 230, 230)",
  contactHover: "rgb(245, 245, 245)",
  contactSelected: "rgb(230, 230, 230)",
  modalBorder: "rgb(230, 230, 230)",
  widgetBackground: "rgb(240, 240, 240)",
  widgetFont: "rgb(215, 88, 70)",
  tableHeader: "#43425D",
  tableRows: "#6c63ff42",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const pdfWidth = 880;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-right: 50px;
`;

const DocumentContainer = styled.div`
  border: none;
  min-height: 270px; 
  width: ${props => props.isThumb ? "100%" : "900px"};
  
`;

const Author = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

const Title = styled.p`
  display: flex;
  font-size: 0.8rem;
  flex-wrap: wrap;
`;

const PdfViewer = ({ name, printedSource, author, isThumb }) => {
  console.log(printedSource)
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  useEffect(() => {
    const url = `http://localhost:8000/public/${printedSource}`;
    // const { token } = JSON.parse(localStorage.getItem("authToken"))
    axios({
      method: "get",
      url,
      responseType: "blob",
    })
      .then((res) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        setPdf(fileURL);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <DocumentContainer isThumb={isThumb} >
        {pdf !== null && (
          <>
            <Document className="nm-inset-white rounded-lg" file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber}  width={pdfWidth} />
            </Document >
          </>
        )}
      </DocumentContainer>
      <div className="flex justify-start">
        <p className="p-2 m-2">Page {pageNumber} of {numPages}</p>
      </div>
      <span className="nm-concave-white rounded-full p-2 m-2" onClick={(() => {setPageNumber(pageNumber - 1 )})}>previous</span>
      <span className="nm-concave-white rounded-full p-2 m-2" onClick={(() => {setPageNumber(pageNumber + 1 )})}>next</span>
      <Author>
        <b>{author}</b>
      </Author>
      <Title>
        <b>{name}</b>
        
      </Title>
    </Container>
  );
};

export default PdfViewer;