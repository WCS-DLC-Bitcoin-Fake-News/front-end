import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import firebase from "../../firebase/init";
import { deleteBunker } from "../../services/DeleteBunker";
import { fetchBunkerLikes, fetchBunkerSaves } from "../../services/FetchData";
import Avatar from "../Avatar/Avatar";

const Post = ({ bunker }) => {
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
    const { id } = await firebase.firestore().collection("likes").add({
      userID: user.uid,
      bunkerID: bunker.id,
    });
    setLikes((prev) => prev + 1);
    setLikeDocID(id);
    setIsLiked(true);
  };

  const dislikeBunker = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    firebase.firestore().collection("likes").doc(likeDocID).delete();
    setLikes((prev) => prev - 1);
    setIsLiked(false);
  };

  const saveBunkers = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    const { id } = firebase.firestore().collection("saves").add({
      bunkerID: bunker.id,
      userID: user.uid,
    });
    setSaves((prev) => prev + 1);
    setSaveDocID(id);
    setIsSaved(true);
  };

  const unsaveBunkers = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    firebase.firestore().collection("saves").doc(saveDocID).delete();
    setSaves((prev) => prev - 1);
    setIsSaved(false);
  };

  useEffect(async () => {
    setLikes((await fetchBunkerLikes(localBunker.id)).size);
    if (user) {
      async function checkForLikes() {
        const docs = await firebase
          .firestore()
          .collection("likes")
          .where("userID", "==", user.uid)
          .where("bunkerID", "==", bunker.id)
          .get();
        if (docs.size === 1) {
          setIsLiked(true);
          setLikeDocID(docs.docs[0].id);
        }
      }
      checkForLikes();

      async function checkForSaves() {
        const docs = await firebase
          .firestore()
          .collection("saves")
          .where("userID", "==", user.uid)
          .where("bunkerID", "==", bunker.id)
          .get();
        if (docs.size === 1) {
          setIsSaved(true);
          setSaveDocID(docs.docs[0].id);
        }
      }
      checkForSaves();

      async function getCommentsCount() {
        const res = await firebase
          .firestore()
          .collection("bunkers")
          .where("parentBunker", "==", bunker.id)
          .get();
        setComments(res.size);
      }
      getCommentsCount();
      if (user.uid === bunker.author.uid) {
        setMyBunker(true);
      }
    }
    setSaves((await fetchBunkerSaves(localBunker.id)).size);
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
          {localBunker.text}
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
