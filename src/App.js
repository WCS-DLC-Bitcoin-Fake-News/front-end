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
import BunkerForm from "./components/BunkerForm";
import VoteButton from "./components/voteButton";
import Article from "./pages/Article"
import CommentField from "./components/CommentField";
import CommentTest from "./components/CommentTest";
import CommentContainer from "./components/CommentContainer";
import FakeEmbed from "./pages/FakeEmbed";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/post" component={BunkerForm} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/bunkers/:id" component={BunkerDetail} />
        <Route exact path="/upvote" component={VoteButton} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/comments" component={CommentField} />
        <Route exact path="/commenttest" component={CommentContainer} />
        <Route exact path="/fake/:id" component={FakeEmbed} />

      </Switch>
    </Router>
  );
}

export default App;
