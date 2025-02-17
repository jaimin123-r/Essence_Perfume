import React, { useState } from 'react';
import PerfumeCard from './PerfumeCard';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample perfume data
  const perfumes = [
    {
      id: 1,
      name: "Midnight Rose",
      description: "A mysterious blend of rose and amber, perfect for evening occasions",
      price: 89.99,
      quantity: 15,
      category: "Floral",
      image: "p-1.jpg"
    },
    {
      id: 2,
      name: "Ocean Breeze",
      description: "Fresh aquatic notes combined with citrus for a refreshing experience",
      price: 75.99,
      quantity: 20,
      category: "Fresh",
      image: "p-8.jpg"
    },
    {
      id: 3,
      name: "Velvet Oud",
      description: "Rich middle-eastern oud wood with vanilla undertones",
      price: 120.99,
      quantity: 10,
      category: "Oriental",
      image: "p-7.jpg"
    },
    {
      id: 4,
      name: "Citrus Symphony",
      description: "Bright blend of bergamot, lemon, and orange blossom",
      price: 65.99,
      quantity: 25,
      category: "Citrus",
      image: "p-6.jpg"
    },
    {
      id: 5,
      name: "Vanilla Dreams",
      description: "Sweet vanilla bean mixed with warm tonka and musk",
      price: 82.99,
      quantity: 18,
      category: "Oriental",
      image: "p-5.jpg"
    },
    {
      id: 6,
      name: "Forest Mystique",
      description: "Pine needles and cedarwood with earthy undertones",
      price: 95.99,
      quantity: 12,
      category: "Woody",
      image: "p-4.jpg"
    },
    {
      id: 7,
      name: "Jasmine Nights",
      description: "Intoxicating jasmine with subtle hints of gardenia",
      price: 78.99,
      quantity: 22,
      category: "Floral",
      image: "p-3.jpg"
    },
    {
      id: 8,
      name: "Amber Sunset",
      description: "Warm amber mixed with spicy notes and vanilla",
      price: 110.99,
      quantity: 8,
      category: "Oriental",
      image: "p-2.jpg"
    },
    {
      id: 9,
      name: "Lavender Fields",
      description: "Calming lavender with fresh herbs and white musk",
      price: 72.99,
      quantity: 30,
      category: "Aromatic",
      image: "p-8.jpg"
    },
    {
      id: 10,
      name: "Spice Market",
      description: "Exotic blend of cardamom, cinnamon, and clove",
      price: 88.99,
      quantity: 16,
      category: "Spicy",
      image: "p-7.jpg"
    },
    {
      id: 11,
      name: "Marine Aqua",
      description: "Sea salt and marine notes with a touch of cucumber",
      price: 68.99,
      quantity: 24,
      category: "Fresh",
      image: "p-6.jpg"
    },
  ];

  const filteredPerfumes = perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* <div className="mb-8">
        <input
          type="text"
          placeholder="Search perfumes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-amber-200 rounded-full focus:outline-none focus:border-amber-400"
        />
      </div>
       */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPerfumes.map(perfume => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

export default Products;
