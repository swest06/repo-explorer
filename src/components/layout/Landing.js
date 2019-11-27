import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">REPO-EXPLORER</h1>
          {/* <img src="./repo-explorer.v2.png" alt="logo" /> */}
          <p className="lead">Search for Github users and view their work.</p>
          <div className="buttons">
            <Link to="/main" className="btn btn-primary">
              Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// logoStyle = {};

export default Landing;
