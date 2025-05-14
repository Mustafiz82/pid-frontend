import Image from 'next/image';
import React from 'react';

const Features = () => {

    const clothingFeaturesArray = [
        {
            category: "Styling",
            description: "Timeless styling meets trends for versatile, modern, confident looks.",
            image: "/images/plugg/plugg-banner.png"
        },
        {
            category: "Easy Care",
            description: "Low-maintenance fabrics offer wrinkle-free, quick-dry, durable daily wear.",
            image: "/images/plugg/features-1.png"
        },
        {
            category: "Function",
            description: "Thoughtful features add utility, convenience, and adaptability to clothing.",
            image: "/images/plugg/features-2.png"
        },
        {
            category: "Comfort",
            description: "Soft, flexible fabrics and great fit ensure all-day comfort.",
            image: "/images/plugg/features-3.png"
        }
    ];
    return (
        <div className='container pt-10  mx-auto px-5 '>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {
                    clothingFeaturesArray?.map((item, idx) => <div key={idx}>
                        <Image
                            src={item?.image}
                            width={1000}
                            height={1000}
                            className='w-full h-[300px] sm:h-[400px] object-cover'
                            alt="Plugg Banner"
                        />

                        <h2 className='text-2xl mt-3 font-semibold'>{item?.category}</h2>
                        <p className='mt-2 text-sm'>{item?.description}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;