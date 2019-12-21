import React from "react";
import { formatNumber, getDay } from "../util";

export default ({data}) => {
  return (
    <div class="table-container">
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <td>DATE</td>
            <td></td>
            <td>FOLLOWERS</td>
            <td></td>
            <td>FOLLOWING</td>
            <td></td>
            <td>TWEETS</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.date}>
              <td>{d.date}</td>
              <td>{getDay(d.date)}</td>
              <td
                style={{ color: d.followers_increase === 0 ? "red" : "green" }}
              >
                {"+" + formatNumber(d.followers_increase)}
              </td>
              <td>{formatNumber(d.follower)}</td>
              <td
                style={{ color: d.followers_increase === 0 ? "red" : "green" }}
              >
                {"+" + formatNumber(d.following_increase)}
              </td>
              <td>{formatNumber(d.following)}</td>
              <td
                style={{ color: d.followers_increase === 0 ? "red" : "green" }}
              >
                {"+" + formatNumber(d.tweets_increase)}
              </td>
              <td>{formatNumber(d.tweets)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
