'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function CreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { push } = useRouter();

  const handleCreateTodo = () => {
    push('/');
  };

  return (
    <div className="w-full p-4">
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered input-accent w-full"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <textarea
        className="textarea textarea-primary mt-5 w-full resize-none h-[300px]"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      ></textarea>
      <button
        onClick={() => handleCreateTodo()}
        className="btn btn-active btn-primary w-full mt-5"
      >
        Create
      </button>
    </div>
  );
}

export default CreatePage;
