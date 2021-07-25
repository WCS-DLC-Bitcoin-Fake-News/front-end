import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import BunkerVisualizer from "./modules/Bunker/BunkerVisualizer";
import UserContext from "../contexts/UserContext";
import { fetchBunker } from "./../Api/FetchData"
function BunkerForm() {
  const { user } = useContext(UserContext);
  const { bunkerId } = useParams();
  console.log('user context in the form', user)

  const [body, setBody] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [source, setSource] = useState("");
  const [printedSource, setPrintedSource] = useState("");
  const [id, setId] = useState("");
  let history = useHistory();

  const createBunkerDraft = async (url) => {
    console.log(user)

    const newPost = {
      source: url,
    };
    try {
      // this const gets the 'token' and 'user'from localStorage. Check Signup.js to see how to access and save in localStorage.
      // Get the user from your context

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const res = await axios.post(
        `/users/${user._id}/bunkers`,
        newPost,
        config
      );

      console.log(res);
      setPrintedSource(res.data.printedSource);
      setId(res.data._id);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
      const data = await fetchBunker(bunkerId)
      setPrintedSource(data.printedSource);
      setId(data._id);
  }, [])

  const editTitle = (e) => {
    setTitle(e.target.value);
  };
  const editBody = (html) => {
    console.log(html);
    setBody(html);
  };
  const editSource = (e) => {
    e.preventDefault();
    const url = e.clipboardData.getData("text");
    console.log(e.clipboardData.getData("text"));
    setSource(url);
    // createBunkerDraft(url);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
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
          Authorization: `Bearer ${user.token}`,
        },
      };

      const res = await axios.put(
        `/users/${user._id}/bunkers/${id}`,
        { ...newPost, published: true },
        config
      );
      history.push(`/${user._id}/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="min-h-screen bg-gray-200 p-0 sm:p-12">
      {/* p-5 nm-flat-white   cursor-pointer */}
      <div class="flex-col mx-auto max-w-max px-6 py-12 nm-flat-white hover:bg-gray-100 rounded-lg">
        <h1 class="text-2xl text-black font-montserrat font-bold mb-8">Build your Bunker</h1>
        <form id="form" onSubmit={onSubmit}>
          <div class="relative z-0 w-full mb-5">
            <input
              onChange={editTitle}
              type="text"
              title="title"
              placeholder=" "
              required
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200 font-raleway text-black"
            />
            <label
              for="name"
              class="absolute duration-300 top-3 -z-1 origin-0 font-raleway text-gray-600"
            >
              Enter Title
            </label>
            <span class="text-sm text-red-600 hidden" id="error">
              Title is required
            </span>
          </div>
          <div className="nm-flat-white rounded-lg">
              {printedSource && <BunkerVisualizer printedSource={printedSource} />}
          </div>
          <div class="nm-flat-gray-100 h-auto rounded-lg relative z-0 w-full mb-5 text-black">
            {/* <label for="argument" class="absolute duration-300 top-3 -z-1 origin-0 text-black">Elaborate your argument</label>  */}

            <ReactQuill
              placeholder="Elaborate your argument"
              onChange={editBody}
              // readOnly={true}
              value={body}
            />
            <span class="text-black text-sm text-red-600 hidden" id="error">
              An argument is required
            </span>
          </div>
          <div class="relative z-0 w-full mb-5">
            <input
              type="number"
              stake="stake"
              placeholder=" "
              class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 text-black appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 border-gray-200"
            />
            <div class="absolute top-0 left-0 mt-3 ml-1"></div>
            <label
              for="money"
              class="absolute duration-300 top-3 -z-1 origin-0 font-raleway text-gray-600"
            >
              Stake
            </label>
            <span class="text-sm text-red-600 hidden" id="error">
              Stake is required
            </span>
          </div>

          <div class="relative z-0 w-full mb-5 font-raleway text-gray-600">
            <input
              type="date"
              deadline="deadline"
              placeholder=" "
              class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 text-text-gray-200 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 border-gray-200"
            />
            <div class="absolute top-0 right-0 mt-3 mr-4 text-black"></div>
            <label
              for="duration"
              class="absolute duration-300 top-3 -z-1 origin-0 text-black"
            >
              
            </label>
            <span class="text-sm text-red-600 hidden" id="error">
              Deadline is required
            </span>
          </div>

          <button
            type="submit"
            value="ok"
            class="w-full h-15 px-6 py-3 mt-3 text-lg font-raleway font-bold text-black transition-all duration-150 ease-linear rounded-full shadow outline-none nm-flat-yellowBunker hover:bg-buttonRedDark hover:shadow-lg focus:outline-none"
          >
            DeBunk it!
          </button>
        </form>
      </div>
    </div>
  );
}

export default BunkerForm;
