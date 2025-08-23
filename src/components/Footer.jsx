 
import {  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export  const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-4 text-center">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Linkedin size={24} />
        </a>
      </div>

      <hr className="border-gray-700 mb-8 max-w-lg mx-auto" />

      {/* Copyright and Credits */}
      <p className="text-sm">&copy; {new Date().getFullYear()} NewsHub. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
    </div>
  </footer>
);