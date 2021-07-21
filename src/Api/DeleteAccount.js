// import firebase from "../firebase/init";
import { deleteBunker } from "./DeleteBunker";

// const db = firebase.firestore();

export const deleteAccount = async (userID) => {
  // Delete user from firebase authentication

  // Delete user doc from "users" collection
  // db.collection("users")
  //   .doc(userID)
  //   .delete()
  //   .then(console.log("Deleted User Doc"))
  //   .catch((e) => console.log(e));

  // Get all bunkers that has authorID = user.uid in "bunkers" collection
  // const bunkersSnapShot = await db
  //   .collection("bunkers")
  //   .where("authorId", "==", userID)
  //   .get();
  // bunkersSnapShot.forEach((bunkersDoc) => {
  //   // Delete those bunkers
  //   deleteBunker(bunkersDoc.id);
  // });

  // Delete all connections
  // await db
  //   .collection("connections")
  //   .where("followerID", "==", userID)
  //   .where("followeeID", "==", userID)
  //   .get()
  //   .then((connectionsSnapShot) => {
  //     const batch = firebase.firestore().batch();
  //     connectionsSnapShot.forEach((connectionDocRef) => {
  //       batch.delete(connectionDocRef.ref);
  //     });
  //     batch
  //       .commit()
  //       .then(console.log("Deleted Connections"))
  //       .catch((e) => console.log(e));
  //   });

  // firebase
  //   .auth()
  //   .currentUser.delete()
  //   .then(() => console.log("Deleted user from auth"))
  //   .catch((e) => console.log(e));
};
