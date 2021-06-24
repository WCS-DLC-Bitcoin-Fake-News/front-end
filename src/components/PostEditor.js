import { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import axios from "axios";


function PostEditor() {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("")

  const addTitle = e => {
    setTitle(e.target.value)
  }
  const addPost = e => {
    setPost(e)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      console.log(post);
      const newPost = {
        title,
        post
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newPost);
        const res = await axios.post("/users/:id/bunkers", body, config);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  


  return (
    <>
    <form onSubmit={onSubmit}>
    <label>Title</label>
    <input onChange={addTitle}></input>
    <ReactQuill
    placeholder="Post here"
    onChange={addPost}
    // readOnly={true}
    value={post}
    />
    <div>
      {title}
      <br/>
      {post}
    </div>
    <input
              type="submit"
              value="Post"
              className="text-white bg-signBtn pr-1 font-bold"
            />
    </form>
    </>
  );
  }

export default PostEditor;
