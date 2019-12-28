import React from "react";
import Herotitle from "../Components/Herotitle";
import Breadcrumb from "../Components/Breadcrumb";

export default () => {
  return (
    <div>
      <Herotitle  subtitle="How it works"></Herotitle>
      <div
        className="container fade"
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <div className="box">
          <Breadcrumb page="Home" currentpage="How it works"></Breadcrumb>
        </div>
      </div>
    </div>
  );
};
