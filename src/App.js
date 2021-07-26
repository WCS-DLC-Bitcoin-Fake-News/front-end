import { useState, useEffect, useContext, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";


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
import RouteBuilder from "./RouteBuilder"

function App() {
  return (
    <AppContext>
        <Router>
            <Switch>
              {/* Private Routes */}
              {/* Restricted to user logged in */}
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
              <PrivateRoute restricted={true} path="/explore">
                <Explore />
              </PrivateRoute>
              <PrivateRoute restricted={true} path="/debunk/:bunkerId" >
                <BunkerEditor />
              </PrivateRoute>
              <PrivateRoute restricted={true} path="/:userId/profile" >
                <Aprofile />
              </PrivateRoute>


              {/* Public Routes */}
              {/* Restricted, for logged user */}
              <PublicRoute restricted={true} path="/signin">
                <Init />
              </PublicRoute>

              <PublicRoute restricted={true} path="/signup">
                <Signup />
              </PublicRoute>
        
              
              {/* Public Routes */}
              {/* Always public */}
              <PrivateRoute restricted={false} path="/:userId/status/:bunkerId" >
                <Aprofile />
              </PrivateRoute>

              <PublicRoute restricted={false} path="/manifesto" >
                <Manifesto />
              </PublicRoute>

              <PublicRoute restricted={false} path="/bunkers/:bunkerId">
                <Bookmarks />
              </PublicRoute>

            </Switch>

          </Router>
    </AppContext>
  );
}

export default App;
