type CardProps = {
  card: {
    id: number;
    name: {
      title: string;
      editing: boolean;
    };
    description: string;
    isComplete: boolean;
  };
  handleToggleCompleted: (id: number) => void;
  toggleEditting: (id: number) => void;
};

export function Card({
  card: {
    id,
    name: { title, editing },
    description,
    isComplete,
  },
  handleToggleCompleted,
  toggleEditting,
}: CardProps) {
  return (
    <article>
      {editing ? (
        <input type="text" value={title} />
      ) : (
        <h2
          onDoubleClick={() => {
            toggleEditting(id);
          }}
        >
          {title}
        </h2>
      )}

      <p>{description}</p>
      {isComplete ? <p>Complete</p> : <p>Incomplete</p>}
      <button onClick={() => handleToggleCompleted(id)}>
        Toggle Completed
      </button>
    </article>
  );
}
