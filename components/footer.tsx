import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto border-t px-4 border-gray-500 py-10 md:py-16">
        <div className="grid md:grid-cols-4 gap-5">
          <div>
            <Link href="/" className="mb-10 block">
              <Image
                src="/logo-hotel.tiff"
                alt="logo"
                width={70}
                height={60}
                priority
              />
            </Link>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              itaque corrupti inventore nam cupiditate a!
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex-1 md:flex-none">
              <h4 className="mt-5 text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 md:flex-none">
              <h4 className="mt-5 text-lg font-semibold text-white">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:flex-none flex flex-col">
              <h4 className="mt-5 mb-5 text-xl font-semibold text-white">
                Newsletter
              </h4>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam,
              </p>
              <form action="" className="mt-5">
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-400 font-bold text-white p-3 py-2 rounded-md hover:bg-orange-500"
                >
                  Subscribe
                </button>
              </form>
              {/* * Menambahkan satu baris di bawah newsletter, lorem ipsum, dan input subscribe */}
              <div className="mt-4 text-gray-300 text-sm">
                Dapatkan penawaran eksklusif dan update terbaru langsung ke
                email Anda!
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/" className="text-gray-400 hover:text-white"></Link>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center tex-base text-gray-500">
        &copy; 2025 Hotel Booking | dwikipedia | All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
