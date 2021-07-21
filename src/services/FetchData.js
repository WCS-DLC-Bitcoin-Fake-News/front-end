import firebase from "../firebase/init";

const db = firebase.firestore();

export const fetchUser = async ({ username, userID }) => {
  let userQuerySnapShot;

  if (username) {
    userQuerySnapShot = await db
      .collection("users")
      .where("username", "==", username)
      .get();
    if (userQuerySnapShot.empty) {
      return null;
    }
    return {
      ...userQuerySnapShot.docs[0].data(),
      uid: userQuerySnapShot.docs[0].id,
    };
  }

  if (userID) {
    userQuerySnapShot = await db.collection("users").doc(userID).get();
    if (userQuerySnapShot.exists) {
      return {
        ...userQuerySnapShot.data(),
        uid: userQuerySnapShot.id,
      };
    } else {
      return null;
    }
  }
};

export const fetchUserBunkers = async (userID) => {
  const bunkersQuerySnapShot = await db
    .collection("bunkers")
    .where("authorId", "==", userID)
    .where("parentBunker", "==", null)
    .get();

  const fetchedUser = await fetchUser({ userID });

  // bunkers = bunkers Array of  Objects
  const bunkers = bunkersQuerySnapShot.docs.map((bunker) => {
    const data = bunker.data();

    return {
      id: bunker.id,
      ...data,
      author: fetchedUser,
      createdAt: data.createdAt.toDate().toString(),
    };
  });
  // returns array of objects (bunkers)
  return bunkers;
};

export const fetchBunker = async (bunkerID) => {
  const bunker = await firebase
    .firestore()
    .collection("bunkers")
    .doc(bunkerID)
    .get();

  if (!bunker.exists) return null;
  const user = await fetchUser({ userID: bunker.data().authorId });
  return {
    ...bunker.data(),
    author: user,
    id: bunkerID,
    createdAt: bunker.data().createdAt.toDate().toString(),
  };
};

export const fetchUserFollowers = async (userID) => {
  return await db
    .collection("connections")
    .where("followeeID", "==", userID)
    .get();
};

export const fetchUserFollowings = async (userID) => {
  return await db
    .collection("connections")
    .where("followerID", "==", userID)
    .get();
};

export const fetchBunkerLikes = (bunkerID) => {
  return firebase
    .firestore()
    .collection("likes")
    .where("bunkerID", "==", bunkerID)
    .get();
};

export const fetchBunkerSaves = (bunkerID) => {
  return firebase
    .firestore()
    .collection("saves")
    .where("bunkerID", "==", bunkerID)
    .get();
};

const fetchAllUserData = async (username) => {
  let fetchedUser = await fetchUser({ username });
  if (fetchedUser === null) {
    return null;
  }
  const bunkers = await fetchUserBunkers(fetchedUser.uid);
  const followersCount = (await fetchUserFollowers(fetchedUser.uid)).size;
  const followingsCount = (await fetchUserFollowings(fetchedUser.uid)).size;
  fetchedUser = {
    ...fetchedUser,
    followersCount,
    followingsCount,
  };

  return {
    fetchedUser,
    bunkers,
  };
};

export default fetchAllUserData;
