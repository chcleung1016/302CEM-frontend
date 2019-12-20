import React, { useState } from "react";
import { Link } from "react-router-dom";
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
export default () => {
  const [username, setUsername] = useState("");
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            ></img>
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div className="navbar-start">
            <div className="tabs">
              <ul>
                <Link to={"/"}>
                  <li className="is-active">
                    <a>
                      <span class="icon is-small">
                        <i class="fas fa-home" aria-hidden="true"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </li>
                </Link>
                <Link to={"/howitworks"}>
                <li>
                  <a>How it works</a>
                </li>
                </Link>
                <Link to={"/contactus"}>
                <li>
                  <a>Contact us</a>
                </li>
                </Link>
                <Link to={"/help"}>
                <li>
                  <a>Help</a>
                </li>
                </Link>
              </ul>
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
                      placeholder="enter 'user1' for test"
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
      </div>
    </nav>
  );
};
