import { footerData } from '@/Data/FooterData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    FaFacebook,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-20 px-5 bg-[#F2F2F2]'>
           <div className='!container mx-auto' >
             <div className='grid grid-cols-1  !gap-5 lg:grid-cols-8 '>
                {/* logo */}
                <Link href={"/"}>
                    <Image
                        src={"/images/logo.svg"}
                        width={500}
                        height={500}
                        className='h-10 w-auto '
                        alt="Logo"
                    />
                </Link>
                <div className='col-span-5 grid grid-cols-2 md:grid-cols-3 gap-5 lg:flex justify-between '>
                    {
                        footerData?.map((item, idx) => <div key={idx}>
                            <h2 className='font-semibold 2xl:text-xl'>{item?.category}</h2>

                            <ul className='mt-5 space-y-2'>
                                {
                                    item?.items.map((item, idx) => <li className='font-semibold text-sm 2xl:text-base text-black/70'>
                                        {item}
                                    </li>)
                                }
                            </ul>
                        </div>)
                    }
                </div>

            </div>

            <div className="flex lg:justify-end pr-16 gap-5 mt-10 items-center">
              
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="#"
                        aria-label="YouTube"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                    >
                        <FaYoutube size={24} />
                    </a>
               
            </div>

            <div className="flex lg:pl-40 2xl:pl-48 justify-between pr-16 mt-5 items-center">
                <p><span className='font-semibold'>Site Language:</span> EN | FR</p>
                <p>&copy; 2025 PID</p>
            </div>
           </div>
        </div>
    );
};

export default Footer;