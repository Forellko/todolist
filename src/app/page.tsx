'use server';
import { prisma } from '@/db/prisma';
import TodoItem from './(components)/TodoItem';
import { SessionProvider } from 'next-auth/react';
import TodoList from './(components)/TodoList';

export default async function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid justify-center gap-2 items-center xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 p-5">
        <TodoList />
      </div>
    </div>
  );
}
