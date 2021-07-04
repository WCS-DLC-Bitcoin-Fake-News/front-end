import Bunker from "../components/Bunker"
import { useParams } from "react-router";

const BunkerDetail = () => {
    const params = useParams
    // continue to use params with handleClick to redirect to bunkerDetail 
    return <Bunker />;
  };
  export default BunkerDetail;