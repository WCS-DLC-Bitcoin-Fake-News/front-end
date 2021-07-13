import React from "react";
import "antd/dist/antd.css";
/* import "./index.css"; */
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import moment from "moment";

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

const CommentEditor = ({ children }) => (
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

export default CommentEditor;
