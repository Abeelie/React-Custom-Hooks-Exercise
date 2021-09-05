import React from "react";
import { render } from "@testing-library/react";
import CardTable from "../Components/card-table/CardTable";


it("renders without crashing", function() {
  render(<CardTable />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<CardTable />);
  expect(asFragment()).toMatchSnapshot();
});