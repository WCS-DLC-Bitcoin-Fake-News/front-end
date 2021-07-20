import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
/* import "./index.css"; */
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import axios from "axios";
import { useState, useContext } from "react";
import moment from "moment";
import UserContext from "../../../contexts/UserContext";

const { TextArea } = Input;

const CommentEditor = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [commentValue, setCommentValue] = useState();
  const { id, loadComments } = props;
  const submitComment = async (e, id) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const newComment = {
      author: user._id,
      body: commentValue,
      bunkerId: id,
    };
    try {
      // const token = localStorage.getItem('token');
      // const user = JSON.parse(localStorage.getItem('user'));
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer ${token}`,
      //   },
      // };

      const postComment = await axios.post(
        `/bunkers/${id}/comments`,
        newComment /*  config */
      );
      loadComments();
      setCommentValue();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <>
            <Form.Item>
              <TextArea
                rows={4}
                onChange={(e) => {
                  setCommentValue(e.target.value);
                }}
                value={commentValue}
                placeholder="Write your comment"
              />
            </Form.Item>
            <Form.Item>
              {user ? (
                <Button
                  htmlType="submit"
                  loading={false}
                  onClick={(e) => {
                    submitComment(e, id);
                  }}
                  type="primary"
                >
                  Add Comment
                </Button>
              ) : (
                <>
                  <Link to="/signin">
                    <Button>Sign in</Button>
                  </Link>
                  <Link to="/signup">
                    <button>Sign up</button>
                  </Link>
                </>
              )}
            </Form.Item>
          </>
        }
      />
    </>
  );
};

export default CommentEditor;
