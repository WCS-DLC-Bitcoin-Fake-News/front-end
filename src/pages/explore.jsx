import CircularProgress from "@material-ui/core/CircularProgress";
// import Head from "next/head";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExploreFilters from "../components/ExploreFIlters/ExploreFilters";
import Post from "../components/Post/Post";
import ExploreBunkersContext from "../contexts/ExploreBunkersContext";
// import firebase from "../firebase/init";
import Layout from "../layouts";
import { fetchUser } from "../Api/FetchData";

const Explore = () => {
  const [exploreBunkers, setExploreBunkers] = useState([]);
  const { exploreBunkersContext, setExploreBunkersContext } = React.useContext(
    ExploreBunkersContext
  );

  useEffect(async () => {
    if (!exploreBunkersContext) {
      // firebase
      //   .firestore()
      //   .collection("bunkers")
      //   .limit(5)
      //   .onSnapshot(async (bunkerRef) => {
      //     const exploreUserBunkers = [];

      //     for (let i = 0; i < bunkerRef.size; i++) {
      //       const userInfo = await fetchUser({
      //         userID: bunkerRef.docs[i].data().authorId,
      //       });
      //       let data = bunkerRef.docs[i].data();

      //       exploreUserBunkers.push({
      //         ...data,
      //         createdAt: data.createdAt.toDate().toString(),
      //         id: bunkerRef.docs[i].id,
      //         author: userInfo,
      //       });
      //     }
      //     setExploreBunkers(exploreUserBunkers);
      //     setExploreBunkersContext(exploreUserBunkers);
      //   });
    } else {
      setExploreBunkers(exploreBunkersContext);
    }
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Explore | Bunkerer</title>
      </Head> */}
      <Layout>
        <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-48 mt-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
            <div className="hidden lg:block lg:col-span-1">
              <div className="mb-5">
                <ExploreFilters />
              </div>
            </div>
            <div className="lg:col-span-2">
              {exploreBunkers && exploreBunkers.length > 0 ? (
                exploreBunkers.map((bunker) => (
                  <span key={bunker.id}>
                    <Link href={`${bunker.author.username}/status/${bunker.id}`}>
                      <div className="mb-5">
                        <Post bunker={bunker} />
                      </div>
                    </Link>
                  </span>
                ))
              ) : (
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Explore;
