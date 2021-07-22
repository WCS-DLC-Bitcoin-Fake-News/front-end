import axios from "axios";

export const fetchUser = async ( userID ) => {
  try {
    const { data } = await axios.get(`/users/${userID}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export const fetchUserBunkers = async (userID) => {

  const fetchedUser = await fetchUser({ userID });
  try {
    const { data } = await axios.get(`/users/${userID}/bunkers`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }

  // return bunkers;
};

export const fetchBunker = async (bunkerID) => {
  const bunker = {}

  try {
    const { data } = await axios.get(`/bunkers/${bunkerID}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export const fetchUserFollowers = async (userID) => {


  try {
    const data = []

    // const { data } = await axios.get(`/users`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }

};

export const fetchUserFollowings = async (userID) => {

  try {
    const data = []
    // const { data } = await axios.get(`/users`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }

};

export const fetchBunkerLikes = async (bunkerID) => {
  try {
    const { data } = await axios.get(`/bunkers/${bunkerID}/votes`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};


export const fetchPublishedBunkers = async (userId) => {
  try {
    const { data } = await axios.get(`/bunkers/`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export const fetchBunkerSaves = async (bunkerID) => {

  try {
    const { data } = await axios.get(`/bunkers/`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }

};

const fetchAllUserData = async (userId) => {
  console.log("fetching All User Data, bunkers and more");

  try {
    const { data } = await axios.get(`/users/${userId}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export default fetchAllUserData;
