import React from "react";
import { useState, useEffect } from "react";
import { Comment, Avatar } from "antd";
import axios from "axios";
import ThreadContent from "./ThreadContent";
import ThreadEditor from "./ThreadEditor";
import Moment from "react-moment";

const CommentContent = (props) => {
  let { id, comment, loadComments } = props;

  const [showEditor, setShowEditor] = useState(false);
  const [thread, setThread] = useState([]);

  const loadThreads = async (commentId) => {
    try {
      const { data } = await axios.get(
        `/bunkers/${id}/comments/${commentId}/threads`
      );
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
        actions={[
          <span
            onClick={() => setShowEditor(!showEditor)}
            key="comment-nested-reply-to"
          >
            <Moment format="YYYY/MM/DD kk:mm" date={comment.createdAt}></Moment>
            <p>Reply to</p>
          </span>,
        ]}
        author={<a>{comment.author.name}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={<p>{comment.body}</p>}
      >
        {showEditor ? (
          <ThreadEditor
            id={id}
            commentId={comment._id}
            loadThreads={loadThreads}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
        ) : (
          console.log()
        )}
        {thread.map((comment, idx) => {
          return <ThreadContent key={idx} thread={comment} id={id} />;
        })}
      </Comment>
    </>
  );
};

export default CommentContent;
