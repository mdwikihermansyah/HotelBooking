import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div>
      <div className="bg-white rounded-lg transition-all duration-100 hover:shadow-sm">
        <div className="h-[260px] w-auto rounded-t-lg relative">
          <Image
            src="/foto_hotel.avif"
            alt="room image"
            fill
            className="object-cover object-center w-full h-full rounded-t-lg"
          />
        </div>
        <div className="p-8">
          <h4 className="text-xl font-medium mb-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Luxury Room
            </Link>
          </h4>
          <h4 className="text-2xl mb-2">
            <span className="font-semibold text-gray-500">Rp. 1.000.000</span>
            <span className="text-gray-400 text-sm line-through">Night</span>
          </h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className=""></div>
              <IoPeopleOutline className="text-gray-500" />
              <span className="text-sm text-gray-500">People</span>
            </div>
            <Link
              href="/"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-100"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
