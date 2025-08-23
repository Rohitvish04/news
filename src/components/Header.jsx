// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X, Home, Info, Briefcase, Mail, Newspaper } from 'lucide-react';

export  const Header = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Simplified nav links based on user request
  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Newspaper className="mr-3 text-blue-600 animate-pulse-slow" size={32} />
          <span className="text-2xl font-bold font-['Inter']">NewsHub</span>
        </div>

        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => handleLinkClick(link.page)}
              className={`font-semibold cursor-pointer transition-colors duration-300 hover:text-blue-600 ${
                currentPage === link.page ? 'text-blue-600' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden bg-gray-50 absolute w-full transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                onClick={() => handleLinkClick(link.page)}
                className={`flex items-center p-4 text-lg cursor-pointer transition-colors duration-300 hover:bg-gray-200 ${
                  currentPage === link.page ? 'text-blue-600 font-bold' : ''
                }`}
              >
                <span className="ml-3">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};