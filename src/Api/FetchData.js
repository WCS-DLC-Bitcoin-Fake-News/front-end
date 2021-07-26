import axios from "axios";

export const upVoteBunker = async ( bunkerId, userId ) => {
  try {
    const { data } = await axios.post(
      `/bunkers/${bunkerId}/votes`,
      {
        bunkerId, 
        userId, 
        upvote: true
      },
    );
    console.log(data)

    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export const downVoteBunker = async ( bunkerId, userId ) => {
  try {
    const { data } = await axios.post(
      `/bunkers/${bunkerId}/votes`,
      {bunkerId, userId, upvote: false},
    );
    console.log(data)

    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};

export const watchBunger = async ( userID ) => {
  try {
    const { data } = await axios.get(`/users/${userID}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};


export const fetchUser = async ( userID ) => {
  debugger
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

const fetchAllUserData = async (userId, bunkerId) => {
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
