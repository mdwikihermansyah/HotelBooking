import Image from "next/image";
import Link from "next/link";

/**
 * * Footer component dengan peningkatan responsivitas menggunakan Tailwind CSS.
 */
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto border-t px-4py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* * Logo dan deskripsi */}
          <div className="mb-8 md:mb-0 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/logo-hotel.tiff"
                alt="logo"
                width={70}
                height={60}
                priority
              />
            </Link>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              itaque corrupti inventore nam cupiditate a!
            </p>
          </div>
          {/* * Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="mt-2 md:mt-5 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* * Legal */}
          <div className="mb-8 md:mb-0">
            <h4 className="mt-2 md:mt-5 text-lg font-semibold text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* * Newsletter */}
          <div className="flex flex-col">
            <h4 className="mt-2 md:mt-5 mb-4 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </p>
            <form action="" className="mt-5 w-full">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 font-bold text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
            {/* * Baris tambahan di bawah newsletter */}
            <div className="mt-4 text-gray-300 text-sm">
              Dapatkan penawaran eksklusif dan update terbaru langsung ke email
              Anda!
            </div>
          </div>
        </div>

        {/* * Bagian social/link tambahan, bisa diisi jika diperlukan */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="/" className="text-gray-400 hover:text-white"></Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
        &copy; 2025 Hotel Booking | dwikipedia | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
