import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import BunkerDetail from "./pages/BunkerDetail";
import BunkerForm from "./components/BunkerForm";
import Upvote from "./components/voteButton";
import BunkerEditor from "./pages/BunkerEditor";
// import CommentField from "./components/modules/Comment/CommentField";
// import CommentContainer from "./components/modules/Comment/CommentContainer";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layouts"
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
// import Signin from "./pages/login.js";
import Signup from "./pages/Signup";
import AppContext from "./pages/AppContext"
import Init from "./pages";

import Aprofile from "./pages/Aprofile"
import Abunker from "./pages/Aprofile/status/aBunker.js"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <AppContext>
        <Router>
            <Switch>
              <Route exact path="/">
                <Init />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <Route exact path="/bookmarks">
                <Bookmarks />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route path="/AProfile" >
                <Aprofile />
              </Route>
              <Route path="/ABunker" >
                <Abunker />
              </Route>
              <Route path="/debunk/:url" >
                <BunkerForm />
              </Route>
              <Route path="/:userId/status/:bunkerId" >
                <BunkerEditor />
              </Route>
            </Switch>
          </Router>
    </AppContext>
  );
}

export default App;
