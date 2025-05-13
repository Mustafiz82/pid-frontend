import Image from "next/image";

export default function ManufacturingSolutions() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8">

            {/* Left: Images Grid */}
            <div className="  gap-4 md:w-1/2">
                <Image src={"/images/home/Manufucturing.png"}
                    width={500}
                    height={500}
                    className="h-auto "
                />
                {/* <div className="flex w-1/2 gap-5 ">
                    <Image src={"/images/home/ManufacturingSolutions-1.png"}
                        width={500}
                        height={500}
                        className="w-1/2 h-auto "
                    />
                    <Image src={"/images/home/ManufacturingSolutions-1.png"}
                        width={500}
                        height={500}
                        className="w-1/2 -mt-20 h-auto "
                    />
                </div> */}

            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Scalable Manufacturing <br /> Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                    At PID, Our Scalable Manufacturing Solutions Are Designed To Adapt To The Needs Of Global Partners—
                    Whether It's Small-Batch Runs Or Large-Volume Orders. With A Diversified Production Base And Strong Vendor Relationships Across Key Regions,
                    We Ensure Flexibility, Speed, And Consistent Quality At Every Stage Of The Manufacturing Process.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-80 transition">
                    Read More
                </button>
            </div>
        </section>
    );
}
