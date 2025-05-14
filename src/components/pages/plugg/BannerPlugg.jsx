import React from 'react';
import Image from 'next/image';

const BannerPlugg = () => {
    return (
  <div className='relative'>
            {/* Background Banner */}
            <Image
                src={"/images/plugg/plugg-banner.png"}
                width={1000}
                height={1000}
                className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen object-cover'
                alt="Plugg Banner"
            />

            {/* Logo */}
            <Image
                src={"/images/plugg/pugg-logo 1.png"}
                width={1000}
                height={1000}
                className='w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto absolute bottom-10 left-5 sm:bottom-14 sm:left-10 md:bottom-20 md:left-20 object-cover'
                alt="Plugg Logo"
            />

            {/* Text Box */}
            <div className="absolute bottom-10 right-5 sm:bottom-14 sm:right-10 md:bottom-20 md:right-20 bg-white/40 p-4 sm:p-5 rounded">
                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold'>
                    Our mantra is: <br />
                    COMFORT and FUNCTION
                </h2>
            </div>
        </div>
    );
};

export default BannerPlugg;