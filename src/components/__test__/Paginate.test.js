import React from "react";
import renderer from "react-test-renderer";
import Paginate from "../Paginate";

test("Pagination works correctly", () => {
  const paginate = renderer.create(<Paginate />);
  let Pagination = paginate.toJSON();
  expect(Pagination).toMatchSnapshot();
});
