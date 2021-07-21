import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoIcon from "@material-ui/icons/Photo";
import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
// import firebase from "../../firebase/init";
import postBunker from "../../Api/PostBunker";
import Avatar from "../Avatar/Avatar";

const BunkerInput = () => {
  const { user } = useContext(UserContext);
  const [bunker, setBunker] = useState("");
  const [imgLink, setImgLink] = useState(null);
  const [file, setFile] = useState(null);
  const [bunkering, setBunkering] = useState(false);

  const fileInputRef = React.createRef();

  const uploadFile = async () => {
    const link = ""
    // const storageRef = firebase.storage().ref("bunkers/" + file.name);
    // const task = await storageRef.put(file);
    // const link = await storageRef.getDownloadURL("bunkers/" + file.name);
    return link;
  };

  return (
    <div className=" bg-white rounded-lg h-auto overflow-hidden ">
      <div className="p-5">
        <div className="flex flex-row my-5">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            {user && <Avatar src={user.profilePicture} />}
          </div>

          <div className="w-full mx-5">
            <div className="flex flex-col">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  async function postBunkerandUploadFile() {
                    setBunkering(true);
                    let imgLink = null;
                    if (file) {
                      imgLink = await uploadFile();
                    }
                    await postBunker(user.uid, bunker.trim(), imgLink);
                    setBunkering(false);
                    setFile(null);
                    setBunker("");
                    setImgLink(null);
                  }
                  postBunkerandUploadFile();
                }}>
                <textarea
                  className="w-full h-16 font-noto font-medium text-base text-gray-500"
                  name="bunker-input"
                  placeholder="What's Happening?"
                  type="text"
                  value={bunker}
                  onChange={(e) => setBunker(e.target.value)}
                  required></textarea>
                <div className="flex items-center mt-3">
                  <div className="mx-2">
                    <input
                      type="file"
                      hidden
                      onChange={(e) => setFile(e.target.files[0])}
                      ref={fileInputRef}
                    />
                    <span className="hover:bg-gray-200 p-2 cursor-pointer">
                      <PhotoIcon
                        onClick={() => fileInputRef.current.click()}
                        style={{ color: "#3182ce" }}
                      />
                    </span>
                      {file && file.name}
                  </div>
                  <div className="mr-0 ml-auto">
                    <button
                      className={`bottom-0 relative text-white px-8 py-4 rounded-md ${
                        bunkering
                          ? "bg-blue-300 cursor-not-allowed"
                          : "bg-primary"
                      }`}
                      type="submit">
                      {bunkering ? "Bunkering...." : "Bunker"}
                      {bunkering && (
                        <span
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: " translate(-50%, -50%)",
                          }}>
                          <CircularProgress />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunkerInput;
