import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default () => {
  const [username, setUsername] = useState("");
  const path = useLocation().pathname;
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            ></img>
          </a>
          <div
            className={`navbar-burger burger${menuActive ? " is-active" : ""}`}
            onClick={() => setMenuActive(!menuActive)}
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu${menuActive ? " is-active" : ""}`}
        >
          <div className="navbar-start">
            <div className="tabs">
              <ul>
                <Link onClick={() => setMenuActive(false)} to={"/"}>
                  <li className={path === "/" ? "is-active" : ""}>
                    <a>
                      <span className="icon is-small">
                        <i className="fas fa-home" aria-hidden="true"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </li>
                </Link>
                <Link onClick={() => setMenuActive(false)} to={"/howitworks"}>
                  <li className={path === "/howitworks" ? "is-active" : ""}>
                    <a>
                      <span className="icon is-small">
                        <i class="fas fa-wrench" aria-hidden="true"></i>
                      </span>
                      <span>How it works</span>
                    </a>
                  </li>
                </Link>
                <Link onClick={() => setMenuActive(false)} to={"/contactus"}>
                  <li className={path === "/contactus" ? "is-active" : ""}>
                    <a>
                      <span className="icon is-small">
                        <i class="fas fa-phone" aria-hidden="true"></i>
                      </span>
                      <span>Contact us</span>
                    </a>
                  </li>
                </Link>
                <Link onClick={() => setMenuActive(false)} to={"/help"}>
                  <li className={path === "/help" ? "is-active" : ""}>
                  <a>
                      <span className="icon is-small">
                        <i class="fas fa-question" aria-hidden="true"></i>
                      </span>
                      <span>Help</span>
                    </a>
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
                    <Link
                      onClick={() => setMenuActive(false)}
                      to={"/user/" + username}
                    >
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
