import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Herotitle from "../Components/Herotitle";
export default () => {
  return (
    <div>
      <Herotitle subtitle="Contact us"></Herotitle>
      <div
        className="container fade"
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <div className="box">
          <Breadcrumb page="Home" currentpage="Contact us"></Breadcrumb>
        </div>
      </div>
    </div>
  );
};
