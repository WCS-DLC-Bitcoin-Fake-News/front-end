import React from "react";
import CommentContent from "./CommentContent";
import CommentEditor from "./CommentEditor"
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";



const CommentContainer = (props) => {
  let { id } = props;
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    try {
      const { data } = await axios.get(`/bunkers/${id}/comments`);
      console.log('couldt call')
      setComments([...data]);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    loadComments();
  }, []);
  const filtered = comments.filter(comment => !comment.commentId)

  return (
    <>
      <CommentEditor id={id} loadComments={loadComments}/>

      {/* <CommentContent id={id}>
        {[0, 0, 0, 0].map(() => (
          <CommentContent>
            {[0, 0, 0, 0].map(() => (
              <CommentContent />
            ))}
          </CommentContent>
        ))}
      </CommentContent> */}

      {filtered.map((comment) => {
        return (
        <CommentContent comment={comment} loadComments={loadComments} id={id}/>
        
        );
      })}
    </>
  );
};
export default CommentContainer;
