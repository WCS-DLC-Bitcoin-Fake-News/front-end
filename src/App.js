import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import VoteButton from "./components/voteButton";
import PostEditor from "./components/PostEditor";
import Article from "./pages/Article"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/upvote" component={VoteButton} />
        <Route exact path="/post" component={PostEditor} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;
