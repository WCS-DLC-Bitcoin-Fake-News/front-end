import { useEffect, useState } from "react";
import { fetchUser } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";

const Comments = ({ bunkerID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const localComments = []
        // axios call to get comments by bunkerId
        setComments(localComments);
   
      } catch (err) {
        console.log(err);
      }
    };

    getComments();
  }, []);

  return (
    <div className="bg-white rounded-lg">
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          
          <div className="rounded-lg" key={comment.id}>
            <div className="flex flex-row">
              <div className="m-2 w-12 h-12">
                <Avatar src={comment.author.avatar} />
              </div>
              <div className="flex flex-col  w-full">
                <div className="bg-gray-200 p-4">
                  <div className="p-2">
                    <p className="inline-block font-poppins font-medium">
                      {comment.author.name}
                    </p>
                    <p className="inline-block font-noto font-medium text-xs text-gray-600">
                      {comment.createdAt}{" "}
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="font-noto text-gray-700">{comment.text}</p>
                  </div>
                </div>
                {/* <div className="flex flex-row py-4">
                  <button type="submit">
                    <span>
                      <FavoriteBorderIcon />
                    </span>
                    Like
                  </button>
                  <p className="px-2">.</p>
                  <p className="font-noto font-semibold text-gray-400">
                    12k Likes
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
