import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/logo-hotel.tiff"
            alt="logo"
            width={70}
            height={60}
            priority
          />
        </Link>
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
