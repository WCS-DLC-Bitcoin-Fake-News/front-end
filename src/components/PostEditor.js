import { useState } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory, useContext } from "react-router-dom";
import UserContext from "../contexts/UserContext";


function PostEditor() {
  const { user, setUser } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  let history = useHistory()

  const editTitle = e => {
    setTitle(e.target.value)
  }
  const editBody = html => {
    console.log(html)
    setBody(html)
  }
  const editSource = e => {
    console.log(e)
    setSource(e.target.value)
  }
  const onSubmit = async (e) => {
      e.preventDefault();
      console.log(body);
      const newPost = {
        title,
        source,
        body,
      };
      try {

        // this const gets the 'token' and 'user'from localStorage. Check Signup.js to see how to access and save in localStorage.
        

        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`,
          },
        };
               
        // const body = JSON.stringify(newPost);
        const res = await axios.post(`/users/${user._id}/bunkers`, newPost, config);
        history.push("/")
      } catch (error) {
        console.log(error);
      }
    }
  


  return (
    <>
    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input onChange={editTitle}></input>
      <label>Source</label>
      <input onChange={editSource}></input>
      <ReactQuill
        placeholder="Post here"
        onChange={editBody}
        // readOnly={true}
        value={body}
      />
      <div>
        {title}
        <br/>
        {body}
      </div>
      <input
              type="submit"
              value="ok"
              className="text-white bg-signBtn pr-1 font-bold"
              />
      </form>
    </>
  );
}

export default PostEditor;
