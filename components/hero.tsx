import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Foto_Hotel.avif"
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-7xl font-bold leading-tight mb-3 capitalize">
          Booking Hotel
        </h1>
        <p className="text-xl mb-8">
          Temukan hotel terbaik untuk liburan Anda dengan mudah dan aman
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="bg-orange-400 font-bold text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors w-full sm:w-auto"
          >
            Booking Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white font-bold text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
