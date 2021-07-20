import Bunker from "../components/modules/Bunker/Bunker.js";
import { useParams } from "react-router";
import CommentContainer from "../components/modules/Comment/CommentContainer";

const BunkerDetail = () => {
  let { id } = useParams();
  // get params from url
  return (
    <>
      <Bunker id={id} />
      <CommentContainer id={id} />
    </>
  );
};
export default BunkerDetail;


