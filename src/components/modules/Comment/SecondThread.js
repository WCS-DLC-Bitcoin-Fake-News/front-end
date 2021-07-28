import React from "react";
import { Comment } from "antd";
import ThreadEditor from "./ThreadEditor";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../Avatar/Avatar"
function SecondThread(props) {
  const [showEditor, setShowEditor] = useState(false);
  const [secondThread, setSecondThread] = useState([]);
  const { thread, id } = props;
  const loadThreads = async (commentId) => {
    console.log(commentId);
    try {
      const { data } = await axios.get(
        `/bunkers/${id}/comments/${commentId}/threads`
      );
      setSecondThread(data.threads);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (thread.threads.length) {
      loadThreads(thread._id);
    }
  }, []);

  return (
    <>
      <Comment
        actions={[<span key="comment-nested-reply-to"></span>]}
        author={<a>{thread.author.name}</a>}
        avatar={
          <Avatar
            src={thread.author.avatar}
            alt="User1"
          />
        }
        content={<p>{thread.body}</p>}
      >
        {/* {secondThread.map((comment) => {
          return <ThreadContent thread={comment} id={id} />;
        })} */}
      </Comment>
    </>
  );
}

export default SecondThread;
