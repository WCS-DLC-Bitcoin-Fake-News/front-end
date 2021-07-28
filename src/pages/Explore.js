import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import ExploreFilters from "../components/ExploreFIlters/ExploreFilters";
import Post from "../components/Post/Post";
// import ExploreBunkersContext from "../contexts/ExploreBunkersContext";
import Layout from "../layouts";
import { fetchUser } from "../Api/FetchData";
import ExploreBunkersContext from "../contexts/ExploreBunkersContext";
import UserContext from "../contexts/UserContext";

import { fetchPublishedBunkers } from "../Api/FetchData";


const Explore = () => {
  const { user } = useContext(UserContext);
  const [exploreBunkers, setExploreBunkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const { exploreBunkersContext, setExploreBunkersContext } = useContext(
    ExploreBunkersContext
  );

  useEffect(async () => { 
    try {
      if (!exploreBunkersContext) {
          console.log("there is not")
          setLoading(true);
          setIsEmpty(true);
          setExploreBunkers([]);
          const bunkers = await fetchPublishedBunkers()
          setExploreBunkersContext(bunkers);
          setExploreBunkers(bunkers);
          setLoading(false);
          setIsEmpty(false);
      } else {
        console.log("there is a context")
        setLoading(false);
        setExploreBunkers(exploreBunkersContext);
      }
    } catch (err) {
      console.log(err);
    }
  }, [user]);

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
                  <span key={bunker._id}>
                    <Link to={`/bunkers/${bunker._id}`}>
                      <div className="mb-5">
                        <Post isThumb={true} bunker={bunker} />
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
