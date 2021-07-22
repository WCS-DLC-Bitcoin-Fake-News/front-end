import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { fetchUser, fetchUserFollowers } from "../Api/FetchData";

export function useFollowers(userId, authUserID) {
  const { user } = useContext(UserContext);
  const [followers, setFollowers] = React.useState([]);
  const [isFollowersLoading, setIsFollowersLoading] = React.useState(true);

  const getFollowers = async () => {
    const data = [];
    setIsFollowersLoading(true);
    if (user) {
      // axios call to get followers
    }
    setFollowers(data);
    setIsFollowersLoading(false);
  };

  return { followers, isFollowersLoading, getFollowers };
  
}
