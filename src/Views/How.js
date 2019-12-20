import React from "react";
import Herotitle from "../Components/Herotitle";
import Section from "../Components/Section";
import Breadcrumb from "../Components/Breadcrumb";

export default () => {
  return ( 
    <div>
      <Herotitle title="302CEM Project" subtitle="How it works"></Herotitle>
      <div style={{ backgroundColor: "white" }}>
      <Breadcrumb page="Home" currentpage="How it works"></Breadcrumb>
      </div>
    </div>
  );
};
