'use server';
import { prisma } from '@/db/prisma';
import { Todo } from '@prisma/client';

export async function getTodoById(id: number): Promise<Todo | null> {
  const todo = await prisma.todo.findUnique({ where: { id } });
  return todo;
}
