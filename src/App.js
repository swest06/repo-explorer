import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>

      {/* <Footer /> */}
    </Fragment>
  </Router>
);

export default App;
