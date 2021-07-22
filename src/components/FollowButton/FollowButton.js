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
        className="lg:mr-0 lg:ml-auto bg-primary text-white px-2 py-4  lg:px-8 lg:py-4 rounded-md"
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
