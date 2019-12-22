import React from "react";
import { getUser } from "../api";
import { useParams } from "react-router-dom";
import Section from "../Components/Section";
import Herotitle from "../Components/Herotitle";
import Centerlevel from "../Components/Centerlevel";
import Table from "../Components/Table";
import Title from "../Components/Title";
import Breadcrumb from "../Components/Breadcrumb";
import Graph from "../Components/Graph";
import {toShortNumber} from "../util";
const data = [
  {
    date: "2019-12-07",
    followers_increase: 18983,
    follower: 67332471,
    following_increase: 0,
    following: 47,
    tweets_increase: 48,
    tweets: 46700
  },
  {
    date: "2019-12-08",
    followers_increase: 24115,
    follower: 67352688,
    following_increase: 0,
    following: 47,
    tweets_increase: 23,
    tweets: 46723
  },
  {
    date: "2019-12-09",
    followers_increase: 39979,
    follower: 67392667,
    following_increase: 1,
    following: 48,
    tweets_increase: 105,
    tweets: 46828
  },
  {
    date: "2019-12-10",
    followers_increase: 30106,
    follower: 67422773,
    following_increase: 0,
    following: 48,
    tweets_increase: 18,
    tweets: 46846
  },
  {
    date: "2019-12-11",
    followers_increase: 24248,
    follower: 67447021,
    following_increase: 0,
    following: 48,
    tweets_increase: 77,
    tweets: 46961
  },
  {
    date: "2019-12-12",
    followers_increase: 24250,
    follower: 67447023,
    following_increase: 0,
    following: 48,
    tweets_increase: 20,
    tweets: 46981
  },
  {
    date: "2019-12-13",
    followers_increase: 24250,
    follower: 67447021,
    following_increase: 0,
    following: 48,
    tweets_increase: 20,
    tweets: 47001
  }
];
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
          <div className="fade">
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
          <Centerlevel heading="Created at 2017-12-07"></Centerlevel>
          </div>
          <br />
          <nav className="level is-mobile fade delay-s">
            <Centerlevel title={toShortNumber( data[data.length-1].tweets)} heading="Tweets"></Centerlevel>
            <Centerlevel title={data[data.length-1].following}  heading="Following"></Centerlevel>
            <Centerlevel title={toShortNumber(data[data.length-1].follower)}  heading="Followers"></Centerlevel>
          </nav>
          <br />
          <div className="fade delay-m">
          <Title
            title={
              "Twitter Stats Summary / User Statistics For " + username + ":"
            }
          ></Title>
          <Table data={data}></Table>
          </div>
          <div className="fade delay-l">
          <Title
            title={"Twitter Progress Graphs For " + username + ":"}
          ></Title>
          <Centerlevel title={"Followers For "+ username}></Centerlevel>
          <br/>
          <Graph data={data} label="follower"></Graph>
          <br/>
          <Centerlevel title={"Tweets For " + username}></Centerlevel>
          <br/>
          <Graph data={data} label="tweets"></Graph>
          </div>
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
