"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  XAxisTickContentProps,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { ReactNode } from "react";

// #region Sample data

function renderTick(tickProps: XAxisTickContentProps): ReactNode {
  const { x: xProp, y: yProp, payload, height: heightProp } = tickProps;
  const x = Number(xProp);
  const y = Number(yProp);
  const height = Number(heightProp);
  const { value, offset = 0 } = payload;

  return (
    <text
      x={x + height / 2}
      y={y + height}
      textAnchor="middle"
      transform={`rotate(-90 ${x} ${y + height})`}
      className="fill-foreground"
    >
      {value}
    </text>
  );
}

// #endregion
export function AvgMaxByCategoryBars() {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" interval={0} height={100} tick={renderTick} />
      <YAxis width="auto" />
      <Tooltip cursor={{ opacity: 0.5 }} />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      <RechartsDevtools />
    </BarChart>
  );
}
