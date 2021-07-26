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
import { upVote, downvote, fetchBunkerSaves } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import BunkerVisualizer from "../modules/Bunker/BunkerVisualizer";
import axios from "axios";

const PostButtons = ({ bunker, upVote, likeBunker, dislikeBunker, saveBunkers, unsaveBunkers, isSaved }) => {
  const user = useContext(UserContext)
  return(
    <>
    <hr></hr>

    <div className="flex flex-row my-2 items-stretch">
        <button
          onClick={(e) => e.stopPropagation() && likeBunker()}
          className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
          type="submit"
          >
          <span className="">
            <ChatBubbleOutlineIcon style={{ color: "#828282" }} />
          </span>
          <span className="hidden lg:block">Comments</span>
        </button>
        <button
            className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              upVote();
            }}>
            <span className="">
              <ThumbUpIcon style={{ color: "#828282" }} />
            </span>
            <span className="hidden lg:block">Upvote</span>
          </button>
          <button
            className="flex-1 mx-4 font-noto font-medium rounded-lg hover:bg-gray-400 cursor-pointer py-6"
            type="submit"
            onClick={(e) => {
              e.stopPropagation();
              dislikeBunker();
            }}>
            <span className="">
              <ThumbDownIcon style={{ color: "#828282" }} />
            </span>
            <span className="hidden lg:block">Downvote</span>
          </button>
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
      </>
  )
}


export default PostButtons;
