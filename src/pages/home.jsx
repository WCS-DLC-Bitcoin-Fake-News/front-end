import CircularProgress from "@material-ui/core/CircularProgress";
// import Head from "next/head";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import Post from "../components/Post/Post";
import Suggestions from "../components/Suggestions/Suggestions";
import Trends from "../components/Trends/Trends";
import BunkerInput from "../components/BunkerInput/BunkerInput";
import HomeBunkersContext from "../contexts/HomeBunkersContext";
import UserContext from "../contexts/UserContext";
// import firebase from "../firebase/init";
import Layout from "../layouts";
import { fetchUser, fetchPublishedBunkers } from "../Api/FetchData";

const Home = () => {
  const { user } = useContext(UserContext);
  const [homeBunkers, setHomeBunkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const { homeBunkersContext, setHomeBunkersContext } = useContext(
    HomeBunkersContext
  );

  useEffect(async () => {
    try {
     
        console.log("is user")
        if (!homeBunkersContext) {
            setLoading(true);
          // const connectionsRef = await firebase
          //   .firestore()
          //   .collection("connections")
          //   .where("followerID", "==", user.uid)
          //   .get();

          // if (false) {
            setIsEmpty(true);
            setHomeBunkers([]);
            // setLoading(false);
          // } else {
            console.log("Going here")

            // const followerIDs = connectionsRef.docs.map((connection) => {
            //   const floID = connection.data().followeeID;
            //   return floID;
            // });

            // firebase
            //   .firestore()
            //   .collection("bunkers")
            //   .where("authorId", "in", followerIDs)
            //   .where("parentBunker", "==", null)
            //   .orderBy("createdAt", "desc")
            //   .onSnapshot(async (bunkerRef) => {
            //     const homeUserBunkers = [];

            //     for (let i = 0; i < bunkerRef.size; i++) {
            //       const userInfo = await fetchUser({
            //         userID: bunkerRef.docs[i].data().authorId,
            //       });
            //       let data = bunkerRef.docs[i].data();

            //       homeUserBunkers.push({
            //         ...data,
            //         createdAt: data.createdAt.toDate().toString(),
            //         id: bunkerRef.docs[i].id,
            //         author: userInfo,
            //       });
            //     }
                const bunkers = await fetchPublishedBunkers()
                setHomeBunkersContext(bunkers);

                setHomeBunkers(bunkers);
                setLoading(false);
                setIsEmpty(false);
              // });
          // }
        } else {
          console.log("there is a context")
          setLoading(false);
          setHomeBunkers(homeBunkersContext);
        }
      
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <Layout>
       

        <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-24 xl:mx-24 mt-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
            <div className="lg:col-span-2">
              <div className="mb-5">
                <BunkerInput />
              </div>
              {loading && (
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              )}

              {isEmpty ? (
                <h1>You are following no one</h1>
              ) : (
                homeBunkers.length && homeBunkers.map((bunker) => (
                  <span key={bunker.id}>
                    <Link to={`${bunker.author}/status/${bunker._id}`}>
                      <div className="mb-5">
                        <Post bunker={bunker} />
                      </div>
                    </Link>
                  </span>
                ))
              )}
            </div>
            <div className="hidden lg:block lg:col-span-1">
              <div className="mb-5">
                <Trends />
              </div>
              <div className="mb-5">
                {user && <Suggestions userID="NpVRgALXkJSyA7sa4wVgKA6Adu03" />}
              </div>
            </div>
          </div>
        </div>
        </Layout>
  );
};

export default Home;
