import React from "react";
import Breadcrumb from "../Components/Breadcrumb";

import Herotitle from "../Components/Herotitle";
export default () => {
  return ( 
    <div>
      <Herotitle title="302CEM Project" subtitle="Contact us"></Herotitle>
      <div style={{ backgroundColor: "white" }}>
      <Breadcrumb page="Home" currentpage="Contact us"></Breadcrumb>
      </div>
    </div>
  );
};
