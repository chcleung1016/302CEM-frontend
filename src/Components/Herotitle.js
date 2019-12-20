import React from "react";

export default ({ title, subtitle }) => {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{title}</h1>
          <h2 class="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
};