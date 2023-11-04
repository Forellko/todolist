'use client';

import { useState } from 'react';
import createTodo from './createTodo';
import { useRouter } from 'next/navigation';

export default function FormCreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { push } = useRouter();

  return (
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
          createTodo({ title, description });
          push('/');
        }}
        className="btn btn-active btn-primary w-full mt-5"
      >
        Create
      </button>
    </div>
  );
}
