import React from "react";
import { render } from "@testing-library/react";
import PokeDex from "../Components/pokedex/PokeDex";


it("renders without crashing", function() {
  render(<PokeDex />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<PokeDex />);
  expect(asFragment()).toMatchSnapshot();
});