import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif text-amber-900 mb-8 text-center">
          About Essence
        </h1>
        
        <div className="prose prose-amber mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Essence, where we believe that every fragrance tells a story. Our journey began
            with a simple passion for creating unique and memorable scent experiences.
          </p>
          
          <h2 className="text-2xl font-serif text-amber-900 mt-12 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2020, Essence has grown from a small collection of artisanal perfumes to
            a curated gallery of finest fragrances from around the world. We work directly with
            master perfumers who share our commitment to quality and creativity.
          </p>
          
          <h2 className="text-2xl font-serif text-amber-900 mt-12 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 mb-6">
            We believe that perfume is more than just a scent – it's an invisible accessory that
            completes your personal style. Each fragrance in our collection is carefully selected
            to offer a unique olfactory experience.
          </p>
          
          <h2 className="text-2xl font-serif text-amber-900 mt-12 mb-4">Quality Promise</h2>
          <p className="text-gray-700 mb-6">
            Every perfume in our collection undergoes rigorous quality testing. We source only the
            finest ingredients and work with renowned perfume houses to ensure exceptional quality
            in every bottle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;