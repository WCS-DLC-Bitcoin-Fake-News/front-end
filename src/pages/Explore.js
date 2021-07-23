import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExploreFilters from "../components/ExploreFIlters/ExploreFilters";
import Post from "../components/Post/Post";
import ExploreBunkersContext from "../contexts/ExploreBunkersContext";
import Layout from "../layouts";
import { fetchUser } from "../Api/FetchData";

const Explore = () => {
  const [exploreBunkers, setExploreBunkers] = useState([]);
  const { exploreBunkersContext, setExploreBunkersContext } = React.useContext(
    ExploreBunkersContext
  );

  useEffect(async () => {
    if (!exploreBunkersContext) {
      setExploreBunkers(exploreBunkersContext);
      //setExploreBunkersContext(exploreUserBunkers);
    }
  }, []);

  return (
    <div>
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
