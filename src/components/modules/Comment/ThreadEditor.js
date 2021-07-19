import "antd/dist/antd.css";
/* import "./index.css"; */
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import UserContext from "../../../contexts/UserContext";
import {Link} from 'react-router-dom';

const { TextArea } = Input;

const ThreadEditor = (props) => {
  const { user, setUser, loggedUser } = useContext(UserContext);
  const [commentValue, setCommentValue] = useState();
  const { id, commentId, loadThreads, showEditor, setShowEditor } = props;
  const submitComment = async (e, id) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const newComment = {
      author: user._id,
      body: commentValue,
      bunkerId: id,
      commentId,
    };
    try {
      // const token = localStorage.getItem('token');

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer ${token}`,
      //   },
      // };

      const postComment = await axios.post(
        `/bunkers/${id}/comments/${commentId}/threads`,
        newComment /*  config */
      );
      loadThreads(commentId);
      setCommentValue();
      setShowEditor(!showEditor);
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
                  <Link to="/signin"><Button>Sign in</Button></Link>
                  <Link to="signup"><button>Sign up</button></Link>
                </>
              )}
            </Form.Item>
          </>
        }
      />
    </>
  );
};

export default ThreadEditor;
