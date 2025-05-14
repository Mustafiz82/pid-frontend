import Button from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const PetAdoptionHero = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
                {/* Left Image Section */}
                <div className="relative w-full md:w-1/2  md:aspect-auto">
                    <Image
                        src="/images/plugg/dog-driving.png"
                        alt="Dog Driving with Cat"
                       width={1000}
                       height={1000}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    {/* Play button overlay */}
                    <button className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-opacity-30 transition">
                        <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">With Utmost Care</h2>
                    <h3 className="text-xl md:text-2xl font-medium mb-4">Adopt your pets, Shop for clothing</h3>
                    <p className="text-sm text-gray-600 mb-6">
                        Well the Plugg dog is a symbol for all of our adopted pets here at Plugg Clothing.
                        Help support these fine non kill shelters below, or find out more information about
                        adopting a pet from them. See in our mind we didn’t only rescue our pets, but they rescued us.
                        Your best friend is waiting for you at one of these shelters.
                        To find out more, click on any of the links below.
                    </p>
                    <Button label={"Read More"} variant='primary' />
                </div>
            </section>
        </div>
    );
};

export default PetAdoptionHero;