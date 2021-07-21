// import firebase from "../firebase/init";

const postBunker = async (
  authorId,
  text,
  imgLink = null,
  parentBunker = null
) => {
  console.log(authorId, text, imgLink, parentBunker);
  // await firebase.firestore().collection("bunkers").add({
  //   authorId,
  //   text,
  //   parentBunker,
  //   imgLink,
  //   createdAt: firebase.firestore.Timestamp.now(),
  // });
};

export default postBunker;
