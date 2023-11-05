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
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="m-1">
          <div className="avatar placeholder p-5">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16"></div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>Log in</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
