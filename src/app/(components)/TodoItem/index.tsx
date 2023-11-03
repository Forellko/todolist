import React from 'react';

interface TodoItemProps {
  item: {
    id: string;
    title: string;
    description: string;
  };
}

function TodoItem({ item }: TodoItemProps) {
  return (
    <div className="card bg-base-100 shadow-xl w-full">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="break-words">{item.description}</p>
      </div>
    </div>
  );
}

export default TodoItem;
