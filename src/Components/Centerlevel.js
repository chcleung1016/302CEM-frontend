import React from "react";
import CountUp from "react-countup";
import {toShortNumber} from "../util";
export default ({ title, heading, numberAnimation}) => {
  return (
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">{heading}</p>
        <p className="title">
          {numberAnimation ? (
            <CountUp delay={0.6} formattingFn={toShortNumber} end={title} />
          ) : (
            title
          )}
        </p>
      </div>
    </div>
  );
};
