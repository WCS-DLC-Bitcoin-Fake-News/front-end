import React from "react";
import CommentContent from "./CommentContent";
import CommentEditor from "./CommentEditor"
import { Comment, Form, Button, List, Input, Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "./../../Avatar/Avatar"

const CommentContainer = (props) => {
  let { id } = props;
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    try {
      const { data } = await axios.get(`/bunkers/${id}/comments`);
      console.log(data);
      setComments(data.comments);
      console.log(data.comments);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    loadComments();
  }, []);
  const filtered = comments.filter(comment => !comment.commentId)

  return (
    <div className="bg-white rounded-b-lg">
      <CommentEditor id={id} loadComments={loadComments}/> 
      {filtered.map((comment) => {
        return (
        <CommentContent comment={comment} loadComments={loadComments} id={id}/>
        
        );
      })}
    </div>
  );
};
export default CommentContainer;
