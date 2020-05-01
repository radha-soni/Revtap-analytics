import React from "react";
import renderer from "react-test-renderer";
import CustomersTable from "../CustomersTable";
test("Customer data renders correctly", () => {
  const component = renderer.create(<CustomersTable />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
