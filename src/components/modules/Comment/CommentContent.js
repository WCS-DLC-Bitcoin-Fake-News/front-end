import React from "react";
import { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";
import axios from "axios";
import ThreadContent from "./ThreadContent";
import ThreadEditor from "./ThreadEditor"

const CommentContent = (props) => {
  let { id, comment, loadComments } = props;
  console.log(id);
  const [showEditor, setShowEditor] = useState(false);
  const [thread, setThread] = useState([]);

  const loadThreads = async (commentId) => {
    console.log(commentId);
    try {
      const { data } = await axios.get(
        `/bunkers/${id}/comments/${commentId}/threads`
      );
      console.log(data);
      setThread(data.threads);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    if (comment.threads.length) {
      loadThreads(comment._id);
    }
  }, []);

  return (
    <>
      <Comment
        actions={[<span onClick={() => setShowEditor(!showEditor)}key="comment-nested-reply-to">Reply to</span>]}
        author={<a>{comment.author.name}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={<p>{comment.body}</p>}
      >
        {showEditor ? <ThreadEditor id={id} commentId={comment._id} loadThreads={loadThreads}/> : console.log()}
        {thread.map((comment) => {
          return <ThreadContent thread={comment} />;
        })}
      </Comment>
    </>
  );
};

export default CommentContent;
