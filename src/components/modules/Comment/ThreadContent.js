import React from "react";
import { Comment } from "antd";
import ThreadEditor from "./ThreadEditor";
import { useState, useEffect } from "react";
import axios from "axios";
import SecondThread from "./SecondThread";

import PostButtons from "../../Post/Post";
import Avatar from "./../../Avatar/Avatar"

function ThreadContent(props) {
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
        actions={[
          <PostButtons 
              bunker={thread}
              likeBunker={() => setShowEditor(!showEditor)} 
              dislikeBunker={() => setShowEditor(!showEditor)} 
              saveBunkers={() => setShowEditor(!showEditor)} 
              unsaveBunkers={() => setShowEditor(!showEditor)} 
              isSaved={false}  
          />,
        ]}
        author={<a>{thread.author.name}</a>}
        avatar={

          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={<p>{thread.body}</p>}
      >
        {showEditor ? (
          <ThreadEditor
            id={id}
            commentId={thread._id}
            loadThreads={loadThreads}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
        ) : (
          console.log()
        )}
        {secondThread.map((comment, idx) => {
          return <SecondThread key={idx} thread={comment} id={id} />;
        })}
      </Comment>
    </>
  );
}

export default ThreadContent;
