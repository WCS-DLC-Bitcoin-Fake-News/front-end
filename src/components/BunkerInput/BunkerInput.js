import React, { useContext, useState, useEffect } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoIcon from "@material-ui/icons/Photo";
import UserContext from "../../contexts/UserContext";
import postBunker from "../../Api/PostBunker";
import Avatar from "../Avatar/Avatar";
import { useHistory } from "react-router-dom";

const BunkerInput = () => {
  const { user } = useContext(UserContext);
  const [bunker, setBunker] = useState("");
  const [imgLink, setImgLink] = useState(null);
  const [file, setFile] = useState(null);
  const [bunkering, setBunkering] = useState(false);

  const history = useHistory();

  const fileInputRef = React.createRef();

  const uploadFile = async () => {
    const link = ""
    return link;
  };

  return (
    <div className="nm-flat-white rounded-lg h-auto overflow-hidden ">
      <div className="p-5">
        <div className="flex flex-row my-5">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            {user && <Avatar src={user.name} />}
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
                    let draftId = await postBunker(user, bunker, imgLink);
                    console.log("yo", draftId)
                    setBunkering(false);
                    setFile(null);
                    setBunker("");
                    setImgLink(null);
                    history.push(`/debunk/${draftId}`)
                  }
                  postBunkerandUploadFile();
                }}>
                <textarea
                  className="nm-inset-white w-full h-16 font-noto font-medium border-2 border-gray-200 rounded-lg text-base text-gray-500"
                  name="bunker-input"
                  placeholder="  Drop a link to Debunk"
                  type="text"
                  value={bunker}
                  onChange={(e) => setBunker(e.target.value)}
                  required></textarea>
                <div className="flex items-center mt-3">
                  {/* <div className="mx-2">
                    <input
                      type="file"
                      hidden
                      onChange={(e) => setFile(e.target.files[0])}
                      ref={fileInputRef}
                    />
                    <span className="hover:bg-black-200 p-2 cursor-pointer">
                      <PhotoIcon
                        onClick={() => fileInputRef.current.click()}
                        style={{ color: "#3182ce" }}
                      />
                    </span> 
                      {file && file.name}
                  </div> */}
                  <div className="mr-0 ml-auto">
                    <button
                      className={`bottom-0 relative text-white px-8 py-4 rounded-full ${
                        bunkering
                          ? "nm-inset-yellowBunker cursor-not-allowed"
                          : "nm-convex-yellowBunker-sm"
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
