// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookmarksTweetsContext from "../contexts/BookmarksTweetsContext";
import ExploreTweetsContext from "../contexts/ExploreTweetsContext";
import HomeTweetsContext from "../contexts/HomeTweetsContext";
import UserContext from "../contexts/UserContext";
import firebase from "../firebase/init";
import "../styles/global.css";
import "../styles/reset.css";
const db = firebase.firestore();

function AppContext({ children }) {
  const protectedRoutes = ["/home", "/bookmarks"];

  const [user, setUser] = useState(null);
  const [homeTweetsContext, setHomeTweetsContext] = useState(null);
  const [exploreTweetsContext, setExploreTweetsContext] = useState(null);
  const [bookmarksTweetsContext, setBookmarksTweetsContext] = useState(null);

  // useEffect(() => {
  //   async function getCurrentUser(userID) {
  //     const user = await db.collection("users").doc(userID).get();
  //     setUser({ ...user.data(), uid: userID });
  //   }

  //   firebase.auth().onAuthStateChanged((loggedUser) => {
  //     if (!loggedUser) {
       
  //     } else {
  //     }
  //   });
  // }, []);

  return (
    <>
      <title>Tweeter</title>
      <UserContext.Provider value={{ user, setUser }}>
        <HomeTweetsContext.Provider
          value={{ homeTweetsContext, setHomeTweetsContext }}>
          <ExploreTweetsContext.Provider
            value={{ exploreTweetsContext, setExploreTweetsContext }}>
            <BookmarksTweetsContext.Provider
              value={{ bookmarksTweetsContext, setBookmarksTweetsContext }}>
              {children}
            </BookmarksTweetsContext.Provider>
          </ExploreTweetsContext.Provider>
        </HomeTweetsContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default AppContext;
