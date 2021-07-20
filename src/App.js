import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import BunkerDetail from "./pages/BunkerDetail";
import BunkerEditor from "./pages/BunkerEditor";
import VoteButton from "./components/voteButton";
import FakeEmbed from "./pages/FakeEmbed";
import CommentField from "./components/modules/Comment/CommentField";
import CommentContainer from "./components/modules/Comment/CommentContainer";
import UserContext from "./contexts/UserContext";
import { useState, useEffect } from "react";

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
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
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
          <Route exact path="/post">
            <BunkerEditor />
          </Route>
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
            <VoteButton />
          </Route>
          <Route exact path="/comments">
            <CommentField />
          </Route>
          <Route exact path="/fake/:id">
            <FakeEmbed />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
