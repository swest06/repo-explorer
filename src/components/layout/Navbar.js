import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  //   const { icon, title } = props;
  return (
    <nav className="navbar bg-primary">
      {/* <i className={icon} />
        {title} */}
      <img src="./repo-explorer.png" alt="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: " Repo-Explorer",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
