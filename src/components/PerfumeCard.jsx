import React from 'react';

const PerfumeCard = ({ perfume }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={perfume.image}
        alt={perfume.name}
        className="w-full h-38 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-serif text-amber-900 mb-2">{perfume.name}</h3>
        <p className="text-gray-600 mb-2">{perfume.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-amber-700 font-semibold">${perfume.price}</span>
          <span className="text-gray-500">Stock: {perfume.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCard;