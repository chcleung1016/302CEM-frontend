import React from "react";
import {toShortNumber,formatNumber} from "../util";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer
} from "recharts";
export default ({data, label}) => {
  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={toShortNumber} domain={["auto", "auto"]} />
          <Tooltip
          formatter={formatNumber}
            wrapperStyle={{
              borderColor: "white",
              boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)"
            }}
            contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            labelStyle={{ fontWeight: "bold", color: "#666666" }}
          />
          <Line dataKey={label} stroke="#3298dc" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
