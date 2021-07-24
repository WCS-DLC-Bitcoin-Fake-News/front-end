import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../../layouts/index";
import Banner from "../../components/Banner/Banner";
import Filters from "../../components/Filters/Filters";
import Post from "../../components/Post/Post";
import UserInfo from "../../components/UserInfo/UserInfo";
import fetchAllUserData from "../../Api/FetchData";
import {useParams} from "react-router-dom"

// import fetchAllUserData from "../../Api/FetchData";
const UserName = () => {
  console.log("going here in UserName")
  const [userExits, setUserExits] = useState(false);
  const [ userWithBunkers, setUserWithBunkers ] = useState({})
  const [ bunkerWithUser, setBunkerWithUser ] = useState({})

  
  const { bunkers } = userWithBunkers
  const { userId, bunkerId  } = useParams();
  const [bunker, setBunker] = useState({})

  useEffect(async () => {
    try {
      const userWithBunkers = await fetchAllUserData(userId, bunkerId);
      console.log("goo")
      console.log(userWithBunkers);
      // setBunkerWithUser(bunkerWithUser)
      setUserExits(true);
      setUserWithBunkers(userWithBunkers)
    } catch(error) {
      console.error(error)
      return error
    }
    
  }, []);

  return (
    <div>
        <title>
          {userExits
            ? `${userWithBunkers.name} (@${userWithBunkers.name}) | Bunkerer`
            : `USER NOT FOUND`}
        </title>

      <Layout>
        {userExits ? (
          <>
            <Banner />
            <div
              className="flex mx-6 sm:mx-12 md:mx-24 justify-center relative m-auto"
              style={{
                top: "-100px",
              }}>
              <UserInfo fetchedUser={userWithBunkers} />
            </div>
            <div className="mx-4 sm:mx-12 md:mx-24 m-auto">
              <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
                <div className="mb-5">
                  <Filters />
                </div>
                <div className="col-span-2">
                  {userWithBunkers.bunkers && userWithBunkers.bunkers.map((bunker) => {
                    return (
                      <span key={bunker.id}>
                        <Link
                          to={`${bunker.author.username}/status/${bunker.id}`}>
                          <div className="mb-5">
                            <Post bunker={bunker} />
                          </div>
                        </Link>
                      </span>
                    );
                  }).reverse()}
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>User Not Found</h1>
        )}
      </Layout>
    </div>
  );
};

export default UserName;