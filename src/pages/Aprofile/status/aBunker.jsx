import React, { useContext } from "react";
import CommentInput from "../../../components/CommentInput/CommentInput";
import Comments from "../../../components/Comments/Comments";
import Post from "../../../components/Post/Post";
import Suggestions from "../../../components/Suggestions/Suggestions";
import UserContext from "../../../context/UserContext";
import firebase from "../../../firebase/init";
import Layout from "../../../layouts";
import { fetchUser } from "../../../services/FetchData";

const Bunker = ({ bunker }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <title>
        John on Debunker "It is great"
        {/* {bunker.author.name} on Debunker "{bunker.text}" */}
      </title>
      <Layout>
        <div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5 my-5 lg:mx=24 xl:mx-48">
            <div className="col-span-2">
              {/* <Post bunker={bunker} /> */}
              {/* {user && <CommentInput bunkerID={bunker.id} />} */}
              {/* <Comments bunkerID={bunker.id} /> */}
            </div>
            <div className="hidden lg:block">
              {/* <Suggestions type="relavant" userID={bunker.authorId} /> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const bunkerID = context.params.bunkerId;
  const res = await firebase
    .firestore()
    .collection("bunkers")
    .doc(bunkerID)
    .get();
  const bunker = res.data();
  const id = res.id;
  const user = await fetchUser({ userID: bunker.authorId });

  return {
    props: {
      bunker: {
        ...bunker,
        createdAt: bunker.createdAt.toDate().toString(),
        id,
        author: user,
      },
    },
  };
}

export default Bunker;
