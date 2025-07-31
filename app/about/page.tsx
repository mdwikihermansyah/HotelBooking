import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocationOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About Us",
  description: "lorem ipsum dolor sit amet",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About" subTitle="lorem ipsum dolor sit amet" />
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src="/foto_hotel.avif"
              alt="about"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 575px"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
              About Us
            </h2>
            <p className="text-gray-700 py-2 text-base md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam quod voluptas commodi harum, odio ad, consectetur
              provident alias dolor similique neque eveniet, omnis est
              aspernatur illum dolore voluptate laborum corporis cum ducimus
              voluptatibus. Quasi eveniet, dolores omnis voluptatum quis tempore
              doloribus obcaecati voluptate, reprehenderit minus, ab adipisci
              vel perspiciatis. Ex!
            </p>
            <ul className="list-none space-y-6 py-2">
              <li className="flex gap-4 items-start">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Vision :
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-none mt-1">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Mission :
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
