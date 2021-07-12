import React from "react";
import CommentContent from "./Comment";
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";

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
  return (
    <>
      <CustomEditor />

      <CommentContent id={id}>
        <CommentContent>
          <CommentContent />
          <CommentContent />
        </CommentContent>
      </CommentContent>
    </>
  );
};
export default CommentContainer;
