import React from "react";
import { Card } from "./Layout/Card";

export function Cards() {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      name: { title: "Card1", editing: false },
      description: "This is card 1",
      isComplete: false,
    },
    {
      id: 2,
      name: { title: "Card2", editing: false },
      description: "This is card 2",
      isComplete: false,
    },
    {
      id: 3,
      name: { title: "Card3", editing: false },
      description: "This is card 3",
      isComplete: false,
    },
  ]);

  const handleToggleCompleted = (id: number) => {
    const updatedCards = cards.map((card) => {
      return card.id === id ? { ...card, isComplete: !card.isComplete } : card;
    });
    setCards(updatedCards);
  };

  const toggleEditting = (id: number) => {
    const updatedCards = cards.map((card) => {
      return card.id === id
        ? { ...card, name: { ...card.name, editing: !card.name.editing } }
        : card;
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
            toggleEditting={toggleEditting}
          />
        );
      })}
    </section>
  );
}
