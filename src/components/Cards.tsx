import React from "react";
import { Card } from "./Layout/Card";

export function Cards() {
  const [cards, setCards] = React.useState([
    { id: 1, name: "Card 1", description: "This is card 1", isComplete: false },
    { id: 2, name: "Card 2", description: "This is card 2", isComplete: false },
    { id: 3, name: "Card 3", description: "This is card 3", isComplete: false },
  ]);

  const handleToggleCompleted = (id: number) => {
    const updatedCards = cards.map((card) => {
      return card.id === id ? { ...card, isComplete: !card.isComplete } : card;
    });
    setCards(updatedCards);
  };

  return (
    <section>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            handleToggleCompleted={handleToggleCompleted}
          />
        );
      })}
    </section>
  );
}
