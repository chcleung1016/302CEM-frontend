import React from "react";
import { Link } from "react-router-dom";
export default ({ page, currentpage }) => {
  return (
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to={"/"}>
              <a href="#">{page}</a>
            </Link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">
              {currentpage}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
