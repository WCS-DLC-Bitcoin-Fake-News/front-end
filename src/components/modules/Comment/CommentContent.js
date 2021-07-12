import React from "react";
import { Comment, Avatar } from "antd";

const CommentContent = ({ children }, props) => {
  let { id } = props;

  return (
    <>
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
