import React from "react";
import renderer from "react-test-renderer";
import BarChart from "../BarChart.js";
test("bar chart renders correctly", () => {
  const chart = renderer.create(<BarChart />);
  let bar = chart.toJSON();
  expect(bar).toMatchSnapshot();
});
