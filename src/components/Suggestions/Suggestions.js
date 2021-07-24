import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { fetchUser, fetchUserFollowers } from "../../Api/FetchData";
import Avatar from "../Avatar/Avatar";
import FollowButton from "../FollowButton/FollowButton";

const Suggestions = ({ type, userID }) => {
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(async () => {
    if (user) {
      // const localUser = await fetchUser(
      //   user._id,
      // );
      // const followersCount = await fetchUserFollowers(user._id);
      // setUser({ ...user, followersCount: 10 });
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="nm-flat-white w-full p-5 rounded-lg">
      {type === "relevant" ? (
        <p className="font-montserrat font-bold text-lg mb-3">
          Relevant Bunkers 
        </p>
      ) : (
        <p className="font-montserrat font-bold text-lg mb-3">
          Just Debunked ✅ 
        </p>
      )}
      <hr />
      {loading && (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      )}
      {user && (
        <div>
          <div className="flex flex-row my-4">
            <div className="w-12 h-12 mr-4">
              <Avatar src={user.name} />
            </div>
            <div className="mr-0 ml-auto">
              <FollowButton userID={user.uid} />
            </div>
          </div>
          <div>
            <p className="font-raleway font-semibold text-gray-600 my-4">
              {user.bio}
            </p>
          </div>
          <div>
          <p className="py-2 font-raleway font-semibold">Apple will buy 1.5B in BTC by 22/07</p>
          </div>
          <div classname="flex justify-between">
            <div className="font-raleway font-medium text-gray-600">Final Stake - 1004</div>
            <div className="font-raleway font-medium text-gray-600">Ended 23/07</div>
          </div>
          <div>
            <label className="py-2 font-raleway font-semibold" for="votes bar">Final Votes</label>
            <progress className="nm-inset-white w-full p-5 rounded-full" id="votes bar" max="100" value="70"> 70% </progress>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggestions;
