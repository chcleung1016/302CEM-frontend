import React from "react";

export default ({ primary, children }) => {
  return <p className={primary ? "title" : ""}>{children}</p>;
};
