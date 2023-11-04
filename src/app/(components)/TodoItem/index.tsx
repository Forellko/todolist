'use client';

import { Todo } from '@prisma/client';
import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import removeItem from './removeTodo';
import { useRouter } from 'next/navigation';

function TodoItem({ item }: { item: Todo }) {
  const { refresh, push } = useRouter();

  const handleCardClick = () => {
    push('/update/' + item.id);
  };

  return (
    <div
      className="card bg-base-100 shadow-xl w-full min-h-[300px]"
      onClick={handleCardClick}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{item.title}</h2>
          <button
            onClick={(e) => {
              removeItem(item.id);
              e.stopPropagation();
              refresh();
            }}
          >
            <TiDeleteOutline size={25} />
          </button>
        </div>
        <p className="break-words">{item.description}</p>
      </div>
    </div>
  );
}

export default TodoItem;
