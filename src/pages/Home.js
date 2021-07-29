import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import Post from "../components/Post/Post";
import Suggestions from "../components/Suggestions/Suggestions";
import Trends from "../components/Trends/Trends";
import BunkerInput from "../components/BunkerInput/BunkerInput";
import HomeBunkersContext from "../contexts/HomeBunkersContext";
import UserContext from "../contexts/UserContext";
import Layout from "../layouts";
import { fetchUser, fetchPublishedBunkers } from "../Api/FetchData";
import ThumbnailBunker from "../components/Post/ThumbnailBunker";

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
      // if (!homeBunkersContext) {
          console.log("there is not")
          setLoading(true);
          setIsEmpty(true);
          setHomeBunkers([]);
          const bunkers = await fetchPublishedBunkers()
          setHomeBunkersContext(bunkers);
          setHomeBunkers(bunkers.reverse());
          setLoading(false);
          setIsEmpty(false);
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
                 homeBunkers.map((bunker) => (
                  <span key={bunker.id}>
                    <Link to={`/bunkers/${bunker._id}`}>
                      <div className="mb-5">
                        <ThumbnailBunker isThumb={true} bunker={bunker} />
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
