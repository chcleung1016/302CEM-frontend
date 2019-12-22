import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";

export default ({ title }) => {
  return (
    <div className="level-item has-text-centered">
      <p className="title is-4">{title}</p>
    </div>
  );
};
