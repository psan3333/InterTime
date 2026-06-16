"use client";

import { Pie, PieChart } from "recharts";
import chroma from "chroma-js";

const mockData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const RADIAN = Math.PI / 180;

function generatePieColors(numSlices: number) {
  return chroma
    .scale(["red", "yellow", "green", "cyan", "blue", "magenta"])
    .mode("lch")
    .colors(numSlices);
}

export function TimeByCategoryPieChart() {
  const colors = generatePieColors(34);
  return (
    <div className="flex flex-row gap-5 flex-wrap">
      {colors.map((color, index) => (
        <div key={index} className={`w-25 h-25 bg-[${color}]`}></div>
      ))}
    </div>
  );
}
