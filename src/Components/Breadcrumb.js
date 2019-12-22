import React from "react";
import { Link } from "react-router-dom";
export default ({ page, currentpage }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to={"/"}>{page}</Link>
          </li>
          <li className="is-active">
            <a href="/#" aria-current="page">
              {currentpage}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
