import React from "react";
import CommentContent from "./CommentContent";

import CommentEditor from "./CommentEditor"
import { Comment, Form, Button, List, Input, Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "./../../Avatar/Avatar"
import InfiniteScroll from "react-infinite-scroll-component";

const CommentContainer = (props) => {
  let [skipNumber, setSkipNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  let { id } = props;
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    try {
      const { data } = await axios.get(`/bunkers/${id}/comments`);

      setComments(data.comments);
    } catch (error) {
      console.log(error);
    }
  };
  const loadMoreComments = () => {
    setSkipNumber((skipNumber += 5));
    setTimeout(async () => {
      const { data } = await axios.get(
        `/bunkers/${id}/comments?skip=${skipNumber}`
      );
      if (data.comments.length === 0) {
        setHasMore(false);
      }
      setComments([...comments, ...data.comments]);
    }, 1500);
  };

  useEffect(() => {
    loadComments();
  }, []);
  const filtered = comments.filter((comment) => !comment.commentId);

  return (
    <div className="nm-flat-white rounded-lg">
      <CommentEditor id={id} loadComments={loadComments}/> 
      {filtered.map((comment) => {
        return (
          <CommentContent comment={comment} loadComments={loadComments} id={id}/>
        );
      })}
    </div>  
  );
};
export default CommentContainer;
