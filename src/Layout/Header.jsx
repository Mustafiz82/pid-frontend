"use client"
import { headerData } from '@/Data/NavData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";


const Header = () => {

    const [hoverIndex, setHoverIndex] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [activeMobileIndex, setActiveMobileIndex] = useState(null);



    return (
        <div
            className='relative'
            onMouseLeave={() => {
                setHoverIndex(null);
                setShowDropdown(false);

            }}
            onMouseOver={() => {
                if (hoverIndex !== null) setShowDropdown(true);
            }}
        >
            <div className='px-4 relative bg-white z-[900]  flex justify-between items-center py-4'>
                <div className='flex gap-10 items-center'>
                    {/* logo */}
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo.svg"}
                            width={500}
                            height={500}
                            className='h-10 w-auto '
                            alt="Logo"
                        /></Link>

                    {/* routes */}
                    <ul className='lg:flex hidden  gap-4'>
                        {
                            headerData?.map((item, idx) => (
                                <li
                                    key={idx}
                                    onMouseOver={() => {
                                        setHoverIndex(idx);
                                        setShowDropdown(true);
                                    }}
                                    className='hover:underline font-semibold py-3 \ relative cursor-pointer'
                                >
                                    {item?.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='flex gap-2 items-center'>
                    {/* search */}
                    <CiSearch
                        className='lg:mr-20' size={30} />
                    <GrMenu
                        className='lg:hidden'
                        onClick={() => setShowMenu(!showMenu)}
                        size={25} />

                </div>

            </div>

            {/* Full-width dropdown */}
            {
                showDropdown && headerData?.[hoverIndex]?.children?.length > 0 && (
                    <div
                        className='w-full bg-white absolute top-16 left-0 min-h-[250px] \ z-50'
                    >
                        <ul className='px-36 py-5 space-y-2'>
                            {
                                headerData?.[hoverIndex]?.children?.map((item, idx) => (
                                    <li className='hover:underline cursor-pointer' key={idx}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }


            {/* mobile dropdown nav*/}

            {showMenu && (
                <div
                    className="fixed inset-0 bg-black/10 bg-opacity-50 z-[800]"
                    onClick={() => setShowMenu(false)}
                ></div>
            )}

            <div className={`absolute z-[900] duration-300 bg-white w-full min-h-[300px] ${showMenu ? "top-16" : "-translate-y-full top-0"
                }`}>
                <ul className='px-4 py-5 space-y-2'>
                    {headerData?.map((item, idx) => {
                        const hasChildren = item?.children?.length > 0;
                        const isActive = activeMobileIndex === idx;

                        return (
                            <li key={idx} className=''>
                                <div
                                    className='flex justify-between items-center py-3 cursor-pointer font-semibold'
                                    onClick={() => {
                                        if (hasChildren) {
                                            setActiveMobileIndex(isActive ? null : idx);
                                        } else {
                                            // Optionally handle navigation
                                            setShowMenu(false);
                                        }
                                    }}
                                >
                                    <span>{item?.title}</span>
                                    {hasChildren && (
                                        <span className='text-sm'>{isActive ? '▲' : '▼'}</span>
                                    )}
                                </div>

                                {/* Show children vertically if active */}
                                {hasChildren && isActive && (
                                    <ul className='pl-4 space-y-2'>
                                        {item.children.map((child, childIdx) => (
                                            <li key={childIdx} className='text-sm hover:underline cursor-pointer'>
                                                {child}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>

            </div>

        </div>

    );
};

export default Header;