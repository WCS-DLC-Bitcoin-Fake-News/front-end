import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
// import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import BunkerDetail from "./pages/BunkerDetail";
import BunkerForm from "./components/BunkerForm";
import Upvote from "./components/voteButton";
import BunkerEditor from "./pages/BunkerEditor";
import FakeEmbed from "./pages/FakeEmbed";
import CommentField from "./components/modules/Comment/CommentField";
import CommentContainer from "./components/modules/Comment/CommentContainer";
import UserContext from "./contexts/UserContext";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layouts"
import Home from "./pages/home.jsx";
import Explore from "./pages/explore.jsx";
import Bookmarks from "./pages/bookmarks.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import "./styles/global.css"
import "./styles/reset.css";

import First from "./pages";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (

    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Router>
        {/* <Navbar /> */}
        <Layout>
          <Switch>
            <Route exact path="/">
              <First />
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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            {/* <Route exact path="/post">
              <BunkerEditor />
            </Route> */}
            <ProtectedRoute path="/post" component={BunkerEditor}/>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/comments">
              <CommentContainer />
            </Route>
            <Route exact path="/bunkers/:id">
              <BunkerDetail />
            </Route>
            <Route exact path="/upvote">
              <Upvote />
            </Route>
            <Route exact path="/comments">
              <CommentField />
            </Route>
            <Route exact path="/fake/:id">
              <FakeEmbed />
            </Route>
          </Switch>
      </Layout >

        </Router>

    </UserContext.Provider>
  );
}

export default App;
