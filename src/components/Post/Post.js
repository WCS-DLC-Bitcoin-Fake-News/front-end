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
import { fetchBunker, fetchBunkerLikes, fetchBunkerSaves, upVoteBunker } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import BunkerVisualizer from "../modules/Bunker/BunkerVisualizer";
import axios from "axios";
import PostButtons from "./PostButtons";
import Wallet from "../Wallet/Wallet";

const Post = ( { setBunker, bunker, isThumb } ) => {
  console.log("bunker?", bunker)
  const { user } = useContext(UserContext);
  // const [bunker, setLocalBunker] = useState(bunker);

  const [votes, setVotes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeDocID, setLikeDocID] = useState("");

  const [saves, setSaves] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [saveDocID, setSaveDocID] = useState("");

  const [comments, setComments] = useState(0);
  const [myBunker, setMyBunker] = useState(false);

  const upVote = async () => {
    console.log(" iam in like bunker ")
    console.log(bunker)
    
  
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
   
    await upVoteBunker( bunker._id, user._id )


    setVotes((prev) => prev + 1);
    let updated = await fetchBunker( bunker._id )
    setBunker(updated)

    // setLikeDocID(id);
    setIsLiked(true);
  };

  const downVote = () => {
    console.log(" iam in dislike bunker ")

    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios col to downVote
    setVotes((prev) => prev - 1);
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
    // setVotes((await fetchBunkerLikes(bunker.id)).size);
    if (user) {
      async function checkForVotes(bunkerId) {
  
      }
      checkForVotes();

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
        <div className="flex justify-between my-5">
          <div className="inline-flex justify-center w-2/5 rounded-full shadow-sm p-4 nm-convex-white border border-yellowBunker text-sm font-raleway font-medium text-gray-700 hover:bg-gray-50">
          {<Wallet text={`Stake`} count={bunker.stake + bunker.initialStake} />}
          </div>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {comments} Comments
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {votes} Upvote
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {votes} Downvote
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4 pr-4">
            {saves} Saved
          </p>
        </div>
      </span>
      <hr />

      <PostButtons
        bunker={bunker}
        upVote={upVote} 
        downVote={downVote} 
        saveBunkers={saveBunkers} 
        unsaveBunkers={unsaveBunkers} 
        isSaved={isSaved}  
      />
      
    </div>
  );
};

export default Post;
