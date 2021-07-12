import React from "react";
import { Comment, Avatar } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentContent = ({ children }, props) => {
  let { id } = props;
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    try {
      const { data } = await axios.get(`bunkers/${id}/comments`);
      setComments([...data]);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    loadComments();
  }, []);
  return (
    <>
      {comments.map((comment) => {
        console.log(comment);
      })}
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>User1</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    </>
  );
};

export default CommentContent;
