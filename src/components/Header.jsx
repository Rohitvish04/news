import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "../assets/logo1.webp"; // <-- import your uploaded logo

export const Header = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Services", page: "services" },
    { name: "Blog", page: "blog" },
    { name: "FAQ", page: "faq" },
    { name: "Contact", page: "contact" },
  ];

  const handleLinkClick = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Site Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="AzamgarhNews Logo"
            className="h-10 w-auto sm:h-12 mr-3"
          />
          <span className="text-xl sm:text-2xl font-bold font-['Inter']">
            AzamgarhNews
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page)}
              className={`font-semibold px-2 py-1 transition duration-300 hover:text-blue-600 ${
                currentPage === link.page ? "text-blue-600" : ""
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleLinkClick(link.page)}
                className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 hover:text-blue-600 ${
                  currentPage === link.page ? "text-blue-600" : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
