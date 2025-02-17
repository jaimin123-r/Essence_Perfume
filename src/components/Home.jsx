import React from 'react';
import { Link } from 'react-router-dom';
import Carousel  from './Carousel.jsx';
// import { perfumes } from '../data/perfumes';

const Home = () => {
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
  ];
  const featuredPerfumes = perfumes.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">
              Discover Your Signature Scent
            </h1>
            <p className="text-lg text-amber-700 mb-8">
              Explore our collection of exclusive fragrances
            </p>
            <Link
              to="/products"
              className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>

      
{/* Testimonials Carousel */}
<Testimonials />
{/* Trust Badges Section */}
<TrustBadges />

{/* Video Section */}
{/* <VideoSection /> */}


      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-amber-900 mb-8 text-center">
          Featured Fragrances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPerfumes.map(perfume => (
            <div key={perfume.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif text-amber-900 mb-2">{perfume.name}</h3>
                <p className="text-gray-600 mb-4">{perfume.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-700 font-semibold">${perfume.price}</span>
                  <Link
                    to="/products"
                    className="text-amber-900 hover:text-amber-700 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustBadges = () => {
  return(
    <div className="bg-amber-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-serif text-amber-900 text-center mb-12">
      Why Choose Essence
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* <img src="/api/placeholder/64/64" alt="Quality" className="w-8 h-8" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-crown"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>
        </div>
        <h3 className="text-xl font-serif text-amber-900 mb-2">Premium Quality</h3>
        <p className="text-gray-600">Finest ingredients sourced globally</p>
      </div>
      <div className="text-center">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* <img src="/api/placeholder/64/64" alt="Authentic" className="w-8 h-8" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h3 className="text-xl font-serif text-amber-900 mb-2">100% Authentic</h3>
        <p className="text-gray-600">Guaranteed genuine products</p>
      </div>
      <div className="text-center">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* <img src="/api/placeholder/64/64" alt="Shipping" className="w-8 h-8" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
        </div>
        <h3 className="text-xl font-serif text-amber-900 mb-2">Fast Shipping</h3>
        <p className="text-gray-600">Free delivery worldwide</p>
      </div>
      <div className="text-center">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* <img src="/api/placeholder/64/64" alt="Support" className="w-8 h-8" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
        </div>
        <h3 className="text-xl font-serif text-amber-900 mb-2">Expert Support</h3>
        <p className="text-gray-600">24/7 customer service</p>
      </div>
    </div>
  </div>
</div>
  )
}

const VideoSection = () => {
  return(
    
<div className="relative h-[400px] overflow-hidden my-16">
  <video
    autoPlay
    loop
    muted
    className="absolute w-full h-full object-cover"
  >
    <source src="https://v.ftcdn.net/07/57/66/12/700_F_757661265_8TDCNChZ08MjCZ1XiNPv6TfA2UU6yatV_ST.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
    <div>
      <h2 className="text-3xl font-serif mb-4">The Art of Perfumery</h2>
      <p className="max-w-2xl mx-auto mb-6">
        Experience the craftsmanship behind every bottle of our luxurious fragrances
      </p>
    </div>
  </div>
</div>
  )
}

const Testimonials = () => {
  return(
    
<div className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-serif text-amber-900 text-center mb-12">
      What Our Customers Say
    </h2>
    <Carousel
      slides={[
        {
          image: "collection.jpeg",
          title: "Amazing Collection",
          description: "The fragrances are simply amazing. I found my signature scent here!"
        },
        {
          image: "luxury.jpeg",
          title: "Outstanding Service",
          description: "The team helped me find the perfect perfume for my wedding day."
        },
        {
          image: "luxury2.jpeg",
          title: "Luxury Experience",
          description: "Every visit to Essence feels like a luxury experience."
        }
      ]}
    />
  </div>
</div>
  )
}

export default Home;
