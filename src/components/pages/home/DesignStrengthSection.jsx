import Image from 'next/image';
import React from 'react';

const DesignStrengthSection = () => {
    return (
        <section className="flex gap-16 flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
            {/* Text Content */}
            <div className="w-full md:w-3/5 mb-10 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Innovative Design <br /> Strength
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    At PID, Design Is At The Heart Of Everything We Do. Our In-House Creative Teams Combine Trend Forecasting, Technical Expertise, And Market Insight To Develop Innovative, On-Brand Collections Across Multiple Categories. From Concept To Final Product, We Prioritize Functionality, Style, And Customer Appeal—Ensuring Every Design Reflects The Quality And Identity Our Partners Expect.
                </p>
                <button className="bg-black text-white font-medium px-6 py-2 rounded-full shadow hover:bg-gray-900 transition">
                    Read More
                </button>
            </div>

            {/* Images Grid */}
            <div className="w-full md:w-2/5  gap-4">
                <div className="h-[500px] relative">
                    <Image
                        src="/images/home/Desirn-Development-2.png"
                        alt="Planting 1"
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default DesignStrengthSection;