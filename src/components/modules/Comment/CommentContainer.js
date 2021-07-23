import React from "react";
import CommentContent from "./CommentContent";
import CommentEditor from "./CommentEditor";
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
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
    <>
      <CommentEditor id={id} loadComments={loadComments} />
      <InfiniteScroll
        dataLength={comments.length}
        next={loadMoreComments}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {filtered.map((comment, idx) => {
          return (
            <CommentContent
              comment={comment}
              loadComments={loadComments}
              id={id}
              key={idx}
            />
          );
        })}
      </InfiniteScroll>
    </>
  );
};
export default CommentContainer;
