"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArticleCard from './ArticleCard';

const ArticleSlider = () => {
    const articles = [
        {
            date: 'Feb 10, 2025',
            title: 'Spring 2025 Fashion Trends You Need to Know',
            image: '/images/home/article-images-1.png',
            link: '#',
        },
        {
            date: 'Mar 17, 2025',
            title: 'Summer Wardrobe Essentials: Stay Cool & Stylish',
            image: '/images/home/article-images-2.png',
            link: '#',
        },
        {
            date: 'Mar 27, 2025',
            title: 'The Art of Layering: How to Stay Warm & Stylish',
            image: '/images/home/article-images-3.png',
            link: '#',
        },
        {
            date: 'Apr 15, 2025',
            title: 'The Best of Affordable Denim Trends',
            image: '/images/home/article-images-4.png',
            link: '#',
        },
        {
            date: 'Apr 15, 2025',
            title: 'The Best of Affordable Denim Trends',
            image: '/images/home/article-images-1.png',
            link: '#',
        },
        {
            date: 'Apr 15, 2025',
            title: 'The Best of Affordable Denim Trends',
            image: '/images/home/article-images-2.png',
            link: '#',
        },
    ];

    return (
        <div className="py-12 my-10">
            <div className="!container px-10 mx-auto">
                <h2 className="text-4xl font-semibold text-gray-800  mb-8">Fashion Insights</h2>
                <Swiper
                    modules={[  Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <ArticleCard {...article} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
};

export default ArticleSlider;
