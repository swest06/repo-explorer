import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "../users/Search";
import Users from "../users/Users";
import User from "../users/User";
import Alert from "./Alert";
import About from "../pages/About";

import axios from "axios";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // Search github users
  const searchUsers = async text => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  // Get a single github user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    setUser(res.data);
    setLoading(false);
  };

  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Alert for when nothing is entered
  const showAlert = (text, colour) => {
    setAlert({ text, colour });
    setLoading(false);

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <Router>
      <div className="Main">
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/main"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            {/* <Route exact path="/about" component={About} /> */}
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Main;
