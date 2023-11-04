'use server';
import { prisma } from '@/db/prisma';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import FormCreateTodo from '../(components)/FormCreateTodo';

async function CreatePage() {
  'use server';
  const handleCreateTodo = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    'use server';
    await prisma.todo.create({ data: { title, description } });
    redirect('/');
  };

  return (
    <div className="w-full p-4">
      <FormCreateTodo />
    </div>
  );
}

export default CreatePage;
