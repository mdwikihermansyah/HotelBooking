"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

export const NavLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md hover:bg-gray-100 md:hidden"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul
          className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm 
        bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:bg-white"
        >
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100
                rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
                hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
                md:hover:bg-transparent group"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/rooms"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
              hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
              md:hover:bg-transparent group"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
              hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
              md:hover:bg-transparent group"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/my-reservation"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
              hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
              md:hover:bg-transparent group"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin-dashboard"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
              hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
              md:hover:bg-transparent group"
            >
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/manage-rooms"
              className="block py-2 px-3 text-gray-800 rounded-sm md:p-0 relative transition-colors duration-300
              hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200
              md:hover:bg-transparent group"
            >
              Manage Rooms
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              className="py-2.5 px-6 bg-orange-500 text-white hover:bg-orange-600 rounded-sm"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
