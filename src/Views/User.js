import React from "react";
import { getUser } from "../api";
import { useParams } from "react-router-dom";
import Section from "../Components/Section";
import Herotitle from "../Components/Herotitle";
import Centerlevel from "../Components/Centerlevel";
import Table from "../Components/Table";
import Title from "../Components/Title";
import Breadcrumb from "../Components/Breadcrumb";

export default () => {
  let { username } = useParams();
  const user = getUser(username);
  return user ? (
    <div>
      <Herotitle title="302CEM Project" subtitle="User"></Herotitle>
      <div
        className="container"
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <div className="box">
          <Breadcrumb page="Home" currentpage="User"></Breadcrumb>
          <div className="level-item has-text-centered">
            <div>
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                ></img>
              </figure>
            </div>
          </div>
          <Centerlevel title={username}></Centerlevel>
          <br />
          <nav className="level is-mobile">
            <Centerlevel title="3456" heading="Tweets"></Centerlevel>
            <Centerlevel title="123" heading="Following"></Centerlevel>
            <Centerlevel title="456K" heading="Followers"></Centerlevel>
            <Centerlevel title="789" heading="Likes"></Centerlevel>
          </nav>
          <br />
          <Title
            title={
              "Twitter Stats Summary / User Statistics For " + username + ":"
            }
          ></Title>
          <Table></Table>
          <Title
            title={"Twitter Progress Graphs For " + username + ":"}
          ></Title>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Herotitle title="302CEM Project" subtitle="User Page"></Herotitle>
      <Section subtitle="no user found."></Section>
    </div>
  );
};
