import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ArticleCard = ({ date, title, image, link }) => {
    return (
        <div className="w-full h-full p-4 bg-white shadow-md rounded-lg flex flex-col">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4 flex flex-col flex-grow">
                <p className="text-sm text-gray-500">{date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2 min-h-[3rem]">
                    {title}
                </h3>
                <Link
                    href={link}
                    className="group w-fit mt-5 inline-flex flex-col text-gray-500 hover:text-gray-800 transition"
                >
                    <span className="inline-flex items-center">
                        Read More
                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="block w-full border-b border-gray-300 mt-1 group-hover:border-gray-500"></span>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
