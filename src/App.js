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
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/post" component={BunkerEditor} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/comments" component={CommentContainer} />
          <Route exact path="/bunkers/:id" component={BunkerDetail} />
          <Route exact path="/upvote" component={VoteButton} />
          <Route exact path="/comments" component={CommentField} />
          <Route exact path="/commenttest" component={CommentContainer} />
          <Route exact path="/fake/:id" component={FakeEmbed} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
