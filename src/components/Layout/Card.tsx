type CardProps = {
  card: {
    id: number;
    name: string;
    description: string;
    isComplete: boolean;
  };
  handleToggleCompleted: (id: number) => void;
};

export function Card({
  card: { id, name, description, isComplete },
  handleToggleCompleted,
}: CardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      {isComplete ? <p>Complete</p> : <p>Incomplete</p>}
      <button onClick={() => handleToggleCompleted(id)}>
        Toggle Completed
      </button>
    </article>
  );
}
