import Button from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Quality = () => {
    return (
        <div className='grid my-20 container px-5 mx-auto grid-cols-1 md:grid-cols-4'>
            <Image
                src={"/images/plugg/quality-1.png"}
                width={1000}
                height={1000}
                className='w-full h-[300px] sm:h-[400px] md:h-[500px]  object-cover'
                alt="Plugg Banner"
            />
            <div className="col-span-2 mx-auto py-10 px-4  space-y-7">
                <a href="https://pluggclothing.com" className="text-sm text-gray-500 underline">
                    pluggclothing.com
                </a>

                <h1 className="text-3xl font-extrabold mt-5">
                    QUALITY AND <br /> CRAFTSMANSHIP
                </h1>

                <p className="text-gray-600 text-base">
                    Since being unleashed over 20 years ago, Plugg clothing has been providing customers
                    with authentic, yet affordable stylish looks that can be worn season after season.
                </p>

                <Button label={"Read More"} variant='primary'/>
            </div>
            <Image
                src={"/images/plugg/quality-2.png"}
                width={1000}
                height={1000}
                className='w-full h-[300px] sm:h-[400px] md:h-[500px]  object-cover'
                alt="Plugg Banner"
            />
        </div>
    );
};

export default Quality;