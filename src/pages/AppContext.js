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
import useLocalStorage from "./../hooks/useLocalStorage"
function AppContext({ children }) {

  const [user, setUser] = useLocalStorage("user");
  const [homeBunkersContext, setHomeBunkersContext] = useState(null);
  const [exploreBunkersContext, setExploreBunkersContext] = useState(null);
  const [bookmarksBunkersContext, setBookmarksBunkersContext] = useState(null);
  
  useEffect(() => console.log("Update on user storage", user), [user])

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
