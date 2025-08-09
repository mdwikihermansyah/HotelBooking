import { Metadata } from "next";
import HeaderSection from "@/components/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocationOutline } from "react-icons/io5";

/**
 * * Metadata untuk halaman About
 */
export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Hotel modern dengan pelayanan terbaik di pusat kota.",
};

/**
 * * Komponen halaman About yang sudah disesuaikan dengan konten hotel
 */
const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="Tentang Kami"
        subTitle="Hotel modern dengan pelayanan terbaik di pusat kota."
      />
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src="/Foto_Hotel.avif"
              alt="Foto Hotel"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 575px"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
              Tentang Kami
            </h2>
            <p className="text-gray-700 py-2 text-base md:text-lg">
              Selamat datang di Hotel Harmoni, destinasi terbaik untuk
              kenyamanan dan kemewahan di pusat kota. Kami menawarkan pengalaman
              menginap yang tak terlupakan dengan fasilitas modern, pelayanan
              ramah, dan lokasi strategis dekat berbagai destinasi wisata serta
              pusat bisnis. Komitmen kami adalah memberikan layanan terbaik
              untuk setiap tamu, baik untuk perjalanan bisnis maupun liburan
              keluarga.
            </p>
            <ul className="list-none space-y-6 py-2">
              <li className="flex gap-4 items-start">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Visi :
                  </h4>
                  <p className="text-gray-600">
                    Menjadi hotel pilihan utama di kota dengan standar pelayanan
                    internasional dan kenyamanan maksimal bagi setiap tamu.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-none mt-1">
                  <IoLocationOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Misi :
                  </h4>
                  <p className="text-gray-600">
                    Memberikan pengalaman menginap terbaik melalui fasilitas
                    lengkap, kebersihan terjaga, dan pelayanan profesional yang
                    berorientasi pada kepuasan tamu.
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
