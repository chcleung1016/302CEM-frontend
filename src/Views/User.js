import React from "react";
import { getUser } from "../api";
import { useParams } from "react-router-dom";
import Section from "../Components/Section";
import Herotitle from "../Components/Herotitle";
import Centerlevel from "../Components/Centerlevel";
const follower = 300;
export default ({}) => {
  let { username } = useParams();
  const user = getUser(username);
  return user ? (
    <div>
       
  
        <Herotitle title="302CEM Project" subtitle="User Page"></Herotitle>
        <div class="container">
        <div class="notification">
      <Centerlevel title={username}></Centerlevel>
      <nav class="level is-mobile">
      <Centerlevel title="3456" heading="Tweets"></Centerlevel>
      <Centerlevel title="123" heading="Following"></Centerlevel>
      <Centerlevel title="456K" heading="Followers"></Centerlevel>
      <Centerlevel title="789" heading="Likes"></Centerlevel>
      </nav>
      </div>
      </div>
    </div>
  ) : (
    <div>no user found.</div>
  );
};
