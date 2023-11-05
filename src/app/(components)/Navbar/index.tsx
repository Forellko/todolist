import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <Link href={'/create'} className="px-5">
          <AiOutlinePlus size={25} />
        </Link>
      </div>
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost normal-case text-xl">
          todolist
        </Link>
      </div>
      <div className="avatar placeholder p-5">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
          <span className="text-3xl">K</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
