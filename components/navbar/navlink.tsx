"use client";

import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * * Komponen NavLink dengan penambahan highlight warna orange pada link aktif.
 */
const NavLink = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // * Daftar link navigasi utama
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Rooms" },
    { href: "/contact", label: "Contact" },
    { href: "/my-reservation", label: "My Reservation" },
    { href: "/admin-dashboard", label: "Admin Dashboard" },
    { href: "/manage-rooms", label: "Manage Rooms" },
  ];

  if (!mounted) {
    return null;
  }

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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "block py-2 px-3 rounded-sm md:p-0 relative transition-colors duration-300",
                  "text-gray-800 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 md:hover:bg-transparent group",
                  {
                    // * Aktifkan warna orange jika path cocok
                    "bg-orange-500 text-white md:bg-transparent md:text-orange-500":
                      pathname === link.href,
                  }
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              className={clsx(
                "py-2.5 px-6 rounded-sm",
                pathname === "/signin"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              )}
              aria-current={pathname === "/signin" ? "page" : undefined}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLink;
