'use server';

import { prisma } from '@/db/prisma';
import { Todo } from '@prisma/client';

export default async function updateTodo(todo: Todo) {
  await prisma.todo.update({ data: todo, where: { id: todo.id } });
}
