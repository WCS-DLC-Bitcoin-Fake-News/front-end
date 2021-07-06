import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PostEditor from "./components/PostEditor";
import CommentField from "./components/CommentField";

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
        <Route exact path="/post" component={PostEditor} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/comments" component={CommentField} />
      </Switch>
    </Router>
  );
}

export default App;
