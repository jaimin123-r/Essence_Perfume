import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif">
              Essence
            </Link>
            <p className="text-amber-200 text-sm">
              Discover your perfect scent with our curated collection of luxury
              fragrances.
            </p>
            <div className="flex space-x-4">
              <a href="#">
                {" "}
                <Facebook className=" text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/priyankpatelllll?igsh=MXFueWYwNnFodG83YQ=="
                target="_blank"
              >
                {" "}
                <Instagram className="text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a href="#">
                <Twitter className="text-amber-200 hover:text-white cursor-pointer" />
              </a>
              <a href="#">
                {" "}
                <Youtube className="text-amber-200 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-amber-200 hover:text-white"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-amber-200 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-amber-200">8849813209</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-amber-200">itisessence@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-amber-200">Bavla, Ahmedabad</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-amber-200 text-sm mb-4">
              Subscribe to receive updates about new products and special
              offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-amber-800 text-white placeholder-amber-300 border border-amber-700 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2025 Essence. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-amber-200 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-amber-200 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
