import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { deleteBunker } from "../../Api/DeleteBunker";
import { fetchBunkerLikes, fetchBunkerSaves } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import BunkerVisualizer from "../modules/Bunker/BunkerVisualizer";
const Post = ( { bunker } ) => {
  console.log("bunker?", bunker)
  const { user } = useContext(UserContext);
  const [localBunker, setLocalBunker] = useState(bunker);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeDocID, setLikeDocID] = useState("");

  const [saves, setSaves] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [saveDocID, setSaveDocID] = useState("");

  const [comments, setComments] = useState(0);

  const [myBunker, setMyBunker] = useState(false);

  const likeBunker = async () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios col to upVote

    setLikes((prev) => prev + 1);
    // setLikeDocID(id);
    setIsLiked(true);
  };

  const dislikeBunker = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios col to downVote
    setLikes((prev) => prev - 1);
    setIsLiked(false);
  };

  const saveBunkers = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios call to bookmarks a bunker

    setSaves((prev) => prev + 1);
    // setSaveDocID(id);
    setIsSaved(true);
  };

  const unsaveBunkers = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios call to unbookmark a bunker
    setSaves((prev) => prev - 1);
    setIsSaved(false);
  };

  useEffect(async () => {
    // setLikes((await fetchBunkerLikes(localBunker.id)).size);
    if (user) {
      async function checkForLikes(bunkerId) {
  
      }
      checkForLikes();

      async function checkForSaves() {
      // axios call to count how many bookmarks on a bunker

        
      }
      checkForSaves();

      async function getCommentsCount() {
        // axios call to get the number of comments
       
      }
      getCommentsCount();
      // if (user.uid === bunker.author.uid) {
      //   setMyBunker(true);
      // }
    }
    // setSaves((await fetchBunkerSaves(localBunker.id)).length);
  }, []);

  return (
    <div className="p-5 bg-white rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center content-evenly">
        <div className="w-16 h-16 overflow-hidden rounded-lg m-4">
          <Avatar src={localBunker.author.profilePicture} />
        </div>
        <div className="w-full">
          <Link href={`/${bunker.author.username}`}>
            <p className="font-poppins font-medium text-base my-1 hover:underline">
              {localBunker.author.name}
            </p>
          </Link>
          <p className="font-poppins text-sm font-medium my-1 text-gray-700  ">
            @{localBunker.author.username}
          </p>
          <p className="font-noto text-gray-500 text-base my-1">
            {localBunker.createdAt}
          </p>
        </div>
        {myBunker && (
          <div
            className="w-16 h-16 flex flex-col justify-center items-center"
            onClick={(e) => {
              e.stopPropagation();
              const answer = alert(
                "Are you sure you want to delete this bunker?"
              );
              if (answer) {
                deleteBunker(bunker.id);
              }
            }}>
            <DeleteIcon htmlColor={"red"} fontSize="medium" />
          </div>
        )}
      </div>
      <span>
        <div className="font-noto text-base font-normal pt-4">
          {localBunker.body}
          {localBunker.printedSource.length && <BunkerVisualizer source={localBunker.source} printedSource={localBunker.printedSource} />}

        </div>
        {bunker.imgLink && (
          <div
            className="my-5 overflow-hidden rounded-lg"
            style={{
              height: "350px",
            }}>
            <a
              href={localBunker.imgLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}>
              <img
                className="w-full h-full object-cover"
                src={localBunker.imgLink}
                alt="POST IMG HERE"
              />
            </a>
          </div>
        )}
        <div className="flex flex-row justify-end my-5">
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {comments} Comments
          </p>
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {likes} Likes
          </p>
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {saves} Saved
          </p>
        </div>
      </span>
      <hr />
      <div className="flex flex-row my-2 items-stretch">
        <button
          className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
          type="submit">
          <span className="">
            <ChatBubbleOutlineIcon style={{ color: "#828282" }} />
          </span>
          <span className="hidden lg:block">Comments</span>
        </button>
        {isLiked ? (
          <button
            className="flex-1 mx-4 font-noto font-medium text-red-600 rounded-lg hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              dislikeBunker();
            }}>
            <span className="">
              <FavoriteIcon style={{ color: "#e53e3e" }} />
            </span>
            <span className="hidden lg:block">Liked</span>
          </button>
        ) : (
          <button
            className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              likeBunker();
            }}>
            <span className="">
              <FavoriteBorderIcon style={{ color: "#828282" }} />
            </span>
            <span className="hidden lg:block">Likes</span>
          </button>
        )}
        {isSaved ? (
          <button
            className="flex-1 mx-4 font-noto font-medium rounded-lg text-blue-600 hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              unsaveBunkers();
            }}>
            <span className="">
              <BookmarkIcon style={{ color: "#2D9CDB" }} />
            </span>
            <span className="hidden lg:block">Saved</span>
          </button>
        ) : (
          <button
            className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              saveBunkers();
            }}>
            <span className="">
              <BookmarkBorderIcon style={{ color: "#828282" }} />
            </span>
            <span className="hidden lg:block">Save</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
