import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <img src="perfumeLogo.webp" alt="" className='h-16' /> */}
              <Link to="/" className=" text-2xl font-serif text-amber-900 text-center">
                Essence
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-900 hover:text-amber-700">Home</Link>
            <Link to="/products" className="text-amber-900 hover:text-amber-700">Products</Link>
            <Link to="/about" className="text-amber-900 hover:text-amber-700">About</Link>
            <Link to="/contact" className="text-amber-900 hover:text-amber-700">Contact</Link>

          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search perfumes..."
                className="pl-10 pr-4 py-2 border border-amber-200 rounded-full focus:outline-none focus:border-amber-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-amber-400" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Products</Link>
            <Link to="/about" className="block px-3 py-2 text-amber-900 hover:text-amber-700">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;