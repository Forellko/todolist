'use server';

import { prisma } from '@/db/prisma';
import { redirect } from 'next/navigation';

interface CreateTodoProps {
  title: string;
  description: string;
}

export default async function CreateTodo({
  description,
  title,
}: CreateTodoProps) {
  await prisma.todo.create({ data: { title, description } });
}
