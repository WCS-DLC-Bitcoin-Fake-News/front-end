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

const Bookmarks = () => {
  const { user } = useContext(UserContext);
  const [bookmarkBunkers, setBookmarkBunkers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const { bookmarksBunkersContext, setBookmarksBunkersContext } = useContext(
    BookmarksBunkersContext
  );

  useEffect(() => {
    if (false) {
      if (!bookmarksBunkersContext) {
        async function getSavedBunkers() {
          const localBMBunkers = [];
          // const savesSnapShot = await firebase
          //   .firestore()
          //   .collection("saves")
          //   .where("userID", "==", user.uid)
          //   .get();

          // if (savesSnapShot.empty) {
          //   setIsEmpty(true);
          //   setBookmarkBunkers([]);
          //   setIsLoading(false);
          // } else {
          //   for (let i = 0; i < savesSnapShot.size; i++) {
          //     const bunker = await fetchBunker(
          //       savesSnapShot.docs[i].data().bunkerID
          //     );
          //     localBMBunkers.push(bunker);
          //   }
          //   setBookmarkBunkers(localBMBunkers);
          //   setBookmarksBunkersContext(localBMBunkers);
          //   setIsEmpty(false);
          //   setIsLoading(false);
          // }
        }
        getSavedBunkers(user.uid);
      } else {
        setBookmarkBunkers(bookmarksBunkersContext);
        setIsEmpty(false);
        setIsLoading(false);
      }
    }
  }, [user]);

  return (
    <div>
      {/* <Head>
        <title>Bookmarks | Bunkerer</title>
      </Head> */}
      <Layout>
        <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-24 mt-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
            <div className="hidden lg:block lg:col-span-1">
              <div className="mb-5">
                <Filters />
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
                bookmarkBunkers.map((bunker) => (
                  <Link href={`${bunker.author.username}/status/${bunker.id}`}>
                    <div className="mb-5">
                      <Post bunker={bunker} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Bookmarks;
