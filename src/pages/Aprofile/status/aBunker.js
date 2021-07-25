import React, { useContext, useState, useEffect } from "react";
import CommentInput from "../../../components/CommentInput/CommentInput";
import Comments from "../../../components/Comments/Comments";
import Post from "../../../components/Post/Post";
import Suggestions from "../../../components/Suggestions/Suggestions";
import UserContext from "../../../contexts/UserContext";
// import firebase from "../../../firebase/init";
import Layout from "../../../layouts";
import { fetchUser } from "../../../Api/FetchData";
import { useParams } from "react-router-dom";
import axios from "axios";

const Bunker = () => {
  console.log("going here in Bunker");
  const [ bunker, setBunker ] = useState({})
  const { bunkerId } = useParams()
  const { user } = useContext(UserContext);
  console.log(user)
    
  async function handleUserLoad(context) {
    console.log("jjklll")
    const res = await axios.get(`/bunkers/${bunkerId}`);

    const id = res.id;
    const user = await fetchUser({ userID: bunker.authorId });
  
    // return {
    //   props: {
    //     bunker: {
    //       ...bunker,
    //       createdAt: bunker.createdAt.toDate().toString(),
    //       id,
    //       author: user,
    //     },
    //   }
  }

  useEffect(async () => {
    await handleUserLoad()
  }, [])

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
              <Post bunker={bunker} /> 
              {user && <CommentInput bunkerID={bunker.id} />}
              <Comments bunkerID={bunker.id} />
            </div>
            <div className="hidden lg:block">
             <Suggestions type="relavant" userID={bunker.authorId} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};


export default Bunker