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
    </div>
  );
}

export default Navbar;
