import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import User from "./Views/User";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        {/* { <Route path="/about">
          <About />
        </Route> */}
        <Route path="/user/:username">
          <User />
        </Route> 
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
