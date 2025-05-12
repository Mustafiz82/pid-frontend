import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background image */}
      <Image
        src={"/images/home/banner-img.png"}
        alt="Fashion Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 ">
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold px-4">
          We're Among The World's Leading Fashion Groups.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
