import React from "react";
import { render } from "@testing-library/react";
import PlayingCard from "../Components/playing-card/PlayingCard";


it("renders without crashing", function() {
  render(<PlayingCard />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<PlayingCard />);
  expect(asFragment()).toMatchSnapshot();
});