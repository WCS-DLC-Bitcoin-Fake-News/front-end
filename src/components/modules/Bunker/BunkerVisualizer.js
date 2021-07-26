import PdfViewer from "../../PdfViewer";

const BunkerVisualizer = ({ source, printedSource, isThumb }) => {
  return printedSource.includes(".png") ? (
    <img src={`http://localhost:8000/public/${printedSource}`} alt={source} />
  ) : (
    <PdfViewer isThumb={isThumb} printedSource={printedSource} />
  );
};
export default BunkerVisualizer;
