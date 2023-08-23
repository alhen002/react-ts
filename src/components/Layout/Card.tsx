import { Card as CardType } from "../../../src/types";
import React, { ReactElement } from "react";
type CardProps = {
  card: CardType;
  handleUpdateCard: (updatedCard: CardType) => void;
};

export function Card({
  card: { id, name, description, isComplete },
  handleUpdateCard,
}: CardProps): ReactElement {
  // local state here
  const [editing, setEditing] = React.useState<boolean>(false);

  // handlers here
  const handleToggleCompleted = () =>
    handleUpdateCard({
      id,
      name,
      description,
      isComplete: !isComplete,
    });

  const handleUpdateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdateCard({
      id,
      name: event.target.value,
      description,
      isComplete,
    });
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleEditWithKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setEditing(!editing);
    }
  };

  return (
    <article>
      {editing ? (
        <input
          onKeyDown={handleEditWithKeyDown}
          type="text"
          value={name}
          onChange={handleUpdateName}
        />
      ) : (
        <h2 onDoubleClick={handleEdit}>{name}</h2>
      )}

      <p>{description}</p>
      {isComplete ? <p>Complete</p> : <p>Incomplete</p>}
      <button onClick={handleToggleCompleted}>Toggle Completed</button>
    </article>
  );
}
