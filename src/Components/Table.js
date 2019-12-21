import React from "react";
import { formatNumber, getDay } from "../util";
const data = [
  { date: "2019-12-07", follower: 67308356, following: 41, tweets: 3456 },
  { date: "2019-12-08", follower: 67308356, following: 47, tweets: 3456 },
  { date: "2019-12-09", follower: 67308356, following: 47, tweets: 3456 },
  { date: "2019-12-10", follower: 67308356, following: 47, tweets: 3456 },
  { date: "2019-12-11", follower: 67308356, following: 47, tweets: 3456 },
  { date: "2019-12-12", follower: 67308356, following: 47, tweets: 3456 },
  { date: "2019-12-13", follower: 67308356, following: 47, tweets: 3456 }
];
export default () => {
  return (
    <table className="table is-fullwidth is-bordered is-hoverable">
      <thead>
        <tr>
          <td>DATE</td>
          <td></td>
          <td>FOLLOWERS</td>
          <td>FOLLOWING</td>
          <td>TWEETS</td>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={d.date}>
            <td>{d.date}</td>
            <td>{getDay(d.date)}</td>
            <td>{formatNumber(d.follower)}</td>
            <td style={{color: d.following===47?"red":"green"}}>{formatNumber(d.following)}</td>
            <td>{formatNumber(d.tweets)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
