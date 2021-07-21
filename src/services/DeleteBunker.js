import firebase from "../firebase/init";

const db = firebase.firestore();

export const deleteBunker = (bunkerID) => {
  db.collection("bunkers")
    .doc(bunkerID)
    .delete()
    .then(() => console.log("Deleted Bunker"))
    .catch((e) => console.log(e));

  db.collection("likes")
    .where("bunkerID", "==", bunkerID)
    .get()
    .then((bunkersSnapShot) => {
      const batch = firebase.firestore().batch();
      bunkersSnapShot.forEach((bunkerDocRef) => {
        batch.delete(bunkerDocRef.ref);
      });
      batch
        .commit()
        .then(console.log("Deleted Likes"))
        .catch((e) => console.log(e));
    });

  db.collection("saves")
    .where("bunkerID", "==", bunkerID)
    .get()
    .then((bunkersSnapShot) => {
      const batch = firebase.firestore().batch();
      bunkersSnapShot.forEach((bunkerDocRef) => {
        batch.delete(bunkerDocRef.ref);
      });
      batch
        .commit()
        .then(console.log("Deleted Saves"))
        .catch((e) => console.log(e));
    });
};
