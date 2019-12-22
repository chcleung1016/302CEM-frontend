import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import User from "./Views/User";
import Help from "./Views/Help";
import How from "./Views/How";
import Contact from "./Views/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/howitworks">
          <How />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/user/:username">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
