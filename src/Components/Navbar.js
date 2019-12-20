import React, { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [username, setUsername] = useState("");
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-start">
          <div className="hero-head">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-start">
              <div className="tabs is-left">
                <ul>
                  <Link to={"/"}>
                    <li className="is-active">
                      <a>Home</a>
                    </li>
                  </Link>
                  <li>
                    <a href="">Examples</a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Team</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <div className="navbar-end">
          <a className="navbar-item">
            <div className="level-item">
              <div className="field has-addons">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Find an user"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                  ></input>
                </p>
                <p className="control">
                  <Link to={"/user/" + username}>
                    <button className="button">Search</button>
                  </Link>
                </p>
              </div>
              
            </div>
          </a>
          

        </div>
      </div>
    </nav>
  );
};
