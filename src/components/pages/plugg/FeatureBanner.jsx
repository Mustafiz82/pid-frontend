import Image from 'next/image';
import React from 'react';

const FeatureBanner = () => {
    return (
        <div className="relative w-full h-[400px] my-20">
            {/* Background image */}
            <Image
                src={"/images/plugg/feature-banner.png"}
                alt="Fashion Banner"
                fill
                className=""
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

export default FeatureBanner;