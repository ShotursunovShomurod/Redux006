import React from "react";

const Header = () => {
  return (
    <header className="bg-green-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-200 transition duration-300">
            MyBrand
          </a>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
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

        {/* Button */}
        <a
          href="#"
          className="bg-white text-green-500 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
