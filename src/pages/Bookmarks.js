import CircularProgress from "@material-ui/core/CircularProgress";
// import Head from "next/head";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import Post from "../components/Post/Post";
import BookmarksBunkersContext from "../contexts/BookmarksBunkersContext";
import UserContext from "../contexts/UserContext";
// import firebase from "../firebase/init";
import Layout from "../layouts";
import { fetchBunker } from "../Api/FetchData";
import { useParams } from "react-router-dom";
import CommentContainer from "./../components/modules/Comment/CommentContainer";

const Bookmarks = () => {
  // const { user } = useContext(UserContext);
  const [userCanComment, setUserCanComment] = useState(false);
  const [bunker, setBunker] = useState({});
  const [loading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  // const [showEditor, setShowEditor] = useState(false);

  // const { bookmarksBunkersContext, setBookmarksBunkersContext } = useContext(
  //   BookmarksBunkersContext
  // );
  const { bunkerId } = useParams();

  useEffect(async () => {
    setIsLoading(true);
    setIsEmpty(true);
    const data = await fetchBunker(bunkerId);
    setBunker(data);
    setIsEmpty(false);
    setIsLoading(false);
  }, [bunkerId]);

  return (
    <div>
      <Layout>
        <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-24 mt-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
            <div className="hidden lg:block lg:col-span-1">
              <div className="mb-5">
                <Filters bunker={bunker} />
              </div>
            </div>
            <div className="lg:col-span-2">
              {loading && (
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              )}
              {isEmpty ? (
                <h1>You have no Saved Bunkers</h1>
              ) : (
                <div className="space-y-6 ">
                  {bunker._id && (
                    <>
                      <Post
                        setBunker={setBunker}
                        bunker={bunker}
                        setUserCanComment={setUserCanComment}
                        userCanComment={userCanComment}
                      />{" "}
                      <CommentContainer userCanComment={userCanComment} id={bunker._id} />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Bookmarks;
