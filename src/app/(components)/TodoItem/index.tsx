import { Todo } from '@prisma/client';
import React from 'react';

function TodoItem({ item }: { item: Todo }) {
  return (
    <div className="card bg-base-100 shadow-xl w-full min-h-[300px]">
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="break-words">{item.description}</p>
      </div>
    </div>
  );
}

export default TodoItem;
