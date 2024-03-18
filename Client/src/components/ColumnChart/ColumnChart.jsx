import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Alkane percentage", { role: "style" }],
  ["Jan 1", 8.94, "#b87333"], // RGB value
  ["Jan 2", 10.49, "silver"], // English color name
  ["Jan 3", 19.3, "gold"],
  ["Jan 4", 80, "color: #e5e4e2"], // CSS-style declaration
  ["Jan 5", 8.94, "#b87333"], // RGB value
  ["Jan 6", 10.49, "silver"], // English color name
  ["Jan 7", 19.3, "gold"],
  ["Jan 8", 80, "color: #e5e4e2"], // CSS-style declaration
  ["Jan 9", 80, "color: #e5e4e2"],
  ["Jan 10", 80, "color: #e5e4e2"],
  ["Jan 11", 80, "color: #e5e4e2"],
  ["Jan 12", 0, "color: #e5e4e2"],
  ["Jan 13", 80, "color: #e5e4e2"],
  ["Jan 14", 80, "color: #e5e4e2"],
  ["Jan 15", 80, "color: #e5e4e2"],
  ["Jan 16", 80, "color: #e5e4e2"],
  ["Jan 17", 80, "color: #e5e4e2"],
  ["Jan 18", 80, "color: #e5e4e2"],
  ["Jan 19", 50, "color: #e5e4e2"],
  ["Jan 20", 50, "color: #e5e4e2"],
  ["Jan 21", 50, "color: #e5e4e2"],
  ["Jan 22", 50, "color: #e5e4e2"],
  ["Jan 23", 50, "color: #e5e4e2"],
  ["Jan 24", 50, "color: #e5e4e2"],
  ["Jan 25", 50, "color: #e5e4e2"],
  ["Jan 26", 50, "color: #e5e4e2"],
  ["Jan 27", 50, "color: #e5e4e2"],
  ["Jan 28", 50, "color: #e5e4e2"],
  ["Jan 29", 50, "color: #e5e4e2"],
  ["Jan 30", 50, "color: #e5e4e2"],
];

function ColumnChart() {
  return (
    <Chart chartType="ColumnChart" width="850px" height="250px" data={data} />
  );
}

export default ColumnChart;
