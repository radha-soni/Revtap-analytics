import React from "react";
import renderer from "react-test-renderer";
import LineChart from "../LineChart";
test("line chart renders correctly", () => {
  const order = [
    {
      id: "3eec09ba-92f3-4f3e-abe4-5775decca863",
      created: "2020-04-13T12:19:08.890Z",
      customer: "Hills",
      product: "Gloves",
      price: "833.00",
    },
  ];

  const chart = renderer.create(<LineChart order={order} />).toJSON();

  expect(chart).toMatchSnapshot();
});
