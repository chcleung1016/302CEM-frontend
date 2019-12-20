import React, { useState } from "react";
import { Link } from "react-router-dom";

export default ({}) => {
  const [username, setUsername] = useState("");
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            ></img>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <Link to={"/"}>
              <a class="navbar-item">Home</a>
            </Link>

            <a class="navbar-item">
              <div class="level-item">
                <div class="field has-addons">
                  <p class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Find an user"
                      value={username}
                      onChange={event => setUsername(event.target.value)}
                    ></input>
                  </p>
                  <p class="control">
                    <Link to={"/user/" + username}>
                      <button class="button">Search</button>
                    </Link>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        </div>
      </nav>
    
  );
};
