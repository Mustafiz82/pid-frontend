// pages/index.js

import BrandCard from "./BrandCard";

export default function Brands() {
  const brandData = [
    {
      title: 'Plugg',
      description: 'Plugg delivers bold denim style, built for everyday street comfort.',
      image: '/images/home/plugg.png', // Replace with your actual image paths
    },
    {
      title: 'Denali',
      description: 'Face the elements in comfort—Denali keeps you adventure-ready.',
      image: '/images/home/Denali.png',
    },
    {
      title: 'Iron Co',
      description: 'Built for strength, styled for work—Iron Co delivers durability.',
      image: '/images/home/ironco.png',
    },
  ];

  return (
    <div className="px-5 py-12">
      <h1 className="text-3xl font-bold mb-10">Brands that inspire you</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {brandData.map((brand, idx) => (
          <BrandCard key={idx} {...brand} />
        ))}
      </div>
    </div>
  );
}
