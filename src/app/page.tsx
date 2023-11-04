'use server';
import { prisma } from '@/db/prisma';
import Navbar from './(components)/Navbar';
import TodoItem from './(components)/TodoItem';

export default async function Home() {
  const todolist = await prisma.todo.findMany();

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid justify-center gap-2 items-center xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 p-5">
        {todolist.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <TodoItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
