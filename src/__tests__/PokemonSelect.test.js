import React from "react";
import { render } from "@testing-library/react";
import PokemonSelect from "../Components/pokemon-select/PokemonSelect";


it("renders without crashing", function() {
  render(<PokemonSelect />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<PokemonSelect />);
  expect(asFragment()).toMatchSnapshot();
});