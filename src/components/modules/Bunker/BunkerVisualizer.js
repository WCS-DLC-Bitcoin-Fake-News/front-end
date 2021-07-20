import PdfViewer from "../../PdfViewer";

const BunkerVisualizer = ({ source, printedSource }) => {
  return printedSource.includes(".png") ? (
    <img src={`http://localhost:8000/public/${printedSource}`} alt={source} />
  ) : (
    <PdfViewer printedSource={printedSource} />
  );
};
export default BunkerVisualizer;
