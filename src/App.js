import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />

      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>

      {/* <Footer /> */}
    </Fragment>
  </Router>
);

export default App;
