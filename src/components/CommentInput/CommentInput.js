import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import postBunker from "../../Api/PostBunker";
import Avatar from "../Avatar/Avatar";

const CommentInput = ({ bunkerID }) => {
  console.log("In Comment Input ?")
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center">
        <div className="w-12 h-12 overflow-hidden rounded-lg m-4">
          <Avatar src={user && user.name} />
        </div>
        <div className="w-full">
          <form
            className="px-4"
            onSubmit={(e) => {
              e.preventDefault();
              postBunker(user.uid, comment, null, bunkerID);
              setComment("");
            }}>
            <input
              className="bg-gray-200 placeholder-gray-600  rounded-lg h-12 w-full font-noto text-sm font-medium"
              type="text"
              placeholder="Bunker your Reply"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
