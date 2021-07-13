import React from 'react';
import { Comment, Avatar } from "antd";

function ThreadContent(props) {
    const {thread} = props;
    return (
        <>
        <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>{thread.author.name}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="User1"
          />
        }
        content={
          <p>
            {thread.body}
          </p>
        }
      > 
      </Comment>
    </>
    )
}

export default ThreadContent
