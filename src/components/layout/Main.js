import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "../users/Search";
import Users from "../users/Users";
import Alert from "./Alert";
import axios from "axios";

class Main extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // Search github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  // Alert for when nothing is entered
  setAlert = (text, colour) => {
    this.setState({ alert: { text: text, colour: colour } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    return (
      <div className="Main">
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default Main;
