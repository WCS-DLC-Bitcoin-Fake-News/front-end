import Bunker from "./Bunker"
import PdfViewer from "../../PdfViewer";

const BunkerVisualizer = ({source, printedSource}) => {
    console.log(source, printedSource)

    !printedSource.length && <h1>Loadiing ?</h1>

    return(
        printedSource.includes(".png") 
        ? <img src={`http://localhost:8000/public/${printedSource}`} alt={source}/> 
        : <PdfViewer fileName={printedSource} />
    )
    
 }

 export default BunkerVisualizer