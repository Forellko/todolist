'use server';

import { prisma } from '@/db/prisma';

export default async function removeItem(id: number) {
  await prisma.todo.delete({ where: { id } });
}
