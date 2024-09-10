import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-200 transition duration-300">
            MyBrand
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-gray-200 transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200 transition duration-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-200 transition duration-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-200 transition duration-300">
            Contact
          </a>
        </nav>

        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            {/* Facebook Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            {/* Twitter Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
           
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition duration-300">
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

            </svg>
          </a>
        </div>
      </div>


      <div className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
