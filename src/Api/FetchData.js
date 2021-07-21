// import firebase from "../firebase/init";
import axios from "axios";

// const db = firebase.firestore();

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
  // const bunkersQuerySnapShot = await db
  //   .collection("bunkers")
  //   .where("authorId", "==", userID)
  //   .where("parentBunker", "==", null)
  //   .get();

  const fetchedUser = await fetchUser({ userID });
  // const bunkers = []
  // bunkers = bunkers Array of  Objects
  // const bunkers = bunkersQuerySnapShot.docs.map((bunker) => {
  //   const data = bunker.data();

  //   return {
  //     id: bunker.id,
  //     ...data,
  //     author: fetchedUser,
  //     createdAt: data.createdAt.toDate().toString(),
  //   };
  // });
  // returns array of objects (bunkers)

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
  // const bunker = await firebase
  //   .firestore()
  //   .collection("bunkers")
  //   .doc(bunkerID)
  //   .get();
  const bunker = {}

  try {
    const { data } = await axios.get(`/bunkers/${bunkerID}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
  // return {
  //   ...bunker.data(),
  //   author: user,
  //   id: bunkerID,
  //   createdAt: bunker.data().createdAt.toDate().toString(),
  // };
};

export const fetchUserFollowers = async (userID) => {


  try {
    const { data } = await axios.get(`/users`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
  // return await db
  //   .collection("connections")
  //   .where("followeeID", "==", userID)
  //   .get();
};

export const fetchUserFollowings = async (userID) => {

  try {
    const { data } = await axios.get(`/users`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }

  // return await db
  //   .collection("connections")
  //   .where("followerID", "==", userID)
  //   .get();
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
  // return firebase
  //   .firestore()
  //   .collection("likes")
  //   .where("bunkerID", "==", bunkerID)
  //   .get();
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
  // return firebase
  //   .firestore()
  //   .collection("saves")
  //   .where("bunkerID", "==", bunkerID)
  //   .get();
};

const fetchAllUserData = async (userId) => {
  console.log("fetching All User Data");

  try {
    const { data } = await axios.get(`/users/${userId}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
  // try {
  //   const { data } = await axios.get(`/users/${userId}`)
  //   console.log(data);
    
  //   return data
  // } catch (err) {
  //   console.error(err.message)
  //   return err
  // }

  // let fetchedUser = await fetchUser({ username });
  // if (fetchedUser === null) {
  //   return null;
  // }
  // const bunkers = await fetchUserBunkers(fetchedUser.uid);
  // const followersCount = (await fetchUserFollowers(fetchedUser.uid)).size;
  // const followingsCount = (await fetchUserFollowings(fetchedUser.uid)).size;
  // fetchedUser = {
  //   ...fetchedUser,
  //   followersCount,
  //   followingsCount,
  // };

  // return user
};

export default fetchAllUserData;
