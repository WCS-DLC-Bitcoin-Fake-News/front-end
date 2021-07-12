import React from "react";
import CommentContent from "./CommentContent";
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        rows={4}
        /* onChange={onChange} value={value} */ placeholder="Write your comment"
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={false}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CustomEditor = ({ children }) => (
  <Comment
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <Editor
        onChange={() => {}}
        onSubmit={() => {}}
        submitting={() => {}}
        value={() => {}}
      />
    }
  />
);

const CommentContainer = (props) => {
  let { id } = props;
  const [comments, setComments] = useState([]);
  const loadComments = async () => {
    try {
      const { data } = await axios.get(`/bunkers/${id}/comments`);
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
      <CustomEditor />

      {/* <CommentContent id={id}>
        {[0, 0, 0, 0].map(() => (
          <CommentContent>
            {[0, 0, 0, 0].map(() => (
              <CommentContent />
            ))}
          </CommentContent>
        ))}
      </CommentContent> */}

      {comments.map((comment) => {
        console.log(comment);
        return <CommentContent />;
      })}
    </>
  );
};
export default CommentContainer;
