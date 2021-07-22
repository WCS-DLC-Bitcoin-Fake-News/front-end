import React from "react";
import { fetchUser, fetchUserFollowings } from "../Api/FetchData";

export function useFollowings(userId) {
  const [followings, setFollowings] = React.useState([]);
  const [isFollowingsLoading, setIsFollowingsLoading] = React.useState(true);

  const getFollowings = async () => {
    const data = [];
    setIsFollowingsLoading(true);
    const followersSnapShot = await fetchUserFollowings(userId);
    // axios call to get folowings
    setFollowings(data);
    setIsFollowingsLoading(false);
  };

  return { followings, isFollowingsLoading, getFollowings };
}
