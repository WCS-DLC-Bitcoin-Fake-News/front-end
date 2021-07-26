import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
/* import "./index.css"; */
import { Comment, Form, Button, List, Input, Tooltip } from "antd";
import axios from "axios";
import { useState, useContext } from "react";
import moment from "moment";
import UserContext from "../../../contexts/UserContext";
import Avatar from "./../../Avatar/Avatar"
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
    <div className="nm-flat-white rounded-lg">
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <div className="w-full px-4 rounded-lg">
            <Form.Item>
              <TextArea
                className="bg-gray-200 placeholder-gray-600  rounded-lg h-12 w-full font-noto text-sm font-medium"
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
                <button
                  className="flex flex-row py-4 bottom-0 relative font-cabin text-black px-8 py-4 rounded-full nm-convex-yellowBunker-sm"
                  htmlType="submit"
                  loading={false}
                  onClick={(e) => {
                    submitComment(e, id);
                  }}
                  type="primary"
                >
                  Add Comment
                </button>
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
          </div>
        }
      />
    </div>
  );
};

export default CommentEditor;
