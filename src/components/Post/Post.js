import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { deleteBunker } from "../../Api/DeleteBunker";
import { fetchBunkerLikes, fetchBunkerSaves } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import BunkerVisualizer from "../modules/Bunker/BunkerVisualizer";
import axios from "axios";
import PostButtons from "./PostButtons";


const Post = ( { bunker, isThumb } ) => {
  console.log("bunker?", bunker)
  const { user } = useContext(UserContext);
  // const [bunker, setLocalBunker] = useState(bunker);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeDocID, setLikeDocID] = useState("");

  const [saves, setSaves] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [saveDocID, setSaveDocID] = useState("");

  const [comments, setComments] = useState(0);
  const [myBunker, setMyBunker] = useState(false);

  const likeBunker = async () => {
    console.log(" iam in like bunker ")
    console.log(bunker)
    const upvote = {
      pro : true,
      author: bunker.author
    }
  
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios col to upVote

    const res = await axios.post(
      `/bunkers/${bunker.id}/votes`,
      upvote,
    );

    return res.data;

    setLikes((prev) => prev + 1);
    // setLikeDocID(id);
    setIsLiked(true);
  };

  const dislikeBunker = () => {
    console.log(" iam in dislike bunker ")

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
    // setLikes((await fetchBunkerLikes(bunker.id)).size);
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
    // setSaves((await fetchBunkerSaves(bunker.id)).length);
  }, []);

  return (
    <div className="p-5 nm-flat-white rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center content-evenly">
        <div className="w-16 h-16 overflow-hidden rounded-lg m-4">
          <Avatar src={bunker.author.name} />
        </div>
        <div className="w-full">
          <Link href={`/${bunker.author.username}`}>
            <p className="font-poppins font-medium text-base my-1 hover:underline">
              {bunker.author.name}
            </p>
          </Link>
          <p className="font-poppins text-sm font-medium my-1 text-gray-700  ">
            @{bunker.author.username}
          </p>
          <p className="font-noto text-gray-500 text-base my-1">
            {bunker.createdAt}
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

        </div>
        {bunker.printedSource && (
          <div
            className="my-5 overflow-hidden rounded-lg"
            style={isThumb && ({
              height: "350px",
            })}>
         
            <a
              href={bunker.imgLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}>
                {bunker.title}
                <div dangerouslySetInnerHTML={{__html: bunker.body}}></div>
                {bunker.printedSource.length && <BunkerVisualizer isThumb={isThumb} source={bunker.source} printedSource={bunker.printedSource} />}
              {/* <img
                className="w-full h-full object-cover"
                src={bunker.imgLink}
                alt="POST IMG HERE"
              /> */}

            </a>
          </div>
        )}
        <div className="flex flex-row justify-end my-5">
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {comments} Comments
          </p>
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {likes} Upvote
          </p>
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {likes} Downvote
          </p>
          <p className="mx-1 text-gray-500 font-noto font-medium">
            {saves} Saved
          </p>
        </div>
      </span>
      <hr />

      <PostButtons
        bunker={bunker}
        likeBunker={likeBunker} 
        dislikeBunker={dislikeBunker} 
        saveBunkers={saveBunkers} 
        unsaveBunkers={unsaveBunkers} 
        isSaved={isSaved}  
      />
      
    </div>
  );
};

export default Post;
