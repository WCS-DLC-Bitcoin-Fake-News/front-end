import React from 'react';
import { Comment, Avatar } from "antd";
import ThreadEditor from './ThreadEditor';
import {useState, useEffect} from 'react';
import axios from 'axios';

function ThreadContent(props) {
    const [showEditor, setShowEditor] = useState(false);
    const [secondThread, setSecondThread] = useState([]);
    const {thread, id} = props;
    console.log(thread);
    const loadThreads = async (commentId) => {
      console.log(commentId);
      try {
        const { data } = await axios.get(
          `/bunkers/${id}/comments/${commentId}/threads`
        );
        console.log(data);
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
        actions={[<span onClick={() => setShowEditor(!showEditor)} key="comment-nested-reply-to">Reply to</span>]}
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
      {showEditor ? <ThreadEditor id={id} commentId={thread._id} loadThreads={loadThreads} showEditor={showEditor} setShowEditor={setShowEditor}/> : console.log()}
      {secondThread.map((comment) => {
          return <ThreadContent thread={comment} id={id}/>;
        })}
      </Comment>
    </>
    )
}

export default ThreadContent
