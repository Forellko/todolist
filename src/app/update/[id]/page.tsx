'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import { getTodoById } from './getTodoById';
import updateTodo from './updateTodo';

function UpdatePage() {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, startTransition] = useTransition();

  const fetchTodos = () => {
    startTransition(async () => {
      const todo = await getTodoById(+params.id);
      setTitle(todo?.title ?? '');
      setDescription(todo?.description ?? '');
    });
  };

  const { push, refresh } = useRouter();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered input-accent w-full"
        />
        <textarea
          name="description"
          className="textarea textarea-primary mt-5 w-full resize-none h-[300px]"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          onClick={async () => {
            await updateTodo({
              id: +params.id,
              title,
              description,
            });
            push('/');
            refresh();
          }}
          className="btn btn-active btn-primary w-full mt-5"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdatePage;
