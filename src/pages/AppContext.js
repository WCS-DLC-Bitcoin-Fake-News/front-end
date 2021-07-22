// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookmarksBunkersContext from "../contexts/BookmarksBunkersContext";
import ExploreBunkersContext from "../contexts/ExploreBunkersContext";
import HomeBunkersContext from "../contexts/HomeBunkersContext";
import UserContext from "../contexts/UserContext";
// import firebase from "../firebase/init";
import "../styles/global.css";
import "../styles/reset.css";
// const db = firebase.firestore();

function AppContext({ children }) {

  const [user, setUser] = useState(null);
  const [homeBunkersContext, setHomeBunkersContext] = useState(null);
  const [exploreBunkersContext, setExploreBunkersContext] = useState(null);
  const [bookmarksBunkersContext, setBookmarksBunkersContext] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);


  return (
    <>
      <title>Bunkerer</title>
      <UserContext.Provider value={{ user, setUser }}>
        <HomeBunkersContext.Provider
          value={{ homeBunkersContext, setHomeBunkersContext }}>
          <ExploreBunkersContext.Provider
            value={{ exploreBunkersContext, setExploreBunkersContext }}>
            <BookmarksBunkersContext.Provider
              value={{ bookmarksBunkersContext, setBookmarksBunkersContext }}>
              {children}
            </BookmarksBunkersContext.Provider>
          </ExploreBunkersContext.Provider>
        </HomeBunkersContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default AppContext;
