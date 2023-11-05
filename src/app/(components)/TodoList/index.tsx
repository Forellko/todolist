'use server';
import { prisma } from '@/db/prisma';
import TodoItem from '../TodoItem';

export default async function TodoList() {
  const todolist = await prisma.todo.findMany();
  return (
    <>
      {todolist.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center"
        >
          <TodoItem item={item} />
        </div>
      ))}
    </>
  );
}
