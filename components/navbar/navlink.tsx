"use client";

import { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Button from "../button/button";

/**
 * * Komponen NavLink dengan penambahan highlight warna orange pada link aktif.
 * * Menyembunyikan link tertentu berdasarkan status session dan role user.
 * * Menggunakan komponen Button untuk tombol Sign In dan Sign Out.
 * * Menggunakan gambar avatar dari public/avatar-icon.webp jika user.image tidak tersedia.
 */
const NavLink = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // * Daftar link navigasi utama dengan kontrol akses
  const navLinks = [
    { href: "/", label: "Home", show: true },
    { href: "/about", label: "About", show: true },
    { href: "/rooms", label: "Rooms", show: true },
    { href: "/contact", label: "Contact", show: true },
    // * Hanya tampil jika user sudah login
    { href: "/my-reservation", label: "My Reservation", show: !!session },
    // * Hanya tampil jika user login dan role admin
    {
      href: "/admin-dashboard",
      label: "Admin Dashboard",
      show: !!session && session.user?.role === "admin",
    },
    {
      href: "/manage-rooms",
      label: "Manage Rooms",
      show: !!session && session.user?.role === "admin",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2">
          <div
            className="hidden text-sm bg-gray-50 border rounded-full md:me-0
          md:block focus:ring-4 focus:ring-gray-300"
          >
            {/*
             * Menampilkan gambar avatar user.
             * Jika session.user.image tidak tersedia, gunakan /avatar-icon.webp dari public.
             * Pastikan file public/avatar-icon.webp tersedia di project.
             */}
            <Image
              src={session.user.image || "/avatar-icon.webp"}
              alt="user"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-4
            bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-md
           cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : null}
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
          {navLinks
            .filter((link) => link.show)
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block py-2 px-3 rounded-md md:p-0 relative transition-colors duration-300",
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
          {!session && (
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className={clsx(
                  "w-full md:w-auto py-2.5 px-6 rounded",
                  pathname === "/signin"
                    ? "bg-orange-500 text-white"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                )}
                aria-current={pathname === "/signin" ? "page" : undefined}
              >
                Sign In
              </Link>
            </li>
          )}
          {session && (
            <li className="pt-2 md:pt-0">
              <Button
                onClick={() => signOut()}
                className="md:hidden py-2.5 px-4 bg-red-400 text-white hover:bg-red-500 rounded-sm
                cursor-pointer"
                variant="outline"
                type="button"
              >
                Sign Out
              </Button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavLink;
