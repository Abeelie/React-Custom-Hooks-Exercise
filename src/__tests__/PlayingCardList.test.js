import React from "react";
import { render } from "@testing-library/react";
import PlayingCardList from "../Components/playing-card-list/PlayingCardList";


it("renders without crashing", function() {
  render(<PlayingCardList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<PlayingCardList />);
  expect(asFragment()).toMatchSnapshot();
});