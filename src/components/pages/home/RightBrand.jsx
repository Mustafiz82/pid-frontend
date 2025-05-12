import Button from "@/components/ui/button";

export default function RightBrand() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0 flex">
        {/* Background Images (Grid of Brands) */}
        {[
          '/images/home/right-brand-1.png',
          '/images/home/right-brand-2.png',
          '/images/home/right-brand-3.png',
          '/images/home/right-brand-4.png',
          '/images/home/right-brand-5.png',
          '/images/home/right-brand-6.png',
          '/images/home/right-brand-7.png',
         
        ].map((src, idx) => (
          <div key={idx} className="flex-1 relative">
            <img src={src} alt={`Brand ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Find The Right Brand</h1>
        <p className="mt-2 text-sm md:text-base">
          The wait is over—your perfect brand has finally arrived.
        </p>
        {/* <button className="mt-4 bg-white text-black font-semibold px-5 py-2 rounded-full shadow">
          Visit your Brand
        </button> */}

        <Button label={"Visit Your Brand"} variant="secondary" />
      </div>
    </section>
  );
}
