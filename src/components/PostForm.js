import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";

function PostForm() {
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
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user')); 

        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
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
  
    <div class="md:min-h-screen bg-gray-100 p-0 sm:p-12">
      <div class="mx-auto max-w-md px-6 py-12 bg-containerBlue border-0 shadow-lg sm:rounded-3xl">
        <h1 class="text-2xl text-white font-bold mb-8">Build your Bunker</h1>
        <form id="form" onSubmit={onSubmit}>
          <div class="relative z-0 w-full mb-5">
            <input onChange={editTitle}
              type="text"
              title="title"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200 text-gray-400"
            />
            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-white">Enter Title</label>
            <span class="text-sm text-red-600 hidden" id="error">Title is required</span>
          </div>

          <div class="relative z-0 w-full mb-5">
            <input onChange={editSource}
              type="url"
              source="source"
              placeholder=" "
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200 text-gray-400"
            />
            <label for="source" class="absolute duration-300 top-3 -z-1 origin-0 text-white">Enter URL</label>
            <span class="text-sm text-red-600 hidden" id="error">URL is required</span>
          </div>

          <div class="relative z-0 w-full mb-5">
          {/* <label for="argument" class="absolute duration-300 top-3 -z-1 origin-0 text-white">Elaborate your argument</label> */}

          <ReactQuill
            placeholder="Elaborate your argument"
            onChange={editBody}
            // readOnly={true}
            value={body}
          />
            <span class="text-sm text-red-600 hidden" id="error">An argument is required</span>
          </div>

          <fieldset class="relative z-0 w-full p-px mb-5">
            <legend class="absolute text-white transform scale-75 -top-3 origin-0">Choose type of media to DeBunk</legend>
            <div class="block pt-3 pb-2 space-x-4 text-white">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Tweet
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Article
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="3"
                  class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                Price Speculation
              </label>
            </div>
            <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
          </fieldset>

          <div class="relative z-0 w-full mb-5">
            <input
              type="number"
              stake="stake"
              placeholder=" "
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 text-white appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 border-gray-200"
            />
            <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
            <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-white">Stake</label>
            <span class="text-sm text-red-600 hidden" id="error">Stake is required</span>
          </div>

          <div class="relative z-0 w-full mb-5 text-white">
            <input
              type="date"
              deadline="deadline"
              placeholder=" "
              class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 text-white bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 border-gray-200"
            />
            <div class="absolute top-0 right-0 mt-3 mr-4 text-white"></div>
            <label for="duration" class="absolute duration-300 top-3 -z-1 origin-0 text-white">Deadline</label>
            <span class="text-sm text-red-600 hidden" id="error">Deadline is required</span>
          </div>

          <button
            type="submit"
            value="ok"
            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-buttonRed hover:bg-buttonRedDark hover:shadow-lg focus:outline-none"
          >
            DeBunk it!
          </button>
        </form>
      </div>
    </div>
    
  );
};

  export default PostForm;