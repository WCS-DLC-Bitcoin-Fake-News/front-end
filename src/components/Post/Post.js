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
import { fetchBunker, fetchBunkerLikes, fetchBunkerSaves, upVoteBunker, downVoteBunker } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import BunkerVisualizer from "../modules/Bunker/BunkerVisualizer";
import axios from "axios";
import PostButtons from "./PostButtons";
import Wallet from "../Wallet/Wallet";
import { Upload } from "antd";
import useLocalStorage from "./../../hooks/useLocalStorage"

const Post = ( {setBunker, bunker, isThumb, userCanComment, setUserCanComment } ) => {
  const getUpvotesCount = () => {
    return 12
  }

  const getDownvotesCount = () => {
    return 37
  }

  const getWatchedCount = () => {
    return 37
  }

  const [upVotes, setUpVotes] = useState(getUpvotesCount());
  const [downVotes, setDownVotes] = useState(getDownvotesCount());
  const [watchedCount, setWatchedCount] = useState(getWatchedCount());

  const [isUpVotedByUser, setIsUpVotedByUser] = useState(false);
  const [isDownVotedByUser, setIsDownVotedByUser] = useState(false);
  const [isWatchedByUser, setIsWatchedByUser] = useState(false);

  const [comments, setComments] = useState(0);
  const [myBunker, setMyBunker] = useState(false);

  const { user, setUser } = useContext(UserContext);
  // const [user, setUser] = useLocalStorage("user");

  const reloadBunker = async () => {
    let updated = await fetchBunker(bunker._id);
    setBunker(updated);
  }


  const upVote = async (e) => {
    // e.stopPropagation();
    e.preventDefault()
    console.log(" iam in like bunker")
    console.log(bunker)
   
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
  
    setUpVotes((prev) => prev + 1);
    setUserCanComment(true);
    let newVote = await upVoteBunker(bunker._id, user._id);
    setUser({ ...user, wallet: newVote.votantNewWallet })
    reloadBunker();
    // window.scrollTo(0,document.body.scrollHeight);
   
    setIsUpVotedByUser(true); 

  };

  const downVote = async (e) => {
    e.preventDefault()

    console.log(" iam in dislike bunker ")

    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios col to downVote
    await downVoteBunker(bunker._id, user._id)
    setUserCanComment(true)
    reloadBunker()
    // window.scrollTo(0,document.body.scrollHeight);

    setDownVotes((prev) => prev - 1);
    setIsDownVotedByUser(false);
  };

  const saveBunkers = (e) => {
    e.preventDefault()

    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios call to bookmarks a bunker

    setWatchedCount((prev) => prev + 1);
    // setSaveDocID(id);
    setIsWatchedByUser(true);
  };

  const unsaveBunkers = (e) => {
    e.preventDefault()

    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    // axios call to unbookmark a bunker
    setWatchedCount((prev) => prev - 1);
    setIsWatchedByUser(false);
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
          <Avatar src={bunker.author.avatar} />
        </div>
        <div className="w-full">
          <Link href={`/${bunker.author.username}`}>
            <p className="font-cabin font-medium text-base my-1 hover:underline">
              {bunker.author.name}
            </p>
          </Link>
          <p className="font-cabin text-sm font-medium my-1 text-gray-700  ">
            @{bunker.author.username}
          </p>
          <p className="font-cabin text-gray-500 text-base my-1">
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
         
            <h1 className="font-montserrat font-bold text-2xl"
              href={bunker.imgLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}>
                {bunker.title}
              {/* <img
                className="w-full h-full object-cover"
                src={bunker.imgLink}
                alt="POST IMG HERE"
              /> */}
            </h1>
            {bunker.printedSource.length && <BunkerVisualizer isThumb={isThumb} source={bunker.source} printedSource={bunker.printedSource} />}
          </div>
        )}
        <article dangerouslySetInnerHTML={{__html: bunker.body}}></article>
        <div className="flex justify-between my-5">
          <div className="inline-flex justify-center w-2/5 rounded-full shadow-sm p-4 nm-convex-white border border-yellowBunker text-sm font-raleway font-medium text-gray-700 hover:bg-gray-50">
          {<Wallet text={`Stake`} count={bunker.stake + bunker.initialStake} />}
          </div>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {comments} Comments
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {upVotes} Upvote
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4">
            {downVotes} Downvote
          </p>
          <p className="mx-1 text-gray-500 font-raleway font-medium pt-4 pr-4">
            {watchedCount} Watched
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
        isWatchedByUser={isWatchedByUser}
        isUpVotedByUser={isUpVotedByUser}
        isDownVotedByUser={isDownVotedByUser}  
      />
      
    </div>
  );
};

export default Post;
