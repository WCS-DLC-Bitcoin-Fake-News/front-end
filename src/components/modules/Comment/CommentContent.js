import React from "react";
import {useState, useEffect} from "react";
import { Comment, Avatar } from "antd";
import axios from "axios";
import ThreadContent from "./ThreadContent";

const CommentContent = (props) => {
  let { id, comment } = props;
  const [thread, setThread] = useState([]);

  const loadThreads = async (commentId) => {
    console.log(commentId)
    try {
      const { data }  = await axios.get(`/bunkers/${id}/comments/${commentId}/threads`)
      console.log(data);
      setThread([data]);
      console.log(thread)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   if(comment.threads.length) {
     loadThreads(comment._id)
   }
  },[]);

  return (
    <>
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>{comment.author.name}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={
          <p>
            {comment.body}
          </p>
        }
      > 
      {thread.map((comment) => {
        return <ThreadContent thread={comment}/>
      })}
      </Comment>
    </>
  );
};


export default CommentContent;
