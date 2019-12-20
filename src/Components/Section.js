import React from "react";

export default ({ title, subtitle }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle} </h2>
      </div>
    </section>
  );
};
