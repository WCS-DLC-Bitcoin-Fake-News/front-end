import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
const { TextArea } = Input;

function CommentField() {
  const [Comment, SetComment] = useState("");
  const handleChange = (e) => {
    SetComment(e.currentTarget.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <br />
      <p> Replies</p>
      <hr />
      {/* Comment List*/}
      {/* Root Comment Form */}
      <form onSubmit={onSubmit}>
        <TextArea
          onChange={handleChange}
          value={Comment}
          placeholder="Write Your Comment"
        />
        <br />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default CommentField;
