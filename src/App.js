import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Init from "./pages";
import Landing from "./pages/Landing";
import Manifesto from "./pages/Manifesto";
import Signin from "./pages/Signin";
import BunkerEditor from "./pages/BunkerEditor";
import Layout from "./layouts"
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import Signup from "./pages/Signup";
import AppContext from "./pages/AppContext"

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
                <Home />
              </Route>
              <Route exact path="/signin">
                <Init />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>π
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <Route exact path="/bunkers/:bunkerId">
                <Bookmarks />
              </Route>
              <Route path="/debunk/:bunkerId" >
                <BunkerEditor />
              </Route>

              <Route path="/:userId/profile" >
                <Aprofile />
                {/* <Abunker />  */}
              </Route>

              <Route path="/:userId/status/:bunkerId" >
                <Aprofile />
                {/* <Abunker />  */}
              </Route>
              <Route path="/manifesto" >
                <Manifesto />
              </Route>
            </Switch>
          </Router>
    </AppContext>
  );
}

export default App;
