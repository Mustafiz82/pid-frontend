import Image from 'next/image';
import React from 'react';

const BannerImage = () => {
    return (
        <div className='relative'>
            <Image
                src="/images/home/bannerImage.png"
                alt="banner"
                // layout="fill"
                objectFit="cover"
                className="rounded w-full  h-[400px] md:h-[500px] lg:h-[700px] object-cover"
                // priority
                width={1000}
                height={1000}

            />

            <div className='absolute top-1/2 right-20 -translate-y-1/2'>
                <h1 className='text-5xl leading-16 italic font-semibold text-white'>
                    Design. <br /> Durable. <br /> Delivered.
                </h1>
            </div>
        </div>
    );
};

export default BannerImage;