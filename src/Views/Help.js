import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Herotitle from "../Components/Herotitle";
export default () => {
  return (
    <div>
      <Herotitle title="302CEM Project" subtitle="Help"></Herotitle>
      <div
        className="container"
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <div className="box">
          <Breadcrumb page="Home" currentpage="Help"></Breadcrumb>
        </div>
      </div>
    </div>
  );
};
