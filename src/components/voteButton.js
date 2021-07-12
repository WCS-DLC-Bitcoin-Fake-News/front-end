import React, { useState } from "react";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

const VoteButtons = ({ post }) => {
  const handleClick = async (type) => {
    // Do calculation to save the vote.
    let upVotesCount = 0;
    let downVotesCount = 0;

    const date = new Date();

    if (type === "upvote") {
      upVotesCount = upVotesCount + 1;
    } else {
      downVotesCount = downVotesCount + 1;
    }
  };

  return (
    <>
      <IoArrowUpOutline onClick={() => handleClick("upvote")} />
      <IoArrowDownOutline onClick={() => handleClick("downvote")} />
    </>
  );
};

export default VoteButtons;
