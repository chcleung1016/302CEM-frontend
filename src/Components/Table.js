import React from "react";
import { formatNumber, getDay } from "../util";

export default ({ data }) => {
  return (
    <div className="table-container">
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
              <NumberTd>{d.followers_diff}</NumberTd>
              <td>{formatNumber(d.followers)}</td>
              <NumberTd>{d.following_diff}</NumberTd>
              <td>{formatNumber(d.following)}</td>
              <NumberTd>{d.tweets_diff}</NumberTd>
              <td>{formatNumber(d.tweets)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
function NumberTd({ children }) {
  return children ? (
    <td style={{ color: children < 0 ? "red" : "green" }}>
      {(children > 0 ? "+" : "") + formatNumber(children)}
    </td>
  ) : (
    <td>-</td>
  );
}
