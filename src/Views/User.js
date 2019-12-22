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
  const lastData = data[data.length - 1];
  return user ? (
    <div>
      <Herotitle title="302CEM Project" subtitle="User"></Herotitle>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="box fade">
          <Breadcrumb page="Home" currentpage="User"></Breadcrumb>

          <div className="level-item has-text-centered">
            <div>
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  alt=""
                  src="https://bulma.io/images/placeholders/128x128.png"
                ></img>
              </figure>
            </div>
          </div>
          <Centerlevel title={username}></Centerlevel>
          <Centerlevel heading="Created at 2017-12-07"></Centerlevel>
          <br />
          <nav className="level is-mobile" style={{ paddingBottom: 10 }}>
            <Centerlevel
              numberAnimation
              title={lastData.tweets}
              heading="Tweets"
            ></Centerlevel>
            <Centerlevel
              numberAnimation
              title={lastData.following}
              heading="Following"
            ></Centerlevel>
            <Centerlevel
              numberAnimation
              title={lastData.follower}
              heading="Followers"
            ></Centerlevel>
          </nav>
        </div>

        <div className="box fade delay-m" style={{ padding: 25 }}>
          <p className="title">Summary</p>
          <br />
          <Table data={data}></Table>
        </div>
        <div className="box fade delay-l" style={{ padding: 25 }}>
          <p className="title">Graph</p>
          <br />
          <Title title="Followers"></Title>
          <br />
          <Graph data={data} label="follower"></Graph>
          <br />
          <br />
          <Title title="Following"></Title>
          <br />
          <Graph data={data} label="following"></Graph>
          <br />
          <br />
          <Title title="Tweets"></Title>
          <br />
          <Graph data={data} label="tweets"></Graph>
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
