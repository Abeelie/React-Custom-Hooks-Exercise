import React from "react";
import { v4 as uuid } from "uuid";
import PlayingCard from "../playing-card/PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "../../hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [data, setData, clearData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setData}>Add a playing card!</button>
        <button onClick={clearData}>Clear All Cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
