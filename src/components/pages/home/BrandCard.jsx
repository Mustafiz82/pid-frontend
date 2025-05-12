import Button from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const BrandCard = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-start space-y-4">
            <div className="w-full h-[400px] relative">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    priority
                />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2  text-gray-700">{description}</p>
                <Button label={"Visit"} variant='primary' />
            </div>
        </div>
    );
};

export default BrandCard;


