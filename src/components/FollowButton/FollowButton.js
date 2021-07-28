import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
// import firebase from "../../firebase/init";

const FollowButton = ({ userID }) => {
  const { user } = useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState(false);
  const [connectionDocID, setFollowingDocID] = useState("");

  const startFollowing = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    const id = 0
  
    // axios call to set following
    setFollowingDocID(id);
    setIsFollowing(true);
  };

  const stopFollowing = () => {
    if (!user) {
      alert("You need to sign in for that");
      return;
    }
    
    // axios call to stop following

    setIsFollowing(false);
  };

  useEffect(() => {
    if (user) {
      async function checkFollowing() {
        // axios call to check if already followed
      }
      // checkFollowing();
      }
  }, [user]);

  return (
    <div>
      <button
        className="inline-flex justify-center w-full rounded-full shadow-sm px-4 py-2 nm-convex-white border border-yellowBunker  text-sm font-raleway font-medium text-gray-700 hover:bg-gray-50 "
        type="submit"
        onClick={() => (isFollowing ? stopFollowing() : startFollowing())}>
        <span className="mx-2">
          <PersonAddIcon />
        </span>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowButton;
