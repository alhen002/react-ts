import React, { ReactElement } from "react";
import { Card } from "./Card";
import { Card as CardType } from "../types";

export function Cards(): ReactElement {
  const [cards, setCards] = React.useState<CardType[]>([
    {
      id: 1,
      name: "Card1",
      description: "This is card 1",
      isComplete: false,
    },
    {
      id: 2,
      name: "Card2",
      description: "This is card 2",
      isComplete: false,
    },
    {
      id: 3,
      name: "Card3",
      description: "This is card 3",
      isComplete: false,
    },
  ]);

  const handleUpdateCard = (updatedCard: CardType) => {
    const updatedCards = cards.map((card) => {
      return card.id === updatedCard.id ? updatedCard : card;
    });
    setCards(updatedCards);
  };

  return (
    <section>
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} handleUpdateCard={handleUpdateCard} />
        );
      })}
    </section>
  );
}
