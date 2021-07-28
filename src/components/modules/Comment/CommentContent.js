import React from "react";
import { useState, useEffect } from "react";
import { Comment } from "antd";
import axios from "axios";
import ThreadContent from "./ThreadContent";
import ThreadEditor from "./ThreadEditor"
import PostButtons from "../../Post/PostButtons";
import Avatar from "./../../Avatar/Avatar"
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
    <div className="rounded-lg flex flex-row items-center">
      <Comment
        actions={[
          <PostButtons 
            onClick={() => setShowEditor(true)}
            bunker={() => setShowEditor(!showEditor)}
            startComment={() => setShowEditor(!showEditor)}
            likeBunker={() => setShowEditor(!showEditor)} 
            dislikeBunker={() => setShowEditor(!showEditor)} 
            saveBunkers={() => setShowEditor(!showEditor)} 
            unsaveBunkers={() => setShowEditor(!showEditor)} 
            isSaved={false}  
           />
        ]}
        author={<a>{comment.author.name}</a>}
        avatar={
          <div className="w-12 h-12 overflow-hidden rounded-lg m-4">
            <Avatar
                src={comment.author.avatar}
                alt="User1"
              />
          </div>
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
    </div>
  );
};

export default CommentContent;
