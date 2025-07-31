import Image from "next/image";

interface HeaderSectionProps {
  title: string;
  subTitle: string;
}

const HeaderSection = ({ title, subTitle }: HeaderSectionProps) => {
  return (
    <header className="relative h-100 text-white overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/Foto_Hotel.avif"
          alt="header"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-100 text-center pt-14">
        <h1 className="text-4xl font-bold leading-tight capitalize">{title}</h1>
        <p className="text-xl text-gray-300 mt-5">{subTitle}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
